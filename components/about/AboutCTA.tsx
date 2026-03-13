"use client";

import Link from "next/link";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AboutCTA() {
  const isMobile = useIsMobile();
  const ctaInnerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    ({ gsap }) => {
      const inner = ctaInnerRef.current;
      const triggers: Array<{ kill: () => void }> = [];

      if (inner) {
        const st = ScrollTrigger.create({
          trigger: inner,
          start: "top 85%",
          onEnter: () => {
            gsap.fromTo(
              inner,
              { y: 20, opacity: 0, scale: 0.98 },
              { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" }
            );
          },
          once: true,
        });
        triggers.push(st);
      }

      return () => {
        triggers.forEach((t) => t.kill());
      };
    },
    []
  );

  return (
    <>
      <section className="bg-[var(--void)] text-white" style={{ padding: isMobile ? "4rem 1.5rem" : "5rem 2rem" }}>
        <div
          ref={ctaInnerRef}
          className="mx-auto flex w-full max-w-[1280px] flex-col items-start"
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(2.2rem, 4.5vw, 5.5rem)",
              lineHeight: 0.95,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              whiteSpace: "pre-line",
              overflowWrap: isMobile ? "break-word" : undefined,
              wordBreak: isMobile ? "normal" : undefined,
              hyphens: isMobile ? "none" : undefined,
              margin: "0 0 2.5rem",
            }}
          >
            {`We know this is a big dream.\nWe're making a big commitment.`}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? "2rem" : "4rem",
              borderTop: "1px solid rgba(255,255,255,0.12)",
              paddingTop: "3rem",
              width: "100%",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              If you align with this — if somewhere in your heart you think this should exist and can succeed — then we are asking you to join now.
              <br />
              <br />
              Not when it&apos;s bigger. Not when it&apos;s safer. Now, when it still needs the people who believe in it before it&apos;s obvious.
            </p>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.92rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.8,
                  margin: "0 0 2rem",
                }}
              >
                Quild is a non-profit. A product of Zemon. We&apos;re not here to make money from builders — we&apos;re here to build the room that serious builders in every discipline deserve.
              </p>

              <Link
                href="/apply"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--void)",
                  background: "var(--sage)",
                  padding: "1.1rem 2.5rem",
                  textDecoration: "none",
                  display: "inline-block",
                  alignSelf: "flex-start",
                }}
              >
                JOIN NOW →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
