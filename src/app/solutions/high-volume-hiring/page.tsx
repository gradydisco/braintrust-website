import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'High-Volume Hiring — AI-Powered Screening & Conversational Assessments at Scale',
    description: 'Scale hiring with AI-powered resume screening, conversational AI assessments, and customizable scoring frameworks. 10x throughput with 80% faster screening.',
};

const assessmentTypes = [
    { title: 'CEFR Language Assessments', desc: 'Evaluate language proficiency across reading, writing, speaking, and listening using standardized CEFR benchmarks.' },
    { title: 'Skills-Based Assessments', desc: 'Verify technical skills, domain expertise, and hands-on capabilities through structured, role-specific evaluations.' },
    { title: 'Experience-Based Assessments', desc: 'Evaluate depth and relevance of past experience through AI-guided behavioral interviews.' },
    { title: 'Behavioral Assessments', desc: 'Assess cultural fit, teamwork, leadership potential, and problem-solving through scenario-based evaluation.' },
    { title: 'Communication Assessments', desc: 'Evaluate verbal and written communication quality, clarity, and professionalism across languages.' },
    { title: 'Technical Assessments', desc: 'Code challenges, system design, and domain-specific technical evaluations with automated and expert scoring.' },
];

const funnelFeatures = [
    { title: 'Resume Screening', desc: 'AI-powered resume scoring processes thousands of applications instantly, ranking candidates by skills, experience, and role fit.' },
    { title: 'Pre-Screening Evaluations', desc: 'Automated pre-screening questions and lightweight assessments filter candidates before they reach your team.' },
    { title: 'Conversational AI Assessments', desc: 'Adaptive voice and text-based interviews that evaluate candidates in real-time with natural conversation flow at massive scale.' },
];

const faqItems = [
    { question: 'How many interviews can AIR handle per day?', answer: 'AIR is built for enterprise scale and can conduct thousands of interviews per day, enabling high-volume hiring without proportionally increasing your recruiting headcount.' },
    { question: 'What scoring frameworks are available?', answer: 'AIR offers fully customizable scoring frameworks. You can weight technical skills, communication, behavioral signals, language proficiency, intent signals, and motivation scoring — all tailored to your specific role requirements.' },
    { question: 'Does it integrate with our ATS?', answer: 'Yes. AIR natively integrates with major ATS platforms including Greenhouse, Lever, Workday, BambooHR, and 50+ other systems. Custom integrations are also available.' },
];

export default function HighVolumeHiring() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }, { label: 'High-Volume Hiring' }]} />
                    <div className="hero__content">
                        <div className="badge">High-Volume</div>
                        <h1>Scale without<br /><span className="text-gradient">scaling headcount.</span></h1>
                        <p>AI-powered screening and conversational assessments process thousands of candidates per day. Hire at massive scale without growing your recruiting team.</p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section">
                <div className="container">
                    <div className="stats-grid" style={{ marginBottom: 'var(--space-16)' }}>
                        <div><div className="stat__value text-gradient">10x</div><div className="stat__label">More Throughput</div></div>
                        <div><div className="stat__value text-gradient">80%</div><div className="stat__label">Faster Screening</div></div>
                        <div><div className="stat__value text-gradient">1000s</div><div className="stat__label">Interviews Per Day</div></div>
                    </div>

                    {/* Top-of-Funnel Management */}
                    <div className="section-header">
                        <div className="badge">Top-of-Funnel</div>
                        <h2>Manage the top of your funnel</h2>
                        <p>From initial application to qualified candidate — automated, consistent, and at scale.</p>
                    </div>
                    <div className="grid grid--3">
                        {funnelFeatures.map((item) => (
                            <div key={item.title} className="card card--feature">
                                <h4 style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Assessment Types */}
            <section className="section section--gray">
                <div className="container">
                    <div className="section-header">
                        <div className="badge badge--accent">Assessment Suite</div>
                        <h2>Comprehensive assessment types</h2>
                        <p>Highly customizable scoring frameworks with enterprise-grade configurability.</p>
                    </div>
                    <div className="grid grid--3">
                        {assessmentTypes.map((item) => (
                            <div key={item.title} className="card card--feature">
                                <h4 style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Signals */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Signals</div>
                        <h2>Go beyond skills</h2>
                        <p>Capture intent signals, motivation scoring, and soft-skill indicators to build a complete candidate picture.</p>
                    </div>
                    <div className="grid grid--3" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {[
                            { title: 'Intent Signals', desc: 'Detect candidate interest level, engagement patterns, and likelihood to accept through behavioral analysis.' },
                            { title: 'Motivation Scoring', desc: 'Evaluate alignment with company mission, role interest, and career trajectory fit through AI-driven conversation analysis.' },
                            { title: 'Native ATS Integrations', desc: 'Push scored, ranked candidates directly into your ATS. Scalable infrastructure that works with Greenhouse, Lever, Workday, and 50+ more.' },
                        ].map((item) => (
                            <div key={item.title} className="card card--feature">
                                <h4 style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--gray">
                <div className="container container--narrow">
                    <div className="section-header"><h2>FAQ</h2></div>
                    <FAQ items={faqItems} schemaId="high-volume-hiring" />
                </div>
            </section>

            <CTASection title="Ready to scale your hiring?" description="See how Braintrust handles high-volume recruiting with conversational AI assessments and customizable scoring." primaryLabel="Book a Demo" primaryHref="/book-demo" />
        </>
    );
}
