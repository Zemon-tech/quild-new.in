import CommunityHero from '@/components/community/CommunityHero'
import CommunityStats from '@/components/community/CommunityStats'
import CommunityShell from '@/components/community/CommunityShell'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community',
  description: 'Everyone who has built with, taught through, or contributed to Quild.',
  alternates: { canonical: "https://quild.in/community" },
  openGraph: {
    title: 'Community | Quild',
    description: 'Everyone who has built with, taught through, or contributed to Quild.',
    url: 'https://quild.in/community',
  },
}

export default function CommunityPage() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <CommunityHero />
      <CommunityStats />
      <CommunityShell />
    </main>
  )
}
