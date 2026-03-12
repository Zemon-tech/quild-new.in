"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { useGSAP } from "@/hooks/useGSAP";

function splitIntoLines(text: string) {
  return text.split("\n").map((l) => l.trim()).filter(Boolean);
}

export default function AboutHero() {
  const isMobile = useIsMobile();

  const rootRef = useRef<HTMLDivElement | null>(null);
  const lines = useMemo(
    () => splitIntoLines("We exist for the builder\nin everyone."),
    []
  );

  // Notify navbar to use dark theme (white text)
  useEffect(() => {
    const setNavDark = () => {
      const event = new CustomEvent("about-hero-nav", { detail: { theme: "dark" } });
      window.dispatchEvent(event);
    };
    setNavDark();

    const onScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      if (scrollY > heroHeight * 0.8) {
        const event = new CustomEvent("about-hero-nav", { detail: { theme: "light" } });
        window.dispatchEvent(event);
      } else {
        setNavDark();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(
    ({ gsap }) => {
      const root = rootRef.current;
      if (!root) return;

      const q = gsap.utils.selector(root);

      gsap.set(q("[data-reveal-line]"), {
        yPercent: 100,
        clipPath: "inset(0 0 100% 0)",
      });

      const tl = gsap.timeline();

      tl.to(q("[data-reveal-line]"), {
        yPercent: 0,
        clipPath: "inset(0 0 0% 0)",
        stagger: 0.1,
        duration: 0.9,
      }).fromTo(
        q("[data-load]"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1 },
        "-=0.4"
      );

      return () => {
        tl.kill();
      };
    },
    []
  );

  return (
    <section
      id="about-hero"
      className="relative w-full overflow-hidden border-b border-white/10"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about.png"
          alt="About hero"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Noise grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            opacity: 0.03,
          }}
        />
      </div>

      {/* ── Inner grid wrapper ── */}
      <div
        ref={rootRef}
        className="relative z-10 mx-auto grid h-full min-h-[100svh] w-full max-w-[1280px] grid-cols-12 px-8"
        style={
          isMobile
            ? {
              width: "100vw",
              maxWidth: "100vw",
              paddingLeft: 0,
              paddingRight: 0,
              marginLeft: 0,
              marginRight: 0,
            }
            : undefined
        }
      >
        {/* ── Left content column (8/12 desktop, full mobile) ── */}
        <div
          className="col-span-12 flex flex-col justify-center pt-[120px] pb-10 md:col-span-8"
          style={
            isMobile
              ? {
                width: "100%",
                padding: "0 1.5rem",
                paddingTop: "7rem",
                paddingBottom: "3rem",
              }
              : undefined
          }
        >
          {/* Eyebrow */}
          <div
            data-load
            className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/75"
            style={
              isMobile
                ? {
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                }
                : undefined
            }
          >
            ABOUT QUILD
          </div>

          {/* Headline */}
          <div className="mt-8 overflow-hidden">
            <h1
              className="text-[clamp(3.8rem,7.5vw,8rem)] font-semibold leading-[0.92] tracking-[-0.02em] text-white"
              style={
                isMobile
                  ? {
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    textShadow: "0 4px 40px rgba(0, 0, 0, 0.25)",
                    fontSize: "clamp(2.8rem, 10vw, 4rem)",
                    lineHeight: 0.95,
                  }
                  : {
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  }
              }
            >
              {lines.map((line) => (
                <span key={line} className="block overflow-hidden">
                  <span data-reveal-line className="block will-change-transform">
                    {line}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          {/* Supporting paragraph */}
          <p
            data-load
            className="mt-8 max-w-[520px] text-[1.1rem] leading-[1.75] text-white/80"
            style={
              isMobile
                ? {
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  maxWidth: "100%",
                  marginTop: "1.25rem",
                }
                : { fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }
            }
          >
            Quild is a selective community for students, founders, and engineers building
            with AI. We started in Delhi. We&apos;re expanding everywhere.
          </p>
        </div>

        {/* ── Right decorative column (4/12 desktop only) ── */}
        <div
          className="col-span-12 hidden flex-col items-end justify-end pb-10 md:col-span-4 md:flex"
          style={isMobile ? { display: "none" } : undefined}
        >
          {/* Rotated vertical label */}
          <div
            className="origin-top-right -rotate-90 whitespace-nowrap mt-30"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            COMMUNITY → FOUNDERS → ENGINEERS → AND BEYOND
          </div>

          {/* Bracketed chapter tag at bottom-right */}
          <div className="mt-auto">
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "white",
                border: "1px solid var(--sage)",
                padding: "0.25rem 0.5rem",
                display: "inline-block",
              }}
            >
              [ CHAPTER 01 — OUR STORY ]
            </span>
          </div>
        </div>

        {/* ── Bottom ticker bar ── */}
        <div className="col-span-12 mt-auto border-t border-white/20 py-6">
          <div
            className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/65"
            style={
              isMobile
                ? {
                  fontSize: "0.6rem",
                  letterSpacing: "0.08em",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }
                : undefined
            }
          >
            SMALL BY CHOICE&nbsp;&nbsp;/&nbsp;&nbsp;SERIOUS BY DEFAULT&nbsp;&nbsp;/&nbsp;&nbsp;BUILDING WITH AI&nbsp;&nbsp;/&nbsp;&nbsp;STARTING WITH DELHI
          </div>
        </div>
      </div>

      
    </section>
  );
}
