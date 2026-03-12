"use client";

import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";

// Marquee items
const marqueeItems = [
  "TeamFlow — built by Quild builders",
  "Compose — WYSIWYG editor, shipped",
  "Perplx — agentic AI research system",
  "Small team. Real products.",
  "We build what we teach",
  "Development → Design → Product → Beyond",
  "Cohort 01 — now open",
  "Join the builders",
];

 const COLLAGE_CARDS = [
   {
     bg: "var(--sage)",
     width: "220px",
     height: "260px",
     top: "20px",
     left: "30px",
     rotate: "-8deg",
     icon: "grid",
     zIndex: 2,
   },
   {
     bg: "var(--surface)",
     width: "160px",
     height: "200px",
     top: "60px",
     left: "210px",
     rotate: "12deg",
     icon: "lines",
     zIndex: 3,
   },
   {
     bg: "var(--void)",
     width: "200px",
     height: "240px",
     top: "10px",
     left: "360px",
     rotate: "-14deg",
     icon: "person",
     zIndex: 1,
   },
   {
     bg: "var(--sage)",
     width: "130px",
     height: "130px",
     top: "330px",
     left: "60px",
     rotate: "16deg",
     icon: null,
     zIndex: 4,
   },
   {
     bg: "var(--surface)",
     width: "180px",
     height: "200px",
     top: "280px",
     left: "220px",
     rotate: "-6deg",
     icon: "lines",
     zIndex: 2,
   },
   {
     bg: "#3D4A35",
     width: "150px",
     height: "170px",
     top: "300px",
     left: "420px",
     rotate: "18deg",
     icon: null,
     zIndex: 3,
   },
 ] as const;

export default function HonestStatement() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mobileCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const captionRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  useGSAP(
    ({ gsap }) => {
      const section = sectionRef.current;
      const leftCol = leftColRef.current;
      const caption = captionRef.current;

      if (!section || !leftCol) return;

      const leftElements = leftCol.querySelectorAll("[data-animate]");

      // Left column text stagger
      const leftTween = gsap.fromTo(
        leftElements,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );

      const cards = (isMobile ? mobileCardRefs.current : cardRefs.current).filter(
        (c): c is HTMLDivElement => Boolean(c)
      );

      const scrollStart = isMobile ? "top 75%" : "top 70%";
      const stagger = isMobile ? 0.07 : 0.08;
      const duration = isMobile ? 0.65 : 0.7;

      const cardTween = gsap.from(cards, {
        scale: 0.85,
        opacity: 0,
        rotate: (_i: number, target: Element) =>
          parseFloat((target as HTMLElement).dataset.rotate ?? "0") + 8,
        stagger,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: scrollStart,
          once: true,
        },
      });

      const captionTween = caption
        ? gsap.from(caption, {
            opacity: 0,
            y: 10,
            duration: 0.5,
            delay: 0.6,
            scrollTrigger: {
              trigger: section,
              start: scrollStart,
              once: true,
            },
          })
        : null;

      return () => {
        leftTween.scrollTrigger?.kill();
        leftTween.kill();
        cardTween.scrollTrigger?.kill();
        cardTween.kill();
        captionTween?.scrollTrigger?.kill();
        captionTween?.kill();
      };
    },
    []
  );

  const collageCardStyle = {
    position: "absolute" as const,
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
    zIndex: 2,
    cursor: "pointer",
  };

  return (
    <section
      id="honest-statement"
      ref={sectionRef}
      className="min-h-screen bg-[var(--bg)] pt-28 border-t border-[var(--border)]"
    >
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Main two-column content */}
      <div className="mx-auto w-full max-w-[1280px] px-8 pb-16">
        <div
          className="grid grid-cols-12 gap-8"
          style={
            isMobile
              ? {
                  display: "flex",
                  flexDirection: "column",
                  gap: "3rem",
                }
              : undefined
          }
        >
          {/* Left Column - 5/12 Text */}
          <div
            ref={leftColRef}
            className="col-span-12 md:col-span-5 pr-16"
            style={
              isMobile
                ? {
                    width: "100%",
                    paddingRight: 0,
                  }
                : undefined
            }
          >
            <div data-animate className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)]">
              WHERE WE STAND
            </div>

            <p data-animate className="mt-8 text-[1.15rem] leading-[1.85] text-[var(--ink)]">
              We&apos;re not a big organization. We don&apos;t have a
              decade of alumni or a famous investor backing us.
              <br /><br />
              We&apos;re a small group of builders who got tired of
              watching talented people stay stuck because they
              were afraid of AI — or didn&apos;t know where to start.
              <br /><br />
              <span className="font-medium">So we built the room we wished existed.</span>
            </p>

            <Separator data-animate className="mt-10" />

            <div
              data-animate
              className="mt-10 grid grid-cols-12 gap-6"
              style={
                isMobile
                  ? {
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }
                  : undefined
              }
            >
              <div className="col-span-12 md:col-span-6">
                <p className="font-display text-[1.3rem] leading-[1.4] text-[var(--ink)]">
                  &ldquo;We started with software development.&rdquo;
                </p>
              </div>
              <div className="col-span-12 md:col-span-6">
                <p className="text-[0.95rem] leading-[1.75] text-[var(--muted)]">
                  &ldquo;We&apos;re expanding into every field where builders need to grow.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - 7/12 Collage */}
          <div className="col-span-12 md:col-span-7">
            <div style={{ position: "relative", flex: 1 }}>
              {isMobile ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    padding: "1rem 0 0",
                    overflowX: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "0",
                      marginBottom: "-30px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <div
                      ref={(el) => {
                        mobileCardRefs.current[0] = el;
                      }}
                      data-rotate={"-8"}
                      style={{
                        width: "48%",
                        aspectRatio: "3/4",
                        background: "var(--sage)",
                        transform: "rotate(-8deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "-16px",
                        zIndex: 1,
                        boxShadow: collageCardStyle.boxShadow,
                      }}
                    >
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "6px",
                          opacity: 0.35,
                        }}
                      >
                        {[0, 1, 2, 3].map((j) => (
                          <div
                            key={j}
                            style={{
                              width: "12px",
                              height: "12px",
                              background: "#FFFFFF",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div
                      ref={(el) => {
                        mobileCardRefs.current[1] = el;
                      }}
                      data-rotate={"12"}
                      style={{
                        width: "42%",
                        aspectRatio: "3/4",
                        background: "var(--void)",
                        transform: "rotate(12deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                        marginTop: "20px",
                        boxShadow: collageCardStyle.boxShadow,
                      }}
                    >
                      <div style={{ opacity: 0.25 }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="7" r="4" fill="white" />
                          <path
                            d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                            stroke="white"
                            strokeWidth="1.5"
                            fill="none"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                      zIndex: 2,
                      paddingLeft: "10%",
                    }}
                  >
                    <div
                      ref={(el) => {
                        mobileCardRefs.current[2] = el;
                      }}
                      data-rotate={"-5"}
                      style={{
                        width: "55%",
                        aspectRatio: "4/3",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        transform: "rotate(-5deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: collageCardStyle.boxShadow,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "5px",
                          opacity: 0.3,
                        }}
                      >
                        {[0, 1, 2].map((j) => (
                          <div
                            key={j}
                            style={{
                              width: "32px",
                              height: "2px",
                              background: "var(--ink)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0 8%",
                      marginTop: "-20px",
                      position: "relative",
                      zIndex: 3,
                    }}
                  >
                    <div
                      ref={(el) => {
                        mobileCardRefs.current[3] = el;
                      }}
                      data-rotate={"18"}
                      style={{
                        width: "30%",
                        aspectRatio: "1/1",
                        background: "var(--sage)",
                        transform: "rotate(18deg)",
                        boxShadow: collageCardStyle.boxShadow,
                      }}
                    />

                    <div
                      ref={(el) => {
                        mobileCardRefs.current[4] = el;
                      }}
                      data-rotate={"-16"}
                      style={{
                        width: "28%",
                        aspectRatio: "1/1",
                        background: "#3D4A35",
                        transform: "rotate(-16deg)",
                        marginTop: "15px",
                        boxShadow: collageCardStyle.boxShadow,
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    height: "520px",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  {COLLAGE_CARDS.map((card, i) => (
                    <div
                      key={i}
                      ref={(el) => {
                        cardRefs.current[i] = el;
                      }}
                      data-rotate={card.rotate}
                      style={{
                        ...collageCardStyle,
                        top: card.top,
                        left: card.left,
                        width: card.width,
                        height: card.height,
                        background: card.bg,
                        transform: `rotate(${card.rotate})`,
                        zIndex: card.zIndex,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: card.bg === "var(--surface)" ? "1px solid var(--border)" : "none",
                      }}
                    >
                      {card.icon === "grid" && (
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "6px",
                            opacity: 0.35,
                          }}
                        >
                          {[0, 1, 2, 3].map((j) => (
                            <div
                              key={j}
                              style={{
                                width: "12px",
                                height: "12px",
                                background: "#FFFFFF",
                              }}
                            />
                          ))}
                        </div>
                      )}

                      {card.icon === "lines" && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                            opacity: 0.3,
                          }}
                        >
                          {[0, 1, 2].map((j) => (
                            <div
                              key={j}
                              style={{
                                width: "32px",
                                height: "2px",
                                background: "var(--ink)",
                              }}
                            />
                          ))}
                        </div>
                      )}

                      {card.icon === "person" && (
                        <div style={{ opacity: 0.25 }}>
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="7" r="4" fill="white" />
                            <path
                              d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                              stroke="white"
                              strokeWidth="1.5"
                              fill="none"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div
                ref={captionRef}
                style={{
                  textAlign: "center",
                  marginTop: isMobile ? "2.5rem" : "2rem",
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: isMobile ? "0.88rem" : "0.95rem",
                  color: "var(--muted)",
                  letterSpacing: "0.02em",
                }}
              >
                things we shipped while building Quild →
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee — Transparent Background */}
      <div
        className="border-t border-[var(--border)] bg-transparent py-[14px] overflow-hidden whitespace-nowrap mt-16"
      >
        <div
          className="inline-flex"
          style={{
            animation: "marquee 28s linear infinite",
            gap: "0",
          }}
        >
          {/* Render items twice for seamless loop */}
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-[var(--ink)] pr-12"
              style={
                isMobile
                  ? {
                      fontSize: "0.62rem",
                      letterSpacing: "0.08em",
                    }
                  : undefined
              }
            >
              {item}
              <span className="text-[var(--sage)] mx-6">×</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
