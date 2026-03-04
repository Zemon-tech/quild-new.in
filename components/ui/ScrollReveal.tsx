"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";
import { useGSAP } from "@/hooks/useGSAP";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    ({ gsap }) => {
      const el = ref.current;
      if (!el) return;

      const fromVars =
        direction === "left"
          ? { x: -36, opacity: 0 }
          : direction === "right"
          ? { x: 36, opacity: 0 }
          : { y: 50, opacity: 0 };

      const tween = gsap.fromTo(
        el,
        fromVars,
        {
          x: 0,
          y: 0,
          opacity: 1,
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
          },
        }
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    [delay, direction]
  );

  return (
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
}
