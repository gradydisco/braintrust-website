import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import NexusProductVisual from '@/components/NexusProductVisual';
import MarketplaceProductVisual from '@/components/MarketplaceProductVisual';

export const metadata: Metadata = {
    title: 'Products — AI-Powered Talent & Recruiting Platform',
    description: 'Explore Braintrust products: Talent Marketplace for elite hiring, AIR for AI-powered recruiting, and Nexus for workflow automation. Built for the enterprise, powered by AI.',
};



function AIRVisual() {
    const criteria = [
        { score: '4.0', label: 'Design consistency across platforms', color: '#eab308' },
        { score: '4.0', label: 'Past project with success criteria', color: '#a78bfa' },
        { score: '4.0', label: 'User research & testing experience', color: '#34d399' },
    ];

    return (
        <div style={{
            background: '#fff',
            borderRadius: 'var(--radius-2xl)',
            padding: '20px',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}>
            {/* Video interview section */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                {/* Video thumbnail */}
                <div style={{
                    background: '#1e293b',
                    borderRadius: '10px',
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '120px',
                }}>
                    <div>
                        <div style={{ fontSize: '7px', color: '#94a3b8', marginBottom: '2px' }}>Sr. Software Engineer · Data Engineering</div>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff' }}>Jake Smithers</div>
                    </div>
                    {/* Play button */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <div style={{
                            width: '28px', height: '28px', borderRadius: '50%',
                            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21" /></svg>
                        </div>
                    </div>
                    {/* Timeline bar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: 'rgba(255,255,255,0.15)' }}>
                            <div style={{ height: '100%', width: '15%', borderRadius: '2px', background: '#fff' }} />
                        </div>
                        <span style={{ fontSize: '7px', color: '#94a3b8' }}>0:14</span>
                    </div>
                </div>

                {/* Transcript */}
                <div style={{
                    background: '#fafafa',
                    borderRadius: '10px',
                    padding: '12px',
                    overflow: 'hidden',
                }}>
                    <div style={{ fontSize: '10px', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>Transcript</div>
                    <div style={{ marginBottom: '6px' }}>
                        <div style={{ fontSize: '7px', fontWeight: 700, color: '#1e293b', marginBottom: '2px' }}>Jake Smithers</div>
                        <div style={{ fontSize: '7px', color: '#64748b', lineHeight: '1.5' }}>We kicked things off by diving deep into user research. We wanted to understand exactly what our users needed...</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '7px', fontWeight: 700, color: '#f59e0b', marginBottom: '2px' }}>AIR</div>
                        <div style={{ fontSize: '7px', color: '#64748b', lineHeight: '1.5' }}>Once we had a solid understanding of our users, I worked closely with the UX designers to translate those insights...</div>
                    </div>
                </div>
            </div>

            {/* Summary section */}
            <div style={{
                borderTop: '1px solid rgba(0,0,0,0.06)',
                paddingTop: '14px',
            }}>
                <div style={{ fontSize: '9px', color: '#94a3b8', fontWeight: 600, marginBottom: '4px' }}>Summary</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '8px', color: '#eab308' }}>✦</span>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: '#1e293b' }}>3.8</span>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: '#64748b' }}>AI Interview score</span>
                </div>
                <div style={{ fontSize: '7px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '12px' }}>
                    Overall, the candidate has demonstrated strong product design experience, with a focus on user-centered design and an understanding of design consistency across platforms.
                </div>

                {/* Grading criteria */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '8px', color: '#eab308' }}>✦</span>
                    <span style={{ fontSize: '9px', fontWeight: 700, color: '#1e293b' }}>Grading criteria</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {criteria.map(c => (
                        <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{
                                width: '24px', height: '24px', borderRadius: '6px',
                                background: `${c.color}18`, display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                fontSize: '9px', fontWeight: 800, color: c.color,
                                flexShrink: 0,
                            }}>{c.score}</div>
                            <div style={{ fontSize: '8px', fontWeight: 600, color: '#1e293b', lineHeight: '1.3' }}>{c.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const productVisuals: Record<string, React.ReactNode> = {
    'Talent Marketplace': <MarketplaceProductVisual />,
    'AIR | AI Recruiter': <AIRVisual />,
    'Nexus': <NexusProductVisual />,
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
