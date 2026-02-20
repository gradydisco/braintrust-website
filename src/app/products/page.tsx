import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Products — AI-Powered Talent & Recruiting Platform',
    description: 'Explore Braintrust products: Talent Marketplace for elite hiring, AIR for AI-powered recruiting, and Nexus for workflow automation. Built for the enterprise, powered by AI.',
};

/* ===========================
   CSS-rendered product visuals
   =========================== */

function MarketplaceVisual() {
    const candidates = [
        { initials: 'RT', role: 'Sr. Engineer', color: '#6366f1' },
        { initials: 'AH', role: 'Designer', color: '#f59e0b' },
        { initials: 'BM', role: 'Full Stack', color: '#10b981' },
        { initials: 'IM', role: 'Product Mgr', color: '#ec4899' },
    ];

    return (
        <div style={{
            background: 'linear-gradient(145deg, #f5f3ff 0%, #faf5ff 50%, #fff 100%)',
            borderRadius: 'var(--radius-2xl)',
            padding: '32px 24px 28px',
            border: '1px solid rgba(99, 102, 241, 0.08)',
        }}>
            {/* Mini header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
                <div style={{ flex: 1 }} />
                <div style={{ width: '80px', height: '6px', borderRadius: '3px', background: 'rgba(0,0,0,0.06)' }} />
            </div>

            {/* Section label */}
            <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6366f1', marginBottom: '12px' }}>
                Your top candidates
            </div>

            {/* Candidate cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '20px' }}>
                {candidates.map(c => (
                    <div key={c.initials} style={{
                        background: 'white',
                        borderRadius: '12px',
                        padding: '16px 8px 12px',
                        textAlign: 'center',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                        border: '1px solid rgba(0,0,0,0.04)',
                    }}>
                        <div style={{
                            width: '36px', height: '36px', borderRadius: '50%',
                            background: c.color, color: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '11px', fontWeight: 700, margin: '0 auto 8px',
                        }}>{c.initials}</div>
                        <div style={{ fontSize: '10px', fontWeight: 600, color: '#1e293b', marginBottom: '2px' }}>{c.role}</div>
                        <div style={{ fontSize: '9px', color: '#94a3b8' }}>98% match</div>
                    </div>
                ))}
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '12px', border: '1px solid rgba(0,0,0,0.04)' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#1e293b' }}>2M+</div>
                    <div style={{ fontSize: '9px', color: '#94a3b8' }}>Professionals</div>
                </div>
                <div style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '12px', border: '1px solid rgba(0,0,0,0.04)' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#1e293b' }}>100+</div>
                    <div style={{ fontSize: '9px', color: '#94a3b8' }}>Countries</div>
                </div>
                <div style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '12px', border: '1px solid rgba(0,0,0,0.04)' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#22c55e' }}>0%</div>
                    <div style={{ fontSize: '9px', color: '#94a3b8' }}>Talent fees</div>
                </div>
            </div>
        </div>
    );
}

function AIRVisual() {
    const barHeights = [14, 28, 20, 38, 24, 42, 18, 34, 22, 40, 16, 30, 26, 36, 20, 44, 14, 32, 28, 38];

    return (
        <div style={{
            background: 'linear-gradient(145deg, #fff7ed 0%, #fef3c7 30%, #fff 100%)',
            borderRadius: 'var(--radius-2xl)',
            padding: '32px 24px 28px',
            border: '1px solid rgba(245, 158, 11, 0.08)',
        }}>
            {/* Mini header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
                <div style={{ flex: 1 }} />
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '4px',
                    fontSize: '9px', fontWeight: 700, color: '#22c55e',
                }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
                    LIVE
                </div>
            </div>

            {/* Interview card */}
            <div style={{
                background: 'white',
                borderRadius: '14px',
                padding: '20px',
                marginBottom: '14px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.04)',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div>
                        <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f59e0b', marginBottom: '4px' }}>
                            AI Interview in Progress
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b' }}>Senior Product Designer</div>
                    </div>
                    <div style={{
                        width: '32px', height: '32px', borderRadius: '8px',
                        background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                            <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
                        </svg>
                    </div>
                </div>

                {/* Waveform */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '2px',
                    height: '44px', padding: '0 4px',
                }}>
                    {barHeights.map((h, i) => (
                        <div key={i} style={{
                            flex: 1, height: `${h}px`,
                            borderRadius: '2px',
                            background: `linear-gradient(180deg, #f59e0b, #ea580c)`,
                            opacity: 0.3 + (h / 44) * 0.7,
                        }} />
                    ))}
                </div>
            </div>

            {/* Assessment scores */}
            <div style={{
                background: 'white',
                borderRadius: '14px',
                padding: '16px 20px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.04)',
            }}>
                <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: '12px' }}>AI Assessment</div>
                {[
                    { label: 'Technical', score: 92, color: '#6366f1' },
                    { label: 'Communication', score: 88, color: '#22c55e' },
                    { label: 'Problem Solving', score: 95, color: '#f59e0b' },
                ].map(s => (
                    <div key={s.label} style={{ marginBottom: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', marginBottom: '4px' }}>
                            <span style={{ color: '#64748b', fontWeight: 500 }}>{s.label}</span>
                            <span style={{ color: '#1e293b', fontWeight: 700 }}>{s.score}%</span>
                        </div>
                        <div style={{ height: '4px', borderRadius: '2px', background: '#f1f5f9' }}>
                            <div style={{ height: '100%', borderRadius: '2px', background: s.color, width: `${s.score}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function NexusVisual() {
    const steps = [
        { label: 'Application received', status: 'done' },
        { label: 'AI screening', status: 'done' },
        { label: 'Interview scheduled', status: 'active' },
        { label: 'Offer & onboarding', status: 'pending' },
    ];

    return (
        <div style={{
            background: 'linear-gradient(145deg, #fffbeb 0%, #fef9c3 30%, #fff 100%)',
            borderRadius: 'var(--radius-2xl)',
            padding: '32px 24px 28px',
            border: '1px solid rgba(234, 179, 8, 0.08)',
        }}>
            {/* Mini header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
                <div style={{ flex: 1 }} />
                <div style={{ width: '80px', height: '6px', borderRadius: '3px', background: 'rgba(0,0,0,0.06)' }} />
            </div>

            {/* Workflow pipeline */}
            <div style={{
                background: 'white',
                borderRadius: '14px',
                padding: '20px',
                marginBottom: '14px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.04)',
            }}>
                <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#eab308', marginBottom: '16px' }}>
                    Active Workflow
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {steps.map((step, i) => (
                        <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20px' }}>
                                <div style={{
                                    width: '20px', height: '20px', borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: step.status === 'done' ? '#22c55e'
                                        : step.status === 'active' ? '#6366f1' : '#e2e8f0',
                                    color: step.status === 'pending' ? '#94a3b8' : 'white',
                                    fontSize: '10px', fontWeight: 700,
                                }}>
                                    {step.status === 'done' ? (
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                                    ) : (i + 1)}
                                </div>
                                {i < steps.length - 1 && (
                                    <div style={{
                                        width: '2px', height: '10px',
                                        background: step.status === 'done' ? '#22c55e' : '#e2e8f0',
                                    }} />
                                )}
                            </div>
                            <div style={{
                                fontSize: '11px', fontWeight: step.status === 'active' ? 600 : 500,
                                color: step.status === 'pending' ? '#94a3b8' : '#1e293b',
                            }}>
                                {step.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Automation stats */}
            <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '12px', border: '1px solid rgba(0,0,0,0.04)' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#1e293b' }}>84%</div>
                    <div style={{ fontSize: '9px', color: '#94a3b8' }}>Automated</div>
                </div>
                <div style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '12px', border: '1px solid rgba(0,0,0,0.04)' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#22c55e' }}>3.2x</div>
                    <div style={{ fontSize: '9px', color: '#94a3b8' }}>Faster pipeline</div>
                </div>
                <div style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '12px', border: '1px solid rgba(0,0,0,0.04)' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#6366f1' }}>24/7</div>
                    <div style={{ fontSize: '9px', color: '#94a3b8' }}>Always on</div>
                </div>
            </div>
        </div>
    );
}

const productVisuals: Record<string, React.ReactNode> = {
    'Talent Marketplace': <MarketplaceVisual />,
    'AIR | AI Recruiter': <AIRVisual />,
    'Nexus': <NexusVisual />,
};

/* ===========================
   Product data
   =========================== */
const products = [
    {
        name: 'Talent Marketplace',
        tagline: 'Elite talent. Enterprise-ready.',
        description: 'Access 2M+ vetted professionals across engineering, design, product, and operations. Our AI matches you with ideal candidates in hours — with competitive, transparent pricing.',
        href: '/products/talent-marketplace',
        color: 'var(--color-primary)',
        features: [
            'AI-powered candidate matching',
            'Transparent, competitive pricing',
            'Enterprise compliance & onboarding',
            'Human data for AI model training',
            'Global talent pool across 100+ countries',
        ],
    },
    {
        name: 'AIR | AI Recruiter',
        tagline: 'Superhuman recruiting intelligence.',
        description: 'Deploy AI that screens resumes, conducts structured interviews, and provides skills-based assessments — reducing bias and accelerating time-to-hire by 80%.',
        href: '/products/air',
        color: 'var(--color-accent)',
        features: [
            'AI-driven resume screening',
            'Automated structured interviews',
            'Skills-based candidate assessment',
            'Bias-reduced evaluation framework',
            'Seamless ATS integration',
        ],
    },
    {
        name: 'Nexus',
        tagline: 'Your recruiting command center.',
        description: 'Orchestrate your entire hiring workflow. Automate approvals, connect tools, set custom rules, and get real-time analytics on every stage of your pipeline.',
        href: '/products/nexus',
        color: 'var(--color-token)',
        features: [
            'End-to-end workflow automation',
            'ATS & HRIS integrations',
            'Custom automation rules engine',
            'Real-time pipeline analytics',
            'Team collaboration tools',
        ],
    },
];

export default function Products() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Products' }]} />
                    <div className="hero__content">
                        <div className="badge">Products</div>
                        <h1>Three products.<br /><span className="text-gradient">One ecosystem.</span></h1>
                        <p>Everything enterprises need to hire, assess, and manage talent — powered by AI and the world&apos;s largest talent network.</p>
                    </div>
                </div>
            </section>

            {products.map((product, index) => (
                <section key={product.name} className={`section ${index % 2 === 1 ? 'section--gray' : ''}`}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)', alignItems: 'center' }}>
                            <div style={{ order: index % 2 === 1 ? 2 : 1 }}>
                                <div className="badge" style={{ marginBottom: 'var(--space-4)' }}>
                                    {product.name}
                                </div>
                                <h2 style={{ marginBottom: 'var(--space-3)' }}>{product.tagline}</h2>
                                <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)' }}>{product.description}</p>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
                                    {product.features.map((f) => (
                                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                                            <span style={{ color: product.color, fontWeight: 700 }}>→</span> {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={product.href} className="btn btn--primary btn--lg">
                                    Learn More
                                </Link>
                            </div>
                            <div style={{ order: index % 2 === 1 ? 1 : 2, display: 'flex', justifyContent: 'center' }}>
                                <div style={{ width: '100%', maxWidth: 460 }}>
                                    {productVisuals[product.name]}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <CTASection
                title="See the platform in action"
                description="Book a personalized demo and discover how Braintrust products can transform your hiring."
                primaryLabel="Book a Demo"
                primaryHref="/book-demo"
                secondaryLabel="View Pricing"
                secondaryHref="/pricing"
            />
        </>
    );
}
