import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Resources — Guides, Case Studies & Insights',
    description: 'Explore Braintrust resources: hiring guides, case studies, industry insights, and best practices for talent acquisition, AI recruiting, and workforce management.',
};

export default function Resources() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]} />
                    <div className="hero__content">
                        <div className="badge">Resources</div>
                        <h1>Insights & guides.</h1>
                        <p>Best practices, case studies, and industry insights to help you hire smarter and grow faster.</p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="grid grid--3">
                        {[
                            { title: 'The Complete Guide to AI Recruiting', category: 'Guide', desc: 'How AI is transforming talent acquisition and what it means for your hiring strategy.' },
                            { title: 'Enterprise Hiring at Scale', category: 'Case Study', desc: 'How a Fortune 500 company hired 200+ engineers in 6 months with Braintrust.' },
                            { title: 'Zero-Fee Talent Networks', category: 'Whitepaper', desc: 'Why the future of talent marketplaces is decentralized, transparent, and fee-free.' },
                            { title: 'RLHF Best Practices', category: 'Guide', desc: 'How to structure human feedback loops for better AI model alignment.' },
                            { title: 'Building a Remote Engineering Team', category: 'Playbook', desc: 'Step-by-step guide to hiring and managing distributed engineering talent.' },
                            { title: 'The State of AI Talent 2025', category: 'Report', desc: 'Annual report on AI talent supply, demand, and compensation trends.' },
                        ].map((item, i) => (
                            <div key={i} className="card card--feature" style={{ cursor: 'pointer' }}>
                                <span className="badge" style={{ marginBottom: 'var(--space-3)' }}>{item.category}</span>
                                <h4 style={{ marginBottom: 'var(--space-2)' }}>{item.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--gray">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>Read the Blog</h2>
                    <p style={{ marginBottom: 'var(--space-6)' }}>Stay up to date with the latest from Braintrust.</p>
                    <Link href="/blog" className="btn btn--primary btn--lg">Visit the Blog</Link>
                </div>
            </section>
        </>
    );
}
