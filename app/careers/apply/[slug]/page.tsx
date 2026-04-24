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
    summary: "Work on building real-world software systems using AI tools and frameworks, going beyond simple prompt-based applications. You will design, integrate, and scale intelligent systems.",
    responsibilities: [
      "Build AI-powered applications using tools like: Cursor, Windsurf, Lovable (and similar emerging tools)",
      "Design and implement APIs, plugins, and internal libraries",
      "Design and implement Multi-agent systems and workflows",
      "Design and implement Retrieval-Augmented Generation (RAG) pipelines",
      "Translate product ideas into scalable system architectures",
      "Handle edge cases, reliability, and security concerns",
      "Optimize performance, latency, and cost of AI systems",
      "Deploy and maintain production-grade applications"
    ],
    technicalExposure: [
      "System Design & Distributed Systems",
      "AI application architecture (LLMs, embeddings, vector DBs)",
      "Backend engineering (APIs, microservices)",
      "UI/UX integration with AI systems",
      "Observability, logging, and debugging",
      "Scaling (load handling, infra decisions)"
    ],
    requirements: [
      "Strong problem-solving ability",
      "Familiarity with at least one programming language (Python/JS preferred)",
      "Understanding of APIs and basic system architecture",
      "Ability to learn tools independently",
      "High ownership and execution speed"
    ],
    bonus: [
      "Experience with LangChain, vector databases, or agent frameworks",
      "Built and deployed any real project"
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
    summary: "Work on building real-world software systems using AI tools and frameworks, going beyond simple prompt-based applications. You will design, integrate, and scale intelligent systems.",
    responsibilities: [
      "Build AI-powered applications using tools like: Cursor, Windsurf, Lovable (and similar emerging tools)",
      "Design and implement APIs, plugins, and internal libraries",
      "Design and implement Multi-agent systems and workflows",
      "Design and implement Retrieval-Augmented Generation (RAG) pipelines",
      "Translate product ideas into scalable system architectures",
      "Handle edge cases, reliability, and security concerns",
      "Optimize performance, latency, and cost of AI systems",
      "Deploy and maintain production-grade applications"
    ],
    technicalExposure: [
      "System Design & Distributed Systems",
      "AI application architecture (LLMs, embeddings, vector DBs)",
      "Backend engineering (APIs, microservices)",
      "UI/UX integration with AI systems",
      "Observability, logging, and debugging",
      "Scaling (load handling, infra decisions)"
    ],
    requirements: [
      "Strong problem-solving ability",
      "Familiarity with at least one programming language (Python/JS preferred)",
      "Understanding of APIs and basic system architecture",
      "Ability to learn tools independently",
      "High ownership and execution speed"
    ],
    bonus: [
      "Experience with LangChain, vector databases, or agent frameworks",
      "Built and deployed any real project"
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
    summary: "Work on building real-world software systems using AI tools and frameworks, going beyond simple prompt-based applications. You will design, integrate, and scale intelligent systems.",
    responsibilities: [
      "Build AI-powered applications using tools like: Cursor, Windsurf, Lovable (and similar emerging tools)",
      "Design and implement APIs, plugins, and internal libraries",
      "Design and implement Multi-agent systems and workflows",
      "Design and implement Retrieval-Augmented Generation (RAG) pipelines",
      "Translate product ideas into scalable system architectures",
      "Handle edge cases, reliability, and security concerns",
      "Optimize performance, latency, and cost of AI systems",
      "Deploy and maintain production-grade applications"
    ],
    technicalExposure: [
      "System Design & Distributed Systems",
      "AI application architecture (LLMs, embeddings, vector DBs)",
      "Backend engineering (APIs, microservices)",
      "UI/UX integration with AI systems",
      "Observability, logging, and debugging",
      "Scaling (load handling, infra decisions)"
    ],
    requirements: [
      "Strong problem-solving ability",
      "Familiarity with at least one programming language (Python/JS preferred)",
      "Understanding of APIs and basic system architecture",
      "Ability to learn tools independently",
      "High ownership and execution speed"
    ],
    bonus: [
      "Experience with LangChain, vector databases, or agent frameworks",
      "Built and deployed any real project"
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
    summary: "Own and build the visual and narrative identity of the company across platforms using AI-powered creative workflows.",
    responsibilities: [
      "Create and manage brand presence across social platforms",
      "Design and produce short-form videos, reels, and edits",
      "Design and produce visual assets (posts, carousels, thumbnails)",
      "Design and produce podcast/video content",
      "Maintain consistent brand aesthetics and storytelling",
      "Use AI tools for content generation, editing, and scaling output",
      "Collaborate with product and engineering teams for storytelling"
    ],
    toolsAndStack: [
      "Canva",
      "Figma",
      "Google AI Studio",
      "Video editing tools (AI + manual workflows)",
      "Internal content pipelines"
    ],
    requirements: [
      "Strong sense of design, storytelling, and aesthetics",
      "Ability to execute content quickly and consistently",
      "Understanding of social media dynamics and growth loops",
      "Comfortable experimenting with AI tools"
    ],
    bonus: [
      "Experience growing a page or personal brand",
      "Video editing and motion design skills"
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
    summary: "Own and build the visual and narrative identity of the company across platforms using AI-powered creative workflows.",
    responsibilities: [
      "Create and manage brand presence across social platforms",
      "Design and produce short-form videos, reels, and edits",
      "Design and produce visual assets (posts, carousels, thumbnails)",
      "Design and produce podcast/video content",
      "Maintain consistent brand aesthetics and storytelling",
      "Use AI tools for content generation, editing, and scaling output",
      "Collaborate with product and engineering teams for storytelling"
    ],
    toolsAndStack: [
      "Canva",
      "Figma",
      "Google AI Studio",
      "Video editing tools (AI + manual workflows)",
      "Internal content pipelines"
    ],
    requirements: [
      "Strong sense of design, storytelling, and aesthetics",
      "Ability to execute content quickly and consistently",
      "Understanding of social media dynamics and growth loops",
      "Comfortable experimenting with AI tools"
    ],
    bonus: [
      "Experience growing a page or personal brand",
      "Video editing and motion design skills"
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
    summary: "Focus on deep research and foundational work. This is not surface-level AI usage — this role is about understanding how systems work at a fundamental level.",
    responsibilities: [
      "Research and design AI model training workflows",
      "Research and design Data pipelines and infrastructure",
      "Research and design Model evaluation and benchmarking strategies",
      "Explore LLM architectures and fine-tuning approaches",
      "Explore Efficient training methods",
      "Explore System-level optimizations",
      "Translate research into actionable roadmaps",
      "Work on long-term, high-complexity problems"
    ],
    technicalAreas: [
      "Machine Learning fundamentals",
      "Deep Learning pipelines",
      "Data engineering",
      "Algorithms & core Computer Science",
      "Model training & evaluation"
    ],
    requirements: [
      "Strong curiosity and ability to go deep into topics",
      "Solid understanding of core CS concepts",
      "Ability to read research papers and extract insights",
      "Patience to work on hard problems over long periods"
    ],
    bonus: [
      "Experience with PyTorch / TensorFlow",
      "Experience training or fine-tuning models",
      "Published projects or research work"
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
    summary: "Focus on deep research and foundational work. This is not surface-level AI usage — this role is about understanding how systems work at a fundamental level.",
    responsibilities: [
      "Research and design AI model training workflows",
      "Research and design Data pipelines and infrastructure",
      "Research and design Model evaluation and benchmarking strategies",
      "Explore LLM architectures and fine-tuning approaches",
      "Explore Efficient training methods",
      "Explore System-level optimizations",
      "Translate research into actionable roadmaps",
      "Work on long-term, high-complexity problems"
    ],
    technicalAreas: [
      "Machine Learning fundamentals",
      "Deep Learning pipelines",
      "Data engineering",
      "Algorithms & core Computer Science",
      "Model training & evaluation"
    ],
    requirements: [
      "Strong curiosity and ability to go deep into topics",
      "Solid understanding of core CS concepts",
      "Ability to read research papers and extract insights",
      "Patience to work on hard problems over long periods"
    ],
    bonus: [
      "Experience with PyTorch / TensorFlow",
      "Experience training or fine-tuning models",
      "Published projects or research work"
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
              <Link href="https://tally.so/r/Gxo9Rp" target="_blank" rel="noopener noreferrer">Apply</Link>
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

            {/* Optional technical fields per role */}
            {/* @ts-ignore - position may have these fields */}
            {position.technicalExposure && (
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
                  Technical Exposure
                </h2>
                <div className="mt-5">
                  <ul className="space-y-3 font-sans text-[1rem] leading-[1.85] text-[var(--muted)]">
                    {/* @ts-ignore */}
                    {position.technicalExposure.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--ink)]/50 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* @ts-ignore */}
            {position.toolsAndStack && (
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
                  Tools & Stack
                </h2>
                <div className="mt-5">
                  <ul className="space-y-3 font-sans text-[1rem] leading-[1.85] text-[var(--muted)]">
                    {/* @ts-ignore */}
                    {position.toolsAndStack.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--ink)]/50 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* @ts-ignore */}
            {position.technicalAreas && (
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
                  Technical Areas
                </h2>
                <div className="mt-5">
                  <ul className="space-y-3 font-sans text-[1rem] leading-[1.85] text-[var(--muted)]">
                    {/* @ts-ignore */}
                    {position.technicalAreas.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--ink)]/50 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* @ts-ignore */}
            {position.bonus && (
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
                  Bonus
                </h2>
                <div className="mt-5">
                  <ul className="space-y-3 font-sans text-[1rem] leading-[1.85] text-[var(--muted)]">
                    {/* @ts-ignore */}
                    {position.bonus.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--sage)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            <Separator className="my-8" />

            {/* Global Sections */}
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
                What We Value (Across All Roles)
              </h2>
              <div className="mt-5">
                <ul className="space-y-3 font-sans text-[1rem] leading-[1.85] text-[var(--muted)]">
                  <li className="flex gap-3">
                    <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--ink)]/50 shrink-0" />
                    <span><strong>Grit over talent</strong> — consistency and effort matter more than background</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--ink)]/50 shrink-0" />
                    <span><strong>Speed of learning</strong> — ability to pick up unfamiliar tools quickly</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--ink)]/50 shrink-0" />
                    <span><strong>Ownership</strong> — treating problems as your own</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--ink)]/50 shrink-0" />
                    <span><strong>Execution {">"} ideas</strong> — shipping matters</span>
                  </li>
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
                Work Environment
              </h2>
              <div className="mt-5">
                <ul className="space-y-3 font-sans text-[1rem] leading-[1.85] text-[var(--muted)]">
                  <li className="flex gap-3">
                    <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--ink)]/50 shrink-0" />
                    <span>Fast-paced, high-ownership culture</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--ink)]/50 shrink-0" />
                    <span>Real production exposure (not dummy tasks)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--ink)]/50 shrink-0" />
                    <span>Work on systems that scale</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--ink)]/50 shrink-0" />
                    <span>Direct involvement in product building</span>
                  </li>
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
                Growth Opportunity
              </h2>
              <p className="mt-4 font-sans text-[1rem] leading-[1.9] text-[var(--muted)]">
                Interns will gain:
              </p>
              <div className="mt-3">
                <ul className="space-y-3 font-sans text-[1rem] leading-[1.85] text-[var(--muted)]">
                  <li className="flex gap-3">
                    <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--sage)] shrink-0" />
                    <span>Real-world system design experience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--sage)] shrink-0" />
                    <span>Exposure to cutting-edge AI workflows</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--sage)] shrink-0" />
                    <span>Hands-on production deployment experience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[11px] h-[3px] w-[3px] bg-[var(--sage)] shrink-0" />
                    <span>Deep understanding of building scalable products</span>
                  </li>
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
                  <Link href="https://tally.so/r/Gxo9Rp" target="_blank" rel="noopener noreferrer">Apply now →</Link>
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
