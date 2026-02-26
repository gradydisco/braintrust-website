import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Types of Talent We Work With — Braintrust',
    description: 'Braintrust connects top talent across engineering, design, product, data, marketing, operations, and more with premium companies. See all talent categories and open roles.',
    openGraph: {
        title: 'Types of Talent We Work With — Braintrust',
        description: 'If you\'re great at what you do, there\'s a place for you here. See all professional specialties we support.',
    },
};

const talentCategories = [
    {
        category: 'Engineering',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
        color: '#5469D4',
        bg: 'rgba(84, 105, 212, 0.08)',
        roles: ['Software Engineer', 'Frontend Engineer', 'Backend Engineer', 'Full Stack Engineer', 'iOS/Android Developer', 'DevOps / Platform Engineer', 'Security Engineer', 'QA Engineer'],
        demand: 'Very High',
        avgRate: '$110–200/hr',
    },
    {
        category: 'AI & Machine Learning',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>,
        color: '#00B894',
        bg: 'rgba(0, 184, 148, 0.08)',
        roles: ['ML Engineer', 'AI Research Scientist', 'Data Scientist', 'NLP Engineer', 'Computer Vision Engineer', 'MLOps Engineer', 'AI Product Specialist', 'AI Safety Researcher'],
        demand: 'Extremely High',
        avgRate: '$140–250/hr',
    },
    {
        category: 'Product Management',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
        color: '#F4845F',
        bg: 'rgba(244, 132, 95, 0.08)',
        roles: ['Product Manager', 'Senior PM', 'Consumer PM', 'Enterprise PM', 'Technical PM', 'Growth PM', 'Platform PM', 'Director of Product'],
        demand: 'High',
        avgRate: '$90–170/hr',
    },
    {
        category: 'Design',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>,
        color: '#E8A0BF',
        bg: 'rgba(232, 160, 191, 0.1)',
        roles: ['UX Designer', 'UI Designer', 'Product Designer', 'UX Researcher', 'Brand Designer', 'Motion Designer', 'Design Systems Lead', 'Creative Director'],
        demand: 'High',
        avgRate: '$80–150/hr',
    },
    {
        category: 'Data & Analytics',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
        color: '#FFBC44',
        bg: 'rgba(255, 188, 68, 0.1)',
        roles: ['Data Analyst', 'Data Engineer', 'Analytics Engineer', 'BI Developer', 'Data Architect', 'Growth Analyst', 'Revenue Operations Analyst', 'Business Intelligence Lead'],
        demand: 'High',
        avgRate: '$90–175/hr',
    },
    {
        category: 'IT & Infrastructure',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
        color: '#697386',
        bg: 'rgba(105, 115, 134, 0.08)',
        roles: ['Cloud Architect', 'Systems Administrator', 'Network Engineer', 'IT Manager', 'Salesforce Admin', 'Cybersecurity Analyst', 'IT Support Lead', 'ERP Specialist'],
        demand: 'Steady',
        avgRate: '$80–160/hr',
    },
    {
        category: 'Marketing',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
        color: '#F28B82',
        bg: 'rgba(242, 139, 130, 0.1)',
        roles: ['Performance Marketer', 'Content Strategist', 'SEO Specialist', 'Growth Marketer', 'Brand Manager', 'Email Marketing Lead', 'Demand Gen Manager', 'CMO / Fractional CMO'],
        demand: 'Steady',
        avgRate: '$70–140/hr',
    },
    {
        category: 'Operations & Strategy',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
        color: '#9B8AFF',
        bg: 'rgba(155, 138, 255, 0.08)',
        roles: ['Chief of Staff', 'Operations Manager', 'Strategy Consultant', 'BizOps Analyst', 'Project Manager', 'Scrum Master', 'Program Manager', 'COO / Fractional COO'],
        demand: 'Moderate',
        avgRate: '$75–150/hr',
    },
    {
        category: 'Finance',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
        color: '#0ABF53',
        bg: 'rgba(10, 191, 83, 0.08)',
        roles: ['Financial Analyst', 'FP&A Specialist', 'Controller', 'CFO / Fractional CFO', 'Accountant', 'VP Finance', 'Finance Ops Manager', 'Treasury Analyst'],
        demand: 'Moderate',
        avgRate: '$80–180/hr',
    },
    {
        category: 'Sales & GTM',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>,
        color: '#E8604C',
        bg: 'rgba(232, 96, 76, 0.08)',
        roles: ['Sales Manager', 'Account Executive', 'Sales Development Rep', 'Revenue Operations', 'VP Sales', 'GTM Strategist', 'CRO / Fractional CRO', 'Business Development'],
        demand: 'Steady',
        avgRate: '$70–160/hr',
    },
    {
        category: 'HR & People',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        color: '#FFBC44',
        bg: 'rgba(255, 188, 68, 0.08)',
        roles: ['HR Business Partner', 'Talent Acquisition', 'People Operations', 'Compensation & Benefits', 'L&D Specialist', 'CHRO / Fractional CHRO', 'Recruiter', 'Employee Experience Lead'],
        demand: 'Moderate',
        avgRate: '$65–140/hr',
    },
    {
        category: 'Industry Specialists',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>,
        color: '#5469D4',
        bg: 'rgba(84, 105, 212, 0.06)',
        roles: ['Healthcare Tech SME', 'Fintech Specialist', 'E-commerce Expert', 'Edtech Consultant', 'Biotech Advisor', 'Legal Tech Expert', 'Insurance SME', 'Retail Tech Analyst'],
        demand: 'Growing',
        avgRate: '$80–200/hr',
    },
];

const demandBadge = (demand: string) => {
    const colors: Record<string, { bg: string; color: string }> = {
        'Very High': { bg: 'rgba(0,184,148,0.12)', color: '#00B894' },
        'Extremely High': { bg: 'rgba(0,184,148,0.18)', color: '#00875A' },
        'High': { bg: 'rgba(84,105,212,0.1)', color: '#5469D4' },
        'Steady': { bg: 'rgba(50,50,93,0.07)', color: '#4F566B' },
        'Moderate': { bg: 'rgba(244,132,95,0.1)', color: '#E06C48' },
        'Growing': { bg: 'rgba(255,188,68,0.12)', color: '#C48000' },
    };
    return colors[demand] || colors['Steady'];
};

export default function TalentTypes() {
    return (
        <>
            {/* ── HERO ──────────────────────────────────────── */}
            <section style={{
                position: 'relative',
                padding: 'calc(var(--header-height) + var(--space-20)) 0 var(--space-20)',
                background: 'linear-gradient(175deg, #fff 0%, #FFF8F5 60%, #F5F3FF 100%)',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    background: 'radial-gradient(ellipse 60% 50% at 90% 30%, rgba(155,138,255,0.12), transparent)',
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--space-10)', alignItems: 'center' }}>
                        <div>
                            <h1 style={{ marginBottom: 'var(--space-5)', textAlign: 'left', fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
                                Whatever you do best,<br />
                                <span className="text-gradient">there&apos;s a place for you here.</span>
                            </h1>
                            <p style={{ fontSize: 'var(--text-xl)', maxWidth: 540, margin: '0 0 var(--space-8)' }}>
                                Braintrust supports professionals across virtually every specialty — from software engineers
                                and ML researchers to designers, finance leads, and industry specialists.
                            </p>
                            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                                <Link href="https://app.usebraintrust.com" className="btn btn--primary btn--lg" id="talent-types-hero-cta">
                                    Join the Network
                                </Link>
                                <Link href="/jobs" className="btn btn--secondary btn--lg" id="talent-types-browse">
                                    Browse Open Roles
                                </Link>
                            </div>
                        </div>

                        {/* Right — Offset portrait with blob */}
                        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <div style={{
                                position: 'absolute', width: 420, height: 420,
                                background: 'radial-gradient(circle, rgba(155,138,255,0.15) 0%, transparent 70%)',
                                borderRadius: '50%', top: '50%', left: '55%', transform: 'translate(-50%, -50%)',
                            }} />
                            <div style={{
                                width: 320, height: 400, borderRadius: '32px',
                                overflow: 'hidden', position: 'relative',
                                boxShadow: '0 24px 64px rgba(0,0,0,0.12)',
                            }}>
                                <img
                                    src="/images/talent_portrait_3.png"
                                    alt="Product designer on Braintrust"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUMMARY STATS ─────────────────────────────── */}
            <section style={{ background: 'var(--color-gray-950)', padding: 'var(--space-12) 0' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                        gap: 'var(--space-6)', textAlign: 'center',
                    }}>
                        {[
                            { val: '12+', label: 'Specialty Categories' },
                            { val: '100+', label: 'Role Types Supported' },
                            { val: '12K+', label: 'Active Openings' },
                            { val: '$0', label: 'Fees for Talent' },
                        ].map(s => (
                            <div key={s.label}>
                                <div className="text-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1 }}>{s.val}</div>
                                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'var(--text-sm)', marginTop: 6, fontWeight: 500 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CATEGORIES GRID ───────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge badge--accent">All Specialties</div>
                        <h2>Find your place<br /><span className="text-gradient">in the network.</span></h2>
                        <p>Explore the full range of talent categories we support. Each with real roles, fair pay, and opportunities matched to your skill level.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', maxWidth: 1100, margin: '0 auto' }}>
                        {talentCategories.map((cat) => {
                            const badge = demandBadge(cat.demand);
                            return (
                                <div key={cat.category} style={{
                                    background: 'var(--color-white)',
                                    border: '1px solid var(--color-gray-100)',
                                    borderRadius: '14px',
                                    overflow: 'hidden',
                                    display: 'flex', flexDirection: 'column',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                }}>
                                    {/* Color accent bar */}
                                    <div style={{ height: '3px', background: `linear-gradient(90deg, ${cat.color}, ${cat.color}50)` }} />

                                    <div style={{ padding: '18px 18px 14px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                                        {/* Header row */}
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div style={{
                                                    width: 36, height: 36, borderRadius: '10px',
                                                    background: cat.bg, display: 'flex', alignItems: 'center',
                                                    justifyContent: 'center', color: cat.color, flexShrink: 0,
                                                }}>{cat.icon}</div>
                                                <div>
                                                    <h4 style={{ fontSize: '14px', fontWeight: 700, margin: 0, lineHeight: 1.2 }}>{cat.category}</h4>
                                                    <div style={{ fontSize: '12px', fontWeight: 700, color: cat.color, marginTop: '2px' }}>{cat.avgRate}</div>
                                                </div>
                                            </div>
                                            <span style={{
                                                fontSize: 10, fontWeight: 700, padding: '2px 8px',
                                                borderRadius: 'var(--radius-full)',
                                                background: badge.bg, color: badge.color,
                                                whiteSpace: 'nowrap', flexShrink: 0,
                                            }}>⬆ {cat.demand}</span>
                                        </div>

                                        {/* Roles */}
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', flex: 1 }}>
                                            {cat.roles.map(r => (
                                                <span key={r} style={{
                                                    fontSize: 11, padding: '3px 9px',
                                                    borderRadius: 'var(--radius-full)',
                                                    background: 'var(--color-gray-50)',
                                                    border: '1px solid var(--color-gray-100)',
                                                    color: 'var(--text-secondary)', fontWeight: 500,
                                                    whiteSpace: 'nowrap',
                                                }}>{r}</span>
                                            ))}
                                        </div>

                                        <Link href="/jobs" style={{
                                            fontSize: '12px', fontWeight: 700,
                                            color: cat.color, textDecoration: 'none',
                                            display: 'flex', alignItems: 'center', gap: 4,
                                            marginTop: 'auto',
                                        }}>
                                            View open roles →
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── BOTTOM CTA ─────────────────────────────────── */}
            <section style={{
                background: 'linear-gradient(135deg, var(--color-primary-50) 0%, #F5F3FF 100%)',
                padding: 'var(--space-20) 0', textAlign: 'center',
                borderTop: '1px solid var(--color-gray-100)',
            }}>
                <div className="container">
                    <div className="badge badge--accent" style={{ marginBottom: 'var(--space-4)' }}>Ready?</div>
                    <h2 style={{ marginBottom: 'var(--space-4)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
                        Your specialty is in demand.<br />
                        <span className="text-gradient">Let Braintrust prove it.</span>
                    </h2>
                    <p style={{ fontSize: 'var(--text-lg)', maxWidth: 520, margin: '0 auto var(--space-8)', color: 'var(--text-secondary)' }}>
                        Create your profile. Get certified. Start connecting with companies that pay what you&apos;re actually worth.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="https://app.usebraintrust.com" className="btn btn--primary btn--lg" id="talent-types-bottom-cta">
                            Start Your Profile
                        </Link>
                        <Link href="/talent-certification" className="btn btn--secondary btn--lg">
                            Learn About Certification
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
