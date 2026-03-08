"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import GrainOverlay from "@/components/ui/GrainOverlay";

export default function CareersHero() {
    const rootRef = useRef<HTMLElement | null>(null);
    const headlineRef = useRef<HTMLHeadingElement | null>(null);
    const subtextRef = useRef<HTMLParagraphElement | null>(null);
    const ctaRef = useRef<HTMLDivElement | null>(null);
    const labelRef = useRef<HTMLDivElement | null>(null);
    const ghostTextRef = useRef<HTMLDivElement | null>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);

    useGSAP(({ gsap }) => {
        if (!headlineRef.current) return;

        // Headline split reveal simulation
        const headlineLines = headlineRef.current.innerHTML.split("<br>").map(line => {
            return `<span style="display: block; overflow: hidden;"><span class="headline-line" style="display: block;">${line}</span></span>`;
        }).join("");
        headlineRef.current.innerHTML = headlineLines;

        const lines = headlineRef.current.querySelectorAll(".headline-line");

        gsap.set(labelRef.current, { opacity: 0 });
        gsap.set(lines, { yPercent: 100, clipPath: "inset(0 0 100% 0)" });
        gsap.set(subtextRef.current, { y: 20, opacity: 0 });
        gsap.set(ctaRef.current?.children || [], { x: -20, opacity: 0 });
        gsap.set(ghostTextRef.current, { y: 20, opacity: 0 });

        const tl = gsap.timeline();

        tl.to(labelRef.current, { opacity: 1, duration: 0.5 })
            .to(lines, {
                yPercent: 0,
                clipPath: "inset(0 0 0% 0)",
                stagger: 0.12,
                duration: 0.9,
                ease: "power3.out"
            }, "-=0.2")
            .to(subtextRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.4")
            .to(ctaRef.current?.children || [], {
                x: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.2")
            .to(ghostTextRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power2.out"
            }, "-=0.8");

        // Scroll indicator bounce
        gsap.to(scrollIndicatorRef.current, {
            y: 6,
            duration: 0.9,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        });

        // Parallax for ghost text
        gsap.to(ghostTextRef.current, {
            y: -60,
            ease: "none",
            scrollTrigger: {
                trigger: rootRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section
            ref={rootRef}
            className="careers-hero"
            style={{
                position: 'relative',
                height: '100svh',
                background: 'var(--void)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '0 6rem 6rem',
                overflow: 'hidden',
            }}
        >
            {/* Background decorative text */}
            <div
                ref={ghostTextRef}
                className="ghost-text"
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-2rem',
                    transform: 'translateY(-50%)',
                    fontFamily: 'var(--font-cormorant)',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    fontSize: 'clamp(8rem, 18vw, 22rem)',
                    lineHeight: 0.85,
                    color: 'rgba(255,255,255,0.03)',
                    letterSpacing: '-0.04em',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            >
                BUILD.
            </div>

            <GrainOverlay />

            {/* Top label */}
            <div
                ref={labelRef}
                className="hero-label"
                style={{
                    position: 'absolute',
                    top: '7rem',
                    left: '6rem',
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.65rem',
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    zIndex: 2,
                }}
            >
                QUILD  &middot;  CAREERS
            </div>

            {/* Main content */}
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px' }}>
                <h1
                    ref={headlineRef}
                    className="hero-headline"
                    style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontStyle: 'italic',
                        fontWeight: 600,
                        fontSize: 'clamp(3rem, 6.5vw, 8rem)',
                        lineHeight: 0.9,
                        color: '#FFFFFF',
                        letterSpacing: '-0.02em',
                        marginBottom: '2rem',
                    }}
                >
                    Build the Future<br />of Learning.
                </h1>

                <p
                    ref={subtextRef}
                    style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '1.1rem',
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.75,
                        maxWidth: '520px',
                        marginBottom: '3rem',
                    }}
                >
                    Empowering the next generation of founders to build the future
                    of technology through hands-on collaboration. We're a small team
                    doing serious work. Come build with us.
                </p>

                <div ref={ctaRef} className="hero-cta" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <a
                        href="#positions"
                        style={{
                            fontFamily: 'var(--font-jetbrains-mono)',
                            fontSize: '0.68rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'var(--void)',
                            background: '#FFFFFF',
                            border: 'none',
                            padding: '0.875rem 2rem',
                            textDecoration: 'none',
                            display: 'inline-block',
                        }}
                    >
                        SEE OPEN ROLES &rarr;
                    </a>

                    <a
                        href="#fellowship"
                        style={{
                            fontFamily: 'var(--font-jetbrains-mono)',
                            fontSize: '0.68rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.7)',
                            border: '1px solid rgba(255,255,255,0.25)',
                            padding: '0.875rem 2rem',
                            textDecoration: 'none',
                            display: 'inline-block',
                        }}
                    >
                        THE FELLOWSHIP
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                ref={scrollIndicatorRef}
                className="scroll-indicator"
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    right: '6rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.58rem',
                    color: 'rgba(255,255,255,0.25)',
                    letterSpacing: '0.15em',
                    zIndex: 2,
                }}
            >
                SCROLL
                <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.22)' }} />
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .careers-hero {
            padding: 0 1.5rem 4rem !important;
          }
          .ghost-text {
            display: none !important;
          }
          .hero-headline {
            font-size: clamp(2.5rem, 8vw, 4rem) !important;
          }
          .hero-label {
            left: 1.5rem !important;
            top: 6rem !important;
          }
          .hero-cta {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-cta > a {
            width: 100% !important;
            text-align: center !important;
          }
          .scroll-indicator {
            right: 1.5rem !important;
          }
        }
      `}</style>
        </section>
    );
}
