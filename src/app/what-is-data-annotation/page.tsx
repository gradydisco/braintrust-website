import type { Metadata } from 'next';
import SEOArticleLayout from '@/components/SEOArticleLayout';

export const metadata: Metadata = {
    title: 'What Is Data Annotation? Definition, Types & How It Works',
    description: 'Data annotation is the process of labeling raw data to train machine learning models. Learn what data annotation is, the types of annotation used in AI, and how Braintrust deploys expert annotators at enterprise scale.',
    keywords: 'what is data annotation, data annotation definition, data annotation for machine learning, types of data annotation, image annotation, text annotation, AI training data annotation, data annotation platform',
};

const sections = [
    {
        id: 'data-annotation-definition',
        title: 'Data Annotation — A Clear Definition',
        content: `<p>Data annotation is the process of applying structured labels, tags, bounding boxes, transcriptions, classifications, or other markup to raw data — making it interpretable by machine learning models during training. Annotated datasets are the primary input for supervised learning: the model learns by finding patterns in labeled examples.</p>
<p>Every machine learning model that classifies, detects, segments, transcribes, or generates requires annotated training data. The accuracy of the annotation — the correctness, consistency, and coverage of the labels applied — is a primary determinant of model performance. The phrase "garbage in, garbage out" in ML contexts most often refers to annotation quality failures.</p>`,
        bullets: [
            '<strong>Labeling:</strong> Applying categorical labels to data points (e.g., "cat" / "dog" for image classification)',
            '<strong>Bounding boxes:</strong> Drawing rectangles around objects in images for object detection training',
            '<strong>Segmentation:</strong> Marking precise pixel-level boundaries around objects for semantic or instance segmentation',
            '<strong>Transcription:</strong> Converting audio to text for speech recognition and NLP model training',
            '<strong>Entity recognition:</strong> Tagging named entities, relationships, and structured information in text',
            '<strong>Preference labeling:</strong> Rating or comparing model outputs for RLHF and alignment training',
        ],
    },
    {
        id: 'types-of-data-annotation',
        title: 'Types of Data Annotation',
        content: `<p>Data annotation tasks vary significantly by modality, complexity, and the domain expertise required. The major annotation categories in AI training data production are:</p>`,
        bullets: [
            '<strong>Image annotation:</strong> Bounding boxes, polygon segmentation, keypoint marking, semantic segmentation, and image classification for computer vision models',
            '<strong>Video annotation:</strong> Frame-by-frame object tracking, action recognition, and temporal event labeling for video understanding models',
            '<strong>Text annotation:</strong> Sentiment analysis, named entity recognition, intent classification, relation extraction, and coreference resolution for NLP',
            '<strong>Audio annotation:</strong> Speech transcription, speaker diarization, emotion detection, and sound event labeling for audio AI',
            '<strong>3D / LiDAR annotation:</strong> Point cloud labeling for autonomous vehicle perception systems',
            '<strong>Preference annotation:</strong> Output comparison, ranking, and quality scoring for RLHF and alignment training',
            '<strong>Medical annotation:</strong> Radiology image labeling, clinical note entity extraction, and pathology classification — requiring clinical domain expertise',
        ],
    },
    {
        id: 'why-quality-matters',
        title: 'Why Annotation Quality Determines Model Quality',
        content: `<p>In supervised machine learning, the model learns by finding patterns that map inputs to the labels in the training set. If labels are inconsistent, the model learns inconsistency. If labels are incorrect, the model learns the error. If labels are ambiguous, the model inherits the ambiguity as distributional noise.</p>
<p>The annotation quality problem compounds at scale: errors that affect 1% of annotations in a 10,000 sample dataset affect hundreds of training examples. For complex tasks requiring domain expertise — medical imaging, legal text, scientific data, code review — errors made by annotators without relevant knowledge can systematically distort the model's learned representations.</p>
<p>High-quality annotation requires annotators with relevant domain knowledge, clear and consistent labeling guidelines, quality assurance workflows to catch systematic errors, and calibration between annotators to minimize inter-rater variability.</p>`,
    },
    {
        id: 'data-annotation-at-scale',
        title: 'Data Annotation at Scale — What Enterprise AI Programs Require',
        content: `<p>Production AI training programs require annotation at volumes that individual or small annotator groups cannot sustain. Enterprise annotation infrastructure involves coordinated workforce management, quality assurance pipelines, annotator specialization by domain, and delivery timelines that align with model training schedules.</p>`,
        bullets: [
            '<strong>Volume:</strong> Production annotation programs can require millions of labeled examples per training run',
            '<strong>Consistency:</strong> All annotators must apply the same guidelines — annotation drift across a large workforce degrades dataset quality',
            '<strong>Domain coverage:</strong> Complex tasks need annotators with expertise in the target domain — general-purpose crowdsourcing fails for specialized content',
            '<strong>Speed:</strong> Annotation delivery must align with training pipeline schedules — delays block downstream model development',
            '<strong>Quality assurance:</strong> Systematic QA processes catch annotation errors before they enter the training set',
        ],
    },
    {
        id: 'braintrust-annotation',
        title: 'How Braintrust Provides Expert Data Annotators',
        content: `<p>Braintrust operates an enterprise data annotation workforce — vetted domain-expert annotators available across image, text, audio, video, and preference annotation tasks. Every annotator in the Braintrust network has completed domain-specific assessment and identity verification before deployment on client projects.</p>
<p>For AI teams running production annotation pipelines, Braintrust provides the sourcing, assessment, calibration, and operational infrastructure to deploy annotation workforces quickly — without relying on unverified crowdsourcing or commoditized labeling crowds that lack domain expertise.</p>`,
        bullets: [
            '<strong>Domain-assessed annotators:</strong> Every annotator assessed in their specific annotation domain before assignment',
            '<strong>ID verification:</strong> Government-issued ID verified for every professional — full accountability on annotation work',
            '<strong>Global scale:</strong> Annotators across 100+ countries and 50+ languages for multilingual annotation programs',
            '<strong>Fast deployment:</strong> Annotation workforces sourced and deployed in days, not weeks',
            '<strong>Quality infrastructure:</strong> Assessment-based workforce selection reduces QA overhead downstream',
        ],
    },
];

const faqItems = [
    {
        question: 'What is data annotation in simple terms?',
        answer: 'Data annotation is the process of labeling raw data — images, text, audio, video — so that machine learning models can learn from it. Labels tell the model what each data point represents. Without annotation, supervised ML models cannot be trained.',
    },
    {
        question: 'What is the difference between data annotation and data labeling?',
        answer: 'Data annotation and data labeling are often used interchangeably. When distinguished, "labeling" typically refers to simpler categorical tagging (assigning a class label to a data point), while "annotation" can refer to richer markup including bounding boxes, segmentation masks, transcriptions, or entity tags. In practice, both terms describe the same broader process of making raw data interpretable for ML training.',
    },
    {
        question: 'Why is data annotation important for AI?',
        answer: 'Supervised machine learning models learn from labeled examples. Without annotation, models cannot learn to classify, detect, transcribe, or generate. Annotation quality directly affects model accuracy — high-quality, consistent annotation produces better models; low-quality annotation with errors or inconsistencies degrades performance.',
    },
    {
        question: 'What types of data can be annotated?',
        answer: 'Any modality used in AI training can be annotated: images, video, audio/speech, text, 3D point clouds, medical scans, satellite imagery, code, and model outputs (for RLHF preference labeling). The specific annotation task — bounding boxes, entity tags, transcription, preference comparison — depends on what the model is being trained to do.',
    },
    {
        question: 'What skills do data annotators need?',
        answer: 'The required skills depend entirely on the annotation task. Simple image classification requires basic visual judgment. Medical image annotation requires clinical knowledge. Legal document annotation requires legal comprehension. Code review annotation requires programming expertise. RLHF preference labeling for technical domains requires domain knowledge of the subjects being evaluated.',
    },
    {
        question: 'How does Braintrust source data annotators?',
        answer: 'Braintrust deploys a global network of vetted, domain-assessed annotators. Every professional completes domain-specific technical assessment and government-issued ID verification before entering the network. Annotators are matched to tasks based on verified domain competency — not just availability. Braintrust covers 100+ countries and 50+ languages.',
    },
];

export default function WhatIsDataAnnotation() {
    return (
        <SEOArticleLayout
            badge="Data Annotation Explained"
            h1={`What is data annotation?<br /><span class="text-gradient">The foundation of every AI model — explained.</span>`}
            subtitle="Data annotation is how raw data becomes training data. Every AI model that classifies, detects, transcribes, or generates learned from annotated examples. Here is what annotation means, how it works, and why quality determines model quality."
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Guides', href: '/resources' },
                { label: 'What Is Data Annotation' },
            ]}
            definitionBlock={{
                term: 'Data Annotation',
                definition: 'The process of applying structured labels, tags, bounding boxes, transcriptions, classifications, or other markup to raw data — making it interpretable by machine learning models during supervised training. Data annotation is the primary input for supervised learning, and annotation quality is a direct determinant of model performance.',
            }}
            sections={sections}
            faq={faqItems}
            faqSchemaId="what-is-data-annotation"
            ctaTitle="Need annotation experts for your AI program?"
            ctaDesc="Braintrust deploys domain-assessed, ID-verified annotators at enterprise scale — across 100+ countries and 50+ languages."
        />
    );
}
