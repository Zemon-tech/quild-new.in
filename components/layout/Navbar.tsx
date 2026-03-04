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
        onLeave: () => setNavTheme("dark"),
        onEnterBack: () => setNavTheme("dark"),
        onLeaveBack: () => setNavTheme("dark"),
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
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08 },
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
            className="flex md:hidden"
            style={{
              fontFamily:
                "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              border: "1px solid currentColor",
              padding: "0.4rem 0.75rem",
              background: "transparent",
              cursor: "pointer",
              color: "inherit",
              transition: "color 0.4s ease, border-color 0.4s ease",
            }}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span style={{ color: navStyles[navTheme].links }}>
              {mobileOpen ? "CLOSE" : "MENU"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[200] opacity-0"
          style={{
            background: "var(--void)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "3rem 2rem",
          }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              fontFamily:
                "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.6)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            CLOSE
          </button>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem" }}>
              <Link
                href="/"
                className="font-display text-[1.2rem] font-semibold tracking-[0.12em] text-white"
                onClick={() => setMobileOpen(false)}
              >
                QUILD
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <Link
                data-mobile-link
                className="text-white"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                  textDecoration: "none",
                  lineHeight: 1,
                }}
                href="/about"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                data-mobile-link
                className="text-white"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                  textDecoration: "none",
                  lineHeight: 1,
                }}
                href="/programs"
                onClick={() => setMobileOpen(false)}
              >
                Programs
              </Link>
              <Link
                data-mobile-link
                className="text-white"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                  textDecoration: "none",
                  lineHeight: 1,
                }}
                href="/community"
                onClick={() => setMobileOpen(false)}
              >
                Community
              </Link>
              <Link
                data-mobile-link
                className="text-white"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                  textDecoration: "none",
                  lineHeight: 1,
                }}
                href="/events"
                onClick={() => setMobileOpen(false)}
              >
                Events
              </Link>
              <Link
                data-mobile-link
                className="text-white"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                  textDecoration: "none",
                  lineHeight: 1,
                }}
                href="/blog"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>
            </div>

            <Link
              data-mobile-link
              href="/apply"
              onClick={() => setMobileOpen(false)}
              style={{
                marginTop: "3rem",
                fontFamily:
                  "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "var(--sage)",
                border: "1px solid var(--sage)",
                padding: "1rem 1.5rem",
                display: "inline-block",
                width: "fit-content",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              APPLY NOW →
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
