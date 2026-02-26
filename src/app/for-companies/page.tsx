'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import LogoMarquee from '@/components/LogoMarquee';
import CTASection from '@/components/CTASection';

const products = [
    {
        title: 'Talent Marketplace',
        description: 'Access a global network of 2M+ vetted engineers, designers, PMs, STEM professionals, sales experts, researchers, and specialists.',
        href: '/products/talent-marketplace',
        features: ['AI-Powered Matching', 'Competitive Pricing', 'Enterprise Compliance', 'Human Data for AI Training'],
        color: '#6366f1',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: 'AIR | AI Recruiter',
        description: 'Deploy AI-powered recruiting that screens, interviews, and assesses candidates with superhuman consistency. Reduce time-to-hire by 80%.',
        href: '/products/air',
        features: ['AI Screening', 'Automated Interviews', 'Skills Assessment', 'Bias-Reduced Hiring'],
        color: '#f59e0b',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" />
            </svg>
        ),
    },
    {
        title: 'Nexus',
        description: 'Automate workflows across your entire organization. Connect every tool you use, trigger custom rules, and let Nexus handle the coordination.',
        href: '/products/nexus',
        features: ['Cross-Functional Automation', '200+ Integrations', 'Custom Rules Engine', 'Real-time Dashboards'],
        color: '#059669',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
];

const painPoints = [
    { old: 'Sorting through hundreds of resumes', better: 'AI finds the best fit in hours.' },
    { old: 'Weeks of recruiter back-and-forth', better: 'Automated scheduling & screening.' },
    { old: 'Paying 20-30% agency markups', better: 'Competitive, transparent pricing.' },
    { old: 'Cultural misfit after hire', better: 'Skills + values assessed together.' },
    { old: 'Slow onboarding and ramp time', better: 'Pre-vetted, certified, ready to go.' },
];

const stats = [
    { value: '80%', label: 'Faster Time-to-Hire', sub: 'vs. traditional recruiting' },
    { value: '$0', label: 'Talent Fees', sub: 'Talent keeps 100%' },
    { value: '95%', label: 'Hire Satisfaction', sub: 'Client rating' },
    { value: '5 days', label: 'Avg. First Match', sub: 'From kickoff' },
];

const testimonials = [
    {
        quote: "Braintrust gave us access to senior engineers we couldn't find through traditional channels. Our first hire was onboarded in under two weeks.",
        name: 'David L.',
        role: 'VP Engineering',
        company: 'Series B Startup',
        avatar: 'DL',
    },
    {
        quote: "We replaced a $200K annual recruiting contract with Braintrust. The quality is the same or better, and we're moving twice as fast.",
        name: 'Sarah M.',
        role: 'Head of People',
        company: 'Fortune 500',
        avatar: 'SM',
    },
    {
        quote: "AIR screened 800 candidates in a day. We had five finalists on our desks by Wednesday. It's a complete game-changer for volume hiring.",
        name: 'Michael C.',
        role: 'Talent Acquisition Dir.',
        company: 'Enterprise Tech',
        avatar: 'MC',
    },
];

/* ── Scroll-triggered "Better Way" section ──────────── */
function BetterWaySection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('co-btw-visible');
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
                @keyframes coBtwFade {
                    from { opacity: 0; transform: translateY(16px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes coBtwStrike {
                    from { width: 0; }
                    to   { width: 100%; }
                }
                @keyframes coBtwPop {
                    0%   { transform: scale(0); opacity: 0; }
                    60%  { transform: scale(1.15); }
                    100% { transform: scale(1); opacity: 1; }
                }
                .co-btw-row { opacity: 0; }
                .co-btw-visible .co-btw-row { animation: coBtwFade 0.5s ease forwards; }
                .co-btw-visible .co-btw-row:nth-child(1) { animation-delay: 0.1s; }
                .co-btw-visible .co-btw-row:nth-child(2) { animation-delay: 0.3s; }
                .co-btw-visible .co-btw-row:nth-child(3) { animation-delay: 0.5s; }
                .co-btw-visible .co-btw-row:nth-child(4) { animation-delay: 0.7s; }
                .co-btw-visible .co-btw-row:nth-child(5) { animation-delay: 0.9s; }
                .co-btw-strike { position: relative; display: inline-block; }
                .co-btw-strike::after {
                    content: ''; position: absolute; left: 0; top: 50%;
                    height: 2px; width: 0; background: var(--color-gray-300);
                }
                .co-btw-visible .co-btw-strike::after { animation: coBtwStrike 0.4s ease forwards; }
                .co-btw-visible .co-btw-row:nth-child(1) .co-btw-strike::after { animation-delay: 0.3s; }
                .co-btw-visible .co-btw-row:nth-child(2) .co-btw-strike::after { animation-delay: 0.5s; }
                .co-btw-visible .co-btw-row:nth-child(3) .co-btw-strike::after { animation-delay: 0.7s; }
                .co-btw-visible .co-btw-row:nth-child(4) .co-btw-strike::after { animation-delay: 0.9s; }
                .co-btw-visible .co-btw-row:nth-child(5) .co-btw-strike::after { animation-delay: 1.1s; }
                .co-btw-check { opacity: 0; transform: scale(0); }
                .co-btw-visible .co-btw-check { animation: coBtwPop 0.3s ease forwards; }
                .co-btw-visible .co-btw-row:nth-child(1) .co-btw-check { animation-delay: 0.5s; }
                .co-btw-visible .co-btw-row:nth-child(2) .co-btw-check { animation-delay: 0.7s; }
                .co-btw-visible .co-btw-row:nth-child(3) .co-btw-check { animation-delay: 0.9s; }
                .co-btw-visible .co-btw-row:nth-child(4) .co-btw-check { animation-delay: 1.1s; }
                .co-btw-visible .co-btw-row:nth-child(5) .co-btw-check { animation-delay: 1.3s; }
                .co-btw-new { opacity: 0; transform: translateX(-6px); transition: 0.4s ease; }
                .co-btw-visible .co-btw-row:nth-child(1) .co-btw-new { opacity: 1; transform: none; transition-delay: 0.55s; }
                .co-btw-visible .co-btw-row:nth-child(2) .co-btw-new { opacity: 1; transform: none; transition-delay: 0.75s; }
                .co-btw-visible .co-btw-row:nth-child(3) .co-btw-new { opacity: 1; transform: none; transition-delay: 0.95s; }
                .co-btw-visible .co-btw-row:nth-child(4) .co-btw-new { opacity: 1; transform: none; transition-delay: 1.15s; }
                .co-btw-visible .co-btw-row:nth-child(5) .co-btw-new { opacity: 1; transform: none; transition-delay: 1.35s; }
            `}</style>
            <div className="container">
                <div className="section-header">
                    <h2>Stop hiring the hard way.<br /><span className="text-gradient">There&apos;s a better path.</span></h2>
                    <p>Every expensive, slow, frustrating part of hiring — we&apos;ve already replaced it.</p>
                </div>
                <div ref={sectionRef} style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    {painPoints.map((p, i) => (
                        <div key={i} className="co-btw-row" style={{
                            display: 'flex', alignItems: 'center', gap: 'var(--space-5)',
                            background: 'var(--color-white)', borderRadius: 'var(--radius-xl)',
                            padding: 'var(--space-5) var(--space-6)',
                            border: '1px solid var(--color-gray-100)',
                            boxShadow: 'var(--shadow-sm)',
                        }}>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <span className="co-btw-strike" style={{ fontSize: 15, color: 'var(--text-tertiary)', fontWeight: 500 }}>{p.old}</span>
                            </div>
                            <div style={{
                                width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                                background: 'var(--color-gray-50)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--color-gray-300)', fontSize: 16,
                            }}>→</div>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                                <div className="co-btw-check" style={{
                                    width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                                    background: 'rgba(245,87,51,0.1)', color: 'var(--color-primary)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="co-btw-new" style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>{p.better}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function ForCompanies() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────────────────── */}
            <section style={{
                position: 'relative',
                padding: 'calc(var(--header-height) + var(--space-20)) 0 var(--space-24)',
                overflow: 'hidden',
                background: 'linear-gradient(175deg, #fff 0%, #F0F4FF 50%, #E8EDFF 100%)',
            }}>
                {/* Ambient blobs */}
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                    <div style={{
                        position: 'absolute', top: '-5%', right: '-8%',
                        width: '55%', height: '75%',
                        background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, rgba(59,130,246,0.06) 45%, transparent 70%)',
                        filter: 'blur(60px)',
                        animation: 'auroraShift 20s ease-in-out infinite alternate',
                    }} />
                    <div style={{
                        position: 'absolute', bottom: '-5%', left: '-5%',
                        width: '50%', height: '60%',
                        background: 'radial-gradient(ellipse, rgba(244,132,95,0.08) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
                        <div className="badge">For Companies</div>
                        <h1 style={{ marginBottom: 'var(--space-6)', fontSize: 'clamp(2.5rem, 6vw, 4.25rem)', lineHeight: 1.08 }}>
                            Hire smarter.<br />
                            <span className="text-gradient">Scale faster.</span>
                        </h1>

                        <p style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                            lineHeight: 1.65,
                            color: 'var(--text-secondary)',
                            maxWidth: 600,
                            margin: '0 auto var(--space-10)',
                        }}>
                            One platform for elite talent, AI-powered recruiting, and enterprise AI training data — with competitive pricing and full compliance.
                        </p>

                        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/book-demo" className="btn btn--primary btn--lg" id="companies-hero-demo"
                                style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
                                Book a Demo
                            </Link>
                            <Link href="/products" className="btn btn--secondary btn--lg" id="companies-hero-products">
                                Explore Products
                            </Link>
                        </div>

                        {/* Trust signals */}
                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            gap: 'var(--space-6)', marginTop: 'var(--space-8)', flexWrap: 'wrap',
                        }}>
                            {['2M+ vetted professionals', 'Enterprise compliance', 'AI-powered matching', 'SOC 2 certified'].map(t => (
                                <div key={t} style={{
                                    display: 'flex', alignItems: 'center', gap: 6,
                                    fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)',
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round">
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
                            src="/images/companies_hiring.png"
                            alt="Founders discussing hiring strategy"
                            style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            {/* ── LOGO MARQUEE ──────────────────────────────────────── */}
            <section style={{ padding: 'var(--space-12) 0', background: 'var(--color-white)', borderTop: '1px solid var(--color-gray-100)', borderBottom: '1px solid var(--color-gray-100)' }}>
                <LogoMarquee label="Trusted by the world's leading companies" speed={45} />
            </section>

            {/* ── THE PROBLEM → SOLUTION ─────────────────────────────── */}
            <BetterWaySection />

            {/* ── PRODUCTS ────────────────────────────────────────── */}
            <section className="section" style={{ background: 'linear-gradient(135deg, #F0F4FF 0%, #FFF8F5 100%)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Platform</div>
                        <h2>Three products.<br /><span className="text-gradient">One powerful ecosystem.</span></h2>
                        <p>Everything you need to hire top talent, leverage AI, and automate workflows — in a single platform.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)', maxWidth: 1000, margin: '0 auto' }}>
                        {products.map((product) => (
                            <Link key={product.href} href={product.href} style={{
                                display: 'flex', flexDirection: 'column',
                                padding: 0, textDecoration: 'none',
                                border: '1.5px solid var(--color-gray-100)',
                                borderRadius: 'var(--radius-xl)',
                                background: 'var(--color-white)',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                            }}
                                className="card--hover-lift"
                            >
                                {/* Visual header */}
                                {product.title === 'Talent Marketplace' && (
                                    <div style={{
                                        height: '150px', background: 'var(--color-gray-50)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderBottom: '1px solid rgba(0,0,0,0.05)',
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            {[1, 2, 3, 4, 5].map((num, i) => (
                                                <div key={num} style={{
                                                    width: '48px', height: '48px', borderRadius: '50%',
                                                    border: '3px solid white', marginLeft: i > 0 ? '-12px' : '0',
                                                    overflow: 'hidden', position: 'relative', zIndex: 5 - i,
                                                    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                                                }}>
                                                    <img src={`/images/talent_portrait_${num}.png`} alt="Talent" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                            ))}
                                            <div style={{
                                                width: '48px', height: '48px', borderRadius: '50%',
                                                border: '3px solid white', marginLeft: '-12px',
                                                background: 'var(--color-primary)', display: 'flex',
                                                alignItems: 'center', justifyContent: 'center',
                                                fontSize: '12px', fontWeight: 700, color: 'white',
                                                zIndex: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                                            }}>
                                                2M+
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {product.title === 'AIR | AI Recruiter' && (
                                    <div style={{
                                        height: '150px', background: 'var(--color-gray-100)',
                                        position: 'relative', borderBottom: '1px solid rgba(0,0,0,0.05)',
                                        overflow: 'hidden',
                                    }}>
                                        <img src="/images/air_interview_side.png" alt="AIR Interview UI" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <div style={{
                                            position: 'absolute', bottom: '10%', left: '8%', right: '8%',
                                            background: 'rgba(255, 255, 255, 0.88)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                                            padding: '8px 12px', borderRadius: '10px 10px 10px 2px',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                        }}>
                                            <div style={{ fontSize: '8px', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '1px' }}>AIR</div>
                                            <p style={{ fontSize: '10px', margin: 0, color: 'var(--text-primary)', lineHeight: 1.3, fontWeight: 500 }}>
                                                &quot;That&apos;s a great example. Could you elaborate...&quot;
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {product.title === 'Nexus' && (
                                    <div style={{
                                        height: '150px', background: 'linear-gradient(135deg, #f8fafc, #eef2ff)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '0 16px',
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0px', width: '100%', justifyContent: 'center' }}>
                                            {[
                                                { label: 'Trigger', bg: '#6366f1', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> },
                                                { label: 'Process', bg: '#059669', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg> },
                                                { label: 'Decide', bg: '#f59e0b', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" /></svg> },
                                                { label: 'Execute', bg: '#10b981', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
                                            ].map((step, i) => (
                                                <div key={step.label} style={{ display: 'flex', alignItems: 'center' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                                                        <div style={{
                                                            width: '36px', height: '36px', borderRadius: '9px',
                                                            background: `${step.bg}12`, border: `1.5px solid ${step.bg}25`,
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        }}>
                                                            {step.svg}
                                                        </div>
                                                        <span style={{ fontSize: '8px', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{step.label}</span>
                                                    </div>
                                                    {i < 3 && (
                                                        <div style={{
                                                            width: '20px', height: '1.5px', background: 'var(--color-gray-200)',
                                                            margin: '0 3px', marginBottom: '16px',
                                                        }} />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div style={{ padding: 'var(--space-6) var(--space-6) var(--space-5)' }}>
                                    <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-3)' }}>{product.title}</h3>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-5)' }}>{product.description}</p>
                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', margin: '0 0 var(--space-5)', padding: 0, listStyle: 'none' }}>
                                        {product.features.map((f) => (
                                            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={product.color} strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: product.color }}>
                                        Learn more →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <style>{`
                    .card--hover-lift:hover {
                        transform: translateY(-6px);
                        box-shadow: 0 20px 40px rgba(50,50,93,0.08), 0 4px 12px rgba(0,0,0,0.04);
                        border-color: rgba(99,102,241,0.2) !important;
                    }
                `}</style>
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

            {/* ── TESTIMONIALS ──────────────────────────────────────── */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="badge badge--accent">From Our Clients</div>
                        <h2>Companies who made<br /><span className="text-gradient">the switch.</span></h2>
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
                                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'white', fontSize: 14, fontWeight: 700, flexShrink: 0,
                                    }}>{t.avatar}</div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{t.name}</div>
                                        <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{t.role} · {t.company}</div>
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
                        <h2>Everything you need<br /><span className="text-gradient">to build your team.</span></h2>
                        <p>From hiring to AI training data — we&apos;ve got you covered.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-6)' }}>
                        {[
                            {
                                href: '/products/talent-marketplace',
                                title: 'Browse Talent',
                                desc: 'Search our network of 2M+ vetted professionals across every discipline.',
                                cta: 'Explore Marketplace',
                                color: '#6366f1',
                                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
                            },
                            {
                                href: '/products/air',
                                title: 'AI Recruiting',
                                desc: 'Let AIR screen, interview, and assess candidates at superhuman speed.',
                                cta: 'Learn About AIR',
                                color: '#f59e0b',
                                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M12 2a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" /></svg>,
                            },
                            {
                                href: '/solutions/ai-training-data',
                                title: 'AI Training Data',
                                desc: 'Expert contributors for RLHF, annotation, evaluations, and more.',
                                cta: 'See Solutions',
                                color: '#059669',
                                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /></svg>,
                            },
                            {
                                href: '/pricing',
                                title: 'Pricing',
                                desc: 'Transparent pricing with no hidden fees. Pay for results, not overhead.',
                                cta: 'View Pricing',
                                color: '#8b5cf6',
                                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>,
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

            {/* ── FINAL CTA ──────────────────────────────────────── */}
            <section style={{
                background: 'linear-gradient(135deg, var(--color-gray-950) 0%, #0F1D32 50%, #1a0d2e 100%)',
                padding: 'var(--space-24) 0',
                position: 'relative', overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                    width: '80%', height: '80%',
                    background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, rgba(244,132,95,0.06) 40%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-block', fontSize: '2.5rem', marginBottom: 'var(--space-4)' }}>✦</div>
                    <h2 style={{ color: 'white', marginBottom: 'var(--space-4)', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                        Ready to hire faster,<br />
                        <span className="text-gradient">with better results?</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'var(--text-lg)', maxWidth: 540, margin: '0 auto var(--space-10)' }}>
                        Join hundreds of companies building world-class teams through Braintrust.
                        See why we&apos;re different — book a demo today.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/book-demo" className="btn btn--primary btn--lg" id="companies-final-demo"
                            style={{ fontSize: '1.05rem', padding: '16px 40px' }}>
                            Book a Demo
                        </Link>
                        <Link href="/pricing" className="btn btn--white btn--lg" id="companies-final-pricing">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
