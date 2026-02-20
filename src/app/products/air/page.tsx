import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'AIR — AI Recruiter | Conversational Voice Interviews & AI Assessments',
    description: 'AIR is Braintrust AI-powered recruiting suite featuring conversational voice interviews, customizable scoring frameworks, and enterprise-scale assessments in 16+ languages.',
};

const faqItems = [
    { question: 'What is AIR?', answer: 'AIR (AI Recruiter) is Braintrust AI-powered recruiting suite that uses machine learning to screen resumes, conduct conversational voice interviews, and provide deeply customizable skills-based candidate assessments at scale.' },
    { question: 'What are conversational voice interviews?', answer: 'AIR conducts real-time, natural-language voice interviews with candidates. The AI adapts questions based on responses, probes deeper on relevant topics, and evaluates communication skills, technical knowledge, and cultural fit — all in a single automated conversation.' },
    { question: 'How many languages does AIR support?', answer: 'AIR supports 16+ languages for both interviews and assessments, making it ideal for global hiring initiatives and multilingual workforces.' },
    { question: 'How does AI screening reduce bias?', answer: 'AIR uses skills-based evaluation criteria rather than demographic signals. The system is regularly audited for fairness and provides transparent scoring rationale for every candidate.' },
    { question: 'Does AIR integrate with existing ATS systems?', answer: 'Yes. AIR integrates with Greenhouse, Lever, Workday, BambooHR, and most major ATS platforms. Custom integrations are available for enterprise clients.' },
    { question: 'How many interviews can AIR handle?', answer: 'AIR is built for enterprise scale — it can conduct thousands of interviews per day, enabling high-volume hiring without proportionally scaling your recruiting team.' },
];

export default function AIR() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Products', href: '/products' },
                        { label: 'AIR — AI Recruiter' },
                    ]} />
                    <div className="hero__content">
                        <div className="badge">AIR — AI Recruiter</div>
                        <h1>Superhuman<br /><span className="text-gradient">recruiting intelligence.</span></h1>
                        <p>Conversational voice interviews, customizable scoring frameworks, and enterprise-scale assessments in 16+ languages — reducing time-to-hire by 80%.</p>
                        <div className="hero__actions">
                            <Link href="/book-demo" className="btn btn--primary btn--lg">Book a Demo</Link>
                            <Link href="/pricing" className="btn btn--secondary btn--lg">View Pricing</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Capabilities</div>
                        <h2>How AIR transforms recruiting</h2>
                        <p>AI-powered tools that screen, interview, and assess candidates at enterprise scale.</p>
                    </div>
                    <div className="grid grid--3">
                        {[
                            { title: 'Conversational Voice Interviews', desc: 'AIR conducts real-time, adaptive voice interviews — evaluating communication, technical depth, and cultural fit. Thousands of interviews per day with consistent quality.' },
                            { title: 'Resume Scoring & Matching', desc: 'Process thousands of applications instantly. AI-powered resume scoring ranks candidates by skills, experience, and role fit with transparent scoring rationale.' },
                            { title: 'Semantic Candidate Search', desc: 'Go beyond keyword matching. AIR understands context, skills adjacency, and career trajectories to surface candidates that traditional searches miss.' },
                            { title: 'Customizable Scoring Frameworks', desc: 'Design evaluation criteria tailored to your roles. Weight technical skills, communication, domain expertise, and behavioral signals to match your hiring philosophy.' },
                            { title: '16+ Languages Supported', desc: 'Conduct interviews and assessments in 16+ languages natively. Global-ready hiring for distributed teams and international talent pools.' },
                            { title: 'Enterprise Scale', desc: 'Built for high-volume hiring. Conduct thousands of interviews per day without scaling your recruiting headcount. Native ATS integrations with Greenhouse, Lever, Workday, and more.' },
                        ].map((item) => (
                            <div key={item.title} className="card card--feature">
                                <h4 style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section section--dark">
                <div className="container">
                    <div className="stats-grid">
                        <div><div className="stat__value text-gradient">1000s</div><div className="stat__label">Interviews Per Day</div></div>
                        <div><div className="stat__value text-gradient">80%</div><div className="stat__label">Faster Screening</div></div>
                        <div><div className="stat__value text-gradient">16+</div><div className="stat__label">Languages Supported</div></div>
                        <div><div className="stat__value text-gradient">50+</div><div className="stat__label">ATS Integrations</div></div>
                    </div>
                </div>
            </section>

            <section className="section section--gray">
                <div className="container container--narrow">
                    <div className="section-header"><h2>FAQ</h2></div>
                    <FAQ items={faqItems} schemaId="air" />
                </div>
            </section>

            <CTASection title="Transform your recruiting" description="See AIR in action — conversational voice interviews, customizable scoring, and enterprise-scale assessments." primaryLabel="Book a Demo" primaryHref="/book-demo" />
        </>
    );
}
