import type { Metadata } from 'next';
import Link from 'next/link';

import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import RevealSection from '@/components/RevealSection';
import G2BadgeStrip from '@/components/G2BadgeStrip';

export const metadata: Metadata = {
    title: 'Enterprise & High-Volume Hiring | AI-Powered Scale | Braintrust',
    description: 'Combines the power of Braintrust enterprise recruiting infrastructure with high-volume scale. SOC 2 Type II compliance, robust ATS integrations, and infinite hiring capacity.',
};

const faqItems = [
    { question: 'What makes Braintrust enterprise-ready?', answer: 'Braintrust meets the highest enterprise standards with SOC 2 Type II certification, SAML-based enterprise SSO, dedicated customer success managers, and automated compliance workflows incl I-9 verification and EEO tracking.' },
    { question: 'How does it handle high-volume hiring spikes?', answer: 'Our AI Recruiter (AIR) scales instantaneously. Whether you have 50 or 50,000 applicants for seasonal, project, or rapid-expansion hiring, AIR can conduct voice interviews and skills assessments simultaneously without adding recruiting headcount.' },
    { question: 'Does Braintrust integrate with our ATS?', answer: 'Yes. Braintrust natively integrates with 50+ ATS platforms including Greenhouse, Lever, Workday, BambooHR, iCIMS, Taleo, and SmartRecruiters. We push candidate data, AI scoring, and interview transcripts directly into your existing workflow.' },
    { question: 'How do you ensure fairness at scale?', answer: 'Our AI evaluates candidates based strictly on customizable skills frameworks and rubrics, eliminating the unconscious bias of human resume screening. Each evaluation is documented transparently.' },
    { question: 'What is the implementation timeline?', answer: 'Most enterprise clients are live within 30 days. Our dedicated team handles the ATS integration, SSO configuration, framework customization, and full team training.' },
];

const capabilities = [
    {
        title: 'Infinite Concurrent Interviews',
        desc: 'AIR conducts thousands of real-time, adaptive voice interviews simultaneously. Never create a recruiting bottleneck again, even with massive applicant spikes.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    },
    {
        title: 'Seamless ATS Integration',
        desc: 'Works exactly where your team already works. Pull jobs, sync candidate stages, and push comprehensive AI interview transcripts and rubric scores back to Greenhouse, Workday, and 50+ others.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>,
    },
    {
        title: 'SOC 2 Type II Certified',
        desc: 'Independently audited security controls meeting the highest enterprise benchmarks. Annual re-certification, robust data retention controls, and continuous monitoring.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    },
    {
        title: 'Global Multilingual Scale',
        desc: 'Deploy high-volume campaigns globally with support for 16+ languages in both voice interviews and technical assessments. Zero localization friction.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    },
];

export default function EnterpriseHiring() {
    return (
        <div style={{ background: '#0a0a0a' }}>
            {/* ====== HERO (DARK, HIGH VISUAL) ====== */}
            <section className="hero hero--centered" style={{ paddingTop: '160px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
                    width: '80%', height: '80%', background: 'radial-gradient(ellipse at center, rgba(232, 96, 76, 0.15) 0%, transparent 70%)',
                    zIndex: 0, pointerEvents: 'none'
                }} />
                
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Enterprise & High-Volume Hiring' }]} />
                    </div>
                    
                    <div className="hero__content" style={{ color: 'white' }}>
                        <div className="badge badge--accent" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                            Scale hiring infinitely
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.05,
                            marginBottom: '24px',
                            color: 'white'
                        }}>
                            Enterprise-grade.<br />
                            <span className="text-gradient">High-volume scale.</span>
                        </h1>
                        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '680px', margin: '0 auto 40px', lineHeight: 1.6 }}>
                            Transform how your Fortune 1000 company hires. Automate 10,000+ daily screenings and voice interviews with native ATS sync, SOC 2 Type II strict compliance, and precision AI matching.
                        </p>
                        <div className="hero__actions" style={{ justifyContent: 'center' }}>
                            <Link href="/book-demo" className="btn btn--primary btn--lg">Talk to Enterprise Sales</Link>
                            <Link href="/products/air" className="btn btn--secondary btn--lg" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', borderColor: 'rgba(255,255,255,0.1)' }}>See AI Recruiter IN ACTION →</Link>
                        </div>
                        
                        <div style={{ marginTop: '80px', filter: 'invert(1) grayscale(1) brightness(2)' }}>
                            <G2BadgeStrip showSoc2 />
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== HIGH-VOLUME VISUALIZATION GRID ====== */}
            <section className="section" style={{ background: '#ffffff', borderTopLeftRadius: '40px', borderTopRightRadius: '40px', paddingTop: '100px' }}>
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>Built to process millions.<br />Designed to hire one.</h2>
                            <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>Combine enterprise compliance standards with start-up agility. Don&apos;t just screen candidates faster—assess them better at global scale.</p>
                        </div>
                    </RevealSection>
                    
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '24px',
                            marginTop: '60px'
                        }}>
                            {capabilities.map((cap, i) => (
                                <div key={i} style={{
                                    background: '#f8fafc',
                                    borderRadius: '24px',
                                    padding: '40px 32px',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'default'
                                }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '12px',
                                        background: 'rgba(232, 96, 76, 0.1)', color: 'var(--color-primary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        marginBottom: '24px'
                                    }}>
                                        {cap.icon}
                                    </div>
                                    <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>{cap.title}</h3>
                                    <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: 1.6, margin: 0 }}>{cap.desc}</p>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== PERFORMANCE METRICS METAPHOR ====== */}
            <section className="section" style={{ background: '#ffffff', paddingTop: '40px', paddingBottom: '120px' }}>
                <div className="container container--narrow">
                    <RevealSection>
                        <div style={{
                            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                            borderRadius: '32px',
                            padding: '64px',
                            color: 'white',
                            textAlign: 'center',
                            boxShadow: '0 24px 48px rgba(0,0,0,0.1)'
                        }}>
                            <h2 style={{ fontSize: '32px', color: 'white', marginBottom: '48px' }}>The compounding returns of AI hiring</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                                <div>
                                    <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--color-primary)' }}>80%</div>
                                    <div style={{ fontSize: '16px', fontWeight: 600, marginTop: '8px' }}>Faster Time-to-Hire</div>
                                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', lineHeight: 1.5 }}>From initial application to qualified shortlist in days.</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--color-primary)' }}>3×</div>
                                    <div style={{ fontSize: '16px', fontWeight: 600, marginTop: '8px' }}>Hiring Capacity</div>
                                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', lineHeight: 1.5 }}>Process thousands of candidates without adding recruiter headcount.</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--color-primary)' }}>100%</div>
                                    <div style={{ fontSize: '16px', fontWeight: 600, marginTop: '8px' }}>ATS Synchronization</div>
                                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', lineHeight: 1.5 }}>Scores and interview audio automatically injected into the ATS.</div>
                                </div>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== INTEGRATIONS ====== */}
            <section className="section section--gray" style={{ background: '#f8fafc', padding: '100px 0' }}>
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Ecosystem</div>
                            <h2>Connect to your entire HR stack.</h2>
                            <p>Braintrust operates as the intelligence layer, moving seamlessly with your ATS.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '12px',
                            justifyContent: 'center',
                            maxWidth: '900px',
                            margin: '0 auto',
                        }}>
                            {['Greenhouse', 'Lever', 'Workday', 'BambooHR', 'iCIMS', 'Taleo', 'SmartRecruiters', 'SAP SuccessFactors', 'JazzHR', 'Jobvite', 'Okta SSO', 'Azure AD', 'OneLogin', 'Slack', 'Microsoft Teams', 'Custom API'].map((name) => (
                                <span key={name} style={{
                                    padding: '14px 24px',
                                    borderRadius: '12px',
                                    background: 'var(--color-white)',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    color: 'var(--text-primary)',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
                                }}>{name}</span>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== FAQ ====== */}
            <section className="section" style={{ background: '#ffffff' }}>
                <div className="container container--narrow">
                    <div className="section-header">
                        <h2>Enterprise & Scale FAQ</h2>
                    </div>
                    <FAQ items={faqItems} schemaId="enterprise-hiring" />
                </div>
            </section>

            <CTASection
                title="Scale your hiring engine today."
                description="Equip your talent team with AI that evaluates hundreds of candidates simultaneously, natively in your ATS."
                primaryLabel="Contact Enterprise Sales"
                primaryHref="/book-demo"
            />
        </div>
    );
}
