"use client";

import { useRef } from "react";
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

  useGSAP(
    ({ gsap }) => {
      const section = sectionRef.current;
      if (!section) return;

      // 1. Background Animation - handling scale and opacity
      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { scale: 1.15, opacity: 0.7 },
          {
            scale: 1,
            opacity: 1,
            duration: 2.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 2. Headline & Label Stagger
      const titleElements = [labelRef.current, line1Ref.current, line2Ref.current].filter(Boolean);
      if (titleElements.length > 0) {
        gsap.fromTo(
          titleElements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
            },
          }
        );
      }

      // 3. Body & Footer Stagger
      const footerItems = [bodyRef.current, closingRef.current].filter(Boolean);
      if (footerItems.length > 0) {
        gsap.fromTo(
          footerItems,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            delay: 0.4, // Small delay to let the headlines lead
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
            },
          }
        );
      }
    },
    [isMobile] // Dependency array
  );

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100svh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#1a1a1a",
      }}
    >
      <img
        ref={bgRef}
        src="/about-belief.png"
        alt=""
        draggable={false}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          willChange: "transform, opacity", // Prevents drifting/jitter
          pointerEvents: "none",
        } as React.CSSProperties}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background: fallbackBg,
        }}
      />

      {/* Label */}
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

      {/* Headline Block */}
      <div
        style={{
          position: "absolute",
          top: isMobile ? "50%" : "40%",
          left: isMobile ? "1.5rem" : "5rem",
          right: isMobile ? "1.5rem" : "40%",
          transform: isMobile ? "translateY(-55%)" : "translateY(-50%)",
          zIndex: 4,
        }}
      >
        <div
          ref={line1Ref}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 800,
            fontSize: isMobile ? "1.8rem" : "clamp(2.8rem, 4.5vw, 5.5rem)",
            lineHeight: 1.1,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            textShadow: "0 2px 40px rgba(0,0,0,0.25)",
            marginBottom: "0.6rem",
          }}
        >
          {`"AI is the most powerful tool`}
          {!isMobile && <br />}
          {isMobile && " "}
          {`ever handed to a builder.`}
        </div>

        <Separator className={`${isMobile ? "my-3" : "my-4"} w-[40px] bg-white/25`} />

        <div
          ref={line2Ref}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: isMobile ? "1.5rem" : "clamp(2rem, 3.2vw, 3.8rem)",
            lineHeight: 1.1,
            color: "rgba(255,255,255,0.65)",
            letterSpacing: "-0.02em",
          }}
        >
          {`Most people are scared of it.`}
          {!isMobile && <br />}
          {isMobile && " "}
          {`We think that's the opportunity."`}
        </div>
      </div>

      {/* Body Text */}
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
        <div style={{ width: "28px", height: "2px", background: "var(--sage)", marginBottom: "1rem" }} />
        <p style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: isMobile ? "0.88rem" : "0.95rem",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.8,
          margin: 0,
        }}>
          We don't fight the machine. We learn to use it better than anyone else. 
          Because the builders who combine human creativity with AI speed are 
          about to do things that have never been done before.
        </p>
      </div>

      {/* Closing line */}
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
            margin: 0,
          }}>
            That's who Quild is for.
          </p>
        </div>
      )}
    </section>
  );
}