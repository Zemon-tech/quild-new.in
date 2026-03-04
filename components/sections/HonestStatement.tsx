"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";

// SVG Icons for collage cards
const GridIcon = () => (
  <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="10" height="10" rx="1" fill="rgba(255,255,255,0.3)"/>
    <rect x="18" y="4" width="10" height="10" rx="1" fill="rgba(255,255,255,0.3)"/>
    <rect x="4" y="18" width="10" height="10" rx="1" fill="rgba(255,255,255,0.3)"/>
    <rect x="18" y="18" width="10" height="10" rx="1" fill="rgba(255,255,255,0.3)"/>
  </svg>
);

const LinesIcon = () => (
  <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="20" height="2" rx="1" fill="rgba(255,255,255,0.4)"/>
    <rect x="6" y="13" width="16" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
    <rect x="6" y="18" width="18" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
    <rect x="6" y="23" width="12" height="2" rx="1" fill="rgba(255,255,255,0.2)"/>
  </svg>
);

const NetworkIcon = () => (
  <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="10" r="3" fill="rgba(255,255,255,0.5)"/>
    <circle cx="10" cy="20" r="3" fill="rgba(255,255,255,0.3)"/>
    <circle cx="22" cy="20" r="3" fill="rgba(255,255,255,0.3)"/>
    <line x1="16" y1="13" x2="10" y2="17" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
    <line x1="16" y1="13" x2="22" y2="17" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
    <line x1="10" y1="23" x2="22" y2="23" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
  </svg>
);

const BracesIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="32" y="42" textAnchor="middle" fontFamily="monospace" fontSize="36" fill="rgba(255,255,255,0.3)">{ }</text>
  </svg>
);

// Marquee items
const marqueeItems = [
  "TeamFlow — built by Quild builders",
  "Compose — WYSIWYG editor, shipped",
  "Perplx — agentic AI research system",
  "Small team. Real products.",
  "We build what we teach",
  "Development → Design → Product → Beyond",
  "Cohort 01 — now open",
  "Join the builders",
];

export default function HonestStatement() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);
  const card4Ref = useRef<HTMLDivElement | null>(null);
  const card5Ref = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  useGSAP(
    ({ gsap }) => {
      const section = sectionRef.current;
      const leftCol = leftColRef.current;
      const card1 = card1Ref.current;
      const card2 = card2Ref.current;
      const card3 = card3Ref.current;
      const card4 = card4Ref.current;
      const card5 = card5Ref.current;

      if (!section || !leftCol || !card1 || !card2 || !card3 || !card4 || !card5) return;

      const leftElements = leftCol.querySelectorAll("[data-animate]");

      // Left column text stagger
      const leftTween = gsap.fromTo(
        leftElements,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );

      // Cards stagger in
      const cardTweens = [
        gsap.fromTo(
          card1,
          { y: 60, opacity: 0, rotation: 0 },
          {
            y: 0,
            opacity: 1,
            rotation: -2.5,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          }
        ),
        gsap.fromTo(
          card2,
          { y: 60, opacity: 0, rotation: 0 },
          {
            y: 0,
            opacity: 1,
            rotation: 1.8,
            duration: 1,
            delay: 0.1,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          }
        ),
        gsap.fromTo(
          card3,
          { y: 60, opacity: 0, rotation: 0 },
          {
            y: 0,
            opacity: 1,
            rotation: -1.2,
            duration: 1,
            delay: 0.2,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          }
        ),
        gsap.fromTo(
          card4,
          { y: 60, opacity: 0, rotation: 0 },
          {
            y: 0,
            opacity: 1,
            rotation: 3,
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          }
        ),
        gsap.fromTo(
          card5,
          { y: 60, opacity: 0, rotation: 0 },
          {
            y: 0,
            opacity: 1,
            rotation: -3.5,
            duration: 1,
            delay: 0.4,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          }
        ),
      ];

      // Hover interactions
      const cards = [card1, card2, card3, card4, card5];
      const originalRotations = [-2.5, 1.8, -1.2, 3, -3.5];

      cards.forEach((card, index) => {
        const originalRotation = originalRotations[index];

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -8, rotation: 0, duration: 0.3, ease: "power2.out" });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, rotation: originalRotation, duration: 0.4, ease: "power2.out" });
        });
      });

      return () => {
        leftTween.scrollTrigger?.kill();
        leftTween.kill();
        cardTweens.forEach((t) => {
          t.scrollTrigger?.kill();
          t.kill();
        });
      };
    },
    []
  );

  const collageCardStyle = {
    position: "absolute" as const,
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
    zIndex: 2,
    cursor: "pointer",
  };

  return (
    <section
      id="honest-statement"
      ref={sectionRef}
      className="min-h-screen bg-[var(--bg)] pt-28 border-t border-[var(--border)]"
    >
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Main two-column content */}
      <div className="mx-auto w-full max-w-[1280px] px-8 pb-16">
        <div
          className="grid grid-cols-12 gap-8"
          style={
            isMobile
              ? {
                  display: "flex",
                  flexDirection: "column",
                  gap: "3rem",
                }
              : undefined
          }
        >
          {/* Left Column - 5/12 Text */}
          <div
            ref={leftColRef}
            className="col-span-12 md:col-span-5 pr-16"
            style={
              isMobile
                ? {
                    width: "100%",
                    paddingRight: 0,
                  }
                : undefined
            }
          >
            <div data-animate className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)]">
              WHERE WE STAND
            </div>

            <p data-animate className="mt-8 text-[1.15rem] leading-[1.85] text-[var(--ink)]">
              We&apos;re not a big organization. We don&apos;t have a
              decade of alumni or a famous investor backing us.
              <br /><br />
              We&apos;re a small group of builders who got tired of
              watching talented people stay stuck because they
              were afraid of AI — or didn&apos;t know where to start.
              <br /><br />
              <span className="font-medium">So we built the room we wished existed.</span>
            </p>

            <div data-animate className="mt-10 h-px w-full bg-[var(--border)]" />

            <div
              data-animate
              className="mt-10 grid grid-cols-12 gap-6"
              style={
                isMobile
                  ? {
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }
                  : undefined
              }
            >
              <div className="col-span-12 md:col-span-6">
                <p className="font-display text-[1.3rem] leading-[1.4] text-[var(--ink)]">
                  &ldquo;We started with software development.&rdquo;
                </p>
              </div>
              <div className="col-span-12 md:col-span-6">
                <p className="text-[0.95rem] leading-[1.75] text-[var(--muted)]">
                  &ldquo;We&apos;re expanding into every field where builders need to grow.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - 7/12 Collage */}
          <div className="col-span-12 md:col-span-7">
            <div
              className="relative h-[440px]"
              style={
                isMobile
                  ? {
                      height: "320px",
                      position: "relative",
                      overflow: "hidden",
                    }
                  : undefined
              }
            >
              {/* Card 1 — TeamFlow (largest, anchors the collage) */}
              <div
                ref={card1Ref}
                className="flex items-center justify-center"
                style={{
                  ...collageCardStyle,
                  width: isMobile ? "160px" : "260px",
                  height: isMobile ? "120px" : "200px",
                  top: isMobile ? "20px" : "20px",
                  left: isMobile ? "10px" : "20px",
                  transform: isMobile ? "rotate(-2deg)" : "rotate(-2.5deg)",
                  background: "linear-gradient(135deg, #8FA893 0%, #4A5C4E 100%)",
                }}
              >
                <GridIcon />
              </div>

              {/* Card 2 — Compose editor (tall, portrait) */}
              <div
                ref={card2Ref}
                className="flex items-center justify-center"
                style={{
                  ...collageCardStyle,
                  width: isMobile ? "120px" : "180px",
                  height: isMobile ? "150px" : "240px",
                  top: isMobile ? "40px" : "60px",
                  left: isMobile ? "160px" : "220px",
                  transform: isMobile ? "rotate(1.5deg)" : "rotate(1.8deg)",
                  background: "linear-gradient(160deg, #E8E4DC 0%, #C4BFB2 100%)",
                }}
              >
                <LinesIcon />
              </div>

              {/* Card 3 — Perplx AI (dark, square) */}
              <div
                ref={card3Ref}
                className="flex items-center justify-center"
                style={{
                  ...collageCardStyle,
                  width: isMobile ? "130px" : "200px",
                  height: isMobile ? "130px" : "200px",
                  top: isMobile ? "15px" : "10px",
                  left: isMobile ? "270px" : "360px",
                  transform: isMobile ? "rotate(-1deg)" : "rotate(-1.2deg)",
                  background: "linear-gradient(135deg, #1C2820 0%, #2E3D32 100%)",
                }}
              >
                <NetworkIcon />
              </div>

              {/* Card 4 — abstract texture card (no project label, pure visual) */}
              <div
                ref={card4Ref}
                style={{
                  ...collageCardStyle,
                  width: isMobile ? "100px" : "150px",
                  height: isMobile ? "110px" : "170px",
                  top: isMobile ? "170px" : "240px",
                  left: isMobile ? "30px" : "60px",
                  transform: isMobile ? "rotate(2.5deg)" : "rotate(3deg)",
                  background: "linear-gradient(135deg, #D4D0C8 0%, #EFEFEB 100%)",
                }}
              >
                <div
                  className="w-full h-full opacity-50"
                  style={{
                    backgroundImage: `radial-gradient(circle, var(--border) 1px, transparent 1px)`,
                    backgroundSize: "8px 8px",
                  }}
                />
              </div>

              {/* Card 5 — small accent card (sage solid) */}
              <div
                ref={card5Ref}
                className="flex items-center justify-center"
                style={{
                  ...collageCardStyle,
                  width: isMobile ? "90px" : "130px",
                  height: isMobile ? "90px" : "130px",
                  top: isMobile ? "175px" : "260px",
                  left: isMobile ? "220px" : "340px",
                  transform: isMobile ? "rotate(-3deg)" : "rotate(-3.5deg)",
                  background: "var(--sage)",
                }}
              >
                <BracesIcon />
              </div>

              {/* Handwritten annotation */}
              <div
                className="absolute z-[3] font-display italic text-[0.85rem] text-[var(--muted)]"
                style={{
                  bottom: isMobile ? "8px" : "20px",
                  right: isMobile ? "8px" : "0px",
                  transform: "rotate(-1deg)",
                  fontSize: isMobile ? "0.72rem" : undefined,
                }}
              >
                things we shipped while building Quild →
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee — Transparent Background */}
      <div
        className="border-t border-[var(--border)] bg-transparent py-[14px] overflow-hidden whitespace-nowrap mt-16"
      >
        <div
          className="inline-flex"
          style={{
            animation: "marquee 28s linear infinite",
            gap: "0",
          }}
        >
          {/* Render items twice for seamless loop */}
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-[var(--ink)] pr-12"
              style={
                isMobile
                  ? {
                      fontSize: "0.62rem",
                      letterSpacing: "0.08em",
                    }
                  : undefined
              }
            >
              {item}
              <span className="text-[var(--sage)] mx-6">×</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
