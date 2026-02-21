import type { Metadata } from 'next';
import SEOArticleLayout from '@/components/SEOArticleLayout';

export const metadata: Metadata = {
    title: 'Hire Technical Talent — Vetted Engineers at Enterprise Scale | Braintrust',
    description: 'Braintrust\'s AI-powered vetting engine delivers pre-assessed, ranked technical talent in hours. Software engineers, AI engineers, data scientists, and technical specialists — verified, ranked, and ready to deploy.',
    keywords: 'hire technical talent, technical talent marketplace, vetted engineers, hire software engineers, technical staffing, enterprise technical hiring, pre-vetted developers',
};

const sections = [
    {
        id: 'why-braintrust-matches-faster',
        title: 'Why Braintrust Matches Talent Faster',
        content: `<p>The speed of technical hiring is constrained by two things: sourcing time and screening time. Most platforms let you search faster. Braintrust eliminates both delays by maintaining a pre-assessed, pre-verified technical talent pool where evaluation has already been done.</p>
<p>When you post a technical role on Braintrust, our matching engine runs against ranked, verified professionals — surfacing your top candidates in hours, with assessment scores and performance history already attached. No sourcing lag. No screening queue.</p>`,
        bullets: [
            '<strong>Pre-assessed talent pool:</strong> Every technical professional has completed domain-specific assessment before matching is available',
            '<strong>AI-powered ranking:</strong> Candidates ranked by verified skill score and domain match — not self-reported seniority',
            '<strong>Hours to first introduction:</strong> Top matches surfaced within hours — not after days of sourcing and initial screening',
            '<strong>Skip the first screen:</strong> Introduced candidates have already cleared the equivalent of a first-round technical evaluation',
        ],
    },
    {
        id: 'ai-vetting-engine',
        title: 'Our AI-Powered Vetting Engine',
        content: `<p>Braintrust's vetting engine is domain-specific, not generic. Software engineers are assessed on software engineering fundamentals. AI engineers are assessed on AI-specific technical depth. Data scientists are assessed on statistical and ML competency. Every assessment is built for the domain — producing rankings that reflect real expertise, not general coding ability.</p>`,
        bullets: [
            '<strong>Domain-specific technical assessment:</strong> Evaluated in the specific technical domain relevant to your role, not a generic coding challenge',
            '<strong>AI-driven scoring and ranking:</strong> Assessment results are scored and candidates ranked within their technical specialty',
            '<strong>Skill validation before introduction:</strong> Every introduced candidate has demonstrated technical ability through domain assessment',
            '<strong>ID verification:</strong> Government-issued ID verification for every professional in the network',
            '<strong>Background checks:</strong> Available for roles requiring additional compliance assurance',
        ],
    },
    {
        id: 'job-posted-to-interview',
        title: 'From Job Posted to Interview in Hours',
        content: `<p>Enterprise technical hiring typically involves multiple sequential stages, each adding days to the timeline. Braintrust compresses this by moving technical evaluation earlier — into the talent pool, before any jobs are posted. By the time you see a candidate in your shortlist, they have already demonstrated the technical fundamentals the role requires.</p>`,
        bullets: [
            '<strong>Post your technical role:</strong> Define domain, seniority, stack requirements, and engagement type',
            '<strong>Immediate AI matching:</strong> Engine scores pre-assessed engineers against your specific requirements in real time',
            '<strong>Shortlist delivered in hours:</strong> Ranked candidates with verified assessment scores, work history, and identity confirmation',
            '<strong>Interview starts the substantive conversation:</strong> No redundant screening step — first meeting goes deep',
            '<strong>Decision-ready faster:</strong> Compressed evaluation process reduces time from post to offer',
        ],
    },
    {
        id: 'pre-verified-ranked-talent',
        title: 'Pre-Verified, Ranked Talent',
        content: `<p>Every professional in the Braintrust technical network carries a verified profile: assessment scores, domain ranking, verified identity, and engagement history. This is the information you need to make a high-confidence hiring decision — available up front, not discovered during the process.</p>`,
        bullets: [
            '<strong>Domain technical assessment completed:</strong> Skills validated before profile activation — not after you post a job',
            '<strong>Ranked within specialty:</strong> Candidates positioned relative to peers in the same technical domain by verified score',
            '<strong>Government-ID verified:</strong> Identity verification required for every professional — no anonymous or unverifiable profiles',
            '<strong>Performance history:</strong> Prior Braintrust engagement history and client feedback included in match scoring',
            '<strong>Remote-ready, enterprise-experienced:</strong> Pre-verified professionals with track records in enterprise technical environments',
        ],
    },
    {
        id: 'what-makes-braintrust-different',
        title: 'What Makes Braintrust Different from Traditional Marketplaces',
        content: `<p>Technical talent marketplaces vary widely in their vetting depth. Open platforms prioritize access over quality. Niche platforms narrow access without necessarily improving verification rigor. Braintrust combines vertical depth with automated assessment infrastructure — delivering high-quality, verified matches at scale.</p>`,
        bullets: [
            '<strong>Vetted network vs. open marketplace:</strong> Only assessed technical professionals enter the Braintrust pool',
            '<strong>AI-driven assessment vs. manual vetting:</strong> Domain-specific technical evaluation completed automatically at scale',
            '<strong>Hours vs. weeks:</strong> Pre-assessed pool enables immediate high-quality matching — open platforms require sourcing from scratch',
            '<strong>ID verification vs. anonymous profiles:</strong> Government-ID verified professionals across every technical specialty',
            '<strong>Domain ranking vs. keyword search:</strong> Matching is based on verified domain performance, not self-selected keywords',
        ],
    },
    {
        id: 'how-braintrust-scales-globally',
        title: 'How Braintrust Scales AI Training Talent Globally',
        content: `<p>Braintrust's technical talent network spans global markets — with assessed, ID-verified professionals in North America, Europe, APAC, and beyond. For enterprise clients building global engineering teams or sourcing specialized talent from international markets, Braintrust provides the access, verification, and compliance infrastructure to engage confidently across borders.</p>`,
    },
];

const faqItems = [
    {
        question: 'What technical specializations does Braintrust cover?',
        answer: 'Braintrust covers software engineering, AI/ML engineering, data science, data engineering, DevOps and infrastructure, backend, frontend, full-stack, mobile, security, and technical leadership roles. All specializations have domain-specific assessment tracks.',
    },
    {
        question: 'How does Braintrust verify technical skills?',
        answer: 'Every technical professional completes AI-powered domain-specific assessments before entering the network. Assessment results are scored and used to rank candidates within their technical specialty — assessments are built for each domain, not a single generic coding challenge.',
    },
    {
        question: 'What types of engagements does Braintrust support?',
        answer: 'Braintrust supports contract, contract-to-hire, and full-time technical placements across all specializations. The same vetting and matching infrastructure applies to all engagement types.',
    },
    {
        question: 'How quickly does Braintrust deliver candidate shortlists?',
        answer: 'Ranked candidate shortlists are typically available within hours of job posting for roles with clear requirements. Because candidates are pre-assessed and pre-verified, the matching process is immediate rather than sequential.',
    },
    {
        question: 'Does Braintrust support senior and principal-level technical hiring?',
        answer: 'Yes. The Braintrust network includes senior, staff, principal, and distinguished engineers across technical specializations. Seniority is factored into assessment, ranking, and matching alongside domain expertise.',
    },
    {
        question: 'How does Braintrust handle global technical hiring?',
        answer: 'Braintrust has assessed, ID-verified technical professionals across North America, Europe, APAC, and other regions. International candidates carry the same verification and assessment credentials as domestic matches, providing the accountability framework needed for cross-border engagements.',
    },
];

export default function HireTechnicalTalent() {
    return (
        <SEOArticleLayout
            badge="Technical Talent"
            h1={`Hire technical talent.<br /><span class="text-gradient">Assessed. Ranked. Delivered fast.</span>`}
            subtitle="Braintrust's AI-powered vetting engine delivers pre-assessed, ID-verified technical professionals across every engineering domain — matched to your requirements in hours, not weeks."
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Hire Technical Talent' },
            ]}
            definitionBlock={{
                term: 'Braintrust Technical Talent Marketplace',
                definition: 'A selective network of assessed, ID-verified technical professionals — ranked by domain-specific skill scores through automated AI assessment — available for immediate, high-confidence matching against enterprise engineering roles.',
            }}
            sections={sections}
            faq={faqItems}
            faqSchemaId="hire-technical-talent"
            ctaTitle="Find your next technical hire today"
            ctaDesc="Post your technical role and receive a ranked, pre-verified candidate shortlist within hours."
        />
    );
}
