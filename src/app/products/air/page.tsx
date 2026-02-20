import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import RevealSection from '@/components/RevealSection';
import LiveInterviewTicker from '@/components/LiveInterviewTicker';

export const metadata: Metadata = {
    title: 'AIR | AI Recruiter | Conversational Voice Interviews & AI Assessments',
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

const industries = [
    { name: 'Technology', desc: 'Software engineering, product, and technical roles at every level.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg> },
    { name: 'Healthcare', desc: 'Clinical, research, and administrative healthcare professionals.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> },
    { name: 'Financial Services', desc: 'Banking, insurance, fintech, and financial operations talent.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg> },
    { name: 'Retail & E-Commerce', desc: 'Digital commerce, supply chain, and customer experience roles.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg> },
    { name: 'Manufacturing', desc: 'Engineering, operations, and quality assurance professionals.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg> },
    { name: 'Professional Services', desc: 'Consulting, legal, accounting, and advisory talent.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg> },
    { name: 'Media & Entertainment', desc: 'Creative, production, and digital media professionals.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg> },
    { name: 'Energy & Utilities', desc: 'Sustainable energy, infrastructure, and operations roles.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> },
];

export default function AIR() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Products', href: '/products' },
                        { label: 'AIR | AI Recruiter' },
                    ]} />
                    <div className="hero__content">
                        <div className="badge">AIR | AI Recruiter</div>
                        <h1>Superhuman<br /><span className="text-gradient">recruiting intelligence.</span></h1>
                        <p>Conversational voice interviews, customizable scoring frameworks, and enterprise-scale assessments in 16+ languages — reducing time-to-hire by 80%.</p>
                        <div className="hero__actions">
                            <Link href="/book-demo" className="btn btn--primary btn--lg">Book a Demo</Link>
                            <Link href="/products/air/try" className="btn btn--secondary btn--lg">Try It Yourself →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== LIVE ACTIVITY TICKER ====== */}
            <section className="section" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
                <div className="container">
                    <LiveInterviewTicker />
                </div>
            </section>

            {/* ====== PROMO VIDEO ====== */}
            <section className="section" style={{ paddingTop: 'var(--space-12)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <RevealSection>
                        <YouTubeEmbed videoId="clsjRDLglCw" title="AIR | AI Recruiter Demo" />
                    </RevealSection>
                </div>
            </section>

            {/* ====== TRY IT YOURSELF CTA ====== */}
            <section className="section section--gray">
                <div className="container container--narrow">
                    <RevealSection>
                        <div style={{
                            textAlign: 'center',
                            padding: 'var(--space-12) var(--space-8)',
                            borderRadius: 'var(--radius-2xl)',
                            background: 'var(--color-white)',
                            border: '1px solid var(--color-gray-100)',
                            boxShadow: 'var(--shadow-lg)',
                        }}>
                            <div className="badge" style={{ marginBottom: 'var(--space-4)' }}>Interactive</div>
                            <h2 style={{ marginBottom: 'var(--space-3)' }}>Try AIR for yourself</h2>
                            <p style={{ maxWidth: '480px', margin: '0 auto var(--space-6)' }}>
                                Experience AI-powered interviews firsthand. Access live demo sessions across 10+ roles and industries.
                            </p>
                            <Link href="/products/air/try" className="btn btn--primary btn--lg">
                                Access Demo Interviews →
                            </Link>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== CAPABILITIES ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Capabilities</div>
                            <h2>How AIR transforms recruiting</h2>
                            <p>AI-powered tools that screen, interview, and assess candidates at enterprise scale.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
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
                    </RevealSection>
                </div>
            </section>

            {/* ====== STATS ====== */}
            <section className="section section--dark">
                <div className="container">
                    <RevealSection>
                        <div className="stats-grid">
                            <div><div className="stat__value text-gradient">1000s</div><div className="stat__label">Interviews Per Day</div></div>
                            <div><div className="stat__value text-gradient">80%</div><div className="stat__label">Faster Screening</div></div>
                            <div><div className="stat__value text-gradient">16+</div><div className="stat__label">Languages Supported</div></div>
                            <div><div className="stat__value text-gradient">50+</div><div className="stat__label">ATS Integrations</div></div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== SOCIAL PROOF — CUSTOMER QUOTES ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">What Leaders Are Saying</div>
                            <h2>Trusted by recruiting teams everywhere</h2>
                            <p>Hear from talent leaders who&apos;ve transformed their hiring with AIR.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                            gap: 'var(--space-6)',
                        }}>
                            {[
                                {
                                    quote: 'AIR cut our screening time by 85%. We went from 3 weeks to 2 days for initial candidate assessments. The conversational interviews feel natural and candidates actually prefer them over phone screens.',
                                    name: 'Sarah M.',
                                    title: 'VP of Talent Acquisition',
                                    company: '5,000+ employee SaaS company',
                                    metric: '85% faster screening',
                                },
                                {
                                    quote: 'We evaluated 6 AI interviewing platforms. AIR was the only one that could handle our volume — 2,000+ interviews per month — without quality degradation. The scoring consistency is remarkable.',
                                    name: 'James K.',
                                    title: 'Head of Recruiting',
                                    company: 'Fortune 500 financial services',
                                    metric: '2,000+ interviews/month',
                                },
                                {
                                    quote: 'Our candidate NPS went from 32 to 78 after implementing AIR. Candidates love the flexibility of interviewing on their own schedule. The AI adapts to each person naturally.',
                                    name: 'Emily C.',
                                    title: 'Talent Operations Manager',
                                    company: '10,000+ employee consulting firm',
                                    metric: 'NPS 32 → 78',
                                },
                                {
                                    quote: 'Hiring 500+ nurses per quarter was a nightmare. AIR screens candidates 24/7, conducts initial interviews in 16 languages, and our time-to-fill dropped from 45 to 12 days.',
                                    name: 'Marcus T.',
                                    title: 'CHRO',
                                    company: '15,000+ employee healthcare system',
                                    metric: '45 → 12 day time-to-fill',
                                },
                                {
                                    quote: 'We were paying for resume screening, skills assessments, phone screening, and scheduling tools separately. AIR replaced all of them. ROI was positive in the first month.',
                                    name: 'Priya R.',
                                    title: 'Director of People Operations',
                                    company: 'Series C startup (400 employees)',
                                    metric: 'Replaced 4 tools',
                                },
                                {
                                    quote: 'Last holiday season we needed to hire 1,200 warehouse and CS roles in 6 weeks. AIR handled all initial screening and interviews. We did it with the same team size as when we hired 400.',
                                    name: 'Rachel W.',
                                    title: 'Head of Talent Acquisition',
                                    company: '2,000+ employee e-commerce platform',
                                    metric: '3x hiring, same team',
                                },
                            ].map((q, i) => (
                                <div key={i} className="card" style={{
                                    padding: 'var(--space-8)',
                                    borderRadius: 'var(--radius-xl)',
                                    background: 'var(--color-white)',
                                    border: '1px solid var(--color-gray-100)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 'var(--space-4)',
                                }}>
                                    {/* Metric highlight */}
                                    <span style={{
                                        display: 'inline-block',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.06em',
                                        color: 'var(--color-primary)',
                                        padding: '4px 10px',
                                        borderRadius: '100px',
                                        background: 'var(--color-primary-50)',
                                        alignSelf: 'flex-start',
                                    }}>
                                        {q.metric}
                                    </span>
                                    {/* Quote */}
                                    <p style={{
                                        fontSize: 'var(--text-base)',
                                        lineHeight: 1.7,
                                        color: 'var(--text-secondary)',
                                        margin: 0,
                                        flex: 1,
                                    }}>
                                        &ldquo;{q.quote}&rdquo;
                                    </p>
                                    {/* Attribution */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-3)',
                                        paddingTop: 'var(--space-4)',
                                        borderTop: '1px solid var(--color-gray-100)',
                                    }}>
                                        <div style={{
                                            width: '36px', height: '36px', borderRadius: '50%',
                                            background: `hsl(${210 + (i * 30) % 120}, 45%, 55%)`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: 'white', fontWeight: 700, fontSize: '13px', flexShrink: 0,
                                        }}>
                                            {q.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>{q.name}</div>
                                            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{q.title} · {q.company}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== INDUSTRIES SERVED ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Industries</div>
                            <h2>Built for every industry</h2>
                            <p>AIR powers hiring across sectors — adapting interviews and assessments to your domain.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                            gap: 'var(--space-4)',
                        }}>
                            {industries.map((industry) => (
                                <div
                                    key={industry.name}
                                    className="card card--feature"
                                    style={{ textAlign: 'center', padding: 'var(--space-6)' }}
                                >
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '50%',
                                        background: 'var(--color-primary-50)', color: 'var(--color-primary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto var(--space-3)',
                                    }}>{industry.icon}</div>
                                    <h4 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--text-base)' }}>{industry.name}</h4>
                                    <p style={{ fontSize: 'var(--text-xs)', margin: 0 }}>{industry.desc}</p>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== FAQ ====== */}
            <section className="section section--gray">
                <div className="container container--narrow">
                    <div className="section-header"><h2>FAQ</h2></div>
                    <FAQ items={faqItems} schemaId="air" />
                </div>
            </section>

            <CTASection title="Transform your recruiting" description="See AIR in action — conversational voice interviews, customizable scoring, and enterprise-scale assessments." primaryLabel="Book a Demo" primaryHref="/book-demo" secondaryLabel="Try It Yourself" secondaryHref="/products/air/try" />
        </>
    );
}
