"use client";

import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { useGSAP } from "@/hooks/useGSAP";

const fallbackBg = "linear-gradient(135deg, #2C3A30 0%, #4A5C4E 40%, #3D4A35 100%)";

export default function AboutBelief() {
  const isMobile = useIsMobile();

  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLImageElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const closingRef = useRef<HTMLDivElement | null>(null);

  useGSAP(({ gsap }) => {
    const section = sectionRef.current;
    const triggers: Array<{ kill: () => void }> = [];

    // Ken Burns on image
    if (bgRef.current) {
      const st = ScrollTrigger.create({
        trigger: section ?? bgRef.current,
        start: "top bottom",
        once: true,
        onEnter: () => {
          gsap.fromTo(bgRef.current, { scale: 1.05 }, {
            scale: 1, duration: 2, ease: "power1.out",
          });
        },
      });
      triggers.push(st);
    }

    if (section) {
      // Label
      const st1 = ScrollTrigger.create({
        trigger: section, start: "top 72%", once: true,
        onEnter: () => gsap.from(labelRef.current, { opacity: 0, y: 8, duration: 0.6 }),
      });

      // Headline line 1
      const st2 = ScrollTrigger.create({
        trigger: section, start: "top 68%", once: true,
        onEnter: () => gsap.from(line1Ref.current, {
          y: 50, opacity: 0, duration: 1.1, ease: "power3.out",
        }),
      });

      // Headline line 2
      const st3 = ScrollTrigger.create({
        trigger: section, start: "top 68%", once: true,
        onEnter: () => gsap.from(line2Ref.current, {
          y: 50, opacity: 0, duration: 1.1, delay: 0.18, ease: "power3.out",
        }),
      });

      // Body + closing
      const st4 = ScrollTrigger.create({
        trigger: section, start: "top 62%", once: true,
        onEnter: () => gsap.from([bodyRef.current, closingRef.current].filter(Boolean), {
          y: 24, opacity: 0, stagger: 0.12, duration: 0.9, ease: "power2.out",
        }),
      });

      triggers.push(st1, st2, st3, st4);
    }

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100svh",
        width: "100%",
        overflow: "hidden",
        marginTop: 0,
      }}
    >
      {/* ── Background image ── */}
      <img
        ref={bgRef}
        src="/about-belief.png"
        alt=""
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
          transform: "scale(1.05)",
        }}
      />

      {/* Fallback background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background: fallbackBg,
        }}
      />
      {/* ── Label — top left ── */}
      <div
        ref={labelRef}
        style={{
          position: "absolute",
          top: isMobile ? "5rem" : "6.5rem",
          left: isMobile ? "1.5rem" : "5rem",
          zIndex: 4,
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.62rem",
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        THE BELIEF&nbsp;&nbsp;·&nbsp;&nbsp;02 / 07
      </div>

      {/* ── Headline block — vertically centered, left-anchored ── */}
      {/* Two lines, each allowed to span naturally. No nowrap. */}
      <div
        style={{
          position: "absolute",
          top: isMobile ? "50%" : "40%",
          left: isMobile ? "1.5rem" : "5rem",
          right: isMobile ? "1.5rem" : "40%", // right 40% is image territory on desktop
          transform: isMobile ? "translateY(-55%)" : "translateY(-50%)",
          zIndex: 4,
        }}
      >
        {/* Line 1 — the statement */}
        <div
          ref={line1Ref}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 800,
            fontSize: isMobile
              ? "clamp(1.7rem, 5.5vw, 2.2rem)"
              : "clamp(2.8rem, 4.5vw, 5.5rem)",
            lineHeight: 1.0,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            whiteSpace: isMobile ? "normal" : undefined,
            textShadow: "0 2px 40px rgba(0,0,0,0.25)",
            marginBottom: "0.6rem",
          }}
        >
          {`"AI is the most powerful tool`}
          {!isMobile && <br />}
          {isMobile && " "}
          {`ever handed to a builder.`}
        </div>

        {/* Divider between the two thoughts */}
        <Separator className={`${isMobile ? "my-3" : "my-4"} w-[40px] bg-white/25`} />

        {/* Line 2 — the turn */}
        <div
          ref={line2Ref}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: isMobile
              ? "clamp(1.4rem, 4.5vw, 1.8rem)"
              : "clamp(2rem, 3.2vw, 3.8rem)",
            lineHeight: 1.05,
            color: "rgba(255,255,255,0.65)",
            letterSpacing: "-0.02em",
            whiteSpace: isMobile ? "normal" : undefined,
          }}
        >
          {`Most people are scared of it.`}
          {!isMobile && <br />}
          {isMobile && " "}
          {`We think that's the opportunity."`}
        </div>
      </div>

      {/* ── Body text — bottom left ── */}
      <div
        ref={bodyRef}
        style={{
          position: "absolute",
          bottom: isMobile ? "3rem" : "4.5rem",
          left: isMobile ? "1.5rem" : "5rem",
          right: isMobile ? "1.5rem" : undefined,
          maxWidth: isMobile ? "100%" : "360px",
          zIndex: 4,
        }}
      >
        {/* Sage accent */}
        <div style={{
          width: "28px",
          height: "2px",
          background: "var(--sage)",
          marginBottom: "1rem",
        }} />
        <p style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: isMobile ? "0.88rem" : "0.95rem",
          color: "rgba(255,255,255,0.65)",
          lineHeight: isMobile ? 1.7 : 1.8,
          margin: 0,
        }}>
          We don't fight the machine. We learn to use it
          better than anyone else. Because the builders
          who combine human creativity with AI speed are
          about to do things that have never been done before.
        </p>
      </div>

      {/* ── Closing line — bottom right (desktop only) ── */}
      {!isMobile && (
        <div
          ref={closingRef}
          style={{
            position: "absolute",
            bottom: "4.5rem",
            right: "5rem",
            zIndex: 4,
            textAlign: "right",
          }}
        >
          <p style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "1.15rem",
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.6,
            margin: 0,
          }}>
            That's who Quild is for.
          </p>
        </div>
      )}
    </section>
  );
}