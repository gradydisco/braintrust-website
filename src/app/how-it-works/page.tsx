import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'How It Works for Talent — Get Certified, Get Matched, Start Earning',
    description: 'Discover how Braintrust works for talent: create your profile, complete an AI skills interview, get certified, get matched to premium roles, and start earning — with zero fees.',
    openGraph: {
        title: 'How It Works for Talent — Braintrust',
        description: 'Five simple steps from profile to paycheck. AI-powered matching, zero fees, and certification that sets you apart.',
    },
};

const steps = [
    {
        num: '01',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
        title: 'Create Your Profile',
        headline: 'Tell us who you are — once.',
        desc: 'No more rewriting your resume for every application. Build a rich professional profile in about 20 minutes. Your skills, experience, work preferences, and rate — all in one place. Our AI learns what makes you unique.',
        details: ['Skills & experience summary', 'Work type preferences (contract, full-time, hybrid)', 'Rate and availability settings', 'Portfolio & work samples'],
        time: '~20 min',
        badge: 'Start Here',
        color: '#F4845F',
        gradient: 'linear-gradient(135deg, #F4845F, #F9A68A)',
        glow: 'rgba(244,132,95,0.3)',
    },
    {
        num: '02',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></svg>,
        title: 'Complete AI Skills Interview',
        headline: 'Get evaluated fairly, not judged by keywords.',
        desc: 'Our conversational AI interviewer asks about your real capabilities — not just what\'s on paper. It\'s domain-specific, thoughtful, and designed to surface what you actually know. Most people complete it in 15–30 minutes.',
        details: ['Domain-specific technical questions', 'Conversational, not interrogatory', 'Tests real competency, not rote answers', 'Available 24/7 — on your schedule'],
        time: '15–30 min',
        badge: 'AI-Powered',
        color: '#9B8AFF',
        gradient: 'linear-gradient(135deg, #9B8AFF, #E8A0BF)',
        glow: 'rgba(155,138,255,0.3)',
    },
    {
        num: '03',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>,
        title: 'Get Certified',
        headline: 'Become Certified Braintrust Talent.',
        desc: 'Once you complete your interview and ID verification, you earn your Certified Braintrust Talent status. This signals to top companies that you\'ve been properly vetted — and puts you in a different tier than generic applicants.',
        details: ['Government-issued ID verification', 'Background check available', 'AI-enhanced profile optimization', 'Certified badge on your profile'],
        time: 'After interview',
        badge: 'Status',
        color: '#E5A030',
        gradient: 'linear-gradient(135deg, #FFBC44, #E5A030)',
        glow: 'rgba(255,188,68,0.3)',
    },
    {
        num: '04',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
        title: 'Get Matched to Roles',
        headline: 'No more searching. Opportunities find you.',
        desc: 'Our AI analyzes your certified profile and matches you to roles where you have a genuine, high chance of success. You compete with fewer, more qualified peers — not thousands of random applicants. You get notified when a strong match arrives.',
        details: ['AI matches based on skills + experience level', 'Compete with qualified peers, not thousands', 'Instant notifications for strong matches', 'Contract, full-time, and gig opportunities'],
        time: 'Ongoing',
        badge: 'Intelligent',
        color: '#00B894',
        gradient: 'linear-gradient(135deg, #00D4AA, #00B894)',
        glow: 'rgba(0,212,170,0.3)',
    },
    {
        num: '05',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
        title: 'Start Earning',
        headline: 'Keep everything you make.',
        desc: 'When you land a role, you negotiate directly. No middleman taking a cut of your rate. No platform fees subtracted from your pay. Ever. Contract work, full-time roles, and AI gig work — with real income potential and on-time payments.',
        details: ['Zero platform fees for talent', 'Direct negotiation with companies', 'On-time, reliable payments', 'Access to AI gig work for extra income'],
        time: 'Day 1+',
        badge: '$0 Fees',
        color: '#00B894',
        gradient: 'linear-gradient(135deg, #00D4AA, #00B894)',
        glow: 'rgba(0,184,148,0.3)',
    },
];

const faqs = [
    {
        q: 'How long does the whole process take?',
        a: 'Most people complete their profile and AI interview in under an hour total. Certification happens within 1–2 days. Matching begins immediately after certification.'
    },
    {
        q: 'What if I don\'t perform well in the AI interview?',
        a: 'The interview is designed to be fair and conversational — not a stress test. It validates what you actually know. You can retake certain sections after a waiting period if needed.'
    },
    {
        q: 'Do I have to accept every match?',
        a: 'Absolutely not. You\'re in control. Review opportunities, decline anything that doesn\'t fit, and only engage with roles that genuinely interest you.'
    },
    {
        q: 'What types of roles are available?',
        a: 'Contract, full-time, part-time, and gig work across engineering, design, product, data, marketing, operations, finance, and more. Remote-first with some hybrid and on-site options.'
    },
    {
        q: 'Is Braintrust really free for talent?',
        a: 'Yes. Braintrust has never charged talent a single fee. We never take a percentage of your rate or earnings. Companies pay us — you keep 100%.'
    },
];

export default function HowItWorksForTalent() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────────── */}
            <section style={{
                position: 'relative',
                padding: 'calc(var(--header-height) + var(--space-20)) 0 var(--space-20)',
                background: 'linear-gradient(175deg, #fff 0%, #FFF8F5 60%, #F5F3FF 100%)',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(244,132,95,0.12), transparent)',
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
                        <h1 style={{ marginBottom: 'var(--space-5)' }}>
                            From sign-up to paycheck —<br />
                            <span className="text-gradient">in 5 clear steps.</span>
                        </h1>
                        <p style={{ fontSize: 'var(--text-xl)', maxWidth: 580, margin: '0 auto var(--space-8)' }}>
                            No guesswork. No gatekeepers. Just a straightforward path to doing work you&apos;re proud of,
                            with companies worth working for — and keeping every dollar you earn.
                        </p>
                        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="https://app.usebraintrust.com" className="btn btn--primary btn--lg" id="hiw-hero-cta">
                                Start Your Profile
                            </Link>
                            <Link href="/jobs" className="btn btn--secondary btn--lg" id="hiw-hero-jobs">
                                Browse Open Roles
                            </Link>
                        </div>
                    </div>
                    {/* HERO MEDIA */}
                    <div style={{
                        position: 'relative', maxWidth: 960, margin: 'var(--space-12) auto 0',
                        borderRadius: 'var(--radius-2xl)', overflow: 'hidden',
                        boxShadow: 'var(--shadow-xl)', border: '1px solid rgba(0,0,0,0.05)',
                        background: 'var(--color-white)',
                    }}>
                        <img
                            src="/images/talent_collab_1772040088156.png"
                            alt="Professionals collaborating"
                            style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            {/* ── STEP-BY-STEP ──────────────────────────────── */}
            <section className="section">
                <div className="container container--narrow">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
                        {steps.map((step, idx) => (
                            <div key={step.num} style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: 'var(--space-8)',
                            }}>
                                {/* Header row */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)' }}>
                                    {/* Big number */}
                                    <div style={{
                                        width: 72, height: 72, flexShrink: 0,
                                        borderRadius: '50%',
                                        background: step.gradient,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'white',
                                        boxShadow: `0 6px 24px ${step.glow}`,
                                    }}>
                                        {step.icon}
                                    </div>
                                    <div style={{ flex: 1, paddingTop: 8 }}>
                                        <div style={{
                                            display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                                            marginBottom: 'var(--space-1)',
                                        }}>
                                            <span style={{
                                                fontSize: 11, fontWeight: 800, letterSpacing: '0.08em',
                                                textTransform: 'uppercase', color: step.color,
                                            }}>Step {step.num}</span>
                                            <span style={{
                                                fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                                                textTransform: 'uppercase',
                                                padding: '2px 10px', borderRadius: 'var(--radius-full)',
                                                background: `${step.color}18`, color: step.color,
                                            }}>{step.badge}</span>
                                            <span style={{ fontSize: 12, color: 'var(--text-tertiary)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> {step.time}
                                            </span>
                                        </div>
                                        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 'var(--space-1)' }}>{step.title}</h2>
                                        <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>
                                            {step.headline}
                                        </div>
                                    </div>
                                </div>

                                {/* Content card */}
                                <div style={{
                                    background: 'var(--color-white)',
                                    border: `1px solid ${step.color}20`,
                                    borderLeft: `4px solid ${step.color}`,
                                    borderRadius: 'var(--radius-xl)',
                                    padding: 'var(--space-8)',
                                    marginLeft: 0,
                                    boxShadow: `0 4px 24px ${step.glow}20`,
                                }}>
                                    <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.7, marginBottom: 'var(--space-6)', color: 'var(--text-primary)' }}>
                                        {step.desc}
                                    </p>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                        gap: 'var(--space-3)',
                                    }}>
                                        {step.details.map(d => (
                                            <div key={d} style={{
                                                display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)',
                                                fontSize: 'var(--text-sm)', color: 'var(--text-secondary)',
                                            }}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={step.color} strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}>
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                {d}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Separator arrow */}
                                {idx < steps.length - 1 && (
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gray-300)" strokeWidth="2" strokeLinecap="round">
                                            <path d="M12 5v14M5 12l7 7 7-7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INCOME TYPES ──────────────────────────────── */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="badge badge--teal">Income Options</div>
                        <h2>Multiple ways to earn.<br /><span className="text-gradient">All with zero fees.</span></h2>
                    </div>
                    <div className="grid grid--3">
                        {[
                            {
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
                                title: 'Contract Roles',
                                desc: 'Project-based engagements with top companies. Typical duration: 3–12 months. High hourly rates. Full control.',
                                badge: '3–12 month',
                                highlight: 'Most Popular',
                            },
                            {
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
                                title: 'Full-Time Roles',
                                desc: 'Permanent positions at companies that source directly from the Braintrust network. Competitive salaries and benefits.',
                                badge: 'Permanent',
                                highlight: 'Growing Fast',
                            },
                            {
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>,
                                title: 'AI Gig Work',
                                desc: 'Flexible, remote AI training tasks in your specialty. Work when you want, as much as you want. Great supplemental income.',
                                badge: 'Flexible',
                                highlight: 'Earn Anytime',
                            },
                        ].map((item) => (
                            <div key={item.title} className="card card--feature" style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)',
                                    fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
                                    padding: '3px 10px', borderRadius: 'var(--radius-full)',
                                    background: 'var(--color-primary-50)', color: 'var(--color-primary-dark)',
                                }}>{item.highlight}</div>
                                <div style={{
                                    width: 48, height: 48, borderRadius: 'var(--radius-lg)',
                                    background: 'var(--color-primary-50)', color: 'var(--color-primary)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)'
                                }}>
                                    {item.icon}
                                </div>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: 11, padding: '2px 10px', borderRadius: 'var(--radius-full)',
                                    background: 'var(--color-gray-100)', color: 'var(--text-secondary)',
                                    fontWeight: 600, marginBottom: 'var(--space-3)',
                                }}>{item.badge}</div>
                                <h4 style={{ marginBottom: 'var(--space-2)' }}>{item.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────── */}
            <section className="section">
                <div className="container container--narrow">
                    <div className="section-header">
                        <h2>Common questions.</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--color-gray-100)' }}>
                        {faqs.map((faq) => (
                            <details key={faq.q} style={{ borderBottom: '1px solid var(--color-gray-100)', padding: 'var(--space-5) 0' }}>
                                <summary style={{
                                    cursor: 'pointer', fontWeight: 600, fontSize: 'var(--text-lg)',
                                    color: 'var(--text-primary)', listStyle: 'none', display: 'flex',
                                    justifyContent: 'space-between', alignItems: 'center',
                                }}>
                                    {faq.q}
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </summary>
                                <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-base)', paddingRight: 'var(--space-8)' }}>
                                    {faq.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────── */}
            <section style={{
                background: 'var(--gradient-warm)',
                padding: 'var(--space-20) 0',
                textAlign: 'center',
            }}>
                <div className="container">
                    <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: 'var(--space-4)' }}>
                        Ready to try a smarter way?
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'var(--text-lg)', maxWidth: 480, margin: '0 auto var(--space-8)' }}>
                        It takes about 20 minutes to get started. Free, forever.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="https://app.usebraintrust.com" className="btn btn--white btn--lg" id="hiw-bottom-cta">
                            Start Your Profile
                        </Link>
                        <Link href="/talent-certification" className="btn btn--lg" id="hiw-cert-cta"
                            style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1.5px solid rgba(255,255,255,0.3)' }}>
                            Learn About Certification
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
