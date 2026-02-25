import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import RevealSection from '@/components/RevealSection';
import AnnotationDemo from '@/components/AnnotationDemo';
import ModelTrainingVisual from '@/components/ModelTrainingVisual';

export const metadata: Metadata = {
    title: 'AI Training Data Solutions — RLHF, Red Teaming, Model Evaluations & Annotation | Braintrust',
    description: 'Enterprise AI training data infrastructure: RLHF, red teaming, model evaluations, data annotation, safety alignment, and benchmark creation from 2M+ domain experts across 100+ countries and 50+ languages. Trusted by leading AI labs.',
    keywords: 'AI training data, RLHF, reinforcement learning human feedback, red teaming AI, model evaluation, data annotation, data labeling, AI safety alignment, prompt testing, benchmark creation, expert review AI',
};

const aiCompanies = [
    'iMerit', 'Scale AI', 'Toloka', 'Mindrift', 'SuperAnnotate', 'Datamundi', 'Mistral',
];

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

const skillCategories = [
    {
        title: 'Data & AI Annotation',
        color: '#6366f1',
        skills: ['AI Annotation Specialist', 'Data Annotator', 'Human-in-the-loop QA', 'AI Trainer', 'Prompt Engineer', 'AI Conversational Designer', 'GPT Specialist', 'Linguistic Annotator', 'Audio Transcriber', 'Transcription QA', 'Labeling QA Specialist', 'Image / Video Tagger', 'Taxonomy Designer', 'Content Rater'],
    },
    {
        title: 'Software Engineering',
        color: '#059669',
        skills: ['Backend & API Development', 'Frontend & UI Engineering', 'Full Stack Engineering', 'DevOps & Automation', 'Data Engineering', 'Cloud Architecture & Infra', 'Security & Access Control', 'QA & Test Engineering', 'Mobile Development', 'Platform Engineering'],
    },
    {
        title: 'Regulated Domains',
        color: '#ec4899',
        skills: ['Health & Life Sciences', 'Law & Policy', 'Finance & Accounting', 'Consulting & Strategy', 'Compliance & Risk', 'Privacy & Ethics', 'Insurance & Benefits', 'Governance & Standards'],
    },
    {
        title: 'Creative & Content',
        color: '#f59e0b',
        skills: ['Content & Copywriting', 'Marketing & Brand Strategy', 'Design & Visual Communication', 'Social & Community', 'Advertising & Campaigns', 'UX Writing & Research', 'Creative Direction', 'Multimedia & Production'],
    },
    {
        title: 'Product',
        color: '#0ea5e9',
        skills: ['Product Management', 'Technical PM', 'Growth & Ops Strategy', 'Business Analysis', 'Product Ownership', 'Platform & Tooling Strategy', 'User Research', 'Workflow Optimization'],
    },
    {
        title: 'STEM & Technical Domains',
        color: '#8b5cf6',
        skills: ['Physics', 'Chemistry', 'Biology / Life Sciences', 'Environmental Science', 'Electrical / Mechanical Eng', 'Mathematics / Statistics', 'Quantitative Analysis', 'Data Science / AI Research', 'Machine Learning Engineering'],
    },
];

const globalRegions = [
    { region: 'United States', pct: '25%' },
    { region: 'Europe', pct: '15%' },
    { region: 'Asia, Middle East, Africa', pct: '40%' },
    { region: 'Canada', pct: '10%' },
    { region: 'South America', pct: '10%' },
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
    const aiLogoTrack = [...aiCompanies, ...aiCompanies];

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

            {/* ====== AI COMPANY LOGO MARQUEE ====== */}
            <section style={{ background: 'white', padding: 'var(--space-10) 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                <div className="container">
                    <p style={{
                        textAlign: 'center', fontSize: '12px', fontWeight: 600,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: 'var(--text-tertiary)', marginBottom: '24px',
                    }}>
                        Trusted by innovative AI companies worldwide
                    </p>
                    <div style={{ overflow: 'hidden', position: 'relative' }}>
                        <div style={{
                            position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', zIndex: 2,
                            background: 'linear-gradient(90deg, #fff 0%, transparent 100%)',
                            pointerEvents: 'none',
                        }} />
                        <div style={{
                            position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', zIndex: 2,
                            background: 'linear-gradient(270deg, #fff 0%, transparent 100%)',
                            pointerEvents: 'none',
                        }} />
                        <div className="ai-logo-track" style={{
                            display: 'flex', alignItems: 'center', gap: '72px',
                            width: 'max-content',
                        }}>
                            {aiLogoTrack.map((name, i) => (
                                <div key={`${name}-${i}`} style={{
                                    flexShrink: 0, display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', height: '40px',
                                }}>
                                    <span style={{
                                        fontSize: '18px', fontWeight: 800,
                                        color: 'var(--text-tertiary)',
                                        letterSpacing: '-0.01em',
                                        opacity: 0.4,
                                        whiteSpace: 'nowrap',
                                    }}>
                                        {name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{`
                    .ai-logo-track {
                        animation: ai-logo-scroll 25s linear infinite;
                    }
                    @keyframes ai-logo-scroll {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                `}</style>
            </section>

            {/* ====== MODEL TRAINING PIPELINE VISUAL ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">How It Works</div>
                            <h2>The AI model training pipeline</h2>
                            <p>From raw data to production-ready models — we power every human touchpoint in the training loop.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <ModelTrainingVisual />
                    </RevealSection>
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

            {/* ====== ANNOTATION DEMO ====== */}
            <section className="section" style={{ background: 'linear-gradient(180deg, var(--color-gray-50) 0%, white 100%)' }}>
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge badge--accent">Live Demo</div>
                            <h2>Data annotation in action</h2>
                            <p>See how our expert annotators label, tag, and structure data for AI model training — with multi-layer quality assurance at every step.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <AnnotationDemo />
                    </RevealSection>
                </div>
            </section>

            {/* ====== MANAGED SERVICES — THE BRAINTRUST DIFFERENCE ====== */}
            <section className="section section--dark" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 0,
                    backgroundImage: 'radial-gradient(ellipse 80% 50% at 70% 60%, rgba(244,132,95,0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 20% 30%, rgba(155,138,255,0.06) 0%, transparent 60%)',
                    pointerEvents: 'none',
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <RevealSection>
                        <div className="section-header" style={{ textAlign: 'center' }}>
                            <div className="badge badge--dark">Managed Services</div>
                            <h2 style={{ color: 'var(--color-white)' }}>
                                The #1 managed service provider for<br />
                                <span className="text-gradient">global AI talent sourcing.</span>
                            </h2>
                            <p style={{ color: 'var(--color-gray-300)', maxWidth: '640px', margin: '0 auto', fontSize: 'var(--text-lg)' }}>
                                We don&apos;t just find talent — we vet, deploy, manage, and deliver outcomes. Our end-to-end pipeline ensures quality from day one.
                            </p>
                        </div>
                    </RevealSection>

                    <RevealSection delay={150}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '900px', margin: 'var(--space-12) auto 0' }}>
                            {[
                                {
                                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
                                    color: '#6366f1',
                                    title: 'Global Talent Sourcing',
                                    desc: 'Source from our 2M+ network across 100+ countries. Find niche domain experts, multilingual annotators, and specialized evaluators — fast.',
                                },
                                {
                                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" /></svg>,
                                    color: '#f59e0b',
                                    title: 'AI-Powered Vetting (AIR)',
                                    desc: 'Every contributor is assessed through AIR — our AI recruiter that conducts voice interviews, skills evaluations, and customizable scoring frameworks.',
                                },
                                {
                                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
                                    color: '#059669',
                                    title: 'IDV & Background Checks',
                                    desc: 'Identity verification, background screening, and NDA enforcement ensure every contributor meets your security and compliance requirements.',
                                },
                                {
                                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
                                    color: '#ec4899',
                                    title: 'Funnel Management & Deployment',
                                    desc: 'From candidate pipeline to active deployment — we manage the full funnel, calibration, onboarding, and ramp to production speed.',
                                },
                                {
                                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>,
                                    color: '#0ea5e9',
                                    title: 'QA & Quality Management',
                                    desc: 'Dedicated QA managers run multi-layer quality pipelines with IAA scoring, gold standard checks, feedback loops, and real-time reporting dashboards.',
                                },
                                {
                                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>,
                                    color: '#8b5cf6',
                                    title: 'Dedicated Project Management',
                                    desc: 'Every engagement has a dedicated PM who owns timelines, SLAs, daily standups, and delivery metrics — acting as an extension of your team.',
                                },
                            ].map((item) => (
                                <div key={item.title} style={{
                                    padding: '24px',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '16px',
                                    borderLeft: `3px solid ${item.color}`,
                                }}>
                                    <div style={{
                                        width: '36px', height: '36px', borderRadius: '10px',
                                        background: `${item.color}1a`, color: item.color,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        marginBottom: '14px',
                                    }}>{item.icon}</div>
                                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'white', marginBottom: '6px' }}>{item.title}</div>
                                    <div style={{ fontSize: '12.5px', color: 'var(--color-gray-300)', lineHeight: 1.6 }}>{item.desc}</div>
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

            {/* ====== EXPERT SKILL CATEGORIES ====== */}
            <section className="section section--gray">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge badge--accent">Expertise</div>
                            <h2>Expert skill categories</h2>
                            <p>Data labeling, evals, annotation, and domain expertise across every category your AI models need — plus multi-language capabilities across all disciplines.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '16px',
                            maxWidth: '1100px',
                            margin: '0 auto',
                        }}>
                            {skillCategories.map((cat) => (
                                <div key={cat.title} style={{
                                    background: 'var(--color-white)',
                                    border: '1px solid var(--color-gray-100)',
                                    borderRadius: '14px',
                                    overflow: 'hidden',
                                }}>
                                    <div style={{
                                        padding: '14px 20px',
                                        background: `${cat.color}08`,
                                        borderBottom: `2px solid ${cat.color}25`,
                                        display: 'flex', alignItems: 'center', gap: '10px',
                                    }}>
                                        <div style={{ width: 10, height: 10, borderRadius: '3px', background: cat.color }} />
                                        <h4 style={{ fontSize: '14px', fontWeight: 700, color: cat.color, margin: 0 }}>{cat.title}</h4>
                                    </div>
                                    <div style={{ padding: '16px 20px' }}>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                            {cat.skills.map((skill) => (
                                                <span key={skill} style={{
                                                    fontSize: '11.5px', fontWeight: 500,
                                                    color: 'var(--text-secondary)',
                                                    padding: '4px 10px', borderRadius: '6px',
                                                    background: 'var(--color-gray-50)',
                                                    border: '1px solid var(--color-gray-100)',
                                                    whiteSpace: 'nowrap',
                                                }}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Multi-language note */}
                        <div style={{
                            maxWidth: '600px', margin: 'var(--space-8) auto 0', textAlign: 'center',
                            padding: '16px 24px', borderRadius: '12px',
                            background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.06))',
                            border: '1px solid rgba(99,102,241,0.12)',
                        }}>
                            <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: 1.6 }}>
                                🌐 <strong>Multi-language capabilities across all categories</strong> — e.g. find Python developers who speak Swedish, or medical annotators fluent in Mandarin.
                            </p>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== GLOBAL NETWORK REACH ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Global Reach</div>
                            <h2>2M+ global talent members<br />vetted &amp; enterprise ready</h2>
                            <p>Our network spans every continent, covering every time zone and language your AI projects need.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        {/* Discipline breakdown */}
                        <div style={{
                            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px',
                            maxWidth: '800px', margin: '0 auto var(--space-10)',
                        }}>
                            {[
                                { pct: '40%', label: 'Software, AI, Data, & Engineering', color: '#6366f1' },
                                { pct: '35%', label: 'Design, Research, Creative', color: '#ec4899' },
                                { pct: '25%', label: 'STEM & Regulated Domains', color: '#059669' },
                            ].map((d) => (
                                <div key={d.label} style={{
                                    textAlign: 'center', padding: '28px 20px',
                                    background: 'var(--color-white)',
                                    border: '1px solid var(--color-gray-100)',
                                    borderRadius: '16px',
                                }}>
                                    <div style={{ fontSize: '42px', fontWeight: 900, color: d.color, lineHeight: 1 }}>{d.pct}</div>
                                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: 1.5, fontWeight: 500 }}>{d.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Region breakdown */}
                        <div style={{
                            display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap',
                        }}>
                            {globalRegions.map((r) => (
                                <div key={r.region} style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    padding: '10px 20px', borderRadius: '100px',
                                    background: 'var(--color-gray-50)',
                                    border: '1px solid var(--color-gray-100)',
                                }}>
                                    <span style={{
                                        width: '32px', height: '32px', borderRadius: '50%',
                                        background: 'white', border: '1px solid var(--color-gray-200)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '12px', fontWeight: 800, color: 'var(--text-primary)',
                                    }}>{r.pct}</span>
                                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{r.region}</span>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== HOW IT WORKS ====== */}
            <section className="section section--gray">
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
                                { step: '02', title: 'Expert Sourcing & Calibration', desc: 'We recruit and vet domain experts from our 2M+ network using AIR assessments, IDV, and background checks — then calibrate them on your specific task through training rounds with gold-standard examples.' },
                                { step: '03', title: 'Production & QA', desc: 'Data operations run continuously with multi-layer quality assurance — automated consistency checks, expert review, IAA scoring, and real-time feedback loops with your team. Dedicated PMs manage the entire engagement.' },
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
            <section className="section">
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
            <section className="section section--gray">
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
