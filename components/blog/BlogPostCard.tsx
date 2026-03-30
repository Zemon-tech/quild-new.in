"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export interface BlogPostCardProps {
  title: string;
  excerpt: string;
  author: string;
  authorInitials: string;
  authorPhoto?: string;
  date: string;
  readTime: number;
  tag: string;
  slug: string;
  coverImage?: string;
  size?: "normal" | "large";
  /** Left column: image bleeds full width, meta sits below */
  compact?: boolean;
  /** Center column: image fills ~65% of height, text below, centered */
  hero?: boolean;
}

export default function BlogPostCard({
  size = "normal",
  compact = false,
  hero = false,
  ...post
}: BlogPostCardProps) {
  const isLarge = size === "large";
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [imgError, setImgError] = useState(false);

  // ── HERO (center column) ──────────────────────────────────────────────────
  // Image fills the top ~65%, meta centred below
  if (hero) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {/* Image — flex-grow so it takes available space */}
        <div
          style={{
            flex: "1 1 0",
            overflow: "hidden",
            background: "var(--surface)",
            minHeight: 0,
          }}
        >
          {!imgError && post.coverImage ? (
            <img
              ref={imgRef}
              src={post.coverImage}
              alt={post.title}
              onError={() => setImgError(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "var(--surface)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "5rem",
                  fontWeight: 700,
                  color: "var(--border)",
                  fontStyle: "italic",
                }}
              >
                {post.authorInitials}
              </span>
            </div>
          )}
        </div>

        {/* Meta block — fixed height at bottom, centred */}
        <div
          style={{
            flexShrink: 0,
            padding: "1.75rem 2.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "0.6rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          {/* date · category */}
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
              fontSize: "0.56rem",
              color: "var(--muted)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {post.date}&nbsp;&nbsp;IN&nbsp;&nbsp;{post.tag}
          </div>

          <h3
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(1.5rem, 2.4vw, 2.2rem)",
              lineHeight: 1.08,
              color: "var(--ink)",
              letterSpacing: "-0.018em",
              margin: 0,
            }}
          >
            {post.title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontSize: "0.875rem",
              color: "var(--muted)",
              lineHeight: 1.65,
              margin: 0,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.excerpt}
          </p>

          {/* Author */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "0.25rem",
            }}
          >
            {post.authorPhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.authorPhoto}
                alt={post.author}
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
            ) : (
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "var(--sage)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                {post.authorInitials}
              </div>
            )}
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                fontSize: "0.56rem",
                color: "var(--ink)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {post.author}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // ── COMPACT (left column) ─────────────────────────────────────────────────
  // Image bleeds full width, meta sits tightly below with no side padding
  if (compact) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {/* Image — fixed aspect ratio 3/2 */}
        <div
          style={{
            width: "100%",
            aspectRatio: "3/2",
            overflow: "hidden",
            background: "var(--surface)",
            flexShrink: 0,
          }}
        >
          {!imgError && post.coverImage ? (
            <img
              ref={imgRef}
              src={post.coverImage}
              alt={post.title}
              onError={() => setImgError(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "var(--surface)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "var(--border)",
                  fontStyle: "italic",
                }}
              >
                {post.authorInitials}
              </span>
            </div>
          )}
        </div>

        {/* Meta */}
        <div
          style={{
            padding: "0.875rem 1rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
            flex: 1,
          }}
        >
          {/* date · category */}
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
              fontSize: "0.54rem",
              color: "var(--muted)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {post.date}&nbsp;&nbsp;IN&nbsp;&nbsp;{post.tag}
          </div>

          <h3
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
              lineHeight: 1.12,
              color: "var(--ink)",
              letterSpacing: "-0.015em",
              margin: 0,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.title}
          </h3>

          {/* Author */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              marginTop: "auto",
              paddingTop: "0.5rem",
            }}
          >
            {post.authorPhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.authorPhoto}
                alt={post.author}
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
            ) : (
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "var(--sage)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                {post.authorInitials}
              </div>
            )}
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                fontSize: "0.54rem",
                color: "var(--ink)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {post.author}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // ── DEFAULT (fallback, unchanged behaviour) ───────────────────────────────
  const coverAspectRatio = isLarge ? "16/9" : "4/3";

  return (
    <div style={{ background: "transparent" }}>
      <Card
        style={{
          background: "transparent",
          border: "none",
          borderRadius: 0,
          boxShadow: "none",
          display: "block",
        }}
      >
        <Link href={`/blog/${post.slug}`} style={{ display: "block", textDecoration: "none" }}>
          <div
            style={{
              width: "100%",
              aspectRatio: coverAspectRatio,
              overflow: "hidden",
              background: "var(--surface)",
              position: "relative",
            }}
          >
            {!imgError && post.coverImage ? (
              <img
                ref={imgRef}
                src={post.coverImage}
                alt={post.title}
                onError={() => setImgError(true)}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "var(--surface)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "4rem",
                    fontWeight: 700,
                    color: "var(--border)",
                    fontStyle: "italic",
                    lineHeight: 1,
                  }}
                >
                  {post.authorInitials}
                </span>
              </div>
            )}
          </div>

          <div style={{ padding: "0.75rem 0 1rem" }}>
            <Badge
              variant="outline"
              style={{
                fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--sage)",
                borderColor: "var(--sage)",
                borderRadius: 0,
                padding: "0.15rem 0.45rem",
                display: "inline-block",
                marginBottom: "0.5rem",
              }}
            >
              {post.tag}
            </Badge>

            <h3
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: isLarge ? "clamp(1.4rem, 2vw, 2rem)" : "clamp(1.1rem, 1.5vw, 1.4rem)",
                lineHeight: 1.1,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                margin: "0 0 0.4rem",
              }}
            >
              {post.title}
            </h3>

            {isLarge && (
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: "0.88rem",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  marginBottom: "0.75rem",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {post.excerpt}
              </p>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                borderTop: "1px solid var(--border)",
                paddingTop: "0.6rem",
                marginTop: isLarge ? "0" : "0.4rem",
              }}
            >
              {post.authorPhoto ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.authorPhoto}
                  alt={post.author}
                  style={{ width: "22px", height: "22px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                />
              ) : (
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: "var(--sage)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {post.authorInitials}
                </div>
              )}
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                  fontSize: "0.56rem",
                  color: "var(--ink)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {post.author}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                  fontSize: "0.54rem",
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                }}
              >
                {post.date} · {post.readTime} MIN
              </span>
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
}