"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef } from "react";

import GridLines from "@/components/ui/GridLines";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@/hooks/useGSAP";

function splitIntoLines(text: string) {
  return text.split("\n").map((l) => l.trim()).filter(Boolean);
}

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const lines = useMemo(
    () => splitIntoLines("Build for builder\nwithin you."),
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
      })
        .fromTo(
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
    <section className="relative min-h-[100svh] border-b border-[var(--border)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          className="object-cover object-right"
          style={{ objectPosition: "right center" }}
          priority
        />
      </div>

      <GridLines />

      <div
        ref={rootRef}
        className="relative z-10 mx-auto grid h-full min-h-[100svh] w-full max-w-[1280px] grid-cols-12 px-8"
      >
        {/* Left Column - 7/12 */}
        <div className="col-span-12 flex flex-col justify-center pt-[120px] pb-10 md:col-span-8">
          <div data-load className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/75">
            THE BUILDER COMMUNITY / EST. 2025
          </div>

          <div className="mt-8 overflow-hidden">
            <h1 className="text-[clamp(3.8rem,7.5vw,8rem)] font-semibold leading-[0.92] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", textShadow: "0 4px 40px rgba(0, 0, 0, 0.25)" }}>
              {lines.map((line) => (
                <span key={line} className="block overflow-hidden">
                  <span
                    data-reveal-line
                    className="block will-change-transform"
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <p
            data-load
            className="mt-8 max-w-[520px] text-[1.1rem] leading-[1.75] text-white/80"
            style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
          >
            AI is replacing repetitive work. Good.<br />
            Now there&apos;s no excuse not to build the things<br />
            only you can build.<br /><br />
            Quild is where serious builders come to<br />
            upgrade themselves — not fear the machine.
          </p>

          <div data-load className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              className="h-auto rounded-none bg-[var(--sage)] px-8 py-[0.85rem] text-white hover:bg-[var(--sage)]"
            >
              <Link href="/apply">APPLY NOW →</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-none border border-white/60 bg-transparent px-8 py-[0.85rem] text-white hover:bg-transparent"
            >
              <Link href="/programs">SEE PROGRAMS →</Link>
            </Button>
          </div>
        </div>

        {/* Right Column - 4/12 */}
        <div className="col-span-12 hidden flex-col items-end justify-end pb-10 md:col-span-4 md:flex">
          {/* Rotated vertical label */}
          <div className="origin-top-right -rotate-90 whitespace-nowrap font-mono text-[0.65rem] uppercase tracking-[0.12em] text-white/50 mt-30">
            DEVELOPMENT → DESIGN → PRODUCT → AND BEYOND
          </div>

          {/* Bracketed note at bottom right */}
          <div className="mt-auto">
            <Link
              href="/apply"
              className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-white border border-[var(--sage)] px-2 py-1"
            >
              [ COHORT 01 — NOW OPEN ]
            </Link>
          </div>
        </div>

        {/* Bottom stats ticker */}
        <div className="col-span-12 mt-auto border-t border-white/20 py-6">
          <div className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/65">
            SMALL BY CHOICE&nbsp;&nbsp;/&nbsp;&nbsp;SERIOUS BY DEFAULT&nbsp;&nbsp;/&nbsp;&nbsp;BUILDING WITH AI&nbsp;&nbsp;/&nbsp;&nbsp;STARTING WITH DEVELOPMENT
          </div>
        </div>
      </div>
    </section>
  );
}
