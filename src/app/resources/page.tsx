import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Resources — Guides, Comparisons & Industry Insights | Braintrust',
    description: 'Explore Braintrust resources: comprehensive AI interview software guides, platform comparisons, industry-specific hiring insights, and best practices for AI-powered recruiting.',
    keywords: 'AI interview software guides, AI recruiting resources, hiring guides, platform comparisons, AI hiring best practices',
};

const guides = [
    { title: 'Best AI Interview Software 2025', desc: '15 platforms ranked and compared across voice AI, conversational depth, enterprise readiness, and scalability.', href: '/best-ai-interview-software-2025', badge: '2025 Rankings' },
    { title: 'AI Interview Software Guide', desc: 'Comprehensive guide to AI-powered interviewing — how it works, benefits, use cases, and how to evaluate platforms.', href: '/ai-interview-software', badge: 'Pillar Guide' },
    { title: 'AI Voice Interview Software', desc: 'How real-time voice AI interviews compare to video and text assessment — architecture, benefits, and platforms.', href: '/ai-voice-interview-software', badge: 'Pillar Guide' },
    { title: 'Conversational AI Interview Platforms', desc: 'Deep dive into conversational AI vs scripted interviews — how adaptive AI interviews work and why they produce better results.', href: '/conversational-ai-interview-platform', badge: 'Pillar Guide' },
    { title: 'AI Assessment Software', desc: 'Guide to AI-powered assessment platforms — types, how they work, enterprise requirements, and top platforms.', href: '/ai-assessment-software', badge: 'Pillar Guide' },
    { title: 'AI Recruiting Software', desc: 'How AI transforms the full recruiting lifecycle — sourcing, screening, interviewing, and assessment.', href: '/ai-recruiting-software', badge: 'Pillar Guide' },
    { title: 'Automated Hiring Software', desc: 'What hiring tasks can be automated, levels of automation, ROI analysis, and platform rankings.', href: '/automated-hiring-software', badge: 'Pillar Guide' },
];

const comparisons = [
    { name: 'HireVue', href: '/compare/air-vs-hirevue' },
    { name: 'TestGorilla', href: '/compare/air-vs-testgorilla' },
    { name: 'Paradox', href: '/compare/air-vs-paradox' },
    { name: 'VidCruiter', href: '/compare/air-vs-vidcruter' },
    { name: 'SparkHire', href: '/compare/air-vs-sparkhire' },
    { name: 'MyInterview', href: '/compare/air-vs-myinterview' },
    { name: 'Humanly', href: '/compare/air-vs-humanly' },
    { name: 'BrightHire', href: '/compare/air-vs-brighthire' },
    { name: 'HeyMilo', href: '/compare/air-vs-heymilo' },
    { name: 'Micro1', href: '/compare/air-vs-micro1' },
    { name: 'Interviewer.ai', href: '/compare/air-vs-interviewer-ai' },
    { name: 'Take2', href: '/compare/air-vs-take2' },
    { name: 'AlexAI', href: '/compare/air-vs-alexai' },
    { name: 'Willow', href: '/compare/air-vs-willow' },
];

const industryPages = [
    { title: 'AI Interviews for Healthcare', desc: 'Screening nurses, clinicians, and admin staff at scale.', href: '/ai-interview-software-for-healthcare' },
    { title: 'AI Interviews for Enterprise', desc: 'SOC 2, SSO, ATS integrations, and global hiring.', href: '/ai-interview-software-for-enterprise' },
    { title: 'AI Interviews for Startups', desc: 'Hire like a Fortune 500 without the overhead.', href: '/ai-interview-software-for-startups' },
    { title: 'AI Interviews for High-Volume', desc: 'Process thousands of candidates daily.', href: '/ai-interview-software-for-high-volume-hiring' },
    { title: 'AI Voice Interviews for Tech', desc: 'Screen engineers, data scientists, and DevOps.', href: '/ai-voice-interviews-for-technical-roles' },
];

export default function Resources() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]} />
                    <div className="hero__content">
                        <div className="badge">Resources</div>
                        <h1>Guides, comparisons<br /><span className="text-gradient">& insights.</span></h1>
                        <p>Everything you need to evaluate AI interview software, compare platforms, and build a best-in-class hiring operation.</p>
                    </div>
                </div>
            </section>

            {/* Featured — Best-of List */}
            <section className="section" style={{ paddingBottom: 'var(--space-6)' }}>
                <div className="container">
                    <Link href="/best-ai-interview-software-2025" style={{
                        display: 'block', padding: '32px 40px', borderRadius: '16px',
                        background: 'linear-gradient(135deg, rgba(245,87,51,0.04) 0%, rgba(255,147,124,0.03) 100%)',
                        border: '1px solid rgba(245,87,51,0.12)', textDecoration: 'none',
                        transition: 'border-color 0.2s',
                    }}>
                        <span className="badge" style={{ marginBottom: '12px', display: 'inline-block' }}>Featured</span>
                        <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                            Best AI Interview Software 2025 — 15 Platforms Compared
                        </h2>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, maxWidth: '600px', lineHeight: 1.6 }}>
                            The most comprehensive comparison of AI interview platforms available. We evaluated 15 tools across voice AI, conversational depth, enterprise readiness, and scalability.
                        </p>
                    </Link>
                </div>
            </section>

            {/* Category Guides */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>Category Guides</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                        {guides.slice(1).map((g) => (
                            <Link key={g.href} href={g.href} style={{
                                display: 'block', padding: '20px', borderRadius: '12px',
                                background: 'var(--color-white)', border: '1px solid var(--color-gray-100)',
                                textDecoration: 'none', transition: 'border-color 0.2s',
                            }}>
                                <span style={{
                                    fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
                                    letterSpacing: '0.04em', color: 'var(--color-primary)',
                                    marginBottom: '8px', display: 'inline-block',
                                }}>{g.badge}</span>
                                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>{g.title}</h3>
                                <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', margin: 0, lineHeight: 1.5 }}>{g.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Solutions */}
            <section className="section section--gray">
                <div className="container">
                    <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>By Industry & Use Case</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}>
                        {industryPages.map((p) => (
                            <Link key={p.href} href={p.href} style={{
                                display: 'block', padding: '20px', borderRadius: '12px',
                                background: 'var(--color-white)', border: '1px solid var(--color-gray-100)',
                                textDecoration: 'none', transition: 'border-color 0.2s',
                            }}>
                                <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>{p.title}</h4>
                                <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparisons Grid */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>Platform Comparisons</h2>
                        <Link href="/compare" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none' }}>View all comparisons →</Link>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
                        {comparisons.map((c) => (
                            <Link key={c.href} href={c.href} style={{
                                display: 'block', padding: '14px 16px', borderRadius: '10px',
                                background: 'var(--color-white)', border: '1px solid var(--color-gray-100)',
                                textDecoration: 'none', textAlign: 'center',
                                fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)',
                                transition: 'border-color 0.2s',
                            }}>
                                AIR vs {c.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog & CTA */}
            <section className="section section--gray">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>Read the Blog</h2>
                    <p style={{ marginBottom: 'var(--space-6)', color: 'var(--text-secondary)' }}>Stay up to date with the latest from Braintrust.</p>
                    <Link href="/blog" className="btn btn--primary btn--lg">Visit the Blog</Link>
                </div>
            </section>
        </>
    );
}
