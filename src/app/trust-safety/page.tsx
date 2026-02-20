import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Trust & Safety — How Braintrust Protects You',
    description: 'Learn how Braintrust protects talent and companies with identity verification, dispute resolution, payment protection, and community standards.',
};

export default function TrustSafety() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Trust & Safety' }]} />
                    <div className="hero__content">
                        <div className="badge">Trust & Safety</div>
                        <h1>Your safety is<br /><span className="text-gradient">our priority.</span></h1>
                        <p>How we protect talent and companies on the Braintrust network.</p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="grid grid--2">
                        {[
                            { title: 'Identity Verification', desc: 'All talent and companies go through identity verification before joining the network.' },
                            { title: 'Payment Protection', desc: 'Escrow-based payment protection ensures talent gets paid for completed work.' },
                            { title: 'Dispute Resolution', desc: 'Fair, transparent dispute resolution process with dedicated support.' },
                            { title: 'Community Standards', desc: 'Clear code of conduct and community guidelines enforced across the network.' },
                            { title: 'Data Security', desc: 'SOC 2 Type II certified. Enterprise-grade encryption and access controls.' },
                            { title: 'Reporting Tools', desc: 'Easy-to-use tools for reporting issues, harassment, or policy violations.' },
                        ].map((item) => (
                            <div key={item.title} className="card card--feature">
                                <h4 style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
