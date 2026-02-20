import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'BTRST Governance — Decentralized Network Governance',
    description: 'Learn how BTRST token holders govern the Braintrust network through on-chain voting, proposal creation, and community-driven decision making.',
};

export default function Governance() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'BTRST Token', href: '/token' }, { label: 'Governance' }]} />
                    <div className="hero__content">
                        <div className="badge badge--token">Governance</div>
                        <h1>Your network.<br /><span className="text-gradient-token">Your vote.</span></h1>
                        <p>Every BTRST holder can participate in governing the network — from fee structures to product priorities.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    <h2 style={{ marginBottom: 'var(--space-8)' }}>How Governance Works</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                        {[
                            { step: '01', title: 'Discuss', desc: 'Community members discuss ideas and improvements in public forums. Anyone can suggest a change.' },
                            { step: '02', title: 'Propose', desc: 'Formal proposals are created with specifications, rationale, and implementation plans.' },
                            { step: '03', title: 'Vote', desc: 'BTRST holders vote on proposals. Each token represents one vote. Voting is transparent and on-chain.' },
                            { step: '04', title: 'Implement', desc: 'Approved proposals are implemented by the core team or community contributors.' },
                        ].map((item) => (
                            <div key={item.step} style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'flex-start' }}>
                                <div style={{
                                    flexShrink: 0,
                                    width: 48,
                                    height: 48,
                                    borderRadius: 'var(--radius-lg)',
                                    background: 'rgba(139, 92, 246, 0.1)',
                                    color: 'var(--color-token)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 800,
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: 'var(--text-sm)',
                                }}>{item.step}</div>
                                <div>
                                    <h4 style={{ marginBottom: 'var(--space-2)' }}>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: 'var(--space-16)' }}>
                        <h2 style={{ marginBottom: 'var(--space-6)' }}>What Can Be Governed?</h2>
                        <div className="grid grid--2">
                            {[
                                { title: 'Fee Structures', desc: 'Community votes on marketplace fee models and revenue allocation.' },
                                { title: 'Product Priorities', desc: 'Token holders influence which features and products get built next.' },
                                { title: 'Treasury Allocation', desc: 'Community decides how network treasury funds are deployed.' },
                                { title: 'Protocol Upgrades', desc: 'Major network changes require community approval through governance.' },
                            ].map((item) => (
                                <div key={item.title} className="card">
                                    <h5>{item.title}</h5>
                                    <p style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--space-2)' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
