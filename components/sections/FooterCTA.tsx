import Link from "next/link";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";

export default function FooterCTA() {
  return (
    <section className="bg-[var(--void)] py-20 text-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-8 px-8 md:flex-row md:items-center">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.02em]">
            Ready to build?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Button
            asChild
            className="h-auto rounded-none border border-[var(--sage)] bg-[var(--sage)] px-10 py-4 text-white hover:bg-[var(--sage)]"
          >
            <Link href="/apply">APPLY NOW →</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
