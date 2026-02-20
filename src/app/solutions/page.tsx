import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import RevealSection from '@/components/RevealSection';

export const metadata: Metadata = {
    title: 'Solutions — Enterprise Hiring, High-Volume Recruiting & AI Training Data | Braintrust',
    description: 'Braintrust solutions for enterprise hiring, high-volume recruiting with AI screening, and AI training data (RLHF, red teaming, annotations). Purpose-built for the world\'s most demanding organizations.',
    keywords: 'enterprise hiring solutions, high volume hiring, AI training data, RLHF, AI recruiting solutions, enterprise talent acquisition, bulk hiring, AI screening',
};

const solutions = [
    {
        title: 'Enterprise Hiring',
        description: 'End-to-end talent acquisition for Fortune 1000 companies. AI-powered matching, conversational interviews, SOC 2 compliance, dedicated account management, and custom SLAs — at a fraction of traditional agency costs.',
        href: '/solutions/enterprise-hiring',
        stats: ['SOC 2 Type II', '80% Faster', 'Dedicated CSM', '50+ ATS'],
        highlights: ['AI-powered candidate matching & scoring', 'Conversational voice interviews at scale', 'Enterprise SSO & role-based access controls', 'Custom scoring frameworks per role'],
    },
    {
        title: 'High-Volume Hiring',
        description: 'Scale your hiring to hundreds — or thousands — of roles without scaling your recruiting team. AI screening processes every applicant instantly. Conversational AI interviews run 24/7 in 16+ languages.',
        href: '/solutions/high-volume-hiring',
        stats: ['10× Throughput', '1000s/Day', 'AI Screening', '16+ Languages'],
        highlights: ['Process thousands of candidates per day', 'Customizable assessment frameworks', 'Seasonal, project-based, or permanent hiring', 'Intent signals & motivation scoring'],
    },
    {
        title: 'AI Training Data',
        description: 'Access 2M+ domain experts across 100+ countries and 50+ languages for RLHF, data labeling, red teaming, model evaluations, and safety alignment — powering the world\'s leading AI models.',
        href: '/solutions/ai-training-data',
        stats: ['2M+ Experts', '100+ Countries', '50+ Languages', 'Enterprise QA'],
        highlights: ['RLHF & human preference data at scale', 'Red teaming & adversarial testing', 'Multi-modal annotation & labeling', 'Domain experts: medical, legal, engineering'],
    },
];

export default function Solutions() {
    return (
        <>
            {/* ====== HERO ====== */}
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions' }]} />
                    <div className="hero__content">
                        <div className="badge">Solutions</div>
                        <h1>Purpose-built for<br /><span className="text-gradient">enterprise scale.</span></h1>
                        <p>Solutions designed for the world&apos;s most demanding organizations — from Fortune 1000 talent acquisition to AI model training and high-volume hiring.</p>
                    </div>
                </div>
            </section>

            {/* ====== SOLUTIONS GRID ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {solutions.map((sol) => (
                                <Link key={sol.href} href={sol.href} style={{
                                    display: 'block',
                                    background: 'var(--color-white)',
                                    border: '1px solid var(--color-gray-100)',
                                    borderRadius: '16px',
                                    padding: '32px 36px',
                                    textDecoration: 'none',
                                    transition: 'box-shadow 0.2s, border-color 0.2s, transform 0.2s',
                                    color: 'inherit',
                                }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '32px', alignItems: 'flex-start' }}>
                                        <div>
                                            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>{sol.title}</h3>
                                            <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: '0 0 16px', maxWidth: '640px' }}>{sol.description}</p>
                                            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 24px' }}>
                                                {sol.highlights.map((h) => (
                                                    <li key={h} style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                        <span style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 700 }}>✓</span>
                                                        {h}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                                            {sol.stats.map((s) => (
                                                <span key={s} style={{
                                                    padding: '6px 14px',
                                                    borderRadius: '8px',
                                                    background: 'var(--color-primary-50)',
                                                    color: 'var(--color-primary)',
                                                    fontSize: '11px',
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.04em',
                                                    whiteSpace: 'nowrap',
                                                }}>{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== WHY BRAINTRUST ====== */}
            <section className="section section--gray">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Why Braintrust</div>
                            <h2>One platform, every hiring need</h2>
                            <p>Replace fragmented tools, expensive agencies, and inconsistent processes with an integrated, AI-powered platform.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div className="grid grid--3">
                            {[
                                { title: 'AI-First Architecture', desc: 'Every feature is built on AI — from semantic matching and conversational interviews to automated scoring and predictive analytics. Not bolted on, built in.' },
                                { title: 'Enterprise Security', desc: 'SOC 2 Type II certified, enterprise SSO, configurable data retention, and full audit logging. Built for the compliance requirements of Fortune 1000 organizations.' },
                                { title: 'Global Scale', desc: '2M+ professionals across 100+ countries and 50+ languages. Whether you\'re hiring locally or building AI with global data, Braintrust scales to your needs.' },
                            ].map((item) => (
                                <div key={item.title} className="card card--feature" style={{ padding: '24px' }}>
                                    <h4 style={{ marginBottom: '8px', fontSize: '15px', fontWeight: 700 }}>{item.title}</h4>
                                    <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            <CTASection
                title="Let's discuss your needs"
                description="Our solutions team will design a custom plan for your organization — whether it's enterprise hiring, high-volume recruiting, or AI training data."
                primaryLabel="Book a Demo"
                primaryHref="/book-demo"
            />
        </>
    );
}
