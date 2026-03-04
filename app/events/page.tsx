import ScrollReveal from "@/components/ui/ScrollReveal";
import Tag from "@/components/ui/Tag";

const upcoming = [
  {
    date: "APR 2026",
    name: "Build Night: AI-first products",
    location: "Bengaluru",
    type: "In-person",
  },
  {
    date: "MAY 2026",
    name: "Workshop: LLM evaluation in practice",
    location: "Online",
    type: "Online",
  },
];

const past = [
  {
    date: "JAN 2026",
    name: "Critique circle",
    location: "Delhi",
    type: "In-person",
  },
  {
    date: "NOV 2025",
    name: "Shipping systems",
    location: "Online",
    type: "Online",
  },
  {
    date: "SEP 2025",
    name: "Demo night",
    location: "Mumbai",
    type: "In-person",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="border-b border-[var(--border)] py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <ScrollReveal>
            <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.98]">
              Events
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="mt-6 max-w-2xl text-base leading-[1.7] text-[var(--text-secondary)]">
              Workshops, build nights, and sessions designed for shipping.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold">
              Upcoming
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-12 gap-0 border border-[var(--border)]">
            {upcoming.map((e) => (
              <div
                key={e.name}
                className="col-span-12 grid grid-cols-12 gap-6 border-b border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <div className="col-span-12 md:col-span-3">
                  <div className="font-mono text-lg uppercase tracking-[0.15em] text-[var(--text-primary)]">
                    {e.date}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div className="font-display text-2xl font-semibold">
                    {e.name}
                  </div>
                  <div className="mt-2 text-sm text-[var(--text-secondary)]">
                    {e.location}
                  </div>
                </div>
                <div className="col-span-12 flex items-start justify-end md:col-span-3">
                  <Tag>{e.type}</Tag>
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
              Past
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-12 gap-6">
            {past.map((e) => (
              <div
                key={e.name}
                className="col-span-12 border border-[var(--border)] bg-[var(--surface)] p-6 opacity-70 md:col-span-4"
              >
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                  {e.date}
                </div>
                <div className="mt-2 font-display text-2xl font-semibold">
                  {e.name}
                </div>
                <div className="mt-2 text-sm text-[var(--text-secondary)]">
                  {e.location}
                </div>
                <div className="mt-4">
                  <Tag>{e.type}</Tag>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
