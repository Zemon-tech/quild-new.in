"use client";

import { useRef } from "react";

import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";

const founders = [
  {
    name: "Shivang Kandoi",
    role: "CEO & Co-Founder",
    bio: "I kept watching people smarter than me stay stuck\nbecause they didn't have the right environment.\nI decided to stop waiting for someone else to build it.",
    initials: "SK",
    image: "https://zemonhouseofbuilders.in/shivang.png",
  },
  {
    name: "Satyajit Jena",
    role: "CTO & Co-Founder",
    bio: "I believe the best engineering happens when you're\nsurrounded by people who care as much as you do.\nQuild is us building that environment from scratch.",
    initials: "SJ",
    image: "https://zemonhouseofbuilders.in/satyajit.png",
  },
] as const;

function FounderPlaceholder({ initials }: { initials: string }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "3 / 4",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large initials */}
      <span
        style={{
          fontFamily: "var(--font-cormorant)",
          fontWeight: 700,
          fontSize: "8rem",
          color: "var(--border)",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {initials}
      </span>

      {/* Photo coming soon label */}
      <span
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.6rem",
          color: "var(--muted)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        PHOTO COMING SOON
      </span>

      {/* Sage top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "var(--sage)",
        }}
      />
    </div>
  );
}

export default function AboutFounders() {
  const isMobile = useIsMobile();
  const founderCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    ({ gsap }) => {
      const cards = founderCardRefs.current.filter(Boolean);

      const created: Array<gsap.core.Tween | gsap.core.Timeline> = [];

      if (cards.length > 0) {
        created.push(
          gsap.fromTo(
            cards,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.15,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cards[0],
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
    <section className="bg-[var(--bg)]" style={{ padding: isMobile ? "3rem 0" : "8rem 0" }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.7rem",
            color: "var(--muted)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          THE TEAM&nbsp;&nbsp;/&nbsp;&nbsp;04
        </div>

        <h2
          style={{
            marginTop: "1.25rem",
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: isMobile ? "clamp(1.8rem, 6vw, 2.5rem)" : "clamp(2.2rem, 4vw, 3.4rem)",
            lineHeight: 1,
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            whiteSpace: "pre-line",
            marginBottom: isMobile ? "2rem" : undefined,
          }}
        >
          {`Two 19-year-olds from Delhi\nwho got tired of waiting.`}
        </h2>

        <div className={`flex flex-col md:flex-row md:gap-10 ${isMobile ? "gap-[3rem]" : "gap-10 mt-14"}`}>
          {founders.map((f, idx) => (
            <div
              key={f.name}
              ref={(el) => {
                founderCardRefs.current[idx] = el;
              }}
              style={{
                width: "100%",
              }}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "3 / 4", borderTop: "3px solid var(--sage)", paddingTop: isMobile ? "1.5rem" : undefined }}
              >
                <img
                  src={f.image}
                  alt={f.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(1)",
                    transition: "filter 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(1)";
                  }}
                  onError={(e) => {
                    const img = e.currentTarget;
                    const container = img.parentElement;
                    if (container) {
                      container.replaceWith(document.createElement("div"));
                    }
                  }}
                />
              </div>

              <div style={{ paddingTop: "1.25rem" }}>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 600,
                    fontSize: isMobile ? "1.5rem" : "1.8rem",
                    color: "var(--ink)",
                  }}
                >
                  {f.name}
                </div>
                <div
                  style={{
                    marginTop: "0.4rem",
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: isMobile ? "0.6rem" : "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--sage)",
                  }}
                >
                  {f.role}
                </div>
                <p
                  style={{
                    marginTop: "0.75rem",
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: isMobile ? "0.9rem" : "0.95rem",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    whiteSpace: isMobile ? "normal" : "pre-line",
                    overflowWrap: isMobile ? "break-word" : undefined,
                    wordBreak: isMobile ? "normal" : undefined,
                    hyphens: isMobile ? "none" : undefined,
                  }}
                >
                  {isMobile ? f.bio.replace(/\n/g, ' ') : f.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mx-auto mt-16 text-center"
          style={{
            maxWidth: "600px",
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: isMobile ? "0.9rem" : "1.15rem",
            lineHeight: 1.5,
            color: "var(--muted)",
            whiteSpace: isMobile ? "normal" : "pre-line",
            overflowWrap: isMobile ? "break-word" : undefined,
            wordBreak: isMobile ? "normal" : undefined,
            hyphens: isMobile ? "none" : undefined,
            padding: isMobile ? "0 1.5rem" : undefined,
          }}
        >
          {isMobile ? `Both studying Computer Science at USICT, GGSIPU, Delhi. Both 19. Both convinced this is the right time to build this.` : `Both studying Computer Science at USICT, GGSIPU, Delhi.\nBoth 19. Both convinced this is the right time to build this.`}
        </p>
      </div >
    </section >
  );
}
