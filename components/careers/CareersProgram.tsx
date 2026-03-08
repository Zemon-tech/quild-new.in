"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";

const STATS = [
    { number: '12', label: 'Weeks Program' },
    { number: '50+', label: 'Fellows' },
    { number: '100%', label: 'Hands-on' },
    { number: 'Fast', label: 'Iteration' },
];

export default function CareersProgram() {
    const isMobile = useIsMobile();
    const statsRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentItemsRef = useRef<HTMLDivElement | null>(null);

    useGSAP(({ gsap }) => {
        // Left side reveal
        if (contentItemsRef.current) {
            gsap.fromTo(contentItemsRef.current.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.12,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: contentItemsRef.current,
                        start: "top 80%",
                    }
                }
            );
        }

        // Stats counting animation
        statsRefs.current.forEach((el, i) => {
            if (!el) return;
            const stat = STATS[i];
            const isCountable = /^\d+/.test(stat.number);

            if (isCountable) {
                const targetValue = parseInt(stat.number);
                const suffix = stat.number.replace(/^\d+/, '');
                const obj = { value: 0 };
                const numEl = el.querySelector('.stat-number');

                if (numEl) {
                    gsap.to(obj, {
                        value: targetValue,
                        duration: 1.5,
                        ease: "power2.out",
                        onUpdate: () => {
                            numEl.textContent = Math.round(obj.value) + suffix;
                        },
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                        }
                    });
                }
            } else {
                // Just fade in for non-countable stats
                gsap.fromTo(el,
                    { opacity: 0, y: 15 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                        }
                    }
                );
            }
        });

    }, []);

    return (
        <section
            id="fellowship"
            style={{
                background: 'var(--void)',
                borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
        >
            {/* Section header */}
            <div style={{
                padding: isMobile ? '3rem 1.5rem 2rem' : '5rem 6rem 3rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
            }}>
                <div>
                    <div style={{
                        fontFamily: 'var(--font-jetbrains-mono)',
                        fontSize: '0.65rem',
                        color: 'rgba(255,255,255,0.35)',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                    }}>
                        THE FELLOWSHIP
                    </div>
                    <h2 style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontStyle: 'italic',
                        fontWeight: 600,
                        fontSize: 'clamp(2rem, 3.5vw, 4rem)',
                        lineHeight: 0.95,
                        color: '#FFFFFF',
                        letterSpacing: '-0.02em',
                        margin: 0,
                    }}>
                        Hands-on Fellowship
                    </h2>
                </div>
            </div>

            {/* Two-column body */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            }}>
                {/* LEFT/TOP — copy */}
                <div style={{
                    padding: isMobile ? '3rem 1.5rem' : '4rem 6rem',
                    borderRight: !isMobile ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    borderBottom: isMobile ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <div ref={contentItemsRef}>
                        {[
                            {
                                heading: 'Hands-on Fellowship',
                                body: 'A program for students and aspiring founders to solve real problems by building real products.',
                            },
                            {
                                heading: 'Mentorship & Tools',
                                body: 'We provide the tools, mentorship, and structured teams needed to move from idea to working product — fast.',
                            },
                            {
                                heading: 'Real-World Impact',
                                body: 'Work on meaningful projects that address actual market needs and gain experience that translates directly to your career.',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    paddingBottom: '2.5rem',
                                    marginBottom: i < 2 ? '2.5rem' : 0,
                                    borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                                }}
                            >
                                <div style={{
                                    fontFamily: 'var(--font-jetbrains-mono)',
                                    fontSize: '0.6rem',
                                    color: 'var(--sage)',
                                    letterSpacing: '0.15em',
                                    marginBottom: '0.75rem',
                                }}>
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <h3 style={{
                                    fontFamily: 'var(--font-cormorant)',
                                    fontStyle: 'italic',
                                    fontWeight: 600,
                                    fontSize: '1.5rem',
                                    color: '#FFFFFF',
                                    lineHeight: 1.1,
                                    marginBottom: '0.6rem',
                                    margin: '0 0 0.6rem',
                                }}>
                                    {item.heading}
                                </h3>
                                <p style={{
                                    fontFamily: 'var(--font-dm-sans)',
                                    fontSize: '0.92rem',
                                    color: 'rgba(255,255,255,0.55)',
                                    lineHeight: 1.75,
                                    margin: 0,
                                }}>
                                    {item.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT/BOTTOM — 2x2 stats grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: isMobile ? 'repeat(2, auto)' : '1fr 1fr',
                }}>
                    {STATS.map((stat, i) => (
                        <div
                            key={i}
                            ref={(el) => { statsRefs.current[i] = el; }}
                            style={{
                                padding: isMobile ? '3rem 1.5rem' : '4rem 3rem',
                                borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                                borderBottom: i < 2 || isMobile ? '1px solid rgba(255,255,255,0.08)' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <div
                                className="stat-number"
                                style={{
                                    fontFamily: 'var(--font-cormorant)',
                                    fontWeight: 700,
                                    fontStyle: 'normal',
                                    fontSize: 'clamp(3rem, 5vw, 5.5rem)',
                                    lineHeight: 0.9,
                                    color: '#FFFFFF',
                                    letterSpacing: '-0.03em',
                                    marginBottom: '0.75rem',
                                }}
                            >
                                {stat.number}
                            </div>
                            <div style={{
                                fontFamily: 'var(--font-jetbrains-mono)',
                                fontSize: '0.6rem',
                                color: 'rgba(255,255,255,0.4)',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
