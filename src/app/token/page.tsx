import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'BTRST Token — The Utility Token Powering Braintrust',
    description: 'Learn about BTRST, the utility token that powers the Braintrust network. Understand tokenomics, governance, and how the token creates value in the ecosystem.',
};

const tokenPages = [
    {
        title: 'What is BTRST?',
        description: 'Understand the utility token that powers community governance, incentivizes network growth, and aligns stakeholder interests.',
        href: '/token/what-is-btrst',
        icon: '🔵',
    },
    {
        title: 'Tokenomics',
        description: 'Explore BTRST supply, distribution, vesting schedules, and the economic model that drives the network.',
        href: '/token/tokenomics',
        icon: '📊',
    },
    {
        title: 'Governance',
        description: 'Learn how BTRST holders participate in network decisions through decentralized governance.',
        href: '/token/governance',
        icon: '🏛️',
    },
    {
        title: 'Price',
        description: 'View current BTRST price, market data, and historical performance.',
        href: '/token/price',
        icon: '📈',
    },
    {
        title: 'FAQ',
        description: 'Common questions about the BTRST token, utilities, wallets, and participation.',
        href: '/token/faq',
        icon: '❓',
    },
];

export default function Token() {
    return (
        <>
            <section className={`hero hero--centered ${styles.hero}`}>
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'BTRST Token' }]} />
                    <div className="hero__content">
                        <div className="badge badge--token">BTRST Token</div>
                        <h1>Community-powered.<br /><span className="text-gradient-token">Token-governed.</span></h1>
                        <p>BTRST is the utility token that powers decentralized governance, incentivizes network growth, and gives the community ownership of the Braintrust platform.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="stats-grid">
                        <div><div className="stat__value text-gradient-token">750K+</div><div className="stat__label">Token Holders</div></div>
                        <div><div className="stat__value text-gradient-token">250M</div><div className="stat__label">Total Supply</div></div>
                        <div><div className="stat__value text-gradient-token">100%</div><div className="stat__label">Community Governed</div></div>
                        <div><div className="stat__value text-gradient-token">ERC-20</div><div className="stat__label">Token Standard</div></div>
                    </div>
                </div>
            </section>

            <section className="section section--gray">
                <div className="container">
                    <div className="section-header">
                        <h2>Explore BTRST</h2>
                        <p>Everything you need to understand the token, its utility, and how it powers the network.</p>
                    </div>
                    <div className="grid grid--3">
                        {tokenPages.map((page) => (
                            <Link key={page.href} href={page.href} className="card card--feature">
                                <div style={{ fontSize: '2rem', marginBottom: 'var(--space-4)' }}>{page.icon}</div>
                                <h4>{page.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{page.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    <div style={{
                        padding: 'var(--space-8)',
                        background: 'var(--color-gray-50)',
                        borderRadius: 'var(--radius-xl)',
                        border: '1px solid var(--color-gray-100)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
                        lineHeight: 'var(--leading-relaxed)',
                    }}>
                        <strong style={{ color: 'var(--text-primary)' }}>Disclaimer:</strong> BTRST is a utility token used for governance and incentivizing participation in the Braintrust network. It is not an investment contract, security, or financial instrument. The information on this page is for informational purposes only and does not constitute financial advice. Please review our <Link href="/terms" style={{ color: 'var(--color-primary)' }}>Terms of Service</Link> for complete details.
                    </div>
                </div>
            </section>
        </>
    );
}
