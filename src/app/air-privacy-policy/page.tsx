import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
    title: 'AIR Privacy Policy | Braintrust',
    description: 'Privacy Policy for Braintrust AIR, the AI-powered interview platform.',
};

export default function AIRPrivacyPolicy() {
    return (
        <LegalPageLayout title="Braintrust AIR Privacy Policy" lastUpdated="February 11, 2026">
            <h2>1. Introduction</h2>
            <p>This Privacy Policy outlines how Braintrust AIR (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, discloses, and protects personal information when users (&quot;you&quot; or &quot;your&quot;) access or use our AI-powered interview platform and related services (collectively, the &quot;Service&quot;). By using the Service, you consent to the practices described in this Privacy Policy.</p>

            <h2>2. Information We Collect</h2>
            <p>We collect the following categories of personal data (&quot;Personal Information&quot;):</p>

            <h3>Customer &amp; User Data</h3>
            <ul>
                <li><strong>Contact Information:</strong> Name, email address, and company name.</li>
                <li><strong>Account Credentials:</strong> Username and password for accessing the Service.</li>
                <li><strong>Professional Information:</strong> Job title and employer details.</li>
                <li><strong>Payment Information:</strong> Billing address and payment method details.</li>
                <li><strong>Usage Data:</strong> Information about how you and your candidates interact with the Service, such as IP addresses, browser types, access times, and pages viewed.</li>
            </ul>

            <h3>Candidate Data</h3>
            <ul>
                <li><strong>Application, Interview &amp; Assessment Data:</strong> Information about candidates you invite to use the Service, including their names, email addresses, interview responses, video recordings, and assessment results.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for various purposes, including:</p>
            <ul>
                <li><strong>Providing and Improving the Service:</strong> To operate, maintain, and enhance the Service&apos;s functionality and user experience.</li>
                <li><strong>Authentication &amp; Account Management:</strong> Manage user access, prevent unauthorized access, and enforce security protocols.</li>
                <li><strong>Facilitating Interviews:</strong> To enable candidate screening, evaluation, and customer-defined hiring processes.</li>
                <li><strong>Communication:</strong> To send administrative updates, security notifications, and provide customer support.</li>
                <li><strong>System Analytics &amp; Performance Optimization:</strong> Monitor service uptime, detect anomalies, and enhance platform functionality.</li>
                <li><strong>Billing and Payments:</strong> To process transactions and manage subscriptions.</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
            </ul>

            <h2>4. Sharing Your Information</h2>
            <p>We do not sell or rent your Personal Information to third parties. We may share your information in the following circumstances:</p>
            <ul>
                <li><strong>Authorized Service Providers:</strong> With third-party vendors who perform services on our behalf, such as payment processing, cloud data storage, analytic tools, and other third-party vendors assisting with platform functionality.</li>
                <li><em>Note regarding Kombo:</em> We use the API of Kombo Technologies GmbH (Berlin) as a data processor (Art. 28 GDPR) to optimize HR processes and synchronize employee/application data.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                <li><strong>Legal Obligations:</strong> If required by law, subpoena, or government request, or to protect users, platform integrity, or intellectual property.</li>
                <li><strong>Access Controls:</strong> Third parties must adhere to confidentiality agreements, SOC 2 security practices, and data minimization principles.</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>We implement industry-standard security measures, though no method is 100% secure:</p>
            <ul>
                <li><strong>Encryption:</strong> Data is encrypted in transit (TLS 1.2+) and at rest (AES-256).</li>
                <li><strong>Access Control &amp; Least Privilege:</strong> Role-based access control (RBAC) restricted to authorized personnel.</li>
                <li><strong>Audit Logging &amp; Monitoring:</strong> Continuous security monitoring for anomalies.</li>
                <li><strong>Incident Response Plan:</strong> Procedures for breach detection, mitigation, and notification.</li>
                <li><strong>User Responsibilities:</strong> Users must protect login credentials and report unauthorized access immediately.</li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>We retain Personal Information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer period is required or permitted by law.</p>

            <h2>7. Your Rights and Choices</h2>
            <p>Depending on your jurisdiction, you may have the following rights:</p>
            <ul>
                <li><strong>Access:</strong> Request access to your Personal Information.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate/incomplete info.</li>
                <li><strong>Deletion:</strong> Request deletion, subject to exceptions.</li>
                <li><strong>Objection:</strong> Object to processing under certain circumstances.</li>
            </ul>
            <p>To exercise these rights, contact: <a href="mailto:airsupport@usebraintrust.com">airsupport@usebraintrust.com</a></p>

            <h2>8. Children&apos;s Privacy</h2>
            <p>The Service is not intended for individuals under 18. We do not knowingly collect info from children and will delete any inadvertently collected data.</p>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>We may update this policy periodically. We will notify you of material changes by posting the new policy and updating the &quot;Last Updated&quot; date.</p>

            <h2>10. Contact Us</h2>
            <p>For questions or concerns, contact us at: <a href="mailto:airsupport@usebraintrust.com">airsupport@usebraintrust.com</a></p>
            <p><strong>EU Representative (GDPR Art. 27):</strong><br />
                Freelance Labs Inc. has appointed <strong>Prighter Group</strong> as our privacy representative in the European Union.</p>
            <ul>
                <li><strong>Online Portal:</strong> <a href="https://app.prighter.com/portal/13563441204" target="_blank" rel="noopener noreferrer">https://app.prighter.com/portal/13563441204</a></li>
                <li><strong>Mail:</strong> Prighter GmbH, Köstlergasse 1/6, 1060 Vienna, Austria.</li>
            </ul>
            <p>Please include &quot;Freelance Labs Inc.&quot; in all communications.</p>
        </LegalPageLayout>
    );
}
