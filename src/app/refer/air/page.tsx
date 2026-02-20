import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RevealSection from '@/components/RevealSection';

export const metadata: Metadata = {
    title: 'Refer & Earn — AIR AI Recruiter | Braintrust',
    description: 'Earn rewards by referring clients to Braintrust AIR. Sign up for the marketplace, leave a G2 review, share on LinkedIn, or refer a client.',
};

const actions = [
    {
        priority: 'primary',
        title: 'Sign Up for the Marketplace',
        description: 'Join 2M+ professionals on Braintrust. Access high-paying roles at Fortune 500 companies with zero platform fees.',
        cta: 'Create Free Account',
        href: 'https://app.usebraintrust.com/talent/signup',
        icon: '🚀',
        highlight: true,
    },
    {
        priority: 'secondary',
        title: 'Write a G2 Review',
        description: 'Share your experience with AIR on G2. Your review helps enterprises discover AI-powered recruiting and earns you recognition in the community.',
        cta: 'Leave a Review on G2',
        href: 'https://www.g2.com/products/braintrust/reviews',
        icon: '⭐',
        highlight: false,
    },
    {
        priority: 'tertiary',
        title: 'Share on LinkedIn',
        description: 'Post about your experience with Braintrust or AIR on LinkedIn. Tag @Braintrust to be featured in our community highlights.',
        cta: 'Share on LinkedIn',
        href: 'https://www.linkedin.com/company/usebraintrust/',
        icon: '💼',
        highlight: false,
    },
    {
        priority: 'quaternary',
        title: 'Refer a Client',
        description: 'Know a company that could benefit from AI-powered recruiting? Refer them to AIR and earn referral rewards when they onboard.',
        cta: 'Refer a Client',
        href: '/contact?ref=air-referral',
        icon: '🤝',
        highlight: false,
    },
];

export default function ReferEarnAIR() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Products', href: '/products' },
                        { label: 'AIR', href: '/products/air' },
                        { label: 'Refer & Earn' },
                    ]} />
                    <div className="hero__content">
                        <div className="badge">Refer &amp; Earn</div>
                        <h1>Share AIR.<br /><span className="text-gradient">Earn rewards.</span></h1>
                        <p>Help more companies discover AI-powered recruiting. Four ways to participate and earn.</p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                        {actions.map((action, i) => (
                            <RevealSection key={action.title} delay={i * 100}>
                                <div
                                    style={{
                                        padding: action.highlight ? 'var(--space-10)' : 'var(--space-8)',
                                        borderRadius: 'var(--radius-xl)',
                                        border: `1.5px solid ${action.highlight ? 'var(--color-primary)' : 'var(--color-gray-100)'}`,
                                        background: action.highlight
                                            ? 'linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-white) 100%)'
                                            : 'var(--color-white)',
                                        boxShadow: action.highlight ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                                        position: 'relative',
                                    }}
                                >
                                    {action.highlight && (
                                        <span style={{
                                            position: 'absolute',
                                            top: '-10px',
                                            left: 'var(--space-6)',
                                            padding: '4px 12px',
                                            borderRadius: 'var(--radius-full)',
                                            background: 'var(--color-primary)',
                                            color: 'white',
                                            fontSize: '11px',
                                            fontWeight: 700,
                                            letterSpacing: '0.05em',
                                            textTransform: 'uppercase',
                                        }}>
                                            Most Popular
                                        </span>
                                    )}
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)' }}>
                                        <div style={{
                                            fontSize: 'var(--text-3xl)',
                                            lineHeight: 1,
                                            flexShrink: 0,
                                        }}>
                                            {action.icon}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>{action.title}</h3>
                                            <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>{action.description}</p>
                                            <a
                                                href={action.href}
                                                target={action.href.startsWith('http') ? '_blank' : undefined}
                                                rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className={`btn ${action.highlight ? 'btn--primary' : 'btn--secondary'}`}
                                            >
                                                {action.cta}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="cta-section">
                        <h2>Questions about the referral program?</h2>
                        <p>Reach out to our team — we&apos;re happy to help.</p>
                        <Link href="/contact" className="btn btn--white btn--lg">Contact Us</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
