import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import RevealSection from '@/components/RevealSection';
import AnnotationDemo from '@/components/AnnotationDemo';
import ModelTrainingVisual from '@/components/ModelTrainingVisual';

export const metadata: Metadata = {
    title: 'AI Training Data Solutions — Expert Sourcing, Vetting & Managed Services | Braintrust',
    description: 'The #1 managed service provider for expert contributor sourcing. We source, vet, and deploy domain experts into your annotation platforms and AI training pipelines — faster and better than anyone. 2M+ experts across 100+ countries and 50+ languages.',
    keywords: 'AI training data, expert sourcing, data annotation, RLHF, model evaluation, managed services, AI talent, domain experts, data labeling, contributor management',
};

const aiCompanies = [
    'iMerit', 'Scale AI', 'Toloka', 'Mindrift', 'SuperAnnotate', 'Datamundi', 'Mistral',
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
    { question: 'What does Braintrust do for AI training data?', answer: 'Braintrust is the premier managed service provider for expert contributor sourcing. We find, vet, and deploy domain experts into your AI training pipelines — then manage communications, training, quality assurance, and project delivery end-to-end. Our mission is getting vetted experts onto your projects fast using AIR (our AI-powered assessment platform), so you can deliver data outcomes at scale.' },
    { question: 'How do your experts integrate with our existing tools?', answer: 'Our contributors work directly inside your systems — your annotation platforms, your RLHF tooling, your custom internal tools. Your data stays secure in your own environment, and we handle the people side: sourcing, vetting, training, communication, and ongoing management to deliver the data outcomes you need.' },
    { question: 'How fast can you ramp contributors?', answer: 'Our network of 2M+ experts across 100+ countries allows rapid scaling. For standard annotation and labeling tasks, we can ramp to thousands of contributors within days. For specialized domain tasks (e.g., medical RLHF), ramp time is typically 1-2 weeks to ensure qualification and calibration.' },
    { question: 'How do you vet and qualify contributors?', answer: 'Every contributor goes through AIR (our AI-powered assessment platform) for skills evaluation, plus identity verification (IDV), background checks, and NDA enforcement. For domain-specific tasks, we verify credentials and run calibration rounds with gold-standard examples before deployment.' },
    { question: 'What domains do your experts cover?', answer: 'Our expert network spans every major domain: software engineering, healthcare, legal, finance, science, education, creative, marketing, STEM research, and more. Experts are credentialed and vetted — doctors, lawyers, engineers, scientists, and career professionals with verified expertise.' },
    { question: 'How many languages are supported?', answer: 'We support 50+ languages with native-level annotators and evaluators, enabling multilingual model training and evaluation at global scale. This includes major world languages, regional dialects, and low-resource languages.' },
    { question: 'How does quality management work?', answer: 'Every engagement includes dedicated QA managers and project managers who run multi-layer quality pipelines: automated consistency checks, inter-annotator agreement scoring (IAA), gold standard checks, continuous feedback loops, and real-time reporting dashboards. Full audit trails included.' },
    { question: 'How does pricing work?', answer: 'Pricing is based on task type, domain complexity, volume, and turnaround requirements. We offer both project-based and ongoing engagement models. Enterprise clients receive volume discounts and dedicated project management. Contact our team for a custom proposal.' },
];

export default function AITrainingDataSolution() {
    const aiLogoTrack = [...aiCompanies, ...aiCompanies];

    return (
        <>
            {/* ====== HERO ====== */}
            <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
                {/* Animated gradient mesh */}
                <div className="ai-hero-mesh" style={{
                    position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                    background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(99,102,241,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 30%, rgba(245,87,51,0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 60%, rgba(5,150,105,0.04) 0%, transparent 60%)',
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }, { label: 'AI Training Data' }]} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '48px', alignItems: 'center' }}>
                        {/* Left — Hero text */}
                        <div>
                            <div className="badge" style={{ marginBottom: '16px' }}>AI Training Data</div>
                            <h1 style={{ textAlign: 'left' }}>Expert contributors for<br /><span className="text-gradient">every AI training need.</span></h1>
                            <p style={{ maxWidth: '480px', textAlign: 'left', marginTop: '16px' }}>
                                We source, vet, and deploy domain experts into your annotation platforms and training pipelines — delivering the data points your models need, faster than anyone.
                            </p>
                            <div className="hero__actions" style={{ justifyContent: 'flex-start', marginTop: '28px' }}>
                                <a href="/book-demo" className="btn btn--primary btn--lg">Contact Sales</a>
                                <a href="#how-we-work" className="btn btn--secondary btn--lg">How We Work →</a>
                            </div>
                        </div>
                        {/* Right — Annotation demo */}
                        <div>
                            <AnnotationDemo />
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
                        Powering contributor pipelines for leading AI companies
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

            {/* ====== WHAT WE DO — POSITIONING ====== */}
            <section className="section">
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <RevealSection>
                        <div style={{
                            textAlign: 'center',
                            padding: 'var(--space-10) var(--space-8)',
                            borderRadius: 'var(--radius-2xl)',
                            background: 'linear-gradient(135deg, rgba(99,102,241,0.04), rgba(245,87,51,0.03))',
                            border: '1px solid rgba(99,102,241,0.08)',
                        }}>
                            <h2 style={{ marginBottom: 'var(--space-4)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
                                A talent network built for<br />
                                <span className="text-gradient">the AI training era.</span>
                            </h2>
                            <p style={{ maxWidth: '660px', margin: '0 auto', fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                                Braintrust is a <strong>staffing platform and talent network</strong> with the entire infrastructure to source, vet, and deliver expert contributors better and faster than anyone. We work with clients to customize outputs, QA processes, and project management — running fully managed engagements where your data stays secure in your own systems while we handle the hard people part.
                            </p>
                        </div>
                    </RevealSection>
                </div>
            </section>


            {/* ====== CORE STATS ====== */}
            <section className="section section--dark">
                <div className="container">
                    <RevealSection>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                            {[
                                { value: '2M+', label: 'Vetted Experts', desc: 'Credentialed professionals across every major domain, ready to deploy' },
                                { value: '100+', label: 'Countries', desc: 'Global sourcing for culturally-aware, multilingual data operations' },
                                { value: '50+', label: 'Languages', desc: 'Native-level contributors for multilingual annotation and evaluation' },
                                { value: 'Days', label: 'Ramp Time', desc: 'From kickoff to production — we move fast without sacrificing quality' },
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

            {/* ====== MANAGED SERVICES — THE ENGINE ====== */}
            <section className="section" id="capabilities">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Our Engine</div>
                            <h2>End-to-end managed services</h2>
                            <p>We handle the full lifecycle — from sourcing to delivery — so your team can focus on building models, not managing people.</p>
                        </div>
                    </RevealSection>

                    <RevealSection delay={150}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '24px', maxWidth: '1060px', margin: '0 auto', alignItems: 'stretch' }}>
                            {/* Left — Human image panel */}
                            <div style={{
                                borderRadius: '20px', overflow: 'hidden', position: 'relative',
                                minHeight: '480px',
                                background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
                            }}>
                                <img
                                    src="/images/talent_collab_1772040088156.png"
                                    alt="Expert contributors collaborating on AI training data"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, position: 'absolute', inset: 0 }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(30,27,75,0.95) 100%)' }} />
                                <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px' }}>
                                    <div style={{ display: 'flex', marginBottom: '16px' }}>
                                        {['/images/talent_portrait_1.png', '/images/talent_portrait_2.png', '/images/talent_portrait_4.png', '/images/talent_portrait_5.png'].map((src, i) => (
                                            <img key={i} src={src} alt="" style={{
                                                width: 40, height: 40, borderRadius: '50%', objectFit: 'cover',
                                                border: '2px solid rgba(255,255,255,0.3)',
                                                marginLeft: i > 0 ? '-12px' : 0,
                                            }} />
                                        ))}
                                        <div style={{
                                            width: 40, height: 40, borderRadius: '50%',
                                            background: 'rgba(255,255,255,0.15)', color: 'white',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '11px', fontWeight: 700, marginLeft: '-12px',
                                            border: '2px solid rgba(255,255,255,0.3)',
                                        }}>2M+</div>
                                    </div>
                                    <h3 style={{ color: 'white', fontSize: '26px', fontWeight: 800, margin: '0 0 10px', lineHeight: 1.2 }}>
                                        Vetted experts,<br />deployed in days.
                                    </h3>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', margin: 0, lineHeight: 1.7 }}>
                                        Every contributor is sourced from our 2M+ network, assessed through AIR, identity-verified, and calibrated before they touch your data.
                                    </p>
                                </div>
                            </div>

                            {/* Right — Capability items */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                {[
                                    {
                                        color: '#6366f1', title: 'Global Expert Sourcing', desc: 'Source from 2M+ vetted experts across 100+ countries. Find niche domain specialists in days.', stat: '2M+ experts',
                                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                                    },
                                    {
                                        color: '#f59e0b', title: 'AI-Powered Vetting', desc: 'AIR conducts voice interviews, skills evaluations, and customizable scoring frameworks.', stat: 'AI-assessed',
                                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 2a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" /></svg>
                                    },
                                    {
                                        color: '#059669', title: 'IDV & Background Checks', desc: 'Identity verification, NDA enforcement, and screening for enterprise compliance.', stat: 'SOC 2 compliant',
                                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                                    },
                                    {
                                        color: '#ec4899', title: 'Funnel & Deployment', desc: 'Full funnel management — sourcing, calibration, onboarding, and seamless deployment.', stat: 'Full lifecycle',
                                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /></svg>
                                    },
                                    {
                                        color: '#0ea5e9', title: 'Quality Assurance', desc: 'Multi-layer QA — IAA scoring, gold standard checks, feedback loops, and reporting.', stat: 'Multi-layer QA',
                                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>
                                    },
                                    {
                                        color: '#8b5cf6', title: 'Dedicated PMs', desc: 'Dedicated PM per engagement — timelines, SLAs, standups, and delivery metrics.', stat: 'Always-on',
                                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                                    },
                                ].map((item) => (
                                    <div key={item.title} style={{
                                        background: 'var(--color-white)',
                                        border: '1px solid rgba(50,50,93,0.08)',
                                        borderRadius: '14px',
                                        padding: '18px',
                                        display: 'flex', flexDirection: 'column', gap: '8px',
                                    }}>
                                        <div style={{
                                            width: '34px', height: '34px', borderRadius: '10px',
                                            background: `${item.color}0a`, color: item.color,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}>{item.icon}</div>
                                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{item.title}</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                                        <span style={{ fontSize: '12px', fontWeight: 700, color: item.color, marginTop: 'auto' }}>{item.stat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== DATA TYPES WE STAFF FOR ====== */}
            <section className="section section--gray">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge badge--accent">What We Staff For</div>
                            <h2>Expert contributors for every AI data type</h2>
                            <p>Whatever your training pipeline needs — RLHF, annotation, evals, red teaming — we supply the people to get it done.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                            {/* Top row — 2 featured cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                {/* RLHF — hero card */}
                                <div style={{
                                    background: 'linear-gradient(135deg, #312e81, #4338ca)',
                                    borderRadius: '18px', padding: '28px', position: 'relative', overflow: 'hidden',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '220px',
                                }}>
                                    <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                                        <img src="/images/talent_portrait_3.png" alt="" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.2)' }} />
                                    </div>
                                    <div style={{
                                        position: 'absolute', top: '50%', left: '60%', width: '200px', height: '200px',
                                        background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
                                        transform: 'translate(-50%, -50%)', pointerEvents: 'none',
                                    }} />
                                    <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>Most Requested</span>
                                    <h3 style={{ color: 'white', fontSize: '22px', fontWeight: 800, margin: '0 0 8px' }}>RLHF Contributors</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', margin: 0, lineHeight: 1.7, maxWidth: '340px' }}>
                                        Domain experts who rate, rank, and compare model outputs — providing the human preference signals your post-training pipeline needs.
                                    </p>
                                    <span style={{ marginTop: '14px', fontSize: '13px', fontWeight: 700, color: '#a5b4fc' }}>Enterprise scale →</span>
                                </div>

                                {/* Data Annotators */}
                                <div style={{
                                    background: 'var(--color-white)', border: '1px solid var(--color-gray-100)',
                                    borderRadius: '18px', padding: '28px',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                    position: 'relative', overflow: 'hidden',
                                }}>
                                    <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 70%)' }} />
                                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#0596690a', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>
                                    </div>
                                    <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px' }}>Data Annotators &amp; Labelers</h4>
                                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: '0 0 12px' }}>
                                        Structured annotation across text, image, video, and audio. Multi-language, multi-domain capability.
                                    </p>
                                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#059669' }}>Multi-modal →</span>
                                </div>
                            </div>

                            {/* Middle row — 3 compact cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
                                {[
                                    { title: 'Model Evaluators', desc: 'Trained evaluators assessing AI outputs for accuracy, safety, and domain correctness.', stat: 'Custom rubrics', color: '#f59e0b' },
                                    { title: 'Red Team Experts', desc: 'Adversarial specialists probing your models for vulnerabilities and harmful outputs.', stat: 'Pre-launch safety', color: '#ec4899' },
                                    { title: 'Prompt Engineers', desc: 'Specialists testing and optimizing prompt designs across input patterns and edge cases.', stat: 'Input optimization', color: '#0ea5e9' },
                                ].map((item) => (
                                    <div key={item.title} style={{
                                        background: 'var(--color-white)',
                                        border: '1px solid var(--color-gray-100)',
                                        borderRadius: '14px',
                                        padding: '22px', borderTop: `3px solid ${item.color}`,
                                    }}>
                                        <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>{item.title}</h4>
                                        <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: '0 0 10px' }}>{item.desc}</p>
                                        <span style={{ fontSize: '12px', fontWeight: 700, color: item.color, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.stat}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom — full-width callout */}
                            <div style={{
                                background: 'var(--color-white)',
                                border: '1px solid var(--color-gray-100)',
                                borderRadius: '16px',
                                padding: '24px 28px',
                                display: 'flex', alignItems: 'center', gap: '24px',
                            }}>
                                <div style={{ display: 'flex', flexShrink: 0 }}>
                                    {['/images/talent_portrait_1.png', '/images/talent_portrait_5.png'].map((src, i) => (
                                        <img key={i} src={src} alt="" style={{
                                            width: 44, height: 44, borderRadius: '50%', objectFit: 'cover',
                                            border: '3px solid white', marginLeft: i > 0 ? '-10px' : 0,
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                        }} />
                                    ))}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 4px' }}>Domain Expert Reviewers</h4>
                                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7 }}>
                                        Credentialed specialists — doctors, lawyers, engineers, scientists — who validate AI output accuracy and provide authoritative corrections.
                                    </p>
                                </div>
                                <span style={{ fontSize: '13px', fontWeight: 700, color: '#8b5cf6', whiteSpace: 'nowrap', flexShrink: 0 }}>Credentialed →</span>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>


            {/* ====== CASE STUDIES — VERIFIED RESULTS ====== */}
            <section className="section" style={{ background: 'var(--color-gray-950)', position: 'relative', overflow: 'hidden' }}>
                {/* Ambient glow blobs */}
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '45%', height: '60%', background: 'radial-gradient(ellipse, rgba(99,102,241,0.10) 0%, transparent 65%)', filter: 'blur(40px)' }} />
                    <div style={{ position: 'absolute', bottom: '-10%', right: '5%', width: '40%', height: '50%', background: 'radial-gradient(ellipse, rgba(244,132,95,0.06) 0%, transparent 65%)', filter: 'blur(40px)' }} />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <RevealSection>
                        <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '48px', maxWidth: '1100px', margin: '0 auto', alignItems: 'center' }}>
                            {/* Left — Heading panel */}
                            <div>
                                <div style={{
                                    width: 64, height: 64, borderRadius: '18px',
                                    background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15))',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '28px',
                                    boxShadow: '0 8px 32px rgba(99,102,241,0.15)',
                                }}>
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="1.8" strokeLinecap="round">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '18px' }}>
                                    <span style={{ color: 'white' }}>Verified Results</span><br />
                                    <span style={{ background: 'linear-gradient(135deg, #a5b4fc, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Across Human Data</span><br />
                                    <span style={{ color: 'white' }}>Workflows</span>
                                </h2>
                                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px', maxWidth: '360px' }}>
                                    Proven performance backed by real client deployments — not hypothetical benchmarks.
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {['/images/talent_portrait_1.png', '/images/talent_portrait_2.png', '/images/talent_portrait_4.png'].map((src, i) => (
                                        <img key={i} src={src} alt="" style={{
                                            width: 40, height: 40, borderRadius: '50%', objectFit: 'cover',
                                            border: '2.5px solid var(--color-gray-950)',
                                            marginLeft: i > 0 ? '-10px' : 0,
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                        }} />
                                    ))}
                                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginLeft: '14px', fontWeight: 500 }}>Deployed across Fortune 500 AI teams</span>
                                </div>
                            </div>

                            {/* Right — Case study cards */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                                {[
                                    {
                                        stat: '+25,000',
                                        statLabel: 'contributors',
                                        subtitle: 'in the past 18 months',
                                        desc: 'For a leading data labeling vendor, we placed over 25,000 contributors in the past 18 months, scaling to thousands/month to support high-volume multilingual and compliance-heavy pipelines.',
                                        quote: 'Unlike closed platforms with hidden metrics, Braintrust gives you full visibility into who you\'re hiring — and how they perform.',
                                        color: '#6366f1',
                                        gradient: 'linear-gradient(135deg, #6366f1, #818cf8)',
                                    },
                                    {
                                        stat: '10,000+',
                                        statLabel: 'candidate assessments',
                                        subtitle: 'per month',
                                        desc: 'For a leading AI Training Data vendor, AIR powered 10,000+ candidate assessments/month, enabling them to onboard over 4,000+ fully vetted contributors/month into live client projects.',
                                        quote: 'Most vetting tools stop at a score. We give you explainability — every score is backed by a transcript and audit trail.',
                                        color: '#059669',
                                        gradient: 'linear-gradient(135deg, #059669, #34d399)',
                                    },
                                    {
                                        stat: '< 3 days',
                                        statLabel: 'to launch',
                                        subtitle: 'full-service projects',
                                        desc: 'For a leading data labeling vendor, we helped them launch full-service projects in <3 days while simultaneously running AIR-based assessments around the clock to screen thousands of internal contributors.',
                                        quote: 'Most platforms lock you into their contributors or tools. Braintrust gives you both flexibility and speed — at scale.',
                                        color: '#f59e0b',
                                        gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                                    },
                                ].map((study, i) => (
                                    <div key={i} style={{
                                        background: 'rgba(255,255,255,0.97)',
                                        borderRadius: '18px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        boxShadow: `0 4px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,1)`,
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    }}
                                        className="card--hover-lift"
                                    >
                                        <div style={{ height: '4px', background: study.gradient }} />
                                        <div style={{ padding: '28px 32px 22px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '28px', marginBottom: '18px' }}>
                                                <div style={{ flexShrink: 0 }}>
                                                    <h3 style={{
                                                        fontSize: '32px', fontWeight: 900, margin: 0, lineHeight: 1.1,
                                                        background: study.gradient,
                                                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                                    }}>{study.stat}</h3>
                                                    <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{study.statLabel}</span>
                                                    <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-tertiary)', marginTop: '2px' }}>{study.subtitle}</div>
                                                </div>
                                                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0, maxWidth: '380px' }}>
                                                    {study.desc}
                                                </p>
                                            </div>
                                            <div style={{
                                                borderTop: '1px solid var(--color-gray-100)',
                                                paddingTop: '16px',
                                                display: 'flex', alignItems: 'flex-start', gap: '10px',
                                            }}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={study.color} strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                                                </svg>
                                                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-primary)', margin: 0, fontWeight: 500 }}>
                                                    {study.quote}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== EXPERT SKILL CATEGORIES ====== */}
            <section className="section" style={{ background: 'linear-gradient(180deg, var(--color-white) 0%, #F8F7FF 100%)' }}>
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Expertise</div>
                            <h2>Real experts across<br /><span className="text-gradient">every discipline.</span></h2>
                            <p>Our contributors aren&apos;t generic crowd workers — they&apos;re credentialed professionals performing specialized work across every domain your AI training pipeline demands.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '24px', maxWidth: '1100px', margin: '0 auto', alignItems: 'stretch' }}>
                            {/* Left — Human feature panel */}
                            <div style={{
                                borderRadius: '20px', overflow: 'hidden', position: 'relative',
                                minHeight: '520px',
                                background: 'linear-gradient(160deg, #1a1a2e 0%, #16213e 100%)',
                            }}>
                                <img
                                    src="/images/talent_tech_pro_1772039971431.png"
                                    alt="Expert contributor working on AI data annotation"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, position: 'absolute', inset: 0 }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(26,26,46,0.3) 0%, rgba(26,26,46,0.9) 70%, rgba(26,26,46,0.98) 100%)' }} />
                                <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '28px' }}>
                                    {/* Floating stat chips */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                                        {['50+ Languages', '100+ Countries', '6 Domains'].map(label => (
                                            <span key={label} style={{
                                                fontSize: '13px', fontWeight: 700, padding: '6px 14px',
                                                borderRadius: '20px',
                                                background: 'rgba(255,255,255,0.08)',
                                                border: '1px solid rgba(255,255,255,0.12)',
                                                color: 'rgba(255,255,255,0.75)',
                                                backdropFilter: 'blur(8px)',
                                            }}>{label}</span>
                                        ))}
                                    </div>
                                    <h3 style={{ color: 'white', fontSize: '26px', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
                                        The people behind<br />the data.
                                    </h3>
                                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', margin: 0, lineHeight: 1.7 }}>
                                        Doctors reviewing medical AI output. Engineers validating code generation. Linguists annotating in their native language. Every contributor is matched by proven expertise — not just availability.
                                    </p>
                                    {/* Avatar row */}
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', gap: '4px' }}>
                                        {['/images/talent_portrait_2.png', '/images/talent_portrait_4.png', '/images/talent_portrait_3.png'].map((src, i) => (
                                            <img key={i} src={src} alt="" style={{
                                                width: 32, height: 32, borderRadius: '50%', objectFit: 'cover',
                                                border: '2px solid rgba(255,255,255,0.2)',
                                                marginLeft: i > 0 ? '-8px' : 0,
                                            }} />
                                        ))}
                                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginLeft: '10px' }}>Join 2M+ verified experts</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right — Category cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                {skillCategories.map((cat) => (
                                    <div key={cat.title} style={{
                                        background: 'var(--color-white)',
                                        border: '1px solid var(--color-gray-100)',
                                        borderRadius: '14px',
                                        overflow: 'hidden',
                                        display: 'flex', flexDirection: 'column',
                                    }}>
                                        <div style={{
                                            padding: '12px 16px',
                                            background: `${cat.color}06`,
                                            borderBottom: `2px solid ${cat.color}20`,
                                            display: 'flex', alignItems: 'center', gap: '8px',
                                        }}>
                                            <div style={{ width: 8, height: 8, borderRadius: '3px', background: cat.color }} />
                                            <h4 style={{ fontSize: '14px', fontWeight: 700, color: cat.color, margin: 0 }}>{cat.title}</h4>
                                        </div>
                                        <div style={{ padding: '14px 18px' }}>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                                {cat.skills.map((skill) => (
                                                    <span key={skill} style={{
                                                        fontSize: '12px', fontWeight: 500,
                                                        color: 'var(--text-secondary)',
                                                        padding: '3px 8px', borderRadius: '5px',
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
                        </div>

                        {/* Multi-language callout */}
                        <div style={{
                            maxWidth: '700px', margin: 'var(--space-8) auto 0',
                            padding: '18px 28px', borderRadius: '14px',
                            background: 'var(--color-white)',
                            border: '1px solid rgba(99,102,241,0.12)',
                            display: 'flex', alignItems: 'center', gap: '16px',
                        }}>
                            <div style={{
                                width: 40, height: 40, borderRadius: '10px', flexShrink: 0,
                                background: 'rgba(99,102,241,0.08)', color: '#6366f1',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
                            </div>
                            <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: 1.6 }}>
                                <strong>Multi-language capabilities across all categories</strong> — find Python developers who speak Swedish, or medical annotators fluent in Mandarin.
                            </p>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== GLOBAL NETWORK REACH ====== */}
            <section className="section section--dark" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 0,
                    backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(99,102,241,0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <RevealSection>
                        <div className="section-header" style={{ textAlign: 'center' }}>
                            <div className="badge badge--dark">Global Reach</div>
                            <h2 style={{ color: 'var(--color-white)' }}>
                                2M+ global experts,<br />
                                <span className="text-gradient">vetted &amp; enterprise ready.</span>
                            </h2>
                        </div>
                    </RevealSection>

                    <RevealSection delay={150}>
                        {/* World map + region labels */}
                        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto var(--space-10)', padding: '20px 0' }}>
                            {/* SVG Dot-grid world map — high density */}
                            <svg viewBox="0 0 900 420" style={{ width: '100%', height: 'auto' }}>
                                {/* Grid spacing = 10px for dense coverage */}
                                {/* North America — Canada + Alaska */}
                                {[
                                    [100, 40], [110, 40], [120, 40], [130, 40],
                                    [80, 50], [90, 50], [100, 50], [110, 50], [120, 50], [130, 50], [140, 50], [150, 50],
                                    [70, 60], [80, 60], [90, 60], [100, 60], [110, 60], [120, 60], [130, 60], [140, 60], [150, 60], [160, 60],
                                    [60, 70], [70, 70], [80, 70], [90, 70], [100, 70], [110, 70], [120, 70], [130, 70], [140, 70], [150, 70], [160, 70], [170, 70],
                                    /* USA */
                                    [70, 80], [80, 80], [90, 80], [100, 80], [110, 80], [120, 80], [130, 80], [140, 80], [150, 80], [160, 80], [170, 80], [180, 80],
                                    [80, 90], [90, 90], [100, 90], [110, 90], [120, 90], [130, 90], [140, 90], [150, 90], [160, 90], [170, 90], [180, 90], [190, 90],
                                    [90, 100], [100, 100], [110, 100], [120, 100], [130, 100], [140, 100], [150, 100], [160, 100], [170, 100], [180, 100], [190, 100],
                                    [100, 110], [110, 110], [120, 110], [130, 110], [140, 110], [150, 110], [160, 110], [170, 110], [180, 110],
                                    [110, 120], [120, 120], [130, 120], [140, 120], [150, 120], [160, 120], [170, 120],
                                    /* Mexico + Central America */
                                    [120, 130], [130, 130], [140, 130], [150, 130], [160, 130],
                                    [130, 140], [140, 140], [150, 140],
                                    [140, 150], [150, 150],
                                    [150, 160], [160, 160],
                                ].map(([x, y], i) => (
                                    <circle key={`na${i}`} cx={x} cy={y} r="2" fill="rgba(165,180,252,0.45)" />
                                ))}

                                {/* South America */}
                                {[
                                    [190, 170], [200, 170], [210, 170], [220, 170],
                                    [180, 180], [190, 180], [200, 180], [210, 180], [220, 180], [230, 180],
                                    [180, 190], [190, 190], [200, 190], [210, 190], [220, 190], [230, 190], [240, 190],
                                    [180, 200], [190, 200], [200, 200], [210, 200], [220, 200], [230, 200], [240, 200], [250, 200],
                                    [190, 210], [200, 210], [210, 210], [220, 210], [230, 210], [240, 210], [250, 210],
                                    [190, 220], [200, 220], [210, 220], [220, 220], [230, 220], [240, 220],
                                    [200, 230], [210, 230], [220, 230], [230, 230], [240, 230],
                                    [200, 240], [210, 240], [220, 240], [230, 240],
                                    [210, 250], [220, 250], [230, 250],
                                    [210, 260], [220, 260], [230, 260],
                                    [210, 270], [220, 270], [230, 270],
                                    [220, 280], [230, 280],
                                    [220, 290], [230, 290],
                                    [220, 300], [230, 300],
                                    [220, 310],
                                    [220, 320], [210, 320],
                                ].map(([x, y], i) => (
                                    <circle key={`sa${i}`} cx={x} cy={y} r="2" fill="rgba(165,180,252,0.45)" />
                                ))}

                                {/* Europe */}
                                {[
                                    /* Scandinavia */
                                    [400, 20], [410, 20],
                                    [390, 30], [400, 30], [410, 30], [420, 30],
                                    [380, 40], [390, 40], [400, 40], [410, 40], [420, 40],
                                    /* British Isles */
                                    [350, 50], [360, 50],
                                    [350, 60], [360, 60],
                                    /* Western Europe */
                                    [370, 50], [380, 50], [390, 50], [400, 50], [410, 50], [420, 50], [430, 50],
                                    [360, 60], [370, 60], [380, 60], [390, 60], [400, 60], [410, 60], [420, 60], [430, 60], [440, 60],
                                    [360, 70], [370, 70], [380, 70], [390, 70], [400, 70], [410, 70], [420, 70], [430, 70], [440, 70], [450, 70],
                                    [370, 80], [380, 80], [390, 80], [400, 80], [410, 80], [420, 80], [430, 80], [440, 80], [450, 80], [460, 80],
                                    [380, 90], [390, 90], [400, 90], [410, 90], [420, 90], [430, 90], [440, 90], [450, 90], [460, 90],
                                    /* Mediterranean */
                                    [370, 100], [380, 100], [390, 100], [400, 100], [410, 100], [420, 100], [430, 100], [440, 100], [450, 100],
                                    [380, 110], [390, 110], [400, 110], [410, 110], [420, 110], [430, 110], [440, 110],
                                    [400, 120], [410, 120], [420, 120], [430, 120],
                                ].map(([x, y], i) => (
                                    <circle key={`eu${i}`} cx={x} cy={y} r="2" fill="rgba(165,180,252,0.55)" />
                                ))}

                                {/* Africa */}
                                {[
                                    [390, 130], [400, 130], [410, 130], [420, 130], [430, 130], [440, 130], [450, 130],
                                    [380, 140], [390, 140], [400, 140], [410, 140], [420, 140], [430, 140], [440, 140], [450, 140], [460, 140],
                                    [370, 150], [380, 150], [390, 150], [400, 150], [410, 150], [420, 150], [430, 150], [440, 150], [450, 150], [460, 150],
                                    [370, 160], [380, 160], [390, 160], [400, 160], [410, 160], [420, 160], [430, 160], [440, 160], [450, 160], [460, 160], [470, 160],
                                    [380, 170], [390, 170], [400, 170], [410, 170], [420, 170], [430, 170], [440, 170], [450, 170], [460, 170], [470, 170],
                                    [380, 180], [390, 180], [400, 180], [410, 180], [420, 180], [430, 180], [440, 180], [450, 180], [460, 180],
                                    [390, 190], [400, 190], [410, 190], [420, 190], [430, 190], [440, 190], [450, 190], [460, 190],
                                    [390, 200], [400, 200], [410, 200], [420, 200], [430, 200], [440, 200], [450, 200],
                                    [400, 210], [410, 210], [420, 210], [430, 210], [440, 210], [450, 210],
                                    [400, 220], [410, 220], [420, 220], [430, 220], [440, 220],
                                    [410, 230], [420, 230], [430, 230], [440, 230],
                                    [410, 240], [420, 240], [430, 240],
                                    [420, 250], [430, 250],
                                    [420, 260], [430, 260],
                                    [420, 270],
                                ].map(([x, y], i) => (
                                    <circle key={`af${i}`} cx={x} cy={y} r="2" fill="rgba(165,180,252,0.4)" />
                                ))}

                                {/* Middle East */}
                                {[
                                    [460, 100], [470, 100], [480, 100], [490, 100],
                                    [460, 110], [470, 110], [480, 110], [490, 110], [500, 110],
                                    [470, 120], [480, 120], [490, 120], [500, 120],
                                    [470, 130], [480, 130], [490, 130],
                                    [480, 140], [490, 140],
                                ].map(([x, y], i) => (
                                    <circle key={`me${i}`} cx={x} cy={y} r="2" fill="rgba(165,180,252,0.45)" />
                                ))}

                                {/* Russia / Central Asia */}
                                {[
                                    [470, 40], [480, 40], [490, 40], [500, 40], [510, 40], [520, 40], [530, 40], [540, 40], [550, 40], [560, 40], [570, 40], [580, 40], [590, 40], [600, 40], [610, 40], [620, 40], [630, 40], [640, 40], [650, 40],
                                    [460, 50], [470, 50], [480, 50], [490, 50], [500, 50], [510, 50], [520, 50], [530, 50], [540, 50], [550, 50], [560, 50], [570, 50], [580, 50], [590, 50], [600, 50], [610, 50], [620, 50], [630, 50], [640, 50], [650, 50], [660, 50], [670, 50],
                                    [470, 60], [480, 60], [490, 60], [500, 60], [510, 60], [520, 60], [530, 60], [540, 60], [550, 60], [560, 60], [570, 60], [580, 60], [590, 60], [600, 60], [610, 60], [620, 60], [630, 60], [640, 60], [650, 60], [660, 60], [670, 60], [680, 60],
                                    [480, 70], [490, 70], [500, 70], [510, 70], [520, 70], [530, 70], [540, 70], [550, 70], [560, 70], [570, 70], [580, 70], [590, 70], [600, 70], [610, 70], [620, 70], [630, 70], [640, 70], [650, 70], [660, 70], [670, 70], [680, 70],
                                    [490, 80], [500, 80], [510, 80], [520, 80], [530, 80], [540, 80], [550, 80], [560, 80], [570, 80], [580, 80], [590, 80], [600, 80], [610, 80], [620, 80], [630, 80], [640, 80],
                                    [500, 90], [510, 90], [520, 90], [530, 90], [540, 90], [550, 90], [560, 90], [570, 90], [580, 90], [590, 90], [600, 90],
                                ].map(([x, y], i) => (
                                    <circle key={`ru${i}`} cx={x} cy={y} r="2" fill="rgba(165,180,252,0.35)" />
                                ))}

                                {/* South / Southeast Asia + India */}
                                {[
                                    /* India */
                                    [510, 100], [520, 100], [530, 100], [540, 100],
                                    [500, 110], [510, 110], [520, 110], [530, 110], [540, 110], [550, 110],
                                    [510, 120], [520, 120], [530, 120], [540, 120], [550, 120],
                                    [520, 130], [530, 130], [540, 130],
                                    [530, 140], [540, 140],
                                    /* Southeast Asia */
                                    [580, 110], [590, 110], [600, 110], [610, 110], [620, 110],
                                    [580, 120], [590, 120], [600, 120], [610, 120], [620, 120], [630, 120],
                                    [590, 130], [600, 130], [610, 130], [620, 130], [630, 130],
                                    [600, 140], [610, 140], [620, 140], [630, 140],
                                    [610, 150], [620, 150], [630, 150], [640, 150],
                                    /* Indonesia */
                                    [600, 160], [610, 160], [620, 160], [630, 160], [640, 160], [650, 160], [660, 160],
                                    [620, 170], [630, 170], [640, 170], [650, 170], [660, 170], [670, 170],
                                ].map(([x, y], i) => (
                                    <circle key={`sa2${i}`} cx={x} cy={y} r="2" fill="rgba(165,180,252,0.45)" />
                                ))}

                                {/* East Asia — China, Korea, Japan */}
                                {[
                                    [580, 80], [590, 80], [600, 80], [610, 80], [620, 80], [630, 80],
                                    [590, 90], [600, 90], [610, 90], [620, 90], [630, 90], [640, 90], [650, 90],
                                    [600, 100], [610, 100], [620, 100], [630, 100], [640, 100], [650, 100], [660, 100],
                                    [630, 110], [640, 110], [650, 110], [660, 110],
                                    /* Japan */
                                    [670, 70], [680, 70],
                                    [670, 80], [680, 80], [690, 80],
                                    [670, 90], [680, 90],
                                    [660, 100], [670, 100],
                                ].map(([x, y], i) => (
                                    <circle key={`ea${i}`} cx={x} cy={y} r="2" fill="rgba(165,180,252,0.5)" />
                                ))}

                                {/* Australia + NZ */}
                                {[
                                    [650, 210], [660, 210], [670, 210], [680, 210], [690, 210],
                                    [640, 220], [650, 220], [660, 220], [670, 220], [680, 220], [690, 220], [700, 220],
                                    [640, 230], [650, 230], [660, 230], [670, 230], [680, 230], [690, 230], [700, 230], [710, 230],
                                    [650, 240], [660, 240], [670, 240], [680, 240], [690, 240], [700, 240], [710, 240],
                                    [660, 250], [670, 250], [680, 250], [690, 250], [700, 250], [710, 250],
                                    [670, 260], [680, 260], [690, 260], [700, 260],
                                    [680, 270], [690, 270],
                                    /* New Zealand */
                                    [730, 250], [740, 250],
                                    [730, 260], [740, 260],
                                    [730, 270],
                                ].map(([x, y], i) => (
                                    <circle key={`au${i}`} cx={x} cy={y} r="2" fill="rgba(165,180,252,0.4)" />
                                ))}

                                {/* Glowing hotspot dots — major talent hubs */}
                                {[
                                    [140, 90, '#818cf8', 'San Francisco'],
                                    [170, 100, '#818cf8', 'New York'],
                                    [210, 200, '#6366f1', 'São Paulo'],
                                    [360, 60, '#a5b4fc', 'London'],
                                    [400, 70, '#818cf8', 'Berlin'],
                                    [420, 140, '#6366f1', 'Lagos'],
                                    [480, 110, '#818cf8', 'Dubai'],
                                    [530, 120, '#a5b4fc', 'Mumbai'],
                                    [620, 100, '#818cf8', 'Shanghai'],
                                    [680, 80, '#6366f1', 'Tokyo'],
                                    [670, 230, '#818cf8', 'Sydney'],
                                    [620, 150, '#a5b4fc', 'Singapore'],
                                ].map(([cx, cy, fill], i) => (
                                    <g key={`glow${i}`}>
                                        <circle cx={cx as number} cy={cy as number} r="8" fill={fill as string} opacity="0.12">
                                            <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
                                            <animate attributeName="opacity" values="0.12;0.06;0.12" dur="3s" repeatCount="indefinite" />
                                        </circle>
                                        <circle cx={cx as number} cy={cy as number} r="3" fill={fill as string} opacity="0.9" />
                                    </g>
                                ))}
                            </svg>

                            {/* Region labels positioned around the map */}
                            <div style={{
                                display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap',
                                marginTop: '24px',
                            }}>
                                {globalRegions.map((r) => (
                                    <div key={r.region} style={{
                                        display: 'flex', alignItems: 'center', gap: '10px',
                                        padding: '10px 20px', borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                    }}>
                                        <span style={{
                                            fontSize: '18px', fontWeight: 800,
                                            background: 'linear-gradient(135deg, #a5b4fc, #818cf8)',
                                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                        }}>{r.pct}</span>
                                        <span style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>{r.region}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Discipline breakdown */}
                        <div style={{
                            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px',
                            maxWidth: '800px', margin: '0 auto',
                        }}>
                            {[
                                { pct: '40%', label: 'Software, AI, Data & Engineering' },
                                { pct: '35%', label: 'Design, Research, Creative' },
                                { pct: '25%', label: 'STEM & Regulated Domains' },
                            ].map((d) => (
                                <div key={d.label} style={{
                                    textAlign: 'center', padding: '28px 20px',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '16px',
                                }}>
                                    <div style={{
                                        fontSize: '42px', fontWeight: 900, lineHeight: 1,
                                        background: 'linear-gradient(135deg, #e0e7ff, #a5b4fc)',
                                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                    }}>{d.pct}</div>
                                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', lineHeight: 1.5, fontWeight: 500 }}>{d.label}</div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== WHY BRAINTRUST — DIFFERENTIATION ====== */}
            <section className="section">
                <div className="container container--narrow">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Why Braintrust</div>
                            <h2>Why teams choose us</h2>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                            {[
                                {
                                    title: 'Your systems, our people',
                                    desc: 'Our contributors work directly inside your environment — your annotation platform, your internal tools, your workflows. Your data stays secure, and we manage the people delivering the outcomes.',
                                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>,
                                    color: '#6366f1',
                                },
                                {
                                    title: 'Speed that compounds',
                                    desc: 'Ramp thousands of contributors in days, not weeks. Our pre-vetted network means we skip the months-long recruiting cycle that slows down competitors.',
                                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
                                    color: '#f59e0b',
                                },
                                {
                                    title: 'Quality through vetting, not just tooling',
                                    desc: 'Our quality starts before the first data point — with AI-powered assessments, credential verification, and calibration. Not just post-hoc QA dashboards.',
                                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
                                    color: '#059669',
                                },
                                {
                                    title: 'True global coverage',
                                    desc: '100+ countries, 50+ languages, every time zone. Find niche experts others can\'t — Emirati Arabic linguists, Brazilian Portuguese coders, Japanese medical reviewers.',
                                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
                                    color: '#8b5cf6',
                                },
                            ].map((item, i) => (
                                <div key={item.title} style={{
                                    display: 'flex', gap: '20px', alignItems: 'flex-start',
                                    padding: '28px 0',
                                    borderBottom: i < 3 ? '1px solid var(--color-gray-100)' : 'none',
                                }}>
                                    <div style={{
                                        width: '44px', height: '44px', borderRadius: '12px',
                                        background: `${item.color}0a`, color: item.color,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0, marginTop: '2px',
                                    }}>{item.icon}</div>
                                    <div>
                                        <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>{item.title}</h4>
                                        <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== HOW WE WORK — PIPELINE ====== */}
            <section className="section section--gray" id="how-we-work">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">How We Work</div>
                            <h2>From need to delivery</h2>
                            <p>Your AI team tells us what they need. We handle everything else.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <ModelTrainingVisual />
                    </RevealSection>
                </div>
            </section>

            {/* ====== FAQ — SEO Rich ====== */}
            <section className="section section--gray">
                <div className="container container--narrow">
                    <div className="section-header">
                        <h2>AI Training Data FAQ</h2>
                        <p>Common questions about expert sourcing, contributor management, and working with Braintrust.</p>
                    </div>
                    <FAQ items={faqItems} schemaId="ai-training-data" />
                </div>
            </section>

            <CTASection
                title="Get expert contributors deployed — fast"
                description="Tell us what your AI pipeline needs. We'll source, vet, and deploy the right people — into your systems, on your timeline."
                primaryLabel="Contact Sales"
                primaryHref="/book-demo"
            />
        </>
    );
}
