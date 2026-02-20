import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'AI Training Data — Human Data for AI Model Training at Scale',
    description: 'Access domain experts for RLHF, data labeling, red teaming, model evaluations, and AI training through Braintrust. Enterprise-grade human data from 2M+ professionals across 100+ countries and 50+ languages.',
};

const terminology = [
    { term: 'RLHF', full: 'Reinforcement Learning from Human Feedback', definition: 'Domain experts rate, rank, and refine AI model outputs to provide preference signals that improve model accuracy and alignment.' },
    { term: 'Red Teaming', full: 'Adversarial Testing', definition: 'Structured adversarial testing to identify model vulnerabilities, harmful outputs, and edge cases before production deployment.' },
    { term: 'Model Evaluations (Evals)', full: 'Quality Assessment', definition: 'Standardized evaluation protocols where trained evaluators assess AI outputs for accuracy, safety, helpfulness, and domain correctness.' },
    { term: 'Annotation', full: 'Structured Data Tagging', definition: 'Applying structured labels, tags, and metadata to raw data — text, images, video, and audio — to create training datasets for supervised learning.' },
    { term: 'Data Labeling', full: 'Classification & Categorization', definition: 'Systematic classification including entity recognition, sentiment analysis, intent classification, and semantic segmentation across modalities.' },
    { term: 'Expert Review', full: 'Domain Specialist Validation', definition: 'In-depth review by credentialed specialists — doctors, lawyers, engineers — who validate accuracy and provide authoritative corrections.' },
    { term: 'Benchmark Creation', full: 'Evaluation Dataset Development', definition: 'Design and creation of standardized evaluation datasets that measure model performance across specific tasks and domains over time.' },
    { term: 'Prompt Testing', full: 'Input Optimization', definition: 'Systematic testing and refinement of prompts to evaluate model responses to various patterns, phrasings, and edge cases.' },
    { term: 'Safety Alignment', full: 'Responsible AI', definition: 'Ensuring models behave safely, ethically, and in alignment with intended use — including bias detection, toxicity evaluation, and policy compliance.' },
];

const faqItems = [
    { question: 'What types of AI training data does Braintrust provide?', answer: 'We provide RLHF, data labeling, model evaluation, red teaming, annotation, expert review, benchmark creation, prompt testing, and safety alignment — all powered by credentialed domain experts.' },
    { question: 'How is quality controlled?', answer: 'Multi-layer quality assurance including automated checks, expert review, inter-annotator agreement scoring, and continuous feedback loops with your AI team.' },
    { question: 'What domains do you cover?', answer: 'Engineering, healthcare, legal, finance, marketing, creative writing, and more. Our network spans 100+ countries and thousands of domain specializations.' },
    { question: 'How many languages are supported?', answer: 'We support 50+ languages with native-level annotators and evaluators, enabling multilingual model training and evaluation at global scale.' },
];

export default function AITrainingData() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Products', href: '/products' },
                        { label: 'Talent Marketplace', href: '/products/talent-marketplace' },
                        { label: 'AI Training' },
                    ]} />
                    <div className="hero__content">
                        <div className="badge">AI Training Data</div>
                        <h1>Enterprise-grade<br /><span className="text-gradient">human data infrastructure.</span></h1>
                        <p>Leverage 2M+ domain experts across 100+ countries and 50+ languages for RLHF, red teaming, model evaluation, and AI training at enterprise scale.</p>
                        <div className="hero__actions">
                            <Link href="/book-demo" className="btn btn--primary btn--lg">Get Started</Link>
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
                    </div>
                    <div className="grid grid--3">
                        {[
                            { title: 'RLHF', desc: 'Reinforcement Learning from Human Feedback. Domain experts rate, rank, and refine AI model outputs.' },
                            { title: 'Data Labeling', desc: 'Structured annotation across text, image, video, and audio. Multi-language, multi-domain capability.' },
                            { title: 'Model Evaluation', desc: 'Expert evaluation of AI outputs for accuracy, safety, helpfulness, and domain correctness.' },
                            { title: 'Red Teaming', desc: 'Adversarial testing by domain experts to identify model vulnerabilities and edge cases.' },
                            { title: 'Prompt Engineering', desc: 'Expert-crafted prompts and evaluation frameworks for fine-tuning and alignment.' },
                            { title: 'Domain Expertise', desc: 'Access specialists in healthcare, legal, finance, engineering, and 50+ other verticals.' },
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
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', marginBottom: 'var(--space-2)', flexWrap: 'wrap' }}>
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
                    <FAQ items={faqItems} schemaId="ai-training" />
                </div>
            </section>

            <CTASection
                title="Scale your AI training data"
                description="Connect with our team to discuss your data needs — RLHF, red teaming, evaluations, and more."
                primaryLabel="Contact Sales"
                primaryHref="/book-demo"
            />
        </>
    );
}
