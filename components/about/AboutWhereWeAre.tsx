"use client";

import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

import { useGSAP } from "@/hooks/useGSAP";

export default function AboutWhereWeAre() {
  const isMobile = useIsMobile();
  const whereStatsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const whereNumberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    ({ gsap }) => {
      const cols = whereStatsRefs.current.filter(Boolean);

      const created: Array<gsap.core.Tween | gsap.core.Timeline> = [];

      if (cols.length > 0) {
        created.push(
          gsap.fromTo(
            cols,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.12,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cols[0],
                start: "top 75%",
              },
            }
          )
        );
      }

      // Count up numbers
      const num0 = whereNumberRefs.current[0];
      const num1 = whereNumberRefs.current[1];

      if (num0) {
        const obj = { v: 0 };
        created.push(
          gsap.to(obj, {
            v: 2,
            duration: 1.2,
            ease: "power2.out",
            onUpdate: () => {
              num0.textContent = String(Math.round(obj.v));
            },
            scrollTrigger: {
              trigger: num0,
              start: "top 75%",
            },
          })
        );
      }

      if (num1) {
        const obj = { v: 0 };
        created.push(
          gsap.to(obj, {
            v: 1,
            duration: 1.1,
            ease: "power2.out",
            onUpdate: () => {
              num1.textContent = String(Math.round(obj.v)).padStart(2, "0");
            },
            scrollTrigger: {
              trigger: num1,
              start: "top 75%",
            },
          })
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
    <section className="bg-[var(--bg)]" style={{ padding: isMobile ? "3rem 0" : "8rem 0" }}>
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
          WHERE WE ARE&nbsp;&nbsp;/&nbsp;&nbsp;03
        </div>

        <h2
          style={{
            marginTop: "1.25rem",
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: isMobile ? "clamp(2rem, 7vw, 2.8rem)" : "clamp(2.5rem, 5vw, 5.5rem)",
            lineHeight: 0.92,
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            whiteSpace: "pre-line",
            marginBottom: isMobile ? "2rem" : undefined,
          }}
        >
          {`Small by choice.\nSerious by default.`}
        </h2>

        <Separator className="mt-14" />
        <div
          className={isMobile ? "flex flex-col" : "grid grid-cols-12"}
          style={{ borderBottom: isMobile ? undefined : "1px solid var(--border)" }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              ref={(el) => {
                whereStatsRefs.current[i] = el;
              }}
              className="col-span-12 md:py-10 md:col-span-4"
              style={{
                borderLeft: isMobile ? "none" : (i === 0 ? undefined : "1px solid var(--border)"),
                borderBottom: isMobile ? "1px solid var(--border)" : undefined,
                paddingTop: isMobile ? "1.5rem" : undefined,
                paddingBottom: isMobile ? "1.5rem" : undefined,
                paddingLeft: isMobile ? "0" : (i === 0 ? undefined : "2rem"),
                paddingRight: isMobile ? "0" : (i === 2 ? undefined : "2rem"),
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 700,
                  fontSize: isMobile ? "clamp(3rem, 10vw, 4rem)" : "5rem",
                  lineHeight: isMobile ? 1 : 0.9,
                  color: "var(--ink)",
                  letterSpacing: "-0.04em",
                  fontVariantNumeric: "normal",
                }}
              >
                <span
                  ref={(el) => {
                    whereNumberRefs.current[i] = el;
                  }}
                  style={{
                    fontFamily: i === 2 ? "var(--font-cormorant)" : undefined,
                    fontStyle: i === 2 ? "normal" : undefined,
                    fontVariantEmoji: i === 2 ? "text" : undefined,
                    WebkitFontFeatureSettings: i === 2 ? '"text"' : undefined,
                  }}
                >
                  {i === 0 ? "0" : i === 1 ? "0" : "∞"}
                </span>
              </div>

              <div
                className="mt-4"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                {i === 0 ? "FOUNDERS" : i === 1 ? "FIRST COHORT" : "THE GOAL"}
              </div>

              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.95rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  whiteSpace: isMobile ? "normal" : "pre-line",
                  overflowWrap: isMobile ? "break-word" : undefined,
                  wordBreak: isMobile ? "normal" : undefined,
                  hyphens: isMobile ? "none" : undefined,
                }}
              >
                {isMobile ? (
                  i === 0
                    ? "Shivang and Satyajit. Building this from Delhi, one cohort at a time."
                    : i === 1
                      ? "We started small on purpose. Quality of builders over quantity of signups. Always."
                      : "No ceiling. Every serious builder in the world, eventually."
                ) : (
                  i === 0
                    ? "Shivang and Satyajit. Building this from\nDelhi, one cohort at a time."
                    : i === 1
                      ? "We started small on purpose. Quality\nof builders over quantity of signups. Always."
                      : "No ceiling. Every serious builder\nin the world, eventually."
                )}
              </p>
            </div>
          ))}
        </div>
        <div className={`grid grid-cols-12 ${isMobile ? "gap-6" : "gap-8"}`} style={{ paddingTop: "3rem" }}>
          <div className="col-span-12 md:col-span-5">
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: isMobile ? "1.1rem" : "1.4rem",
                lineHeight: 1.35,
                color: "var(--ink)",
                whiteSpace: "pre-line",
                overflowWrap: isMobile ? "break-word" : undefined,
                wordBreak: isMobile ? "normal" : undefined,
                hyphens: isMobile ? "none" : undefined,
              }}
            >
              {`"We have no investors.\nNo famous advisors.\nNo legacy to lean on."`}
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1rem",
                color: "var(--muted)",
                lineHeight: 1.8,
                whiteSpace: isMobile ? "normal" : "pre-line",
                overflowWrap: isMobile ? "break-word" : undefined,
                wordBreak: isMobile ? "normal" : undefined,
                hyphens: isMobile ? "none" : undefined,
              }}
            >
              {isMobile ? (
                <>
                  What we have is a clear belief, a small group of builders who showed up, and the kind of impatience that makes people start things before they're ready.
                  <br /><br />
                  We think that's enough to build something real.
                </>
              ) : (
                `What we have is a clear belief, a small group of\nbuilders who showed up, and the kind of impatience\nthat makes people start things before they're ready.\n\nWe think that's enough to build something real.`
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
