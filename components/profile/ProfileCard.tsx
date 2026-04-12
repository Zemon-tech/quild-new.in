"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Loader2, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  fullName: string;
  email: string;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function ProfileCard({ fullName, email }: ProfileCardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const initials = getInitials(fullName);

  const handleLogout = async () => {
    setIsLoading(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <div
      className="w-full max-w-[520px] border border-[var(--border)] bg-[var(--bg)]"
      style={{ boxShadow: "0 8px 60px rgba(0,0,0,0.06)" }}
    >
      {/* Top bar: Logo + Back */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-[var(--border)]">
        <Link href="/" className="flex items-center gap-3 decoration-transparent">
          <Image
            src="/quild.svg"
            alt="Quild"
            width={20}
            height={20}
            className="brightness-0 relative top-[1px]"
          />
          <span className="font-display text-[1rem] font-semibold tracking-[0.08em] text-[var(--ink)]">
            Quild
          </span>
        </Link>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[var(--muted)]/60 border border-[var(--border)] px-2 py-1">
          NETWORK / AUTHENTICATED
        </span>
      </div>

      {/* Body */}
      <div className="px-8 py-10 space-y-8">
        {/* Status label */}
        <div className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--sage)]">
          IDENTITY / STATUS: VERIFIED
        </div>

        {/* Avatar + Name row */}
        <div className="flex items-center gap-5">
          {/* Initials Avatar */}
          <div
            className="shrink-0 w-[56px] h-[56px] flex items-center justify-center"
            style={{ background: "var(--sage)" }}
          >
            <span className="font-mono text-[1.1rem] font-semibold tracking-[0.05em] text-white select-none">
              {initials}
            </span>
          </div>

          {/* Name + Email */}
          <div className="flex flex-col gap-1 min-w-0">
            <h1
              className="font-display font-semibold text-[var(--ink)] leading-[1] tracking-[-0.01em] truncate"
              style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)" }}
            >
              {fullName}
            </h1>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.07em] text-[var(--muted)] truncate">
              {email}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border)]" />

        {/* Info rows */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--muted)]/70">
              ACCESS LEVEL
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-[var(--ink)] border-l-2 border-[var(--sage)] pl-3">
              MEMBER
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--muted)]/70">
              SESSION
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-[var(--ink)] border-l-2 border-[var(--sage)] pl-3">
              ACTIVE
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border)]" />

        {/* Actions */}
        <div className="flex gap-3">
          <Link href="/" className="flex-1">
            <Button
              variant="outline"
              className="w-full rounded-none border-[var(--border)] text-[var(--ink)] bg-transparent hover:bg-[var(--ink)]/5 h-[48px] font-mono text-[0.7rem] uppercase tracking-[0.1em] transition-all"
            >
              ← BACK TO HUB
            </Button>
          </Link>

          <Button
            onClick={handleLogout}
            disabled={isLoading}
            className="flex-1 rounded-none bg-[var(--ink)] hover:bg-[var(--ink)]/90 text-[var(--bg)] h-[48px] font-mono text-[0.7rem] uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <LogOut className="h-3.5 w-3.5 shrink-0" />
                SIGN OUT
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
