import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nexus Terms of Service | Braintrust',
    description: 'Terms of service for the Braintrust Nexus workflow automation platform.',
};

export default function NexusTermsOfService() {
    return (
        <section className="section" style={{ background: '#ffffff', minHeight: '100vh', paddingTop: '120px' }}>
            <div className="container container--narrow">
                <h1 style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '32px' }}>Nexus Terms of Service</h1>
                <p style={{ fontSize: '20px', color: '#666', lineHeight: 1.6, marginBottom: '64px' }}>
                    Effective Date: April 1, 2026<br />
                    Welcome to Braintrust Nexus. These terms govern your use of our automated workflow integration platform.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#1a1a1a', fontSize: '18px', lineHeight: 1.7 }}>
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>1. Acceptance of Terms</h2>
                        <p>By connecting your third-party integrations and establishing automated workflows via Nexus, you agree to these Terms of Service. If you do not agree to these terms, you may not use the Nexus service.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>2. Data Integration and Workflows</h2>
                        <p>Nexus acts as an automation bridge connecting tools you already use. By providing authentication credentials, you authorize Nexus to act on your behalf to process workflows and data as defined by the automation rules.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>3. Third-Party API Platforms</h2>
                        <p>Your use of integrations is also governed by the terms of the respective third-party provider (e.g., Salesforce, Slack, Lever, Google). Nexus makes available integrations in accordance with applicable third-party Developer Agreements.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Contact Us</h2>
                        <p>If you have any questions regarding these Terms of Service, please contact us at <a href="mailto:privacy@usebraintrust.com" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>privacy@usebraintrust.com</a>.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
