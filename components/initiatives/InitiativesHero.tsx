"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef } from "react";

import GridLines from "@/components/ui/GridLines";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";

function splitIntoLines(text: string) {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}

export default function InitiativesHero() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  const lines = useMemo(
    () => splitIntoLines("Not one thing.\nNot one field.\nAll of it."),
    []
  );

  useGSAP(
    ({ gsap }) => {
      const root = rootRef.current;
      if (!root) return;

      const q = gsap.utils.selector(root);

      gsap.set(q("[data-reveal-line]"), {
        yPercent: 100,
        clipPath: "inset(0 0 100% 0)",
      });

      const tl = gsap.timeline();

      tl.to(q("[data-reveal-line]"), {
        yPercent: 0,
        clipPath: "inset(0 0 0% 0)",
        stagger: 0.1,
        duration: 0.9,
      }).fromTo(
        q("[data-load]"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1 },
        "-=0.4"
      );

      return () => {
        tl.kill();
      };
    },
    []
  );

  return (
    <section
      id="initiatives-hero"
      className="relative min-h-[100svh] border-b border-[var(--border)]"
      style={
        isMobile
          ? {
              height: "100svh",
              width: "100vw",
              padding: 0,
              margin: 0,
            }
          : undefined
      }
    >
      {/* Ghost word — background texture only */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/initiative.png"
          alt="Initiatives background"
          fill
          className="object-cover object-right"
          style={
            isMobile
              ? {
                  objectFit: "cover",
                  objectPosition: "center center",
                  width: "100%",
                  height: "100%",
                }
              : { objectPosition: "right center" }
          }
          priority
        />
      </div>

      <GridLines />

      <div
        ref={rootRef}
        className="relative z-10 mx-auto grid h-full min-h-[100svh] w-full max-w-[1280px] grid-cols-12 px-8"
        style={
          isMobile
            ? {
                width: "100vw",
                maxWidth: "100vw",
                paddingLeft: 0,
                paddingRight: 0,
                marginLeft: 0,
                marginRight: 0,
              }
            : undefined
        }
      >
        {/* Left Column - 7/12 */}
        <div
          className="col-span-12 flex flex-col justify-center pt-[120px] pb-10 md:col-span-8"
          style={
            isMobile
              ? {
                  width: "100%",
                  padding: "0 1.5rem",
                  paddingTop: "7rem",
                }
              : undefined
          }
        >

          {/* Eyebrow */}
          <div
            data-load
            className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/55"
            style={
              isMobile
                ? {
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                  }
                : undefined
            }
          >
            EVERYTHING WE&apos;RE BUILDING
          </div>

          <div className="mt-4 overflow-hidden">
            <h1
              className="text-[clamp(3.8rem,7.5vw,8rem)] font-semibold leading-[0.92] tracking-[-0.02em] text-white"
              style={
                isMobile
                  ? {
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      textShadow: "0 4px 40px rgba(0, 0, 0, 0.25)",
                      fontSize: "clamp(2.8rem, 10vw, 4rem)",
                      lineHeight: 0.95,
                    }
                  : {
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      textShadow: "0 4px 40px rgba(0, 0, 0, 0.25)",
                    }
              }
            >
              {lines.map((line) => (
                <span key={line} className="block overflow-hidden">
                  <span data-reveal-line className="block will-change-transform">
                    {line}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          {/* Subtext */}
          <p
            data-load
            className="mt-8 max-w-[520px] text-[1.1rem] leading-[1.75] text-white/80"
            style={
              isMobile
                ? {
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    maxWidth: "100%",
                    marginTop: "1.25rem",
                  }
                : { fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }
            }
          >
            One institution. Programs, cohorts, communities, and systems — built
            one proof at a time, for serious builders in every field.
          </p>

          <div
            data-load
            className="mt-10 flex flex-wrap gap-4"
            style={
              isMobile
                ? {
                    flexDirection: "column",
                    gap: "0.75rem",
                    marginTop: "2rem",
                    width: "100%",
                  }
                : undefined
            }
          >
            <Button
              asChild
              className="h-auto rounded-none bg-[var(--sage)] px-8 py-[0.85rem] text-white hover:bg-[var(--sage)]"
              style={
                isMobile
                  ? {
                      width: "100%",
                      textAlign: "center",
                      padding: "1rem",
                    }
                  : undefined
              }
            >
              <Link href="/initiatives">EXPLORE INITIATIVES →</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-none border border-white/60 bg-transparent px-8 py-[0.85rem] text-white hover:bg-transparent"
              style={
                isMobile
                  ? {
                      width: "100%",
                      textAlign: "center",
                      padding: "1rem",
                    }
                  : undefined
              }
            >
              <Link href="/apply">JOIN THE COMMUNITY →</Link>
            </Button>
          </div>
        </div>

        {/* Right Column - 4/12 */}
        <div
          className="col-span-12 hidden flex-col items-end justify-end pb-10 md:col-span-4 md:flex"
          style={isMobile ? { display: "none" } : undefined}
        >
          {/* Headline — 3 lines each in own ref for stagger */}
          <div className="origin-top-right -rotate-90 whitespace-nowrap font-mono text-[0.65rem] uppercase tracking-[0.12em] text-white/50 mt-30">
            PROGRAMS → COHORTS → COMMUNITIES → SYSTEMS
          </div>

          {/* Stats row */}
          <div className="mt-auto">
            <Link
              href="/initiatives"
              className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-white border border-[var(--sage)] px-2 py-1"
            >
              [ SEE WHAT&apos;S ACTIVE ]
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="col-span-12 mt-auto border-t border-white/20 py-6">
          <div
            data-load
            className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/65"
            style={
              isMobile
                ? {
                    fontSize: "0.6rem",
                    letterSpacing: "0.08em",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }
                : undefined
            }
          >
            SMALL BY CHOICE&nbsp;&nbsp;/&nbsp;&nbsp;SERIOUS BY DEFAULT&nbsp;&nbsp;/&nbsp;&nbsp;BUILDING IN PUBLIC&nbsp;&nbsp;/&nbsp;&nbsp;ONE PROOF AT A TIME
          </div>
        </div>
      </div>
    </section>
  );
}
