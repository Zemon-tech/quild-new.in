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

  useGSAP(({ gsap }) => {
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
        },
      );
    });

    return () => {
      rows.forEach((row) => {
        gsap.getTweensOf(row).forEach((t) => t.kill());
      });
    };
  }, []);

  const sortedTimeline = cohorts.slice().sort((a, b) => b.order - a.order);

  return (
    <section className="bg-[var(--bg)] py-[7rem]">
      <div ref={rootRef} className="mx-auto w-full max-w-[1280px] px-8">
        <ScrollReveal>
          <div className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)]">
            COHORT TIMELINE
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.92] tracking-[-0.02em] text-[var(--ink)]">
            From Cohort 1.0 to what&apos;s next.
          </h2>
        </ScrollReveal>

        <div className="mt-12">
          {sortedTimeline.map((c, i) => {
            const isCompleted = c.status === "completed";
            const isLast = i === sortedTimeline.length - 1;
            const statusLabel =
              c.status === "active"
                ? "ACTIVE"
                : c.status === "upcoming"
                  ? "UPCOMING"
                  : "COMPLETED";

            return (
              <div
                key={c.id}
                ref={(el) => {
                  rowsRef.current[i] = el;
                }}
                className={`grid grid-cols-12 items-center border-t border-[var(--border)] ${isLast ? "border-b" : ""}`}
                style={
                  isMobile
                    ? {
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.4rem",
                        paddingTop: "1.25rem",
                        paddingBottom: "1.25rem",
                        paddingRight: "1.5rem",
                        paddingLeft: "1.5rem",
                        borderBottom: "1px solid var(--border)",
                        opacity: isCompleted ? 0.35 : 1,
                      }
                    : { opacity: isCompleted ? 0.35 : 1 }
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
                      {c.type.toUpperCase()} · {statusLabel}
                    </div>

                    <div
                      style={{
                        fontSize: "clamp(1.6rem, 6vw, 2rem)",
                        lineHeight: 1,
                        marginTop: "0.25rem",
                        fontFamily: "var(--font-cormorant), serif",
                        fontWeight: 600,
                        color: "var(--ink)",
                        width: "100%",
                      }}
                    >
                      {c.label}
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
                        {c.deadline}
                      </div>

                      {c.status !== "completed" && c.ctaHref && c.ctaLabel ? (
                        <Link
                          href={c.ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
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
                          -&gt; {c.ctaLabel}
                        </Link>
                      ) : null}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-2 py-6 pl-6 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)]">
                      {c.type.toUpperCase()}
                    </div>
                    <div className="col-span-3 py-6 font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-semibold text-[var(--ink)]">
                      {c.label}
                    </div>
                    <div className="col-span-3 py-6 text-[var(--muted)]">
                      {c.dates}
                    </div>
                    <div className="col-span-2 py-6 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)]">
                      {statusLabel}
                    </div>
                    <div className="col-span-2 py-6 pr-6 text-right">
                      {c.status !== "completed" && c.ctaHref && c.ctaLabel ? (
                        <Link
                          href={c.ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--sage)]"
                        >
                          -&gt; {c.ctaLabel}
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
