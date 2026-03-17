"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "@/components/ui/separator";

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
    const gridRef = useRef<HTMLDivElement | null>(null);

    useGSAP(({ gsap }) => {
        // Grid cells stagger reveal
        if (gridRef.current) {
            const cells = gridRef.current.children;
            gsap.fromTo(cells,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.08,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 75%",
                    }
                }
            );
        }
    }, []);

    return (
        <section style={{ background: 'var(--bg)' }}>
            {/* Values grid */}
            <div style={{ padding: isMobile ? '4rem 0' : 'clamp(80px, 10vw, 140px) 0' }}>
                {/* Header */}
                <div style={{
                    padding: isMobile ? '0 1.5rem 2rem' : '0 6rem 3rem',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
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

                <div style={{ padding: isMobile ? '0 1.5rem' : '0 6rem' }}>
                    <Separator />
                </div>

                {/* 2x3 Grid */}
                <div
                    ref={gridRef}
                    className={isMobile ? "px-6" : "px-24"}
                >
                    <div
                        className={
                            isMobile
                                ? "grid grid-cols-1 border border-[var(--border)]"
                                : "grid grid-cols-3 border border-[var(--border)]"
                        }
                        style={{ marginTop: isMobile ? '1.5rem' : '3rem' }}
                    >
                        {VALUES.map((value, i) => (
                            <div
                                key={i}
                                className={
                                    "group relative border-b border-r border-[var(--border)] p-10 md:p-12 " +
                                    "hover:bg-[color-mix(in_oklab,var(--ink)_3%,transparent)] transition-colors"
                                }
                                style={{
                                    borderRight: isMobile ? 'none' : ((i + 1) % 3 === 0 ? 'none' : '1px solid var(--border)'),
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
