"use client";

import { useRef } from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { useGSAP } from "@/hooks/useGSAP";

const philosophyItems = [
  {
    number: "01",
    heading: "Every field can be engineered.",
    body: "Quild is not just for CS students or AI developers. If you are a mechanical engineer, a designer, a researcher, a biologist — and you want to build something serious — this community is for you. We define \"builder\" broadly on purpose.",
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
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const rightItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    ({ gsap }) => {
      const section = sectionRef.current;
      const left = leftRef.current;
      const divider = dividerRef.current;
      const items = rightItemRefs.current.filter(Boolean);

      const created: Array<gsap.core.Tween | gsap.core.Timeline> = [];

      if (left) {
        created.push(
          gsap.fromTo(
            left,
            { x: -40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section ?? left,
                start: "top 70%",
              },
            }
          )
        );
      }

      if (divider) {
        gsap.set(divider, { scaleX: 0, transformOrigin: "left" });
        created.push(
          gsap.to(divider, {
            scaleX: 1,
            duration: 0.6,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section ?? divider,
              start: "top 70%",
            },
          })
        );
      }

      if (items.length > 0) {
        created.push(
          gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.12,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section ?? items[0],
                start: "top 70%",
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
        padding: isMobile ? "4rem 0" : "8rem 0",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.65rem",
          color: "var(--muted)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
          paddingLeft: isMobile ? "1.5rem" : "6rem",
          paddingRight: isMobile ? "1.5rem" : "6rem",
        }}
      >
        WHAT WE BUILD FOR &nbsp;·&nbsp; 05.5 / 07
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          borderTop: "1px solid var(--border)",
          marginTop: "3rem",
        }}
      >
        <div
          ref={leftRef}
          style={{
            padding: isMobile ? "3rem 1.5rem 2rem" : "5rem 6rem 5rem",
            borderRight: isMobile ? "none" : "1px solid var(--border)",
            borderBottom: isMobile ? "1px solid var(--border)" : "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: isMobile
                ? "clamp(2rem, 7vw, 3rem)"
                : "clamp(2.2rem, 3.5vw, 4rem)",
              lineHeight: 1.0,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              margin: "0 0 3rem",
            }}
          >
            AI cannot replace
            <br />the humans who
            <br />choose to build.
          </h2>

          <div
            ref={dividerRef}
            style={{
              width: "40px",
              height: "2px",
              background: "var(--sage)",
              marginBottom: "1.5rem",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "400px",
              margin: 0,
            }}
          >
            We&apos;re not a bootcamp. We don&apos;t train you for a job. We exist to develop
            the kind of builders who create technology — in any discipline — that didn&apos;t
            exist before.
          </p>
        </div>

        <div style={{ padding: isMobile ? "2.5rem 1.5rem 3rem" : "5rem 6rem 5rem" }}>
          {philosophyItems.map((item, i) => (
            <div
              key={item.number}
              ref={(el) => {
                rightItemRefs.current[i] = el;
              }}
              style={{
                paddingBottom: i < 2 ? "2.5rem" : 0,
                marginBottom: i < 2 ? "2.5rem" : 0,
                borderBottom: i < 2 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.6rem",
                  color: "var(--sage)",
                  letterSpacing: "0.15em",
                  marginBottom: "0.75rem",
                }}
              >
                {item.number}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
                  lineHeight: 1.1,
                  color: "var(--ink)",
                  margin: "0 0 0.75rem",
                }}
              >
                {item.heading}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.92rem",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
