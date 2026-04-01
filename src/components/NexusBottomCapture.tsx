'use client';

import { useState, FormEvent } from 'react';

export default function NexusBottomCapture() {
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
                body: JSON.stringify({ ...formData, type: 'nexus_automation_analysis' }),
            });
        } catch {
            // Fallback
        }
        setSubmitted(true);
        setSubmitting(false);
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '12px 16px',
        fontSize: '14px',
        fontWeight: 500,
        border: '1px solid #d1d5db',
        borderRadius: '10px',
        background: '#ffffff',
        color: '#1a1a1a',
        outline: 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    };

    if (submitted) {
        return (
            <section className="section" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
                <div className="container container--narrow" style={{ textAlign: 'center' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                    <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'white', marginBottom: '12px' }}>Your analysis is on the way</h2>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', maxWidth: '440px', margin: '0 auto', lineHeight: 1.6 }}>
                        A Nexus specialist will review your workflows and deliver a personalized automation analysis within 2 business days.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="section" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.1fr 1fr',
                    gap: '0',
                    alignItems: 'center',
                }}>
                    {/* Left — Value Prop */}
                    <div style={{ paddingRight: '48px' }}>
                        <h2 style={{ fontSize: '28px', fontWeight: 800, lineHeight: 1.2, color: 'white', marginBottom: '16px' }}>
                            Get a Free Automation Analysis
                        </h2>
                        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginBottom: '28px' }}>
                            We&apos;ll analyze your workflows and identify where automation can save time and cost — delivered fast, with zero obligation.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                'Full workflow audit across teams',
                                'Top automation opportunities ranked',
                                'Projected hours & cost savings',
                                'Delivered within 2 business days',
                            ].map((item) => (
                                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'rgba(255,255,255,0.75)' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div style={{
                        background: '#ffffff',
                        border: '1px solid rgba(0,0,0,0.08)',
                        borderRadius: '16px',
                        padding: '36px 32px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    }}>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>
                            Request your free analysis
                        </h3>
                        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
                            No credit card. No obligation. Just insight.
                        </p>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <div>
                                    <label htmlFor="btm-fn" style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563', display: 'block', marginBottom: '6px' }}>First Name *</label>
                                    <input id="btm-fn" type="text" required value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        style={inputStyle} />
                                </div>
                                <div>
                                    <label htmlFor="btm-ln" style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563', display: 'block', marginBottom: '6px' }}>Last Name *</label>
                                    <input id="btm-ln" type="text" required value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        style={inputStyle} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="btm-email" style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563', display: 'block', marginBottom: '6px' }}>Work Email *</label>
                                <input id="btm-email" type="email" required value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={inputStyle} />
                            </div>
                            <div>
                                <label htmlFor="btm-company" style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563', display: 'block', marginBottom: '6px' }}>Company *</label>
                                <input id="btm-company" type="text" required value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    style={inputStyle} />
                            </div>
                            <button type="submit" className="btn btn--primary btn--lg" disabled={submitting}
                                style={{ width: '100%', marginTop: '8px' }}>
                                {submitting ? 'Submitting…' : 'Get My Free Analysis'}
                            </button>
                            <p style={{ fontSize: '12px', color: '#9ca3af', textAlign: 'center', margin: 0 }}>
                                We&apos;ll never share your information.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
