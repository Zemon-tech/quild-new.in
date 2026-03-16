'use client'

import type { Member } from '@/lib/community-data'
import { useIsMobile } from '@/hooks/use-mobile'

export default function MemberCard({
  member,
  onClick,
}: {
  member: Member
  onClick: () => void
}) {
  const isMobile = useIsMobile()

  const hasAvatar = Boolean(member.avatarUrl)

  return (
    <div
      className="member-card"
      onClick={onClick}
      style={{
        padding: isMobile ? '1.25rem 1rem' : '2rem',
        cursor: 'pointer',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'background 0.18s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--surface)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--bg)'
      }}
    >
      <div
        style={{
          width: '100%',
          aspectRatio: '1 / 1',
          background: member.avatarBg ?? 'var(--surface)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
          maxHeight: !isMobile ? (member.featured ? '260px' : '180px') : undefined,
        }}
      >
        {hasAvatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.avatarUrl}
            alt={member.name}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <span
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 600,
              fontSize: !isMobile ? (member.featured ? '3.5rem' : '2rem') : '2rem',
              color: 'var(--ink)',
              opacity: 0.4,
              userSelect: 'none',
            }}
          >
            {member.initials}
          </span>
        )}

        <div
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '0.75rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '0.48rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--sage)',
              border: '1px solid var(--sage)',
              padding: '0.1rem 0.4rem',
              background: 'var(--bg)',
            }}
          >
            {member.role}
          </span>
        </div>

        {member.cohort && (
          <div
            style={{
              position: 'absolute',
              top: '0.75rem',
              right: '0.75rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: '0.48rem',
                letterSpacing: '0.12em',
                color: 'var(--muted)',
                border: '1px solid var(--border)',
                padding: '0.1rem 0.4rem',
                background: 'var(--bg)',
              }}
            >
              C{member.cohort}
            </span>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <div
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.95rem',
            fontWeight: 500,
            color: 'var(--ink)',
            lineHeight: 1.2,
          }}
        >
          {member.name}
        </div>

        <div
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.8rem',
            color: 'var(--muted)',
            lineHeight: 1.4,
          }}
        >
          {member.discipline}
        </div>

        <div
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '0.52rem',
            color: 'var(--muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginTop: '0.25rem',
            opacity: 0.7,
          }}
        >
          {member.location}
        </div>
      </div>

      <div
        className="card-view-hint"
        style={{
          fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: '0.52rem',
          color: 'var(--muted)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          opacity: 0,
          transition: 'opacity 0.18s',
          marginTop: 'auto',
        }}
      >
        VIEW PROFILE →
      </div>
    </div>
  )
}
