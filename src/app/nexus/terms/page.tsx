import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nexus Terms of Service | Braintrust',
    description: 'Braintrust Nexus Terms of Service - Updated March 12, 2026',
};

export default function NexusTermsOfService() {
    return (
        <section className="section" style={{ background: '#ffffff', minHeight: '100vh', paddingTop: '120px' }}>
            <div className="container container--narrow">
                <h1 style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', color: '#1a1a1a' }}>Braintrust Nexus Terms of Service</h1>
                <p style={{ fontSize: '16px', color: '#666', marginBottom: '48px', fontWeight: 500 }}>Updated March 12, 2026</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#2a2a2a', fontSize: '16px', lineHeight: 1.8 }}>
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>1. Acceptance of Terms</h2>
                        <p>These Terms of Service ("Terms") govern your access to and use of Braintrust Nexus (the "Service"), an AI-powered workflow automation platform operated by Freelance Labs Inc. d/b/a Braintrust ("Braintrust," "we," "our," or "us").</p>
                        <p style={{ marginTop: '12px' }}>By accessing or using the Service, you agree to be bound by these Terms. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms. If you do not agree to these Terms, do not use the Service.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>2. Description of Service</h2>
                        <p>Braintrust Nexus builds custom AI agents and automated workflows that connect to the tools and services you already use. The Service includes:</p>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                            <li>AI-powered workflow automation and agent execution.</li>
                            <li>Integration with third-party tools and platforms (ATS, CRM, HRIS, etc.).</li>
                            <li>Access to the Nexus dashboard for workflow management and monitoring.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>3. Account Registration and Security</h2>
                        <p>To use the Service, you must create an account. You are responsible for:</p>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                            <li>Providing accurate and complete information during registration.</li>
                            <li>Maintaining the security and confidentiality of your login credentials.</li>
                            <li>All activities that occur under your account.</li>
                        </ul>
                        <p style={{ marginTop: '12px' }}>You must notify us immediately of any unauthorized use of your account or security breach.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>4. Permitted Use</h2>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li><strong>Compliance with Laws:</strong> You agree to use the Service only for lawful purposes and in compliance with all applicable local, state, national, and international laws.</li>
                            <li><strong>Prohibited Activities:</strong> You shall not:
                                <ul style={{ paddingLeft: '24px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <li>Modify, reverse engineer, or attempt to extract the source code of the Service.</li>
                                    <li>Use the Service to transmit any unauthorized advertising, spam, or malicious software.</li>
                                    <li>Attempt to interfere with or disrupt the integrity or performance of the Service.</li>
                                    <li>Use the Service to process sensitive personal data (e.g., health records, social security numbers) unless specifically authorized by Braintrust for a defined use case.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>5. Third-Party Integrations</h2>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li><strong>Authorization:</strong> By connecting third-party services to Nexus, you authorize us to access and interact with those services on your behalf to perform the specific automated actions you configure.</li>
                            <li><strong>Responsibility for Third-Party Content:</strong> Braintrust does not control the content or APIs of third-party services. Your use of such services is governed by the respective third-party terms and policies.</li>
                            <li><strong>No Responsibility for API Changes:</strong> Braintrust is not responsible for any issues arising from changes to third-party APIs that may impact the functionality of your workflows.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>6. Workflow Configuration and Responsibilities</h2>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li><strong>Your Data:</strong> You retain all rights to the data you process through the Service. You grant Braintrust a limited license to use your data solely as necessary to provide and maintain the Service.</li>
                            <li><strong>Accuracy of Workflows:</strong> You are responsible for the logic and accuracy of the workflows you build or configure within Nexus. Braintrust is not liable for errors in workflow execution caused by user configuration.</li>
                            <li><strong>Compliance with Third-Party Terms:</strong> You are responsible for ensuring that your workflows comply with the terms of service of any third-party platforms you connect to Nexus.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>7. Fees and Payment</h2>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li><strong>Subscription Fees:</strong> Certain features of the Service require payment of subscription fees. Fees are non-refundable except as required by law.</li>
                            <li><strong>Billing:</strong> You agree to provide valid payment information and authorize Braintrust to charge all fees to your selected payment method.</li>
                            <li><strong>Changes to Fees:</strong> We reserve the right to change our fees at any time upon notice to you.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>8. Intellectual Property</h2>
                        <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li><strong>The Service:</strong> Braintrust and its licensors own all rights, title, and interest in and to the Service, including all AI models, software, and branding.</li>
                            <li><strong>User Materials:</strong> You represent that you have the right to provide any materials or data you upload to the Service.</li>
                            <li><strong>Feedback:</strong> Any feedback or suggestions you provide regarding the Service may be used by Braintrust without obligation to you.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>9. Privacy and Data Protection</h2>
                        <p>Your use of the Service is also governed by our <a href="/nexus/privacy-policy" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Privacy Policy</a>. Please review it to understand how we collect and process your information.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>10. Disclaimers</h2>
                        <p style={{ textTransform: 'uppercase' }}>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. BRAINTRUST DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>11. Limitation of Liability</h2>
                        <p style={{ textTransform: 'uppercase' }}>TO THE MAXIMUM EXTENT PERMITTED BY LAW, BRAINTRUST SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO BRAINTRUST IN THE TWELVE MONTHS PRECEDING THE CLAIM.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>12. Termination</h2>
                        <p>We may suspend or terminate your access to the Service at any time, with or without notice, if we believe you have breached these Terms or for any other legitimate business reason. You may terminate your account at any time through the Service settings.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>13. Governing Law and Dispute Resolution</h2>
                        <p>These Terms shall be governed by the laws of the State of California, without regard to its conflict of law principles.</p>
                        <p style={{ marginTop: '12px' }}>Any dispute arising from or relating to these Terms or the Service shall be resolved through binding arbitration administered by JAMS under its Comprehensive Arbitration Rules, except that either party may seek injunctive relief in any court of competent jurisdiction.</p>
                        <p style={{ marginTop: '12px' }}>Any arbitration shall take place in San Francisco, California. The arbitrator's decision shall be final and binding.</p>
                        <p style={{ marginTop: '12px' }}><strong>Class Action Waiver:</strong> You agree that any disputes will be resolved on an individual basis, and you waive any right to participate in a class action lawsuit or class-wide arbitration.</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>14. Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us at:</p>
                        <p style={{ marginTop: '8px' }}><strong>Freelance Labs Inc. d/b/a Braintrust</strong></p>
                        <p><a href="mailto:legal@usebraintrust.com" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>legal@usebraintrust.com</a></p>
                        <p style={{ marginTop: '12px' }}>For privacy-related inquiries, please refer to our <a href="/nexus/privacy-policy" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Privacy Policy</a> or contact <a href="mailto:privacy@usebraintrust.com" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>privacy@usebraintrust.com</a>.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
