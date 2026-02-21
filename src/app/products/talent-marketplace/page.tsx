import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import RevealSection from '@/components/RevealSection';
import MarketplaceStatsStrip from '@/components/MarketplaceStatsStrip';
import LogoMarquee from '@/components/LogoMarquee';

export const metadata: Metadata = {
    title: 'Talent Marketplace — Access 2M+ Vetted Professionals',
    description: 'Access 2M+ vetted engineers, designers, and operators through Braintrust Talent Marketplace. AI-powered matching, enterprise compliance, and a global talent pool.',
};

const features = [
    {
        title: 'AI-Powered Matching',
        description: 'Our algorithms analyze skills, experience, and cultural fit to surface the best candidates — in hours, not weeks.',
        stat: '8hrs',
        statLabel: 'avg. time to first match',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="m8 11 2 2 4-4" /></svg>,
    },
    {
        title: 'Global Talent Pool',
        description: 'Access professionals across 100+ countries. Remote, hybrid, and on-site options to match your hiring needs.',
        stat: '100+',
        statLabel: 'countries represented',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
    },
    {
        title: 'Enterprise Compliance',
        description: 'SOC 2 Type II certified. Automated onboarding, background checks, and compliance workflows built for enterprise.',
        stat: 'SOC 2',
        statLabel: 'Type II certified',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
    },
    {
        title: 'Vetted Quality',
        description: 'Every professional passes skills assessments, portfolio reviews, and reference checks before joining the network.',
        stat: '95%',
        statLabel: 'client satisfaction rate',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>,
    },
    {
        title: 'Speed to Hire',
        description: 'Most companies receive matched, vetted candidates within 48–72 hours. Our AI works in real-time to surface top fits.',
        stat: '4×',
        statLabel: 'faster than traditional',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    },
    {
        title: '$0 Agency Fees',
        description: 'No middlemen. No markups. You pay professionals directly — keeping more budget where it matters: great work.',
        stat: '$0',
        statLabel: 'agency or recruiter fees',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>,
    },
];

const capabilities = [
    { title: 'Software Engineering', examples: 'Full-stack, backend, frontend, mobile, embedded systems', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> },
    { title: 'Machine Learning & AI', examples: 'ML engineers, research scientists, NLP, computer vision', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.57-3.25 3.92L12 22" /><path d="M12 2a4 4 0 00-4 4c0 1.95 1.4 3.57 3.25 3.92" /><circle cx="12" cy="14" r="2" /></svg> },
    { title: 'Product Design & UX', examples: 'Product design, UX research, visual design, design systems', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="13.5" cy="6.5" r="2.5" /><path d="M17 2H7a5 5 0 000 10h10a5 5 0 000-10z" /><path d="M7 22a5 5 0 010-10" /><circle cx="7" cy="17" r="5" /></svg> },
    { title: 'Product Management', examples: 'Technical PMs, growth, strategy, platform product', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg> },
    { title: 'Data Science & Analytics', examples: 'Data engineers, analysts, statisticians, BI specialists', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6" /></svg> },
    { title: 'DevOps & Infrastructure', examples: 'Cloud architects, SREs, platform engineers, Kubernetes', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" /><circle cx="6" cy="18" r="1" /></svg> },
    { title: 'Finance & Accounting', examples: 'Financial analysts, controllers, FP&A, tax specialists', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg> },
    { title: 'Operations & Strategy', examples: 'Business operations, project management, consulting', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg> },
];

const clientQuotes = [
    {
        quote: 'We filled a Staff Engineer role in 4 days. Our previous agency took 8 weeks and still couldn\'t find anyone. The quality of candidates Braintrust surfaced was a full tier above what we were used to.',
        name: 'David L.',
        title: 'VP of Engineering',
        company: 'Series D SaaS company',
        metric: '4-day fill vs. 8-week prior',
    },
    {
        quote: 'Switching from a traditional staffing firm saved us roughly $340,000 in fees last year. We\'re getting better talent, faster, with zero agency markup. The ROI case basically makes itself.',
        name: 'Jennifer K.',
        title: 'Chief People Officer',
        company: 'Fortune 500 financial services',
        metric: '$340K in fees saved',
    },
    {
        quote: 'We needed to scale from 80 to 200 engineers in 18 months. Braintrust delivered — consistent quality, global reach, and the compliance support our legal team required from day one.',
        name: 'Marcus T.',
        title: 'CTO',
        company: '7,000-person enterprise',
        metric: '120 engineers in 18 months',
    },
    {
        quote: 'The AI matching is legitimately different. By the time we did our first interview, every candidate already passed our technical bar. Our offer acceptance rate went from 45% to 82%.',
        name: 'Rachel W.',
        title: 'Head of Talent Acquisition',
        company: 'E-commerce platform (2,500 employees)',
        metric: 'Offer acceptance 45% → 82%',
    },
    {
        quote: 'We\'ve used every major staffing platform. Braintrust is the only one where the talent isn\'t just available — they\'re genuinely excellent. Every hire has exceeded expectations.',
        name: 'Priya S.',
        title: 'Director of Engineering',
        company: 'Fintech scale-up',
        metric: '100% of hires exceeded expectations',
    },
    {
        quote: 'Our time-to-hire dropped from 6 weeks to under 10 days. At our growth rate, that matters enormously. Every week with a vacant senior role is real revenue impact.',
        name: 'Chris M.',
        title: 'Head of Operations',
        company: 'Healthcare technology company',
        metric: '6 weeks → under 10 days',
    },
];

const talentQuotes = [
    {
        quote: 'I\'ve worked with dozens of clients over 4 years on Braintrust. The platform actually respects professional rates — I\'ve never felt pressured to undercut my value. It\'s genuinely different.',
        name: 'Aisha N.',
        title: 'Sr. Software Engineer',
        location: 'Lagos, NG',
        rate: '$145/hr',
    },
    {
        quote: 'I left a traditional agency after realizing they were marking me up 60% to clients while capping what I earned. On Braintrust, I keep 100% of what I negotiate. It changed my career.',
        name: 'Tom B.',
        title: 'Data Scientist',
        location: 'Toronto, CA',
        rate: '$165/hr',
    },
    {
        quote: 'The clients I work with here are top-tier. The quality of problems I get to solve is the best of my career. The matching actually works — my projects fit my strengths.',
        name: 'Sophia R.',
        title: 'Product Designer',
        location: 'Berlin, DE',
        rate: '$120/hr',
    },
    {
        quote: 'Got matched with a Fortune 500 client my first week. Within 60 days I had a strong review, a renewal, and two referrals to other projects. The platform does what it promises.',
        name: 'James O.',
        title: 'Full Stack Engineer',
        location: 'Austin, TX',
        rate: '$155/hr',
    },
];

const faqItems = [
    { question: 'How does Braintrust Talent Marketplace differ from traditional staffing?', answer: 'Unlike traditional staffing agencies, Braintrust connects you directly with vetted professionals through AI-powered matching. There are no middlemen — just a direct relationship between your team and the talent you hire. You pay professionals directly, saving 20–40% compared to agency markups.' },
    { question: 'What types of roles can I hire for?', answer: 'Braintrust covers engineering (frontend, backend, full-stack, data, ML/AI), design (product, UX, visual), product management, operations, marketing, finance, and more. We specialize in high-skill, high-value roles across the enterprise.' },
    { question: 'How quickly can I expect to receive matched candidates?', answer: 'Most companies receive their first batch of matched, vetted candidates within 48–72 hours of posting a role. Our AI matching system works in real-time to surface the best fits from 2M+ professionals.' },
    { question: 'Is Braintrust enterprise-ready?', answer: 'Yes. We are SOC 2 Type II certified, offer enterprise SSO, automated compliance workflows, background checks, and dedicated account management for enterprise clients. Our platform handles onboarding, invoicing, and compliance for every engagement.' },
    { question: 'How does the $0 agency fee model work?', answer: 'Braintrust operates as a direct marketplace. Companies and professionals agree on a rate directly. We charge a modest platform fee to sustain the network — dramatically lower than traditional agency markups of 30–60%.' },
    { question: 'What about AI training data needs?', answer: 'We offer dedicated AI training and human data solutions. Visit our AI Training and Human Data pages for detailed information on RLHF, data labeling, and domain-specific data programs.' },
];

export default function TalentMarketplace() {
    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Braintrust Talent Marketplace',
        description: 'AI-powered talent marketplace connecting companies with 2M+ vetted professionals.',
        brand: { '@type': 'Brand', name: 'Braintrust' },
        url: 'https://usebraintrust.com/products/talent-marketplace',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.6',
            reviewCount: '312',
        },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

            {/* ====== HERO ====== */}
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Products', href: '/products' },
                        { label: 'Talent Marketplace' },
                    ]} />
                    <div className="hero__content">
                        <div className="badge">Talent Marketplace</div>
                        <h1>Elite talent. Hired in <span className="text-gradient">days, not months.</span></h1>
                        <p>2M+ vetted professionals, zero agency fees, and AI matching that surfaces the right fit before your first interview. Built for teams that can't afford a bad hire.</p>
                        <div className="hero__actions">
                            <Link href="/book-demo" className="btn btn--primary btn--lg">Book a Demo</Link>
                            <Link href="/products" className="btn btn--secondary btn--lg">View All Products →</Link>
                        </div>
                    </div>

                    {/* G2 trust badges */}
                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexWrap: 'wrap', gap: 'var(--space-6)', marginTop: 'var(--space-12)',
                    }}>
                        {[
                            { label: 'Leader', category: 'Freelance Platforms', season: 'Winter 2025' },
                            { label: 'Highest Rated', category: 'Talent Management', season: 'G2 · 4.6★' },
                            { label: 'Easiest to Use', category: 'Staffing Software', season: 'G2 · 2025' },
                        ].map(b => (
                            <div key={b.label} style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center',
                                padding: '10px 18px', borderRadius: 'var(--radius-lg)',
                                background: 'white',
                                border: '1px solid rgba(50,50,93,0.1)',
                                boxShadow: '0 2px 8px rgba(50,50,93,0.06)',
                                gap: '2px', minWidth: '120px',
                            }}>
                                <div style={{ fontSize: '11px', fontWeight: 700, color: '#ff492c', textTransform: 'uppercase', letterSpacing: '0.05em' }}>G2</div>
                                <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)' }}>{b.label}</div>
                                <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', textAlign: 'center', lineHeight: 1.3 }}>{b.category}</div>
                                <div style={{ fontSize: '10px', color: '#ff492c', fontWeight: 600 }}>{b.season}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== CLIENT LOGO MARQUEE ====== */}
            <section style={{ background: 'white', padding: 'var(--space-12) 0', '--lm-bg': '#fff' } as React.CSSProperties}>
                <div className="container">
                    <LogoMarquee label="Trusted by the world's best companies" />
                </div>
            </section>

            {/* ====== STATS STRIP — Dark, animated real community data ====== */}
            <section className="section section--dark">
                <div className="container">
                    <MarketplaceStatsStrip />
                </div>
            </section>

            {/* ====== WHAT MAKES BRAINTRUST DIFFERENT ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Why Braintrust</div>
                            <h2>Built differently. Built for enterprise.</h2>
                            <p>Speed, quality, and transparency — without the agency markup that inflates every traditional hiring engagement.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div className="grid grid--3">
                            {features.map((feature) => (
                                <div key={feature.title} style={{
                                    background: 'var(--color-white)',
                                    border: '1px solid rgba(50, 50, 93, 0.08)',
                                    borderRadius: 'var(--radius-xl)',
                                    padding: '0',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                    className="card--enterprise"
                                >
                                    <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))', opacity: 0.6 }} />
                                    <div style={{ padding: 'var(--space-8) var(--space-8) var(--space-6)', flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                                            <div style={{
                                                width: '44px', height: '44px', borderRadius: '12px',
                                                background: 'linear-gradient(135deg, rgba(245, 87, 51, 0.08), rgba(245, 87, 51, 0.03))',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: 'var(--color-primary)', flexShrink: 0,
                                            }}>
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px', lineHeight: 1.3 }}>{feature.title}</h4>
                                                <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        borderTop: '1px solid rgba(50, 50, 93, 0.06)',
                                        padding: '12px var(--space-8)',
                                        display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
                                        background: 'rgba(245, 87, 51, 0.015)', marginTop: 'auto',
                                    }}>
                                        <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-primary)' }}>{feature.stat}</span>
                                        <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 500 }}>{feature.statLabel}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== CLIENT QUOTES ====== */}
            <section className="section section--gray">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">What Enterprise Teams Say</div>
                            <h2>Trusted by the world's best companies</h2>
                            <p>Hear from engineering, people, and operations leaders who've transformed their hiring with Braintrust.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                            gap: 'var(--space-6)',
                        }}>
                            {clientQuotes.map((q, i) => (
                                <div key={i} className="card" style={{
                                    padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)',
                                    background: 'var(--color-white)', border: '1px solid var(--color-gray-100)',
                                    display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
                                }}>
                                    <span style={{
                                        display: 'inline-block', fontSize: '11px', fontWeight: 700,
                                        textTransform: 'uppercase' as const, letterSpacing: '0.06em',
                                        color: 'var(--color-primary)', padding: '4px 10px',
                                        borderRadius: '100px', background: 'var(--color-primary-50)',
                                        alignSelf: 'flex-start',
                                    }}>{q.metric}</span>
                                    <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0, flex: 1 }}>
                                        &ldquo;{q.quote}&rdquo;
                                    </p>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                                        paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-gray-100)',
                                    }}>
                                        <div style={{
                                            width: '36px', height: '36px', borderRadius: '50%',
                                            background: `hsl(${200 + (i * 35) % 140}, 45%, 50%)`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: 'white', fontWeight: 700, fontSize: '13px', flexShrink: 0,
                                        }}>
                                            {q.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>{q.name}</div>
                                            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{q.title} · {q.company}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== TALENT QUOTES ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge badge--accent">What Top Talent Says</div>
                            <h2>The platform professionals actually choose</h2>
                            <p>When talent has a choice, they come to Braintrust — because we pay them what they're worth.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: 'var(--space-6)',
                        }}>
                            {talentQuotes.map((q, i) => (
                                <div key={i} style={{
                                    padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)',
                                    background: 'var(--color-white)',
                                    border: '1px solid rgba(50,50,93,0.08)',
                                    boxShadow: '0 2px 12px rgba(50,50,93,0.05)',
                                    display: 'flex', flexDirection: 'column', gap: 'var(--space-5)',
                                }}>
                                    {/* Stars */}
                                    <div style={{ display: 'flex', gap: '2px' }}>
                                        {[...Array(5)].map((_, s) => (
                                            <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                        ))}
                                    </div>
                                    <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0, flex: 1 }}>
                                        &ldquo;{q.quote}&rdquo;
                                    </p>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                                        paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-gray-100)',
                                    }}>
                                        <div style={{
                                            width: '36px', height: '36px', borderRadius: '50%',
                                            background: `hsl(${260 + (i * 25) % 100}, 55%, 58%)`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: 'white', fontWeight: 700, fontSize: '13px', flexShrink: 0,
                                        }}>
                                            {q.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>{q.name}</div>
                                            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{q.title} · {q.location}</div>
                                        </div>
                                        <div style={{
                                            fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)',
                                            background: 'var(--color-primary-50)', padding: '3px 8px',
                                            borderRadius: 'var(--radius-full)',
                                        }}>{q.rate}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== CAPABILITIES — Discipline Grid ====== */}
            <section className="section section--gray">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Capabilities</div>
                            <h2>World-class talent across every discipline</h2>
                            <p>Hire across the full spectrum of professional expertise — all rigorously vetted.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '12px', maxWidth: '900px', margin: '0 auto',
                        }}>
                            {capabilities.map((cap) => (
                                <div key={cap.title} className="card--enterprise" style={{
                                    display: 'flex', alignItems: 'flex-start',
                                    gap: 'var(--space-4)', padding: '18px 22px',
                                    background: 'var(--color-white)',
                                    border: '1px solid rgba(50, 50, 93, 0.07)',
                                    borderRadius: 'var(--radius-lg)',
                                    borderLeft: '3px solid var(--color-primary)',
                                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}>
                                    <div style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '1px', opacity: 0.7 }}>
                                        {cap.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-primary)', marginBottom: '3px', lineHeight: 1.3 }}>{cap.title}</div>
                                        <div style={{ fontSize: '12.5px', color: 'var(--text-tertiary)', lineHeight: 1.4 }}>{cap.examples}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== AI TRAINING & HUMAN DATA ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge badge--accent">Data Solutions</div>
                            <h2>AI Training &amp; Human Data</h2>
                            <p>Leverage our global talent network for AI model training, RLHF, data labeling, and domain-specific data at scale.</p>
                        </div>
                    </RevealSection>
                    <div className="grid grid--2" style={{ maxWidth: '720px', margin: '0 auto' }}>
                        <Link href="/products/talent-marketplace/ai-training" className="card card--feature" style={{ textAlign: 'center' }}>
                            <h4 style={{ marginBottom: 'var(--space-2)' }}>AI Training</h4>
                            <p style={{ fontSize: 'var(--text-sm)' }}>RLHF, model evaluation, and domain-expert feedback for AI development.</p>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-primary)' }}>Learn more →</span>
                        </Link>
                        <Link href="/products/talent-marketplace/human-data" className="card card--feature" style={{ textAlign: 'center' }}>
                            <h4 style={{ marginBottom: 'var(--space-2)' }}>Human Data</h4>
                            <p style={{ fontSize: 'var(--text-sm)' }}>Data labeling, annotation, and collection from verified domain experts.</p>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-primary)' }}>Learn more →</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ====== FAQ ====== */}
            <section className="section section--gray">
                <div className="container container--narrow">
                    <div className="section-header">
                        <h2>Frequently asked questions</h2>
                    </div>
                    <FAQ items={faqItems} schemaId="talent-marketplace" />
                </div>
            </section>

            <CTASection
                title="Start hiring smarter today"
                description="Book a demo and see how our AI matches you with elite talent in hours — at zero agency fees."
                primaryLabel="Book a Demo"
                primaryHref="/book-demo"
                secondaryLabel="View All Products"
                secondaryHref="/products"
            />
        </>
    );
}
