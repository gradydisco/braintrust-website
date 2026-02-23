import type { Metadata } from 'next';
import MarketplaceComparisonLayout from '@/components/MarketplaceComparisonLayout';

export const metadata: Metadata = {
    title: 'Braintrust vs Fiverr — Vetted Enterprise Network vs Gig Marketplace | Braintrust',
    description: 'Compare Braintrust and Fiverr for enterprise technical hiring. Braintrust provides AI-assessed, ID-verified professionals matched in hours. Fiverr is a task-based gig marketplace without enterprise-grade vetting.',
    keywords: 'Braintrust vs Fiverr, Fiverr alternative for enterprise, vetted developers vs Fiverr, AI engineers Fiverr alternative, enterprise talent platform comparison',
};

const comparisonRows = [
    { dimension: 'Platform model', braintrust: 'Vetted professional network for enterprise hiring', competitor: 'Task-based gig marketplace for project work', advantage: 'braintrust' as const },
    { dimension: 'Talent vetting', braintrust: 'AI-powered domain-specific assessment required', competitor: 'No assessment — seller reputation only', advantage: 'braintrust' as const },
    { dimension: 'Identity verification', braintrust: 'Government-issued ID required for all professionals', competitor: 'Limited identity verification, not required for most sellers', advantage: 'braintrust' as const },
    { dimension: 'Time to match', braintrust: 'Ranked candidates surfaced in hours', competitor: 'Browse listings; response time varies by seller', advantage: 'braintrust' as const },
    { dimension: 'Engagement type', braintrust: 'Project, contract, and full-time professional engagements', competitor: 'Task-based "gigs" and fixed-scope deliverables', advantage: 'braintrust' as const },
    { dimension: 'Domain expertise', braintrust: 'Verified by AI assessment and ranked by score', competitor: 'Self-declared specializations and categories', advantage: 'braintrust' as const },
    { dimension: 'Background checks', braintrust: 'Available for qualifying roles', competitor: 'Not available', advantage: 'braintrust' as const },
    { dimension: 'Enterprise procurement', braintrust: 'Enterprise contracts, compliance, and procurement support', competitor: 'Fiverr Business tier with limited enterprise features', advantage: 'braintrust' as const },
    { dimension: 'Talent pool', braintrust: '2M+ assessed and verified professionals', competitor: 'Millions of sellers across all skill levels', advantage: 'neutral' as const },
    { dimension: 'Pricing model', braintrust: 'Negotiated professional rates — no gig packaging', competitor: 'Fixed-price service packages', advantage: 'neutral' as const },
];

const differentiatorSections = [
    {
        title: 'Vetted Network vs. Gig Marketplace',
        content: `<p>Fiverr is designed for task-based work: a buyer selects a gig package, a seller delivers a defined output. This model works well for discrete, well-scoped deliverables — logo design, copy, basic development tasks — where the quality risk is bounded by the scope of the task.</p>
<p>Enterprise technical hiring does not fit this model. AI engineering, machine learning development, data science, and infrastructure work require ongoing professional engagement, deep technical depth, and a quality basis that task-based matching cannot provide. Braintrust is built for this — a professional talent network with systematic vetting, assessment, and ranking underpinning every match.</p>`,
    },
    {
        title: 'AI-Driven Assessment vs. No Systematic Vetting',
        content: `<p>Fiverr's primary quality signal is seller ratings: a reputation system based on buyer reviews after completion. There is no pre-engagement technical assessment. A developer with a 4.9-star rating may have strong soft skills and reliable delivery, or may have accumulated ratings on simpler work than your enterprise requirements demand.</p>
<p>Braintrust requires domain-specific AI-powered technical assessment before any professional can be matched for enterprise roles. Assessment results produce a verified skill score that determines ranking within the network — providing a pre-engagement quality signal that Fiverr's review system is not designed to deliver.</p>`,
        bullets: [
            '<strong>Braintrust:</strong> AI domain assessment → scored → ranked → available for matching',
            '<strong>Fiverr:</strong> Seller creates profile → lists gigs → builds reputation through completed orders',
        ],
    },
    {
        title: 'Long Sourcing Cycles vs. Rapid Ranked Matches',
        content: `<p>Engaging technical talent on Fiverr involves browsing service listings, evaluating seller profiles, messaging sellers, waiting for responses, reviewing proposals, and then committing to an engagement — before any technical conversation has occurred. For enterprise projects with technical specificity, this discovery process can extend over days.</p>
<p>Braintrust uses active matching: when a role is posted, our engine immediately runs the pre-assessed talent pool against requirements and surfaces ranked candidates. Top matches are available within hours — not after a browsing and outreach cycle.</p>`,
    },
    {
        title: 'Enterprise Professionals vs. Gig Workers',
        content: `<p>Fiverr's marketplace structure naturally attracts professionals positioned for task-based, transactional work. Many sellers are skilled in their domains, but the platform is optimized for deliverable-based engagements rather than sustained professional relationships, technical collaboration, or enterprise integration.</p>
<p>Braintrust's network is composed of professional engineers, data scientists, and technical specialists who are assessed for enterprise-caliber technical depth and experienced with professional engagement models. The distinction is not just quality — it is the entire framing of what the professional relationship looks like.</p>`,
    },
    {
        title: 'ID Verification vs. Limited Identity Controls',
        content: `<p>Fiverr offers some identity verification features, but they are not universally required and provide limited assurance for enterprise procurement contexts. For organizations with compliance requirements, regulated project environments, or sensitive data handling, the identity verification gap represents meaningful risk.</p>
<p>Braintrust requires government-issued ID verification for every professional in the network — as an access requirement, not an optional feature. Enterprise clients can engage Braintrust professionals knowing that every candidate has a verified identity tied to their profile and work history.</p>`,
    },
];

const faqItems = [
    {
        question: 'What is the main difference between Braintrust and Fiverr?',
        answer: 'Braintrust is a vetted professional network for enterprise technical engagements — every professional is AI-assessed, ID-verified, and ranked by domain skill score. Fiverr is a task-based gig marketplace designed for fixed-scope deliverables, without systematic technical assessment or enterprise-grade identity verification.',
    },
    {
        question: 'Can I hire AI engineers on Fiverr?',
        answer: 'AI engineering sellers exist on Fiverr, but there is no systematic technical assessment, domain ranking, or identity verification. For enterprise AI engineering roles requiring proven technical depth and verification, Braintrust\'s vetted network provides structurally different quality assurance.',
    },
    {
        question: 'Is Braintrust a better option than Fiverr for enterprise hiring?',
        answer: 'For enterprise technical roles — AI engineering, ML development, data science, infrastructure — Braintrust is specifically designed for that context: vetted professionals, AI-powered assessment, identity verification, and enterprise engagement models. Fiverr is optimized for task-based, deliverable-scoped work.',
    },
    {
        question: 'How does Braintrust screen professionals differently from Fiverr?',
        answer: 'Braintrust uses AI-powered domain-specific technical assessments that all professionals complete before entering the network. Results are scored and used to rank candidates by verified skill level. Fiverr\'s primary quality signal is the seller review system — post-engagement ratings that reflect delivery history, not pre-assessed technical capability.',
    },
    {
        question: 'Does Braintrust support the same types of projects as Fiverr?',
        answer: 'Braintrust and Fiverr serve different engagement models. Fiverr is optimized for defined, packaged deliverables. Braintrust supports project, contract, and full-time professional engagements — ongoing technical work requiring collaboration, expertise, and professional depth rather than a fixed output.',
    },
    {
        question: 'How much faster is Braintrust than Fiverr for finding technical talent?',
        answer: 'Braintrust\'s pre-assessed pool allows our matching engine to surface ranked candidates within hours of job posting. Fiverr requires active browsing, outreach, and seller response — a process that can take days when searching for specific technical expertise.',
    },
];

export default function BraintrustVsFiverr() {
    return (
        <MarketplaceComparisonLayout
            competitor="Fiverr"
            competitorSlug="fiverr"
            competitorType="Task-based gig marketplace"
            introHtml={`<p>Fiverr is one of the largest gig marketplaces globally, connecting buyers with service providers across thousands of categories. For discrete, well-defined tasks — content creation, graphic design, small development projects — Fiverr's task-based model offers accessible, efficient sourcing.</p>
<p>Enterprise technical hiring presents a different set of requirements: verified expertise, identity accountability, sustained professional engagement, and technical depth validated before the first conversation. This comparison examines where Braintrust's vetted network model differs structurally from Fiverr's gig marketplace approach — and why those differences matter for enterprise technical talent acquisition.</p>`}
            comparisonRows={comparisonRows}
            differentiatorSections={differentiatorSections}
            summary={`<p>Fiverr and Braintrust serve structurally different hiring contexts. Fiverr is optimized for task-based, deliverable-scoped work where speed of access matters more than pre-engagement verification. The platform works well for commodity creative and developmental tasks where the buyer can evaluate output quality directly.</p>
<p>Braintrust is designed for enterprise professional engagement: sustained technical work, specialized domain expertise, and compliance-ready professional relationships. The vetted network model — AI-powered assessment, identity verification, ranked matching — provides the quality infrastructure that enterprise technical hiring demands.</p>
<p>For organizations sourcing AI engineers, ML specialists, data scientists, or technical specialists for ongoing enterprise work, Braintrust's structural controls provide a meaningfully different basis for talent engagement than Fiverr's open gig model.</p>`}
            faq={faqItems}
            competitorLinks={[
                { label: 'Braintrust vs Upwork', href: '/compare/braintrust-vs-upwork' },
                { label: 'Braintrust vs Toptal', href: '/compare/braintrust-vs-toptal' },
                { label: 'Hire AI Engineers', href: '/hire-ai-engineers' },
                { label: 'Hire Technical Talent', href: '/hire-technical-talent' },
                { label: 'Hire Data Scientists', href: '/hire-data-scientists' },
            ]}
        />
    );
}
