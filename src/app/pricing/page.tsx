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
                                        height: '140px', background: 'linear-gradient(135deg, #f0f4ff, #e8ecf8)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderBottom: '1px solid rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden',
                                    }}>
                                        {/* Floating avatar grid */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            {[
                                                { bg: '#6366f1', icon: '👩‍💻' },
                                                { bg: '#059669', icon: '🧑‍🔬' },
                                                { bg: '#f59e0b', icon: '👨‍🎨' },
                                                { bg: '#ec4899', icon: '👩‍⚕️' },
                                                { bg: '#8b5cf6', icon: '🧑‍💼' },
                                            ].map((a, i) => (
                                                <div key={i} style={{
                                                    width: '44px', height: '44px', borderRadius: '12px',
                                                    background: `${a.bg}15`, border: `1.5px solid ${a.bg}30`,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    fontSize: '20px',
                                                }}>
                                                    {a.icon}
                                                </div>
                                            ))}
                                        </div>
                                        {/* Connection lines */}
                                        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }}>
                                            <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="#6366f1" strokeWidth="1" />
                                            <line x1="40%" y1="50%" x2="60%" y2="40%" stroke="#6366f1" strokeWidth="1" />
                                            <line x1="60%" y1="40%" x2="80%" y2="60%" stroke="#6366f1" strokeWidth="1" />
                                        </svg>
                                    </div>
                                )}

                                {product.name === 'AI Recruiting Suite' && (
                                    <div style={{
                                        height: '140px', background: 'linear-gradient(135deg, #fff7ed, #fef3c7)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderBottom: '1px solid rgba(0,0,0,0.05)', position: 'relative',
                                    }}>
                                        {/* Waveform / interview visual */}
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                            <div style={{
                                                width: '52px', height: '52px', borderRadius: '50%',
                                                background: 'linear-gradient(135deg, var(--color-primary), #f97316)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                boxShadow: '0 4px 16px rgba(245,87,51,0.25)',
                                            }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                                                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                                    <line x1="12" y1="19" x2="12" y2="23" />
                                                    <line x1="8" y1="23" x2="16" y2="23" />
                                                </svg>
                                            </div>
                                            {/* Waveform bars */}
                                            <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                                                {[16, 24, 32, 20, 28, 36, 24, 16, 28, 20, 32, 24, 16, 28, 36, 20, 24].map((h, i) => (
                                                    <div key={i} style={{
                                                        width: '3px', height: `${h}px`, borderRadius: '2px',
                                                        background: `rgba(245,87,51,${0.2 + (h / 50)})`,
                                                    }} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {product.name === 'Nexus' && (
                                    <div style={{
                                        height: '140px', background: 'linear-gradient(135deg, #111827, #1e293b)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderBottom: '1px solid rgba(0,0,0,0.05)', position: 'relative',
                                    }}>
                                        {/* Geometric node icon */}
                                        <div style={{
                                            width: '64px', height: '64px', borderRadius: '16px',
                                            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                                        }}>
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(165,180,252,0.9)" strokeWidth="1.5" strokeLinecap="round">
                                                <circle cx="12" cy="12" r="3" />
                                                <circle cx="4" cy="6" r="2" />
                                                <circle cx="20" cy="6" r="2" />
                                                <circle cx="4" cy="18" r="2" />
                                                <circle cx="20" cy="18" r="2" />
                                                <line x1="9.5" y1="10" x2="5.5" y2="7.5" />
                                                <line x1="14.5" y1="10" x2="18.5" y2="7.5" />
                                                <line x1="9.5" y1="14" x2="5.5" y2="16.5" />
                                                <line x1="14.5" y1="14" x2="18.5" y2="16.5" />
                                            </svg>
                                        </div>
                                        {/* Subtle grid dots */}
                                        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08 }}>
                                            {Array.from({ length: 8 }).map((_, row) =>
                                                Array.from({ length: 16 }).map((_, col) => (
                                                    <circle key={`${row}-${col}`} cx={`${6 + col * 6}%`} cy={`${10 + row * 12}%`} r="1" fill="white" />
                                                ))
                                            )}
                                        </svg>
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
