"use client";

import { useIsMobile } from "@/hooks/use-mobile";

export default function CareersCTA() {
    const isMobile = useIsMobile();

    return (
        <section style={{
            background: 'var(--void)',
            padding: isMobile ? '5rem 1.5rem' : '8rem 6rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: isMobile ? '3rem' : '4rem',
        }}>
            {/* Left: headline */}
            <div style={{ maxWidth: '640px' }}>
                <h2 style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    fontSize: 'clamp(2rem, 4vw, 5rem)',
                    lineHeight: 0.95,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                    margin: '0 0 1.5rem',
                }}>
                    Ready to start your journey?
                </h2>
                <p style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1rem',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.75,
                    margin: 0,
                    maxWidth: '440px',
                }}>
                    Applications are reviewed on a rolling basis. Join the next
                    cohort of Quild Fellows and start building the future with us.
                </p>
            </div>

            {/* Right: two stacked buttons */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                flexShrink: 0,
                width: isMobile ? '100%' : 'auto',
            }}>
                <a href="/apply" style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--void)',
                    background: 'var(--sage)',
                    padding: '1.1rem 2.5rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'block',
                    transition: 'opacity 0.2s',
                }}>
                    JOIN THE FELLOWSHIP &rarr;
                </a>
                <a href="#positions" style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    padding: '1.1rem 2.5rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'block',
                    transition: 'all 0.2s',
                }}>
                    VIEW OPEN ROLES
                </a>
            </div>
        </section>
    );
}
