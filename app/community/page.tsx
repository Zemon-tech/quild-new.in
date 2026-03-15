import CommunityHero from '@/components/community/CommunityHero'
import CommunityStats from '@/components/community/CommunityStats'
import CommunityShell from '@/components/community/CommunityShell'

export const metadata = {
  title: 'Community — Quild',
  description: 'Everyone who has built with, taught through, or contributed to Quild.',
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
