import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Enterprise Hiring Solutions — Braintrust',
    description: 'End-to-end enterprise hiring solutions with AI-powered matching, SOC 2 compliance, dedicated account management, and custom SLAs for Fortune 1000 companies.',
};

const faqItems = [
    { question: 'What makes Braintrust enterprise-ready?', answer: 'SOC 2 Type II certification, enterprise SSO, dedicated CSMs, custom SLAs, automated compliance workflows, and background checking built into the platform.' },
    { question: 'How does enterprise onboarding work?', answer: 'Dedicated implementation team, custom integration setup, procurement-friendly billing, and go-live in under 30 days.' },
];

export default function EnterpriseHiring() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }, { label: 'Enterprise Hiring' }]} />
                    <div className="hero__content">
                        <div className="badge">Enterprise</div>
                        <h1>Built for the<br /><span className="text-gradient">Fortune 1000.</span></h1>
                        <p>Enterprise-grade hiring infrastructure with AI matching, compliance, and dedicated support — at a fraction of traditional costs.</p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="grid grid--3">
                        {[
                            { title: 'SOC 2 Type II', desc: 'Independently audited security controls meeting enterprise requirements.' },
                            { title: 'Enterprise SSO', desc: 'SAML-based single sign-on with your identity provider.' },
                            { title: 'Dedicated CSM', desc: 'Named customer success manager for personalized support.' },
                            { title: 'Custom SLAs', desc: 'Tailored service level agreements for response times and uptime.' },
                            { title: 'Compliance Automation', desc: 'Automated background checks, I-9 verification, and EEO tracking.' },
                            { title: 'Procurement-Ready', desc: 'Standard MSA, DPAs, and procurement-friendly billing.' },
                        ].map((item) => (
                            <div key={item.title} className="card card--feature">
                                <h4 style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section section--gray">
                <div className="container container--narrow">
                    <div className="section-header"><h2>FAQ</h2></div>
                    <FAQ items={faqItems} schemaId="enterprise" />
                </div>
            </section>
            <CTASection title="Ready for enterprise?" description="Talk to our enterprise team about your hiring needs." primaryLabel="Contact Sales" primaryHref="/book-demo" />
        </>
    );
}
