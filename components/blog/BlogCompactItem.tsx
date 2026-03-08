"use client";

import Link from "next/link";

type BlogCompactItemProps = {
  slug: string;
  title: string;
  author: string;
  coverImage?: string;
  authorPhoto?: string;
};

export default function BlogCompactItem({ slug, title, author, coverImage, authorPhoto }: BlogCompactItemProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      style={{
        display: "flex",
        gap: "0.75rem",
        alignItems: "flex-start",
        padding: "0.875rem 0",
        borderBottom: "1px solid var(--border)",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Thumb coverImage={coverImage} title={title} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h4
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: 1.15,
            color: "var(--ink)",
            margin: "0 0 0.25rem",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h4>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          {authorPhoto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={authorPhoto}
              alt={author}
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          ) : null}
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
              fontSize: "0.56rem",
              color: "var(--muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {author}
          </span>
        </div>
      </div>
    </Link>
  );
}

function Thumb({
  coverImage,
  title,
}: {
  coverImage?: string;
  title: string;
}) {
  return (
    <div
      style={{
        width: "56px",
        height: "56px",
        flexShrink: 0,
        background: "var(--surface)",
        overflow: "hidden",
      }}
    >
      {coverImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={coverImage}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : null}
    </div>
  );
}
