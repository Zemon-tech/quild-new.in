"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";

const BENEFITS = [
    {
        title: 'Hyper-Growth Environment',
        body: 'Learn faster here than anywhere else. You\'ll tackle diverse, mindful work that spans industries across multiple ventures.',
    },
    {
        title: 'Personal Brand Recognition',
        body: 'We don\'t hide our talent. Quild actively promotes team members on social media, building your professional presence.',
    },
    {
        title: 'Future-Proof Skill Building',
        body: 'Stay at the cutting edge. We provide resources and time to master both emerging technologies and core fundamentals.',
    },
    {
        title: 'Creative Autonomy',
        body: 'We value your mind-free time. Our workflow is designed to give you headspace for high-level problem solving and innovation.',
    },
    {
        title: 'Remote-First Culture',
        body: 'Work from where you are most inspired. We trust our team to deliver excellence without constraints of a traditional office.',
    },
    {
        title: 'Diverse Venture Exposure',
        body: 'Gain experience across various sectors. Our ecosystem lets you rotate through different complex projects, keeping work fresh.',
    },
];

export default function CareersBenefits() {
    const isMobile = useIsMobile();
    const gridRef = useRef<HTMLDivElement | null>(null);

    useGSAP(({ gsap }) => {
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
            {/* Header */}
            <div style={{
                padding: isMobile ? '3rem 1.5rem 2rem' : 'clamp(80px, 10vw, 140px) 6rem 3rem',
                borderBottom: '1px solid var(--border)',
            }}>
                <div style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--muted)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                }}>
                    WHY QUILD
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
                    What you get
                </h2>
            </div>

            {/* 2x3 Grid */}
            <div
                ref={gridRef}
                style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)'
                }}
            >
                {BENEFITS.map((b, i) => (
                    <div
                        key={i}
                        style={{
                            padding: isMobile ? '2rem 1.5rem' : '3rem',
                            borderRight: !isMobile && (i % 3) < 2 ? '1px solid var(--border)' : 'none',
                            borderBottom: isMobile || i < 3 ? '1px solid var(--border)' : 'none',
                            borderTop: 'none',
                        }}
                    >
                        <div style={{
                            fontFamily: 'var(--font-jetbrains-mono)',
                            fontSize: '0.6rem',
                            color: 'var(--muted)',
                            letterSpacing: '0.15em',
                            marginBottom: '1.25rem',
                        }}>
                            {String(i + 1).padStart(2, '0')}
                        </div>

                        <h3 style={{
                            fontFamily: 'var(--font-cormorant)',
                            fontStyle: 'italic',
                            fontWeight: 600,
                            fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)',
                            lineHeight: 1.1,
                            color: 'var(--ink)',
                            letterSpacing: '-0.01em',
                            marginBottom: '0.875rem',
                            margin: '0 0 0.875rem',
                        }}>
                            {b.title}
                        </h3>

                        <p style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '0.92rem',
                            color: 'var(--muted)',
                            lineHeight: 1.75,
                            margin: 0,
                        }}>
                            {b.body}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
