import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Nexus Privacy Policy | Braintrust',
    description: 'Braintrust Nexus Privacy Policy - Updated March 12, 2026',
};

export default function NexusPrivacyPolicy() {
    return (
        <section className="section" style={{ background: '#ffffff', minHeight: '100vh', paddingTop: '120px' }}>
            <div className="container container--narrow">
                <h1 style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', color: '#1a1a1a' }}>Braintrust Nexus Privacy Policy</h1>
                <p style={{ fontSize: '16px', color: '#666', marginBottom: '48px', fontWeight: 500 }}>Updated March 12, 2026</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#2a2a2a', fontSize: '16px', lineHeight: 1.8 }}>
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>1. Introduction</h2>
                        <p>This Privacy Policy outlines how Braintrust Nexus ("we," "our," or "us"), a product of Freelance Labs Inc. operating as Braintrust, collects, uses, discloses, and protects personal information when users ("you" or "your") access or use our AI-powered workflow automation platform and related services (collectively, the "Service").</p>
                        <p style={{ marginTop: '12px' }}>Braintrust Nexus builds custom AI agents and automated workflows that connect to the tools and services you already use — from recruiting and revenue operations to onboarding and customer service. The Service integrates with hundreds of third-party platforms via authenticated API connections to deliver its functionality.</p>
                        <p style={{ marginTop: '12px' }}>By using the Service, you consent to the practices described in this Privacy Policy.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>2. Information We Collect</h2>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '16px', marginBottom: '8px' }}>Customer & User Data</h3>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li><strong>Contact Information:</strong> Name, email address, and company name.</li>
                            <li><strong>Account Credentials:</strong> Username and password for accessing the Service, or authentication tokens when signing in via a supported identity provider.</li>
                            <li><strong>Professional Information:</strong> Job title, employer details, and workflow configuration preferences.</li>
                            <li><strong>Payment Information:</strong> Billing address and payment method details.</li>
                            <li><strong>Usage Data:</strong> Information about how you interact with the Service, such as IP addresses, browser types, access times, features used, and pages viewed.</li>
                        </ul>

                        <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '24px', marginBottom: '8px' }}>Workflow & Operational Data</h3>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li><strong>Workflow Configuration:</strong> The integrations, triggers, actions, and logic you define when building workflows in Nexus.</li>
                            <li><strong>Execution Logs:</strong> Records of workflow runs, including timestamps, success/failure status, and error details.</li>
                        </ul>

                        <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '24px', marginBottom: '8px' }}>Data from Connected Integrations</h3>
                        <p>When you authorize Nexus to connect with third-party services, we may access the following categories of information depending on the integration and permissions you grant:</p>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                            <li><strong>Authentication & Identity:</strong> Basic profile information (name, email address, profile photo) from identity providers for account creation and authentication.</li>
                            <li><strong>Calendar & Scheduling:</strong> Calendar availability and event time slots (free/busy status) from connected calendar services to coordinate scheduling within workflows.</li>
                            <li><strong>Email & Messaging:</strong> The ability to send messages on your behalf through connected email or messaging providers as part of automated workflows. We do not read, scan, or access the contents of your inbox or existing messages.</li>
                            <li><strong>CRM & Business Tools:</strong> Records and fields from connected CRM, ATS, or productivity tools that your workflows are configured to read or update.</li>
                            <li><strong>Integrated App Data:</strong> Data necessary to facilitate the specific workflow actions you've configured. This may include, but is not limited to, records from applicant tracking systems (ATS), customer relationship management (CRM) tools, communication platforms (e.g., Slack, Microsoft Teams), and human resources information systems (HRIS).</li>
                            <li><strong>Metadata from Integrations:</strong> Information about the structure, schema, and available objects within your connected third-party accounts.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>3. How We Use Your Information</h2>
                        <p>We use the collected information for the following purposes:</p>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                            <li><strong>Providing and Improving the Service:</strong> To operate, maintain, and enhance the Service's functionality, including AI-powered workflow automation, agent execution, and integration management.</li>
                            <li><strong>Authentication & Account Management:</strong> To manage user access via direct login or supported identity providers, prevent unauthorized access, and enforce security protocols.</li>
                            <li><strong>Workflow Execution:</strong> To execute the automated workflows you configure, including reading from and writing to connected third-party services on your behalf.</li>
                            <li><strong>Customer Support:</strong> To respond to your inquiries, provide technical assistance, and resolve issues related to the Service.</li>
                            <li><strong>Communications:</strong> To send technical notices, updates, security alerts, and administrative messages.</li>
                            <li><strong>Compliance & Security:</strong> To protect the rights, property, and safety of Braintrust and our users; to prevent fraud, abuse, and illegal activities; and to comply with applicable laws and regulations.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>4. Third-Party API Compliance</h2>
                        <p>Nexus uses authenticated API connections to interact with third-party services. We comply with the respective developer policies and privacy requirements of these platforms, including:</p>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                            <li><strong>Google API Disclosure:</strong> Nexus's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Google API Service User Data Policy</a>, including the Limited Use requirements.</li>
                            <li><strong>Slack & Microsoft Teams:</strong> When using Nexus with communication platforms, we only access data required to perform the specific automated actions (e.g., sending a message or creating a channel) as configured in your workflows.</li>
                            <li><strong>General API Compliance:</strong> We do not use data obtained through these third-party APIs for advertising purposes or to build general-purpose large language models (LLMs).</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>5. Data We Do Not Access Beyond Your Authorized Scopes</h2>
                        <p>Nexus strictly adheres to the principle of least privilege. We only request the minimum API scopes necessary for your configured workflows to function. We do not:</p>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                            <li>Access your data for independent marketing purposes.</li>
                            <li>Access sensitive personal data unless strictly required by the specific workflow you have authorized.</li>
                            <li>Scrape or crawl your connected accounts for data beyond the scope of defined triggers and actions.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>6. Sharing Your Information</h2>
                        <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                            <li><strong>Service Providers:</strong> With trusted third-party vendors who provide services like cloud hosting, payment processing, or customer support, subject to strict confidentiality agreements.</li>
                            <li><strong>Legal Requirements:</strong> If required by law, subpoena, or other legal process, or if we believe in good faith that disclosure is necessary to protect our rights or the safety of others.</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, provided the receiving party agrees to the terms of this Privacy Policy.</li>
                            <li><strong>With Your Consent:</strong> We may share information with third parties when you have explicitly authorized us to do so, such as through integration connections.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>7. Data Security</h2>
                        <p>We implement industry-standard security measures, including encryption of data in transit (TLS) and at rest (AES-256), to protect your information from unauthorized access, disclosure, or destruction. We regularly conduct security audits and vulnerability assessments.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>8. Data Retention</h2>
                        <p>We retain your personal information for as long as your account is active or as needed to provide the Service. You may request deletion of your account and associated data through the Service settings or by contacting us directly. We may retain certain data as required by law or for legitimate business purposes.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>9. Your Rights and Choices</h2>
                        <p>Depending on your location, you may have rights under applicable privacy laws (such as GDPR or CCPA), including:</p>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                            <li>The right to access, correct, or delete your personal data.</li>
                            <li>The right to object to or restrict processing.</li>
                            <li>The right to data portability.</li>
                            <li>The right to withdraw consent for data processing at any time.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>10. Children's Privacy</h2>
                        <p>The Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>11. Changes to This Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on the Service and updating the "Updated" date.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>12. Contact Us</h2>
                        <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:privacy@usebraintrust.com" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>privacy@usebraintrust.com</a>.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
