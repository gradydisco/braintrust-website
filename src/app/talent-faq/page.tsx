import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
    title: 'Talent FAQ — Common Questions for Professionals',
    description: 'Frequently asked questions for talent on Braintrust. Learn about fees, getting started, payments, and how the talent network works.',
};

const faqItems = [
    { question: 'Is Braintrust really free for talent?', answer: 'Yes. Braintrust charges zero fees to talent. You keep 100% of your earnings — always. We charge a small fee to companies instead.' },
    { question: 'How do I get matched with jobs?', answer: 'Our AI analyzes your profile, skills, and preferences to match you with relevant opportunities. You can also browse and apply to roles directly.' },
    { question: 'What types of work is available?', answer: 'Full-time roles, contract work, and AI training tasks. Roles span engineering, design, product, data science, marketing, operations, and more.' },
    { question: 'How quickly can I start working?', answer: 'Many talent members receive their first match within days of joining. The timeline depends on your skills, availability, and market demand.' },
    { question: 'How do payments work?', answer: 'Payments are processed weekly via direct deposit, PayPal, or wire transfer. You set your own rate and terms.' },
    { question: 'What is the BTRST token?', answer: 'BTRST is the governance token of the Braintrust network. You can earn tokens by referring talent, vetting members, and contributing to network growth.' },
    { question: 'Can I work remotely?', answer: 'Most roles on Braintrust are remote-friendly. Some enterprise clients require hybrid or on-site work — this is always clearly specified in the job listing.' },
    { question: 'How is Braintrust different from Upwork or Toptal?', answer: 'Unlike Upwork (which charges 5-20% fees) and Toptal (which charges 40-60% markups), Braintrust charges zero fees to talent. The network is also community-governed through the BTRST token.' },
];

export default function TalentFAQ() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Talent FAQ' }]} />
                    <div className="hero__content">
                        <div className="badge badge--accent">FAQ</div>
                        <h1>Questions?<br />We&apos;ve got answers.</h1>
                        <p>Everything you need to know about working on Braintrust.</p>
                    </div>

                    {/* Testimonial-style avatar card */}
                    <div style={{
                        maxWidth: 480, margin: 'var(--space-8) auto 0',
                        background: 'var(--color-white)', borderRadius: 'var(--radius-xl)',
                        border: '1px solid var(--color-gray-100)', padding: 'var(--space-6)',
                        display: 'flex', alignItems: 'center', gap: 'var(--space-5)',
                        boxShadow: 'var(--shadow-md)',
                    }}>
                        <div style={{
                            width: 64, height: 64, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
                            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                        }}>
                            <img src="/images/talent_portrait_5.png" alt="Professional talent member"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div>
                            <p style={{ margin: 0, fontSize: 'var(--text-sm)', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                                &ldquo;I signed up on a Tuesday and had my first match by Thursday. Zero fees, real roles.&rdquo;
                            </p>
                            <p style={{ margin: '4px 0 0', fontSize: 12, fontWeight: 600, color: 'var(--text-tertiary)' }}>
                                — Marcus T., Senior Engineer
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container container--narrow">
                    <FAQ items={faqItems} schemaId="talent-faq" />
                </div>
            </section>
        </>
    );
}
