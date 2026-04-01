import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import RevealSection from '@/components/RevealSection';

import LogoMarquee from '@/components/LogoMarquee';
import G2BadgeStrip from '@/components/G2BadgeStrip';
import AlternatingFeatures from '@/components/AlternatingFeatures';

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
    { title: 'Software Engineering', examples: 'Full-stack, backend, frontend, mobile, embedded systems', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> },
    { title: 'Machine Learning & AI', examples: 'ML engineers, research scientists, NLP, computer vision', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.57-3.25 3.92L12 22" /><path d="M12 2a4 4 0 00-4 4c0 1.95 1.4 3.57 3.25 3.92" /><circle cx="12" cy="14" r="2" /></svg> },
    { title: 'Product Design & UX', examples: 'Product design, UX research, visual design, design systems', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="13.5" cy="6.5" r="2.5" /><path d="M17 2H7a5 5 0 000 10h10a5 5 0 000-10z" /><path d="M7 22a5 5 0 010-10" /><circle cx="7" cy="17" r="5" /></svg> },
    { title: 'Product Management', examples: 'Technical PMs, growth, strategy, platform product', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg> },
    { title: 'Data Science & Analytics', examples: 'Data engineers, analysts, statisticians, BI specialists', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6" /></svg> },
    { title: 'DevOps & Infrastructure', examples: 'Cloud architects, SREs, platform engineers, Kubernetes', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" /><circle cx="6" cy="18" r="1" /></svg> },
    { title: 'Sales & Marketing', examples: 'Performance marketing, growth marketing, SDRs, AEs, creative directors', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg> },
    { title: 'Operations & Strategy', examples: 'Business operations, project management, consulting', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg> },
    { title: 'Finance & Accounting', examples: 'Fractional CFOs, financial analysts, controllers, bookkeepers', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M7 15h0M2 9.5h20" /></svg> },
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
            <section
                className="hero hero--centered"
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    paddingTop: '200px',
                    paddingBottom: '160px',
                }}
            >
                {/* Background Image with Light Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                }}>
                    <img
                        src="/images/marketplace_talent.png"
                        alt="Tech professional working"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center 20%',
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.95) 100%)',
                    }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="hero__content" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h1 style={{
                            fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
                            fontWeight: 600,
                            color: '#1a1a1a',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.02,
                            marginBottom: 'var(--space-6)',
                        }}>
                            Elite talent. Hired in <span className="text-gradient">days,<br />not months.</span>
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '900px', margin: '0 auto 32px' }}>
                            2M+ vetted professionals, zero agency fees, and AI matching that surfaces the right fit before your first interview. Built for teams that can't afford a bad hire.
                        </p>
                        <div className="hero__actions" style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                            <Link href="/book-demo" className="btn btn--primary btn--lg">Book a Demo</Link>
                        </div>
                    </div>

                    {/* G2 badges — FALL 2025 */}
                    <div style={{ marginTop: 'var(--space-12)' }}>
                        <G2BadgeStrip showSoc2 />
                    </div>
                </div>
            </section>


            {/* ====== HOW IT WORKS — 3 STEPS ====== */}
            <section className="section" style={{ background: 'var(--color-white)' }}>
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">How You Hire & How It Works</div>
                            <h2>Choose your hiring model.<br /><span className="text-gradient">We handle the rest.</span></h2>
                            <p>Whether you need part-time help or a dedicated squad, our process gets you from job post to productive team member in days.</p>
                        </div>
                    </RevealSection>
                    <RevealSection>
                        <div style={{
                            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: 'var(--space-6)', marginTop: 'var(--space-10)',
                        }}>
                            {[
                                {
                                    title: 'Staff Augmentation',
                                    description: 'Seamlessly fill skill gaps on your existing teams with highly vetted hourly contractors. Scale up or down effortlessly.',
                                    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></svg>,
                                    color: 'var(--color-primary)',
                                    tag: 'Hourly & Part-Time'
                                },
                                {
                                    title: 'Embedded Teams',
                                    description: 'Deploy entire squads of engineers, designers, and PMs to tackle mission-critical projects from scratch.',
                                    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
                                    color: '#8b5cf6',
                                    tag: 'Project-Based'
                                },
                                {
                                    title: 'Contract-To-Hire',
                                    description: 'Try before you buy. Bring on contractors, see how they execute, and transition them to full-time at any point.',
                                    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
                                    color: '#059669',
                                    tag: 'Direct Conversions'
                                },
                            ].map((model) => (
                                <div key={model.title} style={{
                                    padding: '32px',
                                    background: 'var(--color-white)',
                                    borderRadius: 'var(--radius-2xl)',
                                    border: '1px solid var(--color-gray-100)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                    transition: 'transform 0.2s ease',
                                    cursor: 'default',
                                }} className="card--hover-lift">
                                    <div style={{
                                        width: '56px', height: '56px', borderRadius: '16px',
                                        background: `${model.color}15`, color: model.color,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        marginBottom: '24px',
                                    }}>
                                        {model.icon}
                                    </div>
                                    <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)' }}>{model.title}</h3>
                                    <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '20px' }}>{model.description}</p>
                                    <div style={{
                                        display: 'inline-flex', alignItems: 'center',
                                        padding: '6px 14px', borderRadius: '100px',
                                        background: 'var(--color-gray-50)', color: 'var(--text-tertiary)',
                                        fontSize: '13px', fontWeight: 600, border: '1px solid var(--color-gray-200)'
                                    }}>
                                        {model.tag}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>

                    {/* ====== NEW HOW IT WORKS STEPS ====== */}
                    <RevealSection delay={150}>
                        <div style={{
                            marginTop: 'var(--space-16)',
                            paddingTop: 'var(--space-16)',
                            borderTop: '1px solid var(--color-gray-100)',
                            textAlign: 'center',
                        }}>
                            <h3 style={{ fontSize: '32px', marginBottom: 'var(--space-12)', color: 'var(--text-primary)', fontWeight: 700, letterSpacing: '-0.02em' }}>A simple process from start to scale</h3>
                            
                            <div style={{
                                position: 'relative',
                                maxWidth: '900px',
                                margin: '0 auto',
                            }}>
                                {/* Desktop Line Connector */}
                                <div className="hidden md:block" style={{
                                    position: 'absolute',
                                    top: '24px',
                                    left: '16%',
                                    right: '16%',
                                    height: '1px',
                                    background: 'var(--color-primary)',
                                    opacity: 0.3,
                                    zIndex: 0,
                                }} />
                                
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                                    gap: 'var(--space-8)',
                                    position: 'relative',
                                    zIndex: 1,
                                }}>
                                    {[
                                        {
                                            step: '1',
                                            title: 'Meet With Our Team',
                                            desc: 'Share your goals, technical requirements, and team dynamics with our industry experts.',
                                        },
                                        {
                                            step: '2',
                                            title: 'AI & White-Glove Curation',
                                            desc: 'We map your needs using AI matching, comprehensive ID verification, and rigorous screening to surface the right talent in 24 hours or less.',
                                        },
                                        {
                                            step: '3',
                                            title: 'Interview & Start Building',
                                            desc: 'Meet your hand-selected matches to confirm the fit, and they get straight to work. No lengthy trials—just immediate impact.',
                                        }
                                    ].map((item, i) => (
                                        <div key={i} style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}>
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                background: 'var(--color-white)',
                                                border: '1px solid var(--color-primary)',
                                                color: 'var(--color-primary)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '20px',
                                                fontWeight: 400,
                                                marginBottom: '20px',
                                                boxShadow: '0 0 0 16px var(--color-white)',
                                            }}>
                                                {item.step}
                                            </div>
                                            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>{item.title}</h4>
                                            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, padding: '0 10px' }}>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>



            {/* ====== WHAT MAKES BRAINTRUST DIFFERENT ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Why Braintrust</div>
                            <h2>Built differently.<br /><span className="text-gradient">Built for enterprise.</span></h2>
                            <p>Speed, quality, and transparency — without the agency markup that inflates every traditional hiring engagement.</p>
                        </div>
                    </RevealSection>

                    {/* Hero stat banner */}
                    <RevealSection delay={100}>
                        <div style={{
                            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: 'var(--space-4)', maxWidth: 860, margin: '0 auto var(--space-12)',
                        }}>
                            {[
                                { value: '< 48hrs', label: 'Time to first matched candidates' },
                                { value: 'Top 2%', label: 'Only the most qualified make it through' },
                                { value: '30–70%', label: 'Lower cost vs. traditional agencies' },
                            ].map(s => (
                                <div key={s.label} style={{
                                    textAlign: 'center', padding: '32px 24px',
                                    background: 'var(--color-white)',
                                    borderRadius: 'var(--radius-2xl)',
                                    border: '1px solid var(--color-gray-100)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                }}>
                                    <div style={{ fontSize: '32px', fontWeight: 800, color: '#111827', lineHeight: 1, letterSpacing: '-0.03em' }}>{s.value}</div>
                                    <div style={{ fontSize: '14px', color: '#4b5563', marginTop: '12px', fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>

                    <AlternatingFeatures />
                </div>
            </section>

            {/* ====== TRADITIONAL VS BRAINTRUST ====== */}
            <section className="section section--dark" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 0,
                    backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(245,87,51,0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <RevealSection>
                        <div className="section-header" style={{ textAlign: 'center' }}>
                            <div className="badge badge--dark">The Numbers Don&apos;t Lie</div>
                            <h2 style={{ color: 'var(--color-white)' }}>
                                Why 1,000+ companies<br />
                                <span className="text-gradient">switched to Braintrust.</span>
                            </h2>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid', gridTemplateColumns: '1fr 1fr',
                            gap: '2px', maxWidth: 900, margin: '0 auto',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: 'var(--radius-2xl)',
                            overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)',
                        }}>
                            {/* The Old Way */}
                            <div style={{ background: 'rgba(0,0,0,0.2)', padding: 'var(--space-8)' }}>
                                <div style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.4)', marginBottom: '32px' }}>
                                    The Old Way (Agencies)
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                    {[
                                        { label: 'Agency Markup', value: '20–40% hidden fees' },
                                        { label: 'Time to First Match', value: '2–6 weeks' },
                                        { label: 'Talent Vetting', value: 'Resume keyword matching' },
                                        { label: 'Talent Retention', value: 'Low (due to rate arbitrage)' },
                                    ].map(item => (
                                        <li key={item.label}>
                                            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>{item.label}</div>
                                            <div style={{ fontSize: '16px', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>{item.value}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* The Braintrust Way */}
                            <div style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)', padding: 'var(--space-8)' }}>
                                <div style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#10b981', marginBottom: '32px' }}>
                                    The Braintrust Way
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                    {[
                                        { label: 'Agency Markup', value: 'Industry low' },
                                        { label: 'Time to First Match', value: '< 48 hours via AI' },
                                        { label: 'Talent Vetting', value: 'Identity verification, AI video assessments, fraud prevention' },
                                        { label: 'Talent Retention', value: 'No fees to talent' },
                                    ].map(item => (
                                        <li key={item.label}>
                                            <div style={{ fontSize: '12px', color: 'rgba(16, 185, 129, 0.6)', marginBottom: '4px' }}>{item.label}</div>
                                            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-white)' }}>{item.value}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Bottom CTA */}
                        <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
                            <Link href="/book-demo" className="btn btn--primary btn--lg">See How Much You&apos;d Save →</Link>
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


            {/* ====== CLIENT LOGO MARQUEE ====== */}
            <section style={{ background: 'white', padding: 'var(--space-16) 0', '--lm-bg': '#fff' } as React.CSSProperties}>
                <div className="container">
                    <LogoMarquee label="Trusted by the world's best companies" />
                </div>
            </section>

            {/* ====== CAPABILITIES — Discipline Grid ====== */}
            <section className="section" style={{
                position: 'relative',
                backgroundImage: 'url(/images/home_collab.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(17, 24, 39, 0.4)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <RevealSection>
                        <div className="section-header" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                            <div className="badge badge--dark" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)' }}>Capabilities</div>
                            <h2 style={{ color: 'white', letterSpacing: '-0.02em' }}>World-class talent across every discipline</h2>
                            <p style={{ color: 'rgba(255,255,255,0.9)' }}>Hire across the full spectrum of professional expertise — all rigorously vetted.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: 'var(--space-5)', maxWidth: '1200px', margin: '0 auto',
                        }}>
                            {capabilities.map((cap) => (
                                <div key={cap.title} className="card--hover-lift" style={{
                                    display: 'flex', flexDirection: 'column',
                                    padding: '40px 32px',
                                    background: 'var(--color-white)',
                                    borderRadius: '24px',
                                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.06)',
                                    position: 'relative', overflow: 'hidden'
                                }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '14px',
                                        background: 'rgba(245, 87, 51, 0.05)',
                                        color: 'var(--color-primary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        marginBottom: '24px'
                                    }}>
                                        {cap.icon}
                                    </div>
                                    <div style={{ fontWeight: 800, fontSize: '20px', color: '#111827', marginBottom: '8px', lineHeight: 1.3, letterSpacing: '-0.02em' }}>{cap.title}</div>
                                    <div style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.6, flex: 1 }}>{cap.examples}</div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
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
                secondaryHref="/"
            />
        </>
    );
}
