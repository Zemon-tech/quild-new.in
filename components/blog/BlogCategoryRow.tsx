"use client";

import Link from "next/link";

import BlogPostCard, { type BlogPostCardProps } from "@/components/blog/BlogPostCard";
import { getPostsByTag } from "@/lib/blog-data";

interface BlogCategoryRowProps {
  category: string;
  tagline: string;
  tag: string;
}

function initialsFromName(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function mapPost(p: ReturnType<typeof getPostsByTag>[number]): BlogPostCardProps {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    author: p.author,
    authorInitials: initialsFromName(p.author),
    date: p.date,
    readTime: p.readTimeMinutes ?? Number(p.readTime.match(/\d+/)?.[0] ?? 4),
    tag: (p.tag ?? p.category ?? "Essay").toUpperCase(),
    coverImage: p.coverImage,
    authorPhoto: p.authorPhoto,
  };
}

export default function BlogCategoryRow({ category, tagline, tag }: BlogCategoryRowProps) {
  const posts = getPostsByTag(tag).slice(0, 4).map(mapPost);
  const emptyCount = Math.max(0, 4 - posts.length);

  return (
    <section style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
      <div
        style={{
          padding: "1.5rem 6rem",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
              fontSize: "0.7rem",
              fontWeight: 500,
              color: "var(--ink)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {category}
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontSize: "0.88rem",
              color: "var(--muted)",
              marginLeft: "1.5rem",
            }}
          >
            {tagline}
          </span>
        </div>
        <Link
          href={`/blog/category/${tag}`}
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            fontSize: "0.65rem",
            color: "var(--muted)",
            letterSpacing: "0.12em",
            textDecoration: "none",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          SEE ALL →
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {posts.map((post, i) => (
          <div
            key={post.slug}
            style={{
              borderRight: i < 3 ? "1px solid var(--border)" : "none",
              padding: "2.5rem",
              transition: "background 0.25s ease",
            }}
          >
            <BlogPostCard {...post} size="normal" />
          </div>
        ))}

        {Array.from({ length: emptyCount }).map((_, i) => (
          <div
            key={`empty-${i}`}
            style={{
              borderRight: posts.length + i < 3 ? "1px solid var(--border)" : "none",
              background: "var(--surface)",
              opacity: 0.4,
              minHeight: "420px",
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section > div:first-child {
            padding: 1.25rem 1.5rem !important;
          }
          section > div:first-child span:nth-child(2) {
            display: none;
          }
          section > div:nth-child(2) {
            display: flex !important;
            overflow-x: auto;
            gap: 0;
            scrollbar-width: none;
          }
          section > div:nth-child(2)::-webkit-scrollbar {
            display: none;
          }
          section > div:nth-child(2) > div {
            min-width: 280px;
            padding: 1.5rem !important;
            border-right: 1px solid var(--border) !important;
          }
        }
      `}</style>
    </section>
  );
}
