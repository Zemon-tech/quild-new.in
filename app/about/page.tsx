import Image from "next/image";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { team } from "@/lib/data/team";

const values = [
  {
    number: "01",
    title: "Structure",
    body: "A visible grid, a visible standard. We build inside constraints so quality can compound.",
  },
  {
    number: "02",
    title: "Craft",
    body: "Shipping is the proof. We optimize for signal: process, clarity, and iteration speed.",
  },
  {
    number: "03",
    title: "Community",
    body: "Builders help builders. Direct feedback. High-trust collaboration. No spectators.",
  },
];

const milestones = [
  {
    year: "2025",
    title: "Quild is founded",
    body: "A small group of builders meets weekly to ship AI-first projects with accountability.",
  },
  {
    year: "2026",
    title: "Cohorts expand",
    body: "Programs run across multiple cities, with a shared operating system for shipping.",
  },
  {
    year: "Next",
    title: "Institutional community",
    body: "A credible, selective network for builders who want a lifetime of compounding.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="border-b border-[var(--border)] py-24">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-10 px-6">
          <div className="col-span-12 md:col-span-7">
            <ScrollReveal>
              <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.98]">
                We exist for the builder in everyone.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-8 max-w-2xl space-y-4 text-base leading-[1.7] text-[var(--text-secondary)]">
                <p>
                  Quild is a selective community for students, founders, and engineers
                  building with AI. We run cohort programs, workshops, and events —
                  in-person and online — to help serious builders ship faster and
                  connect deeper.
                </p>
                <p>
                  We are allergic to fluff. We prefer structure, honesty, and the
                  quiet confidence of shipping.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <div className="grid grid-cols-12 gap-6">
            {values.map((v) => (
              <div
                key={v.number}
                className="col-span-12 border border-[var(--border)] bg-[var(--surface)] p-8 md:col-span-4"
              >
                <ScrollReveal>
                  <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                    {v.number}
                  </div>
                  <div className="mt-3 font-display text-2xl font-semibold">
                    {v.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {v.body}
                  </p>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold">
              Team
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-12 gap-6">
            {team.map((m) => (
              <div
                key={m.name}
                className="group col-span-12 border border-[var(--border)] bg-[var(--surface)] md:col-span-3"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={m.imageUrl}
                    alt={m.name}
                    fill
                    className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>
                <div className="p-5">
                  <div className="font-display text-xl font-semibold">
                    {m.name}
                  </div>
                  <div className="mt-1 text-sm text-[var(--text-secondary)]">
                    {m.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold">
              The story
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-1">
              <div className="h-full w-px bg-[var(--border)]" />
            </div>
            <div className="col-span-12 md:col-span-11">
              <div className="flex flex-col gap-6">
                {milestones.map((m, i) => (
                  <div
                    key={m.title}
                    className="grid grid-cols-12 gap-6 border border-[var(--border)] bg-[var(--surface)] p-6"
                  >
                    <div className="col-span-12 md:col-span-3">
                      <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                        {m.year}
                      </div>
                      <div className="mt-2 font-display text-2xl font-semibold">
                        {m.title}
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                      <p className="text-sm leading-7 text-[var(--text-secondary)]">
                        {m.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
