"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@/hooks/useGSAP";
import { manifestoPanels } from "@/lib/data/manifesto";

const navStyles = {
  light: {
    logo: "var(--ink)",
    links: "var(--ink)",
    cta: { border: "1px solid var(--ink)", color: "var(--ink)" },
  },
  dark: {
    logo: "#FFFFFF",
    links: "#FFFFFF",
    cta: { border: "1px solid rgba(255,255,255,0.6)", color: "#FFFFFF" },
  },
} as const;

export default function Navbar() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navTheme, setNavTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  // ── Nav theme based on page sections ─────────────────────────────────────
  useEffect(() => {
    // Default to light (black elements) for all pages/sections
    // except for the landing page which always starts with Hero
    const initialTheme = pathname === "/" || pathname === "/blog" ? "dark" : "light";
    setNavTheme(initialTheme);

    let killed = false;
    const createdTriggers: Array<{ kill: () => void }> = [];

    (async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed) return;

      // Handle Hero section theme
      const hero = document.getElementById("hero");
      if (hero) {
        createdTriggers.push(ScrollTrigger.create({
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          onEnter: () => setNavTheme("dark"),
          onLeave: () => setNavTheme("light"),
          onEnterBack: () => setNavTheme("dark"),
          onLeaveBack: () => setNavTheme("dark"), // when scrolled above hero, stay dark
        }));
      }

      // Blog hero theme (dark until scrolled past)
      const blogHero = document.getElementById("blog-hero");
      if (blogHero) {
        createdTriggers.push(ScrollTrigger.create({
          trigger: "#blog-hero",
          start: "top top",
          end: "bottom top",
          onEnter: () => setNavTheme("dark"),
          onLeave: () => setNavTheme("light"),
          onEnterBack: () => setNavTheme("dark"),
          onLeaveBack: () => setNavTheme("dark"),
        }));
      }

      // Handle Manifesto section theme if present on the page
      const manifesto = document.getElementById("manifesto");
      if (manifesto) {
        createdTriggers.push(ScrollTrigger.create({
          trigger: "#manifesto",
          start: "top top",
          end: `+=${manifestoPanels.length * 100}%`,
          onEnter: () => setNavTheme("dark"), // White elements
          onLeave: () => setNavTheme("light"), // Black elements
          onEnterBack: () => setNavTheme("dark"),
          onLeaveBack: () => setNavTheme("light"),
        }));
      }
    })();

    return () => {
      killed = true;
      createdTriggers.forEach((t) => t.kill());
    };
  }, [pathname]);

  // ── Mobile menu open animation ────────────────────────────────────────────
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useGSAP(({ gsap }: { gsap: any }) => {
    if (!mobileOpen) return;
    const overlay = overlayRef.current;
    if (!overlay) return;

    const links = overlay.querySelectorAll("[data-mobile-link]");
    const tl = gsap.timeline();

    tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" })
      .fromTo(links, { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, duration: 0.5, ease: "power3.out" }, "-=0.15");

    return () => tl.kill();
  }, [mobileOpen]);

  // ── Escape key closes mobile menu ─────────────────────────────────────────
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  // ── Lock body scroll when mobile menu open ────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const theme = navStyles[navTheme];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
          background: "transparent",
          backdropFilter: "none",
          borderBottom: "none",
          padding: "0 2rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="mx-auto grid h-full w-full max-w-[1280px] grid-cols-12 items-center px-8">

          {/* Logo */}
          <div className="col-span-6 md:col-span-3">
            <Link
              href="/"
              className="font-display text-[1.2rem] font-semibold tracking-[0.05em]"
              style={{
                color: mobileOpen ? "#FFFFFF" : theme.logo,
                transition: "color 0.4s ease",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Image
                src="/logo.svg"
                alt="Quild logo"
                width={28}
                height={28}
                style={{
                  filter:
                    mobileOpen || navTheme === "dark"
                      ? "brightness(0) invert(1)"
                      : "brightness(0)",
                  transition: "filter 0.4s ease",
                }}
                priority
              />
              Quild
            </Link>
          </div>

          {/* Desktop nav links */}
          <nav className="col-span-6 hidden items-center justify-center gap-8 text-sm md:flex">
            {[
              { href: "/about", label: "About" },
              { href: "/programs", label: "Programs" },
              { href: "/community", label: "Community" },
              { href: "/events", label: "Events" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="nav-link"
                style={{
                  color: theme.links,
                  transition: "color 0.4s ease",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile menu toggle */}
          <div className="col-span-6 flex items-center justify-end gap-3 md:col-span-3">
            {/* Desktop apply button */}
            <Button
              asChild
              variant="outline"
              className="hidden rounded-none font-medium md:inline-flex bg-transparent"
              style={{
                border: theme.cta.border,
                color: theme.cta.color,
                transition: "color 0.4s ease, border-color 0.4s ease",
              }}
            >
              <Link href="/apply">APPLY NOW →</Link>
            </Button>

            {/* Mobile menu toggle — single button, no duplicate close */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="flex md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              style={{
                fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                border: `1px solid ${mobileOpen ? "rgba(255,255,255,0.5)" : "currentColor"}`,
                padding: "0.4rem 0.75rem",
                background: "transparent",
                cursor: "pointer",
                color: mobileOpen ? "#FFFFFF" : theme.links,
                transition: "color 0.4s ease, border-color 0.4s ease",
                position: "relative",
                zIndex: 201, // above overlay so it stays clickable
              }}
            >
              {mobileOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay menu ── */}
      {mobileOpen && (
        <div
          ref={overlayRef}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "var(--void)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "5rem 2.5rem 3rem",
            opacity: 0, // starts invisible, GSAP animates in
          }}
        >
          {/* Nav links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { href: "/about", label: "About" },
              { href: "/programs", label: "Programs" },
              { href: "/community", label: "Community" },
              { href: "/events", label: "Events" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                data-mobile-link
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  lineHeight: 1,
                  display: "block",
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Apply CTA */}
          <Link
            data-mobile-link
            href="/apply"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: "3rem",
              fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
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
      )}
    </>
  );
}