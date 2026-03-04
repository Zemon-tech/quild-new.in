"use client";

import { useState } from "react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[var(--background)]">
      <section className="border-b border-[var(--border)] py-24">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-10 px-6">
          <div className="col-span-12 md:col-span-6">
            <ScrollReveal>
              <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.98]">
                Contact
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-8 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                <div>hello@quild.community</div>
                <div>India</div>
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                  Social
                </div>
                <div className="flex gap-4">
                  <a href="#">X</a>
                  <a href="#">LinkedIn</a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="border border-[var(--border)] bg-[var(--surface)] p-8">
              {submitted ? (
                <div className="font-display text-2xl font-semibold">
                  Message received.
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <Input
                    required
                    placeholder="Name"
                    className="h-11 rounded-none border-[var(--border)] bg-transparent focus-visible:ring-[var(--accent)]"
                  />
                  <Input
                    required
                    type="email"
                    placeholder="Email"
                    className="h-11 rounded-none border-[var(--border)] bg-transparent focus-visible:ring-[var(--accent)]"
                  />
                  <Input
                    required
                    placeholder="Subject"
                    className="h-11 rounded-none border-[var(--border)] bg-transparent focus-visible:ring-[var(--accent)]"
                  />
                  <Textarea
                    required
                    placeholder="Message"
                    className="min-h-[160px] rounded-none border-[var(--border)] bg-transparent focus-visible:ring-[var(--accent)]"
                  />
                  <Button
                    type="submit"
                    className="h-11 w-full rounded-none bg-[var(--accent)] text-white hover:bg-[var(--accent)]"
                  >
                    SUBMIT
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
