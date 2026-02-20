import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RevealSection from '@/components/RevealSection';

export const metadata: Metadata = {
    title: 'Refer & Earn — Talent Marketplace | Braintrust',
    description: 'Refer clients to the Braintrust Talent Marketplace and earn BTRST token rewards. Help companies discover zero-fee enterprise hiring.',
};

const tiers = [
    {
        label: 'Refer a Client',
        reward: '500 BTRST',
        desc: 'When your referred client signs their first contract on the Braintrust Talent Marketplace.',
        details: [
            'Referral tracked via unique link',
            'Payout after client\'s first milestone',
            'No limit on referrals',
        ],
    },
    {
        label: 'Refer a Talent',
        reward: '100 BTRST',
        desc: 'When the professional you referred completes their first engagement.',
        details: [
            'Both you and the referred talent earn',
            'Referral credited automatically',
            'Available worldwide',
        ],
    },
    {
        label: 'Community Contributor',
        reward: '50 BTRST',
        desc: 'Earn for governance participation, community contributions, and ecosystem development.',
        details: [
            'Governance voting participation',
            'Community mentorship',
            'Content contributions',
        ],
    },
];

export default function ReferEarnMarketplace() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Talent Marketplace', href: '/products/talent-marketplace' },
                        { label: 'Refer & Earn' },
                    ]} />
                    <div className="hero__content">
                        <div className="badge">Refer &amp; Earn</div>
                        <h1>Grow the network.<br /><span className="text-gradient">Earn rewards.</span></h1>
                        <p>Refer clients and talent to the Braintrust Marketplace. Earn BTRST for every successful onboarding.</p>
                        <div className="hero__actions">
                            <a href="https://app.usebraintrust.com/talent/signup" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">Start Referring</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container container--narrow">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">How It Works</div>
                            <h2>Three steps to earn</h2>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: 'var(--space-6)',
                            marginTop: 'var(--space-8)',
                        }}>
                            {[
                                { step: '01', title: 'Share your link', desc: 'Get a unique referral link from your dashboard. Share it with companies or talent you know.' },
                                { step: '02', title: 'They sign up', desc: 'When your referral joins the marketplace and starts their first engagement, your reward is triggered.' },
                                { step: '03', title: 'Earn BTRST', desc: 'Rewards are deposited directly to your wallet. Use BTRST for governance, staking, or exchange.' },
                            ].map((item) => (
                                <div key={item.step} style={{ textAlign: 'center' }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        background: 'var(--color-primary-50)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto var(--space-4)',
                                        fontWeight: 800,
                                        fontSize: 'var(--text-sm)',
                                        color: 'var(--color-primary)',
                                    }}>
                                        {item.step}
                                    </div>
                                    <h4 style={{ marginBottom: 'var(--space-2)' }}>{item.title}</h4>
                                    <p style={{ fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* Reward Tiers */}
            <section className="section section--gray">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Rewards</div>
                            <h2>Incentive structure</h2>
                            <p>Transparent, predictable rewards for growing the Braintrust ecosystem.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                            {tiers.map((tier) => (
                                <div
                                    key={tier.label}
                                    className="card"
                                    style={{ padding: 'var(--space-8)' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                                        <h3 style={{ fontSize: 'var(--text-xl)' }}>{tier.label}</h3>
                                        <span style={{
                                            padding: '6px 16px',
                                            borderRadius: 'var(--radius-full)',
                                            background: 'var(--color-primary-50)',
                                            color: 'var(--color-primary-dark)',
                                            fontWeight: 700,
                                            fontSize: 'var(--text-sm)',
                                        }}>
                                            {tier.reward}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>{tier.desc}</p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                                        {tier.details.map((detail) => (
                                            <div key={detail} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                                                <span style={{ color: 'var(--color-teal)', fontWeight: 700 }}>✓</span>
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* Important Note */}
            <section className="section">
                <div className="container container--narrow">
                    <RevealSection>
                        <div style={{
                            padding: 'var(--space-6)',
                            borderRadius: 'var(--radius-lg)',
                            background: 'var(--color-gray-50)',
                            border: '1px solid var(--color-gray-100)',
                        }}>
                            <h4 style={{ marginBottom: 'var(--space-2)' }}>About BTRST Tokens</h4>
                            <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>
                                BTRST is the governance token of the Braintrust network. Token rewards are used for governance participation, community voting, and ecosystem development. Braintrust does not promote BTRST as a speculative investment.{' '}
                                <Link href="/token/what-is-btrst" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Learn more about BTRST →</Link>
                            </p>
                        </div>
                    </RevealSection>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="cta-section">
                        <h2>Ready to start referring?</h2>
                        <p>Create your account and get your unique referral link today.</p>
                        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://app.usebraintrust.com/talent/signup" target="_blank" rel="noopener noreferrer" className="btn btn--white btn--lg">Create Account</a>
                            <Link href="/contact" className="btn btn--secondary btn--lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                                Ask a Question
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
