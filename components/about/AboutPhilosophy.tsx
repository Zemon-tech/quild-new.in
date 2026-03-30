"use client";

import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { useGSAP } from "@/hooks/useGSAP";

const philosophyItems = [
  {
    number: "01",
    heading: "Every field can be engineered.",
    body: 'Quild is not just for CS students or AI developers. If you are a mechanical engineer, a designer, a researcher, a biologist — and you want to build something serious — this community is for you. We define "builder" broadly on purpose.',
  },
  {
    number: "02",
    heading: "We partner with the people who know.",
    body: "Professors, researchers, industry experts, practitioners — people who are deeply embedded in their field and passionate about the next generation mastering it. Quild is building a network of partners who will guide builders through the disciplines that matter.",
  },
  {
    number: "03",
    heading: "We know this will take time.",
    body: "Jensen Huang didn't build NVIDIA in a day. We are not trying to conquer the world by next week. We know exactly how to do this — and we are making a long, serious commitment to doing it right. One cohort, one builder, one discipline at a time.",
  },
] as const;

export default function AboutPhilosophy() {
  const isMobile = useIsMobile();

  const sectionRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const accentRef = useRef<HTMLDivElement | null>(null);
  const rightItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    ({ gsap }) => {
      const section = sectionRef.current;
      const left = leftRef.current;
      const accent = accentRef.current;
      const items = rightItemRefs.current.filter(Boolean);
      const created: Array<gsap.core.Tween | gsap.core.Timeline> = [];

      if (left) {
        created.push(
          gsap.fromTo(
            left,
            { x: -32, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: section ?? left, start: "top 72%" },
            }
          )
        );
      }

      if (accent) {
        gsap.set(accent, { scaleX: 0, transformOrigin: "left" });
        created.push(
          gsap.to(accent, {
            scaleX: 1,
            duration: 0.7,
            delay: 0.4,
            ease: "power2.out",
            scrollTrigger: { trigger: section ?? accent, start: "top 72%" },
          })
        );
      }

      if (items.length > 0) {
        created.push(
          gsap.fromTo(
            items,
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.14,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section ?? items[0],
                start: "top 72%",
              },
            }
          )
        );
      }

      return () => {
        created.forEach((t) => {
          t.scrollTrigger?.kill();
          t.kill();
        });
      };
    },
    [isMobile]
  );

  return (
    <section
      id="about-philosophy"
      ref={sectionRef}
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: isMobile ? "3.5rem 0 4rem" : "6rem 0 8rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow on the right column */}
      {!isMobile && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "42%",
            height: "100%",
            background:
              "radial-gradient(ellipse at top right, color-mix(in srgb, var(--sage) 7%, transparent), transparent 68%)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* ── Section label row ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          paddingLeft: isMobile ? "1.5rem" : "6rem",
          paddingRight: isMobile ? "1.5rem" : "6rem",
          marginBottom: "2.75rem",
        }}
      >
        <Badge
          variant="outline"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--muted)",
            borderColor: "var(--border)",
            borderRadius: "2px",
            padding: "0.25rem 0.65rem",
            background: "transparent",
          }}
        >
          What we build for
        </Badge>
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--muted)",
            opacity: 0.45,
          }}
        >
          05.5 / 07
        </span>
      </div>

      <Separator style={{ background: "var(--border)" }} />

      {/* ── Main two-column grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        }}
      >
        {/* LEFT — headline + body */}
        <div
          ref={leftRef}
          style={{
            padding: isMobile ? "3rem 1.5rem 2.5rem" : "5.5rem 5rem 5.5rem 6rem",
            borderRight: isMobile ? "none" : "1px solid var(--border)",
            borderBottom: isMobile ? "1px solid var(--border)" : "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "3rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: isMobile
                ? "clamp(2.2rem, 8vw, 3.2rem)"
                : "clamp(2.8rem, 3.8vw, 4.4rem)",
              lineHeight: 1.02,
              color: "var(--ink)",
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            AI cannot replace
            <br />the humans who
            <br />choose to build.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div
              ref={accentRef}
              style={{
                width: "44px",
                height: "2px",
                background: "var(--sage)",
                borderRadius: "1px",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.94rem",
                color: "var(--muted)",
                lineHeight: 1.85,
                maxWidth: "370px",
                margin: 0,
              }}
            >
              We&apos;re not a bootcamp. We don&apos;t train you for a job. We exist to
              develop the kind of builders who create technology — in any
              discipline — that didn&apos;t exist before.
            </p>
          </div>
        </div>

        {/* RIGHT — numbered philosophy list */}
        <div
          style={{
            padding: isMobile ? "2.5rem 1.5rem 3rem" : "5.5rem 6rem 5.5rem 5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {philosophyItems.map((item, i) => (
            <div key={item.number}>
              <div
                ref={(el) => {
                  rightItemRefs.current[i] = el;
                }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "28px 1fr",
                  gap: "1.25rem",
                  alignItems: "start",
                  paddingTop: i === 0 ? 0 : "2.5rem",
                  paddingBottom: "2.5rem",
                }}
              >
                {/* Number */}
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.14em",
                    color: "var(--sage)",
                    paddingTop: "0.4rem",
                    display: "block",
                  }}
                >
                  {item.number}
                </span>

                {/* Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "clamp(1.2rem, 1.85vw, 1.6rem)",
                      lineHeight: 1.12,
                      color: "var(--ink)",
                      margin: 0,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.heading}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.875rem",
                      color: "var(--muted)",
                      lineHeight: 1.82,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>

              {i < philosophyItems.length - 1 && (
                <Separator style={{ background: "var(--border)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}