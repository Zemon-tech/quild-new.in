'use client'
import { useRef } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import { useIsMobile } from '@/hooks/use-mobile'
import { INITIATIVES, STATUS_META } from '@/lib/initiatives-data'

export default function InitiativesAnchors() {
  const isMobile = useIsMobile()
  const sectionRef = useRef<HTMLElement>(null)
  
  const anchors = INITIATIVES.filter(i => i.isAnchor)

  useGSAP(({ gsap }) => {
    const cards = sectionRef.current?.querySelectorAll('[data-anchor-card]')
    if (cards && cards.length > 0) {
      gsap.fromTo(cards,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Header */}
      <div style={{
        padding: isMobile ? '2.5rem 1.5rem' : '4rem 6rem',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'flex-end',
        justifyContent: 'space-between',
        gap: '2rem',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '0.62rem', color: 'var(--muted)',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            marginBottom: '0.4rem',
          }}>
            FLAGSHIP INITIATIVES
          </div>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic', fontWeight: 600,
            fontSize: 'clamp(2rem,3.5vw,4rem)',
            lineHeight: 0.95, letterSpacing: '-0.02em',
            color: 'var(--ink)', margin: 0,
          }}>
            The Anchors
          </h2>
        </div>
        <p style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.92rem', color: 'var(--muted)',
          lineHeight: 1.7, maxWidth: '320px',
          margin: 0, textAlign: isMobile ? 'left' : 'right',
        }}>
          The three initiatives that define what Quild is.
        </p>
      </div>

      {/* 3-column grid */}
      <div style={{
        display: isMobile ? 'flex' : 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        overflowX: isMobile ? 'auto' : 'visible',
        scrollbarWidth: 'none',
      }}>
        {anchors.map((item, i) => {
          const status = STATUS_META[item.status]
          return (
            <div
              key={item.id}
              data-anchor-card
              style={{
                borderRight: (!isMobile && i < 2) ? '1px solid var(--border)' : 'none',
                minWidth: isMobile ? '280px' : 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Tall tile */}
              <div style={{
                height: isMobile ? '260px' : '320px',
                background: 'var(--bg)',
                borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'flex-end',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {item.images && item.images.length > 0 && (
                  <img 
                    src={item.images[0]} 
                    alt={item.title} 
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      zIndex: 0,
                    }} 
                  />
                )}
                
                {/* Overlay for legibility */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(15,15,13,0.1) 0%, rgba(15,15,13,0.85) 100%)',
                  zIndex: 1,
                }} />

                {/* Ghost number for cohorts */}
                {item.cohortNumber && (
                  <div style={{
                    position: 'absolute', bottom: '-1rem', right: '1.5rem',
                    fontFamily: 'var(--font-cormorant)',
                    fontWeight: 700, fontStyle: 'normal',
                    fontSize: '9rem', lineHeight: 1,
                    color: 'rgba(255,255,255,0.06)',
                    userSelect: 'none', pointerEvents: 'none',
                    zIndex: 1,
                  }}>
                    {item.cohortNumber}
                  </div>
                )}

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.52rem', letterSpacing: '0.15em',
                    textTransform: 'uppercase', marginBottom: '0.75rem',
                    color: 'rgba(255,255,255,0.7)',
                    background: 'rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    padding: '0.15rem 0.5rem',
                    display: 'inline-block',
                  }}>
                    {item.category}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontStyle: 'italic', fontWeight: 600,
                    fontSize: 'clamp(1.6rem,2.5vw,2.4rem)',
                    lineHeight: 1.0,
                    color: '#FFFFFF',
                  }}>
                    {item.title}
                  </div>
                </div>
              </div>

              {/* Card metadata */}
              <div style={{ padding: '2rem 2.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Status */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: status.dot,
                    animation: item.status === 'active' ? 'pulse-dot 2s ease-in-out infinite' : 'none',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.52rem', letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: status.text,
                    fontWeight: 600,
                  }}>
                    {status.label}
                  </span>
                </div>

                {/* Anchor descriptor */}
                <p style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontStyle: 'italic', fontSize: '1.1rem',
                  color: 'var(--muted)', lineHeight: 1.5, margin: 0,
                }}>
                  {item.anchorDescriptor}
                </p>

                {/* CTA */}
                <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                  {item.ctaHref !== '#' ? (
                    <a href={item.ctaHref} style={{
                      fontFamily: 'var(--font-jetbrains-mono)',
                      fontSize: '0.62rem', letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--ink)', textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}>
                      {item.ctaLabel}
                    </a>
                  ) : (
                    <span style={{
                      fontFamily: 'var(--font-jetbrains-mono)',
                      fontSize: '0.62rem', letterSpacing: '0.15em',
                      textTransform: 'uppercase', color: 'var(--border)',
                    }}>
                      {item.ctaLabel}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
