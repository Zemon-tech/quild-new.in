"use client";

import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { useGSAP } from "@/hooks/useGSAP";

export default function AboutBelief() {
  const isMobile = useIsMobile();

  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLImageElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const accentRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const closingRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    ({ gsap }) => {
      const section = sectionRef.current;
      if (!section) return;

      const created: Array<gsap.core.Tween | gsap.core.Timeline> = [];

      // Background — gentle scale only, no opacity
      if (bgRef.current) {
        created.push(
          gsap.fromTo(
            bgRef.current,
            { scale: 1.08 },
            {
              scale: 1,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                toggleActions: "play none none reverse",
              },
            }
          )
        );
      }

      // Label — slide in from left (matches Philosophy left column)
      if (labelRef.current) {
        created.push(
          gsap.fromTo(
            labelRef.current,
            { x: -24, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: section, start: "top 70%" },
            }
          )
        );
      }

      // Headline lines — staggered y fade (matches Philosophy right items)
      const headlineEls = [line1Ref.current, line2Ref.current].filter(Boolean);
      if (headlineEls.length > 0) {
        created.push(
          gsap.fromTo(
            headlineEls,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.12,
              delay: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: section, start: "top 70%" },
            }
          )
        );
      }

      // Accent line — scale from left (matches Philosophy accent)
      if (accentRef.current) {
        gsap.set(accentRef.current, { scaleX: 0, transformOrigin: "left" });
        created.push(
          gsap.to(accentRef.current, {
            scaleX: 1,
            duration: 0.6,
            delay: 0.38,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 70%" },
          })
        );
      }

      // Body + closing — y fade, staggered
      const footerEls = [bodyRef.current, closingRef.current].filter(Boolean);
      if (footerEls.length > 0) {
        created.push(
          gsap.fromTo(
            footerEls,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.14,
              delay: 0.46,
              ease: "power2.out",
              scrollTrigger: { trigger: section, start: "top 65%" },
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
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100svh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#1e231e",
      }}
    >
      {/* Background image — no overlay */}
      <img
        ref={bgRef}
        src="/about-belief.png"
        alt=""
        draggable={false}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          willChange: "transform",
          pointerEvents: "none",
        } as React.CSSProperties}
      />

      {/* ── Section label ── */}
      <div
        ref={labelRef}
        style={{
          position: "absolute",
          top: isMobile ? "4.5rem" : "6rem",
          left: isMobile ? "1.5rem" : "5rem",
          zIndex: 4,
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <Badge
          variant="outline"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            borderColor: "rgba(255,255,255,0.2)",
            borderRadius: "2px",
            padding: "0.25rem 0.65rem",
            background: "transparent",
          }}
        >
          The Belief
        </Badge>
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.28)",
          }}
        >
          02 / 07
        </span>
      </div>

      {/* ── Headline block ── */}
      <div
        style={{
          position: "absolute",
          top: isMobile ? "50%" : "42%",
          left: isMobile ? "1.5rem" : "5rem",
          right: isMobile ? "1.5rem" : "34%",
          transform: isMobile ? "translateY(-52%)" : "translateY(-50%)",
          zIndex: 4,
        }}
      >
        <div
          ref={line1Ref}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: isMobile
              ? "clamp(1.9rem, 7vw, 2.8rem)"
              : "clamp(2.8rem, 4vw, 5rem)",
            lineHeight: 1.06,
            color: "#FFFFFF",
            letterSpacing: "-0.022em",
            marginBottom: "0.5rem",
          }}
        >
          &ldquo;AI is the most powerful tool
          {!isMobile && <br />}
          {isMobile && " "}
          ever handed to a builder.
        </div>

        <Separator
          style={{
            width: "40px",
            background: "rgba(255,255,255,0.22)",
            margin: isMobile ? "1rem 0" : "1.25rem 0",
          }}
        />

        <div
          ref={line2Ref}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: isMobile
              ? "clamp(1.4rem, 5.5vw, 2.2rem)"
              : "clamp(2rem, 2.9vw, 3.6rem)",
            lineHeight: 1.1,
            color: "rgba(255,255,255,0.56)",
            letterSpacing: "-0.018em",
          }}
        >
          Most people are scared of it.
          {!isMobile && <br />}
          {isMobile && " "}
          We think that&rsquo;s the opportunity.&rdquo;
        </div>
      </div>

      {/* ── Bottom row ── */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? "2.5rem" : "4.5rem",
          left: isMobile ? "1.5rem" : "5rem",
          right: isMobile ? "1.5rem" : "5rem",
          zIndex: 4,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column" : "row",
          gap: "2rem",
        }}
      >
        {/* Body copy */}
        <div ref={bodyRef} style={{ maxWidth: isMobile ? "100%" : "340px" }}>
          <div
            ref={accentRef}
            style={{
              width: "44px",
              height: "2px",
              background: "var(--sage)",
              borderRadius: "1px",
              marginBottom: "1.1rem",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: isMobile ? "0.875rem" : "0.92rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.82,
              margin: 0,
            }}
          >
            We don&apos;t fight the machine. We learn to use it better than
            anyone else. Because the builders who combine human creativity with
            AI speed are about to do things that have never been done before.
          </p>
        </div>

        {/* Closing — desktop only */}
        {!isMobile && (
          <div ref={closingRef} style={{ textAlign: "right", flexShrink: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.32)",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              That&apos;s who Quild is for.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}