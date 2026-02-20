'use client';

import { useState, FormEvent } from 'react';

// ============================================================
// AIR ROI CALCULATOR — Advanced Model
// All calculation logic is hidden from the user
// ============================================================

export default function SavingsCalculator() {
    // Primary inputs
    const [inputs, setInputs] = useState({
        hiresPerYear: 50,
        applicantsPerRole: 200,
        interviewsPerHire: 5,
        interviewDuration: 30,
        recruiterCost: 80000,
    });

    // Advanced inputs (hidden by default)
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [advanced, setAdvanced] = useState({
        noShowRate: 15,
        resumeReviewTime: 4,
        schedulingTime: 12,
        noteTakingTime: 10,
    });

    // Lead capture gate
    const [leadInfo, setLeadInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
    });

    const [resultsUnlocked, setResultsUnlocked] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [expandedBreakdown, setExpandedBreakdown] = useState<string | null>(null);

    // ============================================================
    // HIDDEN CALCULATION MODEL
    // Users never see these numbers or formulas
    // ============================================================
    const compute = () => {
        const hourlyRate = inputs.recruiterCost / 2080;
        const totalApplicants = inputs.hiresPerYear * inputs.applicantsPerRole;
        const totalInterviews = inputs.hiresPerYear * inputs.interviewsPerHire;

        // 1) Resume review savings
        // AIR automates ~85% of resume review
        const resumeReviewHours = (totalApplicants * advanced.resumeReviewTime) / 60;
        const resumeReviewSaved = Math.round(resumeReviewHours * 0.85);

        // 2) Scheduling coordination savings
        // AIR eliminates ~90% of scheduling back-and-forth
        const schedulingHours = (totalInterviews * advanced.schedulingTime) / 60;
        const schedulingSaved = Math.round(schedulingHours * 0.90);

        // 3) Interview automation savings
        // AIR automates first-round interviews (~60% of interview volume)
        const firstRoundInterviews = Math.round(totalInterviews * 0.60);
        const interviewHoursSaved = Math.round((firstRoundInterviews * inputs.interviewDuration) / 60);

        // 4) Note-taking & documentation savings
        // Automated scoring + transcripts eliminate ~95% of manual notes
        const noteTakingHours = (totalInterviews * advanced.noteTakingTime) / 60;
        const noteTakingSaved = Math.round(noteTakingHours * 0.95);

        // 5) No-show mitigation savings
        // AIR reduces no-shows by ~60% through automated scheduling + reminders
        const noShowInterviews = Math.round(totalInterviews * (advanced.noShowRate / 100));
        const noShowTimeLost = (noShowInterviews * inputs.interviewDuration) / 60;
        const noShowRecovered = Math.round(noShowTimeLost * 0.60);

        // 6) Time-to-hire acceleration
        // Faster screening → faster pipeline → opportunity cost savings
        // Estimate position vacancy costs at 1.5x daily salary equivalent
        const avgDaysReduced = Math.min(18, Math.round(inputs.interviewsPerHire * 2.5));
        const dailyVacancyCost = (inputs.recruiterCost * 1.5) / 260;
        const opportunitySavings = Math.round(inputs.hiresPerYear * avgDaysReduced * dailyVacancyCost);

        // Totals
        const totalHoursSaved = resumeReviewSaved + schedulingSaved + interviewHoursSaved + noteTakingSaved + noShowRecovered;
        const directCostSavings = Math.round(totalHoursSaved * hourlyRate);
        const totalCostSavings = directCostSavings + opportunitySavings;
        const fteEquivalent = (totalHoursSaved / 2080).toFixed(1);
        const timeToHireReduction = Math.min(65, Math.round((avgDaysReduced / (inputs.interviewsPerHire * 5)) * 100));

        return {
            totalHoursSaved,
            totalCostSavings,
            directCostSavings,
            opportunitySavings,
            fteEquivalent,
            timeToHireReduction: Math.max(20, timeToHireReduction),
            breakdown: {
                resumeReview: { hours: resumeReviewSaved, cost: Math.round(resumeReviewSaved * hourlyRate) },
                scheduling: { hours: schedulingSaved, cost: Math.round(schedulingSaved * hourlyRate) },
                interviews: { hours: interviewHoursSaved, cost: Math.round(interviewHoursSaved * hourlyRate) },
                noteTaking: { hours: noteTakingSaved, cost: Math.round(noteTakingSaved * hourlyRate) },
                noShow: { hours: noShowRecovered, cost: Math.round(noShowRecovered * hourlyRate) },
            },
        };
    };

    const results = compute();

    const handleUnlock = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...leadInfo,
                    type: 'air_calculator',
                    calculatorInputs: { ...inputs, ...advanced },
                    estimatedSavings: results.totalCostSavings,
                    estimatedHoursSaved: results.totalHoursSaved,
                }),
            });
        } catch {
            // Fallback
        }
        setResultsUnlocked(true);
        setSubmitting(false);
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '12px 16px',
        fontSize: '15px',
        fontWeight: 600,
        border: '1px solid rgba(50, 50, 93, 0.12)',
        borderRadius: '10px',
        background: 'var(--color-white)',
        color: 'var(--text-primary)',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        outline: 'none',
    };

    const labelStyle: React.CSSProperties = {
        display: 'block',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--text-secondary)',
        marginBottom: '6px',
    };

    const gateInputStyle: React.CSSProperties = {
        ...inputStyle,
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        color: 'white',
        fontSize: '14px',
    };

    const resultCardStyle: React.CSSProperties = {
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        padding: '28px 20px',
        textAlign: 'center',
    };

    const gradientText: React.CSSProperties = {
        fontWeight: 900,
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    const breakdownItems = [
        { key: 'resumeReview', label: 'Resume Review Automation', data: results.breakdown.resumeReview },
        { key: 'scheduling', label: 'Scheduling Coordination', data: results.breakdown.scheduling },
        { key: 'interviews', label: 'Interview Automation', data: results.breakdown.interviews },
        { key: 'noteTaking', label: 'Note-Taking & Documentation', data: results.breakdown.noteTaking },
        { key: 'noShow', label: 'No-Show Recovery', data: results.breakdown.noShow },
    ];

    return (
        <section className="section section--gray">
            <div className="container" style={{ maxWidth: '960px' }}>
                <div className="section-header">
                    <div className="badge">ROI Calculator</div>
                    <h2>Estimate your recruiting ROI with AIR</h2>
                    <p>Enter your hiring data and we&apos;ll model your projected savings across resume review, scheduling, interviews, and more.</p>
                </div>

                <div style={{
                    background: 'var(--color-white)',
                    borderRadius: '20px',
                    border: '1px solid rgba(50, 50, 93, 0.08)',
                    boxShadow: '0 8px 32px rgba(50, 50, 93, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)',
                    overflow: 'hidden',
                }}>
                    {/* ============ INPUT SECTION ============ */}
                    <div style={{ padding: '40px' }}>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                            Your hiring profile
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                            <div>
                                <label htmlFor="calc-hires" style={labelStyle}>Hires per year</label>
                                <input id="calc-hires" type="number" min="1" value={inputs.hiresPerYear}
                                    onChange={(e) => setInputs({ ...inputs, hiresPerYear: Math.max(1, parseInt(e.target.value) || 1) })}
                                    style={inputStyle} />
                            </div>
                            <div>
                                <label htmlFor="calc-applicants" style={labelStyle}>Applicants per role</label>
                                <input id="calc-applicants" type="number" min="10" value={inputs.applicantsPerRole}
                                    onChange={(e) => setInputs({ ...inputs, applicantsPerRole: Math.max(10, parseInt(e.target.value) || 10) })}
                                    style={inputStyle} />
                            </div>
                            <div>
                                <label htmlFor="calc-interviews" style={labelStyle}>Candidates interviewed per hire</label>
                                <input id="calc-interviews" type="number" min="1" value={inputs.interviewsPerHire}
                                    onChange={(e) => setInputs({ ...inputs, interviewsPerHire: Math.max(1, parseInt(e.target.value) || 1) })}
                                    style={inputStyle} />
                            </div>
                            <div>
                                <label htmlFor="calc-duration" style={labelStyle}>Average interview length (min)</label>
                                <input id="calc-duration" type="number" min="10" step="5" value={inputs.interviewDuration}
                                    onChange={(e) => setInputs({ ...inputs, interviewDuration: Math.max(10, parseInt(e.target.value) || 10) })}
                                    style={inputStyle} />
                            </div>
                            <div style={{ gridColumn: 'span 2' }}>
                                <label htmlFor="calc-cost" style={labelStyle}>Avg. fully-loaded recruiter cost per year</label>
                                <input id="calc-cost" type="number" min="30000" step="5000" value={inputs.recruiterCost}
                                    onChange={(e) => setInputs({ ...inputs, recruiterCost: Math.max(30000, parseInt(e.target.value) || 80000) })}
                                    style={{ ...inputStyle, maxWidth: '280px' }} />
                            </div>
                        </div>

                        {/* Advanced fields — collapsed by default */}
                        <div style={{ marginTop: '24px' }}>
                            <button
                                type="button"
                                onClick={() => setShowAdvanced(!showAdvanced)}
                                style={{
                                    background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                                    fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)',
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    style={{ transform: showAdvanced ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                                {showAdvanced ? 'Hide' : 'Show'} advanced inputs
                            </button>
                            {showAdvanced && (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(50,50,93,0.06)' }}>
                                    <div>
                                        <label htmlFor="calc-noshow" style={labelStyle}>No-show rate (%)</label>
                                        <input id="calc-noshow" type="number" min="0" max="50" value={advanced.noShowRate}
                                            onChange={(e) => setAdvanced({ ...advanced, noShowRate: Math.min(50, Math.max(0, parseInt(e.target.value) || 0)) })}
                                            style={inputStyle} />
                                    </div>
                                    <div>
                                        <label htmlFor="calc-resume" style={labelStyle}>Resume review time (min/applicant)</label>
                                        <input id="calc-resume" type="number" min="1" max="30" value={advanced.resumeReviewTime}
                                            onChange={(e) => setAdvanced({ ...advanced, resumeReviewTime: Math.min(30, Math.max(1, parseInt(e.target.value) || 1)) })}
                                            style={inputStyle} />
                                    </div>
                                    <div>
                                        <label htmlFor="calc-scheduling" style={labelStyle}>Scheduling coordination (min/interview)</label>
                                        <input id="calc-scheduling" type="number" min="1" max="30" value={advanced.schedulingTime}
                                            onChange={(e) => setAdvanced({ ...advanced, schedulingTime: Math.min(30, Math.max(1, parseInt(e.target.value) || 1)) })}
                                            style={inputStyle} />
                                    </div>
                                    <div>
                                        <label htmlFor="calc-notes" style={labelStyle}>Note-taking time (min/interview)</label>
                                        <input id="calc-notes" type="number" min="1" max="30" value={advanced.noteTakingTime}
                                            onChange={(e) => setAdvanced({ ...advanced, noteTakingTime: Math.min(30, Math.max(1, parseInt(e.target.value) || 1)) })}
                                            style={inputStyle} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ============ GATED RESULTS ============ */}
                    {!resultsUnlocked ? (
                        <div style={{
                            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                            padding: '48px 40px',
                        }}>
                            <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto' }}>
                                <div style={{ marginBottom: '16px' }}>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'white', marginBottom: '8px' }}>
                                    Unlock your full ROI analysis
                                </h3>
                                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.6 }}>
                                    We&apos;ll generate a detailed savings projection across six dimensions — resume review, scheduling, interviews, documentation, no-shows, and time-to-hire acceleration.
                                </p>
                                <form onSubmit={handleUnlock} style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                        <div>
                                            <label htmlFor="gate-fn" style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '4px' }}>First Name *</label>
                                            <input id="gate-fn" type="text" required value={leadInfo.firstName}
                                                onChange={(e) => setLeadInfo({ ...leadInfo, firstName: e.target.value })}
                                                style={gateInputStyle} />
                                        </div>
                                        <div>
                                            <label htmlFor="gate-ln" style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '4px' }}>Last Name *</label>
                                            <input id="gate-ln" type="text" required value={leadInfo.lastName}
                                                onChange={(e) => setLeadInfo({ ...leadInfo, lastName: e.target.value })}
                                                style={gateInputStyle} />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="gate-email" style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '4px' }}>Work Email *</label>
                                        <input id="gate-email" type="email" required value={leadInfo.email}
                                            onChange={(e) => setLeadInfo({ ...leadInfo, email: e.target.value })}
                                            style={gateInputStyle} />
                                    </div>
                                    <div>
                                        <label htmlFor="gate-company" style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '4px' }}>Company</label>
                                        <input id="gate-company" type="text" value={leadInfo.company}
                                            onChange={(e) => setLeadInfo({ ...leadInfo, company: e.target.value })}
                                            style={gateInputStyle} />
                                    </div>
                                    <button type="submit" className="btn btn--primary btn--lg" disabled={submitting}
                                        style={{ width: '100%', marginTop: '8px' }}>
                                        {submitting ? 'Generating analysis…' : 'Unlock My ROI Analysis'}
                                    </button>
                                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', textAlign: 'center', margin: 0 }}>
                                        No spam. Your data is used only for this analysis.
                                    </p>
                                </form>
                            </div>
                        </div>
                    ) : (
                        /* ============ RESULTS REVEAL ============ */
                        <div style={{
                            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                            padding: '48px 40px',
                            animation: 'fadeIn 0.5s ease-out',
                        }}>
                            {/* Hero savings number */}
                            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                                    Estimated Annual Savings
                                </div>
                                <div style={{ fontSize: '64px', lineHeight: 1, ...gradientText }}>
                                    ${results.totalCostSavings.toLocaleString()}
                                </div>
                                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '8px' }}>
                                    per year · based on your hiring profile
                                </div>
                            </div>

                            {/* Key metrics grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '32px' }}>
                                <div style={resultCardStyle}>
                                    <div style={{ fontSize: '32px', ...gradientText }}>{results.totalHoursSaved.toLocaleString()}</div>
                                    <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hours Saved / Year</div>
                                </div>
                                <div style={resultCardStyle}>
                                    <div style={{ fontSize: '32px', ...gradientText }}>${results.directCostSavings.toLocaleString()}</div>
                                    <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Direct Labor Savings</div>
                                </div>
                                <div style={resultCardStyle}>
                                    <div style={{ fontSize: '32px', ...gradientText }}>{results.fteEquivalent}</div>
                                    <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>FTE Equivalent</div>
                                </div>
                                <div style={resultCardStyle}>
                                    <div style={{ fontSize: '32px', ...gradientText }}>{results.timeToHireReduction}%</div>
                                    <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Faster Time-to-Hire</div>
                                </div>
                            </div>

                            {/* Expandable breakdown */}
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px' }}>
                                <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                                    Savings Breakdown
                                </div>
                                {breakdownItems.map((item) => (
                                    <div key={item.key} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                        <button
                                            type="button"
                                            onClick={() => setExpandedBreakdown(expandedBreakdown === item.key ? null : item.key)}
                                            style={{
                                                width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                                                padding: '14px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                            }}
                                        >
                                            <span style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{item.label}</span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)' }}>${item.data.cost.toLocaleString()}</span>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"
                                                    style={{ transform: expandedBreakdown === item.key ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </button>
                                        {expandedBreakdown === item.key && (
                                            <div style={{ padding: '0 0 14px 0', fontSize: '13px', color: 'rgba(255,255,255,0.4)', display: 'flex', gap: '24px' }}>
                                                <span>{item.data.hours.toLocaleString()} hours saved</span>
                                                <span>${item.data.cost.toLocaleString()} in recruiter time</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {results.opportunitySavings > 0 && (
                                    <div style={{ padding: '14px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <span style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>Time-to-Hire Acceleration</span>
                                        <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)' }}>${results.opportunitySavings.toLocaleString()}</span>
                                    </div>
                                )}
                            </div>

                            {/* CTA */}
                            <div style={{ textAlign: 'center', marginTop: '32px' }}>
                                <a href="/book-demo" className="btn btn--primary btn--lg">
                                    Book a Demo to Confirm Your Savings →
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}
