import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AIR Demo Hub — Live AI Interview Examples | Braintrust',
    description: 'Explore live AI-powered interview demos across roles and industries. See how AIR conducts conversational voice interviews, assessments, and candidate scoring.',
};

const demoCategories = [
    {
        title: 'Engineering & Technical',
        demos: [
            { name: 'Senior Software Engineer', role: 'Full-Stack', duration: '12 min', url: '#demo-swe' },
            { name: 'Machine Learning Engineer', role: 'AI/ML', duration: '14 min', url: '#demo-mle' },
            { name: 'DevOps Engineer', role: 'Infrastructure', duration: '11 min', url: '#demo-devops' },
        ],
    },
    {
        title: 'Business & Operations',
        demos: [
            { name: 'Product Manager', role: 'Product', duration: '13 min', url: '#demo-pm' },
            { name: 'Account Executive', role: 'Sales', duration: '10 min', url: '#demo-ae' },
            { name: 'Operations Manager', role: 'Ops', duration: '11 min', url: '#demo-ops' },
        ],
    },
    {
        title: 'Design & Creative',
        demos: [
            { name: 'Senior Product Designer', role: 'UX/UI', duration: '12 min', url: '#demo-design' },
            { name: 'Content Strategist', role: 'Marketing', duration: '9 min', url: '#demo-content' },
        ],
    },
    {
        title: 'Healthcare & Specialized',
        demos: [
            { name: 'Clinical Data Analyst', role: 'Healthcare', duration: '13 min', url: '#demo-clinical' },
            { name: 'Financial Analyst', role: 'Finance', duration: '11 min', url: '#demo-finance' },
        ],
    },
];

export default function DemoHub() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <div className="hero__content">
                        <div className="badge badge--success" style={{ marginBottom: 'var(--space-4)' }}>✓ Access Granted</div>
                        <h1 style={{ fontSize: 'clamp(var(--text-3xl), 4vw, var(--text-5xl))' }}>
                            AIR Demo Hub
                        </h1>
                        <p>Explore live AI interview examples across roles and industries. Click any demo to watch the full interview flow.</p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    {demoCategories.map((category) => (
                        <div key={category.title} style={{ marginBottom: 'var(--space-12)' }}>
                            <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>{category.title}</h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                gap: 'var(--space-4)',
                            }}>
                                {category.demos.map((demo) => (
                                    <a
                                        key={demo.name}
                                        href={demo.url}
                                        className="card card--feature"
                                        style={{
                                            textDecoration: 'none',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 'var(--space-3)',
                                            padding: 'var(--space-6)',
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <span className="badge">{demo.role}</span>
                                            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                                                {demo.duration}
                                            </span>
                                        </div>
                                        <h4 style={{ color: 'var(--text-primary)', fontSize: 'var(--text-lg)' }}>{demo.name}</h4>
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 'var(--space-2)',
                                            fontSize: 'var(--text-sm)',
                                            fontWeight: 600,
                                            color: 'var(--color-primary)',
                                        }}>
                                            Watch Demo
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polygon points="5,3 19,12 5,21" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="cta-section">
                        <h2>Ready to run AIR on your roles?</h2>
                        <p>Book a demo to see how AIR can transform your hiring pipeline.</p>
                        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/book-demo" className="btn btn--white btn--lg">
                                Book a Demo
                            </Link>
                            <Link href="/pricing" className="btn btn--secondary btn--lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
