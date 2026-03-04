import Link from "next/link";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Tag from "@/components/ui/Tag";
import { Button } from "@/components/ui/button";

const programs = [
  {
    name: "Cohort Program",
    duration: "6 weeks",
    format: "In-person",
    who: "Builders shipping an AI-first product or prototype.",
    outcomes: ["Weekly shipping", "Critiques", "Technical workshops"],
  },
  {
    name: "Workshops",
    duration: "90 minutes",
    format: "Online",
    who: "Builders who want a focused skill upgrade.",
    outcomes: ["Templates", "Live building", "Q&A"],
  },
  {
    name: "Mentorship",
    duration: "4 weeks",
    format: "Online",
    who: "Early founders and engineers who want tighter loops.",
    outcomes: ["Process design", "Milestones", "Accountability"],
  },
  {
    name: "Build Nights",
    duration: "Weekly",
    format: "In-person",
    who: "Community members who want to ship alongside others.",
    outcomes: ["Co-working", "Demos", "Feedback"],
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="border-b border-[var(--border)] py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <ScrollReveal>
            <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.98]">
              Programs built for serious builders.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="mt-6 max-w-2xl text-base leading-[1.7] text-[var(--text-secondary)]">
              Minimal ceremony. Clear expectations. Tight feedback loops.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <div className="grid grid-cols-12 gap-0 border border-[var(--border)]">
            {programs.map((p) => (
              <div
                key={p.name}
                className="col-span-12 border-b border-[var(--border)] bg-[var(--surface)] p-8 md:col-span-6 md:border-b-0 md:border-r last:border-r-0"
              >
                <ScrollReveal>
                  <div className="flex flex-wrap gap-2">
                    <Tag>{p.format}</Tag>
                    <Tag>{p.duration}</Tag>
                  </div>
                  <div className="mt-4 font-display text-2xl font-semibold">
                    {p.name}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {p.who}
                  </p>
                  <div className="mt-5 border-t border-[var(--border)] pt-4">
                    <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                      Outcomes
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
                      {p.outcomes.map((o) => (
                        <li key={o}>- {o}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Button
                      asChild
                      variant="outline"
                      className="h-11 rounded-none border-[var(--text-primary)] bg-transparent px-5 text-[var(--text-primary)]"
                    >
                      <Link href="/apply">APPLY →</Link>
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
