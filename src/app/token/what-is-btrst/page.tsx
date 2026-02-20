import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'What is BTRST? — The Utility Token Explained',
    description: 'BTRST is the ERC-20 utility token that powers decentralized governance, network incentives, and community ownership on the Braintrust network.',
};

export default function WhatIsBTRST() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'BTRST Token', href: '/token' }, { label: 'What is BTRST?' }]} />
                    <div className="hero__content">
                        <div className="badge badge--token">What is BTRST?</div>
                        <h1>The utility token<br /><span className="text-gradient-token">powering the network.</span></h1>
                        <p>BTRST is an ERC-20 token on Ethereum that gives the Braintrust community governance power and aligns incentives across the ecosystem.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    <h2 style={{ marginBottom: 'var(--space-6)' }}>Understanding BTRST</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                        <div>
                            <h3 style={{ marginBottom: 'var(--space-3)' }}>What BTRST Does</h3>
                            <p style={{ fontSize: 'var(--text-lg)' }}>BTRST is a utility token — it serves a functional purpose within the Braintrust network. Token holders can participate in governance votes, earn tokens for contributing to network growth, and use tokens to access premium features.</p>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: 'var(--space-3)' }}>How It Works</h3>
                            <p style={{ fontSize: 'var(--text-lg)' }}>When companies pay fees on Braintrust, those fees are converted to BTRST and used to reward network contributors — talent who refer clients, community members who vet new talent, and node operators who run network infrastructure.</p>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: 'var(--space-3)' }}>Why Decentralization Matters</h3>
                            <p style={{ fontSize: 'var(--text-lg)' }}>Traditional talent platforms charge 40-60% markups and make decisions in boardrooms. Braintrust is governed by its users. Every major network decision — from fee structures to product priorities — is voted on by BTRST holders.</p>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: 'var(--space-3)' }}>Token Utility Summary</h3>
                            <div className="grid grid--2" style={{ marginTop: 'var(--space-4)' }}>
                                {[
                                    { title: 'Governance', desc: 'Vote on network proposals and protocol upgrades.' },
                                    { title: 'Incentives', desc: 'Earn BTRST for referrals, vetting, and contributions.' },
                                    { title: 'Staking', desc: 'Stake tokens to signal reputation and commitment.' },
                                    { title: 'Access', desc: 'Unlock premium network features and priority support.' },
                                ].map((item) => (
                                    <div key={item.title} className="card">
                                        <h5>{item.title}</h5>
                                        <p style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--space-2)' }}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
