'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TryAIRForm from '@/components/TryAIRForm';

/* ============================================
   G2 REVIEWS — enterprise-grade social proof
   ============================================ */
const g2Reviews = [
    { name: 'Sarah M.', role: 'VP of Talent Acquisition', company: 'Enterprise SaaS', rating: 5, title: 'Completely transformed our hiring pipeline', review: 'AIR cut our screening time by 85%. We went from 3 weeks to 2 days for initial candidate assessments. The conversational interviews feel natural and candidates actually prefer them over phone screens.', date: 'Feb 2026', verified: true },
    { name: 'James K.', role: 'Head of Recruiting', company: 'Fortune 500 Financial Services', rating: 5, title: 'Best AI recruiting tool on the market', review: 'We evaluated 6 AI interviewing platforms. AIR was the only one that could handle our volume (2,000+ interviews/month) without quality degradation. The scoring consistency is remarkable.', date: 'Feb 2026', verified: true },
    { name: 'Priya R.', role: 'Director of People Operations', company: 'Series C Startup', rating: 5, title: 'Replaced 4 tools with one', review: 'We were paying for resume screening, skills assessments, phone screening, and scheduling tools separately. AIR replaced all of them. ROI was positive in the first month.', date: 'Jan 2026', verified: true },
    { name: 'Marcus T.', role: 'CHRO', company: 'Healthcare System', rating: 5, title: 'Critical for high-volume healthcare hiring', review: 'Hiring 500+ nurses per quarter was a nightmare. AIR screens candidates 24/7, conducts initial interviews in 16 languages, and our time-to-fill dropped from 45 to 12 days. Game changer.', date: 'Jan 2026', verified: true },
    { name: 'Emily C.', role: 'Talent Operations Manager', company: 'Global Consulting Firm', rating: 4, title: 'Incredible candidate experience scores', review: 'Our candidate NPS went from 32 to 78 after implementing AIR. Candidates love the flexibility of interviewing on their own schedule. The AI adapts to each person naturally.', date: 'Jan 2026', verified: true },
    { name: 'David L.', role: 'VP Engineering', company: 'AI/ML Startup', rating: 5, title: 'Finally, technical screening that works', review: 'AIR\'s technical interview capability is phenomenal. It asks follow-up questions, probes deeper on architecture decisions, and generates genuinely useful evaluation reports. Our engineering managers save 15+ hours per week.', date: 'Jan 2026', verified: true },
    { name: 'Rachel W.', role: 'Head of TA', company: 'E-commerce Platform', rating: 5, title: 'Scaled holiday hiring without adding recruiters', review: 'Last holiday season we needed to hire 1,200 warehouse and CS roles in 6 weeks. AIR handled all initial screening and interviews. We did it with the same team size as the previous year when we hired 400.', date: 'Dec 2025', verified: true },
    { name: 'Alex P.', role: 'Recruiting Director', company: 'Big 4 Consulting', rating: 5, title: 'Enterprise-ready from day one', review: 'SOC 2 compliant, SSO integration, custom scoring rubrics, ATS integrations — AIR checked every box our procurement team threw at it. Implementation took 2 weeks, not months.', date: 'Dec 2025', verified: true },
    { name: 'Jennifer H.', role: 'COO', company: 'Staffing Agency', rating: 5, title: 'Gave us a massive competitive advantage', review: 'Our clients now get pre-screened, AI-interviewed candidates within 24 hours of posting a role. No other staffing agency in our space can match that speed. AIR is our secret weapon.', date: 'Dec 2025', verified: true },
    { name: 'Michael B.', role: 'Head of Global Talent', company: 'Multinational Manufacturing', rating: 4, title: 'Multi-language support is a standout', review: 'Hiring across 14 countries used to require local recruiting teams in each region for initial screening. AIR conducts interviews in the candidate\'s preferred language. We consolidated 6 regional screening teams.', date: 'Nov 2025', verified: true },
    { name: 'Sophia N.', role: 'VP People & Culture', company: 'FinTech Unicorn', rating: 5, title: 'Reduced bias, improved diversity outcomes', review: 'AIR\'s skills-based evaluation removed unconscious bias from our screening process. Our diversity hiring improved 34% in the first quarter. The transparent scoring rationale gives us confidence in every decision.', date: 'Nov 2025', verified: true },
    { name: 'Tom F.', role: 'CTO', company: 'Series B SaaS', rating: 5, title: 'Worth every penny — and then some', review: 'I was skeptical about AI interviews. Then I saw the data: 3x more candidates screened, 40% higher quality-of-hire scores, and our recruiters actually enjoy their jobs again because they focus on closing, not screening.', date: 'Nov 2025', verified: true },
    { name: 'Lisa Q.', role: 'Talent Acquisition Lead', company: 'Retail Chain', rating: 5, title: 'Candidates rave about the experience', review: 'We had candidates telling us the AIR interview was the best interview experience they\'ve ever had. That\'s never happened with a phone screen. The conversational approach puts people at ease.', date: 'Oct 2025', verified: true },
    { name: 'Chris D.', role: 'HR Director', company: 'Government Contractor', rating: 5, title: 'Compliance-friendly and thorough', review: 'In our regulated industry, every hiring decision needs documentation. AIR generates detailed interview transcripts, scoring rationale, and compliance-ready reports automatically. Our legal team loves it.', date: 'Oct 2025', verified: true },
    { name: 'Amanda S.', role: 'SVP Talent Strategy', company: 'Global Bank', rating: 5, title: 'This is the future of recruiting', review: 'We piloted AIR with 500 interviews and the results were so compelling the CEO mandated company-wide rollout. Quality of hire up 28%, cost per hire down 60%, time to fill down 70%. The numbers speak for themselves.', date: 'Oct 2025', verified: true },
    { name: 'Kevin Z.', role: 'Recruiting Manager', company: 'Cloud Infrastructure', rating: 4, title: 'Integration with Greenhouse was seamless', review: 'Our ATS integration was done in a day. Candidates apply, AIR interviews them, scores flow back into Greenhouse automatically. Our recruiters only see pre-qualified candidates now. Huge productivity gain.', date: 'Sep 2025', verified: true },
    { name: 'Diana R.', role: 'Head of Hiring', company: 'EdTech Platform', rating: 5, title: 'Handles volume we never could manually', review: 'We get 3,000+ applications per role. Before AIR, we could only review 200. Now every single applicant gets a fair interview. Our quality of hire has never been higher and no one slips through the cracks.', date: 'Sep 2025', verified: true },
    { name: 'Ryan O.', role: 'VP Operations', company: 'Logistics Company', rating: 5, title: '24/7 interviewing changed everything', review: 'Candidates interview at 2am, on weekends, whenever works for them. Our completion rate went from 45% to 92% because there\'s no scheduling friction. AIR is always available and always consistent.', date: 'Sep 2025', verified: true },
];

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

export default function TryAIR() {
    const router = useRouter();
    const [, setSubmitted] = useState(false);

    const handleSuccess = () => {
        setSubmitted(true);
        router.push('/products/air/demos');
    };

    return (
        <>
            <section className="hero hero--centered" style={{ minHeight: 'auto', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-8)' }}>
                <div className="container container--narrow">
                    <div className="hero__content">
                        <div className="badge" style={{ marginBottom: 'var(--space-4)' }}>Try It Free</div>
                        <h1 style={{ fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-5xl))' }}>
                            Experience AI interviews<br />
                            <span className="text-gradient">firsthand.</span>
                        </h1>
                        <p style={{ maxWidth: '540px', margin: '0 auto' }}>
                            See how AIR conducts real-time conversational interviews. Access live demo sessions across multiple roles and industries.
                        </p>
                    </div>

                    {/* G2 Rating Badge — above form */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'var(--space-3)',
                        marginTop: 'var(--space-8)',
                        marginBottom: 'var(--space-2)',
                    }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: '#FF492C',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}>
                            <span style={{ color: 'white', fontWeight: 800, fontSize: '14px' }}>G2</span>
                        </div>
                        <StarRating rating={4.5} size={18} />
                        <span style={{ fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>4.5/5</span>
                        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>(217 reviews)</span>
                    </div>

                    <div style={{ marginTop: 'var(--space-4)' }}>
                        <TryAIRForm onSuccess={handleSuccess} />
                    </div>

                    {/* Trusted By Strip */}
                    <div style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
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

            {/* ====== MASSIVE REVIEW WALL — FOMO ENGINE ====== */}
            <section className="section" style={{ background: 'linear-gradient(180deg, var(--color-gray-25) 0%, var(--color-white) 100%)' }}>
                <div className="container">
                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                            <div style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                background: '#FF492C',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
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
                        <h2 style={{ marginBottom: 'var(--space-2)' }}>See what hiring leaders are saying</h2>
                        <p style={{ maxWidth: '560px', margin: '0 auto' }}>
                            AIR is rated #1 for AI Recruiting on G2. Don&apos;t take our word for it — read what real customers have to say.
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

                    {/* Review Grid — masonry-like staggered layout */}
                    <div style={{
                        columns: '3 340px',
                        columnGap: 'var(--space-5)',
                    }}>
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
                                    transition: 'box-shadow 250ms, transform 250ms',
                                }}
                                className="card"
                            >
                                {/* Header */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                                    <StarRating rating={review.rating} />
                                    {review.verified && (
                                        <span style={{
                                            fontSize: '10px',
                                            fontWeight: 600,
                                            color: 'var(--color-teal)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                        }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-teal)">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                            </svg>
                                            Verified
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                                    &ldquo;{review.title}&rdquo;
                                </h4>

                                {/* Review Text */}
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-4)' }}>
                                    {review.review}
                                </p>

                                {/* Author */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-gray-100)' }}>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: `hsl(${(i * 47) % 360}, 45%, 65%)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontWeight: 700,
                                        fontSize: '12px',
                                        flexShrink: 0,
                                    }}>
                                        {review.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{review.name}</div>
                                        <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>{review.role} · {review.company}</div>
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
                            Try AIR for Free →
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
