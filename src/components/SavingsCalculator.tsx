'use client';

import { useState, useCallback, FormEvent } from 'react';

// ============================================================
// AIR ROI CALCULATOR — v3 (QA fixes applied)
//
// Fixes:
// 1) String-based inputs — allow clearing during editing, clamp on blur
// 2) Recruiter cost displayed as $XX,XXX currency
// 3) Total ALWAYS equals sum of breakdown line items
// 4) Clear, defensible labels with expandable methodology
// ============================================================

// Format number with commas
const fmt = (n: number) => n.toLocaleString('en-US');
const fmtDollar = (n: number) => '$' + fmt(n);

// Parse a possibly-formatted string into a number (strip $ and commas)
const parseNum = (s: string) => {
    const cleaned = s.replace(/[$,\s]/g, '');
    const n = parseFloat(cleaned);
    return isNaN(n) ? NaN : n;
};

// Format as currency display string
const toCurrencyDisplay = (val: string | number) => {
    const n = typeof val === 'number' ? val : parseNum(String(val));
    if (isNaN(n) || n === 0) return '';
    return '$' + Math.round(n).toLocaleString('en-US');
};

export default function SavingsCalculator() {
    // ── String-based inputs (allows clearing during editing) ──
    const [raw, setRaw] = useState({
        hiresPerYear: '50',
        applicantsPerRole: '200',
        interviewsPerHire: '5',
        interviewDuration: '30',
        recruiterCost: '$80,000',
    });

    const [advancedRaw, setAdvancedRaw] = useState({
        noShowRate: '15',
        resumeReviewTime: '4',
        schedulingTime: '12',
        noteTakingTime: '10',
    });

    const [showAdvanced, setShowAdvanced] = useState(false);

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
    const [showMethodology, setShowMethodology] = useState(false);

    // ── Parse raw strings into numbers (with safe defaults) ──
    const val = useCallback((s: string, fallback: number) => {
        const n = parseNum(s);
        return isNaN(n) || n <= 0 ? fallback : n;
    }, []);

    const inputs = {
        hiresPerYear: val(raw.hiresPerYear, 50),
        applicantsPerRole: val(raw.applicantsPerRole, 200),
        interviewsPerHire: val(raw.interviewsPerHire, 5),
        interviewDuration: val(raw.interviewDuration, 30),
        recruiterCost: val(raw.recruiterCost, 80000),
    };

    const advanced = {
        noShowRate: Math.min(50, Math.max(0, val(advancedRaw.noShowRate, 15))),
        resumeReviewTime: val(advancedRaw.resumeReviewTime, 4),
        schedulingTime: val(advancedRaw.schedulingTime, 12),
        noteTakingTime: val(advancedRaw.noteTakingTime, 10),
    };

    // ── Blur handler: clamp + format ──
    const handleBlur = (field: string, minVal: number, defaultVal: number) => {
        const current = (raw as Record<string, string>)[field] ?? '';
        const n = parseNum(current);

        if (field === 'recruiterCost') {
            const clamped = isNaN(n) || n < minVal ? defaultVal : Math.round(n);
            setRaw(prev => ({ ...prev, [field]: toCurrencyDisplay(clamped) }));
        } else {
            const clamped = isNaN(n) || n < minVal ? defaultVal : Math.round(n);
            setRaw(prev => ({ ...prev, [field]: String(clamped) }));
        }
    };

    const handleAdvancedBlur = (field: string, minVal: number, maxVal: number, defaultVal: number) => {
        const current = (advancedRaw as Record<string, string>)[field] ?? '';
        const n = parseNum(current);
        const clamped = isNaN(n) ? defaultVal : Math.min(maxVal, Math.max(minVal, Math.round(n)));
        setAdvancedRaw(prev => ({ ...prev, [field]: String(clamped) }));
    };

    // ============================================================
    // CALCULATION MODEL (hidden from user)
    //
    // All savings are computed as labor hours × hourly rate.
    // Time-to-hire is kept separate as "Business Impact".
    // Total ALWAYS = sum of breakdown items.
    // ============================================================
    const compute = () => {
        const hourlyRate = inputs.recruiterCost / 2080;
        const totalApplicants = inputs.hiresPerYear * inputs.applicantsPerRole;
        const totalInterviews = inputs.hiresPerYear * inputs.interviewsPerHire;

        // 1) Resume review: AIR automates ~85% of resume screening
        const resumeHours = (totalApplicants * advanced.resumeReviewTime) / 60;
        const resumeSavedHours = Math.round(resumeHours * 0.85);
        const resumeSavedCost = Math.round(resumeSavedHours * hourlyRate);

        // 2) Scheduling: AIR eliminates ~90% of coordination
        const schedHours = (totalInterviews * advanced.schedulingTime) / 60;
        const schedSavedHours = Math.round(schedHours * 0.90);
        const schedSavedCost = Math.round(schedSavedHours * hourlyRate);

        // 3) Interview automation: AIR handles ~60% of interviews (first-round)
        const firstRound = Math.round(totalInterviews * 0.60);
        const interviewSavedHours = Math.round((firstRound * inputs.interviewDuration) / 60);
        const interviewSavedCost = Math.round(interviewSavedHours * hourlyRate);

        // 4) Note-taking: automated transcripts eliminate ~95% of manual notes
        const noteHours = (totalInterviews * advanced.noteTakingTime) / 60;
        const noteSavedHours = Math.round(noteHours * 0.95);
        const noteSavedCost = Math.round(noteSavedHours * hourlyRate);

        // 5) No-show recovery: ~60% fewer no-shows via automated reminders
        const noShowInterviews = Math.round(totalInterviews * (advanced.noShowRate / 100));
        const noShowWastedHours = Math.round((noShowInterviews * inputs.interviewDuration) / 60);
        const noShowSavedHours = Math.round(noShowWastedHours * 0.60);
        const noShowSavedCost = Math.round(noShowSavedHours * hourlyRate);

        // Direct labor totals (sum of 5 categories above)
        const directHours = resumeSavedHours + schedSavedHours + interviewSavedHours + noteSavedHours + noShowSavedHours;
        const directCost = resumeSavedCost + schedSavedCost + interviewSavedCost + noteSavedCost + noShowSavedCost;

        // 6) Time-to-hire acceleration (opportunity cost — separate category)
        // Faster pipeline reduces vacant-position cost.
        // Assumption: each open position costs ~1× daily recruiter salary per day.
        // AIR reduces time-to-fill by roughly (interviewsPerHire × 2) days.
        const daysReduced = Math.min(18, Math.round(inputs.interviewsPerHire * 2));
        const dailyPositionCost = inputs.recruiterCost / 260;
        const timeToHireCost = Math.round(inputs.hiresPerYear * daysReduced * dailyPositionCost);
        const timeToHirePercent = Math.max(15, Math.min(60, Math.round((daysReduced / (inputs.interviewsPerHire * 4)) * 100)));

        // Grand total = direct + time-to-hire (verifiable sum)
        const totalSavings = directCost + timeToHireCost;
        const totalHours = directHours;
        const fte = (directHours / 2080).toFixed(1);

        return {
            totalSavings,
            directCost,
            directHours: totalHours,
            fte,
            timeToHireCost,
            timeToHirePercent,
            daysReduced,
            breakdown: [
                {
                    key: 'resume',
                    label: 'Resume screening time saved',
                    explanation: `AIR automatically scores and ranks ${fmt(totalApplicants)} applicants/year, reducing manual resume review by ~85%.`,
                    hours: resumeSavedHours,
                    cost: resumeSavedCost,
                },
                {
                    key: 'scheduling',
                    label: 'Scheduling coordination eliminated',
                    explanation: `Self-service interview scheduling eliminates ~90% of back-and-forth coordination across ${fmt(totalInterviews)} interviews.`,
                    hours: schedSavedHours,
                    cost: schedSavedCost,
                },
                {
                    key: 'interviews',
                    label: 'First-round interviews automated',
                    explanation: `AIR conducts ${fmt(firstRound)} first-round interviews autonomously, freeing recruiter time for high-value conversations.`,
                    hours: interviewSavedHours,
                    cost: interviewSavedCost,
                },
                {
                    key: 'notes',
                    label: 'Note-taking & documentation automated',
                    explanation: `Automated transcription and scoring eliminates ~95% of manual interview documentation.`,
                    hours: noteSavedHours,
                    cost: noteSavedCost,
                },
                {
                    key: 'noshow',
                    label: 'No-show / wasted interview time recovered',
                    explanation: `Automated reminders and flexible rescheduling recover ~60% of time lost to candidate no-shows (${advanced.noShowRate}% no-show rate).`,
                    hours: noShowSavedHours,
                    cost: noShowSavedCost,
                },
            ],
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
                    estimatedSavings: results.totalSavings,
                    estimatedHoursSaved: results.directHours,
                }),
            });
        } catch {
            // Fallback
        }
        setResultsUnlocked(true);
        setSubmitting(false);
    };

    // ── Styles ──
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
        display: 'block', fontSize: '13px', fontWeight: 600,
        color: 'var(--text-secondary)', marginBottom: '6px',
    };

    const gateInputStyle: React.CSSProperties = {
        ...inputStyle,
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        color: 'white', fontSize: '14px',
    };

    const resultCardStyle: React.CSSProperties = {
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px', padding: '28px 16px', textAlign: 'center',
    };

    const gradientText: React.CSSProperties = {
        fontWeight: 900,
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    };

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
                                <input id="calc-hires" type="text" inputMode="numeric"
                                    value={raw.hiresPerYear}
                                    onChange={(e) => setRaw({ ...raw, hiresPerYear: e.target.value })}
                                    onBlur={() => handleBlur('hiresPerYear', 1, 50)}
                                    style={inputStyle} />
                            </div>
                            <div>
                                <label htmlFor="calc-applicants" style={labelStyle}>Applicants per role</label>
                                <input id="calc-applicants" type="text" inputMode="numeric"
                                    value={raw.applicantsPerRole}
                                    onChange={(e) => setRaw({ ...raw, applicantsPerRole: e.target.value })}
                                    onBlur={() => handleBlur('applicantsPerRole', 10, 200)}
                                    style={inputStyle} />
                            </div>
                            <div>
                                <label htmlFor="calc-interviews" style={labelStyle}>Candidates interviewed per hire</label>
                                <input id="calc-interviews" type="text" inputMode="numeric"
                                    value={raw.interviewsPerHire}
                                    onChange={(e) => setRaw({ ...raw, interviewsPerHire: e.target.value })}
                                    onBlur={() => handleBlur('interviewsPerHire', 1, 5)}
                                    style={inputStyle} />
                            </div>
                            <div>
                                <label htmlFor="calc-duration" style={labelStyle}>Average interview length (min)</label>
                                <input id="calc-duration" type="text" inputMode="numeric"
                                    value={raw.interviewDuration}
                                    onChange={(e) => setRaw({ ...raw, interviewDuration: e.target.value })}
                                    onBlur={() => handleBlur('interviewDuration', 10, 30)}
                                    style={inputStyle} />
                            </div>
                            <div style={{ gridColumn: 'span 2' }}>
                                <label htmlFor="calc-cost" style={labelStyle}>Avg. fully-loaded recruiter cost per year</label>
                                <input id="calc-cost" type="text" inputMode="numeric"
                                    value={raw.recruiterCost}
                                    onChange={(e) => {
                                        // Allow digits, $, commas, and empty
                                        const v = e.target.value.replace(/[^0-9$,.\s]/g, '');
                                        setRaw({ ...raw, recruiterCost: v });
                                    }}
                                    onBlur={() => handleBlur('recruiterCost', 30000, 80000)}
                                    style={{ ...inputStyle, maxWidth: '280px' }} />
                            </div>
                        </div>

                        {/* Advanced fields */}
                        <div style={{ marginTop: '24px' }}>
                            <button type="button" onClick={() => setShowAdvanced(!showAdvanced)}
                                style={{
                                    background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                                    fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)',
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                }}>
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
                                        <input id="calc-noshow" type="text" inputMode="numeric"
                                            value={advancedRaw.noShowRate}
                                            onChange={(e) => setAdvancedRaw({ ...advancedRaw, noShowRate: e.target.value })}
                                            onBlur={() => handleAdvancedBlur('noShowRate', 0, 50, 15)}
                                            style={inputStyle} />
                                    </div>
                                    <div>
                                        <label htmlFor="calc-resume" style={labelStyle}>Resume review time (min/applicant)</label>
                                        <input id="calc-resume" type="text" inputMode="numeric"
                                            value={advancedRaw.resumeReviewTime}
                                            onChange={(e) => setAdvancedRaw({ ...advancedRaw, resumeReviewTime: e.target.value })}
                                            onBlur={() => handleAdvancedBlur('resumeReviewTime', 1, 30, 4)}
                                            style={inputStyle} />
                                    </div>
                                    <div>
                                        <label htmlFor="calc-scheduling" style={labelStyle}>Scheduling coordination (min/interview)</label>
                                        <input id="calc-scheduling" type="text" inputMode="numeric"
                                            value={advancedRaw.schedulingTime}
                                            onChange={(e) => setAdvancedRaw({ ...advancedRaw, schedulingTime: e.target.value })}
                                            onBlur={() => handleAdvancedBlur('schedulingTime', 1, 30, 12)}
                                            style={inputStyle} />
                                    </div>
                                    <div>
                                        <label htmlFor="calc-notes" style={labelStyle}>Note-taking time (min/interview)</label>
                                        <input id="calc-notes" type="text" inputMode="numeric"
                                            value={advancedRaw.noteTakingTime}
                                            onChange={(e) => setAdvancedRaw({ ...advancedRaw, noteTakingTime: e.target.value })}
                                            onBlur={() => handleAdvancedBlur('noteTakingTime', 1, 30, 10)}
                                            style={inputStyle} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ============ GATED RESULTS ============ */}
                    {!resultsUnlocked ? (
                        <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', padding: '48px 40px' }}>
                            <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto' }}>
                                <div style={{ marginBottom: '16px' }}>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'white', marginBottom: '8px' }}>
                                    Unlock your full ROI analysis
                                </h3>
                                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.6 }}>
                                    We&apos;ll generate a detailed savings projection across resume review, scheduling, interviews, documentation, and time-to-hire impact.
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
                        <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', padding: '48px 40px', animation: 'calcFadeIn 0.5s ease-out' }}>

                            {/* Hero: Total Estimated Savings */}
                            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                                    Total Estimated Annual Savings
                                </div>
                                <div style={{ fontSize: '64px', lineHeight: 1, ...gradientText }}>
                                    {fmtDollar(results.totalSavings)}
                                </div>
                                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '10px' }}>
                                    {fmtDollar(results.directCost)} direct labor savings + {fmtDollar(results.timeToHireCost)} business impact
                                </div>
                            </div>

                            {/* Key metrics */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '32px' }}>
                                <div style={resultCardStyle}>
                                    <div style={{ fontSize: '32px', ...gradientText }}>{fmt(results.directHours)}</div>
                                    <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hours Saved / Year</div>
                                </div>
                                <div style={resultCardStyle}>
                                    <div style={{ fontSize: '32px', ...gradientText }}>{fmtDollar(results.directCost)}</div>
                                    <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Direct Labor Savings</div>
                                </div>
                                <div style={resultCardStyle}>
                                    <div style={{ fontSize: '32px', ...gradientText }}>{results.fte}</div>
                                    <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>FTE Equivalent</div>
                                </div>
                                <div style={resultCardStyle}>
                                    <div style={{ fontSize: '32px', ...gradientText }}>{results.timeToHirePercent}%</div>
                                    <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Faster Time-to-Hire</div>
                                </div>
                            </div>

                            {/* Breakdown: Direct Labor Savings */}
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px' }}>
                                <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                                    Direct Labor Savings Breakdown
                                </div>
                                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '12px' }}>
                                    Recruiter time recovered · {fmtDollar(results.directCost)} total
                                </div>
                                {results.breakdown.map((item) => (
                                    <div key={item.key} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                        <button type="button"
                                            onClick={() => setExpandedBreakdown(expandedBreakdown === item.key ? null : item.key)}
                                            style={{
                                                width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                                                padding: '14px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                            }}>
                                            <span style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>{item.label}</span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                                                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)' }}>{fmtDollar(item.cost)}</span>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"
                                                    style={{ transform: expandedBreakdown === item.key ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </button>
                                        {expandedBreakdown === item.key && (
                                            <div style={{ padding: '0 0 14px 0', fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                                                <div style={{ marginBottom: '6px' }}>{item.explanation}</div>
                                                <div style={{ display: 'flex', gap: '20px', fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>
                                                    <span>{fmt(item.hours)} hours saved</span>
                                                    <span>{fmtDollar(item.cost)} in recruiter time</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* Time-to-hire as separate line */}
                                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '8px', paddingTop: '8px' }}>
                                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px', marginTop: '12px' }}>
                                        Business Impact
                                    </div>
                                    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                        <button type="button"
                                            onClick={() => setExpandedBreakdown(expandedBreakdown === 'tth' ? null : 'tth')}
                                            style={{
                                                width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                                                padding: '14px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                            }}>
                                            <span style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>Time-to-hire acceleration</span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                                                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)' }}>{fmtDollar(results.timeToHireCost)}</span>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"
                                                    style={{ transform: expandedBreakdown === 'tth' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </button>
                                        {expandedBreakdown === 'tth' && (
                                            <div style={{ padding: '0 0 14px 0', fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                                                <div style={{ marginBottom: '6px' }}>
                                                    AIR accelerates your hiring pipeline by an estimated <strong style={{ color: 'rgba(255,255,255,0.7)' }}>{results.daysReduced} days per hire</strong>.
                                                    Each day a position remains open costs roughly {fmtDollar(Math.round(inputs.recruiterCost / 260))}/day in lost productivity
                                                    (based on your recruiter cost as a proxy for position value).
                                                    Across {fmt(inputs.hiresPerYear)} hires, this represents {fmtDollar(results.timeToHireCost)} in reduced vacancy cost.
                                                </div>
                                                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', fontStyle: 'italic', marginTop: '4px' }}>
                                                    This is an estimated opportunity cost, not a direct labor saving.
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Reconciliation total */}
                                <div style={{ marginTop: '16px', padding: '16px 0', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>Total estimated annual savings</span>
                                    <span style={{ fontSize: '18px', fontWeight: 800, ...gradientText }}>{fmtDollar(results.totalSavings)}</span>
                                </div>
                            </div>

                            {/* Methodology toggle */}
                            <div style={{ textAlign: 'center', marginTop: '16px' }}>
                                <button type="button" onClick={() => setShowMethodology(!showMethodology)}
                                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', color: 'rgba(255,255,255,0.3)', textDecoration: 'underline', padding: 0 }}>
                                    {showMethodology ? 'Hide' : 'How we calculate this'}
                                </button>
                                {showMethodology && (
                                    <div style={{ marginTop: '12px', padding: '16px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', textAlign: 'left', fontSize: '12px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
                                        <p style={{ margin: '0 0 8px' }}><strong style={{ color: 'rgba(255,255,255,0.5)' }}>Direct labor savings</strong> are calculated by estimating recruiter hours saved across five categories (resume screening, scheduling, interviewing, documentation, and no-show recovery), then multiplying by your hourly recruiter rate (annual salary ÷ 2,080 hours).</p>
                                        <p style={{ margin: 0 }}><strong style={{ color: 'rgba(255,255,255,0.5)' }}>Business impact</strong> estimates the cost of vacant positions during the hiring process. We use your recruiter cost as a proxy for daily position value and estimate how many days AIR accelerates each hire. This is an opportunity cost estimate, not a direct cash saving.</p>
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
                @keyframes calcFadeIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}
