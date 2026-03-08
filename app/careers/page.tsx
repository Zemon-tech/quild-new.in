import CareersHero from '@/components/careers/CareersHero'
import CareersValues from '@/components/careers/CareersValues'
import CareersBenefits from '@/components/careers/CareersBenefits'
import CareersOpenPositions from '@/components/careers/CareersOpenPositions'
import CareersProgram from '@/components/careers/CareersProgram'
import CareersCTA from '@/components/careers/CareersCTA'

export const metadata = {
  title: 'Careers — Quild',
  description: 'Build the future of learning. Join Quild as an engineer, brand creator, or researcher.',
}

export default function CareersPage() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <CareersHero />
      <CareersValues />
      <CareersBenefits />
      <CareersOpenPositions />
      <CareersProgram />
    </main>
  )
}
