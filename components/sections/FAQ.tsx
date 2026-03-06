"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { faqs } from "@/lib/data/faqs";
import { useIsMobile } from "@/hooks/use-mobile";

export default function FAQ() {
  const isMobile = useIsMobile();

  return (
    <section className="bg-[var(--bg)] py-[7rem]">
      <div
        className="mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-8 px-8"
        style={isMobile ? { gridTemplateColumns: "1fr" } : undefined}
      >
        {/* Left Column - 4/12 with giant FAQ text */}
        <div
          className="col-span-12 md:col-span-4"
          style={isMobile ? { display: "none" } : undefined}
        >
          <ScrollReveal>
            <h2 className="font-display text-[clamp(5rem,10vw,10rem)] font-semibold leading-[0.85] text-[var(--border)]">
              FAQ
            </h2>
          </ScrollReveal>
        </div>

        {/* Right Column - 8/12 with accordion */}
        <div className="col-span-12 md:col-span-8">
          <ScrollReveal>
            {isMobile ? (
              <div
                style={{
                  fontFamily:
                    "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                  fontSize: "0.7rem",
                  color: "var(--muted)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "2rem",
                  display: "block",
                }}
              >
                FAQ
              </div>
            ) : null}
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, idx) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${idx}`}
                  className="border-t border-[var(--border)]"
                >
                  <AccordionTrigger
                    className="rounded-none px-0 py-5 text-left text-[1rem] font-medium text-[var(--ink)] hover:no-underline [&[data-state=open]>svg]:rotate-45"
                    style={
                      isMobile
                        ? {
                          fontSize: "0.95rem",
                          paddingRight: "2rem",
                        }
                        : undefined
                    }
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)]"
                        style={
                          isMobile
                            ? {
                              fontSize: "0.62rem",
                              minWidth: "1.5rem",
                            }
                            : undefined
                        }
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pb-6 pl-10 text-[0.95rem] leading-[1.75] text-[var(--muted)]">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
