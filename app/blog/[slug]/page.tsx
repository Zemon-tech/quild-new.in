import { notFound } from "next/navigation";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { blogPosts } from "@/lib/data/blog-posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="bg-[var(--background)]">
      <section className="border-b border-[var(--border)] py-16">
        <div className="mx-auto w-full max-w-[680px] px-6">
          <ScrollReveal>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
              {post.date} / {post.readTime} / {post.author}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05]">
              {post.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-[680px] px-6">
          <div className="space-y-5 text-base leading-[1.9] text-[var(--text-primary)]">
            {post.content.split("\n\n").map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
