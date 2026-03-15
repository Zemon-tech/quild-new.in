'use client'

import { useMemo, useState } from 'react'

import CommunityFilter from '@/components/community/CommunityFilter'
import CommunityGrid from '@/components/community/CommunityGrid'

import { MEMBERS, RoleFilter } from '@/lib/community-data'

export default function CommunityShell() {
  const [active, setActive] = useState<RoleFilter>('ALL')

  const filtered = useMemo(() => {
    if (active === 'ALL') return MEMBERS
    return MEMBERS.filter((m) => m.role === active)
  }, [active])

  return (
    <>
      <CommunityFilter active={active} setActive={setActive} count={filtered.length} />
      <CommunityGrid activeFilter={active} />
    </>
  )
}
