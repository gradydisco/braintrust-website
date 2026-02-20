'use client';

import { useState, FormEvent } from 'react';

export default function SavingsCalculator() {
    const [inputs, setInputs] = useState({
        hiresPerYear: 50,
        interviewsPerHire: 5,
        interviewDuration: 30,
        recruiterCost: 80000,
    });
    const [email, setEmail] = useState('');
    const [resultsUnlocked, setResultsUnlocked] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Calculation logic
    const totalInterviews = inputs.hiresPerYear * inputs.interviewsPerHire;
    const totalHours = Math.round((totalInterviews * inputs.interviewDuration) / 60);
    const hourlyRate = inputs.recruiterCost / 2080; // ~52 weeks × 40 hours
    // AIR automates first-round interviews (~60% of total interview volume)
    const automatedInterviews = Math.round(totalInterviews * 0.6);
    const hoursSaved = Math.round((automatedInterviews * inputs.interviewDuration) / 60);
    const costSaved = Math.round(hoursSaved * hourlyRate);
    const workloadReduction = 60; // % of first-round work eliminated
    const speedIncrease = Math.round((hoursSaved / totalHours) * 100) || 0;

    const handleUnlock = async (e: FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setSubmitting(true);
        try {
            await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    firstName: '',
                    type: 'air_calculator',
                    hiresPerYear: inputs.hiresPerYear,
                    interviewsPerHire: inputs.interviewsPerHire,
                    interviewDuration: inputs.interviewDuration,
                    recruiterCost: inputs.recruiterCost,
                    estimatedSavings: costSaved,
                    estimatedHoursSaved: hoursSaved,
                }),
            });
        } catch {
            // Fallback if API is unavailable
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

    return (
        <section className="section section--gray">
            <div className="container" style={{ maxWidth: '960px' }}>
                <div className="section-header">
                    <div className="badge">ROI Calculator</div>
                    <h2>Estimate your time &amp; cost savings</h2>
                    <p>See how much AIR can save your team by automating first-round interviews.</p>
                </div>

                <div style={{
                    background: 'var(--color-white)',
                    borderRadius: 'var(--radius-2xl)',
                    border: '1px solid rgba(50, 50, 93, 0.08)',
                    boxShadow: '0 8px 32px rgba(50, 50, 93, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)',
                    overflow: 'hidden',
                }}>
                    {/* Input Section */}
                    <div style={{ padding: 'var(--space-10)' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: 'var(--space-6)',
                        }}>
                            <div>
                                <label htmlFor="calc-hires" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                                    Hires per year
                                </label>
                                <input
                                    id="calc-hires"
                                    type="number"
                                    min="1"
                                    value={inputs.hiresPerYear}
                                    onChange={(e) => setInputs({ ...inputs, hiresPerYear: Math.max(1, parseInt(e.target.value) || 1) })}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label htmlFor="calc-interviews" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                                    Interviews per hire
                                </label>
                                <input
                                    id="calc-interviews"
                                    type="number"
                                    min="1"
                                    value={inputs.interviewsPerHire}
                                    onChange={(e) => setInputs({ ...inputs, interviewsPerHire: Math.max(1, parseInt(e.target.value) || 1) })}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label htmlFor="calc-duration" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                                    Avg. interview duration (minutes)
                                </label>
                                <input
                                    id="calc-duration"
                                    type="number"
                                    min="10"
                                    step="5"
                                    value={inputs.interviewDuration}
                                    onChange={(e) => setInputs({ ...inputs, interviewDuration: Math.max(10, parseInt(e.target.value) || 10) })}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label htmlFor="calc-cost" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                                    Avg. recruiter salary (annually)
                                </label>
                                <input
                                    id="calc-cost"
                                    type="number"
                                    min="30000"
                                    step="5000"
                                    value={inputs.recruiterCost}
                                    onChange={(e) => setInputs({ ...inputs, recruiterCost: Math.max(30000, parseInt(e.target.value) || 80000) })}
                                    style={inputStyle}
                                />
                                <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '4px' }}>
                                    Hourly rate: ${hourlyRate.toFixed(2)}/hr
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Summary Preview */}
                    <div style={{
                        borderTop: '1px solid rgba(50, 50, 93, 0.06)',
                        padding: 'var(--space-6) var(--space-10)',
                        background: 'rgba(50, 50, 93, 0.015)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 'var(--space-4)',
                    }}>
                        <div style={{ display: 'flex', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
                            <div>
                                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 500, marginBottom: '2px' }}>Total annual interviews</div>
                                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)' }}>{totalInterviews.toLocaleString()}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 500, marginBottom: '2px' }}>Total interview hours</div>
                                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)' }}>{totalHours.toLocaleString()}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 500, marginBottom: '2px' }}>Automated by AIR</div>
                                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-primary)' }}>{automatedInterviews.toLocaleString()}</div>
                            </div>
                        </div>
                    </div>

                    {/* Results — Gated */}
                    {!resultsUnlocked ? (
                        <div style={{
                            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                            padding: 'var(--space-10) var(--space-10)',
                            textAlign: 'center',
                        }}>
                            <div style={{ marginBottom: 'var(--space-4)' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                            </div>
                            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: 'var(--space-2)' }}>
                                Enter your email to see your estimated annual savings
                            </h3>
                            <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.55)', marginBottom: 'var(--space-6)', maxWidth: '420px', margin: '0 auto var(--space-6)' }}>
                                We&apos;ll calculate your projected cost savings, hours saved, and hiring speed improvement.
                            </p>
                            <form onSubmit={handleUnlock} style={{ display: 'flex', gap: 'var(--space-3)', maxWidth: '440px', margin: '0 auto' }}>
                                <input
                                    type="email"
                                    required
                                    placeholder="you@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{
                                        flex: 1,
                                        padding: '12px 16px',
                                        fontSize: '14px',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        background: 'rgba(255,255,255,0.08)',
                                        color: 'white',
                                        outline: 'none',
                                    }}
                                />
                                <button
                                    type="submit"
                                    className="btn btn--primary"
                                    disabled={submitting}
                                    style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
                                >
                                    {submitting ? '…' : 'See Results'}
                                </button>
                            </form>
                            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: 'var(--space-3)' }}>
                                No spam. Unsubscribe anytime.
                            </p>
                        </div>
                    ) : (
                        <div style={{
                            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                            padding: 'var(--space-10)',
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'white', marginBottom: 'var(--space-2)' }}>
                                    Your estimated annual savings with AIR
                                </h3>
                                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                                    Based on {inputs.hiresPerYear} hires/year, {inputs.interviewsPerHire} interviews/hire, {inputs.interviewDuration}-minute interviews
                                </p>
                            </div>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                gap: 'var(--space-4)',
                            }}>
                                <div style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: 'var(--radius-xl)',
                                    padding: 'var(--space-6) var(--space-4)',
                                    textAlign: 'center',
                                }}>
                                    <div style={{ fontSize: '36px', fontWeight: 900, background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                        {hoursSaved.toLocaleString()}
                                    </div>
                                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Hours Saved/Year
                                    </div>
                                </div>
                                <div style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: 'var(--radius-xl)',
                                    padding: 'var(--space-6) var(--space-4)',
                                    textAlign: 'center',
                                }}>
                                    <div style={{ fontSize: '36px', fontWeight: 900, background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                        ${costSaved.toLocaleString()}
                                    </div>
                                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Cost Savings/Year
                                    </div>
                                </div>
                                <div style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: 'var(--radius-xl)',
                                    padding: 'var(--space-6) var(--space-4)',
                                    textAlign: 'center',
                                }}>
                                    <div style={{ fontSize: '36px', fontWeight: 900, background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                        {workloadReduction}%
                                    </div>
                                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Recruiter Workload Reduced
                                    </div>
                                </div>
                                <div style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: 'var(--radius-xl)',
                                    padding: 'var(--space-6) var(--space-4)',
                                    textAlign: 'center',
                                }}>
                                    <div style={{ fontSize: '36px', fontWeight: 900, background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                        {speedIncrease}%
                                    </div>
                                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Faster Hiring Pipeline
                                    </div>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
                                <a href="/book-demo" className="btn btn--primary btn--lg">
                                    Book a Demo to Confirm Your Savings →
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
