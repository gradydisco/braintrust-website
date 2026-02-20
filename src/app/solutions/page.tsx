import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Solutions — Enterprise Hiring, High-Volume, AI Training',
    description: 'Braintrust solutions for enterprise hiring, high-volume recruiting, and AI training data. Purpose-built for the world\'s most demanding organizations.',
};

const solutions = [
    {
        title: 'Enterprise Hiring',
        description: 'End-to-end talent solutions for Fortune 1000 companies. Dedicated account management, compliance, and AI-powered matching.',
        href: '/solutions/enterprise-hiring',
        stats: ['SOC 2 Type II', 'Enterprise SSO', 'Dedicated CSM', 'Custom SLAs'],
    },
    {
        title: 'High-Volume Hiring',
        description: 'Scale your hiring to hundreds of roles without scaling your recruiting team. AI screening processes thousands of candidates in minutes.',
        href: '/solutions/high-volume-hiring',
        stats: ['10x Throughput', '80% Faster', 'AI Screening', 'Bulk Operations'],
    },
    {
        title: 'AI Training Data',
        description: 'Access domain experts at scale for RLHF, data labeling, model evaluation, and specialized AI training data.',
        href: '/solutions/ai-training-data',
        stats: ['750K+ Experts', '100+ Countries', 'Multi-domain', 'Enterprise QA'],
    },
];

export default function Solutions() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions' }]} />
                    <div className="hero__content">
                        <div className="badge">Solutions</div>
                        <h1>Purpose-built for<br /><span className="text-gradient">enterprise scale.</span></h1>
                        <p>Solutions designed for the world&apos;s most demanding organizations — from Fortune 1000 hiring to AI model training.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                        {solutions.map((sol) => (
                            <Link key={sol.href} href={sol.href} className="card card--feature" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 'var(--space-8)', alignItems: 'center' }}>
                                <div>
                                    <h3 style={{ marginBottom: 'var(--space-3)' }}>{sol.title}</h3>
                                    <p>{sol.description}</p>
                                </div>
                                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                                    {sol.stats.map((s) => (
                                        <span key={s} className="badge">{s}</span>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection title="Let's discuss your needs" description="Our solutions team will design a custom plan for your organization." primaryLabel="Book a Demo" primaryHref="/book-demo" />
        </>
    );
}
