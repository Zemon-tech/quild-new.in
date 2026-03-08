"use client";

import { useRef } from "react";
import { Separator } from "@/components/ui/separator";

import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";

const visionBlocks = [
  {
    label: "WHERE WE ARE",
    body: "Software development. Cohort programs. Delhi.\nA small, tight group of builders learning to use\nAI as a force multiplier, not a shortcut.",
  },
  {
    label: "WHERE WE'RE GOING",
    body: "Design. Product. AI/ML. Robotics. Mechanical engineering.\nAny field where a serious person wants to build something\nthat matters. If you're an engineer — in any discipline —\nQuild is being built for you.",
  },
  {
    label: "THE LONG GAME",
    body: "The largest community of builders, innovators, and\nengineers in the world. Not the noisiest — the best.\nAs AI gets more powerful, the humans who master it\nwill define the next century. We're building the room\nwhere those humans find each other.",
  },
] as const;

export default function AboutVision() {
  const isMobile = useIsMobile();
  const visionLeftRef = useRef<HTMLDivElement | null>(null);
  const visionBlockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    ({ gsap }) => {
      const left = visionLeftRef.current;
      const blocks = visionBlockRefs.current.filter(Boolean);

      const created: Array<gsap.core.Tween | gsap.core.Timeline> = [];

      if (left) {
        created.push(
          gsap.fromTo(
            left,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: left,
                start: "top 75%",
              },
            }
          )
        );
      }

      if (blocks.length > 0) {
        created.push(
          gsap.fromTo(
            blocks,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.12,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: blocks[0],
                start: "top 75%",
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
    []
  );

  return (
    <section
      className="relative z-[1] bg-[var(--bg)]"
      style={{ padding: isMobile ? "3rem 0" : "8rem 0" }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-12 md:gap-10">
          <div ref={visionLeftRef} className="w-full md:col-span-5">
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.7rem",
                color: "var(--muted)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
              className="mb-4 md:mb-0"
            >
              THE VISION&nbsp;&nbsp;/&nbsp;&nbsp;06
            </div>

            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: isMobile ? "clamp(1.8rem, 6vw, 2.5rem)" : "clamp(2.2rem, 3.5vw, 4rem)",
                lineHeight: 1,
                color: "var(--ink)",
                letterSpacing: "-0.02em",
                whiteSpace: isMobile ? "normal" : "pre-line",
                overflowWrap: isMobile ? "break-word" : undefined,
                wordBreak: isMobile ? "normal" : undefined,
                hyphens: isMobile ? "none" : undefined,
                maxWidth: isMobile ? "100%" : "520px",
              }}
              className="mt-0 md:mt-8"
            >
              {isMobile ? `We're not building a community. We're building the institution that serious builders deserve.` : `We're not building\na community.\n\nWe're building the\ninstitution that\nserious builders\ndeserve.`}
            </h2>
          </div>

          <div className="w-full md:col-span-6 md:col-start-7">
            {visionBlocks.map((b, idx) => (
              <div key={b.label}>
                {idx === 0 ? <Separator /> : null}
                <div
                  ref={(el) => {
                    visionBlockRefs.current[idx] = el;
                  }}
                  style={{
                    padding: isMobile ? "1.5rem 0" : "2.25rem 0",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {b.label}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      color: "var(--muted)",
                      whiteSpace: isMobile ? "normal" : "pre-line",
                      overflowWrap: isMobile ? "break-word" : undefined,
                      wordBreak: isMobile ? "normal" : undefined,
                      hyphens: isMobile ? "none" : undefined,
                    }}
                  >
                    {isMobile ? b.body.replace(/\n/g, ' ') : b.body}
                  </p>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
