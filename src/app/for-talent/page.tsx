'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import LogoMarquee from '@/components/LogoMarquee';
import type { Metadata } from 'next';

const painPoints = [
    { icon: '📋', old: 'Applying to 1,000 jobs', new: 'Set up once. Get matched.' },
    { icon: '👻', old: 'Getting ghosted by recruiters', new: 'AI advocates for you.' },
    { icon: '🏟️', old: 'Competing with thousands', new: 'Fewer, qualified peers.' },
    { icon: '⏱️', old: 'Wasting hours on applications', new: 'Profile does the work.' },
    { icon: '💸', old: 'Paying platform fees', new: 'Zero fees. Ever.' },
];

const howItWorks = [
    {
        step: '01',
        title: 'Create Your Profile',
        desc: 'Tell us about your skills, experience, and goals. Takes about 20 minutes. We handle the rest.',
        badge: 'Start Here',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
    {
        step: '02',
        title: 'AI Skills Interview',
        desc: 'Complete a short, conversational AI interview that validates your actual skills — not just your resume bullets.',
        badge: 'Smart Screening',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
    },
    {
        step: '03',
        title: 'Get Certified',
        desc: 'Earn your Certified Braintrust Talent badge. ID-verified, skills-validated, trusted by top companies.',
        badge: '🏅 Certified Status',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        step: '04',
        title: 'Get Matched',
        desc: 'Our AI surfaces roles you are highly likely to win — based on your skills, not keyword guessing. No more searching.',
        badge: 'AI-Powered',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
    },
    {
        step: '05',
        title: 'Start Earning',
        desc: 'Work contract or full-time. Keep 100% of your earnings. No middlemen, no fees — ever.',
        badge: '$0 Fees',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 6v12M8 10l4-4 4 4M8 14l4 4 4-4" />
            </svg>
        ),
    },
];

const testimonials = [
    {
        quote: "I used to apply everywhere and hear nothing. Three weeks on Braintrust and I had two interviews with companies I actually wanted to work for.",
        name: 'Mara T.',
        role: 'Senior Product Designer',
        location: 'Austin, TX',
        avatar: 'MT',
    },
    {
        quote: "The AI interview felt surprisingly human. It understood what I actually do — not just my job title. I got matched to a role perfectly aligned with my skills.",
        name: 'James K.',
        role: 'ML Engineer',
        location: 'Remote',
        avatar: 'JK',
    },
    {
        quote: "I've been a contractor for 8 years. Braintrust is the only platform I've used where I genuinely feel like they're on my side. And zero fees means real money.",
        name: 'Ana R.',
        role: 'Full Stack Engineer',
        location: 'Miami, FL',
        avatar: 'AR',
    },
];

const benefits = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 6v12M8 10l4-4 4 4" />
            </svg>
        ),
        title: 'Zero Platform Fees',
        desc: 'Keep 100% of your earnings. We never charge talent — no fees, no markups, no surprises.',
        color: 'var(--color-teal)',
        bg: 'rgba(0, 212, 170, 0.08)',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Verified & Certified',
        desc: 'ID verification + skills validation makes you stand out above thousands of generic applicants.',
        color: 'var(--color-primary)',
        bg: 'var(--color-primary-50)',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        title: 'Intelligent Matching',
        desc: 'Compete with fewer, qualified candidates. Our AI puts you in front of roles where you have a real shot.',
        color: 'var(--color-info)',
        bg: 'rgba(84, 105, 212, 0.08)',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
        ),
        title: 'Premium Companies',
        desc: 'Work with Fortune 500s, high-growth startups, and leading AI labs. The kind of work that builds careers.',
        color: 'var(--color-gold-dark)',
        bg: 'rgba(255, 188, 68, 0.1)',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        title: 'Remote & Flexible',
        desc: 'Contract and full-time roles. Work from anywhere. On your schedule, at your pace.',
        color: 'var(--color-accent-dark)',
        bg: 'rgba(242, 139, 130, 0.1)',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        title: 'AI Gig Income',
        desc: 'Earn additional income training AI models in your specialty — on your own schedule, from anywhere.',
        color: 'var(--color-teal-dark)',
        bg: 'rgba(0, 184, 148, 0.08)',
    },
];

const stats = [
    { value: '$0', label: 'Fees for Talent', sub: 'Always' },
    { value: '2M+', label: 'Network Members', sub: 'Worldwide' },
    { value: '10K+', label: 'Active Roles', sub: 'Right now' },
    { value: '95%', label: 'Match Relevance', sub: 'Avg. score' },
];

/* ── Scroll-triggered "Better Way" animation component ──────────── */
function BetterWaySection({ painPoints }: { painPoints: { icon: string; old: string; new: string }[] }) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('btw-visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section" style={{ background: 'var(--color-white)' }}>
            <style>{`
                @keyframes btwFadeSlide {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes btwStrike {
                    from { width: 0; }
                    to   { width: 100%; }
                }
                @keyframes btwCheckPop {
                    0%   { transform: scale(0); opacity: 0; }
                    60%  { transform: scale(1.2); }
                    100% { transform: scale(1); opacity: 1; }
                }

                /* Rows — hidden until visible */
                .btw-row {
                    opacity: 0;
                    transform: translateY(20px);
                }
                .btw-visible .btw-row {
                    animation: btwFadeSlide 0.55s ease forwards;
                }
                .btw-visible .btw-row:nth-child(1) { animation-delay: 0.1s; }
                .btw-visible .btw-row:nth-child(2) { animation-delay: 0.35s; }
                .btw-visible .btw-row:nth-child(3) { animation-delay: 0.6s; }
                .btw-visible .btw-row:nth-child(4) { animation-delay: 0.85s; }
                .btw-visible .btw-row:nth-child(5) { animation-delay: 1.1s; }

                /* Strikethrough line */
                .btw-strike { position: relative; display: inline-block; }
                .btw-strike::after {
                    content: '';
                    position: absolute;
                    left: 0; top: 50%;
                    height: 2px; width: 0;
                    background: var(--color-gray-300);
                }
                .btw-visible .btw-strike::after {
                    animation: btwStrike 0.45s ease forwards;
                }
                .btw-visible .btw-row:nth-child(1) .btw-strike::after { animation-delay: 0.35s; }
                .btw-visible .btw-row:nth-child(2) .btw-strike::after { animation-delay: 0.6s; }
                .btw-visible .btw-row:nth-child(3) .btw-strike::after { animation-delay: 0.85s; }
                .btw-visible .btw-row:nth-child(4) .btw-strike::after { animation-delay: 1.1s; }
                .btw-visible .btw-row:nth-child(5) .btw-strike::after { animation-delay: 1.35s; }

                /* Check icon pop */
                .btw-check { opacity: 0; transform: scale(0); }
                .btw-visible .btw-check {
                    animation: btwCheckPop 0.35s ease forwards;
                }
                .btw-visible .btw-row:nth-child(1) .btw-check { animation-delay: 0.55s; }
                .btw-visible .btw-row:nth-child(2) .btw-check { animation-delay: 0.8s; }
                .btw-visible .btw-row:nth-child(3) .btw-check { animation-delay: 1.05s; }
                .btw-visible .btw-row:nth-child(4) .btw-check { animation-delay: 1.3s; }
                .btw-visible .btw-row:nth-child(5) .btw-check { animation-delay: 1.55s; }

                /* New-way text fades in with the check */
                .btw-new-text { opacity: 0; transform: translateX(-8px); transition: all 0.4s ease; }
                .btw-visible .btw-row:nth-child(1) .btw-new-text { opacity: 1; transform: none; transition-delay: 0.6s; }
                .btw-visible .btw-row:nth-child(2) .btw-new-text { opacity: 1; transform: none; transition-delay: 0.85s; }
                .btw-visible .btw-row:nth-child(3) .btw-new-text { opacity: 1; transform: none; transition-delay: 1.1s; }
                .btw-visible .btw-row:nth-child(4) .btw-new-text { opacity: 1; transform: none; transition-delay: 1.35s; }
                .btw-visible .btw-row:nth-child(5) .btw-new-text { opacity: 1; transform: none; transition-delay: 1.6s; }
            `}</style>
            <div className="container">
                <div className="section-header">
                    <h2>Stop applying everywhere.<br /><span className="text-gradient">Start getting found.</span></h2>
                    <p>Every frustrating part of the job hunt — we&apos;ve replaced it with something better.</p>
                </div>
                <div ref={sectionRef} style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    {painPoints.map((p, i) => (
                        <div key={i} className="btw-row" style={{
                            display: 'flex', alignItems: 'center', gap: 'var(--space-5)',
                            background: 'var(--color-white)', borderRadius: 'var(--radius-xl)',
                            padding: 'var(--space-5) var(--space-6)',
                            border: '1px solid var(--color-gray-100)',
                            boxShadow: 'var(--shadow-sm)',
                        }}>
                            {/* Old way — strikes through */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <span className="btw-strike" style={{
                                    fontSize: 15, color: 'var(--text-tertiary)', fontWeight: 500,
                                }}>{p.old}</span>
                            </div>

                            {/* Arrow */}
                            <div style={{
                                width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                                background: 'var(--color-gray-50)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--color-gray-300)', fontSize: 16,
                            }}>→</div>

                            {/* New way — pops in */}
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                                <div className="btw-check" style={{
                                    width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                                    background: 'rgba(84,105,212,0.1)', color: 'var(--color-info)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="btw-new-text" style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-info)' }}>{p.new}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function ForTalent() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────────────────── */}
            <section style={{
                position: 'relative',
                padding: 'calc(var(--header-height) + var(--space-20)) 0 var(--space-24)',
                overflow: 'hidden',
                background: 'linear-gradient(175deg, #fff 0%, #FFF8F5 50%, #FFF0ED 100%)',
            }}>
                {/* Ambient blobs */}
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                    <div style={{
                        position: 'absolute', top: '-5%', right: '-5%',
                        width: '60%', height: '80%',
                        background: 'radial-gradient(ellipse, rgba(244,132,95,0.15) 0%, rgba(255,188,68,0.08) 45%, transparent 70%)',
                        filter: 'blur(70px)',
                        animation: 'auroraShift 20s ease-in-out infinite alternate',
                    }} />
                    <div style={{
                        position: 'absolute', bottom: '0%', left: '-5%',
                        width: '50%', height: '60%',
                        background: 'radial-gradient(ellipse, rgba(155,138,255,0.1) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
                        <h1 style={{ marginBottom: 'var(--space-6)', fontSize: 'clamp(2.5rem, 6vw, 4.75rem)', lineHeight: 1.05 }}>
                            Finding work shouldn&apos;t<br />
                            <span className="text-gradient">feel this broken.</span>
                        </h1>

                        <p style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                            lineHeight: 1.65,
                            color: 'var(--text-secondary)',
                            maxWidth: 620,
                            margin: '0 auto var(--space-10)',
                        }}>
                            We know the exhaustion of endless applications, ghosted interviews, and wasted hours.
                            Braintrust is the alternative — set up once, get certified, get matched to roles
                            you&apos;re actually likely to win.
                        </p>

                        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="https://app.usebraintrust.com" id="talent-hero-start-profile" className="btn btn--primary btn--lg"
                                style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
                                Start Your Profile
                            </Link>
                            <Link href="/how-it-works" id="talent-hero-how-it-works" className="btn btn--secondary btn--lg">
                                See How It Works
                            </Link>
                        </div>

                        {/* Trust signals */}
                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            gap: 'var(--space-6)', marginTop: 'var(--space-8)', flexWrap: 'wrap',
                        }}>
                            {['$0 fees for talent', '2M+ members', 'ID-verified jobs', 'Remote-first'].map(t => (
                                <div key={t} style={{
                                    display: 'flex', alignItems: 'center', gap: 6,
                                    fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)',
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2.5" strokeLinecap="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* HERO MEDIA */}
                    <div style={{
                        position: 'relative', maxWidth: 960, margin: 'var(--space-16) auto 0',
                        borderRadius: 'var(--radius-2xl)', overflow: 'hidden',
                        boxShadow: 'var(--shadow-2xl)', border: '1px solid rgba(0,0,0,0.05)',
                        background: 'var(--color-white)',
                    }}>
                        <img
                            src="/images/talent_hero_photo_1772039872736.png"
                            alt="Professional remote worker"
                            style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            {/* ── LOGO MARQUEE ──────────────────────────────────────── */}
            <section style={{ padding: 'var(--space-12) 0', background: 'var(--color-white)', borderTop: '1px solid var(--color-gray-100)', borderBottom: '1px solid var(--color-gray-100)' }}>
                <LogoMarquee label="Work with companies you already admire" speed={45} />
            </section>

            {/* ── THE PROBLEM → SOLUTION (Scroll-Triggered Animation) ─────── */}
            <BetterWaySection painPoints={painPoints} />

            {/* ── HOW IT WORKS ──────────────────────────────────────── */}
            <section className="section" style={{ background: 'linear-gradient(135deg, #FFF8F5 0%, #F5F3FF 100%)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="badge">How It Works</div>
                        <h2>Five steps to<br /><span className="text-gradient">earning on your terms.</span></h2>
                        <p>No endless searching. No recruiter runaround. Just a clear, simple path from where you are to where you want to be.</p>
                    </div>

                    <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
                        {/* Connector line */}
                        <div style={{
                            position: 'absolute', left: 39, top: 60, bottom: 60,
                            width: 2, background: 'linear-gradient(180deg, var(--color-primary-100), var(--color-primary) 50%, var(--color-teal))',
                            borderRadius: 2,
                        }} />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                            {howItWorks.map((step, idx) => (
                                <div key={step.step} style={{
                                    display: 'grid',
                                    gridTemplateColumns: '80px 1fr',
                                    gap: 'var(--space-6)',
                                    alignItems: 'flex-start',
                                    position: 'relative',
                                }}>
                                    {/* Step circle */}
                                    <div style={{
                                        width: 80, height: 80, flexShrink: 0,
                                        borderRadius: '50%',
                                        background: idx === howItWorks.length - 1
                                            ? 'linear-gradient(135deg, var(--color-teal-dark), var(--color-teal))'
                                            : 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))',
                                        color: 'white',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        boxShadow: idx === howItWorks.length - 1
                                            ? '0 4px 20px rgba(0,184,148,0.35)'
                                            : '0 4px 20px rgba(244,132,95,0.35)',
                                        position: 'relative', zIndex: 1,
                                    }}>
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <div style={{
                                        background: 'var(--color-white)',
                                        borderRadius: 'var(--radius-xl)',
                                        padding: 'var(--space-6) var(--space-8)',
                                        border: '1px solid var(--color-gray-100)',
                                        boxShadow: 'var(--shadow-sm)',
                                        marginTop: 'var(--space-3)',
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>
                                            <span style={{
                                                fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                                                textTransform: 'uppercase',
                                                padding: '3px 10px', borderRadius: 'var(--radius-full)',
                                                background: 'var(--color-primary-50)',
                                                color: 'var(--color-primary-dark)',
                                            }}>{step.badge}</span>
                                        </div>
                                        <h4 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--text-xl)' }}>{step.title}</h4>
                                        <p style={{ fontSize: 'var(--text-base)', margin: 0 }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
                        <Link href="https://app.usebraintrust.com" className="btn btn--primary btn--lg" id="talent-hiw-cta">
                            Get Certified Today
                        </Link>
                        <p style={{ fontSize: 13, marginTop: 'var(--space-3)', color: 'var(--text-tertiary)' }}>
                            Free to join. Zero fees. Takes about 20 minutes to get started.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── STATS STRIP ───────────────────────────────────────── */}
            <section style={{ background: 'var(--color-gray-950)', padding: 'var(--space-16) 0' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: 'var(--space-8)', textAlign: 'center',
                    }}>
                        {stats.map(s => (
                            <div key={s.label}>
                                <div className="text-gradient" style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                    fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em',
                                }}>{s.value}</div>
                                <div style={{ color: 'var(--color-white)', fontWeight: 600, fontSize: 'var(--text-sm)', marginTop: 8 }}>{s.label}</div>
                                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'var(--text-xs)', marginTop: 4 }}>{s.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY BRAINTRUST BENEFITS ───────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge badge--gold">Why Braintrust</div>
                        <h2>Built for talent.<br /><span className="text-gradient-warm">We&apos;re on your side.</span></h2>
                        <p>Everything about this platform was designed to make your professional life easier, your work more rewarding, and your income more stable.</p>
                    </div>

                    <div className="grid grid--3">
                        {benefits.map((b) => (
                            <div key={b.title} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                                <div style={{
                                    width: 52, height: 52, borderRadius: 'var(--radius-lg)',
                                    background: b.bg, color: b.color,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: 'var(--space-4)',
                                }}>{b.icon}</div>
                                <h5 style={{ marginBottom: 'var(--space-2)' }}>{b.title}</h5>
                                <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ──────────────────────────────────────── */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="badge badge--accent">Real Members</div>
                        <h2>Professionals who<br /><span className="text-gradient">made the switch.</span></h2>
                    </div>

                    <div className="grid grid--3">
                        {testimonials.map((t) => (
                            <div key={t.name} className="card card--feature" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                                {/* Stars */}
                                <div style={{ display: 'flex', gap: 3 }}>
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="none">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    ))}
                                </div>
                                <p style={{ fontSize: 'var(--text-base)', fontStyle: 'italic', lineHeight: 1.7, flex: 1, margin: 0, color: 'var(--text-primary)' }}>
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                                    <div style={{
                                        width: 44, height: 44, borderRadius: '50%',
                                        background: 'var(--gradient-warm)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'white', fontSize: 14, fontWeight: 700, flexShrink: 0,
                                    }}>{t.avatar}</div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{t.name}</div>
                                        <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{t.role} · {t.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EXPLORE MORE ──────────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Everything you need<br /><span className="text-gradient">in one network.</span></h2>
                        <p>Jobs, certifications, gig work, and a network built around your success — not theirs.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-6)' }}>
                        {[
                            {
                                href: '/jobs',
                                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
                                title: 'See Open Roles',
                                desc: 'Browse high-quality contract and full-time opportunities across engineering, design, product, and more.',
                                cta: 'Browse Jobs',
                                color: 'var(--color-primary)',
                            },
                            {
                                href: '/talent-certification',
                                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>,
                                title: 'Get Certified',
                                desc: 'Earn your Certified Braintrust Talent badge. Trusted, verified, elevated above the crowd.',
                                cta: 'Learn About Certification',
                                color: 'var(--color-gold-dark)',
                            },
                            {
                                href: '/ai-training',
                                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>,
                                title: 'AI Gig Work',
                                desc: 'Earn on your own schedule by training AI models in your field. Flexible. Remote. Real pay.',
                                cta: 'Explore Gig Work',
                                color: 'var(--color-teal-dark)',
                            },
                            {
                                href: '/talent-types',
                                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
                                title: 'Your Specialty',
                                desc: 'We support talent across virtually every discipline — engineers, designers, PMs, analysts, and more.',
                                cta: 'See All Talent Types',
                                color: 'var(--color-info)',
                            },
                        ].map((card) => (
                            <Link key={card.href} href={card.href} className="card card--feature" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', textDecoration: 'none' }}>
                                <div style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    width: 48, height: 48, borderRadius: 'var(--radius-lg)',
                                    background: `${card.color}15`, color: card.color
                                }}>
                                    {card.icon}
                                </div>
                                <h4 style={{ fontSize: 'var(--text-xl)' }}>{card.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)', flex: 1, margin: 0 }}>{card.desc}</p>
                                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: card.color, marginTop: 'var(--space-2)' }}>
                                    {card.cta} →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ─────────────────────────────────────────── */}
            <section style={{
                background: 'linear-gradient(135deg, var(--color-gray-950) 0%, #0F1D32 50%, #1a0d2e 100%)',
                padding: 'var(--space-24) 0',
                position: 'relative', overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                    width: '80%', height: '80%',
                    background: 'radial-gradient(ellipse, rgba(244,132,95,0.12) 0%, rgba(155,138,255,0.08) 40%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{
                        display: 'inline-block',
                        fontSize: '2.5rem', marginBottom: 'var(--space-4)'
                    }}>✦</div>
                    <h2 style={{ color: 'white', marginBottom: 'var(--space-4)', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                        Ready to make money faster,<br />
                        <span className="text-gradient">with a lot less stress?</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'var(--text-lg)', maxWidth: 540, margin: '0 auto var(--space-10)' }}>
                        Join 2M+ professionals who decided a smarter path was worth it.
                        Free to join. $0 fees. Always.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="https://app.usebraintrust.com" className="btn btn--primary btn--lg" id="talent-final-cta"
                            style={{ fontSize: '1.05rem', padding: '16px 40px' }}>
                            Start Your Profile
                        </Link>
                        <Link href="/jobs" className="btn btn--white btn--lg" id="talent-final-browse">
                            Browse Open Roles
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
