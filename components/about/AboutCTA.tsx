"use client";

import Link from "next/link";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AboutCTA() {
  const isMobile = useIsMobile();
  const ctaInnerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    ({ gsap }) => {
      const inner = ctaInnerRef.current;
      const triggers: Array<{ kill: () => void }> = [];

      if (inner) {
        const st = ScrollTrigger.create({
          trigger: inner,
          start: "top 85%",
          onEnter: () => {
            gsap.fromTo(
              inner,
              { y: 20, opacity: 0, scale: 0.98 },
              { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" }
            );
          },
          once: true,
        });
        triggers.push(st);
      }

      return () => {
        triggers.forEach((t) => t.kill());
      };
    },
    []
  );

  return (
    <>
      <section className="bg-[var(--void)] text-white" style={{ padding: isMobile ? "4rem 1.5rem" : "5rem 2rem" }}>
        <div
          ref={ctaInnerRef}
          className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-10 md:flex-row md:items-end"
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: isMobile ? "clamp(2rem, 7vw, 3rem)" : "clamp(2.2rem, 4.8vw, 4.2rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              whiteSpace: isMobile ? "normal" : "pre-line",
              overflowWrap: isMobile ? "break-word" : undefined,
              wordBreak: isMobile ? "normal" : undefined,
              hyphens: isMobile ? "none" : undefined,
            }}
          >
            {isMobile ? `If this sounds like the room you've been looking for —` : `If this sounds like\nthe room you've been\nlooking for —`}
          </h2>

          <div className="flex w-full flex-col gap-4 md:w-auto">
            <Button
              asChild
              className="h-auto w-full rounded-none border border-[var(--sage)] bg-[var(--sage)] px-10 py-4 text-white hover:bg-[var(--sage)] md:w-auto"
            >
              <Link href="/apply">APPLY NOW →</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto w-full rounded-none border border-white/35 bg-transparent px-10 py-4 text-white hover:bg-transparent md:w-auto"
            >
              <a href="#about-top">READ OUR STORY →</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
