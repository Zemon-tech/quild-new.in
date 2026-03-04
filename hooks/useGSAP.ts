"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function useGSAP(
  setup: (context: { gsap: typeof gsap }) => void | (() => void),
  deps: unknown[] = []
) {
  const cleanupRef = useRef<null | (() => void)>(null);

  useLayoutEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ ease: "power3.out", duration: 0.9 });
      registered = true;
    }

    const cleanup = setup({ gsap });
    cleanupRef.current = typeof cleanup === "function" ? cleanup : null;

    return () => {
      if (typeof cleanupRef.current === "function") cleanupRef.current();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
