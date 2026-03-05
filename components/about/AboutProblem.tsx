"use client";

import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useIsMobile } from "@/hooks/use-mobile";
import { useGSAP } from "@/hooks/useGSAP";

export default function AboutProblem() {
  const isMobile = useIsMobile();

  const sectionRef = useRef<HTMLElement | null>(null);
  const problemLeftRef = useRef<HTMLDivElement | null>(null);
  const problemRightRef = useRef<HTMLDivElement | null>(null);
  const problemStatRowRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    ({ gsap }) => {
      const section = sectionRef.current;
      const left = problemLeftRef.current;
      const right = problemRightRef.current;
      const stat = problemStatRowRef.current;

      const triggers: Array<{ kill: () => void }> = [];

      if (left) {
        const quote = left.querySelector("blockquote");
        if (quote) {
          gsap.set(quote, { clipPath: "inset(0 0 100% 0)" });
          const st = ScrollTrigger.create({
            trigger: section ?? left,
            start: "top 70%",
            onEnter: () => {
              gsap.to(quote, { clipPath: "inset(0 0 0% 0)", duration: 1, ease: "power3.out" });
            },
            once: true,
          });
          triggers.push(st);
        }
      }

      if (right) {
        const paragraphs = Array.from(right.querySelectorAll("[data-problem-paragraph]"));
        if (paragraphs.length > 0) {
          const st = ScrollTrigger.create({
            trigger: section ?? right,
            start: "top 65%",
            onEnter: () => {
              gsap.from(paragraphs, {
                y: 30,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out",
              });
            },
            once: true,
          });
          triggers.push(st);
        }
      }

      if (stat) {
        gsap.set(stat, { clipPath: "inset(0 100% 0 0)" });
        const st = ScrollTrigger.create({
          trigger: stat,
          start: "top 90%",
          onEnter: () => {
            gsap.to(stat, { clipPath: "inset(0 0% 0 0)", duration: 0.9, ease: "power2.out" });
          },
          once: true,
        });
        triggers.push(st);
      }

      return () => {
        triggers.forEach((t) => t.kill());
      };
    },
    [isMobile]
  );

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 0,
      }}
    >
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          padding: isMobile ? "1.25rem 1.5rem" : "1.25rem 6rem",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "0.5rem" : undefined,
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: isMobile ? "flex-start" : "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.7rem",
            color: "var(--muted)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          THE PROBLEM
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.7rem",
            color: "var(--muted)",
            letterSpacing: "0.15em",
          }}
        >
          01 / 07
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          flex: 1,
          minHeight: isMobile ? undefined : "calc(100vh - 104px)",
        }}
      >
        <div
          ref={problemLeftRef}
          style={{
            borderRight: isMobile ? "none" : "1px solid var(--border)",
            borderBottom: isMobile ? "1px solid var(--border)" : undefined,
            padding: isMobile ? "2.5rem 1.5rem 1.5rem" : "6rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <blockquote
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: isMobile ? "clamp(1.6rem, 5.5vw, 2.2rem)" : "clamp(2.2rem, 3.5vw, 3.8rem)",
              lineHeight: 1.05,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              margin: 0,
              whiteSpace: "pre-line",
            }}
          >
            {`"Talented people were getting left behind.\nNot because they lacked ability.\nBecause they lacked the right room."`}
          </blockquote>
        </div>

        <div
          ref={problemRightRef}
          style={{
            padding: isMobile ? "2rem 1.5rem 2.5rem" : "6rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <p
              data-problem-paragraph
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: isMobile ? "1rem" : "1.1rem",
                color: "var(--muted)",
                lineHeight: isMobile ? 1.6 : 1.8,
                margin: 0,
                whiteSpace: "pre-line",
                overflowWrap: isMobile ? "break-word" : undefined,
                wordBreak: isMobile ? "normal" : undefined,
                hyphens: isMobile ? "none" : undefined,
              }}
            >
              {`We watched it happen around us. Smart people — engineers,
students, founders — who knew they were capable of building
something real. But they were surrounded by noise,
distraction, and a growing fear that AI was coming for
everything they'd worked toward.`}
            </p>
            <p
              data-problem-paragraph
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: isMobile ? "1rem" : "1.1rem",
                color: "var(--ink)",
                lineHeight: isMobile ? 1.6 : 1.8,
                fontWeight: 500,
                margin: 0,
                whiteSpace: "pre-line",
                overflowWrap: isMobile ? "break-word" : undefined,
                wordBreak: isMobile ? "normal" : undefined,
                hyphens: isMobile ? "none" : undefined,
              }}
            >
              {`Nobody was telling them the truth: AI doesn't replace
the people who build. It replaces the people who refuse to.`}
            </p>
            <p
              data-problem-paragraph
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: isMobile ? "1rem" : "1.1rem",
                color: "var(--muted)",
                lineHeight: isMobile ? 1.6 : 1.8,
                margin: 0,
                whiteSpace: "pre-line",
                overflowWrap: isMobile ? "break-word" : undefined,
                wordBreak: isMobile ? "normal" : undefined,
                hyphens: isMobile ? "none" : undefined,
              }}
            >
              {`We saw talented people stay stuck — not because they
couldn't do the work, but because nobody had built the
room where serious builders could come together, push
each other, and ship things that actually matter.`}
            </p>
            <p
              data-problem-paragraph
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: isMobile ? "1rem" : "1.1rem",
                color: "var(--ink)",
                lineHeight: isMobile ? 1.6 : 1.8,
                fontWeight: 500,
                margin: 0,
                whiteSpace: "pre-line",
                overflowWrap: isMobile ? "break-word" : undefined,
                wordBreak: isMobile ? "normal" : undefined,
                hyphens: isMobile ? "none" : undefined,
              }}
            >
              {`So we decided to build that room ourselves.`}
            </p>
          </div>
        </div>
      </div>

      <div
        ref={problemStatRowRef}
        style={{
          borderTop: "1px solid var(--border)",
          padding: isMobile ? "1rem 1.5rem" : "1.25rem 6rem",
          display: "flex",
          gap: isMobile ? "0.4rem 1rem" : "3rem",
          alignItems: "center",
          flexWrap: isMobile ? "wrap" : undefined,
          overflowX: isMobile ? undefined : "hidden",
        }}
      >
        {[
          "THE YEAR WE STARTED",
          "2025",
          "DELHI, INDIA",
          "TWO FOUNDERS",
          "ZERO INVESTORS",
        ].map((item, i) => (
          <span
            key={item}
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: isMobile ? "0.58rem" : "0.65rem",
              color: i % 2 === 0 ? "var(--muted)" : "var(--ink)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            {i < 4 && !isMobile && (
              <span style={{ color: "var(--border)", marginLeft: "3rem" }}>·</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
