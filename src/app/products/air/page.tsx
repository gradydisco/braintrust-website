import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import RevealSection from '@/components/RevealSection';
import LiveInterviewTicker from '@/components/LiveInterviewTicker';
import G2BadgeStrip from '@/components/G2BadgeStrip';
import SavingsCalculator from '@/components/SavingsCalculator';

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

                        {/* G2 badges — FALL 2025 */}
                        <div style={{ marginTop: 'var(--space-10)' }}>
                            <G2BadgeStrip showSoc2 />
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
            {/* ====== CANDIDATE LOVE ====== */}
            <section className="section section--gray">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Candidate Experience</div>
                            <h2>Fair, fast, and flexible &mdash;<br />candidates prefer it.</h2>
                            <p>Most candidates expect to dread AI interviews. Instead, they&apos;re surprised. Here&apos;s what 30,000+ told us.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={150}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                            gap: '16px',
                        }}>
                            {[
                                { pct: '94%', stat: 'Completed interviews on their own schedule', quote: '&ldquo;I did this at 9pm after work &mdash; it made applying possible.&rdquo;' },
                                { pct: '93%', stat: 'Found the experience clear and easy to follow', quote: '&ldquo;Super clear and simple. Honestly easier than a phone screen.&rdquo;' },
                                { pct: '90%', stat: 'Would do an AI interview again', quote: '&ldquo;This changed my mind about AI interviews entirely.&rdquo;' },
                                { pct: '89%', stat: 'Satisfied with their overall experience', quote: '&ldquo;Everyone got the same questions. Felt more objective.&rdquo;' },
                                { pct: '87%', stat: 'Felt they had a fair shot to showcase their skills', quote: '&ldquo;Better than I expected. I&apos;d definitely do this again.&rdquo;' },
                            ].map((item, i) => (
                                <div key={i} className="card--enterprise" style={{
                                    background: 'var(--color-white)',
                                    borderRadius: 'var(--radius-xl)',
                                    border: '1px solid rgba(50,50,93,0.08)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    {/* Accent bar */}
                                    <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))', opacity: 0.7 }} />
                                    <div style={{ padding: '28px 24px 20px', flex: 1 }}>
                                        <div style={{
                                            fontSize: 'clamp(2.4rem, 4vw, 3rem)',
                                            fontWeight: 900,
                                            color: 'var(--color-primary)',
                                            lineHeight: 1,
                                            letterSpacing: '-0.03em',
                                            marginBottom: '12px',
                                        }}>{item.pct}</div>
                                        <div style={{
                                            fontSize: '14px',
                                            fontWeight: 700,
                                            color: 'var(--text-primary)',
                                            lineHeight: 1.45,
                                            marginBottom: '12px',
                                        }} dangerouslySetInnerHTML={{ __html: item.stat }} />
                                        <div style={{
                                            fontSize: '12.5px',
                                            fontStyle: 'italic',
                                            color: 'var(--text-tertiary)',
                                            lineHeight: 1.55,
                                            borderTop: '1px solid rgba(50,50,93,0.05)',
                                            paddingTop: '12px',
                                        }} dangerouslySetInnerHTML={{ __html: item.quote }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p style={{ textAlign: 'center', fontSize: '11px', color: 'var(--text-tertiary)', marginTop: 'var(--space-6)', letterSpacing: '0.01em' }}>
                            Based on 30,000+ candidate feedback surveys across all clients &amp; role types
                        </p>
                    </RevealSection>
                </div>
            </section>

            {/* ====== CAPABILITIES — How AIR Transforms Recruiting ====== */}
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
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '16px',
                        }}>
                            {[
                                {
                                    title: 'Conversational Voice Interviews',
                                    desc: 'Real-time, adaptive voice interviews evaluating communication, depth, and fit — at any volume, 24/7.',
                                    stat: '1000s/day',
                                    statLabel: 'interview capacity',
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>,
                                },
                                {
                                    title: 'Resume Scoring & Matching',
                                    desc: 'AI-powered scoring ranks every applicant by skills, experience, and role fit — no resume goes unseen.',
                                    stat: '100%',
                                    statLabel: 'applicants screened',
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
                                },
                                {
                                    title: 'Semantic Candidate Search',
                                    desc: 'Context-aware matching surfaces candidates traditional keyword searches miss — including skills adjacency and career trajectory.',
                                    stat: '3×',
                                    statLabel: 'more qualified matches',
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
                                },
                                {
                                    title: 'Customizable Scoring Frameworks',
                                    desc: 'Weight technical skills, communication, domain expertise, and behavioral signals — tailored rubrics for every role.',
                                    stat: 'Custom',
                                    statLabel: 'scoring rubrics',
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
                                },
                                {
                                    title: '16+ Languages Supported',
                                    desc: 'Conduct interviews and assessments natively in 16+ languages — built for global teams and international talent pools.',
                                    stat: '16+',
                                    statLabel: 'native languages',
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
                                },
                                {
                                    title: 'Lower Attrition, Better Hires',
                                    desc: 'Deeper, more consistent evaluation leads to stronger matches — reducing first-year attrition and improving long-term retention.',
                                    stat: '35%',
                                    statLabel: 'less first-year attrition',
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
                                },
                                {
                                    title: 'Measurable Cost Savings',
                                    desc: 'Replace multiple point solutions with one platform. Clients typically see 10–20× return on their AIR investment within the first year.',
                                    stat: '10–20×',
                                    statLabel: 'typical ROI',
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>,
                                },
                                {
                                    title: 'Enterprise Scale & Integrations',
                                    desc: 'Native ATS integrations with Greenhouse, Lever, Workday, and 50+ more. Scale hiring without scaling headcount.',
                                    stat: '50+',
                                    statLabel: 'ATS integrations',
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>,
                                },
                            ].map((item) => (
                                <div key={item.title} className="card--enterprise" style={{
                                    background: 'var(--color-white)',
                                    border: '1px solid rgba(50, 50, 93, 0.08)',
                                    borderRadius: '14px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    {/* Accent bar */}
                                    <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))', opacity: 0.4 }} />
                                    <div style={{ padding: '24px 20px 16px', flex: 1 }}>
                                        <div style={{
                                            width: '40px', height: '40px', borderRadius: '10px',
                                            background: 'linear-gradient(135deg, rgba(245, 87, 51, 0.08), rgba(245, 87, 51, 0.02))',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: 'var(--color-primary)', marginBottom: '14px',
                                        }}>
                                            {item.icon}
                                        </div>
                                        <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.35 }}>
                                            {item.title}
                                        </h4>
                                        <p style={{ fontSize: '12.5px', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
                                            {item.desc}
                                        </p>
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

            {/* ====== TIME & COST SAVINGS CALCULATOR ====== */}
            <SavingsCalculator />

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

            {/* ====== BIAS AUDIT & COMPLIANCE ====== */}
            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge badge--accent">Compliance &amp; Fairness</div>
                            <h2>Independently audited.<br />Zero bias detected.</h2>
                            <p>AIR is the only AI recruiting platform with a published third-party bias audit. We hired independent auditors to test our model across every protected class &mdash; and we share the results publicly.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={150}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                            gap: '24px',
                            alignItems: 'start',
                        }}>
                            {/* Bias audit card */}
                            <div style={{
                                background: 'var(--color-white)',
                                border: '1px solid rgba(50,50,93,0.09)',
                                borderRadius: 'var(--radius-xl)',
                                padding: '28px 28px 24px',
                                boxShadow: '0 2px 16px rgba(50,50,93,0.06)',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                    <div style={{
                                        width: '40px', height: '40px', borderRadius: '10px',
                                        background: 'rgba(5,150,105,0.08)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                                    </div>
                                    <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)' }}>Third-Party Bias Audit</div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                                    {['Gender', 'Ethnicity', 'Intersectional: Gender &amp; Ethnicity', 'Age', 'Disability Status', 'Veteran Status'].map(cat => (
                                        <div key={cat} style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                            padding: '9px 14px', borderRadius: '8px',
                                            background: 'rgba(5,150,105,0.04)',
                                            border: '1px solid rgba(5,150,105,0.1)',
                                        }}>
                                            <span style={{ fontSize: '13.5px', color: 'var(--text-primary)', fontWeight: 500 }} dangerouslySetInnerHTML={{ __html: cat }} />
                                            <span style={{
                                                fontSize: '11px', fontWeight: 700, color: '#059669',
                                                background: 'rgba(5,150,105,0.1)', padding: '3px 10px',
                                                borderRadius: '100px', letterSpacing: '0.02em',
                                            }}>No Exceptions</span>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="https://drive.google.com/file/d/1hk5QdxnecwI94ppp7HvxOcTZNEZBPuJs/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                                        fontSize: '13px', fontWeight: 700,
                                        color: '#059669',
                                        textDecoration: 'none',
                                        padding: '10px 16px',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(5,150,105,0.25)',
                                        background: 'rgba(5,150,105,0.05)',
                                        transition: 'all 200ms',
                                    }}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                                    View Full Audit Report
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                </a>
                            </div>

                            {/* Compliance callouts */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    {
                                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
                                        color: '#0ea5e9',
                                        title: 'SOC 2 Type II Certified',
                                        desc: 'Independently verified security controls covering data availability, confidentiality, and processing integrity.',
                                    },
                                    {
                                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                                        color: '#7c3aed',
                                        title: 'EEOC Compliant',
                                        desc: 'AIR\'s scoring framework complies with EEOC guidelines. Skills-based, structured, and auditable — every candidate gets the same fair evaluation.',
                                    },
                                    {
                                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
                                        color: '#f59e0b',
                                        title: 'Transparent Scoring',
                                        desc: 'Every candidate receives a full scoring rationale. No black-box decisions — hiring teams can review and override any AI assessment.',
                                    },
                                    {
                                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
                                        color: '#059669',
                                        title: 'NYC Local Law 144 Ready',
                                        desc: 'Designed to meet the most stringent municipal AI hiring laws, including annual bias audit requirements and candidate notification rules.',
                                    },
                                ].map((item, i) => (
                                    <div key={i} style={{
                                        display: 'flex', gap: '14px', alignItems: 'flex-start',
                                        padding: '16px 18px',
                                        background: 'var(--color-white)',
                                        border: '1px solid rgba(50,50,93,0.08)',
                                        borderRadius: 'var(--radius-lg)',
                                        borderLeft: `3px solid ${item.color}`,
                                    }}>
                                        <div style={{ color: item.color, flexShrink: 0, marginTop: '1px' }}>{item.icon}</div>
                                        <div>
                                            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>{item.title}</div>
                                            <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
