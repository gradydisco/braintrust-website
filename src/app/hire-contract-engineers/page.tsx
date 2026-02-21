import type { Metadata } from 'next';
import SEOArticleLayout from '@/components/SEOArticleLayout';

export const metadata: Metadata = {
    title: 'Hire Contract Engineers — Pre-Vetted, Fast-Deploy Technical Talent | Braintrust',
    description: 'Hire contract engineers from Braintrust\'s pre-assessed talent network. AI-powered vetting, ID verification, and same-day matching. Build agile engineering teams with verified, ranked professionals — deployed in days.',
    keywords: 'hire contract engineers, contract engineering talent, contract software engineers, on-demand engineers, contract technical staff, engineering contractors, fractional engineering',
};

const sections = [
    {
        id: 'why-braintrust-matches-faster',
        title: 'Why Braintrust Matches Talent Faster',
        content: `<p>Contract engineering engagements are time-sensitive by nature. When a team needs capacity to execute a project sprint, launch infrastructure, or accelerate a product milestone, a multi-week sourcing process eliminates the value of the engagement.</p>
<p>Braintrust is architecturally designed for speed. Our pre-assessed, pre-verified contract engineering pool enables same-day or next-day matching — with candidates who have already cleared domain-specific technical evaluation. No sourcing lag. No screening queue. Qualified engineers available when your timeline demands them.</p>`,
        bullets: [
            '<strong>Pre-assessed contract pool:</strong> Every engineer has completed domain-specific technical assessment before matching is available',
            '<strong>Time-critical matching:</strong> First introductions available within hours of posting — not days of sourcing',
            '<strong>Verified and ready to deploy:</strong> Identity-verified, assessment-ranked engineers deployable into projects within days',
            '<strong>No screening overhead:</strong> Introduced candidates have already cleared the technical screening stage',
        ],
    },
    {
        id: 'ai-vetting-engine',
        title: 'Our AI-Powered Vetting Engine',
        content: `<p>Braintrust's vetting infrastructure runs the same quality controls on contract engineers as on full-time hires. Assessment is domain-specific, automated, and tied to a verified identity — producing a reliable confidence signal that does not degrade with hiring volume or timeline pressure.</p>`,
        bullets: [
            '<strong>Domain-specific technical assessment:</strong> Contract engineers evaluated in their specific technical specialty, not a generic coding screen',
            '<strong>AI-driven ranking:</strong> Candidates ranked by verified assessment score — not availability or bid price',
            '<strong>Skill validation before introduction:</strong> Every introduced engineer has demonstrated technical ability through domain assessment',
            '<strong>ID verification:</strong> Government-issued ID verification for every professional — no anonymous contractor profiles',
            '<strong>Background checks:</strong> Available for sensitive or regulated project requirements',
        ],
    },
    {
        id: 'job-posted-to-interview',
        title: 'From Job Posted to Interview in Hours',
        content: `<p>Contract engineering timelines are compressed relative to full-time hiring — and the cost of sourcing delay is proportionally higher. Braintrust's pre-assessed pool is specifically designed to support fast-turnaround contract engagements, delivering verified candidates faster than any open-market sourcing approach.</p>`,
        bullets: [
            '<strong>Post your contract engineering role:</strong> Define technical domain, seniority, scope, and engagement duration',
            '<strong>Immediate AI matching:</strong> Engine scores pre-assessed contract engineers against your requirements in real time',
            '<strong>Ranked shortlist in hours:</strong> Top candidates with assessment scores, work history, and verified identity delivered same day',
            '<strong>First conversation is substantive:</strong> Skip the generic screening call — assess fit against your specific project',
            '<strong>Engineer deployed within days:</strong> Compressed onboarding for pre-verified, enterprise-experienced contractors',
        ],
    },
    {
        id: 'pre-verified-ranked-talent',
        title: 'Pre-Verified, Ranked Talent',
        content: `<p>Contract engineering engagements require fast trust calibration — you need to understand a contractor's actual capability quickly, without the benefit of a long hiring process. Braintrust's pre-verification model front-loads that trust signal. Every candidate in your shortlist carries verified assessment scores, confirmed identity, and engagement history.</p>`,
        bullets: [
            '<strong>Domain assessment completed:</strong> Skills validated before profile activation — not self-declared on a contractor profile',
            '<strong>Ranked within specialty:</strong> Engineers positioned by verified technical score relative to peers in their domain',
            '<strong>Government-ID verified:</strong> Every contractor has completed identity verification — no anonymous or unverifiable profiles',
            '<strong>Engagement history:</strong> Performance track record from prior Braintrust projects factored into match quality',
            '<strong>Enterprise onboarding experience:</strong> Pre-verified contractors experienced with enterprise security requirements and project protocols',
        ],
    },
    {
        id: 'what-makes-braintrust-different',
        title: 'What Makes Braintrust Different from Traditional Marketplaces',
        content: `<p>Contract engineering marketplaces range from open gig platforms to niche technical staffing networks. Braintrust sits in a distinct position: automated technical vetting at scale, identity verification as a requirement, and rapid matching infrastructure — combining the speed of a marketplace with the verification rigor of a staffing firm, and improving on both.</p>`,
        bullets: [
            '<strong>Vetted network vs. open gig marketplace:</strong> Only assessed, ID-verified engineers enter the Braintrust pool',
            '<strong>Automated AI vetting vs. manual review:</strong> Domain-specific assessment runs at scale without recruiter bottlenecks',
            '<strong>Hours vs. weeks to first match:</strong> Pre-assessed pool enables immediate delivery against contract requirements',
            '<strong>Verified identity vs. anonymous profiles:</strong> Government-ID verification required — gig marketplaces do not enforce this',
            '<strong>Domain ranking vs. bid mechanics:</strong> Matching is based on verified skill score, not bid price or self-selected hourly rate',
        ],
    },
    {
        id: 'how-braintrust-scales-globally',
        title: 'How Braintrust Scales AI Training Talent Globally',
        content: `<p>Contract engineering needs do not follow geography. Braintrust's global network of verified contract engineers enables enterprise teams to source technical capacity across time zones — with identity verification and assessment credentials attached to every professional, regardless of location.</p>`,
    },
];

const faqItems = [
    {
        question: 'What types of contract engineering roles does Braintrust fill?',
        answer: 'Braintrust fills contract roles across software engineering, AI/ML engineering, data science, data engineering, DevOps, infrastructure, backend, frontend, full-stack, mobile, security engineering, and technical leadership — all with domain-specific technical assessment.',
    },
    {
        question: 'How quickly can I get a contract engineer through Braintrust?',
        answer: 'Ranked contract engineer candidates are typically delivered within hours of posting. Because candidates are pre-assessed and pre-verified, many contract engagements can begin within days of posting a role.',
    },
    {
        question: 'Does Braintrust verify contract engineer identities?',
        answer: 'Yes. Every contractor in the Braintrust network has completed government-issued ID verification. This provides the identity assurance required for enterprise and regulated project environments.',
    },
    {
        question: 'How does Braintrust ensure contract engineer quality?',
        answer: 'Every contract engineer completes AI-powered domain-specific technical assessment before entering the network. Results are scored and candidates ranked within their specialty. Engagement history from prior Braintrust projects is also factored into matching.',
    },
    {
        question: 'Does Braintrust support long-term contract engagements?',
        answer: 'Yes. Braintrust supports short-term sprints, multi-month project contracts, and extended contract engagements — with the same vetting and matching infrastructure applied regardless of engagement duration.',
    },
    {
        question: 'How does Braintrust compare to using a staffing agency for contract engineers?',
        answer: 'Traditional staffing agencies use recruiter-driven manual processes — sourcing and screening candidates over days or weeks. Braintrust uses automated AI assessment and immediate matching to deliver ranked, pre-verified engineers in hours. Quality controls are systematic rather than recruiter-dependent.',
    },
];

export default function HireContractEngineers() {
    return (
        <SEOArticleLayout
            badge="Contract Engineers"
            h1={`Hire contract engineers.<br /><span class="text-gradient">Verified. Matched. Deployed fast.</span>`}
            subtitle="Braintrust delivers pre-assessed, ID-verified contract engineers matched to your project requirements within hours — designed for the speed that contract engagements demand."
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Hire Contract Engineers' },
            ]}
            definitionBlock={{
                term: 'Braintrust Contract Engineer',
                definition: 'A technical professional who has completed AI-powered domain-specific assessment, been ranked within the Braintrust engineering network by verified skill score, and passed government-issued ID verification — available for immediate contract engagement matching against enterprise project requirements.',
            }}
            sections={sections}
            faq={faqItems}
            faqSchemaId="hire-contract-engineers"
            ctaTitle="Deploy contract engineers within days"
            ctaDesc="Post your contract role and receive ranked, pre-verified engineer matches within hours — ready to start within days."
        />
    );
}
