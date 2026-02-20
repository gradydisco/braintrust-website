import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Contact Us — Get in Touch with Braintrust',
    description: 'Contact the Braintrust team. Reach out for sales inquiries, partnerships, support, or press inquiries.',
};

export default function Contact() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
                    <div className="hero__content">
                        <div className="badge">Contact</div>
                        <h1>Get in touch.</h1>
                        <p>We&apos;re here to help. Reach out to the right team below.</p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="grid grid--3">
                        {[
                            { title: 'Sales', desc: 'Ready to explore Braintrust for your company? Talk to our sales team.', email: 'sales@usebraintrust.com', cta: 'Book a Demo', href: '/book-demo' },
                            { title: 'Support', desc: 'Need help with your account or have technical questions?', email: 'support@usebraintrust.com', cta: 'Get Help', href: 'mailto:support@usebraintrust.com' },
                            { title: 'Partnerships', desc: 'Interested in partnering with Braintrust? Let\'s talk.', email: 'partnerships@usebraintrust.com', cta: 'Partner With Us', href: 'mailto:partnerships@usebraintrust.com' },
                        ].map((item) => (
                            <div key={item.title} className="card card--feature" style={{ textAlign: 'center' }}>
                                <h3 style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h3>
                                <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>{item.desc}</p>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-primary)', marginBottom: 'var(--space-6)' }}>{item.email}</p>
                                <a href={item.href} className="btn btn--primary" style={{ width: '100%' }}>{item.cta}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
