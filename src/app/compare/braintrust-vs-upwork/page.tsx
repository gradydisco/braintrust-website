import type { Metadata } from 'next';
import MarketplaceComparisonLayout from '@/components/MarketplaceComparisonLayout';

export const metadata: Metadata = {
    title: 'Braintrust vs Upwork — Vetted Network vs Open Marketplace | Braintrust',
    description: 'Compare Braintrust and Upwork for enterprise technical hiring. Braintrust offers AI-powered vetting, ID verification, and ranked talent matched in hours. Upwork is an open marketplace without systematic skill validation.',
    keywords: 'Braintrust vs Upwork, Upwork alternative, vetted talent vs freelance marketplace, enterprise hiring comparison, Upwork competitor, AI-vetted engineers',
};

const comparisonRows = [
    { dimension: 'Network model', braintrust: 'Vetted, assessed, and ID-verified talent only', competitor: 'Open marketplace — anyone can create a profile', advantage: 'braintrust' as const },
    { dimension: 'Skill validation', braintrust: 'AI-powered domain-specific technical assessment', competitor: 'Skills tests are optional; self-reported badges', advantage: 'braintrust' as const },
    { dimension: 'Identity verification', braintrust: 'Government-issued ID verification required', competitor: 'ID verification optional and limited', advantage: 'braintrust' as const },
    { dimension: 'Time to match', braintrust: 'Ranked candidates surfaced in hours', competitor: 'Dependent on application volume and response time', advantage: 'braintrust' as const },
    { dimension: 'Talent quality', braintrust: 'Highly selective — assessed professionals only', competitor: 'Variable — open to all experience levels and quality tiers', advantage: 'braintrust' as const },
    { dimension: 'Domain expertise', braintrust: 'Ranked by verified domain assessment', competitor: 'Self-reported specializations with no verification', advantage: 'braintrust' as const },
    { dimension: 'Background checks', braintrust: 'Available for qualifying roles', competitor: 'Not available', advantage: 'braintrust' as const },
    { dimension: 'Enterprise integration', braintrust: 'Designed for enterprise procurement and compliance', competitor: 'Consumer-grade with enterprise tier add-ons', advantage: 'braintrust' as const },
    { dimension: 'Talent pool size', braintrust: '750K+ professionals — curated and assessed', competitor: 'Millions of freelancers — unfiltered at entry', advantage: 'neutral' as const },
    { dimension: 'Platform model', braintrust: 'Decentralized — no platform take from freelancers', competitor: 'Platform fee structure (10%–20% taken from freelancers)', advantage: 'neutral' as const },
];

const differentiatorSections = [
    {
        title: 'Vetted Network vs. Open Marketplace',
        content: `<p>Upwork is an open marketplace: any professional can create a profile and begin bidding on projects. This model maximizes supply but creates significant signal-to-noise challenges for enterprise buyers. Evaluating candidates on Upwork requires manual filtering through large applicant pools where skill signals are largely self-reported.</p>
<p>Braintrust is a vetted network: every professional completes AI-powered domain-specific technical assessment and identity verification before their profile becomes matchable. The filter happens before sourcing — not during it. The result is that any candidate surfaced in a Braintrust match has already met a defined technical threshold in their domain.</p>`,
    },
    {
        title: 'AI-Driven Assessment vs. Manual Vetting',
        content: `<p>Upwork's primary quality signal is the freelancer's job success score — a reputation metric derived from client ratings. While imperfect, reputation systems can be informative for established freelancers. For newer or less-reviewed professionals, the quality signal is thin.</p>
<p>Braintrust's quality signal is derived from AI-powered technical assessment: domain-specific evaluation that produces a verified skill score before any client interaction occurs. This is not a reputation metric — it is a direct measurement of technical capability in the candidate's stated domain.</p>`,
        bullets: [
            '<strong>Braintrust:</strong> Domain-specific AI assessment → scored and ranked → verified before matching',
            '<strong>Upwork:</strong> Self-reported skills → optional skill tests → reputation score from client reviews',
        ],
    },
    {
        title: 'Long Sourcing Cycles vs. Rapid Ranked Matches',
        content: `<p>Hiring on Upwork typically involves posting a job, receiving applications over days or weeks, filtering applications manually, conducting interviews, and running technical screens. Timeline depends heavily on freelancer responsiveness and applicant quality in the posting period.</p>
<p>Braintrust's pre-assessed pool enables immediate ranking against requirements. When a role is posted, the matching engine runs against the existing pre-verified talent pool and surfaces ranked candidates within hours. The sourcing and first-round screening stages are collapsed into the talent pool infrastructure.</p>`,
    },
    {
        title: 'Identity Verification vs. Anonymous Profiles',
        content: `<p>Upwork offers limited identity verification as an optional feature. Profiles can be created without government ID confirmation. For enterprise clients with compliance requirements or sensitive project contexts, this represents an accountability gap.</p>
<p>Braintrust requires government-issued ID verification for every professional in the network — not as an optional feature, but as a structural access requirement. Every candidate in a Braintrust shortlist has a verified identity attached to their profile and work history.</p>`,
    },
    {
        title: 'Gig Crowd vs. Domain Experts',
        content: `<p>Upwork's market-clearing model naturally attracts professionals across a wide range of expertise and price points. For enterprise roles requiring specialized technical depth — AI engineering, data science, machine learning infrastructure — the signal-to-noise ratio of an open platform can be challenging to navigate.</p>
<p>Braintrust's assessment model filters for domain expertise before matching. AI engineers are assessed on AI competencies. Data scientists are assessed on statistical and ML methods. The candidate pool enterprise clients see reflects assessed domain knowledge — not self-declared expertise or general coding ability.</p>`,
    },
];

const faqItems = [
    {
        question: 'What is the main difference between Braintrust and Upwork?',
        answer: 'Braintrust is a vetted talent network where every professional is assessed, ID-verified, and ranked before matching. Upwork is an open marketplace where anyone can create a profile. The primary quality difference is structural: Braintrust front-loads assessment; Upwork relies on post-hire reputation signals.',
    },
    {
        question: 'Is Braintrust better than Upwork for hiring AI engineers?',
        answer: 'For enterprise AI engineering roles, Braintrust provides several structural advantages: domain-specific technical assessment (not self-reported skills), government-ID verification, and pre-ranked candidates available in hours. Upwork requires manual filtering through a large, open applicant pool without systematic technical validation.',
    },
    {
        question: 'How does Braintrust screen freelancers compared to Upwork?',
        answer: 'Braintrust uses AI-powered domain-specific technical assessments that every professional must pass before entering the network. Upwork\'s primary screening mechanism is the job success score — a reputation metric from client reviews — with optional self-administered skill tests.',
    },
    {
        question: 'Does Braintrust take a fee from freelancers like Upwork does?',
        answer: 'Braintrust operates on a decentralized model that does not take a percentage from freelancer earnings — a structural difference from Upwork\'s 10%–20% platform fee. This design was introduced to make Braintrust more attractive to high-quality professionals who resent high platform takes.',
    },
    {
        question: 'Can Braintrust match talent faster than Upwork?',
        answer: 'Yes. Because Braintrust maintains a pre-assessed, pre-verified talent pool, matching can produce ranked candidates within hours of posting. Upwork\'s timeline depends on application volume and candidate responsiveness — typically taking days to accumulate a qualified applicant pool.',
    },
    {
        question: 'Is Braintrust suitable for enterprise hiring compared to Upwork?',
        answer: 'Yes. Braintrust is designed specifically for enterprise hiring: pre-verified candidate profiles, identity verification, background checks, and enterprise procurement integration. While Upwork offers an enterprise tier, its underlying open-marketplace model differs fundamentally from Braintrust\'s vetted network architecture.',
    },
];

export default function BraintrustVsUpwork() {
    return (
        <MarketplaceComparisonLayout
            competitor="Upwork"
            competitorSlug="upwork"
            competitorType="Open freelance marketplace"
            introHtml={`<p>Upwork is one of the largest freelance platforms in the world, with millions of professionals across virtually every category of knowledge work. For enterprise teams sourcing specialized technical talent — particularly in AI, machine learning, and data science — the structural characteristics of Upwork's open marketplace model create specific challenges that the Braintrust network is designed to solve.</p>
<p>This comparison examines the structural differences between Braintrust's vetted talent network and Upwork's open marketplace model — covering assessment rigor, identity verification, time-to-match, and domain expertise density. The goal is to help enterprise hiring teams understand when each platform is appropriate and what trade-offs each model involves.</p>`}
            comparisonRows={comparisonRows}
            differentiatorSections={differentiatorSections}
            summary={`<p>Braintrust and Upwork represent fundamentally different approaches to talent marketplace design. Upwork optimizes for supply breadth and accessibility: anyone can join, post, and bid. This works well for commodity work, short-term tasks, and clients who are equipped to filter large applicant pools.</p>
<p>Braintrust optimizes for verified quality and enterprise deployment speed: every professional is assessed, ID-verified, and ranked before matching occurs. This works well for specialized technical roles, time-sensitive enterprise hiring, and clients who need high-confidence matches without extensive sourcing and screening overhead.</p>
<p>For enterprise teams hiring AI engineers, machine learning specialists, data scientists, and technical specialists in high-stakes or time-sensitive contexts, Braintrust's vetted network model provides structural advantages in match quality and deployment speed that Upwork's open marketplace model is not designed to deliver.</p>`}
            faq={faqItems}
            competitorLinks={[
                { label: 'Braintrust vs Fiverr', href: '/compare/braintrust-vs-fiverr' },
                { label: 'Braintrust vs Toptal', href: '/compare/braintrust-vs-toptal' },
                { label: 'Hire AI Engineers', href: '/hire-ai-engineers' },
                { label: 'Hire ML Engineers', href: '/hire-machine-learning-engineers' },
                { label: 'Hire Technical Talent', href: '/hire-technical-talent' },
            ]}
        />
    );
}
