"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@/hooks/useGSAP";

const navStyles = {
  light: {
    logo: "var(--ink)",
    links: "var(--ink)",
    cta: { border: "1px solid var(--ink)", color: "var(--ink)" },
    borderBottom: "rgba(0,0,0,0.1)",
  },
  dark: {
    logo: "#FFFFFF",
    links: "#FFFFFF",
    cta: { border: "1px solid rgba(255,255,255,0.6)", color: "#FFFFFF" },
    borderBottom: "rgba(255,255,255,0.15)",
  },
} as const;

export default function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navTheme, setNavTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHomepage) {
      setNavTheme("light");
      return;
    }

    let killed = false;

    (async () => {
      const mod = await import("gsap/ScrollTrigger");
      if (killed) return;
      const ScrollTrigger = mod.ScrollTrigger;

      ScrollTrigger.create({
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        onEnter: () => setNavTheme("light"),
        onLeave: () => setNavTheme("light"),
        onEnterBack: () => setNavTheme("light"),
        onLeaveBack: () => setNavTheme("light"),
      });

      ScrollTrigger.create({
        trigger: "#honest-statement",
        start: "top top",
        end: "bottom top",
        onEnter: () => setNavTheme("light"),
        onLeave: () => setNavTheme("light"),
        onEnterBack: () => setNavTheme("light"),
        onLeaveBack: () => setNavTheme("light"),
      });

      ScrollTrigger.create({
        trigger: "#manifesto",
        start: "top top",
        end: "bottom top",
        onEnter: () => setNavTheme("dark"),
        onLeave: () => setNavTheme("light"),
        onEnterBack: () => setNavTheme("dark"),
        onLeaveBack: () => setNavTheme("light"),
      });
    })();

    return () => {
      killed = true;
    };
  }, [isHomepage]);

  useGSAP(
    (ctx: { gsap: Parameters<typeof useGSAP>[0] extends (c: infer C) => any ? C extends { gsap: infer G } ? G : never : never }) => {
      if (!mobileOpen) return;
      const overlay = overlayRef.current;
      if (!overlay) return;

      const q = ctx.gsap.utils.selector(overlay);
      const links = q("[data-mobile-link]");
      const tl = ctx.gsap.timeline();

      tl.fromTo(
        overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 }
      ).fromTo(
        links,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1 },
        "-=0.15"
      );

      return () => tl.kill();
    },
    [mobileOpen]
  );

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        background: "transparent",
        backdropFilter: "none",
        borderBottom: "none",
        transition: "border-color 0.4s ease",
        padding: "0 2rem",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="mx-auto grid h-full w-full max-w-[1280px] grid-cols-12 items-center px-8">
        <div className="col-span-6 md:col-span-3">
          <Link
            href="/"
            className="font-display text-[1.2rem] font-semibold tracking-[0.12em]"
            style={{
              color: navStyles[navTheme].logo,
              transition: "color 0.4s ease, border-color 0.4s ease",
            }}
          >
            QUILD
          </Link>
        </div>

        <nav className="col-span-6 hidden items-center justify-center gap-8 text-sm md:flex">
          <Link
            className="nav-link"
            href="/about"
            style={{
              color: navStyles[navTheme].links,
              transition: "color 0.4s ease, border-color 0.4s ease",
            }}
          >
            About
          </Link>
          <Link
            className="nav-link"
            href="/programs"
            style={{
              color: navStyles[navTheme].links,
              transition: "color 0.4s ease, border-color 0.4s ease",
            }}
          >
            Programs
          </Link>
          <Link
            className="nav-link"
            href="/community"
            style={{
              color: navStyles[navTheme].links,
              transition: "color 0.4s ease, border-color 0.4s ease",
            }}
          >
            Community
          </Link>
          <Link
            className="nav-link"
            href="/events"
            style={{
              color: navStyles[navTheme].links,
              transition: "color 0.4s ease, border-color 0.4s ease",
            }}
          >
            Events
          </Link>
          <Link
            className="nav-link"
            href="/blog"
            style={{
              color: navStyles[navTheme].links,
              transition: "color 0.4s ease, border-color 0.4s ease",
            }}
          >
            Blog
          </Link>
        </nav>

        <div className="col-span-6 flex items-center justify-end gap-3 md:col-span-3">
          <Button
            asChild
            variant="outline"
            className="hidden rounded-none font-medium md:inline-flex bg-transparent"
            style={{
              border: navStyles[navTheme].cta.border,
              color: navStyles[navTheme].cta.color,
              transition: "color 0.4s ease, border-color 0.4s ease",
            }}
          >
            <Link href="/apply">APPLY NOW →</Link>
          </Button>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-none border md:hidden"
            style={{
              border:
                navTheme === "dark"
                  ? "1px solid rgba(255,255,255,0.6)"
                  : "1px solid var(--border)",
              color: navStyles[navTheme].links,
              transition: "color 0.4s ease, border-color 0.4s ease",
            }}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              className="font-mono text-xs tracking-[0.15em]"
              style={{
                color: navStyles[navTheme].links,
                transition: "color 0.4s ease, border-color 0.4s ease",
              }}
            >
              {mobileOpen ? "CLOSE" : "MENU"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div ref={overlayRef} className="fixed inset-0 z-[110] bg-[var(--void)] opacity-0">
          <div className="mx-auto flex h-full w-full max-w-[1280px] flex-col px-8 py-6">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="font-display text-[1.2rem] font-semibold tracking-[0.12em] text-white"
                onClick={() => setMobileOpen(false)}
              >
                QUILD
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-none border border-white/20"
                onClick={() => setMobileOpen(false)}
              >
                <span className="font-mono text-xs tracking-[0.15em] text-white">CLOSE</span>
              </button>
            </div>

            <div className="mt-16 flex flex-col gap-6">
              <Link
                data-mobile-link
                className="font-display text-4xl font-semibold leading-[1] text-white"
                href="/about"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                data-mobile-link
                className="font-display text-4xl font-semibold leading-[1] text-white"
                href="/programs"
                onClick={() => setMobileOpen(false)}
              >
                Programs
              </Link>
              <Link
                data-mobile-link
                className="font-display text-4xl font-semibold leading-[1] text-white"
                href="/community"
                onClick={() => setMobileOpen(false)}
              >
                Community
              </Link>
              <Link
                data-mobile-link
                className="font-display text-4xl font-semibold leading-[1] text-white"
                href="/events"
                onClick={() => setMobileOpen(false)}
              >
                Events
              </Link>
              <Link
                data-mobile-link
                className="font-display text-4xl font-semibold leading-[1] text-white"
                href="/blog"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>
            </div>

            <div className="mt-auto pt-10">
              <Button
                asChild
                className="w-full rounded-none bg-[var(--sage)] text-white hover:bg-[var(--sage)]"
              >
                <Link href="/apply" onClick={() => setMobileOpen(false)}>
                  APPLY NOW →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
