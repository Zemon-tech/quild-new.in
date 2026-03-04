import Link from "next/link";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { blogPosts } from "@/lib/data/blog-posts";

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <div className="bg-[var(--background)]">
      <section className="border-b border-[var(--border)] py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <ScrollReveal>
            <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.98]">
              Blog
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="mt-6 max-w-2xl text-base leading-[1.7] text-[var(--text-secondary)]">
              Notes on shipping, craft, and community.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <div className="border border-[var(--border)] bg-[var(--surface)] p-10">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
              {featured.date} / {featured.readTime}
            </div>
            <div className="mt-4 font-display text-4xl font-semibold leading-[1.05]">
              {featured.title}
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
              {featured.excerpt}
            </p>
            <div className="mt-6">
              <Link
                href={`/blog/${featured.slug}`}
                className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent)]"
              >
                READ MORE →
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-6">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="col-span-12 border border-[var(--border)] bg-[var(--surface)] p-8 md:col-span-4"
              >
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                  {p.date} / {p.readTime}
                </div>
                <div className="mt-3 font-display text-2xl font-semibold leading-[1.1]">
                  {p.title}
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {p.excerpt}
                </p>
                <div className="mt-5 text-xs text-[var(--text-secondary)]">
                  {p.author}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
