import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import RevealSection from '@/components/RevealSection';

export const metadata: Metadata = {
    title: 'AI Training Data Solutions — RLHF, Red Teaming, Model Evaluations & Annotation | Braintrust',
    description: 'Enterprise AI training data infrastructure: RLHF, red teaming, model evaluations, data annotation, safety alignment, and benchmark creation from 2M+ domain experts across 100+ countries and 50+ languages. Trusted by leading AI labs.',
    keywords: 'AI training data, RLHF, reinforcement learning human feedback, red teaming AI, model evaluation, data annotation, data labeling, AI safety alignment, prompt testing, benchmark creation, expert review AI',
};

const terminology = [
    { term: 'RLHF', full: 'Reinforcement Learning from Human Feedback', definition: 'A technique where domain experts rate, rank, and compare AI model outputs to provide feedback signals that improve model performance, accuracy, and alignment with human preferences. Braintrust provides credentialed evaluators across dozens of domains for high-quality preference data at scale.' },
    { term: 'Red Teaming', full: 'Adversarial Testing', definition: 'Structured adversarial testing by domain experts who probe AI models to identify vulnerabilities, harmful outputs, edge cases, and failure modes — ensuring safer and more robust model behavior before production deployment.' },
    { term: 'Model Evaluations', full: 'Systematic Quality Assessment', definition: 'Standardized evaluation protocols where trained evaluators assess AI outputs for accuracy, helpfulness, safety, factual grounding, and domain correctness across controlled test scenarios. Critical for tracking model quality over time.' },
    { term: 'Annotation', full: 'Structured Data Tagging', definition: 'The process of applying structured labels, tags, and metadata to raw data — including text, images, video, and audio — to create high-quality training datasets for supervised learning pipelines.' },
    { term: 'Data Labeling', full: 'Classification & Categorization', definition: 'Systematic classification of data points into predefined categories. Includes entity recognition, sentiment analysis, intent classification, and semantic segmentation across text, image, and audio modalities.' },
    { term: 'Expert Review', full: 'Domain Specialist Validation', definition: 'In-depth review of AI outputs by credentialed domain specialists — doctors, lawyers, engineers, scientists, financial analysts — who validate accuracy and provide authoritative corrections and expert-level feedback.' },
    { term: 'Benchmark Creation', full: 'Evaluation Dataset Development', definition: 'Design and creation of standardized evaluation datasets and test suites that measure AI model performance across specific tasks, domains, and difficulty levels. Essential for rigorous model comparison and progress tracking.' },
    { term: 'Prompt Testing', full: 'Input Optimization & Validation', definition: 'Systematic testing and refinement of prompts to evaluate how models respond to various input patterns, phrasings, and edge cases — optimizing for consistency, quality, and safety across deployment contexts.' },
    { term: 'Safety Alignment', full: 'Responsible AI Development', definition: 'Ensuring AI models behave safely, ethically, and in alignment with intended use cases. Includes content filtering, bias detection, toxicity evaluation, and policy compliance testing with human-in-the-loop validation.' },
];

const capabilities = [
    {
        title: 'RLHF at Scale',
        desc: 'Reinforcement Learning from Human Feedback with domain experts who understand your model\'s needs. Preference ranking, comparison tasks, and structured feedback signals — delivered at the volume and quality your training pipeline demands.',
        stat: 'Enterprise',
        statLabel: 'scale available',
    },
    {
        title: 'Red Teaming & Adversarial Testing',
        desc: 'Identify vulnerabilities, harmful outputs, and edge cases before your model reaches production. Our red team experts specialize in safety-critical domains including healthcare, legal, finance, and content moderation.',
        stat: 'Pre-launch',
        statLabel: 'safety validation',
    },
    {
        title: 'Model Evaluations (Evals)',
        desc: 'Systematic evaluation of AI outputs for accuracy, safety, helpfulness, and domain correctness with standardized protocols. Track quality over time with consistent, reproducible evaluation methodologies.',
        stat: 'Standardized',
        statLabel: 'protocols',
    },
    {
        title: 'Data Annotation & Labeling',
        desc: 'Structured annotation across text, image, video, and audio with multi-language, multi-domain capability. Rigorous quality assurance with inter-annotator agreement scoring and continuous feedback loops.',
        stat: 'Multi-modal',
        statLabel: 'text, image, audio',
    },
    {
        title: 'Multi-Language Coverage',
        desc: 'Data annotation, evaluation, and RLHF in 50+ languages with native-level evaluators and annotators. Critical for training multilingual models and ensuring performance parity across languages.',
        stat: '50+',
        statLabel: 'languages',
    },
    {
        title: 'Quality Assurance & Governance',
        desc: 'Multi-layer QA with automated checks, expert review, inter-annotator agreement scoring, and continuous feedback loops. Full audit trails and data governance for regulated industries.',
        stat: 'Multi-layer',
        statLabel: 'QA pipeline',
    },
];

const domains = [
    { name: 'Software Engineering', examples: 'Code review, system design, debugging, algorithms, DevOps, cloud architecture' },
    { name: 'Healthcare & Medicine', examples: 'Clinical reasoning, medical coding, drug interactions, patient communication, diagnostics' },
    { name: 'Legal & Compliance', examples: 'Contract analysis, case law research, regulatory compliance, legal writing, IP law' },
    { name: 'Finance & Economics', examples: 'Financial modeling, risk analysis, market research, accounting standards, tax law' },
    { name: 'Science & Research', examples: 'Scientific papers, lab protocols, data analysis, statistical methods, peer review' },
    { name: 'Creative & Content', examples: 'Copywriting, brand voice, creative writing, content strategy, UX writing' },
    { name: 'Education & Training', examples: 'Curriculum design, assessment creation, pedagogy, tutoring quality, adaptive learning' },
    { name: 'Marketing & Analytics', examples: 'Campaign analysis, SEO strategy, social media, customer insights, A/B testing' },
];

const faqItems = [
    { question: 'What types of AI training data does Braintrust provide?', answer: 'Braintrust provides the full spectrum of human data for AI development: RLHF (Reinforcement Learning from Human Feedback), data labeling and annotation, model evaluations, red teaming and adversarial testing, expert review, benchmark creation, prompt testing, and safety alignment — all powered by credentialed domain experts.' },
    { question: 'How is quality controlled?', answer: 'Our multi-layer QA pipeline includes automated consistency checks, expert review, inter-annotator agreement scoring (IAA), and continuous feedback loops with your AI team. We maintain full audit trails and provide regular quality reports. For critical tasks, we offer consensus-based evaluation with multiple independent reviewers.' },
    { question: 'What domains do your experts cover?', answer: 'Our expert network spans every major domain: software engineering, healthcare, legal, finance, science, education, creative, marketing, and more. Experts are credentialed and vetted — doctors, lawyers, engineers, scientists, and career professionals with verified expertise in their fields.' },
    { question: 'How many languages are supported?', answer: 'We support 50+ languages with native-level annotators and evaluators, enabling multilingual model training and evaluation at global scale. This includes major world languages, regional dialects, and low-resource languages where data quality is especially critical.' },
    { question: 'How does pricing work for AI training data?', answer: 'Pricing is based on task type, domain complexity, volume, and turnaround requirements. We offer both project-based and ongoing engagement models. Enterprise clients receive volume discounts and dedicated project management. Contact our team for a custom proposal.' },
    { question: 'What is the difference between RLHF and model evaluations?', answer: 'RLHF generates feedback that directly trains the model — experts rank, rate, or compare outputs to create preference data used in the training loop. Model evaluations, by contrast, measure model quality after training — experts assess outputs against standardized criteria to track performance, identify weaknesses, and validate improvements.' },
    { question: 'How quickly can you ramp up for large projects?', answer: 'Our network of 2M+ domain experts across 100+ countries allows rapid scaling. For standard annotation and labeling tasks, we can ramp to thousands of contributors within days. For specialized domain tasks (e.g., medical RLHF), ramp time is typically 1-2 weeks to ensure expert qualification and calibration.' },
    { question: 'Do you support custom data governance and security requirements?', answer: 'Yes. We offer configurable data retention policies, NDA-backed contributor agreements, SOC 2 compliant infrastructure, and support for custom security and privacy requirements. We regularly accommodate enterprise security questionnaires and can implement project-specific data handling procedures.' },
];

export default function AITrainingDataSolution() {
    return (
        <>
            {/* ====== HERO ====== */}
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }, { label: 'AI Training Data' }]} />
                    <div className="hero__content">
                        <div className="badge">AI Training Data</div>
                        <h1>Enterprise-grade<br /><span className="text-gradient">human data infrastructure.</span></h1>
                        <p>Access 2M+ domain experts across 100+ countries and 50+ languages for RLHF, red teaming, model evaluations, annotation, and everything your AI needs to improve.</p>
                        <div className="hero__actions">
                            <a href="/book-demo" className="btn btn--primary btn--lg">Contact Sales</a>
                            <a href="#capabilities" className="btn btn--secondary btn--lg">See Capabilities →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== CORE STATS ====== */}
            <section className="section section--dark">
                <div className="container">
                    <RevealSection>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '16px',
                        }}>
                            {[
                                { value: '2M+', label: 'Domain Experts', desc: 'Credentialed professionals across every major domain' },
                                { value: '100+', label: 'Countries', desc: 'Global coverage for culturally-aware data operations' },
                                { value: '50+', label: 'Languages', desc: 'Native-level evaluators for multilingual model training' },
                                { value: '24/7', label: 'Operations', desc: 'Continuous delivery across time zones and geographies' },
                            ].map((s) => (
                                <div key={s.label} style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '16px',
                                    padding: '28px 24px',
                                    textAlign: 'center',
                                }}>
                                    <div className="text-gradient" style={{ fontSize: '42px', fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
                                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginTop: '6px', lineHeight: 1.5 }}>{s.desc}</div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== CAPABILITIES ====== */}
            <section className="section" id="capabilities">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Capabilities</div>
                            <h2>Full-spectrum AI data solutions</h2>
                            <p>Everything your AI team needs to train, evaluate, and align models at enterprise scale — from initial annotation to safety alignment.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div className="grid grid--3">
                            {capabilities.map((item) => (
                                <div key={item.title} style={{
                                    background: 'var(--color-white)',
                                    border: '1px solid rgba(50, 50, 93, 0.08)',
                                    borderRadius: '14px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))', opacity: 0.4 }} />
                                    <div style={{ padding: '24px 20px 16px', flex: 1 }}>
                                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>{item.title}</h4>
                                        <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{item.desc}</p>
                                    </div>
                                    <div style={{
                                        borderTop: '1px solid rgba(50, 50, 93, 0.05)',
                                        padding: '10px 20px',
                                        display: 'flex', alignItems: 'center', gap: '6px',
                                        background: 'rgba(245, 87, 51, 0.012)',
                                        marginTop: 'auto',
                                    }}>
                                        <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>{item.stat}</span>
                                        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontWeight: 500 }}>{item.statLabel}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== DOMAIN EXPERTISE ====== */}
            <section className="section section--gray">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge badge--accent">Domain Coverage</div>
                            <h2>Experts in every domain your model needs</h2>
                            <p>Our expert network spans every major knowledge domain — credentialed professionals who understand the nuances your model is learning.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '14px',
                        }}>
                            {domains.map((d) => (
                                <div key={d.name} style={{
                                    background: 'var(--color-white)',
                                    border: '1px solid var(--color-gray-100)',
                                    borderRadius: '12px',
                                    padding: '20px',
                                }}>
                                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>{d.name}</h4>
                                    <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--text-tertiary)', margin: 0 }}>{d.examples}</p>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== HOW IT WORKS ====== */}
            <section className="section">
                <div className="container container--narrow">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Process</div>
                            <h2>How a data engagement works</h2>
                            <p>From scoping to delivery, our process ensures quality, consistency, and alignment with your AI team&apos;s needs.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                            {[
                                { step: '01', title: 'Scope & Design', desc: 'We work with your AI team to define task specifications, quality criteria, domain requirements, and annotation guidelines. Custom rubrics are developed for your specific evaluation needs.' },
                                { step: '02', title: 'Expert Sourcing & Calibration', desc: 'We recruit and vet domain experts from our 2M+ network, then calibrate them on your specific task through training rounds with gold-standard examples and feedback.' },
                                { step: '03', title: 'Production & QA', desc: 'Data operations run continuously with multi-layer quality assurance — automated consistency checks, expert review, IAA scoring, and real-time feedback loops with your team.' },
                                { step: '04', title: 'Delivery & Integration', desc: 'Labeled data, preference signals, and evaluation results are delivered in your preferred format. We support custom APIs, cloud storage push, and direct pipeline integrations.' },
                            ].map((s, i) => (
                                <div key={s.step} style={{
                                    display: 'grid',
                                    gridTemplateColumns: '70px 1fr',
                                    gap: '24px',
                                    padding: '28px 0',
                                    borderBottom: i < 3 ? '1px solid var(--color-gray-100)' : 'none',
                                }}>
                                    <div style={{
                                        fontSize: '32px', fontWeight: 800,
                                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                        lineHeight: 1, paddingTop: '4px',
                                    }}>{s.step}</div>
                                    <div>
                                        <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>{s.title}</h4>
                                        <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== TERMINOLOGY / GLOSSARY — SEO Rich ====== */}
            <section className="section section--gray">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge badge--accent">Glossary</div>
                            <h2>AI training data terminology</h2>
                            <p>Key concepts in enterprise AI data infrastructure — explained clearly for technical and non-technical stakeholders.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {terminology.map((item) => (
                                <div key={item.term} style={{
                                    background: 'var(--color-white)',
                                    border: '1px solid var(--color-gray-100)',
                                    borderRadius: '12px',
                                    padding: '20px 24px',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
                                        <h4 style={{ color: 'var(--color-primary)', margin: 0, fontSize: '15px', fontWeight: 700 }}>{item.term}</h4>
                                        <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 500 }}>{item.full}</span>
                                    </div>
                                    <p style={{ fontSize: '13px', lineHeight: 1.7, margin: 0, color: 'var(--text-secondary)' }}>{item.definition}</p>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== FAQ — SEO Rich ====== */}
            <section className="section">
                <div className="container container--narrow">
                    <div className="section-header">
                        <h2>AI Training Data FAQ</h2>
                        <p>Common questions about enterprise AI data operations, quality assurance, and working with Braintrust.</p>
                    </div>
                    <FAQ items={faqItems} schemaId="ai-training-data" />
                </div>
            </section>

            <CTASection
                title="Power your AI with human expertise"
                description="Get a custom proposal for your AI training data needs — RLHF, red teaming, evaluations, annotation, and more. Our team will scope your project and provide a detailed timeline."
                primaryLabel="Contact Sales"
                primaryHref="/book-demo"
            />
        </>
    );
}
