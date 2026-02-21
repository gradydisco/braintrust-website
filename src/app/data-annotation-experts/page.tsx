import type { Metadata } from 'next';
import SEOArticleLayout from '@/components/SEOArticleLayout';

export const metadata: Metadata = {
    title: 'Data Annotation Experts — Vetted Annotators at Scale | Braintrust',
    description: 'Braintrust provides enterprise access to vetted data annotation experts across 100+ countries. AI-powered assessments, ID verification, and rapid deployment into your annotation workflows. Not a crowd — domain experts.',
    keywords: 'data annotation experts, annotation workforce, AI data annotation, medical annotation, legal annotation, technical annotators, enterprise data annotation, image annotation experts',
};

const sections = [
    {
        id: 'how-braintrust-deploys',
        title: 'How Braintrust Deploys AI Training Talent at Scale',
        content: `<p>Data annotation quality is determined by contributor expertise, assessment rigor, and workflow consistency — not headcount. Braintrust deploys annotators who are domain-credentialed, AI-assessed, and workflow-ready before they touch a single project.</p>
<p>Our deployment infrastructure handles sourcing, assessment, verification, onboarding, and platform integration automatically. What takes traditional annotation services months to assemble, Braintrust activates in days.</p>`,
        bullets: [
            '<strong>Domain-matched deployment:</strong> Contributors are matched by subject expertise — medical, legal, scientific, technical, multilingual — not assigned generically',
            '<strong>Pre-assessed contributor pool:</strong> Every annotator has completed domain-specific AI evaluation before project assignment',
            '<strong>High-volume ramp capability:</strong> Built to scale from hundreds to tens of thousands of annotators on a single initiative',
            '<strong>Rapid deployment:</strong> First cohorts live in your workflows within days of project kickoff',
        ],
    },
    {
        id: 'assessment-verification',
        title: 'Our Assessment & Verification Process',
        content: `<p>Every data annotation expert in the Braintrust network is evaluated before any project assignment. Our automated assessment pipeline runs domain-specific tests, scores performance, ranks contributors, and filters out poor performers — without manual review bottlenecks.</p>`,
        bullets: [
            '<strong>Domain-specific skill tests:</strong> Annotation accuracy evaluated in medical, legal, financial, technical, and general domains — not generic literacy tests',
            '<strong>AI-scored performance ranking:</strong> Contributors are ranked by accuracy, consistency, and domain knowledge — poor performers are automatically filtered',
            '<strong>ID verification:</strong> Government-issued ID verification for every annotator — no anonymous crowd participation',
            '<strong>Fraud detection:</strong> Automated signals identify and remove synthetic profiles, duplicate accounts, and low-quality contributors',
            '<strong>Background checks:</strong> Available for sensitive annotation projects in regulated industries',
        ],
    },
    {
        id: 'global-workforce-infrastructure',
        title: 'Global Workforce Infrastructure',
        content: `<p>Braintrust maintains a verified annotation workforce across more than 100 countries and 50+ languages. This is not a repurposed freelance pool — it is a purpose-built global infrastructure for enterprise AI data operations.</p>`,
        bullets: [
            '<strong>100+ countries:</strong> Regional coverage across North America, Europe, APAC, LATAM, Middle East, and Africa',
            '<strong>50+ languages:</strong> Native-language annotators for multilingual datasets, cross-lingual evaluation, and localized annotation tasks',
            '<strong>Sensitive domain coverage:</strong> Medical, legal, financial, and scientific annotators with verifiable credentials',
            '<strong>Time-zone distribution:</strong> 24/7 annotation throughput for continuous data pipeline operations',
            '<strong>Specialized cohorts:</strong> Pre-assembled annotator groups segmented by domain, language, and expertise level',
        ],
    },
    {
        id: 'sourcing-to-deployment',
        title: 'From Sourcing to Deployment in Days',
        content: `<p>The traditional annotation program setup cycle — sourcing, vetting, onboarding, training, integration — takes 6 to 12 weeks when done manually. Braintrust automates every step, delivering annotator cohorts that are workflow-ready in days.</p>`,
        bullets: [
            '<strong>Day 1:</strong> Domain, language, and expertise requirements scoped with your AI or data team',
            '<strong>Day 2–3:</strong> Automated sourcing from pre-verified contributor pool; domain assessment filters candidates',
            '<strong>Day 3–5:</strong> Selected annotators complete platform-specific onboarding and task training',
            '<strong>Day 5–7:</strong> Annotation cohort is live inside your tools and producing verified output',
            '<strong>Ongoing:</strong> Automated quality monitoring, contributor performance scoring, and cohort management',
        ],
    },
    {
        id: 'what-makes-braintrust-different',
        title: 'What Makes Braintrust Different from Traditional Annotation Marketplaces',
        content: `<p>Open annotation marketplaces offer volume. Braintrust offers verified quality at volume. The difference is the assessment and verification infrastructure that underpins every contributor deployment.</p>`,
        bullets: [
            '<strong>Vetted, not open:</strong> No anonymous annotator submissions — every contributor is assessed, verified, and ranked',
            '<strong>Domain expert network:</strong> Credentialed professionals in specialized fields, not generalist crowd annotators',
            '<strong>Automated assessment at scale:</strong> AI-driven evaluation that processes thousands of candidates simultaneously without manual bottlenecks',
            '<strong>Identity verification:</strong> Government-ID verified contributors — a control level gig platforms do not provide',
            '<strong>Enterprise integration:</strong> Onboarding engine trains contributors on your specific platforms and workflows before deployment',
        ],
    },
    {
        id: 'assessment-at-scale',
        title: 'Assessment and Verification at Scale',
        content: `<p>Annotation quality at scale requires more than good intentions. It requires infrastructure. Braintrust's automated assessment engine evaluates annotation accuracy, domain knowledge, and task consistency across every contributor — producing ranked cohorts ready for deployment without manual review delays.</p>
<p>This infrastructure is the structural reason Braintrust annotation projects maintain quality at high volume, while open-market alternatives degrade as crowd composition becomes uncontrolled.</p>`,
    },
];

const faqItems = [
    {
        question: 'What types of data annotation does Braintrust support?',
        answer: 'Braintrust supports text annotation, image annotation, audio annotation, video annotation, medical imaging, legal document review, sentiment labeling, entity extraction, classification, and custom annotation schemas across any major domain.',
    },
    {
        question: 'How does Braintrust ensure annotation accuracy?',
        answer: 'Every annotator is evaluated through domain-specific AI-powered assessments before assignment. Contributors are ranked by accuracy and matched to tasks algorithmically. Automated quality monitoring runs throughout the project lifecycle.',
    },
    {
        question: 'Can Braintrust provide annotators with medical or legal expertise?',
        answer: 'Yes. Braintrust has credentialed domain experts in medical, legal, financial, scientific, and technical fields who are verified and available for specialized annotation projects. These are not generalist annotators — they hold relevant professional backgrounds.',
    },
    {
        question: 'How quickly can Braintrust deploy a data annotation team?',
        answer: 'Initial cohorts can be deployed within days. Our pre-assessed contributor pool and automated onboarding engine eliminate the weeks-long ramp of traditional annotation services. Large-scale deployments can be fully operational within one to two weeks.',
    },
    {
        question: 'Does Braintrust verify annotator identities?',
        answer: 'Yes. Every annotator in the Braintrust network undergoes government-issued ID verification. This eliminates anonymous contributions and provides the identity assurance required for sensitive or regulated annotation projects.',
    },
    {
        question: 'How does Braintrust handle multilingual annotation projects?',
        answer: 'Braintrust maintains native-language annotators across 50+ languages in 100+ countries. Project-specific annotation guidelines are localized by native speakers, and domain-specific language experts are matched for technical or specialized tasks.',
    },
];

export default function DataAnnotationExperts() {
    return (
        <SEOArticleLayout
            badge="Data Annotation"
            h1={`Data annotation experts.<br /><span class="text-gradient">Vetted. Verified. Deployed fast.</span>`}
            subtitle="Braintrust provides enterprise access to domain-expert annotators across 100+ countries — assessed through automated AI infrastructure, ID-verified, and deployable into your workflows within days."
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Human Data for AI', href: '/human-data-for-ai' },
                { label: 'Data Annotation Experts' },
            ]}
            definitionBlock={{
                term: 'Data Annotation Expert (Braintrust)',
                definition: 'A domain-credentialed professional who has completed AI-powered domain assessments, passed identity verification, and been ranked within the Braintrust contributor network — providing verified, expert-level annotation for AI training data pipelines.',
            }}
            sections={sections}
            faq={faqItems}
            faqSchemaId="data-annotation-experts"
            ctaTitle="Deploy verified annotation experts today"
            ctaDesc="Scale your AI data pipeline with domain-expert annotators who are assessed, ID-verified, and workflow-ready."
        />
    );
}
