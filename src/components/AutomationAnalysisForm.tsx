'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';

export default function AutomationAnalysisForm() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Exit-intent detection: fires when cursor leaves viewport toward the top
    const handleMouseLeave = useCallback((e: MouseEvent) => {
        if (e.clientY <= 0 && !dismissed && !submitted) {
            setVisible(true);
        }
    }, [dismissed, submitted]);

    useEffect(() => {
        // Check if already shown this session
        if (sessionStorage.getItem('nexus_exit_shown')) {
            setDismissed(true);
            return;
        }

        // Small delay so it doesn't trigger on immediate page load mouse movement
        const timer = setTimeout(() => {
            document.addEventListener('mouseleave', handleMouseLeave);
        }, 3000);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [handleMouseLeave]);

    const handleDismiss = () => {
        setVisible(false);
        setDismissed(true);
        sessionStorage.setItem('nexus_exit_shown', '1');
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, type: 'automation_analysis' }),
            });
        } catch {
            // Fallback
        }
        setSubmitted(true);
        setSubmitting(false);
        sessionStorage.setItem('nexus_exit_shown', '1');
    };

    if (!visible) return null;

    return (
        <div
            onClick={handleDismiss}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                animation: 'fadeIn 0.3s ease-out',
                padding: '24px',
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '100%',
                    maxWidth: '880px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 24px 80px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.15)',
                    animation: 'slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                }}
            >
                {/* Close button */}
                <button
                    onClick={handleDismiss}
                    aria-label="Close"
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        zIndex: 10,
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        border: 'none',
                        background: 'rgba(255,255,255,0.1)',
                        color: 'rgba(255,255,255,0.7)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.2s',
                        fontSize: '18px',
                        lineHeight: 1,
                    }}
                >
                    ✕
                </button>

                {submitted ? (
                    /* Success State */
                    <div style={{
                        textAlign: 'center',
                        padding: '80px 48px',
                        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                    }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                        <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'white', marginBottom: '12px' }}>Your analysis is on the way</h2>
                        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', maxWidth: '400px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                            A Nexus specialist will review your workflows and deliver a personalized automation analysis within 2 business days.
                        </p>
                        <button onClick={handleDismiss} className="btn btn--secondary" style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.15)' }}>
                            Close
                        </button>
                    </div>
                ) : (
                    /* Form — Split Layout */
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    }}>
                        {/* Left — Value Proposition */}
                        <div style={{
                            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                            padding: '48px 40px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            color: 'white',
                        }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: '11px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                color: 'var(--color-accent)',
                                marginBottom: '20px',
                            }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                Before You Go
                            </div>
                            <h2 style={{ fontSize: '26px', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px', color: 'white' }}>
                                Get a Free Automation Analysis This Week
                            </h2>
                            <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', marginBottom: '28px' }}>
                                Our team will analyze your workflows, identify automation opportunities, and estimate your potential time savings — at no cost and no obligation.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                {[
                                    'Workflow analysis across departments',
                                    'Identify top automation opportunities',
                                    'Estimated hours saved per week',
                                    'Delivered within 2 business days',
                                ].map((item) => (
                                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'rgba(255,255,255,0.8)' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — Form */}
                        <div style={{
                            background: 'var(--color-white)',
                            padding: '48px 40px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>
                                Request your free analysis
                            </h3>
                            <p style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '24px' }}>
                                No credit card. No obligation. Just actionable insight.
                            </p>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                    <div>
                                        <label htmlFor="exit-firstName" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>First Name *</label>
                                        <input
                                            id="exit-firstName"
                                            type="text"
                                            required
                                            className="form-input"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            style={{ fontSize: '14px', padding: '10px 14px' }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="exit-lastName" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Last Name *</label>
                                        <input
                                            id="exit-lastName"
                                            type="text"
                                            required
                                            className="form-input"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            style={{ fontSize: '14px', padding: '10px 14px' }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="exit-email" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Work Email *</label>
                                    <input
                                        id="exit-email"
                                        type="email"
                                        required
                                        className="form-input"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        style={{ fontSize: '14px', padding: '10px 14px' }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="exit-company" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Company Name *</label>
                                    <input
                                        id="exit-company"
                                        type="text"
                                        required
                                        className="form-input"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        style={{ fontSize: '14px', padding: '10px 14px' }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn--primary btn--lg"
                                    disabled={submitting}
                                    style={{ width: '100%', marginTop: '6px' }}
                                >
                                    {submitting ? 'Submitting…' : 'Get My Free Automation Analysis'}
                                </button>
                                <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', textAlign: 'center', margin: 0 }}>
                                    We&apos;ll never share your information. Read our privacy policy.
                                </p>
                            </form>
                        </div>
                    </div>
                )}
            </div>

            {/* Keyframe animations */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(24px) scale(0.97); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @media (max-width: 640px) {
                    .exit-modal-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
}
