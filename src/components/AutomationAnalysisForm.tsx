'use client';

import { useState, FormEvent } from 'react';

export default function AutomationAnalysisForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

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
    };

    if (submitted) {
        return (
            <section className="section">
                <div className="container container--narrow">
                    <div style={{
                        textAlign: 'center',
                        padding: 'var(--space-14) var(--space-8)',
                        borderRadius: 'var(--radius-2xl)',
                        background: 'var(--color-white)',
                        border: '1px solid var(--color-gray-100)',
                        boxShadow: '0 4px 24px rgba(50, 50, 93, 0.06)',
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                        </div>
                        <h2 style={{ marginBottom: 'var(--space-3)' }}>Your analysis is on the way</h2>
                        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto' }}>
                            A Nexus specialist will review your workflows and deliver a personalized automation analysis within 2 business days.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '960px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0',
                    borderRadius: 'var(--radius-2xl)',
                    overflow: 'hidden',
                    border: '1px solid rgba(50, 50, 93, 0.08)',
                    boxShadow: '0 8px 32px rgba(50, 50, 93, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)',
                }}>
                    {/* Left — Value Proposition */}
                    <div style={{
                        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                        padding: 'var(--space-12) var(--space-10)',
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
                            marginBottom: 'var(--space-5)',
                        }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                            Limited Availability
                        </div>
                        <h2 style={{ fontSize: '28px', fontWeight: 800, lineHeight: 1.2, marginBottom: 'var(--space-5)', color: 'white' }}>
                            Get a Free Automation Analysis This Week
                        </h2>
                        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginBottom: 'var(--space-8)' }}>
                            Our team will analyze your workflows, identify automation opportunities, and estimate your potential time savings — at no cost and no obligation.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                            {[
                                'Workflow analysis across departments',
                                'Identify top automation opportunities',
                                'Estimated hours saved per week',
                                'Delivered within 2 business days',
                            ].map((item) => (
                                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div style={{
                        background: 'var(--color-white)',
                        padding: 'var(--space-12) var(--space-10)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                            Request your free analysis
                        </h3>
                        <p style={{ fontSize: '13.5px', color: 'var(--text-tertiary)', marginBottom: 'var(--space-6)' }}>
                            No credit card required. No obligation. Just actionable insight.
                        </p>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                                <div>
                                    <label htmlFor="nexus-firstName" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>First Name *</label>
                                    <input
                                        id="nexus-firstName"
                                        type="text"
                                        required
                                        className="form-input"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        style={{ fontSize: '14px', padding: '10px 14px' }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="nexus-lastName" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Last Name *</label>
                                    <input
                                        id="nexus-lastName"
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
                                <label htmlFor="nexus-email" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Work Email *</label>
                                <input
                                    id="nexus-email"
                                    type="email"
                                    required
                                    className="form-input"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={{ fontSize: '14px', padding: '10px 14px' }}
                                />
                            </div>
                            <div>
                                <label htmlFor="nexus-company" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Company Name *</label>
                                <input
                                    id="nexus-company"
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
                                style={{ width: '100%', marginTop: 'var(--space-2)' }}
                            >
                                {submitting ? 'Submitting…' : 'Get My Free Automation Analysis'}
                            </button>
                            <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', textAlign: 'center', margin: 0 }}>
                                We&apos;ll never share your information. Read our privacy policy.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
