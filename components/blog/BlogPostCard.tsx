"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface BlogPostCardProps {
  title: string;
  excerpt: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: number;
  tag: string;
  slug: string;
  coverImage?: string;
  size?: "normal" | "large";
}

export default function BlogPostCard({ size = "normal", ...post }: BlogPostCardProps) {
  const isLarge = size === "large";
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [imgError, setImgError] = useState(false);

  const coverAspectRatio = useMemo(() => (isLarge ? "16/9" : "4/3"), [isLarge]);

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
                fontSize: isLarge
                  ? "clamp(1.4rem, 2vw, 2rem)"
                  : "clamp(1.1rem, 1.5vw, 1.4rem)",
                lineHeight: 1.1,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                margin: "0 0 0.4rem",
              }}
            >
              {post.title}
            </h3>

            {isLarge ? (
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
            ) : null}

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
