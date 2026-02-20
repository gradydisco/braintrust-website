'use client';

import Link from 'next/link';
import CTASection from '@/components/CTASection';
import styles from './page.module.css';

const clientLogos = [
    'Pacific Life', 'Porsche', 'Wayfair', 'Honda', 'Colgate',
    'Pepsi', 'Dayforce', 'Celsius', 'Guardian Life', 'Stanley',
    'Whole Foods', 'Reddit', 'TaskRabbit',
];

const jobListings = [
    // Engineering
    { title: 'Senior Full Stack Engineer', category: 'Engineering', rate: '$120–$180/hr', tag: 'hot' },
    { title: 'AI Infrastructure Engineer', category: 'Engineering', rate: '$150–$220/hr', tag: 'hot' },
    { title: 'ML Researcher', category: 'Engineering', rate: '$140–$200/hr' },
    { title: 'Backend Engineer', category: 'Engineering', rate: '$110–$170/hr' },
    { title: 'iOS/Android Developer', category: 'Engineering', rate: '$100–$160/hr' },
    { title: 'Data Engineer', category: 'Engineering', rate: '$115–$175/hr' },
    // Design
    { title: 'Product Designer', category: 'Design', rate: '$90–$140/hr' },
    { title: 'UX Researcher', category: 'Design', rate: '$85–$130/hr' },
    { title: 'Brand Designer', category: 'Design', rate: '$80–$125/hr' },
    // Marketing
    { title: 'Growth Lead', category: 'Marketing', rate: '$80–$150/hr' },
    { title: 'Performance Marketer', category: 'Marketing', rate: '$75–$130/hr' },
    { title: 'Content Strategist', category: 'Marketing', rate: '$70–$120/hr' },
    // AI Training
    { title: 'Healthcare SME', category: 'AI Training', rate: '$80–$160/hr' },
    { title: 'Electrical Engineer', category: 'AI Training', rate: '$90–$170/hr' },
    { title: 'STEM PhD Reviewer', category: 'AI Training', rate: '$100–$200/hr', tag: 'hot' },
    { title: 'Code Evaluator', category: 'AI Training', rate: '$75–$150/hr' },
];

const stats = [
    { value: '$0', label: 'Talent Fees' },
    { value: '2M+', label: 'Network Members' },
    { value: '12K+', label: 'Active Jobs' },
    { value: '2018', label: 'Founded' },
];

const benefits = [
    {
        title: 'Zero Platform Fees',
        description: 'Keep 100% of your earnings. We never charge talent — no fees, no markups, no hidden costs. Ever.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 6v12M8 10l4-4 4 4M8 14l4 4 4-4" />
            </svg>
        ),
    },
    {
        title: 'Elite Companies Only',
        description: 'Work directly with Fortune 1000 companies, leading startups, and global enterprises. No middlemen.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
        ),
    },
    {
        title: 'AI-Powered Matching',
        description: 'Our AI finds opportunities that match your exact skills, experience, and rate preferences — and notifies you instantly.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><path d="M11 8v6M8 11h6" />
            </svg>
        ),
    },
    {
        title: 'Global Opportunities',
        description: 'Access roles from companies worldwide. Remote, hybrid, and on-site — across every industry and time zone.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
    },
    {
        title: 'We Eliminate the Middleman',
        description: 'No staffing agencies. No recruiters taking a cut. You work directly with hiring managers and negotiate your own terms.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: 'Built for Talent',
        description: 'We built this platform for you — the professional. Clean onboarding, empowering tools, and full control over your career.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
];

const howItWorks = [
    {
        step: '01',
        title: 'Create your profile',
        description: 'Sign up and showcase your skills, experience, and preferred rates. Our AI starts matching you with opportunities immediately.',
    },
    {
        step: '02',
        title: 'Get matched with elite roles',
        description: 'Our AI surfaces opportunities that fit your exact profile — from Fortune 1000 companies and high-growth startups worldwide.',
    },
    {
        step: '03',
        title: 'Interview directly — no middlemen',
        description: 'Interview directly with hiring managers or our AI recruiter. No staffing agencies, no recruiters taking a cut. You negotiate your own terms and onboard seamlessly.',
    },
    {
        step: '04',
        title: 'Get paid — keep 100%',
        description: 'Earn top rates with zero platform fees. Get paid on time, every time. Your skills, your earnings.',
    },
];

export default function ForTalent() {
    return (
        <>
            {/* Hero — Jobs First */}
            <section className={`hero hero--centered ${styles.hero}`}>
                <div className="container">
                    <div className="hero__content">
                        <div className="badge badge--accent">For Talent</div>
                        <h1>High-paying jobs.<br /><span className="text-gradient">Elite companies.</span></h1>
                        <p>Join 2M+ professionals earning top rates at the world&apos;s best companies — with zero platform fees. Find your next role today.</p>
                        <div className="hero__actions">
                            <Link href="/jobs" className="btn btn--primary btn--lg" id="talent-hero-jobs">Browse 12,000+ Jobs</Link>
                            <Link href="/how-it-works" className="btn btn--secondary btn--lg" id="talent-hero-how">How It Works</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Strip */}
            <section className={`section ${styles.statsSection}`}>
                <div className="container">
                    <div className="stats-grid">
                        {stats.map(s => (
                            <div key={s.label}>
                                <div className="stat__value text-gradient">{s.value}</div>
                                <div className="stat__label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trusted By — Logo Marquee */}
            <section className={styles.logoSection}>
                <div className="container">
                    <p className={styles.logoSectionLabel}>Trusted by world-class companies</p>
                </div>
                <div className={styles.logoMarquee}>
                    <div className={styles.logoTrack}>
                        {[...clientLogos, ...clientLogos].map((name, i) => (
                            <div key={`${name}-${i}`} className={styles.logoItem}>
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Showcase */}
            <section className="section" id="jobs-showcase">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Featured Opportunities</div>
                        <h2>Jobs that pay what you&apos;re worth</h2>
                        <p>High-paying roles from elite companies — across engineering, design, marketing, and AI training.</p>
                    </div>
                    <div className={styles.jobGrid}>
                        {jobListings.map((job) => (
                            <Link href="/jobs" key={job.title} className={styles.jobCard}>
                                <div className={styles.jobHeader}>
                                    <span className={styles.jobCategory}>{job.category}</span>
                                    {job.tag === 'hot' && <span className={styles.jobTag}>In Demand</span>}
                                </div>
                                <h4 className={styles.jobTitle}>{job.title}</h4>
                                <div className={styles.jobRate}>{job.rate}</div>
                                <div className={styles.jobApply}>
                                    Apply Now →
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
                        <Link href="/jobs" className="btn btn--primary btn--lg" id="talent-explore-all">
                            Explore All 12,000+ Jobs →
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section section--gray">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">How It Works</div>
                        <h2>From sign-up to paycheck — in 4 steps</h2>
                        <p>No recruiters. No middlemen. You own every step.</p>
                    </div>
                    <div className="grid grid--2" style={{ maxWidth: '880px', margin: '0 auto', gap: 'var(--space-6)' }}>
                        {howItWorks.map((step) => (
                            <div key={step.step} className="card card--feature">
                                <div style={{ fontWeight: 800, fontSize: 'var(--text-2xl)', color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }}>{step.step}</div>
                                <h4 style={{ marginBottom: 'var(--space-2)' }}>{step.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Props — Why Braintrust */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Why Braintrust</div>
                        <h2>Built for talent.</h2>
                        <p>We eliminated the middlemen so you get paid what you&apos;re worth — founded in 2018, with 2M+ members and zero fees.</p>
                    </div>
                    <div className="grid grid--3">
                        {benefits.map((b) => (
                            <div key={b.title} className="card">
                                <div style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 'var(--radius-lg)', background: 'var(--color-primary-50)' }}>{b.icon}</div>
                                <h5>{b.title}</h5>
                                <p style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--space-2)' }}>{b.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to find your next high-paying role?"
                description="Browse thousands of jobs from elite companies — with zero fees to you. Join 2M+ professionals on Braintrust."
                primaryLabel="Browse Jobs"
                primaryHref="/jobs"
                secondaryLabel="Join the Network"
                secondaryHref="/how-it-works"
            />
        </>
    );
}
