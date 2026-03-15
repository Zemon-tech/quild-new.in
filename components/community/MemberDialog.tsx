'use client'

import { useState } from 'react'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import type { Member } from '@/lib/community-data'
import { useIsMobile } from '@/hooks/use-mobile'

import MemberCard from '@/components/community/MemberCard'

function SocialButton({
  label,
  href,
}: {
  label: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: 'var(--font-jetbrains-mono)',
        fontSize: '0.58rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--ink)',
        border: '1px solid var(--border)',
        padding: '0.35rem 0.875rem',
        textDecoration: 'none',
        transition: 'background 0.18s, color 0.18s',
        borderRadius: 0,
        display: 'inline-flex',
        alignItems: 'center',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--ink)'
        e.currentTarget.style.color = 'var(--bg)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.color = 'var(--ink)'
      }}
    >
      {label} →
    </a>
  )
}

function DialogProfileContent({
  member,
  onClose,
}: {
  member: Member
  onClose: () => void
}) {
  const isMobile = useIsMobile()

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: isMobile ? '180px' : '220px',
          background: member.avatarBg ?? 'var(--surface)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: isMobile ? '5rem' : '6rem',
            lineHeight: 1,
            color: 'var(--ink)',
            opacity: 0.2,
            userSelect: 'none',
          }}
        >
          {member.initials}
        </span>

        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1.5rem',
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '0.52rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--sage)',
              border: '1px solid var(--sage)',
              padding: '0.15rem 0.5rem',
              background: 'var(--bg)',
            }}
          >
            {member.role}
          </span>
          {member.cohort && (
            <span
              style={{
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: '0.52rem',
                letterSpacing: '0.12em',
                color: 'var(--muted)',
                border: '1px solid var(--border)',
                padding: '0.15rem 0.5rem',
                background: 'var(--bg)',
              }}
            >
              COHORT {member.cohort}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '0.58rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            padding: '0.3rem 0.7rem',
            cursor: 'pointer',
            borderRadius: 0,
          }}
        >
          CLOSE
        </button>
      </div>

      <div
        style={{
          padding: isMobile ? '1.5rem' : '2rem 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 600,
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              margin: '0 0 0.4rem',
            }}
          >
            {member.name}
          </h2>
          <div
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.92rem',
              color: 'var(--muted)',
            }}
          >
            {member.discipline}
            {member.college && ` · ${member.college}`}
          </div>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.95rem',
            color: 'var(--muted)',
            lineHeight: 1.8,
            margin: 0,
            paddingTop: '1rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          {member.bio}
        </p>

        {member.tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {member.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: '0.52rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  border: '1px solid var(--border)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 0,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {(member.socials.x ||
          member.socials.linkedin ||
          member.socials.github ||
          member.socials.portfolio) && (
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            {member.socials.x && (
              <SocialButton label="X" href={`https://x.com/${member.socials.x}`} />
            )}
            {member.socials.linkedin && (
              <SocialButton
                label="LINKEDIN"
                href={`https://linkedin.com/in/${member.socials.linkedin}`}
              />
            )}
            {member.socials.github && (
              <SocialButton
                label="GITHUB"
                href={`https://github.com/${member.socials.github}`}
              />
            )}
            {member.socials.portfolio && (
              <SocialButton label="PORTFOLIO" href={member.socials.portfolio} />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export function MemberDialog({ member }: { member: Member }) {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()

  const contentClassName =
    'rounded-none shadow-none p-0 overflow-hidden ' +
    'border border-[var(--border)] bg-[var(--bg)] ' +
    'backdrop:bg-[var(--bg)] backdrop:backdrop-blur-none ' +
    'dark:border-[var(--border)] ' +
    (isMobile
      ? 'w-[100vw] max-w-[100vw] border-x-0'
      : 'w-full max-w-[560px]')

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div>
        <MemberCard member={member} onClick={() => setOpen(true)} />
      </div>

      <DialogContent
        className={contentClassName}
      >
        <DialogProfileContent member={member} onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
