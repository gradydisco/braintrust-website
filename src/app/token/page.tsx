import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PriceChart from '@/components/PriceChart';
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
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-token)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 6v12" /><path d="M6 12h12" />
            </svg>
        ),
    },
    {
        title: 'Tokenomics',
        description: 'Explore BTRST supply, distribution, vesting schedules, and the economic model that drives the network.',
        href: '/token/tokenomics',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-token)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="12" width="4" height="8" rx="1" /><rect x="10" y="8" width="4" height="12" rx="1" /><rect x="17" y="4" width="4" height="16" rx="1" />
            </svg>
        ),
    },
    {
        title: 'Governance',
        description: 'Learn how BTRST holders participate in network decisions through decentralized governance.',
        href: '/token/governance',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-token)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-4h6v4" /><path d="M9 10h.01" /><path d="M15 10h.01" />
            </svg>
        ),
    },
    {
        title: 'Price',
        description: 'View current BTRST price, market data, and historical performance.',
        href: '/token/price',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-token)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
            </svg>
        ),
    },
    {
        title: 'FAQ',
        description: 'Common questions about the BTRST token, utilities, wallets, and participation.',
        href: '/token/faq',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-token)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" />
            </svg>
        ),
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

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>BTRST Price</h2>
                        <p>Live market data — 90 day view.</p>
                    </div>
                    <PriceChart />
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
                                <div style={{ marginBottom: 'var(--space-4)' }}>{page.icon}</div>
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
