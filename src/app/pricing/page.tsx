import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Pricing — Enterprise Solutions Aligned to Your Needs',
    description: 'Braintrust pricing is tailored to your business: flexible marketplace rates, volume-based AI recruiting pricing, and performance-based workflow automation plans.',
};

const products = [
    {
        name: 'Talent Marketplace',
        positioning: 'Competitive vs. traditional recruiting',
        description: 'Flexible pricing that scales with your hiring needs. Access 2M+ vetted professionals across every discipline — at rates that beat traditional staffing agencies.',
        features: [
            'AI-powered talent matching',
            'Competitive vs. traditional recruiting',
            'Flexible, scalable pricing',
            'Zero platform fees for talent',
            'Enterprise compliance built-in',
            'Dedicated account management',
        ],
        ctas: [
            { label: 'Get Marketplace Pricing', href: '/book-demo', primary: true },
            { label: 'Book a Call', href: '/book-demo', primary: false },
        ],
        highlighted: false,
    },
    {
        name: 'AI Recruiting Suite',
        badge: 'AIR',
        positioning: 'Volume-based pricing',
        description: 'Pricing based on your assessment and candidate volume. Scale from hundreds to thousands of interviews per day with conversational AI and customizable scoring frameworks.',
        features: [
            'Conversational voice interviews',
            'Customizable scoring frameworks',
            'Based on assessment volume',
            'Based on candidate volume',
            '16+ languages supported',
            'Native ATS integrations',
        ],
        ctas: [
            { label: 'Talk to Sales', href: '/book-demo', primary: true },
            { label: 'Book Demo', href: '/book-demo', primary: false },
        ],
        highlighted: true,
    },
    {
        name: 'Nexus',
        positioning: 'Performance-based pricing',
        description: 'Custom pricing tied to the value Nexus delivers — based on cost savings, revenue generation, and workflow efficiency impact across your organization.',
        features: [
            'Pricing based on cost savings',
            'Based on revenue generation',
            'Workflow efficiency impact',
            '100+ pre-built integrations',
            'Cross-departmental automation',
            'Custom implementation support',
        ],
        ctas: [
            { label: 'Discuss Custom Plan', href: '/book-demo', primary: true },
            { label: 'Contact Sales', href: '/book-demo', primary: false },
        ],
        highlighted: false,
    },
];

export default function Pricing() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]} />
                    <div className="hero__content">
                        <div className="badge">Pricing</div>
                        <h1>Enterprise pricing<br /><span className="text-gradient">aligned to your goals.</span></h1>
                        <p>Three product lines. Three pricing models. Each tailored to deliver measurable value for your business.</p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="grid grid--3">
                        {products.map((product) => (
                            <div
                                key={product.name}
                                className="card"
                                style={{
                                    border: product.highlighted ? '2px solid var(--color-primary)' : undefined,
                                    boxShadow: product.highlighted ? 'var(--shadow-glow)' : undefined,
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                {product.highlighted && (
                                    <div style={{
                                        position: 'absolute',
                                        top: -12,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'var(--color-primary)',
                                        color: 'white',
                                        padding: '4px 16px',
                                        borderRadius: 'var(--radius-full)',
                                        fontSize: 'var(--text-xs)',
                                        fontWeight: 700,
                                        whiteSpace: 'nowrap',
                                    }}>Most In-Demand</div>
                                )}
                                <div style={{ marginBottom: 'var(--space-2)' }}>
                                    <span className="badge" style={{ marginBottom: 'var(--space-2)' }}>
                                        {product.badge ? `${product.name} (${product.badge})` : product.name}
                                    </span>
                                </div>
                                <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }}>
                                    {product.positioning}
                                </p>
                                <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                    {product.description}
                                </p>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)', flex: 1 }}>
                                    {product.features.map((f) => (
                                        <li key={f} style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                                            <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>✓</span> {f}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                                    {product.ctas.map((cta) => (
                                        <Link
                                            key={cta.label}
                                            href={cta.href}
                                            className={`btn ${cta.primary ? (product.highlighted ? 'btn--primary' : 'btn--primary') : 'btn--secondary'} btn--lg`}
                                            style={{ width: '100%', textAlign: 'center' }}
                                        >
                                            {cta.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection title="Need a custom plan?" description="Our team will work with you to design a pricing structure aligned to your business goals and scale." primaryLabel="Contact Sales" primaryHref="/book-demo" />
        </>
    );
}
