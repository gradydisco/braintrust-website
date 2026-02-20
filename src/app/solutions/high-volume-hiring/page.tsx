import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import RevealSection from '@/components/RevealSection';

export const metadata: Metadata = {
    title: 'High-Volume Hiring — AI Screening & Conversational Assessments at Scale | Braintrust',
    description: 'Scale hiring with AI-powered resume screening, conversational AI interviews, and customizable scoring frameworks. Process thousands of candidates per day with 10x throughput and 80% faster screening. Ideal for seasonal, retail, healthcare, and BPO hiring.',
    keywords: 'high volume hiring, mass hiring, seasonal hiring, AI screening, AI assessments at scale, bulk hiring, high volume recruiting, AI candidate screening, conversational AI interview',
};

const assessmentTypes = [
    { title: 'CEFR Language Assessments', desc: 'Evaluate language proficiency across reading, writing, speaking, and listening using standardized CEFR frameworks — critical for multilingual customer-facing roles.', stat: '16+', statLabel: 'languages' },
    { title: 'Skills-Based Assessments', desc: 'Verify technical skills, domain expertise, and hands-on capabilities through structured, role-specific evaluations calibrated to your performance benchmarks.', stat: 'Custom', statLabel: 'per role' },
    { title: 'Experience-Based Assessments', desc: 'Evaluate depth and relevance of past experience through AI-guided behavioral interviews that probe for real-world application, not just resume keywords.', stat: 'Adaptive', statLabel: 'follow-ups' },
    { title: 'Behavioral Assessments', desc: 'Assess cultural fit, teamwork, leadership potential, and problem-solving through scenario-based evaluations anchored to your company values and competency models.', stat: 'Calibrated', statLabel: 'scoring' },
    { title: 'Communication Assessments', desc: 'Evaluate verbal clarity, written professionalism, and interpersonal effectiveness across languages — essential for customer support, sales, and service roles.', stat: 'Multi-modal', statLabel: 'voice & text' },
    { title: 'Technical Assessments', desc: 'Code challenges, system design, and domain-specific technical evaluations with automated scoring, expert review, and configurable difficulty levels.', stat: 'Auto-scored', statLabel: 'instant results' },
];

const funnelFeatures = [
    {
        title: 'AI-Powered Resume Screening',
        desc: 'Process thousands of applications simultaneously. AIR\'s semantic scoring engine ranks every applicant by skills, experience, and role fit — ensuring 100% of resumes are reviewed, not just the first 50% your team gets to.',
        stat: '100%',
        statLabel: 'applicants screened',
    },
    {
        title: 'Pre-Screening Evaluations',
        desc: 'Automated qualification questions, minimum requirement checks, and lightweight skill assessments filter out unqualified candidates before they ever reach a recruiter — saving hours of manual review per role.',
        stat: '70%',
        statLabel: 'unqualified filtered',
    },
    {
        title: 'Conversational AI Interviews',
        desc: 'AIR conducts adaptive voice and text-based interviews 24/7, evaluating candidates in real time with natural conversation flow. Candidates interview on their own schedule — no recruiter coordination needed.',
        stat: '24/7',
        statLabel: 'availability',
    },
];

const useCases = [
    {
        industry: 'Seasonal & Retail Hiring',
        challenge: 'Hire hundreds of store associates, warehouse workers, and seasonal staff in 4-6 week windows — without overwhelming your recruiting team.',
        solution: 'AIR screens and interviews candidates around the clock. One client hired 1,200 seasonal roles in 6 weeks with the same team that previously handled 400.',
        metric: '3× capacity',
    },
    {
        industry: 'Healthcare Staffing',
        challenge: 'Fill nursing, clinical, and administrative roles quickly while verifying credentials, language proficiency, and clinical knowledge.',
        solution: 'CEFR language assessments, credential verification workflows, and 24/7 interview scheduling reduced time-to-fill from 45 to 12 days.',
        metric: '73% faster',
    },
    {
        industry: 'BPO & Contact Centers',
        challenge: 'Onboard 100+ agents per month across time zones and languages while maintaining quality and minimizing attrition.',
        solution: 'Communication assessments and cultural fit scoring ensure candidates can perform from day one. Clients report 35% lower 90-day attrition.',
        metric: '35% less attrition',
    },
    {
        industry: 'Technology & Engineering',
        challenge: 'Screen thousands of applicants per role while accurately assessing technical skills, system design ability, and team fit.',
        solution: 'Technical assessments with auto-scoring, combined with behavioral interviews, deliver qualified shortlists in hours instead of weeks.',
        metric: '85% time saved',
    },
];

const faqItems = [
    { question: 'How many interviews can AIR handle per day?', answer: 'AIR is built for enterprise scale and can conduct thousands of interviews per day. There is no practical upper limit — the system scales linearly with demand, enabling surge hiring during seasonal peaks without additional recruiter headcount.' },
    { question: 'What scoring frameworks are available?', answer: 'AIR offers fully customizable scoring frameworks. You can weight technical skills, communication quality, behavioral signals, language proficiency, intent signals, and motivation scoring — all tailored to your specific role requirements. Frameworks can be cloned and adjusted per role family.' },
    { question: 'Does it integrate with our ATS?', answer: 'Yes. AIR natively integrates with 50+ ATS platforms including Greenhouse, Lever, Workday, BambooHR, iCIMS, Taleo, SmartRecruiters, and more. Scored candidates, interview transcripts, and assessment results sync automatically. Custom API integrations are also available.' },
    { question: 'How does high-volume AI hiring reduce bias?', answer: 'AIR uses skills-based evaluation criteria rather than demographic signals. Every candidate is assessed against the same standardized framework with consistent scoring methodology. The system is regularly audited for fairness and provides transparent scoring rationale for every evaluation.' },
    { question: 'What happens when candidates no-show for interviews?', answer: 'Because AIR interviews are self-scheduled and available 24/7, no-show rates drop dramatically. Candidates can complete their interview at any time that works for them. Automated reminders and flexible rescheduling further reduce wasted interviewer time by approximately 60%.' },
    { question: 'Can we customize the candidate experience for our brand?', answer: 'Yes. The interview experience, assessment communications, and candidate-facing materials can be branded to your company. This includes custom welcome messages, company-specific evaluation criteria, and branded results communications.' },
    { question: 'How quickly can we go live with high-volume hiring?', answer: 'Most clients are live within 2-3 weeks. The setup process includes ATS integration, scoring framework configuration, and team training. For urgent seasonal hiring needs, we offer expedited onboarding in as little as 5 business days.' },
];

export default function HighVolumeHiring() {
    return (
        <>
            {/* ====== HERO ====== */}
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }, { label: 'High-Volume Hiring' }]} />
                    <div className="hero__content">
                        <div className="badge">High-Volume</div>
                        <h1>Scale without<br /><span className="text-gradient">scaling headcount.</span></h1>
                        <p>AI-powered screening and conversational assessments process thousands of candidates per day. Hire at massive scale — seasonal, permanent, or project-based — without growing your recruiting team.</p>
                        <div className="hero__actions">
                            <Link href="/book-demo" className="btn btn--primary btn--lg">Book a Demo</Link>
                            <Link href="/products/air" className="btn btn--secondary btn--lg">Explore AIR →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== STATS ====== */}
            <section className="section section--dark">
                <div className="container">
                    <RevealSection>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '16px',
                        }}>
                            {[
                                { value: '10×', label: 'Hiring Throughput', desc: 'Process 10× more candidates without adding headcount' },
                                { value: '80%', label: 'Faster Screening', desc: 'From application to qualified shortlist in hours' },
                                { value: '1000s', label: 'Interviews / Day', desc: 'No capacity limits, 24/7 candidate availability' },
                                { value: '100%', label: 'Applicants Screened', desc: 'Every resume reviewed — no candidate left behind' },
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

            {/* ====== TOP-OF-FUNNEL MANAGEMENT ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Top-of-Funnel</div>
                            <h2>Manage the entire top of your funnel</h2>
                            <p>From initial application to qualified candidate — automated, consistent, and at any scale your business demands.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div className="grid grid--3">
                            {funnelFeatures.map((item) => (
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

            {/* ====== USE CASES ====== */}
            <section className="section section--gray">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge badge--accent">Use Cases</div>
                            <h2>Built for every high-volume scenario</h2>
                            <p>From seasonal retail surges to continuous BPO hiring — AIR adapts to your industry&apos;s unique challenges.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div className="grid grid--2">
                            {useCases.map((uc) => (
                                <div key={uc.industry} style={{
                                    background: 'var(--color-white)',
                                    border: '1px solid var(--color-gray-100)',
                                    borderRadius: '14px',
                                    padding: '28px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{uc.industry}</h4>
                                        <span style={{
                                            fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
                                            color: 'var(--color-primary)', padding: '4px 10px', borderRadius: '100px',
                                            background: 'var(--color-primary-50)',
                                        }}>{uc.metric}</span>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-tertiary)', margin: '0 0 8px', fontWeight: 600 }}>Challenge:</p>
                                        <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: '0 0 12px' }}>{uc.challenge}</p>
                                        <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-tertiary)', margin: '0 0 8px', fontWeight: 600 }}>How AIR helps:</p>
                                        <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{uc.solution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== ASSESSMENT SUITE ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Assessment Suite</div>
                            <h2>Comprehensive assessment types</h2>
                            <p>Highly customizable scoring frameworks with enterprise-grade configurability — designed for high-volume consistency.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div className="grid grid--3">
                            {assessmentTypes.map((item) => (
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

            {/* ====== BEYOND SKILLS — SIGNALS ====== */}
            <section className="section section--gray">
                <div className="container container--narrow">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Advanced Signals</div>
                            <h2>Go beyond skills — capture intent</h2>
                            <p>In high-volume hiring, knowing who will show up and stay is just as important as who is qualified. AIR captures signals that predict success.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div className="grid grid--3">
                            {[
                                { title: 'Intent Signals', desc: 'Detect genuine candidate interest, engagement level, and likelihood to accept through behavioral analysis during the interview process. High-intent candidates are flagged for fast-track processing.' },
                                { title: 'Motivation Scoring', desc: 'Evaluate alignment with company mission, role interest, and career trajectory fit through AI-driven conversation analysis. Predict which candidates will stay beyond 90 days.' },
                                { title: 'Native ATS Integrations', desc: 'Push scored, ranked, and signal-enriched candidate profiles directly into your ATS. Recruiters see a qualified, prioritized pipeline — not a pile of resumes.' },
                            ].map((item) => (
                                <div key={item.title} className="card card--feature" style={{ padding: '24px' }}>
                                    <h4 style={{ marginBottom: '8px', fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>{item.title}</h4>
                                    <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{item.desc}</p>
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
                        <h2>High-Volume Hiring FAQ</h2>
                        <p>Common questions about scaling your hiring with AI-powered screening and assessments.</p>
                    </div>
                    <FAQ items={faqItems} schemaId="high-volume-hiring" />
                </div>
            </section>

            <CTASection
                title="Ready to scale your hiring?"
                description="See how Braintrust handles high-volume recruiting with conversational AI assessments, customizable scoring, and 10× throughput."
                primaryLabel="Book a Demo"
                primaryHref="/book-demo"
                secondaryLabel="Explore AIR"
                secondaryHref="/products/air"
            />
        </>
    );
}
