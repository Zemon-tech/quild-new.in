"use client";

import Link from "next/link";
import { useMemo } from "react";

import BlogPostCard, { type BlogPostCardProps } from "@/components/blog/BlogPostCard";
import BlogCompactItem from "@/components/blog/BlogCompactItem";
import { allBlogPosts, getFeaturedPosts } from "@/lib/blog-data";

function initialsFromName(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function mapPost(p: ReturnType<typeof getFeaturedPosts>[number]): BlogPostCardProps {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    author: p.author,
    authorInitials: initialsFromName(p.author),
    date: p.date,
    readTime: p.readTimeMinutes ?? 4,
    tag: (p.tag ?? p.category ?? "Essay").toUpperCase(),
    coverImage: p.coverImage,
  };
}

export default function BlogFeatured() {
  const featuredPosts = useMemo(() => getFeaturedPosts().map(mapPost), []);
  const extraPosts = useMemo(
    () => allBlogPosts.slice(5, 10).map(mapPost),
    []
  );

  const leftPosts = featuredPosts.slice(0, 2);
  const centerPost = featuredPosts[2];
  const rightPosts = [...featuredPosts.slice(3, 5), ...extraPosts].slice(0, 5);

  return (
    <section
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        padding: "5rem 0",
      }}
    >
      <div
        style={{
          padding: "0 6rem 3rem",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
              fontSize: "0.65rem",
              color: "var(--muted)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            LATEST
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(1.8rem, 3vw, 3rem)",
              color: "var(--ink)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            What&apos;s new at Quild.
          </h2>
        </div>

        <Link
          href="#latest"
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            fontSize: "0.65rem",
            color: "var(--sage)",
            letterSpacing: "0.15em",
            textDecoration: "none",
            textTransform: "uppercase",
            borderBottom: "1px solid var(--sage)",
            paddingBottom: "0.1rem",
            whiteSpace: "nowrap",
          }}
        >
          ALL POSTS →
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 2fr) minmax(0, 1.05fr)",
          minHeight: "620px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            borderRight: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "0rem 2rem",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {leftPosts[0] ? <BlogPostCard {...leftPosts[0]} size="normal" /> : null}
          </div>
          <div style={{ flex: 1, padding: "0rem 2rem" }}>
            {leftPosts[1] ? <BlogPostCard {...leftPosts[1]} size="normal" /> : null}
          </div>
        </div>

        <div style={{ borderRight: "1px solid var(--border)", padding: "1.75rem 2rem" }}>
          {centerPost ? <BlogPostCard {...centerPost} size="large" /> : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              padding: "1.25rem 1.75rem",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                fontSize: "0.65rem",
                color: "var(--muted)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Recent essays
            </div>
            <Link
              href="#latest"
              style={{
                fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                fontSize: "0.65rem",
                color: "var(--sage)",
                letterSpacing: "0.15em",
                textDecoration: "none",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              VIEW ALL →
            </Link>
          </div>

          <div
            style={{
              padding: "1.25rem 1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0rem",
            }}
          >
            {rightPosts.map((p) => (
              <BlogCompactItem
                key={p.slug}
                slug={p.slug}
                title={p.title}
                author={p.author}
                coverImage={p.coverImage}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 3.5rem 0 !important;
          }
          section > div:first-child {
            padding: 0 1.5rem 2rem !important;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          section > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
          section > div:nth-child(2) > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border);
            padding: 1.5rem !important;
          }
          section > div:nth-child(2) > div:last-child {
            border-bottom: none;
          }
          section > div:nth-child(2) > div > div {
            padding: 1.5rem !important;
          }

          /* Reorder: big center post first, then left stack, then right rail */
          section > div:nth-child(2) > div:nth-child(2) {
            order: 1;
          }
          section > div:nth-child(2) > div:first-child {
            order: 2;
          }
          section > div:nth-child(2) > div:nth-child(3) {
            order: 3;
          }
        }
      `}</style>
    </section>
  );
}
