import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'How It Works — Join the Braintrust Talent Network',
    description: 'Learn how Braintrust works for talent: create a profile, get AI-matched with roles, work directly with companies, and keep 100% of your earnings.',
};

export default function HowItWorks() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'How It Works' }]} />
                    <div className="hero__content">
                        <div className="badge badge--accent">How It Works</div>
                        <h1>From signup to<br /><span className="text-gradient">your first gig.</span></h1>
                        <p>Join the network, get matched with roles, and start working — all in days, not weeks.</p>
                        <div className="hero__actions">
                            <Link href="/login" className="btn btn--primary btn--lg">Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
                        {[
                            { step: '1', title: 'Create Your Profile', desc: 'Tell us about your skills, experience, and what you\'re looking for. Our AI learns your preferences and optimizes your visibility to the right companies.' },
                            { step: '2', title: 'Get Matched', desc: 'Our AI matches you with roles that fit your skills, experience level, and preferences. No searching through job boards — opportunities come to you.' },
                            { step: '3', title: 'Interview Directly', desc: 'Connect directly with hiring managers. No recruiters, no staffing agencies, no middlemen. You negotiate your own terms.' },
                            { step: '4', title: 'Work & Earn', desc: 'Start working and keep 100% of your earnings. Braintrust charges zero fees to talent — ever.' },
                        ].map((item) => (
                            <div key={item.step} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 'var(--space-6)' }}>
                                <div style={{
                                    width: 64,
                                    height: 64,
                                    borderRadius: '50%',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 'var(--text-2xl)',
                                    fontWeight: 800,
                                }}>{item.step}</div>
                                <div>
                                    <h3 style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h3>
                                    <p style={{ fontSize: 'var(--text-lg)' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
