import type { Metadata } from 'next';
import SEOArticleLayout from '@/components/SEOArticleLayout';

export const metadata: Metadata = {
    title: 'Hire Data Scientists — Pre-Vetted, Ranked Data Science Talent | Braintrust',
    description: 'Hire data scientists from Braintrust\'s pre-assessed talent network. AI-powered domain testing, ID verification, and ranked matching. Top data science candidates surfaced in hours. Enterprise-grade talent marketplace.',
    keywords: 'hire data scientists, data science talent, vetted data scientists, data science marketplace, data scientist for hire, senior data scientists, applied data science talent',
};

const sections = [
    {
        id: 'why-braintrust-matches-faster',
        title: 'Why Braintrust Matches Talent Faster',
        content: `<p>Data science talent is highly specialized and unevenly distributed across experience levels, domain expertise, and technical tooling. Finding the right data scientist on an open platform requires extensive manual filtering — by skill claims, domain claims, and work samples that are difficult to verify.</p>
<p>Braintrust eliminates that friction. Every data scientist in the network has cleared domain-specific technical assessments and been ranked by verified score before any matching occurs. When you post a data science role, the candidates surfaced have already been validated — the remaining work is fit evaluation, not skill verification.</p>`,
        bullets: [
            '<strong>Pre-assessed data science pool:</strong> Every candidate has completed statistical and domain-specific technical evaluation',
            '<strong>Ranked by verified score:</strong> Data scientists ranked on actual assessment performance — not self-reported seniority',
            '<strong>Hours to first introduction:</strong> Top matches delivered within hours of job posting, not days of sourcing',
            '<strong>Eliminates phone screen stage:</strong> Introduced candidates are pre-qualified — first contact is substantive technical discussion',
        ],
    },
    {
        id: 'ai-vetting-engine',
        title: 'Our AI-Powered Vetting Engine',
        content: `<p>Braintrust's vetting engine evaluates data scientists across the full scope of data science practice — statistical methods, machine learning application, data engineering, experimentation design, business problem framing, and domain-specific tooling. Assessment is automated, domain-specific, and produces a verified ranking for every candidate.</p>`,
        bullets: [
            '<strong>Statistical and analytical assessment:</strong> Evaluated on statistics, probability, experimental design, and analytical reasoning',
            '<strong>ML application coverage:</strong> Assessment includes supervised and unsupervised learning, model selection, evaluation, and interpretation',
            '<strong>Domain-specific testing:</strong> Financial, healthcare, marketing, product, and operations data science tested in domain context',
            '<strong>Tool and ecosystem validation:</strong> Python, R, SQL, and major data science ecosystem proficiency assessed',
            '<strong>Skill validation before introduction:</strong> Candidates are introduced with verified assessment scores — not self-rated levels',
        ],
    },
    {
        id: 'job-posted-to-interview',
        title: 'From Job Posted to Interview in Hours',
        content: `<p>Data science hiring delays typically accumulate at the screening stage: initial calls with underqualified candidates, take-home assignments, multiple technical review rounds. Braintrust moves that work earlier — into the talent pool itself — so by the time a candidate appears in your shortlist, they have already cleared the equivalent of a first-round technical screen.</p>`,
        bullets: [
            '<strong>Post your data science role:</strong> Define domain (product analytics, NLP, financial modeling, etc.), seniority, and tooling requirements',
            '<strong>Immediate ranked matching:</strong> Our engine scores the pre-assessed pool against your requirements and surfaces ranked candidates',
            '<strong>Shortlist available within hours:</strong> Verified assessment scores and work history included with every candidate',
            '<strong>Interview-ready from first contact:</strong> No redundant screening call — first conversation is a technical or role-fit deep dive',
            '<strong>Compressed time to offer:</strong> End-to-end hiring timelines significantly shorter than open-platform sourcing',
        ],
    },
    {
        id: 'pre-verified-ranked-talent',
        title: 'Pre-Verified, Ranked Talent',
        content: `<p>Every data scientist in the Braintrust network carries a verified profile — not a self-declared skill list. Assessment results, domain ranking, identity verification, and work history are all attached to every candidate before they appear in a client shortlist.</p>`,
        bullets: [
            '<strong>Domain technical assessment:</strong> Evaluated in the specific area of data science most relevant to your role',
            '<strong>Network-relative ranking:</strong> Candidates ranked against peer data scientists in the Braintrust network by verified score',
            '<strong>ID verification:</strong> Government-issued ID verification required for every professional — no anonymous profiles',
            '<strong>Performance track record:</strong> Prior engagement history and client feedback included in match scoring',
            '<strong>Remote and enterprise ready:</strong> Pre-verified professionals with experience in enterprise data science environments',
        ],
    },
    {
        id: 'what-makes-braintrust-different',
        title: 'What Makes Braintrust Different from Traditional Marketplaces',
        content: `<p>Data science is a field where claimed expertise is easy and verified expertise is rare. Open marketplaces surface whoever applies; Braintrust surfaces only those who have been tested. This is the core architectural difference — and it is the reason match quality on Braintrust is higher and hiring timelines are shorter.</p>`,
        bullets: [
            '<strong>Verified expertise vs. claimed expertise:</strong> Assessment results replace resume self-reporting as the primary qualification signal',
            '<strong>Vetted network vs. open marketplace:</strong> Only assessed data scientists enter the Braintrust pool — open platforms accept all applications',
            '<strong>Same-day matching vs. days of sourcing:</strong> Pre-assessed pool allows immediate ranking against requirements',
            '<strong>ID verification vs. anonymous profiles:</strong> Every Braintrust professional is government-ID verified',
            '<strong>Domain specialists vs. generalists:</strong> Assessment identifies domain depth — candidates are matched by data science specialty, not just job title',
        ],
    },
    {
        id: 'how-braintrust-scales-globally',
        title: 'How Braintrust Scales AI Training Talent Globally',
        content: `<p>Braintrust's data science talent network spans global markets — providing enterprise clients with access to verified data scientists across North America, Europe, APAC, and beyond. International access is supported with identity verification for every professional, providing the accountability and compliance framework required for cross-border engagements.</p>`,
    },
];

const faqItems = [
    {
        question: 'What data science specializations does Braintrust cover?',
        answer: 'Braintrust covers product analytics, growth data science, financial modeling, healthcare analytics, marketing data science, NLP, recommendation systems, causal inference, experimental design, and machine learning engineering — assessed in domain-specific technical evaluations.',
    },
    {
        question: 'How does Braintrust assess data scientists?',
        answer: 'Data scientists complete AI-powered domain-specific technical assessments covering statistics, machine learning application, experimental design, data manipulation, and domain-specific problem framing. Assessment results are scored and used to rank candidates within the network.',
    },
    {
        question: 'How quickly can I hire a data scientist through Braintrust?',
        answer: 'Ranked candidate shortlists are typically available within hours of posting. Because candidates are pre-assessed and pre-verified, many clients conduct first interviews within 24–48 hours of job posting.',
    },
    {
        question: 'Can Braintrust match senior and staff-level data scientists?',
        answer: 'Yes. The Braintrust network includes senior, staff, and principal-level data scientists who have been assessed and ranked at their experience tier. Seniority is factored into matching alongside domain expertise and skill score.',
    },
    {
        question: 'Does Braintrust support contract and full-time data science placements?',
        answer: 'Yes. Braintrust supports contract, contract-to-hire, and full-time placements for data scientists. The same vetting and matching infrastructure applies regardless of engagement type.',
    },
    {
        question: 'How does Braintrust compare to a data science staffing firm?',
        answer: 'Traditional staffing firms use manual recruiter processes — sourcing, screening, and presenting candidates over days or weeks. Braintrust uses automated AI-powered assessment and matching that surfaces ranked, pre-verified candidates in hours. Quality controls are systematic rather than recruiter-dependent.',
    },
];

export default function HireDataScientists() {
    return (
        <SEOArticleLayout
            badge="Hire Data Scientists"
            h1={`Hire data scientists.<br /><span class="text-gradient">Verified expertise. Matched in hours.</span>`}
            subtitle="Braintrust delivers pre-assessed, ranked data scientists through AI-powered matching — faster and with higher verified quality than any open marketplace or traditional staffing approach."
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Hire Data Scientists' },
            ]}
            definitionBlock={{
                term: 'Pre-Verified Data Scientist (Braintrust)',
                definition: 'A data science professional who has completed AI-powered domain-specific technical assessment, been ranked within the Braintrust network by verified score, and passed government-issued ID verification — available for immediate, high-confidence matching against enterprise roles.',
            }}
            sections={sections}
            faq={faqItems}
            faqSchemaId="hire-data-scientists"
            ctaTitle="Find your next data scientist today"
            ctaDesc="Post a role and receive a ranked, pre-verified data science candidate shortlist within hours."
        />
    );
}
