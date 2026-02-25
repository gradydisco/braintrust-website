import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Training Gig Work — Earn on Your Terms | Braintrust',
    description: 'Train AI models in your field of expertise. Flexible, remote AI gig work with competitive pay. No experience required in AI — your domain knowledge is the skill.',
    openGraph: {
        title: 'AI Training Gig Work — Earn on Your Terms',
        description: 'Smart, flexible income for professionals. Train AI in your specialty — on your schedule, from anywhere.',
    },
};

const gigTypes = [
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
        title: 'RLHF Rating',
        desc: 'Rate and rank AI responses based on quality, accuracy, and helpfulness. Your judgment improves the model.',
        pay: '$25–60/hr',
        domains: 'All domains',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>,
        title: 'Data Labeling',
        desc: 'Annotate text, images, code, and data to train machine learning models across industries.',
        pay: '$20–45/hr',
        domains: 'General',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
        title: 'Expert Evaluation',
        desc: 'Assess AI outputs in your field — medical accuracy, legal correctness, technical precision, and more.',
        pay: '$60–150/hr',
        domains: 'Specialist',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
        title: 'Prompt & Content Creation',
        desc: 'Write training prompts, create benchmark questions, and build evaluation datasets in your domain.',
        pay: '$35–80/hr',
        domains: 'All domains',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        title: 'Red Teaming',
        desc: 'Test AI models for weaknesses, biases, and safety issues. Find edge cases the machines miss.',
        pay: '$50–120/hr',
        domains: 'Technical + expert',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
        title: 'Code Review & Generation',
        desc: 'Review and rate AI-generated code, debug outputs, and create coding test cases for model training.',
        pay: '$75–200/hr',
        domains: 'Software',
    },
];

const specialties = [
    { label: 'Healthcare & Medicine', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> },
    { label: 'Legal', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3" /><line x1="12" y1="22" x2="12" y2="8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /></svg> },
    { label: 'Software Engineering', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> },
    { label: 'Data Science & ML', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
    { label: 'Finance', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
    { label: 'Education', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg> },
    { label: 'Creative Writing', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg> },
    { label: 'Science & Research', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31" /><path d="M14 9.3V1.99" /><path d="M8.5 2h7" /><path d="M14 9.3v0A5 5 0 0 1 16.99 15c0 3.32-2.67 6-6 6h-2c-3.33 0-6-2.68-6-6v0a5 5 0 0 1 2.99-5.7v0" /></svg> },
    { label: 'Marketing & Copywriting', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 19 2 12 11 5 11 19" /><path d="M22 12h-4" /></svg> },
    { label: 'Product Management', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg> },
    { label: 'Design & UX', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg> },
    { label: 'Operations & Strategy', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> },
];

const whyItWorks = [
    {
        title: 'Work when you want',
        desc: 'Log in and pick up tasks anytime. No minimum hours. No schedule requirements. Purely on your terms.',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    },
    {
        title: 'Your expertise is the product',
        desc: 'We don\'t need you to know AI — we need you to know your field. Your domain knowledge is exactly what makes AI better.',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>,
    },
    {
        title: 'Transparent, competitive pay',
        desc: 'See what tasks pay before you start. No ambiguity, no lowball rates. Specialists earn premium rates.',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
    },
    {
        title: 'Streamlined workflow',
        desc: 'Tasks are clearly described and easy to complete. Feedback is fast. Payments are reliable and on time.',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    },
];

export default function AITraining() {
    return (
        <>
            {/* ── HERO ────────────────────────────────────────── */}
            <section style={{
                position: 'relative',
                padding: 'calc(var(--header-height) + var(--space-20)) 0 var(--space-20)',
                background: 'linear-gradient(175deg, #fff 0%, #F0FFF8 60%, #fff 100%)',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    background: 'radial-gradient(ellipse 60% 50% at 70% 30%, rgba(0,212,170,0.12), transparent)',
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
                        <h1 style={{ marginBottom: 'var(--space-5)' }}>
                            Your expertise.<br />
                            <span style={{
                                background: 'linear-gradient(135deg, #00D4AA, #00B894)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>AI&apos;s improvement.</span>
                        </h1>

                        <p style={{ fontSize: 'var(--text-xl)', maxWidth: 600, margin: '0 auto var(--space-8)', lineHeight: 1.65 }}>
                            Earn on your own schedule by training AI models — in your specific discipline.
                            No AI background required. Your domain knowledge is the skill these companies desperately need.
                        </p>

                        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-10)' }}>
                            <Link href="https://app.usebraintrust.com" id="aitraining-hero-start" className="btn btn--lg"
                                style={{ background: 'linear-gradient(135deg, #00D4AA, #00B894)', color: 'white', boxShadow: '0 4px 20px rgba(0,212,170,0.35)', fontSize: '1.05rem', padding: '16px 36px' }}>
                                Start Earning
                            </Link>
                            <Link href="#how-it-works" id="aitraining-hero-learn" className="btn btn--secondary btn--lg">
                                See How It Works
                            </Link>
                        </div>

                        {/* Stat pills */}
                        <div style={{ display: 'flex', gap: 'var(--space-8)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {[
                                { val: '$20–200/hr', label: 'Pay range' },
                                { val: '100%', label: 'Yours to keep' },
                                { val: 'Anytime', label: 'Work schedule' },
                                { val: 'All fields', label: 'Specialties' },
                            ].map(s => (
                                <div key={s.label} style={{ textAlign: 'center' }}>
                                    <div style={{ fontWeight: 800, fontSize: 'var(--text-xl)', color: 'var(--color-teal-dark)' }}>{s.val}</div>
                                    <div style={{ fontSize: 12, color: 'var(--text-tertiary)', fontWeight: 500 }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
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
                        src="/images/talent_tech_pro_1772039971431.png"
                        alt="Tech professional working"
                        style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                    />
                </div>
            </section>

            {/* ── EMPATHY / REFRAME ──────────────────────────── */}
            <section style={{ background: 'var(--color-gray-950)', padding: 'var(--space-16) 0' }}>
                <div className="container">
                    <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ color: 'white', fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', marginBottom: 'var(--space-5)' }}>
                            "I don&apos;t know anything about AI." <br />
                            <span style={{ color: 'var(--color-teal)', fontStyle: 'italic' }}>That&apos;s exactly why we need you.</span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'var(--text-lg)', lineHeight: 1.7 }}>
                            AI companies need real-world expertise in medicine, law, finance, education, engineering, and dozens of other fields — to make their models accurate, safe, and actually useful.
                            You bring that expertise. We connect it to the companies building tomorrow&apos;s AI.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── GIG TYPES ──────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge badge--teal">Task Types</div>
                        <h2>What you&apos;ll actually do.</h2>
                        <p>A range of tasks mapped to your skills and expertise. Each one clearly described with transparent pay before you start.</p>
                    </div>

                    <div className="grid grid--3">
                        {gigTypes.map((gig) => (
                            <div key={gig.title} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                                <div style={{
                                    width: 44, height: 44, borderRadius: 'var(--radius-lg)',
                                    background: 'var(--color-primary-50)', color: 'var(--color-primary)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)'
                                }}>
                                    {gig.icon}
                                </div>
                                <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-3)', flexWrap: 'wrap' }}>
                                    <span style={{
                                        fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 'var(--radius-full)',
                                        background: 'rgba(0,212,170,0.1)', color: 'var(--color-teal-dark)',
                                    }}>{gig.pay}</span>
                                    <span style={{
                                        fontSize: 11, fontWeight: 600, padding: '2px 10px', borderRadius: 'var(--radius-full)',
                                        background: 'var(--color-gray-100)', color: 'var(--text-secondary)',
                                    }}>{gig.domains}</span>
                                </div>
                                <h4 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--text-xl)' }}>{gig.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>{gig.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SPECIALTIES ────────────────────────────────── */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Your Field</div>
                        <h2>If you&apos;re an expert in it,<br /><span className="text-gradient">we can use it.</span></h2>
                        <p>We work with specialists across virtually every professional discipline.</p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: 'var(--space-4)',
                        maxWidth: 900, margin: '0 auto',
                    }}>
                        <style>{`
                            .ait-specialty-card {
                                background: var(--color-white);
                                border: 1px solid var(--color-gray-100);
                                border-radius: var(--radius-lg);
                                padding: var(--space-4) var(--space-5);
                                display: flex;
                                align-items: center;
                                gap: var(--space-3);
                                font-size: var(--text-sm);
                                font-weight: 600;
                                color: var(--text-primary);
                                transition: all var(--transition-base);
                                cursor: default;
                                min-height: 64px;
                            }
                            .ait-specialty-card:hover {
                                border-color: var(--color-teal);
                                box-shadow: 0 4px 16px rgba(0,212,170,0.12);
                                transform: translateY(-2px);
                            }
                        `}</style>
                        {specialties.map(s => (
                            <div key={s.label} className="ait-specialty-card">
                                <span style={{ display: 'flex', alignItems: 'center', color: 'var(--color-teal-dark)' }}>{s.icon}</span> {s.label}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY IT WORKS ───────────────────────────────── */}
            <section className="section" id="how-it-works">
                <div className="container">
                    <div className="section-header">
                        <div className="badge badge--gold">Why It Works</div>
                        <h2>Smart work. Real income.<br /><span className="text-gradient">Your schedule.</span></h2>
                    </div>

                    <div className="grid grid--2" style={{ maxWidth: 900, margin: '0 auto' }}>
                        {whyItWorks.map((item) => (
                            <div key={item.title} className="card" style={{ padding: 'var(--space-8)', display: 'flex', gap: 'var(--space-5)' }}>
                                <div style={{
                                    width: 56, height: 56, flexShrink: 0,
                                    borderRadius: 'var(--radius-lg)',
                                    background: 'rgba(0,212,170,0.08)', color: 'var(--color-teal-dark)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>{item.icon}</div>
                                <div>
                                    <h4 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--text-xl)' }}>{item.title}</h4>
                                    <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW TO START ───────────────────────────────── */}
            <section className="section" style={{ background: 'linear-gradient(135deg, #F0FFF8 0%, #fff 100%)' }}>
                <div className="container container--narrow">
                    <div className="section-header">
                        <h2>Get started in 3 steps.</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                        {[
                            {
                                num: '1', title: 'Create or complete your Braintrust profile',
                                desc: 'If you\'re already a member, just ensure your profile includes your specialization. If new, sign up in about 20 minutes.',
                                color: 'var(--color-info)',
                            },
                            {
                                num: '2', title: 'Complete the AI skills interview',
                                desc: 'Our AI evaluates your expertise and matches you to appropriate tasks. This ensures you get tasks at the right level — and pay grade.',
                                color: 'var(--color-info)',
                            },
                            {
                                num: '3', title: 'Browse and accept gig tasks',
                                desc: 'Log into your Braintrust dashboard, browse available tasks in your field, see the pay, and start working. Payments are processed weekly.',
                                color: 'var(--color-info)',
                            },
                        ].map((s) => (
                            <div key={s.num} style={{
                                display: 'grid', gridTemplateColumns: '64px 1fr', gap: 'var(--space-5)', alignItems: 'flex-start',
                            }}>
                                <div style={{
                                    width: 64, height: 64, borderRadius: '50%',
                                    background: `${s.color}18`, color: s.color,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 'var(--text-2xl)', fontWeight: 800, border: `2px solid ${s.color}30`,
                                }}>{s.num}</div>
                                <div className="card" style={{ marginTop: 'var(--space-2)' }}>
                                    <h4 style={{ marginBottom: 'var(--space-2)', borderLeft: `3px solid ${s.color}`, paddingLeft: 'var(--space-3)' }}>{s.title}</h4>
                                    <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ────────────────────────────────────────── */}
            <section style={{
                background: 'linear-gradient(135deg, #00B894 0%, #00D4AA 100%)',
                padding: 'var(--space-20) 0', textAlign: 'center',
            }}>
                <div className="container">
                    <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: 'var(--space-4)' }}>
                        Start earning on your terms.
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'var(--text-lg)', maxWidth: 460, margin: '0 auto var(--space-8)' }}>
                        Flexible. Remote. In your specialty. No experience in AI required.
                    </p>
                    <Link href="https://app.usebraintrust.com" className="btn btn--white btn--lg" id="aitraining-bottom-cta"
                        style={{ color: 'var(--color-teal-dark)', fontSize: '1.05rem' }}>
                        Get Started — It&apos;s Free
                    </Link>
                </div>
            </section>
        </>
    );
}
