"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { manifestoPanels } from "@/lib/data/manifesto";

interface ManifestoPanelProps {
  n: number;
  image: string;
  gradient: string;
  headline: string;
  body: string;
  isActive: boolean;
}

function ManifestoPanel({ n, image, gradient, headline, body, isActive }: ManifestoPanelProps) {
  return (
    <div
      className="absolute inset-0 transition-opacity duration-500"
      style={{
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradient wash */}
      <div
        className="absolute inset-0"
        style={{ background: gradient }}
      />

      {/* Panel number — top left */}
      <div
        style={{
          position: "absolute",
          top: "8rem",
          left: "6rem",
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          fontSize: "0.7rem",
          color: "rgba(255, 255, 255, 0.55)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        0{n} / 05
      </div>

      {/* Headline — vertically centered, left side */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "6rem",
          transform: "translateY(-50%)",
          maxWidth: "65%",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: "clamp(3.5rem, 6vw, 7rem)",
            lineHeight: 0.92,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            whiteSpace: "pre-line",
            textShadow: "0 2px 40px rgba(0,0,0,0.2)",
          }}
        >
          {headline}
        </h2>
      </div>

      {/* Body text — bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: "8rem",
          right: "6rem",
          maxWidth: "380px",
          textAlign: "right",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "1rem",
            color: "rgba(255, 255, 255, 0.8)",
            lineHeight: 1.75,
          }}
        >
          {body}
        </p>
        {/* Only on panel 05 — add the CTA link below body */}
        {n === 5 && (
          <a
            href="/apply"
            style={{
              display: "inline-block",
              marginTop: "1.5rem",
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              borderBottom: "1px solid rgba(255,255,255,0.6)",
              paddingBottom: "2px",
              textDecoration: "none",
              transition: "border-color 0.25s ease, color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottomColor = "rgba(255,255,255,1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.6)";
            }}
          >
            APPLY NOW →
          </a>
        )}
      </div>
    </div>
  );
}

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activePanel, setActivePanel] = useState(0);
  const progressRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    ({ gsap }) => {
      const container = containerRef.current;
      if (!container) return;

      const progressEls = progressRef.current.filter(Boolean);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const panelIndex = Math.min(
              Math.floor(self.progress * 5),
              4
            );
            setActivePanel(panelIndex);
          },
        },
      });

      // Animate progress indicators
      manifestoPanels.forEach((_, i) => {
        if (i === 0) return;
        tl.to(
          progressEls[i - 1],
          { color: "rgba(15,15,13,0.2)", duration: 0.1 },
          i - 1
        );
        tl.to(
          progressEls[i],
          { color: "var(--sage)", duration: 0.1 },
          i - 1 + 0.1
        );
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    []
  );

  return (
    <section
      ref={containerRef}
      id="manifesto"
      className="relative h-screen bg-[var(--bg)] overflow-hidden"
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
        }}
      />

      {/* Progress indicator — right side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <div
          className="flex flex-col gap-3"
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "0.85rem",
          }}
        >
          {manifestoPanels.map((panel, i) => (
            <div
              key={panel.n}
              ref={(el) => {
                progressRef.current[i] = el;
              }}
              style={{
                color:
                  i === activePanel
                    ? "#FFFFFF"
                    : "rgba(255,255,255,0.25)",
                transition: "color 0.3s ease",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
          ))}
        </div>
      </div>

      {/* Panels */}
      <div className="absolute inset-0">
        {manifestoPanels.map((panel) => (
          <ManifestoPanel
            key={panel.n}
            n={panel.n}
            image={panel.image}
            gradient={panel.gradient}
            headline={panel.headline}
            body={panel.body}
            isActive={activePanel === panel.n - 1}
          />
        ))}
      </div>
    </section>
  );
}
