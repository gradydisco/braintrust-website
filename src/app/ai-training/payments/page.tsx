import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'AI Training Payments — How You Get Paid',
    description: 'Learn about AI training payment rates, methods, schedules, and how Braintrust ensures you keep 100% of your earnings with zero platform fees.',
};

export default function AITrainingPayments() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'AI Training', href: '/ai-training' }, { label: 'Payments' }]} />
                    <div className="hero__content">
                        <div className="badge badge--accent">Payments</div>
                        <h1>Transparent. Fast.<br />Zero fees.</h1>
                        <p>Keep 100% of your earnings. Weekly payments. Multiple payout methods.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    <div className="grid grid--2" style={{ marginBottom: 'var(--space-16)' }}>
                        {[
                            { title: 'Weekly Payments', desc: 'Get paid every week for completed and approved work.' },
                            { title: 'Zero Fees', desc: 'Keep 100% of your earnings. No platform fees or deductions.' },
                            { title: 'Multiple Methods', desc: 'Direct deposit, PayPal, or wire transfer. Your choice.' },
                            { title: 'Competitive Rates', desc: '$25-75/hr depending on task complexity and domain expertise.' },
                        ].map((item) => (
                            <div key={item.title} className="card">
                                <h4 style={{ marginBottom: 'var(--space-2)' }}>{item.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
