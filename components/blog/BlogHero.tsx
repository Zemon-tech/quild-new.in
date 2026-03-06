"use client";

import Link from "next/link";
import { useMemo, useRef } from "react";

import { useGSAP } from "@/hooks/useGSAP";
import { blogPosts } from "@/lib/data/blog-posts";

function initialsFromName(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

export default function BlogHero() {
  const featuredPost = useMemo(
    () => blogPosts.find((p) => p.featured) ?? blogPosts[0],
    []
  );

  const rootRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const headlineWrapRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    ({ gsap }) => {
      const root = rootRef.current;
      const left = leftRef.current;
      const headlineWrap = headlineWrapRef.current;
      const image = imageRef.current;
      const scroll = scrollRef.current;
      if (!root || !left || !headlineWrap || !image || !scroll) return;

      const lines = headlineWrap.querySelectorAll("[data-hero-line]");

      gsap.set(left, { x: -40, opacity: 0 });
      gsap.set(lines, { yPercent: 100, clipPath: "inset(0 0 100% 0)" });
      gsap.set(image, { scale: 1.04 });

      const tl = gsap.timeline();
      tl.to(left, { x: 0, opacity: 1, duration: 0.9 })
        .to(
          lines,
          {
            yPercent: 0,
            clipPath: "inset(0 0 0% 0)",
            stagger: 0.1,
            duration: 0.9,
          },
          "-=0.35"
        )
        .to(image, { scale: 1, duration: 1.8, ease: "power2.out" }, "-=0.6");

      gsap.to(scroll, {
        y: 8,
        duration: 0.9,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      return () => {
        tl.kill();
        gsap.killTweensOf(scroll);
      };
    },
    []
  );

  const authorInitials = initialsFromName(featuredPost.author);
  const readTimeMinutes = featuredPost.readTimeMinutes ?? 4;
  const tagLabel = (featuredPost.tag ?? featuredPost.category ?? "featured").toUpperCase();

  return (
    <section
      id="blog-hero"
      ref={rootRef}
      style={{
        position: "relative",
        height: "100svh",
        background: "var(--void)",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <div
        ref={leftRef}
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 5rem 6rem 6rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            fontSize: "0.65rem",
            color: "var(--sage)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            border: "1px solid var(--sage)",
            padding: "0.3rem 0.75rem",
            width: "fit-content",
          }}
        >
          {tagLabel}
        </div>

        <div ref={headlineWrapRef} style={{ overflow: "hidden" }}>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(2.5rem, 4.5vw, 5.5rem)",
              lineHeight: 0.95,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ display: "block", overflow: "hidden" }}>
              <span data-hero-line style={{ display: "block", willChange: "transform" }}>
                {featuredPost.title}
              </span>
            </span>
          </h1>
        </div>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            maxWidth: "420px",
            marginBottom: "2.5rem",
          }}
        >
          {featuredPost.excerpt}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "1.5rem",
            gap: "2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "var(--sage)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#fff",
              }}
            >
              {authorInitials}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                  fontSize: "0.6rem",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {featuredPost.author}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                  fontSize: "0.58rem",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {featuredPost.date} · {readTimeMinutes} MIN READ
              </div>
            </div>
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            style={{
              fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "#FFFFFF",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.35)",
              padding: "0.65rem 1.5rem",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "border-color 0.2s ease, color 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--sage)";
              e.currentTarget.style.color = "var(--sage)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            READ →
          </Link>
        </div>
      </div>

      <div
        style={{
          width: "50%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          ref={imageRef}
          src={featuredPost.coverImage ?? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}
          alt={featuredPost.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            transform: "scale(1)",
            opacity: featuredPost.coverImage ? 1 : 0,
          }}
        />
        {!featuredPost.coverImage ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255,255,255,0.05)",
            }}
          />
        ) : null}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(15,15,14,0.6) 0%, transparent 40%)",
          }}
        />
      </div>

      <div
        ref={scrollRef}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
          fontSize: "0.6rem",
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "0.15em",
        }}
      >
        SCROLL
        <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.22)" }} />
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #blog-hero {
            flex-direction: column;
          }
          #blog-hero > div:first-child {
            width: 100% !important;
            padding: 0 1.5rem 2.75rem 1.5rem !important;
            order: 2;
          }
          #blog-hero > div:nth-child(2) {
            width: 100% !important;
            height: 55svh;
            order: 1;
          }
        }
      `}</style>
    </section>
  );
}
