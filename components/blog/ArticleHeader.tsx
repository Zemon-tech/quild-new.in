"use client";

import type { BlogPost } from "@/lib/data/blog-posts";
import { useEffect, useState } from "react";
import { Link, Copy } from "lucide-react";
import Image from "next/image";

export default function ArticleHeader({ post }: { post: BlogPost }) {
  const readTimeMinutes = post.readTimeMinutes ?? Number.parseInt(post.readTime, 10);

  const titleFontSize = "clamp(1.8rem, 6vw, 2.5rem)";

  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const onCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
  };

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
            <Copy style={iconStyle} />
          </button>

          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener"
            aria-label="Share on X"
            style={iconButtonStyle}
          >
            <Image 
              src="https://cdn.brandfetch.io/idS5WhqBbM/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1692089092800" 
              alt="X" 
              width={16} 
              height={16} 
              style={iconStyle} 
            />
          </a>

          <a
            href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener"
            aria-label="Share on LinkedIn"
            style={iconButtonStyle}
          >
            <Image 
              src="https://cdn.brandfetch.io/idJFz6sAsl/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1740371012665" 
              alt="LinkedIn" 
              width={16} 
              height={16} 
              style={iconStyle} 
            />
          </a>

          <a
            href={shareUrl}
            target="_blank"
            rel="noopener"
            aria-label="Open link"
            style={iconButtonStyle}
          >
            <Link style={iconStyle} />
          </a>
        </div>
      </div>
    </div>
  );
}
