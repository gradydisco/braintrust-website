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
            <section className="hero hero--centered" style={{ position: 'relative', overflow: 'hidden' }}>
                {/* Animated gradient mesh */}
                <div className="ai-hero-mesh" style={{
                    position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                    background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(99,102,241,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 30%, rgba(245,87,51,0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 60%, rgba(5,150,105,0.04) 0%, transparent 60%)',
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }, { label: 'AI Training Data' }]} />
                    <div className="hero__content">
                        <div className="badge">AI Training Data</div>
                        <h1>Expert contributors for<br /><span className="text-gradient">every AI training need.</span></h1>
                        <p style={{ maxWidth: '640px', margin: '0 auto' }}>
                            We source, vet, and deploy domain experts into your annotation platforms and training pipelines — delivering the data points your models need, faster than anyone.
                        </p>
                        <div className="hero__actions">
                            <a href="/book-demo" className="btn btn--primary btn--lg">Contact Sales</a>
                            <a href="#how-we-work" className="btn btn--secondary btn--lg">How We Work →</a>
                        </div>

                        {/* Hero stat chips */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: 'var(--space-10)', flexWrap: 'wrap' }}>
                            {[
                                { value: '2M+', label: 'Domain Experts' },
                                { value: '100+', label: 'Countries' },
                                { value: '50+', label: 'Languages' },
                                { value: 'Days', label: 'to Ramp' },
                            ].map((s) => (
                                <div key={s.label} style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    padding: '8px 18px', borderRadius: '100px',
                                    background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                                }}>
                                    <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-primary)' }}>{s.value}</span>
                                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-tertiary)' }}>{s.label}</span>
                                </div>
                            ))}
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
                                    <h3 style={{ color: 'white', fontSize: '22px', fontWeight: 800, margin: '0 0 8px', lineHeight: 1.25 }}>
                                        Vetted experts,<br />deployed in days.
                                    </h3>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
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
                                        <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{item.title}</h4>
                                        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
                                        <span style={{ fontSize: '11px', fontWeight: 700, color: item.color, marginTop: 'auto' }}>{item.stat}</span>
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
                                    <h3 style={{ color: 'white', fontSize: '20px', fontWeight: 800, margin: '0 0 8px' }}>RLHF Contributors</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', margin: 0, lineHeight: 1.6, maxWidth: '320px' }}>
                                        Domain experts who rate, rank, and compare model outputs — providing the human preference signals your post-training pipeline needs.
                                    </p>
                                    <span style={{ marginTop: '14px', fontSize: '12px', fontWeight: 700, color: '#a5b4fc' }}>Enterprise scale →</span>
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
                                    <h4 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 8px' }}>Data Annotators &amp; Labelers</h4>
                                    <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: '0 0 12px' }}>
                                        Structured annotation across text, image, video, and audio. Multi-language, multi-domain capability.
                                    </p>
                                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#059669' }}>Multi-modal →</span>
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
                                        <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>{item.title}</h4>
                                        <p style={{ fontSize: '12.5px', lineHeight: 1.6, color: 'var(--text-secondary)', margin: '0 0 10px' }}>{item.desc}</p>
                                        <span style={{ fontSize: '11px', fontWeight: 700, color: item.color, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.stat}</span>
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
                                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 4px' }}>Domain Expert Reviewers</h4>
                                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                                        Credentialed specialists — doctors, lawyers, engineers, scientists — who validate AI output accuracy and provide authoritative corrections.
                                    </p>
                                </div>
                                <span style={{ fontSize: '12px', fontWeight: 700, color: '#8b5cf6', whiteSpace: 'nowrap', flexShrink: 0 }}>Credentialed →</span>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== ANNOTATION DEMO ====== */}
            <section className="section" style={{ background: 'linear-gradient(180deg, white 0%, var(--color-gray-50) 100%)' }}>
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge badge--accent">In Action</div>
                            <h2>Your annotators, powered by our pipeline</h2>
                            <p>This is what it looks like when expert contributors — sourced, vetted, and managed by Braintrust — are working inside your annotation platform.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <AnnotationDemo />
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
                                                fontSize: '11px', fontWeight: 700, padding: '5px 12px',
                                                borderRadius: '20px',
                                                background: 'rgba(255,255,255,0.08)',
                                                border: '1px solid rgba(255,255,255,0.12)',
                                                color: 'rgba(255,255,255,0.75)',
                                                backdropFilter: 'blur(8px)',
                                            }}>{label}</span>
                                        ))}
                                    </div>
                                    <h3 style={{ color: 'white', fontSize: '20px', fontWeight: 800, margin: '0 0 10px', lineHeight: 1.3 }}>
                                        The people behind<br />the data.
                                    </h3>
                                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
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
                                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginLeft: '8px' }}>Join 2M+ verified experts</span>
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
                                            <h4 style={{ fontSize: '13px', fontWeight: 700, color: cat.color, margin: 0 }}>{cat.title}</h4>
                                        </div>
                                        <div style={{ padding: '12px 16px' }}>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                                {cat.skills.map((skill) => (
                                                    <span key={skill} style={{
                                                        fontSize: '10.5px', fontWeight: 500,
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
                        {/* Discipline breakdown */}
                        <div style={{
                            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px',
                            maxWidth: '800px', margin: '0 auto var(--space-10)',
                        }}>
                            {[
                                { pct: '40%', label: 'Software, AI, Data & Engineering', color: '#6366f1' },
                                { pct: '35%', label: 'Design, Research, Creative', color: '#ec4899' },
                                { pct: '25%', label: 'STEM & Regulated Domains', color: '#059669' },
                            ].map((d) => (
                                <div key={d.label} style={{
                                    textAlign: 'center', padding: '28px 20px',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '16px',
                                }}>
                                    <div style={{ fontSize: '42px', fontWeight: 900, color: d.color, lineHeight: 1 }}>{d.pct}</div>
                                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', lineHeight: 1.5, fontWeight: 500 }}>{d.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Region breakdown */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                            {globalRegions.map((r) => (
                                <div key={r.region} style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    padding: '8px 18px', borderRadius: '100px',
                                    background: 'rgba(255,255,255,0.06)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}>
                                    <span style={{
                                        width: '28px', height: '28px', borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.1)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '11px', fontWeight: 800, color: 'white',
                                    }}>{r.pct}</span>
                                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{r.region}</span>
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
