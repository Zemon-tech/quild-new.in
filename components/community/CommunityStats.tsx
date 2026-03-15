'use client'

import { useMemo, useRef } from 'react'

import { useGSAP } from '@/hooks/useGSAP'
import { useIsMobile } from '@/hooks/use-mobile'

const STATS = [
  { number: '2+', label: 'COHORTS' },
  { number: '50+', label: 'MEMBERS' },
  { number: '4+', label: 'DISCIPLINES' },
  { number: '100%', label: 'BUILDERS' },
]

function parseNumber(value: string) {
  const cleaned = value.replace(/[^0-9]/g, '')
  const n = cleaned.length ? Number(cleaned) : 0
  const suffix = value.replace(/[0-9]/g, '')
  return { n, suffix }
}

export default function CommunityStats() {
  const isMobile = useIsMobile()
  const cellRefs = useRef<(HTMLDivElement | null)[]>([])
  const numRefs = useRef<(HTMLSpanElement | null)[]>([])
  const labelRefs = useRef<(HTMLDivElement | null)[]>([])

  const parsed = useMemo(() => STATS.map((s) => parseNumber(s.number)), [])

  useGSAP(
    ({ gsap }) => {
      const cells = cellRefs.current.filter(Boolean)
      const labels = labelRefs.current.filter(Boolean)

      const created: Array<gsap.core.Tween | gsap.core.Timeline> = []

      if (labels.length) {
        created.push(
          gsap.fromTo(
            labels,
            { y: 15, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: labels[0],
                start: 'top 80%',
              },
            }
          )
        )
      }

      numRefs.current.forEach((el, i) => {
        if (!el) return
        const { n, suffix } = parsed[i] ?? { n: 0, suffix: '' }
        const obj = { v: 0 }

        created.push(
          gsap.to(obj, {
            v: n,
            duration: 1.1,
            ease: 'power2.out',
            onUpdate: () => {
              const next = Math.round(obj.v)
              el.textContent = `${next}${suffix}`
            },
            scrollTrigger: {
              trigger: cells[i] ?? el,
              start: 'top 80%',
            },
          })
        )
      })

      return () => {
        created.forEach((t) => {
          t.scrollTrigger?.kill()
          t.kill()
        })
      }
    },
    [parsed]
  )

  return (
    <section
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          width: '100%',
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            ref={(el) => {
              cellRefs.current[i] = el
            }}
            style={{
              padding: isMobile ? '2rem 1.5rem' : '3rem',
              borderRight: !isMobile && i < 3 ? '1px solid var(--border)' : undefined,
              borderBottom: isMobile && i < 2 ? '1px solid var(--border)' : undefined,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                color: 'var(--ink)',
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
              }}
            >
              <span
                ref={(el) => {
                  numRefs.current[i] = el
                }}
              >
                0
              </span>
            </div>
            <div
              ref={(el) => {
                labelRefs.current[i] = el
              }}
              style={{
                marginTop: '0.75rem',
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: '0.58rem',
                color: 'var(--muted)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
