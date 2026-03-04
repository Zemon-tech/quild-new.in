"use client";

import Link from "next/link";
import { useRef } from "react";
import { cohorts } from "@/lib/data/cohorts";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGSAP } from "@/hooks/useGSAP";

export default function CohortTimeline() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

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
                  ref={(el) => { rowsRef.current[i] = el; }}
                  className={`grid grid-cols-12 items-center border-t border-[var(--border)] ${isLast ? "border-b" : ""} ${isActive ? "border-l-[3px] border-l-[var(--sage)] bg-[var(--sage-light)]" : ""}`}
                  style={{ opacity: isPast ? 0.35 : 1 }}
                >
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
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
