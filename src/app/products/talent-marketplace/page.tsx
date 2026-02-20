import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

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
        title: 'Full Lifecycle Support',
        description: 'From requisition to onboarding — dedicated account management, structured feedback, and continuous optimization.',
        stat: 'End-to-end',
        statLabel: 'managed delivery',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
    },
];

const capabilities = [
    {
        title: 'Software Engineering',
        examples: 'Full-stack, backend, frontend, mobile, embedded systems',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    },
    {
        title: 'Machine Learning & AI',
        examples: 'ML engineers, research scientists, NLP, computer vision',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.57-3.25 3.92L12 22" /><path d="M12 2a4 4 0 00-4 4c0 1.95 1.4 3.57 3.25 3.92" /><circle cx="12" cy="14" r="2" /></svg>,
    },
    {
        title: 'Product Design & UX',
        examples: 'Product design, UX research, visual design, design systems',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="13.5" cy="6.5" r="2.5" /><path d="M17 2H7a5 5 0 000 10h10a5 5 0 000-10z" /><path d="M7 22a5 5 0 010-10" /><circle cx="7" cy="17" r="5" /></svg>,
    },
    {
        title: 'Product Management',
        examples: 'Technical PMs, growth, strategy, platform product',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>,
    },
    {
        title: 'Data Science & Analytics',
        examples: 'Data engineers, analysts, statisticians, BI specialists',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>,
    },
    {
        title: 'DevOps & Infrastructure',
        examples: 'Cloud architects, SREs, platform engineers, Kubernetes',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" /><circle cx="6" cy="18" r="1" /></svg>,
    },
    {
        title: 'Marketing & Growth',
        examples: 'Growth marketing, content strategy, performance, SEO',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    },
    {
        title: 'Operations & Strategy',
        examples: 'Business operations, project management, consulting',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>,
    },
    {
        title: 'Finance & Accounting',
        examples: 'Financial analysts, controllers, FP&A, tax specialists',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>,
    },
    {
        title: 'Legal & Compliance',
        examples: 'Corporate counsel, regulatory, privacy, contract specialists',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    },
    {
        title: 'STEM & Research',
        examples: 'Research scientists, biotech, physics, mathematics',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M9 3v11" /><path d="M15 3v11" /><path d="M6 14c0 4 2.5 6 6 6s6-2 6-6" /><path d="M6 7h12" /></svg>,
    },
    {
        title: 'Sales & Business Development',
        examples: 'Account executives, SDRs, partnerships, revenue ops',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>,
    },
    {
        title: 'HR & People Operations',
        examples: 'HR business partners, talent acquisition, people analytics',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
    },
    {
        title: 'Cybersecurity & IT',
        examples: 'Security engineers, SOC analysts, IT infrastructure',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
    },
];

const faqItems = [
    { question: 'How does Braintrust Talent Marketplace differ from traditional staffing?', answer: 'Unlike traditional staffing agencies, Braintrust connects you directly with vetted professionals through AI-powered matching. There are no middlemen — just a direct relationship between your team and the talent you hire.' },
    { question: 'What types of roles can I hire for?', answer: 'Braintrust covers engineering (frontend, backend, full-stack, data, ML/AI), design (product, UX, visual), product management, operations, marketing, finance, and more. We specialize in high-skill, high-value roles.' },
    { question: 'How quickly can I expect to receive matched candidates?', answer: 'Most companies receive their first batch of matched, vetted candidates within 48–72 hours of posting a role. Our AI matching system works in real-time to surface the best fits.' },
    { question: 'Is Braintrust enterprise-ready?', answer: 'Yes. We are SOC 2 Type II certified, offer enterprise SSO, automated compliance workflows, background checks, and dedicated account management for enterprise clients.' },
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
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Products', href: '/products' },
                        { label: 'Talent Marketplace' },
                    ]} />
                    <div className="hero__content">
                        <div className="badge">Talent Marketplace</div>
                        <h1>2M+ vetted professionals.<br /><span className="text-gradient">One platform.</span></h1>
                        <p>Access the world&apos;s largest AI-powered talent network — intelligent matching across engineering, design, product, operations, STEM, and more.</p>
                        <div className="hero__actions">
                            <Link href="/book-demo" className="btn btn--primary btn--lg">Book a Demo</Link>
                            <Link href="/products" className="btn btn--secondary btn--lg">View All Products →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Braintrust Different — Premium Cards */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>What makes Braintrust different</h2>
                        <p>Built for the AI era and designed to work better for companies and talent alike.</p>
                    </div>
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
                                {/* Top gradient accent */}
                                <div style={{
                                    height: '3px',
                                    background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                                    opacity: 0.6,
                                }} />
                                <div style={{ padding: 'var(--space-8) var(--space-8) var(--space-6)', flex: 1 }}>
                                    {/* Icon + Title Row */}
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                                        <div style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: 'linear-gradient(135deg, rgba(245, 87, 51, 0.08), rgba(245, 87, 51, 0.03))',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--color-primary)',
                                            flexShrink: 0,
                                        }}>
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px', lineHeight: 1.3 }}>
                                                {feature.title}
                                            </h4>
                                            <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Micro-stat footer — pinned to bottom */}
                                <div style={{
                                    borderTop: '1px solid rgba(50, 50, 93, 0.06)',
                                    padding: '12px var(--space-8)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-2)',
                                    background: 'rgba(245, 87, 51, 0.015)',
                                    marginTop: 'auto',
                                }}>
                                    <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-primary)' }}>{feature.stat}</span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 500 }}>{feature.statLabel}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities — Refined Discipline Grid */}
            <section className="section section--gray">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Capabilities</div>
                        <h2>World-class talent across every discipline</h2>
                        <p>Hire across the full spectrum of professional expertise — all rigorously vetted.</p>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '12px',
                        maxWidth: '900px',
                        margin: '0 auto',
                    }}>
                        {capabilities.map((cap) => (
                            <div key={cap.title} className="card--enterprise" style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 'var(--space-4)',
                                padding: '18px 22px',
                                background: 'var(--color-white)',
                                border: '1px solid rgba(50, 50, 93, 0.07)',
                                borderRadius: 'var(--radius-lg)',
                                borderLeft: '3px solid var(--color-primary)',
                                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}>
                                <div style={{
                                    color: 'var(--color-primary)',
                                    flexShrink: 0,
                                    marginTop: '1px',
                                    opacity: 0.7,
                                }}>
                                    {cap.icon}
                                </div>
                                <div>
                                    <div style={{
                                        fontWeight: 700,
                                        fontSize: '14px',
                                        color: 'var(--text-primary)',
                                        marginBottom: '3px',
                                        lineHeight: 1.3,
                                    }}>
                                        {cap.title}
                                    </div>
                                    <div style={{
                                        fontSize: '12.5px',
                                        color: 'var(--text-tertiary)',
                                        lineHeight: 1.4,
                                    }}>
                                        {cap.examples}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Training & Human Data */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge badge--accent">Data Solutions</div>
                        <h2>AI Training &amp; Human Data</h2>
                        <p>Leverage our global talent network for AI model training, RLHF, data labeling, and domain-specific data at scale.</p>
                    </div>
                    <div className="grid grid--2" style={{ maxWidth: '720px', margin: '0 auto' }}>
                        <Link href="/products/talent-marketplace/ai-training" className="card card--feature" style={{ textAlign: 'center' }}>
                            <h4 style={{ marginBottom: 'var(--space-2)' }}>AI Training</h4>
                            <p style={{ fontSize: 'var(--text-sm)' }}>RLHF, model evaluation, and domain-expert feedback for AI development.</p>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-primary)' }}>
                                Learn more →
                            </span>
                        </Link>
                        <Link href="/products/talent-marketplace/human-data" className="card card--feature" style={{ textAlign: 'center' }}>
                            <h4 style={{ marginBottom: 'var(--space-2)' }}>Human Data</h4>
                            <p style={{ fontSize: 'var(--text-sm)' }}>Data labeling, annotation, and collection from verified domain experts.</p>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-primary)' }}>
                                Learn more →
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

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
                description="Book a demo and see how our AI matches you with elite talent in hours."
                primaryLabel="Book a Demo"
                primaryHref="/book-demo"
            />
        </>
    );
}
