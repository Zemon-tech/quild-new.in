'use client'
import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import { useIsMobile } from '@/hooks/use-mobile'
import { INITIATIVES, STATUS_META, FILTER_TO_STATUS, FILTERS, Filter, Initiative } from '@/lib/initiatives-data'

function ImageCarousel({ images, isMobile, title }: { images: string[]; isMobile: boolean; title: string }) {
  return (
    <div
      className="w-full hide-scrollbar"
      style={{
        display: 'flex',
        overflowX: 'scroll',
        overflowY: 'hidden',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        touchAction: 'pan-x',
        cursor: 'grab',
      }}
    >
      <div style={{ display: 'flex', marginLeft: '-0.75rem' }}>
        {images.map((img, idx) => (
          <div
            key={idx}
            style={{
              flex: '0 0 auto',
              scrollSnapAlign: 'start',
              width: isMobile ? '92%' : '70%',
              paddingLeft: '0.75rem',
            }}
          >
            <div
              style={{
                aspectRatio: isMobile ? '16/9' : '16/9',
                background: 'var(--surface)',
                overflow: 'hidden',
              }}
            >
              <img
                src={img}
                alt={`${title} image ${idx + 1}`}
                loading="lazy"
                draggable={false}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* No CarouselPrevious / CarouselNext — touch/drag only */}
    </div>
  )
}

function InitiativeRow({ item, isMobile }: { item: Initiative; isMobile: boolean }) {
  const status = STATUS_META[item.status]

  return (
    <div
      data-id={item.id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        borderBottom: '1px solid var(--border)',
        padding: isMobile ? '2rem 1.5rem' : '3rem',
      }}
    >
      <ImageCarousel images={item.images} isMobile={isMobile} title={item.title} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3 style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
            fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
            color: 'var(--ink)',
            margin: 0,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
          }}>
            {item.title}
          </h3>

          {item.ctaHref !== '#' ? (
            <a href={item.ctaHref} style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '0.68rem', letterSpacing: '0.05em',
              color: 'var(--ink)', textDecoration: 'none',
              borderBottom: '1px solid var(--ink)', paddingBottom: '4px',
              textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', gap: '4px'
            }}>
              {item.ctaLabel}
            </a>
          ) : (
            <span style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '0.68rem', letterSpacing: '0.05em',
              textTransform: 'uppercase', color: 'var(--muted)',
              borderBottom: '1px solid var(--border)', paddingBottom: '4px',
            }}>
              {item.ctaLabel}
            </span>
          )}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'minmax(120px, 1fr) 2fr minmax(120px, 1fr)',
          gap: '2rem',
          alignItems: 'start'
        }}>
          <div>
            <div style={{
              fontSize: '0.52rem', color: 'var(--muted)', textTransform: 'uppercase',
              marginBottom: '0.25rem', fontFamily: 'var(--font-jetbrains-mono)', letterSpacing: '0.05em'
            }}>CATEGORY</div>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.9rem', color: 'var(--ink)' }}>
              {item.category.charAt(0) + item.category.slice(1).toLowerCase()}
            </div>
          </div>

          <div>
            <div style={{
              fontSize: '0.52rem', color: 'var(--muted)', textTransform: 'uppercase',
              marginBottom: '0.25rem', fontFamily: 'var(--font-jetbrains-mono)', letterSpacing: '0.05em'
            }}>SCOPE & DETAILS</div>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.9rem', color: 'var(--ink)', lineHeight: 1.5 }}>
              {item.description}
            </div>
          </div>

          <div>
            <div style={{
              fontSize: '0.52rem', color: 'var(--muted)', textTransform: 'uppercase',
              marginBottom: '0.25rem', fontFamily: 'var(--font-jetbrains-mono)', letterSpacing: '0.05em'
            }}>STATUS</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-dm-sans)', fontSize: '0.9rem', color: 'var(--ink)' }}>
              <div style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: status.dot,
                animation: item.status === 'active' ? 'pulse-dot 2s ease-in-out infinite' : 'none',
                flexShrink: 0
              }} />
              {status.label}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function InitiativesIndex() {
  const isMobile = useIsMobile()
  const [activeFilter, setActiveFilter] = useState<Filter>('ALL')
  const headerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const filtered = activeFilter === 'ALL'
    ? INITIATIVES
    : INITIATIVES.filter(i => i.status === FILTER_TO_STATUS[activeFilter])

  useGSAP(({ gsap }) => {
    if (headerRef.current) {
      const h = headerRef.current.offsetHeight
      document.documentElement.style.setProperty('--initiatives-header-height', `${h}px`)
    }
    const rows = listRef.current?.querySelectorAll('[data-id]')
    if (rows && rows.length > 0) {
      gsap.fromTo(rows,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: listRef.current, start: 'top 75%' } }
      )
    }
  }, [])

  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      const rows = listRef.current?.querySelectorAll('[data-id]')
      if (rows && rows.length > 0) {
        gsap.fromTo(rows,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.06, duration: 0.45, ease: 'power2.out' }
        )
      }
    })
  }, [activeFilter])

  return (
    <section style={{ background: 'var(--bg)', position: 'relative' }}>
      <div
        ref={headerRef}
        style={{
          position: 'static', zIndex: 10, background: 'var(--bg)',
          borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: isMobile ? '1.25rem 1.5rem' : '2rem 6rem 2rem 2rem',
        }}
      >
        <div style={{ paddingLeft: isMobile ? 0 : '1rem' }}>
          <div style={{
            fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.62rem', color: 'var(--muted)',
            letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.4rem',
          }}>ALL INITIATIVES</div>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 600,
            fontSize: isMobile ? 'clamp(1.4rem,5vw,1.8rem)' : 'clamp(1.6rem,2.5vw,2.8rem)',
            lineHeight: 0.95, letterSpacing: '-0.02em', color: 'var(--ink)', margin: 0,
          }}>What we're building.</h2>
        </div>
        <div style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
          {filtered.length} {filtered.length === 1 ? 'INITIATIVE' : 'INITIATIVES'}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
        {isMobile ? (
          <div style={{
            display: 'flex', overflowX: 'auto', padding: '1rem 1.5rem', gap: '0.5rem',
            borderBottom: '1px solid var(--border)', scrollbarWidth: 'none', background: 'var(--bg)',
          }} className="initiatives-filter-chip">
            {FILTERS.map(filter => {
              const isActive = activeFilter === filter
              return (
                <button key={filter} onClick={() => setActiveFilter(filter)} style={{
                  flexShrink: 0, fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.58rem',
                  letterSpacing: '0.05em', padding: '0.5rem 0.875rem',
                  background: isActive ? 'var(--ink)' : 'transparent',
                  color: isActive ? 'var(--bg)' : 'var(--muted)',
                  border: `1px solid ${isActive ? 'var(--ink)' : 'var(--border)'}`,
                  textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s',
                }}>{filter}</button>
              )
            })}
          </div>
        ) : (
          <aside style={{
            width: '240px', flexShrink: 0, position: 'sticky',
            top: 'calc(60px + 2rem)', alignSelf: 'flex-start',
            height: 'fit-content', padding: '3rem 2rem',
          }}>
            <div style={{
              fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.56rem', color: 'var(--muted)',
              letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem',
              paddingBottom: '1rem', borderBottom: '1px solid var(--border)',
            }}>FILTER BY STATUS</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {FILTERS.map(filter => {
                const isActive = activeFilter === filter
                const mappedStatus = filter === 'ALL' ? null : FILTER_TO_STATUS[filter]
                const statusMeta = mappedStatus ? STATUS_META[mappedStatus] : null
                return (
                  <button key={filter} onClick={() => setActiveFilter(filter)} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', textAlign: 'left',
                    background: isActive ? 'rgba(74,92,78,0.06)' : 'transparent',
                    border: 'none',
                    borderLeft: isActive ? '2px solid var(--sage)' : '2px solid transparent',
                    padding: '0.6rem 0.75rem 0.6rem 0.875rem',
                    fontFamily: 'var(--font-dm-sans)', fontSize: '0.88rem',
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? 'var(--ink)' : 'var(--muted)',
                    cursor: 'pointer', transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      {statusMeta && (
                        <div style={{
                          width: '6px', height: '6px', borderRadius: '50%',
                          background: statusMeta.dot, flexShrink: 0,
                          animation: filter === 'HAPPENING NOW' ? 'pulse-dot 2s ease-in-out infinite' : 'none',
                        }} />
                      )}
                      <span>{filter === 'ALL' ? 'All' : filter.charAt(0) + filter.slice(1).toLowerCase()}</span>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.52rem', letterSpacing: '0.05em',
                      color: isActive ? 'var(--sage)' : 'var(--border)', transition: 'color 0.2s',
                    }}>
                      {filter === 'ALL' ? INITIATIVES.length : INITIATIVES.filter(i => i.status === FILTER_TO_STATUS[filter]).length}
                    </span>
                  </button>
                )
              })}
            </div>

            <div style={{
              marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)',
              fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.52rem', color: 'var(--border)',
              letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1.6,
            }}>NON-PROFIT ·<br />ALL FIELDS WELCOME</div>
          </aside>
        )}

        <div ref={listRef} style={{
          flex: 1, borderLeft: isMobile ? 'none' : '1px solid var(--border)',
          minHeight: '50vh', paddingBottom: '4rem',
        }}>
          {filtered.length > 0 ? (
            filtered.map(item => <InitiativeRow key={item.id} item={item} isMobile={isMobile} />)
          ) : (
            <div style={{
              padding: '4rem', textAlign: 'center',
              fontFamily: 'var(--font-dm-sans)', color: 'var(--muted)', fontSize: '0.95rem'
            }}>No initiatives match the selected filter.</div>
          )}
        </div>
      </div>
    </section>
  )
}