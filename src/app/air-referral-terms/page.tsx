import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
    title: 'AIR Referral Program Terms | Braintrust',
    description: 'Terms governing participation in the Braintrust AIR Referral Program.',
};

export default function AirReferralTerms() {
    return (
        <LegalPageLayout title="Braintrust AIR Referral Program Terms">
            <p>These Braintrust Referral Program Terms (&quot;Terms&quot;) govern participation in the Braintrust referral program (the &quot;Program&quot;). By making a referral or otherwise participating in the Program, you (&quot;Referrer&quot;) agree to be bound by these Terms.</p>
            <p>&quot;Braintrust,&quot; &quot;Company,&quot; &quot;we,&quot; or &quot;us&quot; refers to Freelance Labs, Inc.</p>

            <h2>1. Program Overview</h2>
            <p>The Program allows eligible individuals and organizations to earn referral bonuses by making warm introductions to prospective customers for Braintrust AIR, Braintrust&apos;s AI-powered interviewing platform.</p>
            <p>A &quot;Referral&quot; means a qualified, warm introduction made by Referrer that results in a new paying customer of Braintrust AIR, subject to these Terms.</p>

            <h2>2. Eligible Referrals</h2>
            <p>A referral is eligible only if all of the following conditions are met:</p>
            <ul>
                <li>The referral is made via a genuine, warm introduction, such as a direct email or LinkedIn introduction, where Referrer has an existing relationship with the prospective customer and reasonably contributes to initiating the sales conversation.</li>
                <li>Passive forwarding, mass outreach, unsolicited introductions, or introductions to generic inboxes do not qualify.</li>
                <li>The referred company (&quot;Client&quot;) is not:
                    <ul>
                        <li>An existing Braintrust customer, or</li>
                        <li>Actively engaged in sales discussions with Braintrust at the time of introduction, as reasonably determined by Braintrust.</li>
                    </ul>
                </li>
                <li>The Client signs up for Braintrust AIR and pays its first invoice.</li>
            </ul>
            <p>If multiple parties refer the same Client, referral credit will be awarded solely to the first Referrer who makes a qualifying introduction, as determined by Braintrust in its reasonable discretion.</p>

            <h2>3. Referral Bonus</h2>
            <p>For each qualified referral that becomes a paying Braintrust AIR customer, Braintrust will pay Referrer a one-time referral bonus of $1,000 USD, subject to the conditions below.</p>
            <h3>Minimum Deal Size</h3>
            <p>Referral bonuses apply only to Clients whose first-year contracted or expected fees with Braintrust AIR meet a minimum value of $10,000 USD, as reasonably determined by Braintrust. Braintrust reserves the right to adjust or withhold referral bonuses for deals below this threshold.</p>
            <h3>Payment Conditions</h3>
            <p>The referral bonus will be paid only after:</p>
            <ul>
                <li>Braintrust has received payment of the Client&apos;s first invoice, and</li>
                <li>The Client remains active for at least 30 days following the first payment.</li>
            </ul>
            <p>There is no limit to the number of qualified referrals a Referrer may submit, subject to these Terms.</p>

            <h2>4. Payment Terms</h2>
            <ul>
                <li><strong>Timing:</strong> Referral bonuses are paid according to Braintrust&apos;s standard payment schedule after all eligibility conditions are satisfied.</li>
                <li><strong>Method:</strong> Payments will be made via a method designated by Braintrust.</li>
                <li><strong>Taxes:</strong> Referrer is solely responsible for any taxes, reporting obligations, or withholdings related to referral bonus payments.</li>
            </ul>

            <h2>5. Referral Process and Communication</h2>
            <p>Referrals may be submitted by:</p>
            <ul>
                <li>Making a warm email or LinkedIn introduction to a Braintrust representative, or</li>
                <li>Replying directly to Braintrust with the contact name and relevant context to facilitate an introduction.</li>
            </ul>
            <p>Braintrust may, but is not obligated to, provide status updates regarding referral progress or outcomes.</p>

            <h2>6. Eligibility Restrictions</h2>
            <p>The Program is not available to:</p>
            <ul>
                <li>Braintrust employees or contractors</li>
                <li>Agencies, recruiters, or intermediaries referring Clients in the ordinary course of business</li>
                <li>Individuals referring their own company or employer</li>
            </ul>
            <p>unless otherwise approved in writing by Braintrust.</p>

            <h2>7. Independent Contractor Relationship</h2>
            <p>Referrer participates in the Program as an independent contractor. Nothing in these Terms creates an employment, agency, partnership, or joint venture relationship.</p>
            <p>Referrer may not:</p>
            <ul>
                <li>Represent themselves as an employee or agent of Braintrust</li>
                <li>Make pricing, product, or contractual commitments on Braintrust&apos;s behalf</li>
            </ul>

            <h2>8. Program Abuse and Disqualification</h2>
            <p>Braintrust reserves the right to withhold or revoke referral bonuses and disqualify Referrers for referrals involving:</p>
            <ul>
                <li>Spam, bulk, or automated outreach</li>
                <li>Misrepresentation or misleading claims</li>
                <li>Violations of applicable laws or third-party rights</li>
            </ul>

            <h2>9. Program Changes and Termination</h2>
            <p>Braintrust may modify, suspend, or terminate the Program or these Terms at any time by posting updated terms on its website.</p>
            <p>Referrals made prior to termination remain eligible for payment only if all eligibility conditions are satisfied before termination or within a reasonable period determined by Braintrust.</p>

            <h2>10. Confidentiality</h2>
            <p>Any non-public information shared by Braintrust in connection with the Program must be kept confidential and used solely for purposes of participating in the Program.</p>

            <h2>11. Discretion and Final Authority</h2>
            <p>Braintrust retains sole and final discretion to determine referral eligibility, qualification, attribution, deal size qualification, and bonus payment in all cases. All determinations are made in good faith and are final.</p>

            <h2>12. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of California, without regard to its conflict of law principles.</p>
        </LegalPageLayout>
    );
}
