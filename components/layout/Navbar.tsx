"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@/hooks/useGSAP";

export default function Navbar() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideOnFooter, setHideOnFooter] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const navColor = mobileOpen ? "#FFFFFF" : (isAtTop ? "#FFFFFF" : "var(--ink)");
  const ctaBorder = mobileOpen ? "1px solid rgba(255,255,255,0.7)" : (isAtTop ? "1px solid rgba(255,255,255,0.7)" : "1px solid var(--ink)");

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

  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY <= 2);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideOnFooter(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.01 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hideOnFooter) setMobileOpen(false);
  }, [hideOnFooter]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
          backdropFilter: "none",
          backgroundColor: "transparent",
          borderTop: "none",
          outline: "none",
          boxShadow: "none",
          padding: "0 2rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background-color 0.2s ease, opacity 0.25s ease, transform 0.25s ease",
          opacity: hideOnFooter ? 0 : 1,
          transform: hideOnFooter ? "translateY(-12px)" : "translateY(0px)",
          pointerEvents: hideOnFooter ? "none" : "auto",
        }}
      >
        <div className="mx-auto grid h-full w-full max-w-[1280px] grid-cols-12 items-center px-8">

          {/* Logo */}
          <div className="col-span-6 md:col-span-3">
            <Link
              href="/"
              className="font-display text-[1.2rem] font-semibold tracking-[0.05em]"
              style={{
                color: navColor,
                transition: "color 0.2s ease",
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
                    navColor === "#FFFFFF" ? "brightness(0) invert(1)" : "brightness(0)",
                  transition: "filter 0.2s ease",
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
                  color: navColor,
                  transition: "color 0.2s ease",
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
                border: ctaBorder,
                color: navColor,
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
            >
              <Link href="/apply">JOIN NOW →</Link>
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
                border: `1px solid ${mobileOpen ? "rgba(255,255,255,0.5)" : (isAtTop ? "rgba(255,255,255,0.7)" : "currentColor")}`,
                padding: "0.4rem 0.75rem",
                background: "transparent",
                cursor: "pointer",
                color: navColor,
                transition: "color 0.2s ease, border-color 0.2s ease",
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
            JOIN NOW →
          </Link>
        </div>
      )}
    </>
  );
}