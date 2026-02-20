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
    const agents = [
        { name: 'Revenue Ops', tasks: 4, color: '#6366f1', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6" /></svg> },
        { name: 'Onboarding', tasks: 3, color: '#22c55e', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg> },
        { name: 'Support', tasks: 6, color: '#f59e0b', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg> },
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
                <div style={{
                    fontSize: '9px', fontWeight: 700, color: '#eab308',
                    display: 'flex', alignItems: 'center', gap: '4px',
                }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                    3 AGENTS ACTIVE
                </div>
            </div>

            {/* AI Agent lanes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
                {agents.map(a => (
                    <div key={a.name} style={{
                        background: 'white',
                        borderRadius: '12px',
                        padding: '14px 16px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                        border: '1px solid rgba(0,0,0,0.04)',
                        display: 'flex', alignItems: 'center', gap: '12px',
                    }}>
                        <div style={{
                            width: '32px', height: '32px', borderRadius: '8px',
                            background: `${a.color}12`, display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                        }}>{a.icon}</div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '11px', fontWeight: 600, color: '#1e293b' }}>{a.name}</div>
                            <div style={{ fontSize: '9px', color: '#94a3b8' }}>{a.tasks} tasks running</div>
                        </div>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '4px',
                        }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
                            <span style={{ fontSize: '9px', fontWeight: 600, color: '#22c55e' }}>Active</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Automation stats */}
            <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '12px', border: '1px solid rgba(0,0,0,0.04)' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#1e293b' }}>84%</div>
                    <div style={{ fontSize: '9px', color: '#94a3b8' }}>Ops automated</div>
                </div>
                <div style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '12px', border: '1px solid rgba(0,0,0,0.04)' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#22c55e' }}>12K+</div>
                    <div style={{ fontSize: '9px', color: '#94a3b8' }}>Tasks / month</div>
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
        tagline: 'Automate the grind. Amplify the impact.',
        description: 'Custom AI agents that handle the repetitive, manual, operational work — from revenue ops to onboarding to customer service. Automate what\'s draining your budget and slowing you down.',
        href: '/products/nexus',
        color: 'var(--color-token)',
        features: [
            'Custom AI agents for your unique processes',
            'Revenue ops, onboarding & support automation',
            'Reimagines operations from the ground up',
            'Scale without ballooning headcount',
            'Works across your entire tool stack',
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
