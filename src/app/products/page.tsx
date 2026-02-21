import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import NexusProductVisual from '@/components/NexusProductVisual';
import MarketplaceProductVisual from '@/components/MarketplaceProductVisual';
import AIRProductVisual from '@/components/AIRProductVisual';

export const metadata: Metadata = {
    title: 'Products — AI-Powered Talent & Recruiting Platform',
    description: 'Explore Braintrust products: Talent Marketplace for elite hiring, AIR for AI-powered recruiting, and Nexus for workflow automation. Built for the enterprise, powered by AI.',
};



const productVisuals: Record<string, React.ReactNode> = {
    'Talent Marketplace': <MarketplaceProductVisual />,
    'AIR | AI Recruiter': <AIRProductVisual />,
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
        tagline: 'Automate every process. Connect every system.',
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
