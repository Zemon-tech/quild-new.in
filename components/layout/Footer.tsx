import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-[var(--void)] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-8 py-16 md:px-8">
        <div className="grid grid-cols-12 gap-0 md:grid-cols-12">
          <div className="col-span-12 border-b border-white/10 pb-12 md:col-span-3 md:border-b-0 md:pb-0">
            <div className="font-display text-[1.2rem] font-semibold tracking-[0.12em] text-white">
              QUILD
            </div>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">
              Build the builder within you.
            </p>

            <div className="mt-10 max-w-sm">
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/45">
                NEWSLETTER
              </div>
              <div className="mt-3 flex flex-col gap-3 md:flex-row md:gap-0">
                <Input
                  className="h-11 w-full rounded-none border-white/20 bg-transparent text-white placeholder:text-white/35 focus-visible:ring-[var(--sage)]"
                  placeholder="you@domain.com"
                  type="email"
                />
                <Button className="h-11 w-full rounded-none border border-white/20 bg-white px-5 text-[var(--void)] hover:bg-white md:w-auto">
                  JOIN
                </Button>
              </div>
            </div>
          </div>

          <div className="col-span-6 border-b border-white/10 py-12 md:col-span-2 md:border-b-0 md:py-0 md:pl-10">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/45">
              NAVIGATION
            </div>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
              <Link href="/about">About</Link>
              <Link href="/programs">Programs</Link>
              <Link href="/community">Community</Link>
              <Link href="/events">Events</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>

          <div className="col-span-6 border-b border-white/10 py-12 md:col-span-2 md:border-b-0 md:py-0 md:pl-10">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/45">
              PROGRAMS
            </div>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
              <Link href="/programs">Cohorts</Link>
              <Link href="/programs">Workshops</Link>
              <span className="text-white/45">Mentorship (coming soon)</span>
            </div>
          </div>

          <div className="col-span-12 pt-12 md:col-span-2 md:pt-0 md:pl-10">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/45">
              SOCIAL
            </div>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
              <a href="#">X</a>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="mailto:hello@quild.community">hello@quild.community</a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--void-border)] pt-6">
          <div className="flex flex-col gap-3 p-6 text-center text-sm text-white/55 md:flex-row md:items-center md:justify-between md:p-0 md:text-left">
            <div>© 2026 Quild. All rights reserved.</div>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/45">
              MADE BY BUILDERS, FOR BUILDERS.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
