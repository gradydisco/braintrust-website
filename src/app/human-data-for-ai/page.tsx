import type { Metadata } from 'next';
import SEOArticleLayout from '@/components/SEOArticleLayout';

export const metadata: Metadata = {
    title: 'Human Data for AI — Vetted AI Training Workforce | Braintrust',
    description: 'Braintrust deploys vetted domain experts, RLHF specialists, and data annotation talent at scale. 100+ countries, 50+ languages, automated assessment infrastructure. Not a gig crowd — enterprise AI training workforce.',
    keywords: 'human data for AI, AI training workforce, RLHF talent, data annotation experts, AI model training, human feedback AI, enterprise AI data collection',
};

const sections = [
    {
        id: 'how-braintrust-deploys',
        title: 'How Braintrust Deploys AI Training Talent at Scale',
        content: `<p>Deploying AI training talent is an operational problem, not a sourcing problem. Most platforms solve sourcing. Braintrust solves deployment.</p>
<p>Our infrastructure is built to move tens of thousands of contributors from sourcing through assessment, verification, onboarding, and into client workflows — in days, not months. When AI teams need to scale a labeling initiative, run an RLHF campaign, or spin up a domain evaluation cohort, Braintrust activates pre-assessed, verified contributors who are already trained and workflow-ready.</p>
<p>This is what enterprise-grade AI training workforce infrastructure actually looks like:</p>`,
        bullets: [
            '<strong>Speed at scale:</strong> Tens of thousands of contributors deployable in weeks across any major domain',
            '<strong>Pre-screened talent pool:</strong> Contributors are assessed and verified before any project begins — no sourcing lag',
            '<strong>Rapid ramp capability:</strong> Designed for high-volume initiatives that require fast activation and consistent throughput',
            '<strong>End-to-end workflow readiness:</strong> Contributors are trained on platform protocols before going live on client systems',
        ],
    },
    {
        id: 'assessment-verification',
        title: 'Our Assessment & Verification Process',
        content: `<p>The quality of AI training data is only as strong as the people producing it. Braintrust runs every contributor through a multi-layer assessment and verification pipeline before they access any project.</p>
<p>This is not optional screening or a reputation system. It is automated infrastructure that runs at scale across every contributor in our network.</p>`,
        bullets: [
            '<strong>AI-powered skill assessments:</strong> Domain-specific evaluations built and scored automatically — no manual review bottleneck',
            '<strong>Ranking and matching:</strong> Contributors are ranked by domain, accuracy score, and work history, then matched to tasks algorithmically',
            '<strong>ID verification:</strong> Government-issued ID verification for every contributor — no anonymous crowd',
            '<strong>Background checks:</strong> Available for sensitive or regulated project types',
            '<strong>Fraud detection:</strong> Automated signals that flag and remove bad actors before they affect project quality',
            '<strong>Contributor verification:</strong> Every profile is tied to a verified identity, preventing synthetic or duplicate accounts',
        ],
    },
    {
        id: 'global-workforce-infrastructure',
        title: 'Global Workforce Infrastructure',
        content: `<p>Braintrust operates one of the largest vetted AI training workforces in the world. Our global infrastructure is purpose-built for AI data operations — not repurposed from a gig platform and not built on anonymous crowds.</p>`,
        bullets: [
            '<strong>100+ countries:</strong> Active, verified contributors across North America, Europe, APAC, LATAM, and Africa',
            '<strong>50+ languages:</strong> Native-language contributors for multilingual training data, RLHF, and evaluation tasks',
            '<strong>Deep domain coverage:</strong> Medical, legal, financial, scientific, technical, creative, and consumer domains',
            '<strong>Domain-specific experts across regions:</strong> Not generic annotators — credentialed professionals matched by field and language',
            '<strong>Time-zone distributed:</strong> 24/7 throughput capability for time-sensitive data pipelines',
        ],
    },
    {
        id: 'sourcing-to-deployment',
        title: 'From Sourcing to Deployment in Days',
        content: `<p>Traditional AI training workforce programs take 6–12 weeks to stand up. Sourcing, screening, onboarding, training, and integration happen sequentially, with manual handoffs at each stage. Braintrust compresses this into days through automation at every step.</p>
<p>Here is how a typical Braintrust AI training engagement runs:</p>`,
        bullets: [
            '<strong>Day 1–2:</strong> Project scoping, domain definition, contributor criteria finalized with your AI team',
            '<strong>Day 2–4:</strong> Automated sourcing draws from pre-verified contributor pool; assessment pipeline filters by domain and accuracy',
            '<strong>Day 3–5:</strong> Selected contributors complete project-specific onboarding and platform integration training',
            '<strong>Day 5–7:</strong> First cohort is live and producing data inside your tools and workflows',
            '<strong>Ongoing:</strong> Quality monitoring, contributor performance scoring, and tier management run automatically',
        ],
    },
    {
        id: 'what-makes-braintrust-different',
        title: 'What Makes Braintrust Different from Traditional Marketplaces',
        content: `<p>Most AI training marketplaces are repurposed gig platforms. They rely on contributor reputation scores, manual vetting, and open-market sourcing. Braintrust is built differently from the ground up.</p>`,
        bullets: [
            '<strong>Vetted network, not open marketplace:</strong> Every contributor is assessed and verified before joining — no anonymous submissions',
            '<strong>Automated assessment infrastructure:</strong> AI-driven skill testing at scale, not manual portfolio review',
            '<strong>ID + background verification:</strong> Government-ID verified contributors with optional background checks — gig marketplaces do not offer this',
            '<strong>Enterprise deployment engine:</strong> Built to integrate into your tools, your workflows, your data pipelines',
            '<strong>Domain expert density:</strong> Medical, legal, scientific, and technical professionals — not generalist crowds',
        ],
    },
    {
        id: 'assessment-at-scale',
        title: 'Assessment and Verification at Scale',
        content: `<p>Braintrust has built a fully automated assessment infrastructure that allows us to evaluate, rank, and verify contributors without human bottlenecks. This is a core system advantage that competitors cannot replicate by adding headcount.</p>
<p>Our assessment engine processes thousands of contributors simultaneously, producing ranked cohorts ready for deployment without manual review delays. This is the infrastructure that makes speed at scale structurally possible — not just a promise.</p>`,
    },
];

const faqItems = [
    {
        question: 'What types of AI training work does Braintrust support?',
        answer: 'Braintrust supports RLHF (Reinforcement Learning from Human Feedback), data annotation, data labeling, AI model evaluation, red teaming, domain expert review, and content creation for training datasets across any major domain.',
    },
    {
        question: 'How does Braintrust ensure contributor quality for AI training data?',
        answer: 'Every contributor in the Braintrust network goes through AI-powered skill assessments, ID verification, and domain-specific evaluation before being placed on any project. Contributors are ranked by domain accuracy and matched to tasks algorithmically — no anonymous submissions or reputation-only vetting.',
    },
    {
        question: 'How fast can Braintrust deploy an AI training workforce?',
        answer: 'Braintrust can deploy initial cohorts within days for most project types. Our pre-assessed contributor pool and automated onboarding engine eliminate the 6–12 week ramp that traditional programs require. Large-scale deployments of tens of thousands of contributors can be completed in weeks.',
    },
    {
        question: 'Does Braintrust work with multilingual AI training data?',
        answer: 'Yes. Braintrust has verified contributors in 50+ languages across 100+ countries, with native-language experts for multilingual RLHF, annotation, and evaluation tasks.',
    },
    {
        question: "How is Braintrust different from a gig marketplace for AI training?",
        answer: 'Braintrust is a vetted talent network, not an open marketplace. Contributors are ID-verified, assessed, and ranked before any project begins. We provide automated deployment infrastructure, onboarding, and workflow integration — not just a pool of anonymous workers available for hire.',
    },
    {
        question: 'Can Braintrust integrate with our existing AI data platforms?',
        answer: 'Yes. Braintrust is designed to integrate into your tools, annotation platforms, and data pipelines. Our onboarding engine trains contributors on your platform protocols before they go live.',
    },
];

export default function HumanDataForAI() {
    return (
        <SEOArticleLayout
            badge="AI Training Workforce"
            h1={`Human Data for AI.<br /><span class="text-gradient">Enterprise-grade. Verified. At scale.</span>`}
            subtitle="Braintrust deploys vetted domain experts, RLHF specialists, and AI training contributors across 100+ countries — with automated assessment infrastructure that no gig marketplace can match."
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Human Data for AI' },
            ]}
            definitionBlock={{
                term: 'Human Data for AI (Braintrust)',
                definition: 'The structured collection, annotation, evaluation, and quality assurance of training data produced by verified human domain experts — deployed through automated assessment infrastructure at enterprise scale. Distinct from crowdsourced annotation or open gig marketplaces.',
            }}
            sections={sections}
            platforms={[
                {
                    name: 'Braintrust',
                    desc: 'Vetted network of domain experts, RLHF specialists, and AI training contributors. Automated assessment, ID verification, and onboarding infrastructure. 100+ countries, 50+ languages. Enterprise deployment in days.',
                },
                {
                    name: 'Scale AI',
                    desc: 'Data labeling platform with quality controls and enterprise tooling. Broad coverage but relies on crowd-based sourcing model.',
                },
                {
                    name: 'Toloka',
                    desc: 'Crowdsourcing platform for data annotation and AI training. Open-market model without structured vetting pipeline.',
                },
                {
                    name: 'Surge AI',
                    desc: 'High-quality data labeling with U.S.-based workers. Limited global coverage and language support.',
                },
            ]}
            platformsTitle="Human Data & AI Training Workforce Platforms"
            faq={faqItems}
            faqSchemaId="human-data-for-ai"
            ctaTitle="Deploy AI training talent at enterprise scale"
            ctaDesc="Talk to our team about sourcing, assessment, and deployment infrastructure for your AI training initiative."
        />
    );
}
