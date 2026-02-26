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
                                    padding: 0,
                                    overflow: 'hidden',
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
                                        zIndex: 2,
                                    }}>Most In-Demand</div>
                                )}

                                {/* Visual header */}
                                {product.name === 'Talent Marketplace' && (
                                    <div style={{
                                        height: '160px', background: 'var(--color-gray-50)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderBottom: '1px solid rgba(0,0,0,0.05)',
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            {[1, 2, 3, 4, 5].map((num, i) => (
                                                <div key={num} style={{
                                                    width: '52px', height: '52px', borderRadius: '50%',
                                                    border: '3px solid white', marginLeft: i > 0 ? '-14px' : '0',
                                                    overflow: 'hidden', position: 'relative', zIndex: 5 - i,
                                                    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                                                }}>
                                                    <img src={`/images/talent_portrait_${num}.png`} alt="Talent" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                            ))}
                                            <div style={{
                                                width: '52px', height: '52px', borderRadius: '50%',
                                                border: '3px solid white', marginLeft: '-14px',
                                                background: 'var(--color-primary)', display: 'flex',
                                                alignItems: 'center', justifyContent: 'center',
                                                fontSize: '13px', fontWeight: 700, color: 'white',
                                                zIndex: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                                            }}>
                                                2M+
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {product.name === 'AI Recruiting Suite' && (
                                    <div style={{
                                        height: '160px', background: 'var(--color-gray-100)',
                                        position: 'relative', borderBottom: '1px solid rgba(0,0,0,0.05)',
                                        overflow: 'hidden',
                                    }}>
                                        <img src="/images/air_interview_side.png" alt="AIR Interview UI" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <div style={{
                                            position: 'absolute', bottom: '12%', left: '8%', right: '8%',
                                            background: 'rgba(255, 255, 255, 0.88)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                                            padding: '10px 14px', borderRadius: '12px 12px 12px 2px',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                        }}>
                                            <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '2px' }}>AIR</div>
                                            <p style={{ fontSize: '11px', margin: 0, color: 'var(--text-primary)', lineHeight: 1.3, fontWeight: 500 }}>
                                                &quot;That&apos;s a great example. Could you elaborate...&quot;
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {product.name === 'Nexus' && (
                                    <div style={{
                                        height: '160px', background: 'linear-gradient(135deg, #f8fafc, #eef2ff)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '0 24px',
                                    }}>
                                        {/* Workflow steps */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0px', width: '100%', justifyContent: 'center' }}>
                                            {[
                                                { label: 'Trigger', icon: '⚡', bg: '#6366f1' },
                                                { label: 'Process', icon: '⚙️', bg: '#059669' },
                                                { label: 'Decide', icon: '🔀', bg: '#f59e0b' },
                                                { label: 'Execute', icon: '✅', bg: '#10b981' },
                                            ].map((step, i) => (
                                                <div key={step.label} style={{ display: 'flex', alignItems: 'center' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                                                        <div style={{
                                                            width: '40px', height: '40px', borderRadius: '10px',
                                                            background: `${step.bg}12`, border: `1.5px solid ${step.bg}25`,
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                            fontSize: '16px',
                                                        }}>
                                                            {step.icon}
                                                        </div>
                                                        <span style={{ fontSize: '9px', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{step.label}</span>
                                                    </div>
                                                    {i < 3 && (
                                                        <div style={{
                                                            width: '28px', height: '1.5px', background: 'var(--color-gray-200)',
                                                            margin: '0 4px', marginBottom: '18px',
                                                        }} />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
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
                                                className={`btn ${cta.primary ? 'btn--primary' : 'btn--secondary'} btn--lg`}
                                                style={{ width: '100%', textAlign: 'center' }}
                                            >
                                                {cta.label}
                                            </Link>
                                        ))}
                                    </div>
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
