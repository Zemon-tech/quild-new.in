'use client'

import { ROLE_FILTERS, ROLE_LABELS, RoleFilter } from '@/lib/community-data'
import { useIsMobile } from '@/hooks/use-mobile'

export default function CommunityFilter({
  active,
  setActive,
  count,
}: {
  active: RoleFilter
  setActive: (role: RoleFilter) => void
  count: number
}) {
  const isMobile = useIsMobile()

  return (
    <div
      style={{
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        height: '56px',
      }}
    >
      <div
        style={{
          height: '56px',
          padding: isMobile ? '0 1.5rem' : '0 6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflowX: isMobile ? 'auto' : 'visible',
            scrollbarWidth: isMobile ? 'none' : undefined,
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {ROLE_FILTERS.map((role) => {
            const isActive = active === role

            return (
              <button
                key={role}
                type="button"
                onClick={() => setActive(role)}
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '0.35rem 0.875rem',
                  border: isActive
                    ? '1px solid var(--ink)'
                    : '1px solid var(--border)',
                  color: isActive ? 'var(--bg)' : 'var(--muted)',
                  background: isActive ? 'var(--ink)' : 'transparent',
                  borderRadius: 0,
                  cursor: 'pointer',
                  transition: 'background 0.18s, color 0.18s',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {ROLE_LABELS[role]}
              </button>
            )
          })}
        </div>

        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '0.62rem',
            color: 'var(--muted)',
            letterSpacing: '0.1em',
            flexShrink: 0,
            display: isMobile ? 'none' : 'inline-block',
          }}
        >
          {count} {count === 1 ? 'MEMBER' : 'MEMBERS'}
        </span>
      </div>
    </div>
  )
}
