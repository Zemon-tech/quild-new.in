'use client'
import { useRef } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import { useIsMobile } from '@/hooks/use-mobile'

export default function InitiativesCTA() {
  const isMobile = useIsMobile()
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(({ gsap }) => {
    const el = sectionRef.current
    if (el) {
      gsap.fromTo(el.querySelectorAll('.cta-item'),
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        }
      )
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      style={{
        background: 'var(--void)',
        padding: isMobile ? '5rem 1.5rem' : '8rem 6rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div className="cta-item" style={{
        fontFamily: 'var(--font-jetbrains-mono)',
        fontSize: '0.62rem',
        color: 'rgba(255,255,255,0.4)',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: '1.5rem',
      }}>
        THE NEXT CHAPTER
      </div>

      <h2 className="cta-item" style={{
        fontFamily: 'var(--font-cormorant)',
        fontStyle: 'italic',
        fontWeight: 600,
        fontSize: 'clamp(3rem,6vw,5rem)',
        lineHeight: 0.95,
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
        margin: '0 0 1.5rem',
        maxWidth: '700px',
      }}>
        Be part of this early.
      </h2>

      <p className="cta-item" style={{
        fontFamily: 'var(--font-dm-sans)',
        fontSize: '1.05rem',
        color: 'rgba(255,255,255,0.5)',
        lineHeight: 1.7,
        maxWidth: '540px',
        margin: '0 0 3rem',
      }}>
        Quild is in its earliest chapters. The builders who join now will define what it becomes.
      </p>

      <div className="cta-item" style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '1rem',
        width: isMobile ? '100%' : 'auto',
      }}>
        <a 
          href="/join"
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--void)',
            background: 'var(--sage)',
            padding: '1rem 2.5rem',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            width: isMobile ? '100%' : 'auto',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          JOIN NOW →
        </a>

        <a 
          href="/about"
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.4)',
            padding: '1rem 2.5rem',
            textDecoration: 'none',
            transition: 'background 0.2s, color 0.2s',
            width: isMobile ? '100%' : 'auto',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#FFFFFF'
            e.currentTarget.style.color = 'var(--void)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#FFFFFF'
          }}
        >
          READ OUR STORY
        </a>
      </div>
    </section>
  )
}
