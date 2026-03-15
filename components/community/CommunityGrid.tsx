'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import { useGSAP } from '@/hooks/useGSAP'
import { useIsMobile } from '@/hooks/use-mobile'

import type { Member, MemberRole, RoleFilter } from '@/lib/community-data'
import { MEMBERS } from '@/lib/community-data'

import { MemberDialog } from '@/components/community/MemberDialog'

function useColumns() {
  const isMobile = useIsMobile()
  const [cols, setCols] = useState<number>(isMobile ? 2 : 4)

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth
      if (w < 768) return 2
      if (w < 1024) return 3
      return 4
    }

    const next = calc()
    setCols(next)

    const onResize = () => setCols(calc())
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (isMobile) setCols(2)
  }, [isMobile])

  return cols
}

const groupOrder: MemberRole[] = [
  'TEAM',
  'COHORT PARTICIPANT',
  'MENTOR',
  'PARTNER',
  'RESEARCHER',
  'CREATOR',
]

function groupLabel(role: MemberRole, cohort: '01' | '02' | null) {
  if (role === 'COHORT PARTICIPANT') {
    if (cohort === '01') return 'COHORT 01'
    if (cohort === '02') return 'COHORT 02'
    return 'COHORT'
  }
  if (role === 'TEAM') return 'TEAM'
  if (role === 'MENTOR') return 'MENTORS'
  if (role === 'PARTNER') return 'PARTNERS'
  if (role === 'RESEARCHER') return 'RESEARCH'
  return 'CREATORS'
}

function groupMembers(members: Member[]) {
  const byRole = new Map<MemberRole, Member[]>()
  groupOrder.forEach((r) => byRole.set(r, []))

  members.forEach((m) => {
    const arr = byRole.get(m.role)
    if (arr) arr.push(m)
  })

  const result: Array<{ key: string; label: string; members: Member[] }> = []

  const team = byRole.get('TEAM') ?? []
  if (team.length) result.push({ key: 'TEAM', label: 'TEAM', members: team })

  const cohortMembers = byRole.get('COHORT PARTICIPANT') ?? []
  const cohort01 = cohortMembers.filter((m) => m.cohort === '01')
  const cohort02 = cohortMembers.filter((m) => m.cohort === '02')
  if (cohort01.length)
    result.push({ key: 'COHORT-01', label: 'COHORT 01', members: cohort01 })
  if (cohort02.length)
    result.push({ key: 'COHORT-02', label: 'COHORT 02', members: cohort02 })

  ;(['MENTOR', 'PARTNER', 'RESEARCHER', 'CREATOR'] as const).forEach((role) => {
    const arr = byRole.get(role) ?? []
    if (arr.length) {
      result.push({ key: role, label: groupLabel(role, null), members: arr })
    }
  })

  return result
}

export default function CommunityGrid({ activeFilter }: { activeFilter: RoleFilter }) {
  const cols = useColumns()
  const gridRef = useRef<HTMLDivElement | null>(null)

  const filtered = useMemo(() => {
    if (activeFilter === 'ALL') return MEMBERS
    return MEMBERS.filter((m) => m.role === activeFilter)
  }, [activeFilter])

  const grouped = useMemo(() => {
    if (activeFilter !== 'ALL') return []
    return groupMembers(MEMBERS)
  }, [activeFilter])

  useGSAP(
    ({ gsap }) => {
      const root = gridRef.current
      if (!root) return
      const q = gsap.utils.selector(root)
      const cards = q('[data-member-card]')
      if (!cards.length) return

      const tween = gsap.fromTo(
        cards,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: root,
            start: 'top 75%',
          },
        }
      )

      return () => {
        tween.scrollTrigger?.kill()
        tween.kill()
      }
    },
    []
  )

  useGSAP(
    ({ gsap }) => {
      const root = gridRef.current
      if (!root) return
      const q = gsap.utils.selector(root)
      const cards = q('[data-member-card]')
      if (!cards.length) return

      const tween = gsap.fromTo(
        cards,
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.04,
          duration: 0.35,
          ease: 'power2.out',
        }
      )

      return () => {
        tween.kill()
      }
    },
    [activeFilter]
  )

  const allMembers = activeFilter === 'ALL' ? MEMBERS : filtered

  const renderMemberCell = (member: Member, indexInList: number) => {
    const isFeatured = cols === 4 && Boolean(member.featured)
    const span = isFeatured ? 2 : 1

    const colIndex = indexInList % cols
    const rowEndIndex = cols - span
    const shouldHaveRightBorder = colIndex < rowEndIndex

    return (
      <div
        key={member.id}
        data-member-card
        style={{
          gridColumn: `span ${span}`,
          borderRight: shouldHaveRightBorder ? '1px solid var(--border)' : undefined,
          borderBottom: '1px solid var(--border)',
        }}
      >
        <MemberDialog member={member} />
      </div>
    )
  }

  return (
    <section style={{ background: 'var(--bg)' }}>
      <div
        ref={gridRef}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          width: '100%',
        }}
      >
        {activeFilter === 'ALL'
          ? grouped.flatMap((g) => {
              const header = (
                <div
                  key={`${g.key}-header`}
                  style={{
                    gridColumn: `1 / -1`,
                    borderBottom: '1px solid var(--border)',
                    padding: cols === 2 ? '1rem 1rem' : '1.5rem 2rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono)',
                      fontSize: '0.58rem',
                      color: 'var(--muted)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {g.label}
                  </div>
                </div>
              )

              return [
                header,
                ...g.members.map((m, i) => renderMemberCell(m, i)),
              ]
            })
          : allMembers.map((m, i) => renderMemberCell(m, i))}
      </div>
    </section>
  )
}
