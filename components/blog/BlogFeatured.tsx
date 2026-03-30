"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

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
    authorPhoto: p.authorPhoto,
  };
}

export default function BlogFeatured() {
  const featuredPosts = useMemo(() => getFeaturedPosts().map(mapPost), []);
  const extraPosts = useMemo(() => allBlogPosts.slice(5, 10).map(mapPost), []);

  const leftPosts = featuredPosts.slice(0, 2);
  const centerPost = featuredPosts[2];
  const rightPosts = [...featuredPosts.slice(3, 5), ...extraPosts].slice(0, 5);

  return (
    <section
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          padding: "4rem 6rem 2.5rem",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
              fontSize: "0.62rem",
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
              letterSpacing: "-0.022em",
              margin: 0,
            }}
          >
            What&apos;s new at Quild.
          </h2>
        </div>

        <Link
          href="/blog"
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            fontSize: "0.62rem",
            color: "var(--sage)",
            letterSpacing: "0.15em",
            textDecoration: "none",
            textTransform: "uppercase",
            borderBottom: "1px solid var(--sage)",
            paddingBottom: "0.1rem",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          ALL POSTS →
        </Link>
      </div>

      <Separator />

      {/* ── Three-column grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.9fr) minmax(0, 1fr)",
        }}
      >
        {/* LEFT — two stacked cards */}
        <div
          style={{
            borderRight: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {leftPosts[0] && (
            <div style={{ padding: "2rem 2rem 0", flex: "0 0 auto" }}>
              <BlogPostCard {...leftPosts[0]} size="normal" />
            </div>
          )}

          <Separator style={{ margin: "0 2rem", width: "auto" }} />

          {leftPosts[1] && (
            <div style={{ padding: "2rem 2rem 0", flex: "0 0 auto" }}>
              <BlogPostCard {...leftPosts[1]} size="normal" />
            </div>
          )}
        </div>

        {/* CENTER — large featured post */}
        <div
          style={{
            borderRight: "1px solid var(--border)",
            padding: "2rem",
          }}
        >
          {centerPost && <BlogPostCard {...centerPost} size="large" />}
        </div>

        {/* RIGHT — compact essay list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Rail header */}
          <div
            style={{
              padding: "1.25rem 1.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Badge
              variant="outline"
              style={{
                fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                fontSize: "0.56rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--muted)",
                borderColor: "var(--border)",
                borderRadius: "2px",
                padding: "0.2rem 0.55rem",
                background: "transparent",
              }}
            >
              Recent Essays
            </Badge>

            <Link
              href="/blog"
              style={{
                fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                fontSize: "0.56rem",
                color: "var(--sage)",
                letterSpacing: "0.15em",
                textDecoration: "none",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                borderBottom: "1px solid var(--sage)",
                paddingBottom: "0.1rem",
              }}
            >
              VIEW ALL →
            </Link>
          </div>

          <Separator />

          {/* Compact items */}
          <div style={{ padding: "0 1.75rem" }}>
            {rightPosts.map((p) => (
              <BlogCompactItem
                key={p.slug}
                slug={p.slug}
                title={p.title}
                author={p.author}
                coverImage={p.coverImage}
                authorPhoto={p.authorPhoto}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile styles ── */}
      <style jsx>{`
        @media (max-width: 768px) {
          section > div:first-child {
            padding: 3rem 1.5rem 2rem !important;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
          }

          /* Stack the 3-col grid vertically, center post first */
          section > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }

          /* Center col first on mobile */
          section > div:nth-child(3) > div:nth-child(2) {
            order: 1;
            border-right: none !important;
            border-bottom: 1px solid var(--border);
            padding: 1.75rem 1.5rem !important;
          }

          /* Left col second */
          section > div:nth-child(3) > div:first-child {
            order: 2;
            border-right: none !important;
            border-bottom: 1px solid var(--border);
          }

          section > div:nth-child(3) > div:first-child > div {
            padding: 1.75rem 1.5rem 0 !important;
          }

          /* Right rail last */
          section > div:nth-child(3) > div:nth-child(3) {
            order: 3;
          }

          section > div:nth-child(3) > div:nth-child(3) > div:last-child {
            padding: 0 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}