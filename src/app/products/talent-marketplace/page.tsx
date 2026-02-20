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
    { title: 'AI-Powered Matching', description: 'Our algorithms analyze skills, experience, and cultural fit to surface the best candidates — in hours, not weeks.' },
    { title: 'Global Talent Pool', description: 'Access professionals across 100+ countries. Remote, hybrid, and on-site options to match your hiring needs.' },
    { title: 'Enterprise Compliance', description: 'SOC 2 Type II certified. Automated onboarding, background checks, and compliance workflows built for enterprise requirements.' },
    { title: 'Vetted Quality', description: 'Every professional passes skills assessments, portfolio reviews, and reference checks before joining the network.' },
    { title: 'Speed to Hire', description: 'Most companies receive matched, vetted candidates within 48–72 hours of posting a role. Our AI works in real-time.' },
    { title: 'Full Lifecycle Support', description: 'From requisition to onboarding — dedicated account management, structured feedback, and continuous optimization.' },
];

const capabilities = [
    'Software Engineering',
    'Machine Learning & AI',
    'Product Design & UX',
    'Product Management',
    'Data Science & Analytics',
    'DevOps & Infrastructure',
    'Marketing & Growth',
    'Operations & Strategy',
    'Finance & Accounting',
    'Legal & Compliance',
    'STEM & Research',
    'Sales & Business Development',
    'HR & People Operations',
    'Cybersecurity & IT',
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

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>What makes Braintrust different</h2>
                        <p>Built for the AI era and designed to work better for companies and talent alike.</p>
                    </div>
                    <div className="grid grid--3">
                        {features.map((feature) => (
                            <div key={feature.title} className="card card--feature">
                                <h4 style={{ marginBottom: 'var(--space-3)' }}>{feature.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="section section--gray">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Capabilities</div>
                        <h2>World-class talent across every discipline</h2>
                        <p>Hire across the full spectrum of professional expertise — all rigorously vetted.</p>
                    </div>
                    <div className="grid grid--2" style={{ maxWidth: '800px', margin: '0 auto', gap: 'var(--space-4)' }}>
                        {capabilities.map((cap) => (
                            <div key={cap} className="card" style={{ padding: 'var(--space-4) var(--space-6)', textAlign: 'center' }}>
                                <span style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{cap}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Training & Human Data — high-level mention only */}
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
