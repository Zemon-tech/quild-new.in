import InitiativesHero    from '@/components/initiatives/InitiativesHero'
import InitiativesIndex   from '@/components/initiatives/InitiativesIndex'
import InitiativesAnchors from '@/components/initiatives/InitiativesAnchors'
import InitiativesCTA     from '@/components/initiatives/InitiativesCTA'

export const metadata = {
  title: 'Initiatives — Quild',
  description: 'Programs, cohorts, research, and systems. Everything Quild is building — for serious builders in every field.',
}

export default function InitiativesPage() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <InitiativesHero />
      <InitiativesIndex />
      <InitiativesAnchors />
    </main>
  )
}
