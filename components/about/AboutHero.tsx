"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { useGSAP } from "@/hooks/useGSAP";

export default function AboutHero() {
  const isMobile = useIsMobile();

  const heroHeadlineRef = useRef<HTMLHeadingElement | null>(null);
  const heroSubtextRef = useRef<HTMLParagraphElement | null>(null);
  const scrollLineRef = useRef<HTMLDivElement | null>(null);

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
      const headline = heroHeadlineRef.current;
      const subtext = heroSubtextRef.current;
      const scrollLine = scrollLineRef.current;

      const timelines: Array<{ kill: () => void }> = [];

      // Scroll indicator bounce
      if (scrollLine) {
        const t = gsap.to(scrollLine, {
          y: 8,
          repeat: -1,
          yoyo: true,
          duration: 0.8,
          ease: "power1.inOut",
        });
        timelines.push(t);
      }

      // Headline clip reveal
      if (headline) {
        const lineWraps = Array.from(headline.querySelectorAll("[data-hero-line]"));
        if (lineWraps.length > 0) {
          gsap.set(lineWraps, { clipPath: "inset(0 0 100% 0)" });
          const t = gsap.to(lineWraps, {
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
          });
          timelines.push(t);
        }
      }

      // Subtext fade up
      if (subtext) {
        const t = gsap.fromTo(
          subtext,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, delay: 0.2, ease: "power2.out" }
        );
        timelines.push(t);
      }

      return () => {
        timelines.forEach((t) => t.kill());
      };
    },
    [isMobile]
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
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            ABOUT QUILD
          </div>

          {/* Headline */}
          <h1
            ref={heroHeadlineRef}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: isMobile
                ? "clamp(2.5rem, 9vw, 3.5rem)"
                : "clamp(3.5rem, 6vw, 7rem)",
              lineHeight: isMobile ? 0.95 : 0.92,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              textShadow: "0 2px 40px rgba(0,0,0,0.2)",
            }}
          >
            <span style={{ display: "block", overflow: "hidden" }}>
              <span data-hero-line style={{ display: "block" }}>
                We exist for the builder
              </span>
            </span>
            <span style={{ display: "block", overflow: "hidden" }}>
              <span data-hero-line style={{ display: "block" }}>
                in everyone.
              </span>
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p
            ref={heroSubtextRef}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: isMobile ? "0.95rem" : "1.1rem",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.75,
              maxWidth: isMobile ? "100%" : "520px",
              marginTop: "1.5rem",
            }}
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
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: isMobile ? "0.6rem" : "0.7rem",
              letterSpacing: isMobile ? "0.08em" : "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              whiteSpace: isMobile ? "nowrap" : undefined,
              overflow: isMobile ? "hidden" : undefined,
            }}
          >
            SMALL BY CHOICE&nbsp;&nbsp;/&nbsp;&nbsp;SERIOUS BY DEFAULT&nbsp;&nbsp;/&nbsp;&nbsp;BUILDING WITH AI&nbsp;&nbsp;/&nbsp;&nbsp;STARTING WITH DELHI
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        style={{
          position: "absolute",
          bottom: "5rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.62rem",
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 20,
        }}
      >
        SCROLL
        <div
          ref={scrollLineRef}
          style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.3)" }}
        />
      </div>
    </section>
  );
}
