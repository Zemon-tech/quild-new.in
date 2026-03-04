"use client";

import Link from "next/link";
import { useRef } from "react";
import { cohorts } from "@/lib/data/cohorts";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";

export default function CohortTimeline() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();

  useGSAP(
    ({ gsap }) => {
      const rows = rowsRef.current.filter(Boolean);
      rows.forEach((row, i) => {
        gsap.fromTo(
          row,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            delay: i * 0.06,
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
            },
          }
        );
      });

      return () => {
        rows.forEach((row) => {
          gsap.getTweensOf(row).forEach((t) => t.kill());
        });
      };
    },
    []
  );

  return (
    <section className="bg-[var(--bg)] py-[7rem]">
      <div ref={rootRef} className="mx-auto w-full max-w-[1280px] px-8">
        <ScrollReveal>
          <div className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)]">
            UPCOMING COHORTS
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.92] tracking-[-0.02em] text-[var(--ink)]">
            Where we&apos;re running next.
          </h2>
        </ScrollReveal>

        <div className="mt-12">
          {cohorts
            .slice()
            .sort((a, b) => Number(b.id) - Number(a.id))
            .map((c, i) => {
              const isActive = c.status === "active";
              const isPast = c.status === "past";
              const isLast = i === cohorts.length - 1;

              return (
                <div
                  key={c.id}
                  ref={(el) => {
                    rowsRef.current[i] = el;
                  }}
                  className={`grid grid-cols-12 items-center border-t border-[var(--border)] ${isLast ? "border-b" : ""} ${isActive ? "border-l-[3px] border-l-[var(--sage)] bg-[var(--sage-light)]" : ""}`}
                  style={
                    isMobile
                      ? {
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.4rem",
                          paddingTop: "1.25rem",
                          paddingBottom: "1.25rem",
                          paddingRight: "1.5rem",
                          paddingLeft: isActive ? "calc(1.5rem - 3px)" : "1.5rem",
                          borderBottom: "1px solid var(--border)",
                          opacity: isPast ? 0.35 : 1,
                          borderLeft: isActive ? "3px solid var(--sage)" : undefined,
                          background: isActive ? "var(--sage-light)" : undefined,
                        }
                      : { opacity: isPast ? 0.35 : 1 }
                  }
                >
                  {isMobile ? (
                    <>
                      <div
                        style={{
                          fontSize: "0.62rem",
                          letterSpacing: "0.12em",
                          color: "var(--muted)",
                          fontFamily:
                            "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                          textTransform: "uppercase",
                          width: "100%",
                        }}
                      >
                        COHORT {c.id}
                      </div>

                      <div
                        style={{
                          fontSize: "clamp(1.8rem, 7vw, 2.2rem)",
                          lineHeight: 1,
                          marginTop: "0.25rem",
                          fontFamily: "var(--font-cormorant), serif",
                          fontWeight: 600,
                          color: "var(--ink)",
                          width: "100%",
                        }}
                      >
                        {c.city}
                      </div>

                      <div
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--muted)",
                          width: "100%",
                        }}
                      >
                        {c.dates}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "0.5rem",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.62rem",
                            fontFamily:
                              "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                            color: "var(--muted)",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                          }}
                        >
                          DEADLINE: {c.deadline}
                        </div>

                        {!isPast ? (
                          <Link
                            href="/apply"
                            style={{
                              fontSize: "0.62rem",
                              fontFamily:
                                "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                              color: "var(--sage)",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              textDecoration: "none",
                            }}
                          >
                            → APPLY
                          </Link>
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-span-2 py-6 pl-6 font-mono text-[0.7rem] uppercase tracking-[0.12em]">
                        COHORT {c.id}
                      </div>
                      <div className="col-span-3 py-6 font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-semibold text-[var(--ink)]">
                        {c.city}
                      </div>
                      <div className="col-span-3 py-6 text-[var(--muted)]">
                        {c.dates}
                      </div>
                      <div className="col-span-2 py-6 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)]">
                        {c.deadline}
                      </div>
                      <div className="col-span-2 py-6 pr-6 text-right">
                        {!isPast ? (
                          <Link
                            href="/apply"
                            className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--sage)]"
                          >
                            → APPLY
                          </Link>
                        ) : null}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
