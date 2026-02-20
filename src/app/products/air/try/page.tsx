'use client';
import { useState, FormEvent } from 'react';

/* ============================================
   INTERVIEW ROLES — Live AIR sessions
   ============================================ */
const interviewRoles = [
    { title: 'Executive Assistant', icon: '📋', url: 'https://air.usebraintrust.com/i/44/86', duration: '5–8 min' },
    { title: 'Recruiter', icon: '🤝', url: 'https://air.usebraintrust.com/i/44/85', duration: '5–8 min' },
    { title: 'Accountant', icon: '📊', url: 'https://air.usebraintrust.com/i/44/90', duration: '5–8 min' },
    { title: 'Front-End Developer', icon: '💻', url: 'https://air.usebraintrust.com/i/44/87', duration: '5–8 min' },
    { title: 'IT Project Manager', icon: '🗂️', url: 'https://air.usebraintrust.com/i/44/83', duration: '5–8 min' },
    { title: 'Product Designer', icon: '🎨', url: 'https://air.usebraintrust.com/i/44/81', duration: '5–8 min' },
    { title: 'Sales Rep (SaaS)', icon: '📈', url: 'https://air.usebraintrust.com/i/44/88', duration: '5–8 min' },
    { title: 'Call Center Rep', icon: '📞', url: 'https://air.usebraintrust.com/i/44/89', duration: '5–8 min' },
    { title: 'Retail Associate', icon: '🛍️', url: 'https://air.usebraintrust.com/i/44/84', duration: '5–8 min' },
];

/* ============================================
   G2 REVIEWS — candidates + hiring teams
   ============================================ */
const g2Reviews = [
    { name: 'Jordan T.', role: 'Senior Software Engineer', company: 'Candidate', rating: 5, title: 'Best interview experience I\'ve ever had', review: 'I was nervous about an AI interview, but it felt completely natural — like talking to a thoughtful colleague. It asked great follow-up questions and I could do it at 9pm after my kids went to bed. Got the job within a week.', date: 'Feb 2026', verified: true, isCandidate: true },
    { name: 'Sarah M.', role: 'VP of Talent Acquisition', company: 'Enterprise SaaS', rating: 5, title: 'Completely transformed our hiring pipeline', review: 'AIR cut our screening time by 85%. We went from 3 weeks to 2 days for initial candidate assessments. The conversational interviews feel natural and candidates actually prefer them over phone screens.', date: 'Feb 2026', verified: true, isCandidate: false },
    { name: 'Aisha K.', role: 'Product Manager', company: 'Candidate', rating: 5, title: 'No scheduling headaches, no awkward silences', review: 'I\'ve done 50+ interviews in my career and AIR was honestly the most comfortable. No recruiter checking their phone, no rushed 15-minute screen. It actually listened to my answers and went deeper. I felt heard.', date: 'Feb 2026', verified: true, isCandidate: true },
    { name: 'James K.', role: 'Head of Recruiting', company: 'Fortune 500 Financial Services', rating: 5, title: 'Best AI recruiting tool on the market', review: 'We evaluated 6 AI interviewing platforms. AIR was the only one that could handle our volume (2,000+ interviews/month) without quality degradation. The scoring consistency is remarkable.', date: 'Feb 2026', verified: true, isCandidate: false },
    { name: 'Carlos M.', role: 'Data Scientist', company: 'Candidate', rating: 5, title: 'Finally, an interview that values my time', review: 'Completed my technical screen at midnight on a Sunday — on my own terms. The AI asked genuinely challenging questions about my ML projects. When I got the offer, the hiring manager said my AIR interview was the strongest they\'d seen.', date: 'Jan 2026', verified: true, isCandidate: true },
    { name: 'Priya R.', role: 'Director of People Operations', company: 'Series C Startup', rating: 5, title: 'Replaced 4 tools with one', review: 'We were paying for resume screening, skills assessments, phone screening, and scheduling tools separately. AIR replaced all of them. ROI was positive in the first month.', date: 'Jan 2026', verified: true, isCandidate: false },
    { name: 'Maya L.', role: 'UX Designer', company: 'Candidate', rating: 5, title: 'I actually enjoyed this interview??', review: 'I know that sounds crazy but I genuinely enjoyed it. The conversation flowed naturally, it asked about my portfolio in a way that let me showcase my process, and there was zero bias. I could be myself. Wish every company used this.', date: 'Jan 2026', verified: true, isCandidate: true },
    { name: 'Marcus T.', role: 'CHRO', company: 'Healthcare System', rating: 5, title: 'Critical for high-volume healthcare hiring', review: 'Hiring 500+ nurses per quarter was a nightmare. AIR screens candidates 24/7, conducts initial interviews in 16 languages, and our time-to-fill dropped from 45 to 12 days. Game changer.', date: 'Jan 2026', verified: true, isCandidate: false },
    { name: 'Tomás G.', role: 'Full-Stack Developer', company: 'Candidate', rating: 5, title: 'Did my interview in Spanish — flawless', review: 'I\'m bilingual but way more comfortable in Spanish for technical discussions. AIR seamlessly conducted the entire interview in Spanish, then I switched to English for a few answers. No other platform has ever offered that. Incredible.', date: 'Jan 2026', verified: true, isCandidate: true },
    { name: 'Emily C.', role: 'Talent Operations Manager', company: 'Global Consulting Firm', rating: 4, title: 'Incredible candidate experience scores', review: 'Our candidate NPS went from 32 to 78 after implementing AIR. Candidates love the flexibility of interviewing on their own schedule. The AI adapts to each person naturally.', date: 'Jan 2026', verified: true, isCandidate: false },
    { name: 'Naomi W.', role: 'Registered Nurse', company: 'Candidate', rating: 5, title: 'Interviewed between shifts — got hired in days', review: 'As a nurse working 12-hour shifts, scheduling interviews is impossible. I did my AIR interview at 6am before my shift, in my car. The whole thing took 20 minutes, felt professional, and I had an offer by Friday. Life changing.', date: 'Dec 2025', verified: true, isCandidate: true },
    { name: 'David L.', role: 'VP Engineering', company: 'AI/ML Startup', rating: 5, title: 'Finally, technical screening that works', review: 'AIR\'s technical interview capability is phenomenal. It asks follow-up questions, probes deeper on architecture decisions, and generates genuinely useful evaluation reports. Our engineering managers save 15+ hours per week.', date: 'Jan 2026', verified: true, isCandidate: false },
    { name: 'Wei C.', role: 'Financial Analyst', company: 'Candidate', rating: 5, title: 'Zero judgment, pure skills assessment', review: 'I\'ve experienced bias in traditional interviews. With AIR, I was evaluated purely on my skills and experience. For the first time, I felt the playing field was actually level. My background and accent didn\'t matter — my answers did.', date: 'Dec 2025', verified: true, isCandidate: true },
    { name: 'Rachel W.', role: 'Head of TA', company: 'E-commerce Platform', rating: 5, title: 'Scaled holiday hiring without adding recruiters', review: 'Last holiday season we needed to hire 1,200 warehouse and CS roles in 6 weeks. AIR handled all initial screening and interviews. We did it with the same team size as the previous year when we hired 400.', date: 'Dec 2025', verified: true, isCandidate: false },
    { name: 'Raj P.', role: 'DevOps Engineer', company: 'Candidate', rating: 5, title: 'Retook the interview after a bad day — love that', review: 'Had a terrible first attempt (sick kid, no sleep). AIR let me retake it the next day when I was sharp. In a traditional process, that bad phone screen would have been the end. Instead, I got the job and I\'m thriving.', date: 'Dec 2025', verified: true, isCandidate: true },
    { name: 'Alex P.', role: 'Recruiting Director', company: 'Big 4 Consulting', rating: 5, title: 'Enterprise-ready from day one', review: 'SOC 2 compliant, SSO integration, custom scoring rubrics, ATS integrations — AIR checked every box our procurement team threw at it. Implementation took 2 weeks, not months.', date: 'Dec 2025', verified: true, isCandidate: false },
    { name: 'Sam J.', role: 'Marketing Manager', company: 'Candidate', rating: 5, title: 'Blew me away — better than any human screen', review: 'The AI actually remembered details from earlier in our conversation and referenced them later. It asked me to elaborate on a campaign I mentioned 10 minutes prior. That level of active listening? Most human interviewers don\'t do that.', date: 'Nov 2025', verified: true, isCandidate: true },
    { name: 'Jennifer H.', role: 'COO', company: 'Staffing Agency', rating: 5, title: 'Gave us a massive competitive advantage', review: 'Our clients now get pre-screened, AI-interviewed candidates within 24 hours of posting a role. No other staffing agency in our space can match that speed. AIR is our secret weapon.', date: 'Dec 2025', verified: true, isCandidate: false },
    { name: 'Elena V.', role: 'Project Manager', company: 'Candidate', rating: 4, title: 'Skeptical at first, now I\'m a convert', review: 'I rolled my eyes when I saw "AI interview" in the email. 30 minutes later I was genuinely impressed. It asked about my conflict resolution approach, my stakeholder management style — real, thoughtful questions. Not a chatbot.', date: 'Nov 2025', verified: true, isCandidate: true },
    { name: 'Sophia N.', role: 'VP People & Culture', company: 'FinTech Unicorn', rating: 5, title: 'Reduced bias, improved diversity outcomes', review: 'AIR\'s skills-based evaluation removed unconscious bias from our screening process. Our diversity hiring improved 34% in the first quarter. The transparent scoring rationale gives us confidence in every decision.', date: 'Nov 2025', verified: true, isCandidate: false },
    { name: 'Derek H.', role: 'Sales Executive', company: 'Candidate', rating: 5, title: 'Applied at 3 companies using AIR — chose all 3', review: 'All three companies using AIR for screening gave me offers. Coincidence? No — the AI interview let me actually demonstrate my skills instead of being filtered out by a 30-second resume scan. This levels the playing field.', date: 'Nov 2025', verified: true, isCandidate: true },
    { name: 'Tom F.', role: 'CTO', company: 'Series B SaaS', rating: 5, title: 'Worth every penny — and then some', review: 'I was skeptical about AI interviews. Then I saw the data: 3x more candidates screened, 40% higher quality-of-hire scores, and our recruiters actually enjoy their jobs again because they focus on closing, not screening.', date: 'Nov 2025', verified: true, isCandidate: false },
    { name: 'Kwame A.', role: 'Cloud Architect', company: 'Candidate', rating: 5, title: 'Took the pressure off and let me shine', review: 'Phone screens are the worst — 15 minutes, a distracted recruiter, and you never feel like you got to show what you can really do. AIR gave me 30 minutes of undivided attention. It adapted to my pace. Best screening process ever.', date: 'Oct 2025', verified: true, isCandidate: true },
    { name: 'Amanda S.', role: 'SVP Talent Strategy', company: 'Global Bank', rating: 5, title: 'This is the future of recruiting', review: 'We piloted AIR with 500 interviews and the results were so compelling the CEO mandated company-wide rollout. Quality of hire up 28%, cost per hire down 60%, time to fill down 70%. The numbers speak for themselves.', date: 'Oct 2025', verified: true, isCandidate: false },
    { name: 'Lisa T.', role: 'Customer Success Manager', company: 'Candidate', rating: 5, title: 'My introverted self thrived', review: 'I\'m an introvert who gets anxious in live interviews. AIR let me think before answering without awkward silence pressure. I could pause, collect my thoughts, and give my best answer. For the first time, the interview reflected my actual ability.', date: 'Oct 2025', verified: true, isCandidate: true },
    { name: 'Ryan O.', role: 'VP Operations', company: 'Logistics Company', rating: 5, title: '24/7 interviewing changed everything', review: 'Candidates interview at 2am, on weekends, whenever works for them. Our completion rate went from 45% to 92% because there\'s no scheduling friction. AIR is always available and always consistent.', date: 'Sep 2025', verified: true, isCandidate: false },
    { name: 'Olivia N.', role: 'Graphic Designer', company: 'Candidate', rating: 5, title: 'The future is here and it\'s actually fair', review: 'Every candidate gets the same quality interview, same thoughtful questions, same amount of time. No more depending on whether the recruiter had their coffee yet. AIR is consistent, thorough, and genuinely impressive. 10/10 would recommend.', date: 'Sep 2025', verified: true, isCandidate: true },
];

/* ============================================
   COMPONENTS
   ============================================ */
function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
    return (
        <div style={{ display: 'inline-flex', gap: '2px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width={size} height={size} viewBox="0 0 24 24" fill={star <= rating ? '#FF492C' : '#E0E0E0'}>
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
            ))}
        </div>
    );
}

/* ============================================
   MAIN PAGE
   ============================================ */
export default function TryAIR() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');

        if (!firstName.trim()) { setError('First name is required.'); return; }
        if (!lastName.trim()) { setError('Last name is required.'); return; }
        if (!email || !email.includes('@')) { setError('Please enter a valid email address.'); return; }

        setLoading(true);
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: firstName.trim(),
                    lastName: lastName.trim(),
                    email: email.trim(),
                    type: 'try_air_live_interview',
                }),
            });
            if (!res.ok) throw new Error('Failed to submit');
            setFormSubmitted(true);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const buildInterviewUrl = (baseUrl: string) => {
        const params = new URLSearchParams({
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            email: email.trim(),
        });
        return `${baseUrl}?${params.toString()}`;
    };

    return (
        <>
            {/* ====== HERO + LEAD CAPTURE / ROLE SELECTION ====== */}
            <section className="hero hero--centered" style={{ minHeight: 'auto', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-10)' }}>
                <div className="container container--narrow">
                    <div className="hero__content">
                        <div className="badge" style={{ marginBottom: 'var(--space-4)' }}>Live AI Interviews</div>
                        <h1 style={{ fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-5xl))' }}>
                            Experience AIR<br />
                            <span className="text-gradient">firsthand.</span>
                        </h1>
                        <p style={{ maxWidth: '540px', margin: '0 auto', fontSize: 'var(--text-lg)' }}>
                            {formSubmitted
                                ? 'Choose a role below and start a real AI interview. This is the actual product — not a recording or a demo.'
                                : 'Start a real, live AI interview in under a minute. This is the actual product — not a recording or a static demo.'
                            }
                        </p>
                    </div>

                    {/* G2 Rating Badge */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'var(--space-3)',
                        marginTop: 'var(--space-6)',
                        marginBottom: 'var(--space-2)',
                    }}>
                        <div style={{
                            width: '36px', height: '36px', borderRadius: '50%', background: '#FF492C',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                            <span style={{ color: 'white', fontWeight: 800, fontSize: '14px' }}>G2</span>
                        </div>
                        <StarRating rating={4.5} size={18} />
                        <span style={{ fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>4.5/5</span>
                        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>(217 reviews)</span>
                    </div>

                    {/* ====== LEAD CAPTURE FORM ====== */}
                    {!formSubmitted && (
                        <div style={{
                            maxWidth: '500px',
                            margin: 'var(--space-6) auto 0',
                            padding: 'var(--space-8) var(--space-8) var(--space-6)',
                            borderRadius: 'var(--radius-2xl)',
                            background: 'var(--color-white)',
                            border: '1px solid var(--color-gray-100)',
                            boxShadow: '0 20px 60px rgba(50, 50, 93, 0.12), 0 10px 20px rgba(0, 0, 0, 0.06)',
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
                                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-1)' }}>Start a Live Interview</h3>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0 }}>
                                    Enter your info to begin. It takes less than a minute.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                                    <div>
                                        <label htmlFor="try-air-first" style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                                            First Name
                                        </label>
                                        <input
                                            id="try-air-first"
                                            type="text"
                                            placeholder="Jane"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                            style={{
                                                width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-md)',
                                                border: '1.5px solid var(--color-gray-200)', fontSize: 'var(--text-sm)',
                                                outline: 'none', transition: 'border-color 200ms', background: 'var(--color-gray-50)',
                                            }}
                                            onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                                            onBlur={(e) => (e.target.style.borderColor = 'var(--color-gray-200)')}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="try-air-last" style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                                            Last Name
                                        </label>
                                        <input
                                            id="try-air-last"
                                            type="text"
                                            placeholder="Doe"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                            style={{
                                                width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-md)',
                                                border: '1.5px solid var(--color-gray-200)', fontSize: 'var(--text-sm)',
                                                outline: 'none', transition: 'border-color 200ms', background: 'var(--color-gray-50)',
                                            }}
                                            onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                                            onBlur={(e) => (e.target.style.borderColor = 'var(--color-gray-200)')}
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: 'var(--space-4)' }}>
                                    <label htmlFor="try-air-email" style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                                        Work Email
                                    </label>
                                    <input
                                        id="try-air-email"
                                        type="email"
                                        placeholder="jane@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        style={{
                                            width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-md)',
                                            border: `1.5px solid ${error ? 'var(--color-error)' : 'var(--color-gray-200)'}`,
                                            fontSize: 'var(--text-sm)', outline: 'none', transition: 'border-color 200ms',
                                            background: 'var(--color-gray-50)',
                                        }}
                                        onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                                        onBlur={(e) => (e.target.style.borderColor = error ? 'var(--color-error)' : 'var(--color-gray-200)')}
                                    />
                                </div>

                                {error && (
                                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-error)', marginBottom: 'var(--space-3)' }}>{error}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn btn--primary btn--lg"
                                    style={{ width: '100%', opacity: loading ? 0.7 : 1, pointerEvents: loading ? 'none' : 'auto' }}
                                >
                                    {loading ? 'Loading...' : 'Start My Interview →'}
                                </button>

                                <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', textAlign: 'center', marginTop: 'var(--space-3)', lineHeight: 1.4 }}>
                                    By continuing, you agree to Braintrust&apos;s{' '}
                                    <a href="/terms" style={{ color: 'var(--text-tertiary)', textDecoration: 'underline' }}>Terms</a>{' '}
                                    and{' '}
                                    <a href="/privacy" style={{ color: 'var(--text-tertiary)', textDecoration: 'underline' }}>Privacy Policy</a>.
                                </p>
                            </form>
                        </div>
                    )}

                    {/* ====== ROLE SELECTION (after form submit) ====== */}
                    {formSubmitted && (
                        <div style={{ marginTop: 'var(--space-8)' }}>
                            {/* Confirmation */}
                            <div style={{
                                textAlign: 'center',
                                marginBottom: 'var(--space-6)',
                                padding: 'var(--space-3) var(--space-5)',
                                borderRadius: 'var(--radius-lg)',
                                background: 'rgba(16, 185, 129, 0.08)',
                                border: '1px solid rgba(16, 185, 129, 0.2)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 'var(--space-2)',
                                margin: '0 auto var(--space-6)',
                            }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#059669"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: '#059669' }}>
                                    Welcome, {firstName}. Select a role to start your live interview.
                                </span>
                            </div>

                            {/* Role Cards Grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                                gap: 'var(--space-4)',
                                maxWidth: '800px',
                                margin: '0 auto',
                            }}>
                                {interviewRoles.map((role) => (
                                    <a
                                        key={role.title}
                                        href={buildInterviewUrl(role.url)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card"
                                        style={{
                                            textDecoration: 'none',
                                            padding: 'var(--space-5)',
                                            borderRadius: 'var(--radius-xl)',
                                            background: 'var(--color-white)',
                                            border: '1.5px solid var(--color-gray-100)',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                            transition: 'all 200ms ease',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 'var(--space-3)',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--color-primary)';
                                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(var(--color-primary-rgb, 232,119,34), 0.15)';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--color-gray-100)';
                                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <span style={{ fontSize: '28px' }}>{role.icon}</span>
                                            <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontWeight: 500 }}>{role.duration}</span>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>
                                                {role.title}
                                            </h4>
                                        </div>
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 'var(--space-2)',
                                            fontSize: 'var(--text-sm)',
                                            fontWeight: 700,
                                            color: 'var(--color-primary)',
                                        }}>
                                            Start Live Interview
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </a>
                                ))}
                            </div>

                            {/* Credibility nudge */}
                            <div style={{
                                textAlign: 'center',
                                marginTop: 'var(--space-6)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 'var(--space-2)',
                            }}>
                                <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center' }}>
                                    {[
                                        { icon: '🎙️', text: 'Real conversational voice interview' },
                                        { icon: '⏱️', text: 'Takes only a few minutes' },
                                        { icon: '🔒', text: 'Your data is secure' },
                                    ].map((item) => (
                                        <span key={item.text} style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            fontSize: '12px',
                                            color: 'var(--text-tertiary)',
                                            fontWeight: 500,
                                        }}>
                                            {item.icon} {item.text}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Trusted By Strip */}
                    <div style={{ marginTop: 'var(--space-10)', textAlign: 'center' }}>
                        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-3)' }}>
                            Trusted by recruiting teams at
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'var(--space-6)' }}>
                            {['Nike', 'Goldman Sachs', 'Porsche', 'Atlassian', 'Deloitte'].map(name => (
                                <span key={name} style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-gray-300)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== REVIEW WALL — FOMO ENGINE ====== */}
            <section className="section" style={{ background: 'linear-gradient(180deg, var(--color-gray-25) 0%, var(--color-white) 100%)' }}>
                <div className="container">
                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                            <div style={{
                                width: '44px', height: '44px', borderRadius: '50%', background: '#FF492C',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <span style={{ color: 'white', fontWeight: 800, fontSize: '16px' }}>G2</span>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                                    <StarRating rating={5} size={20} />
                                    <span style={{ fontWeight: 800, fontSize: 'var(--text-xl)', color: 'var(--text-primary)' }}>4.5/5</span>
                                </div>
                                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Based on 217 verified reviews</span>
                            </div>
                        </div>
                        <h2 style={{ marginBottom: 'var(--space-2)' }}>See what candidates &amp; hiring teams are saying</h2>
                        <p style={{ maxWidth: '560px', margin: '0 auto' }}>
                            AIR is rated #1 for AI Recruiting on G2. Don&apos;t take our word for it — hear from both sides of the interview.
                        </p>

                        {/* Quick Stats */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 'var(--space-8)',
                            marginTop: 'var(--space-6)',
                            flexWrap: 'wrap',
                        }}>
                            {[
                                { value: '96%', label: 'Would recommend' },
                                { value: '94%', label: 'Easy to use' },
                                { value: '98%', label: 'Quality of support' },
                                { value: '4.8', label: 'Ease of setup' },
                            ].map((s) => (
                                <div key={s.label} style={{ textAlign: 'center' }}>
                                    <div style={{ fontWeight: 800, fontSize: 'var(--text-2xl)', color: 'var(--color-primary)' }}>{s.value}</div>
                                    <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontWeight: 500 }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Review Grid */}
                    <div style={{ columns: '3 340px', columnGap: 'var(--space-5)' }}>
                        {g2Reviews.map((review, i) => (
                            <div
                                key={i}
                                style={{
                                    breakInside: 'avoid',
                                    marginBottom: 'var(--space-5)',
                                    padding: 'var(--space-6)',
                                    borderRadius: 'var(--radius-xl)',
                                    background: 'var(--color-white)',
                                    border: '1px solid var(--color-gray-100)',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                                }}
                                className="card"
                            >
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-2)' }}>
                                    <span style={{
                                        fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
                                        padding: '3px 8px', borderRadius: '20px',
                                        background: review.isCandidate ? 'rgba(16, 185, 129, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                                        color: review.isCandidate ? '#059669' : '#2563EB',
                                    }}>
                                        {review.isCandidate ? '🎯 Candidate' : '🏢 Hiring Team'}
                                    </span>
                                    {review.verified && (
                                        <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--color-teal)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-teal)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                            Verified
                                        </span>
                                    )}
                                </div>
                                <div style={{ marginBottom: 'var(--space-3)' }}>
                                    <StarRating rating={review.rating} />
                                </div>
                                <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                                    &ldquo;{review.title}&rdquo;
                                </h4>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-4)' }}>
                                    {review.review}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-gray-100)' }}>
                                    <div style={{
                                        width: '32px', height: '32px', borderRadius: '50%',
                                        background: review.isCandidate ? `hsl(${160 + (i * 15) % 40}, 50%, 55%)` : `hsl(${210 + (i * 20) % 60}, 45%, 55%)`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'white', fontWeight: 700, fontSize: '12px', flexShrink: 0,
                                    }}>
                                        {review.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{review.name}</div>
                                        <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>{review.role}{review.isCandidate ? '' : ` · ${review.company}`}</div>
                                    </div>
                                    <span style={{ marginLeft: 'auto', fontSize: '11px', color: 'var(--text-tertiary)' }}>{review.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div style={{
                        textAlign: 'center',
                        marginTop: 'var(--space-12)',
                        padding: 'var(--space-10)',
                        borderRadius: 'var(--radius-2xl)',
                        background: 'linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-white) 100%)',
                        border: '1px solid var(--color-primary-100)',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                            <StarRating rating={5} size={22} />
                            <span style={{ fontWeight: 800, fontSize: 'var(--text-xl)' }}>4.5/5 on G2</span>
                        </div>
                        <h3 style={{ marginBottom: 'var(--space-2)' }}>Join 100+ enterprise teams using AIR</h3>
                        <p style={{ fontSize: 'var(--text-sm)', maxWidth: '440px', margin: '0 auto var(--space-6)' }}>
                            See why hiring leaders rate AIR the #1 AI recruiting platform. Try it free — no credit card required.
                        </p>
                        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn btn--primary btn--lg">
                            Start a Live Interview →
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
