"use client";

import type { BlogPost } from "@/lib/data/blog-posts";

export default function ArticleHeader({ post }: { post: BlogPost }) {
  const readTimeMinutes = post.readTimeMinutes ?? Number.parseInt(post.readTime, 10);

  const titleFontSize = "clamp(1.8rem, 6vw, 2.5rem)";

  const onCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const iconButtonStyle: React.CSSProperties = {
    width: "30px",
    height: "30px",
    borderRadius: "999px",
    border: "1px solid var(--border)",
    background: "transparent",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--ink)",
    textDecoration: "none",
    cursor: "pointer",
    padding: 0,
  };

  const iconStyle: React.CSSProperties = {
    width: "16px",
    height: "16px",
    display: "block",
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h1
        className="article-title"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: titleFontSize,
          lineHeight: 1.0,
          color: "var(--ink)",
          letterSpacing: "-0.02em",
          marginBottom: "1rem",
          margin: "0 0 1rem",
        }}
      >
        {post.title}
      </h1>

      {post.excerpt && (
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "1.2rem",
            color: "var(--muted)",
            lineHeight: 1.5,
            marginBottom: "1.5rem",
            margin: "0 0 1.5rem",
          }}
        >
          {post.excerpt}
        </p>
      )}

      <div
        className="article-header-top"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          paddingBottom: "0.75rem",
          marginTop: "1.25rem",
          marginBottom: "1.5rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="article-meta"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.9rem",
            color: "var(--muted)",
            lineHeight: 1.2,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <span>{post.date}</span>
          <span style={{ color: "var(--border)" }}>·</span>
          <span>
            {"Updated "}
            {post.date}
          </span>
        </div>

        <div
          className="article-share"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            flexWrap: "wrap",
          }}
        >
          <button type="button" onClick={onCopy} aria-label="Copy link" style={iconButtonStyle}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" style={iconStyle}>
              <path d="M10 13a5 5 0 0 1 0-7l1.5-1.5a5 5 0 1 1 7 7L17 13" />
              <path d="M14 11a5 5 0 0 1 0 7L12.5 19.5a5 5 0 1 1-7-7L7 11" />
            </svg>
          </button>

          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener"
            aria-label="Share on X"
            style={iconButtonStyle}
          >
            <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: "0.85rem" }}>
              X
            </span>
          </a>

          <a
            href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener"
            aria-label="Share on LinkedIn"
            style={iconButtonStyle}
          >
            <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: "0.85rem" }}>
              in
            </span>
          </a>

          <a
            href={shareUrl}
            target="_blank"
            rel="noopener"
            aria-label="Open link"
            style={iconButtonStyle}
          >
            <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: "0.85rem" }}>
              ↗
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
