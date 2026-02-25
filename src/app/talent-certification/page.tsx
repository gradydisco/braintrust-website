import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Certified Braintrust Talent — Get Verified, Get Ahead',
    description: 'Become Certified Braintrust Talent. Skills verification, ID check, and AI-enhanced profile gives you a trusted badge that sets you apart from thousands of generic applicants.',
    openGraph: {
        title: 'Certified Braintrust Talent — Your Edge in a Crowded Market',
        description: 'Verified skills. Validated experience. Trusted by top companies. Your certification opens doors that a resume can\'t.',
    },
};

const certBenefits = [
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
        title: 'Trusted by Top Companies',
        desc: 'Certified Braintrust Talent is a recognized signal of quality. Hiring teams at Fortune 500s and leading startups know what it means — and prioritize it.',
        gradient: 'linear-gradient(135deg, #FFBC44, #E5A030)',
        color: '#C48000',
        bg: 'rgba(255,188,68,0.1)',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        title: 'Elevated Above Generic Applicants',
        desc: 'Certified members appear higher in company search results and matching algorithms. You\'re not competing against the noise — you\'re above it.',
        gradient: 'linear-gradient(135deg, #F4845F, #E06C48)',
        color: '#E06C48',
        bg: 'rgba(244,132,95,0.08)',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
        title: 'Faster Time to Opportunity',
        desc: 'Companies can immediately trust what your profile says — no need for preliminary screening calls or skills tests. You move faster through the process.',
        gradient: 'linear-gradient(135deg, #9B8AFF, #7C6BF0)',
        color: '#7C6BF0',
        bg: 'rgba(155,138,255,0.08)',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
        title: 'Access to Premium Rates',
        desc: 'Certified talent unlocks access to higher-rate roles that companies reserve for professionals they can trust. Certification literally pays.',
        gradient: 'linear-gradient(135deg, #00D4AA, #00B894)',
        color: '#00B894',
        bg: 'rgba(0,212,170,0.08)',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        title: 'Built-in Credibility',
        desc: 'Your certification includes ID verification and background check options — which companies need for regulated industries, sensitive projects, and high-trust roles.',
        gradient: 'linear-gradient(135deg, #5469D4, #3D52D0)',
        color: '#5469D4',
        bg: 'rgba(84,105,212,0.08)',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
        title: 'Long-Term Career Asset',
        desc: 'Your certification stays with you. As you take on more roles and build more history on Braintrust, your profile and status strengthen over time.',
        gradient: 'linear-gradient(135deg, #F28B82, #D96B61)',
        color: '#D96B61',
        bg: 'rgba(242,139,130,0.08)',
    },
];

const certSteps = [
    {
        num: '01',
        title: 'Complete Your Profile',
        desc: 'Build a rich, structured profile with your skills, experience, portfolio, and preferences. Our AI begins optimizing your profile presentation immediately.',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
    },
    {
        num: '02',
        title: 'AI Skills Interview',
        desc: 'Take a domain-specific conversational interview that evaluates your real capabilities — not just what\'s on paper. 15–30 minutes, on your schedule.',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></svg>,
    },
    {
        num: '03',
        title: 'ID Verification',
        desc: 'Verify your identity through our secure, fast verification system. This builds trust with hiring companies and unlocks higher-tier roles.',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
    },
    {
        num: '04',
        title: 'Receive Certification',
        desc: 'Once verified, you officially become Certified Braintrust Talent. Your badge is displayed on your profile and visible to all companies searching the network.',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>,
    },
];

const whyCertified = [
    {
        before: 'Submit the same resume everywhere',
        after: 'One certified profile speaks for you',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
    },
    {
        before: 'Compete with thousands of random applicants',
        after: 'Stand in a smaller, vetted pool',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
    },
    {
        before: 'Hope a recruiter reads your LinkedIn',
        after: 'AI surfaces you to matched companies',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
    },
    {
        before: 'Prove yourself in every screening call',
        after: 'Certification speaks before you speak',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
    },
];

export default function TalentCertification() {
    return (
        <>
            {/* ── HERO ────────────────────────────────────────── */}
            <section style={{
                position: 'relative',
                padding: 'calc(var(--header-height) + var(--space-20)) 0 var(--space-20)',
                background: 'linear-gradient(175deg, #fff 0%, #FFFBF0 60%, #FFF8F5 100%)',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    background: 'radial-gradient(ellipse 50% 50% at 75% 30%, rgba(255,188,68,0.15), transparent)',
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-12)', alignItems: 'center' }}>
                        {/* Left — Text */}
                        <div>
                            {/* Cert badge visual */}
                            <div style={{
                                width: 64, height: 64, borderRadius: '50%',
                                background: 'linear-gradient(135deg, #FFBC44, #E5A030)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: 'var(--space-6)',
                                boxShadow: '0 8px 32px rgba(255,188,68,0.4)',
                            }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                                </svg>
                            </div>

                            <h1 style={{ marginBottom: 'var(--space-5)', textAlign: 'left' }}>
                                Rise above the noise.<br />
                                <span className="text-gradient">Become officially certified.</span>
                            </h1>
                            <p style={{ fontSize: 'var(--text-xl)', maxWidth: 520, margin: '0 0 var(--space-8)', lineHeight: 1.65 }}>
                                In a world of mass applications and keyword-filtered resumes, Certified Braintrust Talent
                                is a verified signal that companies can trust.
                            </p>
                            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                                <Link href="https://app.usebraintrust.com" className="btn btn--primary btn--lg" id="cert-hero-cta"
                                    style={{ background: 'linear-gradient(135deg, #FFBC44, #E5A030)', boxShadow: '0 4px 20px rgba(255,188,68,0.4)' }}>
                                    Get Certified
                                </Link>
                                <Link href="/how-it-works" className="btn btn--secondary btn--lg" id="cert-hero-how">
                                    How It Works
                                </Link>
                            </div>
                        </div>

                        {/* Right — Portrait with decorative ring */}
                        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                            <div style={{
                                position: 'absolute', width: 380, height: 380, borderRadius: '50%',
                                border: '2px dashed rgba(255,188,68,0.25)',
                                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            }} />
                            <div style={{
                                position: 'absolute', width: 440, height: 440, borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(255,188,68,0.08) 0%, transparent 70%)',
                                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            }} />
                            <div style={{
                                width: 340, height: 340, borderRadius: '50%',
                                overflow: 'hidden', position: 'relative',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 0 6px rgba(255,188,68,0.2)',
                            }}>
                                <img
                                    src="/images/talent_portrait_1.png"
                                    alt="Certified Braintrust talent professional"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT IT MEANS ──────────────────────────────── */}
            <section className="section" style={{ background: 'var(--color-gray-950)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="badge badge--dark">What It Means</div>
                        <h2 style={{ color: 'white' }}>Certified Braintrust Talent means:</h2>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: 'var(--space-5)',
                        maxWidth: 960, margin: '0 auto',
                    }}>
                        {[
                            { label: 'Verified Identity', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>, desc: 'Government-issued ID confirmed' },
                            { label: 'Validated Skills', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>, desc: 'AI interview completed and scored' },
                            { label: 'Enhanced Profile', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>, desc: 'AI-optimized presentation' },
                            { label: 'Background Cleared', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, desc: 'Optional background check available' },
                        ].map(item => (
                            <div key={item.label} style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: 'var(--radius-xl)',
                                padding: 'var(--space-6)',
                                textAlign: 'center',
                            }}>
                                <div style={{ marginBottom: 'var(--space-3)', color: 'white', display: 'flex', justifyContent: 'center' }}>
                                    {item.icon}
                                </div>
                                <div style={{ color: 'white', fontWeight: 700, fontSize: 'var(--text-base)', marginBottom: 4 }}>{item.label}</div>
                                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* ── BEFORE / AFTER ─────────────────────────────── */}
            < section className="section" >
                <div className="container">
                    <div className="section-header">
                        <div className="badge badge--accent">The Difference</div>
                        <h2>Certified vs. uncertified.<br /><span className="text-gradient">There&apos;s a real gap.</span></h2>
                    </div>

                    <div style={{
                        maxWidth: 800, margin: '0 auto',
                        display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
                    }}>
                        {whyCertified.map((item) => (
                            <div key={item.before} style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr auto 1fr',
                                gap: 'var(--space-4)', alignItems: 'center',
                                background: 'var(--color-white)',
                                border: '1px solid var(--color-gray-100)',
                                borderRadius: 'var(--radius-xl)',
                                padding: 'var(--space-5) var(--space-6)',
                                boxShadow: 'var(--shadow-xs)',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                                    <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                                    <span style={{
                                        fontSize: 'var(--text-sm)', color: 'var(--text-secondary)',
                                        textDecoration: 'line-through', opacity: 0.7,
                                    }}>{item.before}</span>
                                </div>
                                <div style={{
                                    width: 32, height: 32, borderRadius: '50%',
                                    background: 'var(--color-gray-50)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 18, color: 'var(--color-gray-300)',
                                    flexShrink: 0,
                                }}>→</div>
                                <div style={{
                                    fontSize: 'var(--text-sm)', fontWeight: 700,
                                    color: 'var(--color-info)',
                                    display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    {item.after}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* ── CERT BENEFITS ──────────────────────────────── */}
            < section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="badge badge--gold">Benefits</div>
                        <h2>What certification<br /><span className="text-gradient">actually unlocks.</span></h2>
                    </div>

                    <div className="grid grid--3">
                        {certBenefits.map((b) => (
                            <div key={b.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                                <div style={{
                                    width: 52, height: 52, borderRadius: 'var(--radius-lg)',
                                    background: b.bg, display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', color: b.color,
                                }}>{b.icon}</div>
                                <div>
                                    <h4 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--text-xl)', color: b.color }}>{b.title}</h4>
                                    <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* ── HOW TO GET CERTIFIED ───────────────────────── */}
            < section className="section" >
                <div className="container container--narrow">
                    <div className="section-header">
                        <div className="badge">The Process</div>
                        <h2>Get certified in 4 steps.</h2>
                        <p>The whole process takes less than 2 hours total, spread across your own schedule.</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', position: 'relative' }}>
                        <div style={{
                            position: 'absolute', left: 31, top: 50, bottom: 50,
                            width: 2,
                            background: 'linear-gradient(180deg, #FFBC44, #F4845F, #9B8AFF, #00D4AA)',
                            borderRadius: 2
                        }} />
                        {certSteps.map((step, idx) => (
                            <div key={step.num} style={{
                                display: 'grid', gridTemplateColumns: '64px 1fr',
                                gap: 'var(--space-5)', alignItems: 'flex-start',
                            }}>
                                <div style={{
                                    width: 64, height: 64, borderRadius: '50%',
                                    background: 'var(--gradient-warm)', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexShrink: 0,
                                    boxShadow: '0 4px 20px rgba(244,132,95,0.3)',
                                    position: 'relative', zIndex: 1,
                                }}>{step.icon}</div>
                                <div className="card" style={{ marginTop: 'var(--space-2)' }}>
                                    <div style={{
                                        fontSize: 11, fontWeight: 800, letterSpacing: '0.08em',
                                        textTransform: 'uppercase', color: 'var(--color-primary)',
                                        marginBottom: 'var(--space-1)',
                                    }}>Step {step.num}</div>
                                    <h4 style={{ marginBottom: 'var(--space-2)' }}>{step.title}</h4>
                                    <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* ── FINAL CTA ──────────────────────────────────── */}
            < section style={{
                background: 'linear-gradient(135deg, #FFBC44 0%, #F4845F 50%, #9B8AFF 100%)',
                padding: 'var(--space-20) 0', textAlign: 'center',
            }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                        <div style={{
                            width: 64, height: 64, borderRadius: '50%',
                            background: 'rgba(255,255,255,0.15)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                            </svg>
                        </div>
                    </div>
                    <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: 'var(--space-4)' }}>
                        Ready to be trusted?
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'var(--text-lg)', maxWidth: 480, margin: '0 auto var(--space-8)' }}>
                        Your certification opens doors that a resume alone can&apos;t. Start the process in 20 minutes.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="https://app.usebraintrust.com" className="btn btn--white btn--lg" id="cert-bottom-cta">
                            Get Certified
                        </Link>
                        <Link href="/for-talent" className="btn btn--lg" id="cert-bottom-talent"
                            style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1.5px solid rgba(255,255,255,0.3)' }}>
                            Back to Talent Overview
                        </Link>
                    </div>
                </div>
            </section >
        </>
    );
}
