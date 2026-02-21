import type { Metadata } from 'next';
import SEOArticleLayout from '@/components/SEOArticleLayout';

export const metadata: Metadata = {
    title: 'Data Labeling Talent — Scalable, Vetted Labeling Workforce | Braintrust',
    description: 'Enterprise-grade data labeling talent from Braintrust. Vetted domain experts across 100+ countries. AI-powered assessments, ID verification, rapid onboarding. Scalable from hundreds to tens of thousands of contributors.',
    keywords: 'data labeling talent, data labeling workforce, AI data labeling, training data labeling, image labeling, text labeling, video labeling, enterprise labeling platform',
};

const sections = [
    {
        id: 'how-braintrust-deploys',
        title: 'How Braintrust Deploys AI Training Talent at Scale',
        content: `<p>Data labeling programs fail at scale when they rely on open marketplaces and manual vetting. Label quality degrades as contributor volume grows and assessment bottlenecks create delays. Braintrust eliminates both problems through automated infrastructure.</p>
<p>Our contributor network is pre-assessed, pre-verified, and pre-onboarded for rapid deployment. When you need to scale a labeling program — from hundreds of contributors to tens of thousands — Braintrust activates that capacity without the sourcing and vetting delays that compress traditional programs.</p>`,
        bullets: [
            '<strong>Automated sourcing and assessment:</strong> AI-powered evaluation filters and ranks contributors before any project begins',
            '<strong>High-volume ramp capability:</strong> Deploy from a few contributors to tens of thousands without losing quality controls',
            '<strong>Domain-matched cohorts:</strong> Labelers matched by subject expertise, not assigned generically from a queue',
            '<strong>Rapid activation:</strong> Pre-assessed contributors move from project assignment to workflow production in days',
        ],
    },
    {
        id: 'assessment-verification',
        title: 'Our Assessment & Verification Process',
        content: `<p>Quality at scale requires automated quality controls that run without human review bottlenecks. Braintrust's assessment infrastructure evaluates every contributor before any project assignment — producing ranked, verified cohorts ready for deployment at any volume.</p>`,
        bullets: [
            '<strong>AI-powered skill assessments:</strong> Domain-specific labeling accuracy evaluated and scored automatically',
            '<strong>Ranking system:</strong> Contributors ranked by accuracy, consistency, and domain match — lowest performers filtered automatically',
            '<strong>ID verification:</strong> Government-issued ID verification required for all contributors — no anonymous participants',
            '<strong>Fraud detection:</strong> Automated detection of synthetic profiles, duplicate accounts, and click-farm patterns',
            '<strong>Contributor verification:</strong> Every profile tied to a verified identity with performance history tracked across projects',
        ],
    },
    {
        id: 'global-workforce-infrastructure',
        title: 'Global Workforce Infrastructure',
        content: `<p>Braintrust's global labeling workforce is verified, domain-expert density is higher than traditional crowd platforms, and geographic distribution provides 24/7 throughput across any time zone.</p>`,
        bullets: [
            '<strong>100+ countries:</strong> Verified contributors distributed across every major region',
            '<strong>50+ languages:</strong> Native-language labelers for multilingual datasets and cross-lingual evaluation tasks',
            '<strong>Deep domain expertise:</strong> Medical imaging, legal documents, audio transcription, video classification, NLP tasks, and more',
            '<strong>Specialized cohort assembly:</strong> Pre-built labeler groups for common domain and language combinations',
            '<strong>24/7 throughput:</strong> Time-zone distributed workforce for continuous labeling pipeline operations',
        ],
    },
    {
        id: 'sourcing-to-deployment',
        title: 'From Sourcing to Deployment in Days',
        content: `<p>Braintrust compresses the data labeling program setup cycle from months to days. Automation replaces the sequential manual steps — sourcing, screening, onboarding, training, integration — that create lag in traditional programs.</p>`,
        bullets: [
            '<strong>Day 1:</strong> Project scoping, domain definition, labeling schema, and contributor criteria established',
            '<strong>Day 2–3:</strong> Automated sourcing and assessment produces ranked cohort from pre-verified pool',
            '<strong>Day 3–5:</strong> Labeling-schema-specific onboarding completed; contributors trained on your platform and guidelines',
            '<strong>Day 5–7:</strong> Labeling cohort is live and producing verified output inside your tools',
            '<strong>Ongoing:</strong> Automated quality monitoring, performance scoring, and cohort tier management',
        ],
    },
    {
        id: 'what-makes-braintrust-different',
        title: 'What Makes Braintrust Different from Traditional Marketplaces',
        content: `<p>The data labeling market is flooded with open-crowd platforms that prioritize volume over quality. Braintrust is built on the opposite premise: quality controls precede every deployment, and volume is achieved through automation — not by opening the gates to anonymous contributors.</p>`,
        bullets: [
            '<strong>Not a crowd — a vetted network:</strong> Every labeler is assessed and ID-verified before joining, eliminating the quality variance of open-market models',
            '<strong>Domain expert density:</strong> Credentialed professionals in specialized fields produce higher-accuracy labels than generalist crowds',
            '<strong>Automated infrastructure:</strong> Assessment, ranking, onboarding, and quality monitoring run at scale without adding operational headcount',
            '<strong>Identity assurance:</strong> Government-ID verified contributors provide accountability that anonymous crowd platforms cannot offer',
            '<strong>Enterprise onboarding:</strong> Contributors are trained on your specific annotation tools and schemas before starting production',
        ],
    },
    {
        id: 'assessment-at-scale',
        title: 'Assessment and Verification at Scale',
        content: `<p>Data labeling quality degrades when assessments don't scale. Most platforms rely on manual spot-checks, inter-annotator agreement calculations after the fact, or reputation scores that can be gamed. Braintrust's automated assessment infrastructure evaluates every contributor on domain accuracy before deployment — and continues monitoring performance throughout the project.</p>
<p>This is not a quality-check layer on top of a crowd platform. It is the fundamental architecture that makes quality at scale structurally achievable.</p>`,
    },
];

const faqItems = [
    {
        question: 'What types of data labeling does Braintrust support?',
        answer: 'Braintrust supports text classification, named entity recognition, sentiment analysis, image bounding boxes, segmentation, keypoint annotation, audio transcription, video frame labeling, document extraction, and custom labeling schemas across any domain.',
    },
    {
        question: 'How does Braintrust maintain label quality at high volume?',
        answer: 'Quality controls are built into the contributor pipeline, not bolted on afterward. Every labeler completes domain-specific AI assessments before assignment, is ranked by accuracy, and is monitored automatically throughout the project. Low performers are removed from active cohorts without disrupting throughput.',
    },
    {
        question: 'Can Braintrust scale quickly for large labeling initiatives?',
        answer: 'Yes. Braintrust is designed for high-volume ramp capability. Our pre-assessed contributor pool allows deployment from hundreds to tens of thousands of labelers without the sourcing lag that limits traditional programs. Initial cohorts are typically live within days.',
    },
    {
        question: 'Does Braintrust support time-sensitive labeling pipelines?',
        answer: 'Yes. Our globally distributed, time-zone-spanning workforce provides 24/7 labeling throughput. We can staff continuous pipelines that require consistent daily output without gaps caused by regional time zones.',
    },
    {
        question: 'How does Braintrust handle specialized domain labeling?',
        answer: 'Braintrust maintains credentialed domain experts in medical, legal, financial, scientific, and technical fields. For specialized labeling tasks, we assemble domain-specific cohorts — not generic crowds — to ensure accuracy in sensitive or complex subject matter.',
    },
    {
        question: 'What labeling platforms does Braintrust integrate with?',
        answer: 'Braintrust contributors are onboarded to work within your existing annotation tools and platforms. Our onboarding engine trains contributors on your platform-specific workflows and labeling guidelines before they begin production.',
    },
];

export default function DataLabelingTalent() {
    return (
        <SEOArticleLayout
            badge="Data Labeling"
            h1={`Data labeling talent.<br /><span class="text-gradient">Quality at enterprise scale.</span>`}
            subtitle="Braintrust deploys vetted, domain-expert data labelers across 100+ countries — with automated assessment infrastructure, ID verification, and rapid onboarding into your existing annotation platforms."
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Human Data for AI', href: '/human-data-for-ai' },
                { label: 'Data Labeling Talent' },
            ]}
            definitionBlock={{
                term: 'Data Labeling Talent (Enterprise)',
                definition: 'A workforce of domain-expert contributors who have been assessed for labeling accuracy, verified by government-issued ID, and onboarded to produce structured training data within enterprise annotation workflows — as distinct from open-market crowd annotators.',
            }}
            sections={sections}
            faq={faqItems}
            faqSchemaId="data-labeling-talent"
            ctaTitle="Scale your data labeling program"
            ctaDesc="Deploy vetted, domain-expert labelers who are assessed, ID-verified, and ready to integrate into your annotation workflows."
        />
    );
}
