"use client";

import { useIsMobile } from "@/hooks/use-mobile";

export default function CareersCTA() {
    const isMobile = useIsMobile();

    return (
        <section style={{
            background: 'var(--bg)',
            padding: isMobile ? 'clamp(60px, 8vw, 100px) 1.5rem' : 'clamp(80px, 10vw, 140px) 6rem',
            borderTop: '1px solid var(--border)',
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
                    color: 'var(--ink)',
                    letterSpacing: '-0.02em',
                    margin: '0 0 1.5rem',
                }}>
                    Ready to start your journey?
                </h2>
                <p style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1rem',
                    color: 'var(--muted)',
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
                    color: 'var(--bg)',
                    background: 'var(--ink)',
                    border: '1px solid var(--ink)',
                    padding: '1.1rem 2.5rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'block',
                    transition: 'all 0.2s ease',
                }}>
                    JOIN THE FELLOWSHIP →
                </a>
                <a href="#positions" style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--ink)',
                    border: '1px solid var(--border)',
                    background: 'transparent',
                    padding: '1.1rem 2.5rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'block',
                    transition: 'all 0.2s ease',
                }}>
                    VIEW OPEN ROLES
                </a>
            </div>
        </section>
    );
}
