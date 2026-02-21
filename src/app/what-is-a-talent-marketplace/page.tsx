import type { Metadata } from 'next';
import SEOArticleLayout from '@/components/SEOArticleLayout';

export const metadata: Metadata = {
    title: 'What Is a Talent Marketplace? Definition, Types & How They Work',
    description: 'A talent marketplace is a platform connecting businesses with professional talent. Learn how talent marketplaces work, the difference between open and vetted networks, and how Braintrust\'s AI-powered marketplace changes enterprise hiring.',
    keywords: 'what is a talent marketplace, talent marketplace definition, how talent marketplaces work, vetted talent marketplace, freelance marketplace vs talent network, enterprise talent platform, on-demand talent',
};

const sections = [
    {
        id: 'talent-marketplace-definition',
        title: 'Talent Marketplace — A Clear Definition',
        content: `<p>A talent marketplace is a platform that connects organizations seeking skilled professionals with individuals offering their expertise on a project, contract, or full-time basis. Unlike traditional job boards — which primarily serve permanent employment — talent marketplaces facilitate flexible engagement models: short-term projects, multi-month contracts, fractional roles, and ongoing professional relationships.</p>
<p>The core value proposition of a talent marketplace is market liquidity: aggregating supply (professionals available to work) and demand (organizations with roles to fill) in a single platform with matching, communication, and payment infrastructure. The quality differentiation between marketplaces lies in how that matching is done and what quality controls are applied to the supply side.</p>`,
        bullets: [
            '<strong>Market aggregation:</strong> Centralized supply of professionals across disciplines and a centralized demand from hiring organizations',
            '<strong>Matching infrastructure:</strong> Algorithms, search, or active curation that connects the right professional to the right role',
            '<strong>Engagement facilitation:</strong> Contract tools, payment processing, and relationship management that operationalize the work arrangement',
            '<strong>Quality controls:</strong> Vetting, assessment, verification, and reputation signals that differentiate talent quality within the pool',
        ],
    },
    {
        id: 'open-vs-vetted',
        title: 'Open Marketplaces vs. Vetted Talent Networks',
        content: `<p>Talent marketplaces differ most meaningfully along a single architectural dimension: whether they restrict access to the supply side (vetted networks) or allow anyone to create a profile (open marketplaces). This distinction has downstream consequences for match quality, search efficiency, and hiring confidence.</p>`,
        bullets: [
            '<strong>Open marketplaces (e.g., Upwork, Fiverr):</strong> Anyone can create a profile and offer services. Maximum supply breadth, but quality is unevenly distributed and skill signals are largely self-reported. Buyers bear the burden of filtering signal from noise in large applicant pools.',
            '<strong>Vetted networks (e.g., Braintrust, Toptal):</strong> Access to the professional pool is restricted by assessment, interview, or verification requirements. Quality is more concentrated and consistent within the pool. Buyers receive higher baseline quality on matched candidates but from a smaller total pool.',
            '<strong>Hybrid approaches:</strong> Some platforms use reputation systems (ratings, reviews, completion rates) as proxies for vetting — a post-hoc quality signal rather than pre-engagement assessment.',
        ],
    },
    {
        id: 'how-matching-works',
        title: 'How Talent Marketplace Matching Works',
        content: `<p>Matching — the mechanism that connects a professional to a role — is the primary function where talent marketplaces differ in approach and therefore in speed and quality outcome. The three dominant matching models are search-based, algorithmic, and human-curated:</p>`,
        bullets: [
            '<strong>Search-based matching:</strong> The buyer searches the professional pool using keywords, filters, and skill tags. The burden of finding the right match falls primarily on the buyer — browsing profiles until a fit is identified.',
            '<strong>Algorithmic matching:</strong> The platform\'s matching engine scores professionals against role requirements and surfaces ranked candidates. Quality depends on the richness of the signals the algorithm uses — self-reported skills produce noisy matches; verified assessment scores produce more reliable ranking.',
            '<strong>Human-curated matching:</strong> A success manager or recruiter manually identifies suitable candidates from the pool. High quality control but slow and non-scalable — timeline depends on human availability.',
            '<strong>AI-powered matching (Braintrust):</strong> Pre-assessed, ranked professional pool + automated matching engine. Surfaces verified, ranked candidates in hours — combining algorithmic speed with verified quality signals.',
        ],
    },
    {
        id: 'enterprise-talent-marketplace',
        title: 'Enterprise Talent Marketplaces — What Large Teams Need',
        content: `<p>Enterprise hiring teams have requirements that consumer-oriented talent platforms are not designed to meet: compliance frameworks, identity verification, background check workflows, procurement integration, and quality controls that hold across thousands of engagements rather than a handful of one-off projects.</p>`,
        bullets: [
            '<strong>Identity verification:</strong> Enterprise teams need to know who they are engaging — government-issued ID verification is a baseline requirement in many regulated environments',
            '<strong>Background checks:</strong> Available for sensitive roles or regulated industry requirements',
            '<strong>Procurement integration:</strong> Enterprise contracts, invoicing structures, and vendor management workflows',
            '<strong>Quality consistency:</strong> Assessment-based vetting ensures quality doesn\'t degrade as hiring volume scales',
            '<strong>Compliance support:</strong> Worker classification, tax documentation, and regulatory compliance infrastructure',
        ],
    },
    {
        id: 'braintrust-marketplace',
        title: 'How the Braintrust Talent Marketplace Works',
        content: `<p>Braintrust operates a vetted professional talent network — 750K+ assessed, ID-verified professionals across engineering, AI/ML, data science, design, product, and other technical disciplines. The Braintrust marketplace is differentiated from open alternatives by its assessment infrastructure: every professional has completed AI-powered domain-specific technical assessment before their profile is matchable against enterprise roles.</p>
<p>When a client posts a role, the Braintrust matching engine runs against the pre-assessed, pre-ranked talent pool — surfacing verified, scored candidates within hours. The result is a fundamentally shorter hiring cycle for enterprise teams: job posted to first interview in under 24 hours for most technical roles.</p>`,
        bullets: [
            '<strong>750K+ pre-assessed professionals:</strong> Assessment completed before matching — not as part of the hiring process',
            '<strong>AI-powered matching:</strong> Candidates ranked by domain assessment score and role-fit — not by keyword proximity or application recency',
            '<strong>ID-verified talent pool:</strong> Every professional government-ID verified — enterprise-grade accountability',
            '<strong>Hours to match:</strong> Pre-assessed pool enables same-day candidate delivery for roles with clear requirements',
            '<strong>Decentralized model:</strong> No platform fee taken from professional earnings — designed to attract high-quality talent',
        ],
    },
];

const faqItems = [
    {
        question: 'What is a talent marketplace?',
        answer: 'A talent marketplace is a platform that connects organizations seeking professional talent with individuals offering their skills on a project, contract, or full-time basis. Talent marketplaces aggregate supply and demand, providing matching infrastructure, contract tools, and quality controls that facilitate flexible professional engagements.',
    },
    {
        question: 'What is the difference between a talent marketplace and a job board?',
        answer: 'Job boards primarily serve permanent employment — candidates submit applications and employers review them. Talent marketplaces facilitate flexible engagements: project work, contracts, fractional roles, and ongoing professional relationships. Talent marketplaces also typically provide matching infrastructure and payment facilitation that job boards do not.',
    },
    {
        question: 'What is the difference between an open marketplace and a vetted talent network?',
        answer: 'An open marketplace (like Upwork or Fiverr) allows any professional to create a profile and offer services — maximizing supply breadth but creating variable quality. A vetted talent network (like Braintrust) restricts entry to professionals who pass assessment and verification requirements — producing a more concentrated quality pool with higher baseline match confidence.',
    },
    {
        question: 'How do talent marketplaces make money?',
        answer: 'Traditional talent marketplaces earn revenue through platform fees — typically a percentage of the professional\'s earnings (10–20% on open platforms) or a markup on client billing rates. Braintrust operates a decentralized model that does not take a percentage from professional earnings — the platform earns through client-side service fees instead.',
    },
    {
        question: 'What types of talent can be found on a marketplace?',
        answer: 'Talent marketplace coverage varies by platform. Braintrust covers software engineering, AI/ML engineering, data science, DevOps, design, product management, marketing, finance, and other technical and professional disciplines. It also provides AI training workforce capabilities: RLHF specialists, data annotators, and model evaluators.',
    },
    {
        question: 'How does Braintrust\'s talent marketplace differ from Upwork or Toptal?',
        answer: 'Braintrust uses automated AI-powered domain assessment that pre-vets all professionals before they enter the matchable pool — producing a verified, ranked talent database. Upwork is an open marketplace without pre-assessment. Toptal uses manual expert vetting that is thorough but slow. Braintrust delivers pre-ranked, assessment-verified candidates in hours through a scalable automated matching engine.',
    },
];

export default function WhatIsATalentMarketplace() {
    return (
        <SEOArticleLayout
            badge="Talent Marketplace Explained"
            h1={`What is a talent marketplace?<br /><span class="text-gradient">Open platforms vs. vetted networks — explained.</span>`}
            subtitle="A talent marketplace connects businesses with professional talent for project, contract, and full-time work. The most important difference between platforms is not features — it's whether the supply side is assessed and verified before matching begins."
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Guides', href: '/resources' },
                { label: 'What Is a Talent Marketplace' },
            ]}
            definitionBlock={{
                term: 'Talent Marketplace',
                definition: 'A platform that aggregates supply of professional talent and demand from hiring organizations, providing matching, contracting, and payment infrastructure for flexible professional engagements. Talent marketplaces are differentiated by their matching model (search, algorithmic, curated), quality controls (open vs. vetted), and verification depth (self-reported skills vs. assessed and ID-verified).',
            }}
            sections={sections}
            faq={faqItems}
            faqSchemaId="what-is-talent-marketplace"
            ctaTitle="See how a vetted network changes hiring"
            ctaDesc="Braintrust delivers pre-assessed, ID-verified technical talent matched to your requirements in hours — not weeks of open-market sourcing."
        />
    );
}
