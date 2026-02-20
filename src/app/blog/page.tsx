import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Blog — Insights on Talent, AI & the Future of Work',
    description: 'Stay up to date with insights on AI recruiting, decentralized talent networks, workforce trends, and the future of work from the Braintrust team.',
};

export default function Blog() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
                    <div className="hero__content">
                        <div className="badge">Blog</div>
                        <h1>The Braintrust Blog</h1>
                        <p>Insights on AI, talent, decentralization, and the future of work.</p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container container--narrow">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                        {[
                            { title: 'The Rise of AI Recruiting: What Every Company Needs to Know', date: 'February 15, 2026', category: 'AI & Recruiting', slug: 'rise-of-ai-recruiting' },
                            { title: 'How Decentralized Talent Networks are Disrupting Traditional Staffing', date: 'February 10, 2026', category: 'Industry', slug: 'decentralized-talent-networks' },
                            { title: 'RLHF at Scale: Lessons from Training Foundation Models', date: 'February 5, 2026', category: 'AI Training', slug: 'rlhf-at-scale' },
                            { title: 'Zero-Fee Marketplaces: The Future of Work', date: 'January 28, 2026', category: 'Future of Work', slug: 'zero-fee-marketplaces' },
                            { title: 'Building Enterprise-Grade AI Assessments', date: 'January 20, 2026', category: 'Product', slug: 'enterprise-ai-assessments' },
                        ].map((post) => (
                            <article key={post.slug} className="card" style={{ padding: 'var(--space-6)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                                    <span className="badge">{post.category}</span>
                                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>{post.date}</span>
                                </div>
                                <h3 style={{ fontSize: 'var(--text-xl)' }}>{post.title}</h3>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
