import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'About Braintrust — The AI-Powered Talent Network',
    description: 'Learn about Braintrust, the AI-powered talent network. Founded in 2018, we connect 2M+ professionals with Fortune 2000 companies — powered by AI recruiting, workflow automation, and human data infrastructure.',
};

export default function About() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
                    <div className="hero__content">
                        <div className="badge">About</div>
                        <h1>Returning value to<br /><span className="text-gradient">those who create it.</span></h1>
                        <p>Braintrust is an AI-powered talent network — connecting top professionals with leading companies while eliminating middlemen and their fees.</p>
                    </div>
                </div>
            </section>

            {/* Stat Strip */}
            <section className="section section--dark">
                <div className="container">
                    <div className="stats-grid">
                        <div><div className="stat__value text-gradient">2018</div><div className="stat__label">Founded</div></div>
                        <div><div className="stat__value text-gradient">2M+</div><div className="stat__label">Network Members</div></div>
                        <div><div className="stat__value text-gradient">100+</div><div className="stat__label">Enterprise &amp; Fortune 2000 Customers</div></div>
                        <div><div className="stat__value text-gradient">100+</div><div className="stat__label">Countries</div></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
                        <div>
                            <h2 style={{ marginBottom: 'var(--space-4)' }}>Our Mission</h2>
                            <p style={{ fontSize: 'var(--text-lg)' }}>
                                Traditional talent platforms charge 40–60% markups, extract value from both sides, and make decisions behind closed doors. We built Braintrust to be different — a network that eliminates the middleman so talent keeps more and companies get better talent at lower cost.
                            </p>
                        </div>
                        <div>
                            <h2 style={{ marginBottom: 'var(--space-4)' }}>How We&apos;re Different</h2>
                            <p style={{ fontSize: 'var(--text-lg)' }}>
                                Braintrust is the only talent platform that charges zero fees to talent, uses AI to match professionals with opportunities at unprecedented speed and accuracy, and provides enterprise-grade recruiting automation and human data infrastructure.
                            </p>
                        </div>
                        <div>
                            <h2 style={{ marginBottom: 'var(--space-4)' }}>What We Do</h2>
                            <p style={{ fontSize: 'var(--text-lg)' }}>
                                We operate three integrated product lines: the <strong>Talent Marketplace</strong> connecting companies with 2M+ vetted professionals, <strong>AIR (AI Recruiter)</strong> for conversational voice interviews and AI-powered assessments, and <strong>Nexus</strong> for workflow automation with 100+ pre-built integrations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Join the movement"
                description="Whether you're a company looking for talent or a professional looking for opportunity, Braintrust is for you."
                primaryLabel="For Companies"
                primaryHref="/for-companies"
                secondaryLabel="For Talent"
                secondaryHref="/for-talent"
            />
        </>
    );
}
