import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import RevealSection from '@/components/RevealSection';

export const metadata: Metadata = {
    title: 'Enterprise Hiring Solutions — AI-Powered Talent Acquisition for Fortune 1000 | Braintrust',
    description: 'End-to-end enterprise hiring solutions with AI-powered matching, conversational AI interviews, SOC 2 Type II compliance, dedicated account management, and custom SLAs. Trusted by Fortune 1000 companies to reduce time-to-hire by 80%.',
    keywords: 'enterprise hiring, enterprise recruiting, AI hiring platform, enterprise talent acquisition, SOC 2 hiring, Fortune 1000 recruiting, enterprise ATS integration, AI interviewing enterprise',
};

const faqItems = [
    { question: 'What makes Braintrust enterprise-ready?', answer: 'Braintrust meets the highest enterprise standards with SOC 2 Type II certification, SAML-based enterprise SSO, dedicated customer success managers, custom service level agreements, automated compliance workflows including I-9 verification and EEO tracking, and a procurement-friendly billing model with standard MSAs and DPAs.' },
    { question: 'How does enterprise onboarding work?', answer: 'Our dedicated implementation team manages the entire onboarding process. This includes custom ATS integration setup with your existing systems (Greenhouse, Lever, Workday, and 50+ others), SSO configuration, scoring framework customization, and full team training. Most enterprise clients are live within 30 days.' },
    { question: 'How does AI interviewing work at enterprise scale?', answer: 'Our AI Recruiter (AIR) conducts real-time, adaptive voice interviews in 16+ languages. It evaluates communication skills, technical depth, and cultural fit using your customizable scoring frameworks. AIR can process thousands of interviews per day, enabling high-volume hiring without proportionally scaling your recruiting team.' },
    { question: 'What compliance and security certifications does Braintrust hold?', answer: 'Braintrust maintains SOC 2 Type II certification, supports SAML-based SSO, offers configurable data retention policies, and provides automated compliance workflows for background checks, I-9 verification, and EEO tracking. We sign standard DPAs and can accommodate custom security questionnaires.' },
    { question: 'Can Braintrust integrate with our existing ATS and HR systems?', answer: 'Yes. Braintrust natively integrates with 50+ ATS platforms including Greenhouse, Lever, Workday, BambooHR, iCIMS, Taleo, and SmartRecruiters. We also offer custom API integrations for proprietary systems. Candidate data, scoring, and interview transcripts sync automatically.' },
    { question: 'How is pricing structured for enterprise clients?', answer: 'Enterprise pricing is based on usage volume, number of roles, and selected capabilities. We offer annual contracts with volume discounts, dedicated support tiers, and custom SLAs. Contact our enterprise team for a tailored proposal.' },
    { question: 'What industries does Braintrust serve?', answer: 'Braintrust powers enterprise hiring across technology, healthcare, financial services, retail, manufacturing, professional services, media, energy, and more. Our AI interviewing and assessment frameworks are configurable for any industry and role type.' },
];

const capabilities = [
    {
        title: 'AI-Powered Candidate Matching',
        desc: 'Semantic matching engine goes beyond keyword search — understanding skills adjacency, career trajectories, and contextual fit to surface the most qualified candidates for every role.',
        stat: '3×',
        statLabel: 'more qualified matches',
    },
    {
        title: 'Conversational AI Interviews',
        desc: 'AIR conducts real-time, adaptive voice interviews, evaluating communication, technical depth, and cultural fit. Thousands of interviews per day with consistent, unbiased quality.',
        stat: '1000s',
        statLabel: 'interviews per day',
    },
    {
        title: 'Customizable Scoring Frameworks',
        desc: 'Design evaluation rubrics tailored to each role. Weight technical skills, behavioral signals, domain expertise, and soft skills — with full transparency into scoring rationale.',
        stat: 'Custom',
        statLabel: 'per-role rubrics',
    },
    {
        title: 'SOC 2 Type II Certified',
        desc: 'Independently audited security controls meeting the highest enterprise standards. Annual re-certification with continuous monitoring and incident response protocols.',
        stat: 'SOC 2',
        statLabel: 'Type II certified',
    },
    {
        title: 'Enterprise SSO & Access Controls',
        desc: 'SAML-based single sign-on integrates with your identity provider. Role-based access controls, configurable permissions, and audit logging for complete visibility.',
        stat: 'SAML',
        statLabel: 'SSO integration',
    },
    {
        title: 'Dedicated Customer Success',
        desc: 'Named customer success manager, quarterly business reviews, proactive optimization recommendations, and priority support channels for your entire team.',
        stat: 'Dedicated',
        statLabel: 'CSM assigned',
    },
];

const integrationSteps = [
    { step: '01', title: 'Discovery & Planning', desc: 'Our enterprise team maps your hiring workflows, compliance requirements, and integration touchpoints. We design a custom implementation plan aligned with your timeline.' },
    { step: '02', title: 'ATS Integration & SSO', desc: 'Native integration with your ATS (Greenhouse, Lever, Workday, or 50+ others) and SSO configuration. Candidate data, scoring, and transcripts sync automatically.' },
    { step: '03', title: 'Framework Customization', desc: 'Configure scoring rubrics, interview templates, and evaluation criteria for each role family. Calibrate AI models against your existing top-performer data.' },
    { step: '04', title: 'Team Training & Go-Live', desc: 'Full training for recruiters, hiring managers, and stakeholders. Parallel testing period, then production launch — typically within 30 days of kickoff.' },
];

const outcomes = [
    { value: '80%', label: 'Faster Time-to-Hire', desc: 'From initial application to qualified shortlist in days, not weeks' },
    { value: '85%', label: 'Screening Time Reduced', desc: 'AI handles resume review, initial assessment, and scheduling automatically' },
    { value: '3×', label: 'Hiring Capacity', desc: 'Same team size handles 3× the hiring volume with AI automation' },
    { value: '35%', label: 'Lower Attrition', desc: 'Better candidate-role matching leads to higher retention and performance' },
];

export default function EnterpriseHiring() {
    return (
        <>
            {/* ====== HERO ====== */}
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }, { label: 'Enterprise Hiring' }]} />
                    <div className="hero__content">
                        <div className="badge">Enterprise</div>
                        <h1>Built for the<br /><span className="text-gradient">Fortune 1000.</span></h1>
                        <p>Enterprise-grade hiring infrastructure with AI-powered matching, conversational interviews, compliance, and dedicated support — at a fraction of traditional agency costs.</p>
                        <div className="hero__actions">
                            <Link href="/book-demo" className="btn btn--primary btn--lg">Talk to Enterprise Sales</Link>
                            <Link href="/products/air" className="btn btn--secondary btn--lg">Explore AIR →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== OUTCOMES / STATS ====== */}
            <section className="section section--dark">
                <div className="container">
                    <RevealSection>
                        <div className="section-header" style={{ color: 'white' }}>
                            <div className="badge">Results</div>
                            <h2 style={{ color: 'white' }}>Measurable outcomes from day one</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)' }}>Enterprise clients see transformative results within the first quarter.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '16px',
                        }}>
                            {outcomes.map((o) => (
                                <div key={o.label} style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '16px',
                                    padding: '28px 24px',
                                    textAlign: 'center',
                                }}>
                                    <div className="text-gradient" style={{ fontSize: '42px', fontWeight: 800, lineHeight: 1 }}>{o.value}</div>
                                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{o.label}</div>
                                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginTop: '6px', lineHeight: 1.5 }}>{o.desc}</div>
                                </div>
                            ))}
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
                            <h2>Enterprise-grade AI hiring infrastructure</h2>
                            <p>Every capability your talent acquisition team needs — security, scale, and intelligence built in.</p>
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
                                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.35 }}>
                                            {item.title}
                                        </h4>
                                        <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>
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

            {/* ====== THE ENTERPRISE PROBLEM ====== */}
            <section className="section section--gray">
                <div className="container container--narrow">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge badge--accent">The Challenge</div>
                            <h2>Enterprise hiring is broken</h2>
                            <p>Traditional enterprise recruiting is slow, expensive, and doesn&apos;t scale. Here&apos;s what most organizations face.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '720px', margin: '0 auto' }}>
                            {[
                                { problem: 'Hiring takes too long', detail: 'Average enterprise time-to-fill is 42 days. Top candidates accept other offers before your process completes. Every day a position stays open costs the business in lost productivity.' },
                                { problem: 'Recruiters are overwhelmed', detail: 'Each recruiter manages 25-40 open requisitions simultaneously. Resume review alone takes 23 hours per week — leaving minimal time for strategic candidate engagement.' },
                                { problem: 'Quality is inconsistent', detail: 'Different interviewers evaluate differently. Without standardized frameworks, hiring decisions are subjective, biased, and hard to improve systematically.' },
                                { problem: 'Scaling requires headcount', detail: 'Want to hire 2× more? You need 2× more recruiters. Traditional recruiting is a linear cost model that doesn\'t leverage technology.' },
                                { problem: 'Half your applicants are invisible', detail: 'Most enterprise recruiting teams review only 50-60% of incoming applications. Qualified candidates are missed simply because there aren\'t enough hours in the day.' },
                            ].map((item) => (
                                <div key={item.problem} style={{
                                    background: 'var(--color-white)',
                                    border: '1px solid var(--color-gray-100)',
                                    borderRadius: '12px',
                                    padding: '20px 24px',
                                }}>
                                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>{item.problem}</h4>
                                    <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== IMPLEMENTATION TIMELINE ====== */}
            <section className="section">
                <div className="container container--narrow">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Implementation</div>
                            <h2>Live in 30 days or less</h2>
                            <p>A proven four-step implementation process that gets your team productive fast.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                            {integrationSteps.map((s, i) => (
                                <div key={s.step} style={{
                                    display: 'grid',
                                    gridTemplateColumns: '70px 1fr',
                                    gap: '24px',
                                    padding: '28px 0',
                                    borderBottom: i < integrationSteps.length - 1 ? '1px solid var(--color-gray-100)' : 'none',
                                }}>
                                    <div style={{
                                        fontSize: '32px',
                                        fontWeight: 800,
                                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        lineHeight: 1,
                                        paddingTop: '4px',
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

            {/* ====== INTEGRATIONS ====== */}
            <section className="section section--gray">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Integrations</div>
                            <h2>Works with your existing tech stack</h2>
                            <p>Native ATS integrations, SSO, and APIs that connect Braintrust to your enterprise infrastructure.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '12px',
                            justifyContent: 'center',
                            maxWidth: '800px',
                            margin: '0 auto',
                        }}>
                            {['Greenhouse', 'Lever', 'Workday', 'BambooHR', 'iCIMS', 'Taleo', 'SmartRecruiters', 'SAP SuccessFactors', 'JazzHR', 'Jobvite', 'Okta SSO', 'Azure AD', 'OneLogin', 'Slack', 'Microsoft Teams', 'Custom API'].map((name) => (
                                <span key={name} style={{
                                    padding: '10px 18px',
                                    borderRadius: '8px',
                                    background: 'var(--color-white)',
                                    border: '1px solid var(--color-gray-100)',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    color: 'var(--text-secondary)',
                                }}>{name}</span>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== SOCIAL PROOF ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">What Leaders Say</div>
                            <h2>Trusted by enterprise talent teams</h2>
                            <p>Hear from hiring leaders who&apos;ve transformed their enterprise recruiting with Braintrust.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div className="grid grid--3">
                            {[
                                {
                                    quote: 'We replaced three separate recruiting tools and two agencies with Braintrust. The AI interviewing alone saves our team 60+ hours per week. Integration with our Greenhouse instance was seamless.',
                                    name: 'David L.',
                                    title: 'SVP Talent Acquisition',
                                    company: 'Fortune 500 technology company',
                                    metric: '60+ hrs/week saved',
                                },
                                {
                                    quote: 'SOC 2 compliance was non-negotiable for us. Braintrust passed our security review faster than any vendor we\'ve evaluated. The dedicated CSM understands our business and proactively optimizes our workflows.',
                                    name: 'Jennifer K.',
                                    title: 'CHRO',
                                    company: '8,000+ employee financial services firm',
                                    metric: 'Security-first approach',
                                },
                                {
                                    quote: 'We hired 800 people last year with the same 12-person recruiting team. Before Braintrust, that would have required 30+ recruiters. The ROI was immediate and obvious to our CFO.',
                                    name: 'Robert M.',
                                    title: 'VP People Operations',
                                    company: '3,000+ employee healthcare company',
                                    metric: '800 hires, same team',
                                },
                            ].map((q, i) => (
                                <div key={i} style={{
                                    padding: '28px',
                                    borderRadius: '14px',
                                    background: 'var(--color-white)',
                                    border: '1px solid var(--color-gray-100)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px',
                                }}>
                                    <span style={{
                                        display: 'inline-block', fontSize: '11px', fontWeight: 700,
                                        textTransform: 'uppercase', letterSpacing: '0.06em',
                                        color: 'var(--color-primary)', padding: '4px 10px',
                                        borderRadius: '100px', background: 'var(--color-primary-50)',
                                        alignSelf: 'flex-start',
                                    }}>{q.metric}</span>
                                    <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0, flex: 1 }}>
                                        &ldquo;{q.quote}&rdquo;
                                    </p>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: '12px',
                                        paddingTop: '16px', borderTop: '1px solid var(--color-gray-100)',
                                    }}>
                                        <div style={{
                                            width: '36px', height: '36px', borderRadius: '50%',
                                            background: `hsl(${210 + (i * 40) % 120}, 45%, 55%)`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: 'white', fontWeight: 700, fontSize: '13px', flexShrink: 0,
                                        }}>{q.name.split(' ').map(n => n[0]).join('')}</div>
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

            {/* ====== FAQ — SEO Rich ====== */}
            <section className="section section--gray">
                <div className="container container--narrow">
                    <div className="section-header">
                        <h2>Enterprise Hiring FAQ</h2>
                        <p>Common questions from enterprise talent acquisition leaders evaluating Braintrust.</p>
                    </div>
                    <FAQ items={faqItems} schemaId="enterprise-hiring" />
                </div>
            </section>

            <CTASection
                title="Ready for enterprise-grade hiring?"
                description="Talk to our enterprise team about transforming your talent acquisition with AI-powered matching, interviews, and assessments."
                primaryLabel="Contact Enterprise Sales"
                primaryHref="/book-demo"
                secondaryLabel="Explore AIR"
                secondaryHref="/products/air"
            />
        </>
    );
}
