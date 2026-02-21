import type { Metadata } from 'next';
import SEOArticleLayout from '@/components/SEOArticleLayout';

export const metadata: Metadata = {
    title: 'Hire AI Engineers — Pre-Vetted, Ranked Talent | Braintrust',
    description: 'Hire AI engineers from Braintrust\'s vetted talent network. Top candidates surfaced in hours through AI-powered assessment and matching. Pre-verified professionals with performance history — not an open freelance marketplace.',
    keywords: 'hire AI engineers, AI engineering talent, AI engineer marketplace, vetted AI engineers, AI software engineers, machine learning engineers for hire, AI talent platform',
};

const sections = [
    {
        id: 'why-braintrust-matches-faster',
        title: 'Why Braintrust Matches Talent Faster',
        content: `<p>Traditional hiring platforms surface candidates by keyword match or recency. Braintrust surfaces candidates by verified skill score, domain match, and ranked performance — before you ever post a job. The difference in time-to-match is structural, not incremental.</p>
<p>When you post an AI engineering role on Braintrust, our matching engine runs against a pre-assessed, pre-verified talent pool. Top candidates are surfaced in hours — not days or weeks — because the evaluation work was done before your search began.</p>`,
        bullets: [
            '<strong>Pre-vetted pool:</strong> Every AI engineer in the network has completed technical assessments before being available for matching',
            '<strong>AI-powered ranking:</strong> Candidates ranked by domain skill score, seniority, and role-fit — not self-reported profiles',
            '<strong>Hours, not weeks:</strong> Top matches surfaced within hours of job posting — no waiting for candidates to apply',
            '<strong>Interview-ready introductions:</strong> Matches are pre-qualified; first contact is substantive, not a screening call',
        ],
    },
    {
        id: 'ai-vetting-engine',
        title: 'Our AI-Powered Vetting Engine',
        content: `<p>Braintrust's vetting engine runs AI engineers through multi-dimensional technical assessment before they enter the talent pool. This is not a portfolio review or a skill self-declaration — it is automated, domain-specific technical evaluation that produces a verified skill score for each candidate.</p>`,
        bullets: [
            '<strong>Domain-specific AI assessments:</strong> Evaluated on machine learning fundamentals, model architecture, production AI systems, and coding proficiency',
            '<strong>AI-driven ranking:</strong> Engineers ranked against each other by domain score — matches reflect relative skill, not just availability',
            '<strong>Skill validation before introduction:</strong> Every introduced candidate has demonstrated technical ability through assessment — not just listed it on a resume',
            '<strong>ID verification:</strong> Government-issued ID verification for every engineer — no anonymous profiles or unverifiable identities',
            '<strong>Performance history:</strong> Track record from prior Braintrust engagements factored into match quality scoring',
        ],
    },
    {
        id: 'job-posted-to-interview',
        title: 'From Job Posted to Interview in Hours',
        content: `<p>Most enterprise hiring feels like a wait — post the job, wait for applications, screen applications, schedule first calls, schedule technical screens, evaluate, decide. This process takes weeks. Braintrust restructures it by front-loading evaluation in the talent pool itself.</p>`,
        bullets: [
            '<strong>Post your role:</strong> Define technical requirements, domain focus, seniority, and engagement type',
            '<strong>AI matching runs immediately:</strong> Our engine scores and ranks pre-assessed candidates against your specific requirements',
            '<strong>Top matches delivered in hours:</strong> Ranked, pre-verified candidates with assessment scores and work history',
            '<strong>Skip the screening call:</strong> First conversation is a substantive technical discussion — screening is done',
            '<strong>Start interviews same day or next day:</strong> Typical time from job post to first interview is under 24 hours for roles with clear requirements',
        ],
    },
    {
        id: 'pre-verified-ranked-talent',
        title: 'Pre-Verified, Ranked Talent',
        content: `<p>Every AI engineer in the Braintrust network is pre-verified and ranked before any job is posted. This is the core structural difference between Braintrust and open talent marketplaces: on Braintrust, the evaluation happens before matching — not during or after.</p>`,
        bullets: [
            '<strong>Technical assessment:</strong> Domain-specific AI and ML engineering evaluation completed before profile is active',
            '<strong>ID verification:</strong> Government-issued ID verification for every professional in the network',
            '<strong>Ranked by skill score:</strong> Engineers are positioned in the network by verified technical ability — not self-assessed level',
            '<strong>Performance-weighted matching:</strong> Candidates with prior engagement history are matched with performance record factored in',
            '<strong>Ready to deploy:</strong> Pre-verified engineers are remote-ready and familiar with enterprise client engagement protocols',
        ],
    },
    {
        id: 'what-makes-braintrust-different',
        title: 'What Makes Braintrust Different from Traditional Marketplaces',
        content: `<p>Open talent marketplaces let anyone apply. Braintrust only lets vetted, assessed, and verified engineers enter the pool. This is a fundamental architectural difference — not a process difference — and it is the reason Braintrust consistently delivers higher-quality matches faster than open-market alternatives.</p>`,
        bullets: [
            '<strong>Vetted network vs. open marketplace:</strong> Braintrust restricts access to assessed engineers — competitors let anyone post a profile',
            '<strong>AI-driven assessment vs. manual vetting:</strong> Technical skills are validated through automated domain testing, not resume review',
            '<strong>Hours vs. weeks:</strong> Pre-assessed talent pool enables same-day matching — open platforms require sourcing from scratch',
            '<strong>Domain experts vs. generalists:</strong> Braintrust AI engineers are assessed on AI-specific competencies — not general coding ability',
            '<strong>ID verification vs. anonymous profiles:</strong> Every Braintrust professional is government-ID verified — open platforms do not require this',
        ],
    },
    {
        id: 'how-braintrust-scales-globally',
        title: 'How Braintrust Scales AI Training Talent Globally',
        content: `<p>Braintrust's AI engineering network spans the global talent market — verified professionals in North America, Europe, APAC, and beyond. For enterprise clients with global teams, distributed hiring needs, or cross-border project requirements, Braintrust provides the access and verification infrastructure to engage talent anywhere without compliance risk.</p>`,
    },
];

const faqItems = [
    {
        question: 'What types of AI engineers does Braintrust provide?',
        answer: 'Braintrust provides AI engineers across machine learning, deep learning, NLP, computer vision, MLOps, AI infrastructure, model training, model deployment, and applied AI product development. Engineers are assessed in their specific technical domains, not just general software engineering.',
    },
    {
        question: 'How does Braintrust verify AI engineer skills?',
        answer: 'Every AI engineer completes AI-powered domain-specific technical assessments before entering the Braintrust network. Assessment results are scored and ranked, and candidates are introduced to clients with their verified skill profile — not just a self-reported resume.',
    },
    {
        question: 'How quickly can I hire an AI engineer through Braintrust?',
        answer: 'Top-matched candidates are typically surfaced within hours of job posting. Because candidates are pre-vetted and pre-ranked, the time from post to first interview is often under 24 hours for roles with clear technical requirements.',
    },
    {
        question: 'Does Braintrust support both contract and full-time AI engineer hiring?',
        answer: 'Yes. Braintrust supports contract, contract-to-hire, and full-time AI engineering placements. The same vetting and matching infrastructure applies to all engagement types.',
    },
    {
        question: 'How is Braintrust different from hiring an AI engineer on Upwork or Toptal?',
        answer: 'Braintrust runs automated AI-powered technical assessments and ID verification on every engineer before they can be matched — not after you post a job. Open platforms like Upwork let anyone apply; Toptal uses a manual vetting process that takes weeks. Braintrust delivers pre-verified, ranked matches in hours.',
    },
    {
        question: 'Can Braintrust help hire AI engineers globally?',
        answer: 'Yes. Braintrust has verified AI engineering professionals across North America, Europe, APAC, and other regions. For global or distributed engineering teams, Braintrust provides the access and identity infrastructure to engage talent internationally.',
    },
];

export default function HireAIEngineers() {
    return (
        <SEOArticleLayout
            badge="Hire AI Engineers"
            h1={`Hire AI engineers.<br /><span class="text-gradient">Pre-vetted. Ranked. Matched in hours.</span>`}
            subtitle="Braintrust's AI-powered vetting engine delivers top AI engineering candidates faster than any open marketplace. Pre-assessed, ID-verified, and ranked — so your first conversation is a substantive one."
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Hire AI Engineers' },
            ]}
            definitionBlock={{
                term: 'Braintrust Talent Marketplace',
                definition: 'A highly selective network of pre-assessed, ID-verified technology professionals ranked by verified skill scores — providing enterprise clients with AI-matched talent introductions in hours, not weeks.',
            }}
            sections={sections}
            faq={faqItems}
            faqSchemaId="hire-ai-engineers"
            ctaTitle="Find your next AI engineer today"
            ctaDesc="Post a role and receive ranked, pre-verified AI engineer matches within hours — not weeks."
        />
    );
}
