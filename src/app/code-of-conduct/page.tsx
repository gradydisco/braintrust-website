import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
    title: 'Code of Conduct | Braintrust',
    description: 'Braintrust Network Code of Conduct. Our community ground rules for professional, inclusive, and respectful behavior.',
};

export default function CodeOfConduct() {
    return (
        <LegalPageLayout title="Code of Conduct" lastUpdated="April 24, 2021">
            <p>The Braintrust team and community is made up of a mixture of professionals and volunteers from all over the world, working on every aspect of the network - including building the platform, referring high quality freelancers, and inviting organizations that need software projects built.</p>
            <p>The Braintrust culture is positive, supportive, and inclusive. We also want it to stay that way as the team grows. To that end, we have a few ground rules that we ask people to adhere to. This code applies equally to everyone involved at Braintrust.</p>
            <p>This isn&apos;t an exhaustive list of things that you can&apos;t do. Rather, take it in the spirit in which it&apos;s intended - a guideline for making sure everyone at Braintrust is happy, productive, and safe.</p>
            <p>This code of conduct applies to all spaces managed by the Braintrust Foundation. This includes our internal tools (Asana, Gdocs, GitHub, Email, etc), Braintrust retreats and events, and any other forums created by the Braintrust team which are used for communication. In addition, violations of this code outside these spaces may affect a person&apos;s ability to participate within them.</p>
            <p>If you believe someone is violating the code of conduct, we ask that you report it by emailing <a href="mailto:conduct@usebraintrust.com">conduct@usebraintrust.com</a>.</p>

            <hr />

            <h2>Be Friendly and Patient</h2>
            <p>Each person is a key player on our team and deserves respect. While we all have different roles to play, we recognize that no single role is more important than the other. Members of our community should always be ready to give each other the benefit of the doubt, acknowledge each other&apos;s best effort, and do their part to create a healthy and supportive work environment, both in-person and virtually.</p>

            <h2>Be Welcoming</h2>
            <p>We strive to be a community that welcomes and supports people of all backgrounds and identities. This includes, but is not limited to, members of any race, ethnicity, culture, national origin, color, immigration status, social and economic class, educational level, sex, sexual orientation, gender identity and expression, age, size, family status, political belief, religion, and mental and physical ability.</p>

            <h2>Be Considerate</h2>
            <p>Your work will be used by other people, and you in turn will depend on the work of others. Any decision you take will affect users and colleagues, and you should take those consequences into account when making decisions. Remember that we&apos;re a global community, so you might not be communicating in someone else&apos;s primary language.</p>

            <h2>Be Respectful</h2>
            <p>Not all of us will agree all the time, but disagreement is no excuse for poor behavior and poor manners. We might all experience some frustration now and then, but we cannot allow that frustration to turn into a personal attack. It&apos;s important to remember that a community where people feel uncomfortable or threatened is not a productive one. Members of the Braintrust community should be respectful when dealing with other members as well as with people outside the Braintrust community.</p>
            <p>When we disagree, try to understand why. Disagreements, both social and technical, happen all the time and Braintrust is no exception. It is important that we resolve disagreements and differing views constructively. Remember that we&apos;re different. The strength of Braintrust comes from its varied community, people from a wide range of backgrounds. Different people have different perspectives on issues. Being unable to understand why someone holds a viewpoint doesn&apos;t mean that they&apos;re wrong. Don&apos;t forget that it is human to err and blaming each other doesn&apos;t get us anywhere. Instead, focus on helping to resolve issues and learning from mistakes.</p>

            <h2>Be Careful in the Words That You Choose</h2>
            <p>We are a community of professionals, and we conduct ourselves professionally. Think before you speak or act. Do not insult or put down other participants. Harassment and other exclusionary behavior aren&apos;t acceptable. This includes, but is not limited to:</p>
            <ul>
                <li>Violent threats or language directed against another person.</li>
                <li>Discriminatory jokes and language.</li>
                <li>Posting sexually explicit or violent material.</li>
                <li>Posting (or threatening to post) other people&apos;s personally identifying information (&quot;doxing&quot;).</li>
                <li>Personal insults, especially those using racist or sexist terms.</li>
                <li>Unwelcome sexual attention.</li>
                <li>Advocating for, or encouraging, any of the above behavior.</li>
                <li>Repeated harassment of others. In general, if someone asks you to stop, then stop.</li>
            </ul>

            <h2>Zero-Tolerance Policy Against Discrimination</h2>
            <p>We have a zero-tolerance policy against discrimination. Discrimination or harassment based on another person&apos;s race, skin color, religion, sex, national origin, political convictions, citizenship, age, sexual orientation, disability, marital status, or any other bases prohibited by law, will not be tolerated. Users engaging in this behavior will be subject to temporary or permanent removal from Braintrust.</p>
            <p>Language, symbolism, behavior, and other acts we consider discriminatory include, but are not limited to:</p>
            <ul>
                <li>Discriminating against, threatening, or insulting individuals or groups based on race, gender identity, sexual orientation, ability, political views, religion, national origin, or culture.</li>
                <li>Using derogatory terms, racial slurs, or code words.</li>
                <li>Showing or eliciting support for hate groups or people promoting hateful activities.</li>
                <li>Suggesting, showing, threatening, or glorifying the use of violence — even jokingly — against an individual or a group of individuals.</li>
                <li>Committing microaggressions: verbal, behavioral, and environmental indignities that communicate hostile, derogatory, or negative racial slights or insults to a person or group.</li>
                <li>Displaying ornamentation, decoration, or memorabilia that are generally considered racist or discriminatory, or elicit feelings of discrimination.</li>
            </ul>

            <hr />

            <p><em>This is inspired and heavily borrowed from our friends at Django and Hipcamp for whom we have undying respect!</em></p>
            <p>The Braintrust Network Code of Conduct is part of the Braintrust <a href="/network-standards">Network Standards</a>, <a href="/terms">Terms</a> and <a href="/referral-terms">Referral Terms</a>.</p>
        </LegalPageLayout>
    );
}
