import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'BTRST Tokenomics — Supply, Distribution & Economic Model',
    description: 'Explore BTRST tokenomics: 250M fixed supply, distribution breakdown, vesting schedules, and the economic model powering the Braintrust network.',
};

const distribution = [
    { label: 'Community Rewards & Incentives', pct: 54, color: 'var(--color-primary)' },
    { label: 'Team & Advisors (4yr vesting)', pct: 19, color: 'var(--color-accent)' },
    { label: 'Early Backers (4yr vesting)', pct: 15, color: 'var(--color-token)' },
    { label: 'Foundation Reserve', pct: 7, color: 'var(--color-warning)' },
    { label: 'Ecosystem Development', pct: 5, color: 'var(--color-info)' },
];

export default function Tokenomics() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'BTRST Token', href: '/token' }, { label: 'Tokenomics' }]} />
                    <div className="hero__content">
                        <div className="badge badge--token">Tokenomics</div>
                        <h1>Transparent by design.</h1>
                        <p>A fixed supply of 250 million BTRST tokens, designed to reward contributors and govern the network sustainably.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    <div className="stats-grid" style={{ marginBottom: 'var(--space-16)' }}>
                        <div><div className="stat__value text-gradient-token">250M</div><div className="stat__label">Total Supply (Fixed)</div></div>
                        <div><div className="stat__value text-gradient-token">ERC-20</div><div className="stat__label">Token Standard</div></div>
                        <div><div className="stat__value text-gradient-token">Ethereum</div><div className="stat__label">Blockchain</div></div>
                    </div>

                    <h2 style={{ marginBottom: 'var(--space-8)' }}>Token Distribution</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-16)' }}>
                        {distribution.map((item) => (
                            <div key={item.label}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
                                    <span style={{ fontWeight: 600 }}>{item.label}</span>
                                    <span style={{ color: 'var(--text-secondary)' }}>{item.pct}%</span>
                                </div>
                                <div style={{
                                    height: 8,
                                    background: 'var(--color-gray-100)',
                                    borderRadius: 'var(--radius-full)',
                                    overflow: 'hidden',
                                }}>
                                    <div style={{
                                        width: `${item.pct}%`,
                                        height: '100%',
                                        background: item.color,
                                        borderRadius: 'var(--radius-full)',
                                        transition: 'width 1s ease',
                                    }}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 style={{ marginBottom: 'var(--space-6)' }}>Key Principles</h2>
                    <div className="grid grid--2">
                        {[
                            { title: 'Fixed Supply', desc: 'No new BTRST tokens can be minted. The total supply of 250M is permanent and immutable.' },
                            { title: 'Community-First', desc: '54% of all tokens are allocated to community rewards, making it the largest stakeholder group.' },
                            { title: 'Vesting Protection', desc: 'Team and early backer tokens vest over 4 years with cliffs, preventing dumps.' },
                            { title: 'Sustainable Growth', desc: 'The fee model converts client fees to BTRST rewards, creating sustainable incentive loops.' },
                        ].map((item) => (
                            <div key={item.title} className="card">
                                <h5>{item.title}</h5>
                                <p style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--space-2)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
