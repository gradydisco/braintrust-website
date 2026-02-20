import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'AI Training Data Solutions — Enterprise Human Data Infrastructure',
    description: 'Enterprise AI training data: RLHF, red teaming, model evaluations, annotation, and safety alignment from 2M+ domain experts across 100+ countries and 50+ languages.',
};

const terminology = [
    { term: 'RLHF', full: 'Reinforcement Learning from Human Feedback', definition: 'A technique where domain experts rate, rank, and compare AI model outputs to provide feedback signals that improve model performance, accuracy, and alignment with human preferences.' },
    { term: 'Red Teaming', full: 'Adversarial Testing', definition: 'Structured adversarial testing by domain experts who probe AI models to identify vulnerabilities, harmful outputs, edge cases, and failure modes — ensuring safer and more robust model behavior.' },
    { term: 'Model Evaluations (Evals)', full: 'Systematic Quality Assessment', definition: 'Standardized evaluation protocols where trained evaluators assess AI outputs for accuracy, helpfulness, safety, factual grounding, and domain correctness across controlled test scenarios.' },
    { term: 'Annotation', full: 'Structured Data Tagging', definition: 'The process of applying structured labels, tags, and metadata to raw data — including text, images, video, and audio — to create high-quality training datasets for supervised learning.' },
    { term: 'Data Labeling', full: 'Classification & Categorization', definition: 'Systematic classification of data points into predefined categories. Includes entity recognition, sentiment analysis, intent classification, and semantic segmentation across modalities.' },
    { term: 'Expert Review', full: 'Domain Specialist Validation', definition: 'In-depth review of AI outputs by credentialed domain specialists — doctors, lawyers, engineers, scientists — who validate accuracy and provide authoritative corrections and feedback.' },
    { term: 'Benchmark Creation', full: 'Evaluation Dataset Development', definition: 'Design and creation of standardized evaluation datasets and test suites that measure AI model performance across specific tasks, domains, and difficulty levels over time.' },
    { term: 'Prompt Testing', full: 'Input Optimization & Validation', definition: 'Systematic testing and refinement of prompts to evaluate how models respond to various input patterns, phrasings, and edge cases — optimizing for consistency and quality.' },
    { term: 'Safety Alignment', full: 'Responsible AI Development', definition: 'Ensuring AI models behave safely, ethically, and in alignment with intended use cases. Includes content filtering, bias detection, toxicity evaluation, and policy compliance testing.' },
];

const faqItems = [
    { question: 'What types of AI training data does Braintrust provide?', answer: 'We provide RLHF, data labeling, model evaluation, red teaming, annotation, expert review, benchmark creation, prompt testing, and safety alignment — all powered by credentialed domain experts.' },
    { question: 'How is quality controlled?', answer: 'Multi-layer quality assurance including automated checks, expert review, inter-annotator agreement scoring, and continuous feedback loops with your AI team.' },
    { question: 'What domains do you cover?', answer: 'Engineering, healthcare, legal, finance, marketing, creative writing, and more. Our network spans 100+ countries and thousands of domain specializations.' },
    { question: 'How many languages are supported?', answer: 'We support 50+ languages with native-level annotators and evaluators, enabling multilingual model training and evaluation at global scale.' },
];

export default function AITrainingDataSolution() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }, { label: 'AI Training Data' }]} />
                    <div className="hero__content">
                        <div className="badge">AI Training Data</div>
                        <h1>Enterprise-grade<br /><span className="text-gradient">human data infrastructure.</span></h1>
                        <p>Access 2M+ domain experts across 100+ countries and 50+ languages for RLHF, red teaming, model evaluations, and everything your AI needs to improve.</p>
                        <div className="hero__actions">
                            <a href="/book-demo" className="btn btn--primary btn--lg">Contact Sales</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Stats */}
            <section className="section section--dark">
                <div className="container">
                    <div className="stats-grid">
                        <div><div className="stat__value text-gradient">2M+</div><div className="stat__label">Domain Experts</div></div>
                        <div><div className="stat__value text-gradient">100+</div><div className="stat__label">Countries</div></div>
                        <div><div className="stat__value text-gradient">50+</div><div className="stat__label">Languages</div></div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Capabilities</div>
                        <h2>Full-spectrum AI data solutions</h2>
                        <p>Everything your AI team needs to train, evaluate, and align models at enterprise scale.</p>
                    </div>
                    <div className="grid grid--3">
                        {[
                            { title: 'RLHF at Scale', desc: 'Reinforcement Learning from Human Feedback with domain experts who understand your model\'s needs and provide structured preference signals.' },
                            { title: 'Red Teaming', desc: 'Adversarial testing by domain experts to identify vulnerabilities, harmful outputs, and edge cases before your model reaches production.' },
                            { title: 'Model Evaluations', desc: 'Systematic evaluation of AI outputs for accuracy, safety, helpfulness, and domain correctness with standardized protocols.' },
                            { title: 'Data Annotation & Labeling', desc: 'Structured annotation across text, image, video, and audio with multi-language, multi-domain capability and rigorous QA.' },
                            { title: 'Multi-Language Support', desc: 'Data annotation, evaluation, and RLHF in 50+ languages with native-level evaluators and annotators.' },
                            { title: 'Quality Assurance', desc: 'Multi-layer QA with automated checks, expert review, inter-annotator agreement scoring, and continuous feedback loops.' },
                        ].map((item) => (
                            <div key={item.title} className="card card--feature">
                                <h4 style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Terminology & Definitions */}
            <section className="section section--gray">
                <div className="container">
                    <div className="section-header">
                        <div className="badge badge--accent">Terminology</div>
                        <h2>AI training data glossary</h2>
                        <p>Key concepts in enterprise AI data infrastructure — explained clearly.</p>
                    </div>
                    <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        {terminology.map((item) => (
                            <div key={item.term} className="card card--feature" style={{ padding: 'var(--space-6)' }}>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>
                                    <h4 style={{ color: 'var(--color-primary)', margin: 0 }}>{item.term}</h4>
                                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontWeight: 500 }}>{item.full}</span>
                                </div>
                                <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.7, margin: 0 }}>{item.definition}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    <div className="section-header"><h2>FAQ</h2></div>
                    <FAQ items={faqItems} schemaId="ai-training-data" />
                </div>
            </section>

            <CTASection title="Power your AI with human expertise" description="Get a custom proposal for your AI training data needs — RLHF, red teaming, evaluations, and more." primaryLabel="Contact Sales" primaryHref="/book-demo" />
        </>
    );
}
