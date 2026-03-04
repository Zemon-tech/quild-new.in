"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  {
    num: "01",
    title: "Cohort Programs",
    body: "Learn together, ship together. Each cohort runs for 6–8 weeks with a focused curriculum and real project outcomes. Not courses. Cohorts.",
  },
  {
    num: "02",
    title: "Peer Network",
    body: "A small, curated group of builders who are actually building. No noise. No lurkers. Just people who show up.",
  },
  {
    num: "03",
    title: "Workshops & Events",
    body: "Regular sessions — online and in-person — on AI tools, engineering skills, product thinking, and building in public.",
  },
  {
    num: "04",
    title: "Build-in-Public Accountability",
    body: "Weekly check-ins, public progress threads, and a culture where shipping is celebrated more than planning.",
  },
  {
    num: "05",
    title: "AI Tools & Resources",
    body: "Curated guides, tool stacks, and frameworks for using AI in your actual work — not theoretical, not generic.",
  },
];

export default function WhatYouGet() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const featuredRef = useRef<HTMLDivElement | null>(null);
  const smallRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    smallRefs.current = smallRefs.current.slice(0, 4);
  }, []);

  useGSAP(
    ({ gsap }) => {
      const header = headerRef.current;
      const featured = featuredRef.current;
      const small = smallRefs.current.filter(Boolean);

      const triggerEl = header ?? featured ?? null;
      if (!triggerEl) return;

      const created: Array<gsap.core.Tween | gsap.core.Timeline> = [];

      if (header) {
        const headerChildren = Array.from(header.children);
        created.push(
          gsap.fromTo(
            headerChildren,
            { y: 18, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.08,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: triggerEl,
                start: "top 75%",
              },
            }
          )
        );
      }

      if (featured) {
        created.push(
          gsap.fromTo(
            featured,
            { x: -40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: triggerEl,
                start: "top 75%",
              },
            }
          )
        );
      }

      if (small.length) {
        created.push(
          gsap.fromTo(
            small,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.08,
              scrollTrigger: {
                trigger: triggerEl,
                start: "top 75%",
              },
            }
          )
        );
      }

      return () => {
        created.forEach((t) => t.kill());
      };
    },
    []
  );

  return (
    <section className="bg-[var(--bg)] py-[7rem]">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div
          ref={headerRef}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          style={
            isMobile
              ? {
                  flexDirection: "column",
                  gap: "1.25rem",
                  marginBottom: "2rem",
                  alignItems: "flex-start",
                }
              : undefined
          }
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--muted)",
              }}
            >
              WHAT QUILD ACTUALLY OFFERS
            </div>
            <h2
              style={{
                marginTop: "1rem",
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "clamp(2.2rem,4vw,4rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
              }}
            >
              Here's what that actually looks like.
            </h2>
          </div>

          <div
            style={{
              maxWidth: "520px",
              textAlign: "right",
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              color: "var(--muted)",
              lineHeight: 1.6,
              ...(isMobile
                ? {
                    textAlign: "left",
                    alignSelf: "flex-start",
                    fontSize: "0.9rem",
                  }
                : null),
            }}
          >
            Five things we offer. All of them real. None of them padded to look more impressive than they are.
          </div>
        </div>

        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-2"
          style={{ border: "1px solid var(--border)", background: "transparent" }}
          role="presentation"
          aria-hidden
        >
          <div
            ref={featuredRef}
            className="relative"
            style={{
              gridRow: "1 / 3",
              padding: "3rem",
              minHeight: "520px",
              borderRight: "1px solid var(--border)",
              background: "transparent",
              transition: "background-color 0.25s ease, border-left 0.25s ease",
              ...(isMobile
                ? {
                    gridRow: "auto",
                    gridColumn: "1",
                    minHeight: "340px",
                    borderRight: "none",
                    borderBottom: "1px solid var(--border)",
                    padding: "2rem 1.5rem",
                  }
                : null),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--surface)";
              e.currentTarget.style.borderLeft = "3px solid var(--sage)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderLeft = "0px solid transparent";
            }}
          >
            <div
              style={{
                position: "absolute",
                right: "1.25rem",
                bottom: "-0.75rem",
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 700,
                fontSize: "14rem",
                color: "var(--border)",
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
                ...(isMobile
                  ? {
                      fontSize: "8rem",
                      bottom: "0",
                      right: "1rem",
                    }
                  : null),
              }}
            >
              01
            </div>

            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--sage)",
              }}
            >
              FEATURED
            </div>

            <div style={{ marginTop: "2.25rem", maxWidth: "520px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 600,
                  fontSize: "clamp(2rem,3.5vw,3rem)",
                  lineHeight: 1.05,
                  color: "var(--ink)",
                }}
              >
                {items[0].title}
              </h3>
              <p
                style={{
                  marginTop: "1rem",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  fontSize: "1rem",
                }}
              >
                {items[0].body}
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                borderTop: "1px solid var(--border)",
                padding: "1.25rem 3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                ...(isMobile ? { padding: "1.25rem 1.5rem" } : null),
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                }}
              >
                6–8 WEEKS · IN-PERSON + ONLINE
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: "var(--sage)",
                  textTransform: "uppercase",
                }}
              >
                SEE COHORTS →
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gridTemplateRows: "auto",
            }}
          >
            {items.slice(1).map((item, idx) => {
              const borderRight =
                isMobile ? "none" : idx % 2 === 0 ? "1px solid var(--border)" : "none";
              const borderBottom =
                isMobile ? "1px solid var(--border)" : idx < 2 ? "1px solid var(--border)" : "none";

              return (
                <div
                  key={item.num}
                  ref={(el) => {
                    smallRefs.current[idx] = el;
                  }}
                  style={{
                    minHeight: isMobile ? "180px" : "240px",
                    padding: isMobile ? "1.5rem" : "2rem",
                    borderRight,
                    borderBottom,
                    background: "transparent",
                    transition: "background-color 0.25s ease, border-left 0.25s ease",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--surface)";
                    e.currentTarget.style.borderLeft = "3px solid var(--sage)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderLeft = "0px solid transparent";
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    {item.num}
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontWeight: 600,
                        fontSize: "1.6rem",
                        lineHeight: 1.1,
                        color: "var(--ink)",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        marginTop: "0.75rem",
                        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                        color: "var(--muted)",
                      }}
                    >
                      {item.body}
                    </div>
                  </div>

                  <div style={{ marginTop: "auto" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                        fontSize: "0.9rem",
                        color: "var(--sage)",
                      }}
                    >
                      →
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
