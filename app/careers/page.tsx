import Link from "next/link";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { roles } from "@/lib/data/careers";

export default function CareersPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="border-b border-[var(--border)] py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <ScrollReveal>
            <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.98]">
              Build Quild with us.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="mt-6 max-w-2xl text-base leading-[1.7] text-[var(--text-secondary)]">
              We hire quietly. We care about craft, judgment, and consistency.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <div className="border border-[var(--border)]">
            {roles.length ? (
              roles.map((r) => (
                <div
                  key={r.title}
                  className="grid grid-cols-12 items-center gap-6 border-b border-[var(--border)] bg-[var(--surface)] px-6 py-5 transition-colors hover:bg-[var(--accent-light)]"
                >
                  <div className="col-span-12 md:col-span-4">
                    <div className="font-display text-xl font-semibold">
                      {r.title}
                    </div>
                  </div>
                  <div className="col-span-6 text-sm text-[var(--text-secondary)] md:col-span-3">
                    {r.team}
                  </div>
                  <div className="col-span-6 text-sm text-[var(--text-secondary)] md:col-span-3">
                    {r.location}
                  </div>
                  <div className="col-span-6 text-sm text-[var(--text-secondary)] md:col-span-1">
                    {r.type}
                  </div>
                  <div className="col-span-6 flex justify-end md:col-span-1">
                    <Link
                      href={r.applyUrl}
                      className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent)]"
                    >
                      → APPLY
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-[var(--surface)] p-10">
                <div className="font-display text-2xl font-semibold">
                  No open roles.
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  Send a general application and tell us what you build.
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent)]"
                  >
                    CONTACT →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
