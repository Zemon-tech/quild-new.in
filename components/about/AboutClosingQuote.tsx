"use client";

import { useRef } from "react";

import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AboutClosingQuote() {
  const isMobile = useIsMobile();
  const quoteRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    ({ gsap }) => {
      const quote = quoteRef.current;

      const created: Array<gsap.core.Tween | gsap.core.Timeline> = [];

      if (quote) {
        created.push(
          gsap.fromTo(
            quote,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: quote,
                start: "top 75%",
              },
            }
          )
        );
      }

      return () => {
        created.forEach((t) => {
          t.scrollTrigger?.kill();
          t.kill();
        });
      };
    },
    []
  );

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100svh" }}>
      {/* Chapter label */}
      <div
        className="absolute"
        style={{
          top: isMobile ? "5rem" : "8rem",
          left: isMobile ? "1.5rem" : "6rem",
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.7rem",
          color: "var(--muted)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        THE PROMISE&nbsp;&nbsp;/&nbsp;&nbsp;07
      </div>

      {/* Centered quote */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "900px",
          padding: "0 2rem",
          marginTop: isMobile ? "2.5rem" : undefined,
          marginBottom: isMobile ? "3rem" : undefined,
        }}
      >
        <p
          ref={quoteRef}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: isMobile ? "clamp(1.1rem, 4vw, 1.5rem)" : "clamp(2rem, 4vw, 3.5rem)",
            lineHeight: 1.2,
            color: "var(--ink)",
            textAlign: "center",
            whiteSpace: isMobile ? "normal" : "pre-line",
            overflowWrap: isMobile ? "break-word" : undefined,
            wordBreak: isMobile ? "normal" : undefined,
            hyphens: isMobile ? "none" : undefined,
          }}
        >
          {isMobile ? `"The best time to be a builder is right now. The second best time is tomorrow. There is no third option."` : `"The best time to be a builder is right now.\nThe second best time is tomorrow.\nThere is no third option."`}
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.62rem",
          color: "var(--muted)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
      </div>
    </section>
  );
}
