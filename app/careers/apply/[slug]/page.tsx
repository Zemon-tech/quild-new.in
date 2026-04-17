import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const POSITIONS = [
  {
    slug: "ai-engineer-l1",
    title: "AI Engineer (Level 1) – Internship",
    department: "Engineering",
    type: "Internship",
    location: "Remote",
    summary:
      "This is an entry-level AI engineering internship for people who are starting their journey but are deeply curious and willing to learn fast.",
    responsibilities: [
      "Assist in building and maintaining AI-powered applications.",
      "Work on frontend/backend tasks in MERN + Next.js projects.",
      "Learn and contribute to API integrations and workflows.",
      "Debug small to medium issues in codebases.",
      "Explore modern AI tools and developer environments.",
      "Support deployment and testing processes.",
    ],
    requirements: [
      "Basic understanding of JavaScript, React, Node.js.",
      "Familiarity with Next.js and Bootstrap (or willingness to learn).",
      "Basic understanding of APIs and how they work.",
      "Exposure to Git, debugging, and development workflows.",
      "Curiosity about AI tools like OpenRouter, Groq, etc.",
    ],
    perks: [
      "Duration: 3 months.",
      "Type: Unpaid.",
      "Outcome: promotion to Level 2 (paid internship) based on performance.",
      "Strong foundation in full-stack + AI development.",
      "Real-world exposure to systems and workflows.",
      "Hands-on learning with mentorship.",
    ],
    tags: ["Unpaid", "High-Learning", "Mentorship"],
  },
  {
    slug: "ai-engineer-l2",
    title: "AI Engineer (Level 2) – Internship (Unpaid → Paid Pathway)",
    department: "Engineering",
    type: "Internship",
    location: "Remote",
    summary:
      "We are looking for a highly curious and driven AI Engineer (Level 2) who thrives on building, breaking, and rebuilding systems.",
    responsibilities: [
      "Design and build end-to-end AI-powered applications and systems.",
      "Work across the stack using MERN + Next.js ecosystems.",
      "Architect scalable systems, APIs, and deployments.",
      "Integrate modern AI tools, APIs, and inference providers.",
      "Experiment with agentic IDEs and developer tooling.",
      "Handle deployment pipelines using Docker & Kubernetes.",
      "Debug, optimize, and improve existing codebases.",
      "Contribute to system design, routing, and architecture decisions.",
      "Implement authentication, security, and performance best practices.",
    ],
    requirements: [
      "Comfort exploring across frontend & backend (MERN stack, Next.js, Bootstrap).",
      "Exposure to DevOps & infra (Docker, Kubernetes).",
      "Familiarity with AI & APIs (OpenRouter, Groq, Fal AI, or similar tools).",
      "Comfort with modern developer tooling (Cursor, Claude Code, Zed, Windsurf, or similar).",
      "Understanding of core concepts: API fundamentals, system design thinking, deployment workflows, authentication & security, routing and application architecture.",
      "Hardware awareness: basic understanding of GPUs, compute, and performance tradeoffs.",
    ],
    perks: [
      "Duration: 3 months.",
      "Type: Unpaid (high-learning, high-ownership role).",
      "Outcome: opportunity to transition into a paid internship with competitive compensation.",
      "Long-term role potential based on performance.",
      "Hands-on experience building real production-grade systems.",
      "Exposure to cutting-edge AI tooling and infrastructure.",
    ],
    tags: ["Unpaid → Paid Pathway", "High-Ownership", "Real Systems"],
  },
  {
    slug: "ai-engineer-l3",
    title: "AI Engineer (Level 3) – Advanced Internship / Fast-track to Full-Time",
    department: "Engineering",
    type: "Internship",
    location: "Remote",
    summary:
      "This role is for highly capable builders who can take ownership of systems and drive execution independently.",
    responsibilities: [
      "Design and architect scalable AI systems and applications.",
      "Lead development across frontend, backend, and AI layers.",
      "Build and optimize APIs, pipelines, and deployment systems.",
      "Work with GPU workloads and performance optimization.",
      "Integrate advanced AI models and inference providers.",
      "Review code, mentor junior engineers, and guide best practices.",
      "Make decisions around system design, scalability, and security.",
    ],
    requirements: [
      "Strong experience with MERN stack, Next.js, and modern frontend systems.",
      "Hands-on expertise with Docker, Kubernetes, and deployment pipelines.",
      "Deep understanding of APIs, system design, and architecture patterns.",
      "Experience with AI tooling ecosystems (OpenRouter, Groq, Fal AI, etc.).",
      "Familiarity with agentic IDEs and modern dev workflows.",
      "Solid grasp of authentication, security, and scaling systems.",
      "Understanding of GPU workloads, latency, and optimization tradeoffs.",
    ],
    perks: [
      "Type: Advanced Internship / Fast-track to Full-Time.",
      "Compensation: Paid (based on experience and impact).",
      "Growth: leadership and architecture ownership opportunities.",
      "Ownership of core systems and architecture decisions.",
    ],
    tags: ["Paid", "Leadership", "Architecture"],
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
              {[position.type, ...(position.tags ?? [])].map((tag) => (
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
                These positions are internships with high learning and real ownership.
                Compensation and outcomes vary by level, and strong performance can unlock faster growth.
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
