import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login — Braintrust',
    description: 'Log in to your Braintrust account. Access the talent marketplace, manage your profile, or browse opportunities.',
};

export default function Login() {
    return (
        <section className="hero hero--centered" style={{ minHeight: '70vh' }}>
            <div className="container">
                <div className="hero__content">
                    <h1>Log in to Braintrust</h1>
                    <p style={{ marginBottom: 'var(--space-8)' }}>Choose your login destination below.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400, margin: '0 auto' }}>
                        <a href="https://app.usebraintrust.com" className="btn btn--primary btn--lg" style={{ width: '100%' }} rel="noopener noreferrer">
                            Talent Portal
                        </a>
                        <a href="https://app.usebraintrust.com/employer" className="btn btn--secondary btn--lg" style={{ width: '100%' }} rel="noopener noreferrer">
                            Company Portal
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
