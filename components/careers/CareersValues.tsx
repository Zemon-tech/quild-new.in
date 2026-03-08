"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";

const VALUES = [
    'Human-First Innovation',
    'Continuous Evolution',
    'Mastery of the Complex',
    'Radical Support & Collaboration',
    'Freedom for Creativity',
    'Always Be Learning',
];

export default function CareersValues() {
    const isMobile = useIsMobile();
    const tickerRef = useRef<HTMLDivElement | null>(null);
    const gridRef = useRef<HTMLDivElement | null>(null);

    useGSAP(({ gsap }) => {
        // Ticker animation
        if (tickerRef.current) {
            gsap.to(tickerRef.current, {
                x: '-50%',
                duration: 20,
                repeat: -1,
                ease: 'none'
            });
        }

        // Grid cells stagger reveal
        if (gridRef.current) {
            const cells = gridRef.current.children;
            gsap.fromTo(cells,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.08,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 78%",
                    }
                }
            );
        }
    }, []);

    return (
        <section style={{ background: 'var(--bg)' }}>
            {/* PART A: Values ticker */}
            <div style={{
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                background: 'var(--surface)',
                overflow: 'hidden',
                padding: '1rem 0',
                whiteSpace: 'nowrap',
            }}>
                <div
                    ref={tickerRef}
                    style={{ display: 'inline-flex', gap: '0' }}
                >
                    {[...VALUES, ...VALUES, ...VALUES].map((v, i) => (
                        <span key={i} style={{
                            fontFamily: 'var(--font-cormorant)',
                            fontStyle: 'italic',
                            fontWeight: 600,
                            fontSize: 'clamp(1rem, 1.5vw, 1.4rem)',
                            color: 'var(--ink)',
                            paddingRight: '3rem',
                        }}>
                            {v}
                            <span style={{
                                color: 'var(--sage)',
                                paddingLeft: '3rem',
                                fontStyle: 'normal',
                                fontSize: '0.8em',
                            }}>
                                &middot;
                            </span>
                        </span>
                    ))}
                </div>
            </div>

            {/* PART B: Values grid */}
            <div style={{ padding: '6rem 0' }}>
                {/* Header */}
                <div style={{
                    padding: isMobile ? '0 1.5rem 2rem' : '0 6rem 3rem',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid var(--border)',
                }}>
                    <div>
                        <div style={{
                            fontFamily: 'var(--font-jetbrains-mono)',
                            fontSize: '0.65rem',
                            color: 'var(--muted)',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            marginBottom: '0.5rem',
                        }}>
                            WHAT WE BELIEVE
                        </div>
                        <h2 style={{
                            fontFamily: 'var(--font-cormorant)',
                            fontStyle: 'italic',
                            fontWeight: 600,
                            fontSize: 'clamp(2rem, 3.5vw, 4rem)',
                            lineHeight: 0.95,
                            color: 'var(--ink)',
                            letterSpacing: '-0.02em',
                            margin: 0,
                        }}>
                            Our Values
                        </h2>
                    </div>
                </div>

                {/* 2x3 Grid */}
                <div
                    ref={gridRef}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gridTemplateRows: isMobile ? 'auto' : 'repeat(2, auto)',
                    }}
                >
                    {VALUES.map((value, i) => (
                        <div
                            key={i}
                            style={{
                                padding: '3rem',
                                borderRight: !isMobile && (i % 3) < 2 ? '1px solid var(--border)' : 'none',
                                borderBottom: isMobile || i < 3 ? '1px solid var(--border)' : 'none',
                            }}
                        >
                            <div style={{
                                fontFamily: 'var(--font-jetbrains-mono)',
                                fontSize: '0.6rem',
                                color: 'var(--sage)',
                                letterSpacing: '0.15em',
                                marginBottom: '1.5rem',
                            }}>
                                {String(i + 1).padStart(2, '0')}
                            </div>

                            <h3 style={{
                                fontFamily: 'var(--font-cormorant)',
                                fontStyle: 'italic',
                                fontWeight: 600,
                                fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                                lineHeight: 1.05,
                                color: 'var(--ink)',
                                letterSpacing: '-0.01em',
                                marginBottom: '0.875rem',
                                margin: '0 0 0.875rem',
                            }}>
                                {value}
                            </h3>

                            <div style={{
                                fontFamily: 'var(--font-jetbrains-mono)',
                                fontSize: '1.2rem',
                                color: 'var(--sage)',
                                lineHeight: 1,
                            }}>
                                +
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
