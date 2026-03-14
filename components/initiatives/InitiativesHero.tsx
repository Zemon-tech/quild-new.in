'use client'
import { useRef } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import { useIsMobile } from '@/hooks/use-mobile'

export default function InitiativesHero() {
  const isMobile = useIsMobile()
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef   = useRef<HTMLDivElement>(null)
  const line1Ref   = useRef<HTMLDivElement>(null)
  const line2Ref   = useRef<HTMLDivElement>(null)
  const line3Ref   = useRef<HTMLDivElement>(null)
  const subRef     = useRef<HTMLParagraphElement>(null)
  const statsRef   = useRef<HTMLDivElement>(null)
  const scrollRef  = useRef<HTMLDivElement>(null)

  useGSAP(({ gsap }) => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(labelRef.current,  { opacity: 0, duration: 0.5 })
      .from([line1Ref.current, line2Ref.current, line3Ref.current], {
        clipPath: 'inset(0 0 100% 0)',
        y: 20,
        stagger: 0.12,
        duration: 0.9,
      }, '-=0.2')
      .from(subRef.current,   { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
      .from(statsRef.current, { opacity: 0, y: 15, duration: 0.5 }, '-=0.3')

    // Scroll indicator bounce
    gsap.to(scrollRef.current, {
      y: 8, duration: 0.9, repeat: -1, yoyo: true, ease: 'power1.inOut',
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="initiatives-hero"
      style={{
        position: 'relative',
        height: '100svh',
        background: 'var(--void)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: isMobile ? '0 1.5rem 4rem' : '0 6rem 6rem',
        overflow: 'hidden',
      }}
    >
      {/* Ghost word — background texture only */}
      {!isMobile && (
        <div style={{
          position: 'absolute', top: '50%', right: '-1rem',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic', fontWeight: 700,
          fontSize: 'clamp(8rem,16vw,20rem)',
          lineHeight: 0.85,
          color: 'rgba(255,255,255,0.025)',
          letterSpacing: '-0.04em',
          userSelect: 'none', pointerEvents: 'none', zIndex: 0,
        }}>
          BUILD.
        </div>
      )}

      {/* Top label */}
      <div ref={labelRef} style={{
        position: 'absolute',
        top: isMobile ? '5rem' : '7rem',
        left: isMobile ? '1.5rem' : '6rem',
        fontFamily: 'var(--font-jetbrains-mono)',
        fontSize: '0.65rem',
        color: 'rgba(255,255,255,0.35)',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        zIndex: 2,
      }}>
        QUILD · INITIATIVES
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '820px' }}>

        {/* Eyebrow */}
        <div style={{
          fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: '0.62rem',
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}>
          EVERYTHING WE'RE BUILDING
        </div>

        {/* Headline — 3 lines each in own ref for stagger */}
        <h1 style={{
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic', fontWeight: 600,
          lineHeight: 0.9, letterSpacing: '-0.02em',
          margin: '0 0 2rem',
        }}>
          {['Not one thing.', 'Not one field.', 'All of it.'].map((line, i) => (
            <div
              key={i}
              ref={[line1Ref, line2Ref, line3Ref][i]}
              style={{
                display: 'block',
                fontSize: 'clamp(3rem,6.5vw,8rem)',
                color: i === 2 ? 'rgba(255,255,255,0.5)' : '#FFFFFF',
              }}
            >
              {line}
            </div>
          ))}
        </h1>

        {/* Subtext */}
        <p ref={subRef} style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '1.05rem',
          color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.8,
          maxWidth: '480px',
          margin: '0 0 3rem',
        }}>
          One institution. Programs, cohorts, communities, and systems —
          built one proof at a time, for serious builders in every field.
        </p>

        {/* Stats row */}
        <div ref={statsRef} style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '1.5rem' : '2.5rem',
          flexWrap: 'wrap',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
        }}>
          {[
            { n: '01',  l: 'COHORT SHIPPED' },
            { n: '03+', l: 'ACTIVE NOW' },
            { n: '∞',   l: 'PLANNED' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
              <span style={{
                fontFamily: 'var(--font-cormorant)', fontWeight: 700,
                fontSize: 'clamp(1.5rem,3vw,2.5rem)',
                color: '#FFFFFF', lineHeight: 1,
              }}>{s.n}</span>
              <span style={{
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: '0.52rem',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.15em', textTransform: 'uppercase',
              }}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        zIndex: 2,
      }}>
        <span style={{
          fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: '0.52rem',
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: '0.2em', textTransform: 'uppercase',
        }}>SCROLL</span>
        <div ref={scrollRef} style={{
          width: '1px', height: '32px',
          background: 'rgba(255,255,255,0.18)',
        }} />
      </div>
    </section>
  )
}
