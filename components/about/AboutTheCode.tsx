"use client";

import { useRef } from "react";

import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { useGSAP } from "@/hooks/useGSAP";

const codeRules = [
  {
    n: "01",
    title: "Make progress every day.",
    body: "Not every day will be your best. Ship anyway.\nA small commit beats a perfect plan that never ships.",
  },
  {
    n: "02",
    title: "Structure the process.",
    body: "Chaos feels fast. It isn't. Build systems,\ndocument decisions, and let your process compound.",
  },
  {
    n: "03",
    title: "Build and ship in public.",
    body: "Visibility creates accountability. Share what you're\nbuilding before it's ready. The feedback will save you.",
  },
  {
    n: "04",
    title: "Help others grow.",
    body: "Your knowledge only compounds when you share it.\nTeach what you know. Ask what you don't.",
  },
  {
    n: "05",
    title: "Use AI to move faster.",
    body: "Not to replace your thinking — to amplify it.\nMaster your tools or someone else will outrun you with theirs.",
  },
  {
    n: "06",
    title: "Find hard problems.",
    body: "The ignored, the complex, the unsolved — that's where\nbuilders leave their mark. Don't settle for easy work.",
  },
] as const;

export default function AboutTheCode() {
  const isMobile = useIsMobile();
  const codeRowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    ({ gsap }) => {
      const rows = codeRowRefs.current.filter(Boolean);

      const created: Array<gsap.core.Tween | gsap.core.Timeline> = [];

      if (rows.length > 0) {
        created.push(
          gsap.fromTo(
            rows,
            { x: -40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: rows[0],
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
    <section
      className="relative z-[1] bg-[var(--surface)]"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: isMobile ? "3rem 0" : "6rem 0",
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.7rem",
            color: "var(--muted)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          THE CODE&nbsp;&nbsp;/&nbsp;&nbsp;05
        </div>

        <h2
          style={{
            marginTop: "1.25rem",
            marginBottom: "4rem",
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: isMobile ? "clamp(1.8rem, 6vw, 2.5rem)" : "clamp(2.5rem, 4.5vw, 5rem)",
            lineHeight: 0.95,
            color: "var(--ink)",
            whiteSpace: "pre-line",
          }}
        >
          {`What we expect\nfrom every builder.`}
        </h2>

        <div>
          {codeRules.map((r, idx) => (
            <div
              key={r.n}
              ref={(el) => {
                codeRowRefs.current[idx] = el;
              }}
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "baseline",
                padding: isMobile ? "1.5rem 1.5rem" : "1.75rem 0",
                gap: isMobile ? "0.5rem" : "3rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: isMobile ? "0.62rem" : "0.65rem",
                  color: "var(--muted)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  width: "48px",
                  flexShrink: 0,
                }}
              >
                {r.n}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 600,
                  fontSize: isMobile ? "clamp(1.4rem, 5vw, 1.8rem)" : "clamp(1.5rem, 2.5vw, 2.2rem)",
                  color: "var(--ink)",
                  flex: isMobile ? undefined : "1 1 auto",
                  lineHeight: 1,
                  textAlign: "left",
                }}
              >
                {r.title}
              </h3>

              <div
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: isMobile ? "0.88rem" : "0.9rem",
                  color: "var(--muted)",
                  maxWidth: isMobile ? "100%" : "380px",
                  textAlign: isMobile ? "left" : "right",
                  marginLeft: isMobile ? "0" : undefined,
                  marginTop: isMobile ? "0.25rem" : undefined,
                  whiteSpace: isMobile ? "normal" : "pre-line",
                  overflowWrap: isMobile ? "break-word" : undefined,
                  wordBreak: isMobile ? "normal" : undefined,
                  hyphens: isMobile ? "none" : undefined,
                  lineHeight: isMobile ? 1.7 : 1.6,
                }}
              >
                {isMobile ? r.body.replace(/\n/g, ' ') : r.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
