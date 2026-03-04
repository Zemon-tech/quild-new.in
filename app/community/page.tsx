import ScrollReveal from "@/components/ui/ScrollReveal";
import Tag from "@/components/ui/Tag";

const members = Array.from({ length: 12 }).map((_, i) => ({
  name: `Member ${String(i + 1).padStart(2, "0")}`,
  role: "Builder",
  city: ["Bengaluru", "Delhi", "Mumbai", "Pune"][i % 4],
  bio: "Shipping an AI-first product with a small team.",
}));

const projects = [
  {
    title: "Assistive research copilot",
    builder: "Member 03",
    blurb: "A lightweight workflow for synthesizing papers into decisions.",
    link: "#",
  },
  {
    title: "Customer support automation",
    builder: "Member 07",
    blurb: "Human-in-the-loop triage with clear handoff boundaries.",
    link: "#",
  },
  {
    title: "On-device study coach",
    builder: "Member 11",
    blurb: "Privacy-first learning companion for deep work sessions.",
    link: "#",
  },
];

export default function CommunityPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="border-b border-[var(--border)] py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <ScrollReveal>
            <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.98]">
              500+ builders. One community.
            </h1>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-12 gap-6">
            {[
              { n: "500+", l: "Builders" },
              { n: "8", l: "Cities" },
              { n: "AI-first", l: "Default" },
              { n: "Weekly", l: "Shipping" },
            ].map((s) => (
              <div
                key={s.l}
                className="col-span-6 border border-[var(--border)] bg-[var(--surface)] p-6 md:col-span-3"
              >
                <ScrollReveal>
                  <div className="font-display text-3xl font-semibold">
                    {s.n}
                  </div>
                  <div className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                    {s.l}
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold">
              Members
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-12 gap-6">
            {members.map((m) => (
              <div
                key={m.name}
                className="group relative col-span-12 border border-[var(--border)] bg-[var(--surface)] p-6 md:col-span-3"
              >
                <ScrollReveal>
                  <div className="font-display text-xl font-semibold">{m.name}</div>
                  <div className="mt-1 text-sm text-[var(--text-secondary)]">
                    {m.role}
                  </div>
                  <div className="mt-3">
                    <Tag>{m.city}</Tag>
                  </div>
                  <div className="pointer-events-none absolute left-6 top-[72px] hidden w-[240px] border border-[var(--border)] bg-[var(--background)] p-4 text-xs leading-6 text-[var(--text-secondary)] group-hover:block">
                    {m.bio}
                  </div>
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
              Featured projects
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-12 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="col-span-12 border border-[var(--border)] bg-[var(--surface)] p-8 md:col-span-4"
              >
                <ScrollReveal>
                  <div className="font-display text-2xl font-semibold">
                    {p.title}
                  </div>
                  <div className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                    {p.builder}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {p.blurb}
                  </p>
                  <a
                    href={p.link}
                    className="mt-6 inline-block font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent)]"
                  >
                    VIEW →
                  </a>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
