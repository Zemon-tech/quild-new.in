"use client";

import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const isMobile = useIsMobile();

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
              <div className="mt-3 flex flex-col md:flex-row md:gap-0">
                <Input
                  className={`h-11 rounded-none placeholder:text-white/35 focus-visible:ring-[var(--sage)] ${isMobile ? "" : "w-full border-white/20 bg-transparent text-white"}`}
                  placeholder="you@domain.com"
                  type="email"
                  style={isMobile ? {
                    width: '100%',
                    marginBottom: '0.75rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#FFFFFF'
                  } : undefined}
                />
                <Button
                  className={`h-11 rounded-none hover:bg-white md:w-auto hover:text-[var(--void)] ${isMobile ? "" : "w-full px-5 bg-white text-[var(--void)] border border-white/20"}`}
                  style={isMobile ? {
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.4)',
                    color: '#FFFFFF',
                    width: '100%',
                    padding: '0.9rem',
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em'
                  } : undefined}
                >
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
            <div className="mt-5 flex items-center gap-4 text-sm text-white/75">
              <a href="#" aria-label="X (Twitter)">
                <Image src="https://cdn.brandfetch.io/idS5WhqBbM/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1768324498338" alt="X" width={20} height={20} className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Image src="https://cdn.brandfetch.io/idJFz6sAsl/theme/dark/id745SkyD0.svg?c=1bxid64Mup7aczewSAYMX&t=1740371004756" alt="LinkedIn" width={20} height={20} className="h-5 w-5" />
              </a>
              <a href="#" aria-label="GitHub">
                <Image src="https://cdn.brandfetch.io/idZAyF9rlg/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1719469980826" alt="GitHub" width={20} height={20} className="h-5 w-5" />
              </a>
              <a href="mailto:hello@quild.community" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M4 4h16v16H4z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
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
