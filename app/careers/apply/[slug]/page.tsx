import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const POSITIONS = [
  {
    slug: "ai-engineer-l1",
    title: "AI Engineer – Level 1",
    department: "Engineering",
    type: "Internship",
    location: "Remote",
    summary:
      "Entry-level AI engineer role for fast learners who love building with modern AI tools and shipping real products.",
    responsibilities: [
      "Build and ship features that use modern LLM tooling (agents, RAG, evals, prompt systems).",
      "Work with product + design to turn ideas into production-ready UX.",
      "Write clean, testable code and learn the Quild engineering playbook.",
    ],
    requirements: [
      "Comfort with JavaScript/TypeScript (or strong fundamentals in any language).",
      "Curiosity for AI systems and a bias to ship.",
      "Good communication and a growth mindset.",
    ],
    perks: [
      "Paid internship (currently paid).",
      "Real projects with real users — not random throwaway software.",
      "Mentorship, fast feedback, and a strong learning environment.",
      "Connections to founders, builders, and teams at great startups/companies.",
    ],
  },
  {
    slug: "ai-engineer-l2",
    title: "AI Engineer – Level 2",
    department: "Engineering",
    type: "Internship",
    location: "Remote",
    summary:
      "Mid-level AI engineer who can own features end-to-end, work across the stack, and build production-ready AI experiences.",
    responsibilities: [
      "Own features from idea → implementation → release.",
      "Design reliable AI flows (guardrails, evals, observability).",
      "Collaborate cross-functionally and unblock others.",
    ],
    requirements: [
      "Strong TypeScript/JavaScript fundamentals.",
      "Experience building and shipping products (personal or professional).",
      "Comfort with ambiguity and ownership.",
    ],
    perks: [
      "Paid internship (currently paid).",
      "Work on real products with recognition and real impact.",
      "Learn systems thinking: performance, reliability, and AI architecture.",
      "Build a network with ambitious builders + startup teams.",
    ],
  },
  {
    slug: "ai-engineer-l3",
    title: "AI Engineer – Level 3",
    department: "Engineering",
    type: "Internship",
    location: "Remote",
    summary:
      "Senior AI engineer who leads architecture, scaling, and reliability of AI systems powering builders on our platform.",
    responsibilities: [
      "Lead architecture decisions for AI systems and platform reliability.",
      "Mentor other engineers and set engineering standards.",
      "Design scalable pipelines for inference, tooling, and evaluation.",
    ],
    requirements: [
      "Strong full-stack engineering background.",
      "Experience with production systems and performance/reliability.",
      "Ability to lead with clarity and pragmatism.",
    ],
    perks: [
      "Paid internship (currently paid).",
      "High-leverage, real-world work with real constraints.",
      "Work with experienced builders; learn and teach.",
      "Deep connections across ambitious startups and teams.",
    ],
  },
  {
    slug: "brand-creator-l1",
    title: "Brand Creator – Level 1",
    department: "Brand & Community",
    type: "Internship",
    location: "Remote",
    summary:
      "Early-career brand storyteller who loves experimenting with content across X, Reddit, LinkedIn, Instagram, and Bluesky.",
    responsibilities: [
      "Create and ship content experiments weekly.",
      "Capture stories from builders and turn them into posts, threads, and micro-campaigns.",
      "Help maintain Quild’s voice: curious, honest, builder-first.",
    ],
    requirements: [
      "Good writing instincts and taste.",
      "Consistency: you can ship on a schedule.",
      "Curiosity about startups and builders.",
    ],
    perks: [
      "Paid internship (currently paid).",
      "Work that gets seen — real distribution, real feedback.",
      "Learn brand systems: voice, narrative, and community loops.",
      "Meet and connect with builders at great startups/companies.",
    ],
  },
  {
    slug: "brand-creator-l2",
    title: "Brand Creator – Level 2",
    department: "Brand & Community",
    type: "Internship",
    location: "Remote",
    summary:
      "Experienced brand builder who can own strategy and execution across X, Reddit, LinkedIn, Instagram, and Bluesky.",
    responsibilities: [
      "Own and evolve content strategy with measurable goals.",
      "Run campaigns end-to-end and improve performance with iteration.",
      "Work closely with product and community to tell the right stories.",
    ],
    requirements: [
      "Proven track record growing a brand or community (portfolio helps).",
      "Strong taste and the ability to self-edit ruthlessly.",
      "Comfort leading and executing.",
    ],
    perks: [
      "Paid internship (currently paid).",
      "Strategic work on a real brand, not generic client work.",
      "Learn startup-grade brand building and distribution.",
      "Direct access and connections to strong teams and founders.",
    ],
  },
  {
    slug: "researcher-systems-ai-l1",
    title: "Researcher – Systems & AI (Level 1)",
    department: "Research & Infrastructure",
    type: "Internship",
    location: "Remote",
    summary:
      "Hands-on researcher focused on servers, latency, and AI integrations through real experiments.",
    responsibilities: [
      "Run experiments on performance, latency, and reliability.",
      "Prototype AI integrations and measure outcomes.",
      "Document findings clearly for engineers and stakeholders.",
    ],
    requirements: [
      "Strong fundamentals in CS/Systems (or demonstrated curiosity).",
      "Comfort reading docs/papers and turning them into experiments.",
      "Clear communication and structured thinking.",
    ],
    perks: [
      "Paid internship (currently paid).",
      "Learn by doing: real experiments with real constraints.",
      "Work with engineers on projects that matter.",
      "Network with great teams across startups and companies.",
    ],
  },
  {
    slug: "researcher-systems-ai-l2",
    title: "Researcher – Systems & AI (Level 2)",
    department: "Research & Infrastructure",
    type: "Internship",
    location: "Remote",
    summary:
      "Experienced researcher working on server performance, latency, AI/ML model integration, and compute efficiency at scale.",
    responsibilities: [
      "Own research threads and turn them into system improvements.",
      "Partner with engineering to improve reliability and cost/perf.",
      "Build strong measurement frameworks and dashboards.",
    ],
    requirements: [
      "Experience with performance profiling/benchmarking.",
      "Ability to drive projects independently.",
      "Strong writing and collaboration.",
    ],
    perks: [
      "Paid internship (currently paid).",
      "Real projects, real impact, real recognition.",
      "Deep learning in systems + AI infra.",
      "Work alongside ambitious builders and teams.",
    ],
  },
];

function getPosition(slug: string) {
  return POSITIONS.find((p) => p.slug === slug) ?? null;
}

export default async function CareersApplyPositionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const position = getPosition(slug);

  if (!position) notFound();

  return (
    <main className="bg-[var(--bg)] text-[var(--ink)]">
      <div className="mx-auto w-full max-w-[1020px] px-6 py-10 md:py-14">
        {/* Mini brand header */}
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image
              src="/quild.svg"
              alt="Quild logo"
              width={28}
              height={28}
              className="h-7 w-7"
              style={{ filter: "brightness(0)" }}
              priority
            />
            <span className="font-display text-[1.15rem] font-semibold tracking-[0.05em] text-[var(--ink)]">
              Quild
            </span>
          </Link>

          <div className="hidden md:block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--muted)]">
            Careers
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/careers#positions"
            className="font-sans text-[0.9rem] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
          >
            &larr; Back to jobs
          </Link>
        </div>

        {/* Hero */}
        <div className="mt-8 flex items-start justify-between gap-8">
          <div className="min-w-0">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--muted)]">
              {position.department}
            </div>

            <h1
              className="mt-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "clamp(2.2rem, 4vw, 3.15rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              {position.title}
            </h1>

            <div className="mt-3 font-sans text-[0.95rem] text-[var(--muted)]">
              {position.location}
            </div>

            <p className="mt-6 font-sans text-[1rem] leading-[1.85] text-[var(--muted)] max-w-[72ch]">
              {position.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[position.type, "Paid", "Real Projects", "High-Learning"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.55rem] uppercase tracking-[0.15em] px-2 py-1 border border-[var(--border)] text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden md:flex shrink-0 items-start">
            <Button
              asChild
              className="rounded-none font-mono text-[0.7rem] uppercase tracking-[0.14em] h-10 px-6"
            >
              <Link href="/apply">Apply</Link>
            </Button>
          </div>
        </div>

        <Separator className="my-10" />

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            <section>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "1.55rem",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                About Quild
              </h2>
              <p className="mt-4 font-sans text-[1rem] leading-[1.9] text-[var(--muted)]">
                Quild is a builder-first community for ambitious students, founders, and engineers.
                We care about craft, speed, and real outcomes — you’ll be working on projects people
                actually use.
              </p>
              <p className="mt-4 font-sans text-[1rem] leading-[1.9] text-[var(--muted)]">
                These positions are <span className="text-[var(--ink)]">paid</span> currently.
                You’ll learn by shipping, you’ll get real feedback, and you’ll build connections with
                teams at startups and companies doing great work.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "1.55rem",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                What you’ll do
              </h2>
              <div className="mt-5">
                <ul className="space-y-3 font-sans text-[1rem] leading-[1.85] text-[var(--muted)]">
                  {position.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--sage)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "1.55rem",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                What we’re looking for
              </h2>
              <div className="mt-5">
                <ul className="space-y-3 font-sans text-[1rem] leading-[1.85] text-[var(--muted)]">
                  {position.requirements.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--ink)]/50 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="border border-[var(--border)] p-6 md:p-7 lg:sticky lg:top-16">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                Role highlights
              </div>
              <Separator className="my-5" />

              <div className="space-y-3">
                {position.perks.map((perk) => (
                  <div key={perk} className="flex gap-3">
                    <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--sage)] shrink-0" />
                    <span className="font-sans text-[0.98rem] leading-[1.8] text-[var(--muted)]">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3">
                <Button
                  asChild
                  className="w-full rounded-none font-mono text-[0.7rem] uppercase tracking-[0.14em] h-11"
                >
                  <Link href="/apply">Apply now →</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-none font-mono text-[0.7rem] uppercase tracking-[0.14em] h-11"
                >
                  <Link href="/careers#positions">Back to jobs</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
