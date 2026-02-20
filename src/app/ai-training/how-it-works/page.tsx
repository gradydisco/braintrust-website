import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'How AI Training Works — Step-by-Step Guide',
    description: 'Learn how AI training works on Braintrust. Step-by-step guide to signing up, getting matched with tasks, completing work, and getting paid.',
};

export default function HowAITrainingWorks() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'AI Training', href: '/ai-training' }, { label: 'How It Works' }]} />
                    <div className="hero__content">
                        <div className="badge badge--accent">How It Works</div>
                        <h1>Getting started is simple.</h1>
                        <p>Four steps from signup to your first payment.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
                        {[
                            { step: '01', title: 'Create Your Profile', desc: 'Sign up and tell us about your background, domain expertise, and availability.' },
                            { step: '02', title: 'Complete Qualification', desc: 'Take a brief qualification assessment to match you with appropriate AI training tasks.' },
                            { step: '03', title: 'Start Working', desc: 'Get matched with tasks that fit your expertise. Work on your schedule, from anywhere.' },
                            { step: '04', title: 'Get Paid Weekly', desc: 'Review your completed work and receive payment weekly via direct deposit or PayPal.' },
                        ].map((item) => (
                            <div key={item.step} style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'flex-start' }}>
                                <div style={{
                                    flexShrink: 0,
                                    width: 56,
                                    height: 56,
                                    borderRadius: 'var(--radius-lg)',
                                    background: 'rgba(0, 212, 170, 0.1)',
                                    color: 'var(--color-accent-dark)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 800,
                                    fontFamily: 'var(--font-mono)',
                                }}>{item.step}</div>
                                <div>
                                    <h3 style={{ marginBottom: 'var(--space-2)' }}>{item.title}</h3>
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
