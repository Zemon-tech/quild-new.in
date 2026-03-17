"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@/hooks/useGSAP";
import { useIsMobile } from "@/hooks/use-mobile";

const POSITIONS = [
    {
        slug: 'ai-engineer-l1',
        title: 'AI Engineer – Level 1',
        department: 'Engineering',
        type: 'Internship',
        location: 'Remote',
        body: 'Entry-level AI engineer role for fast learners who love building with modern AI tools and shipping real products.',
    },
    {
        slug: 'ai-engineer-l2',
        title: 'AI Engineer – Level 2',
        department: 'Engineering',
        type: 'Internship',
        location: 'Remote',
        body: 'Mid-level AI engineer who can own features end-to-end, work across the stack, and build production-ready AI experiences.',
    },
    {
        slug: 'ai-engineer-l3',
        title: 'AI Engineer – Level 3',
        department: 'Engineering',
        type: 'Internship',
        location: 'Remote',
        body: 'Senior AI engineer who leads architecture, scaling, and reliability of AI systems powering builders on our platform.',
    },
    {
        slug: 'brand-creator-l1',
        title: 'Brand Creator – Level 1',
        department: 'Brand & Community',
        type: 'Internship',
        location: 'Remote',
        body: 'Early-career brand storyteller who loves experimenting with content across X, Reddit, LinkedIn, Instagram, and Bluesky.',
    },
    {
        slug: 'brand-creator-l2',
        title: 'Brand Creator – Level 2',
        department: 'Brand & Community',
        type: 'Internship',
        location: 'Remote',
        body: 'Experienced brand builder who can own strategy and execution across X, Reddit, LinkedIn, Instagram, and Bluesky.',
    },
    {
        slug: 'researcher-systems-ai-l1',
        title: 'Researcher – Systems & AI (Level 1)',
        department: 'Research & Infrastructure',
        type: 'Internship',
        location: 'Remote',
        body: 'Hands-on researcher focused on servers, latency, and AI integrations through real experiments.',
    },
    {
        slug: 'researcher-systems-ai-l2',
        title: 'Researcher – Systems & AI (Level 2)',
        department: 'Research & Infrastructure',
        type: 'Internship',
        location: 'Remote',
        body: 'Experienced researcher working on server performance, latency, AI/ML model integration, and compute efficiency at scale.',
    },
];

const DEPARTMENTS = ['All', ...Array.from(new Set(POSITIONS.map(p => p.department)))];

export default function CareersOpenPositions() {
    const isMobile = useIsMobile();
    const [activeFilter, setActiveFilter] = useState('All');
    const listRef = useRef<HTMLDivElement | null>(null);

    const filtered = useMemo(() =>
        activeFilter === 'All' ? POSITIONS : POSITIONS.filter(p => p.department === activeFilter),
        [activeFilter]
    );

    useGSAP(({ gsap }) => {
        // Initial reveal
        if (listRef.current) {
            gsap.fromTo(listRef.current.children,
                { y: 25, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.08,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: "top 75%",
                    }
                }
            );
        }
    }, []);

    // Filter change animation
    useEffect(() => {
        const { gsap } = require("gsap");
        if (listRef.current) {
            gsap.fromTo(listRef.current.children,
                { y: 15, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.06,
                    duration: 0.5,
                    ease: "power2.out"
                }
            );
        }
    }, [activeFilter]);

    return (
        <section id="positions" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
            {/* Header */}
            <div style={{
                padding: isMobile ? '3rem 1.5rem 2rem' : 'clamp(80px, 10vw, 140px) 6rem 3rem',
                borderBottom: '1px solid var(--border)',
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
                        OPEN ROLES
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
                        Open Positions
                    </h2>
                </div>

                <div style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--muted)',
                    letterSpacing: '0.1em',
                }}>
                    {filtered.length} {filtered.length === 1 ? 'ROLE' : 'ROLES'}
                </div>
            </div>

            {/* Body: filter tabs + listings */}
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', position: isMobile ? 'static' : 'relative' }}>
                {!isMobile && (
                    <div
                        aria-hidden
                        style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: '240px',
                            width: '1px',
                            background: 'var(--border)',
                            pointerEvents: 'none',
                        }}
                    />
                )}
                {/* LEFT/TOP — department filter */}
                <div style={isMobile ? {
                    padding: '1rem 1.5rem',
                    borderBottom: '1px solid var(--border)',
                    overflowX: 'auto',
                    display: 'flex',
                    gap: '1rem',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                } : {
                    width: '240px',
                    flexShrink: 0,
                    borderRight: 'none',
                    padding: '3rem 2rem',
                    position: 'sticky',
                    top: '60px',
                    alignSelf: 'flex-start',
                    height: 'fit-content',
                }}>
                    {!isMobile && (
                        <div style={{
                            fontFamily: 'var(--font-jetbrains-mono)',
                            fontSize: '0.58rem',
                            color: 'var(--muted)',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            marginBottom: '1.25rem',
                        }}>
                            FILTER BY TEAM
                        </div>
                    )}

                    {DEPARTMENTS.map(dept => (
                        <button
                            key={dept}
                            onClick={() => setActiveFilter(dept)}
                            style={isMobile ? {
                                whiteSpace: 'nowrap',
                                background: activeFilter === dept ? 'var(--ink)' : 'transparent',
                                border: activeFilter === dept ? '1px solid var(--ink)' : '1px solid var(--border)',
                                padding: '0.5rem 1rem',
                                fontFamily: 'var(--font-dm-sans)',
                                fontSize: '0.85rem',
                                color: activeFilter === dept ? 'var(--bg)' : 'var(--muted)',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                            } : {
                                display: 'block',
                                width: '100%',
                                textAlign: 'left',
                                background: 'transparent',
                                border: 'none',
                                borderLeft: activeFilter === dept ? '2px solid var(--sage)' : '2px solid transparent',
                                padding: '0.5rem 0 0.5rem 0.875rem',
                                fontFamily: 'var(--font-dm-sans)',
                                fontSize: '0.9rem',
                                color: activeFilter === dept ? 'var(--ink)' : 'var(--muted)',
                                cursor: 'pointer',
                                marginBottom: '0.25rem',
                                transition: 'color 0.2s, border-color 0.2s',
                            }}
                        >
                            {dept}
                        </button>
                    ))}
                </div>

                {/* RIGHT/BOTTOM — position rows */}
                <div ref={listRef} style={{ flex: 1 }}>
                    {filtered.map((position) => (
                        <div
                            key={position.title}
                            style={{
                                borderBottom: '1px solid var(--border)',
                                padding: isMobile ? '2rem 1.5rem' : '2.5rem 4rem',
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                alignItems: isMobile ? 'flex-start' : 'flex-start',
                                justifyContent: 'space-between',
                                gap: '2rem',
                            }}
                        >
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.875rem', flexWrap: 'wrap' }}>
                                    {[position.department, position.location, position.type].map((tag, t) => (
                                        <span
                                            key={t}
                                            style={{
                                                fontFamily: 'var(--font-jetbrains-mono)',
                                                fontSize: '0.55rem',
                                                letterSpacing: '0.15em',
                                                textTransform: 'uppercase',
                                                color: t === 0 ? 'var(--sage)' : 'var(--muted)',
                                                border: '1px solid',
                                                borderColor: t === 0 ? 'var(--sage)' : 'var(--border)',
                                                padding: '0.15rem 0.5rem',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 style={{
                                    fontFamily: 'var(--font-cormorant)',
                                    fontStyle: 'italic',
                                    fontWeight: 600,
                                    fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                                    lineHeight: 1.05,
                                    color: 'var(--ink)',
                                    letterSpacing: '-0.01em',
                                    marginBottom: '0.75rem',
                                    margin: '0 0 0.75rem',
                                }}>
                                    {position.title}
                                </h3>

                                <p style={{
                                    fontFamily: 'var(--font-dm-sans)',
                                    fontSize: '0.92rem',
                                    color: 'var(--muted)',
                                    lineHeight: 1.7,
                                    maxWidth: '560px',
                                    margin: 0,
                                }}>
                                    {position.body}
                                </p>
                            </div>

                            <div style={{ flexShrink: 0, width: isMobile ? '100%' : 'auto', paddingTop: isMobile ? '0' : '0.5rem' }}>
                                <Link
                                    href={`/careers/apply/${position.slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontFamily: 'var(--font-jetbrains-mono)',
                                        fontSize: '0.65rem',
                                        letterSpacing: '0.15em',
                                        textTransform: 'uppercase',
                                        color: 'var(--ink)',
                                        border: '1px solid var(--ink)',
                                        padding: '0.7rem 1.5rem',
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        width: isMobile ? '100%' : 'auto',
                                        textAlign: 'center',
                                        whiteSpace: 'nowrap',
                                        transition: 'background 0.2s, color 0.2s',
                                    }}
                                    onMouseEnter={e => {
                                        if (!isMobile) {
                                            e.currentTarget.style.background = 'var(--ink)';
                                            e.currentTarget.style.color = 'var(--bg)';
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        if (!isMobile) {
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.color = 'var(--ink)';
                                        }
                                    }}
                                >
                                    <ArrowRight className="h-3.5 w-3.5" />
                                    APPLY NOW
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        div[style*="overflow-x: auto"]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
}
