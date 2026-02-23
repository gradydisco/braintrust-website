import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
    title: 'Network Standards | Braintrust',
    description: 'Braintrust Network Standards — community standards for professional behavior across the Braintrust network.',
};

export default function NetworkStandards() {
    return (
        <LegalPageLayout title="Braintrust Network Standards">
            <h2>Introduction</h2>
            <p>These Community Standards establish a shared standard for professional behavior for all participants of the Braintrust network, including but not limited to: Clients, Talent, Connectors, Referrers, etc. The success of the Braintrust network is predicated on the professional behavior of all the parties involved.</p>
            <p>These Community Standards are part of Braintrust&apos;s <a href="/code-of-conduct">Code of Conduct</a>, <a href="/terms">Terms</a> and <a href="/referral-terms">Referral Terms</a>. Participants of the Braintrust network, especially Clients, Talent, Connectors and Referrers are expected to follow these standards.</p>

            <h2>Fraud and Misrepresentation</h2>
            <p>Braintrust has a zero-tolerance policy for fraud and misrepresentation. All users must act honestly and in good faith when using the platform. Prohibited behaviors include:</p>
            <ul>
                <li>Creating false identities or misrepresenting your qualifications, skills, or experience.</li>
                <li>Providing misleading information about a project, role, or engagement terms.</li>
                <li>Submitting fraudulent work product or billing for work not performed.</li>
                <li>Using the platform to facilitate schemes, scams, or deceptive practices.</li>
            </ul>
            <p>Users found to be engaging in fraudulent activity will be subject to immediate account deactivation and may face legal action.</p>

            <h2>Discrimination, Harassment, and Abusive Conduct</h2>
            <p>Braintrust is committed to maintaining a safe and inclusive environment for all participants. We have a zero-tolerance policy for discrimination, harassment, and abusive conduct. This includes, but is not limited to:</p>
            <ul>
                <li>Discrimination based on race, color, religion, sex, national origin, age, disability, sexual orientation, gender identity, veteran status, or any other characteristic protected by applicable federal, state, or local law (including, but not limited to, Title VII of the Civil Rights Act, the Americans with Disabilities Act, and the Age Discrimination in Employment Act).</li>
                <li>Harassment, including verbal, physical, or visual conduct that creates an intimidating, hostile, or offensive working environment.</li>
                <li>Abusive conduct, including bullying, threats, intimidation, or any behavior intended to demean, humiliate, or embarrass another person.</li>
            </ul>
            <p>All users are expected to treat one another with respect and professionalism. Any user who experiences or witnesses discriminatory, harassing, or abusive behavior should report it immediately to <a href="mailto:conduct@usebraintrust.com">conduct@usebraintrust.com</a>.</p>

            <h2>Reviews and Ratings</h2>
            <p>The reviews and ratings system is fundamental to the trust and transparency of the Braintrust marketplace. All reviews must be:</p>
            <ul>
                <li>Truthful, fact-based, and reflective of the actual working experience.</li>
                <li>Free from personal attacks, discriminatory language, or content unrelated to the professional engagement.</li>
                <li>Submitted in accordance with Braintrust&apos;s review guidelines.</li>
            </ul>
            <p>Fraudulent or manipulated reviews — including fake positive reviews, retaliatory reviews, or coordinated review campaigns — are strictly prohibited and may result in account suspension.</p>

            <h2>Professionalism and Quality</h2>
            <p>All users are expected to maintain a high standard of professionalism and deliver quality work. This includes:</p>
            <ul>
                <li>Meeting agreed-upon deadlines and deliverables.</li>
                <li>Communicating promptly and transparently about project status, issues, or changes.</li>
                <li>Respecting confidentiality and protecting proprietary information.</li>
                <li>Providing accurate and honest billing and time tracking.</li>
            </ul>

            <h2>Mediation Processes and Procedures</h2>
            <p>When disputes arise between users, Braintrust may facilitate a mediation process to help resolve issues. Braintrust reserves the right to:</p>
            <ul>
                <li>Coordinate mediation between disputing parties.</li>
                <li>De-staff projects or reassign talent when necessary.</li>
                <li>Deactivate accounts of users who repeatedly violate community standards.</li>
                <li>Make final determinations regarding disputes when mediation is unsuccessful.</li>
            </ul>
            <p>All parties are expected to participate in good faith in any mediation process initiated by Braintrust.</p>

            <h2>Alternative Legal Remedies</h2>
            <p>Nothing in these Community Standards limits or precludes any user from pursuing legal remedies available under applicable law. Users who believe they have been subject to discrimination, harassment, or other unlawful conduct may file complaints with the appropriate government agencies or pursue legal action independently of any processes offered by Braintrust.</p>
        </LegalPageLayout>
    );
}
