"use client";

import { useMemo, useState } from "react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cohorts } from "@/lib/data/cohorts";

type Step = 1 | 2 | 3;

export default function ApplyPage() {
  const current = useMemo(
    () => cohorts.find((c) => c.status === "upcoming") ?? cohorts[0],
    []
  );

  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-[var(--background)]">
        <section className="py-24">
          <div className="mx-auto w-full max-w-[680px] px-6">
            <div className="border border-[var(--border)] bg-[var(--surface)] p-10">
              <div className="font-display text-3xl font-semibold">
                Application received.
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                We review carefully. If it's a fit, we'll reach out.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-[var(--background)]">
      <section className="border-b border-[var(--border)] py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <ScrollReveal>
            <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.98]">
              Applications are open.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="mt-6 max-w-2xl text-base leading-[1.7] text-[var(--muted)]">
              Current cohort: Cohort {current.id} — {current.city} ({current.dates})
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto w-full max-w-[680px] px-6">
          <div className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
            {String(step).padStart(2, "0")} / 03
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] p-8">
            {step === 1 ? (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
              >
                <Input required placeholder="Name" className="h-11 rounded-none" />
                <Input required type="email" placeholder="Email" className="h-11 rounded-none" />
                <Input required placeholder="City" className="h-11 rounded-none" />
                <Input required placeholder="Role (student / founder / engineer)" className="h-11 rounded-none" />
                <Button type="submit" className="h-11 w-full rounded-none bg-[var(--accent)] text-white hover:bg-[var(--accent)]">
                  CONTINUE →
                </Button>
              </form>
            ) : null}

            {step === 2 ? (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(3);
                }}
              >
                <Textarea required placeholder="What are you building?" className="min-h-[120px] rounded-none" />
                <Input placeholder="GitHub / Portfolio" className="h-11 rounded-none" />
                <Textarea required placeholder="Why Quild?" className="min-h-[120px] rounded-none" />
                <div className="grid grid-cols-2 gap-3">
                  <Button type="button" variant="outline" className="h-11 rounded-none" onClick={() => setStep(1)}>
                    ← BACK
                  </Button>
                  <Button type="submit" className="h-11 rounded-none bg-[var(--accent)] text-white hover:bg-[var(--accent)]">
                    CONTINUE →
                  </Button>
                </div>
              </form>
            ) : null}

            {step === 3 ? (
              <div>
                <div className="font-display text-2xl font-semibold">Review</div>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  Keep it direct. We value clarity, proof of work, and momentum.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button type="button" variant="outline" className="h-11 rounded-none" onClick={() => setStep(2)}>
                    ← BACK
                  </Button>
                  <Button type="button" className="h-11 rounded-none bg-[var(--accent)] text-white hover:bg-[var(--accent)]" onClick={() => setSubmitted(true)}>
                    SUBMIT
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
