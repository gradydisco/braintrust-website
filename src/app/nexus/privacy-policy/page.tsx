import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nexus Data Privacy Policy | Braintrust',
    description: 'Learn how Nexus handles and protects your data across every integration.',
};

export default function NexusPrivacyPolicy() {
    return (
        <section className="section" style={{ background: '#ffffff', minHeight: '100vh', paddingTop: '120px' }}>
            <div className="container container--narrow">
                <h1 style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '32px' }}>Nexus Data Privacy Policy</h1>
                <p style={{ fontSize: '20px', color: '#666', lineHeight: 1.6, marginBottom: '64px' }}>
                    Effective Date: April 1, 2026<br />
                    At Braintrust, we are committed to being transparent about how Nexus handles your data across every integration.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#1a1a1a', fontSize: '18px', lineHeight: 1.7 }}>
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>1. Information We Collect</h2>
                        <p>We only request the minimum permissions needed for your workflows to function. Depending on the integrations you enable, this may include basic profile information, calendar availability, or specific fields from connected CRM and ATS systems.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>2. How We Use Your Information</h2>
                        <p>Your data is used exclusively to execute the automated workflows you have configured. We never sell, transfer, or use your data for advertising purposes.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>3. Third-Party API Compliance</h2>
                        <p>Nexus's use and transfer of information received from third-party APIs adheres to each provider's data policies and terms of service. Where providers mandate specific data use restrictions — such as the Google API Services User Data Policy including Limited Use requirements — Nexus fully complies.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>4. Data Access and Revocation</h2>
                        <p>We never allow humans to read your data unless you give explicit consent. You can disconnect any integration and revoke access at any time through your Nexus dashboard settings.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:privacy@usebraintrust.com" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>privacy@usebraintrust.com</a>.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
