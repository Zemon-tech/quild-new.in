"use client";

import {useEffect, useRef} from "react";
import Lenis from "lenis";

type LenisProviderProps = {
  children: React.ReactNode;
};

export default function LenisProvider({children}: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      infinite: false,
    });

    let killed = false;

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };

    const isIOS =
      typeof navigator !== "undefined" &&
      /iP(ad|hone|od)/.test(navigator.userAgent);

    let restoreBodyOverflow: string | null = null;
    let restoreHtmlOverflow: string | null = null;
    let restoreBodyWebkit: string | null = null;

    const preventBounce = (e: TouchEvent) => {
      if (window.scrollY <= 0) e.preventDefault();

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll) e.preventDefault();
    };

    if (isIOS) {
      const html = document.documentElement;
      const body = document.body;

      restoreHtmlOverflow = html.style.overflow;
      restoreBodyOverflow = body.style.overflow;
      restoreBodyWebkit = (body.style as any).webkitOverflowScrolling ?? null;

      html.style.overflow = "hidden";
      body.style.overflow = "auto";
      (body.style as any).webkitOverflowScrolling = "touch";

      window.addEventListener("touchmove", preventBounce, {passive: false});
    }

    (async () => {
      const {ScrollTrigger} = await import("gsap/ScrollTrigger");
      if (killed) return;
      (lenis as unknown as {on?: (event: string, cb: () => void) => void}).on?.(
        "scroll",
        () => ScrollTrigger.update()
      );
      ScrollTrigger.refresh();
    })();

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      killed = true;
      if (isIOS) {
        window.removeEventListener("touchmove", preventBounce);
        document.documentElement.style.overflow = restoreHtmlOverflow ?? "";
        document.body.style.overflow = restoreBodyOverflow ?? "";
        if (restoreBodyWebkit == null) {
          delete (document.body.style as any).webkitOverflowScrolling;
        } else {
          (document.body.style as any).webkitOverflowScrolling = restoreBodyWebkit;
        }
      }
      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return children;
}
