'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';
import Link from 'next/link';

export default function AIRExitPopup() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleMouseLeave = useCallback((e: MouseEvent) => {
        if (e.clientY <= 0 && !dismissed && !submitted) {
            setVisible(true);
        }
    }, [dismissed, submitted]);

    useEffect(() => {
        if (sessionStorage.getItem('air_exit_shown')) {
            setDismissed(true);
            return;
        }

        const timer = setTimeout(() => {
            document.addEventListener('mouseleave', handleMouseLeave);
        }, 4000);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [handleMouseLeave]);

    const handleDismiss = () => {
        setVisible(false);
        setDismissed(true);
        sessionStorage.setItem('air_exit_shown', '1');
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, type: 'air_exit_trial' }),
            });
        } catch {
            // Fallback — still show success
        }
        setSubmitted(true);
        setSubmitting(false);
        sessionStorage.setItem('air_exit_shown', '1');
    };

    if (!visible) return null;

    return (
        <div
            onClick={handleDismiss}
            style={{
                position: 'fixed', inset: 0, zIndex: 9999,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                animation: 'airFadeIn 0.3s ease-out',
                padding: '24px',
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '100%', maxWidth: '880px',
                    borderRadius: '20px', overflow: 'hidden',
                    boxShadow: '0 24px 80px rgba(0,0,0,0.4), 0 0 40px rgba(245,87,51,0.1)',
                    animation: 'airSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                }}
            >
                {/* Close button */}
                <button
                    onClick={handleDismiss}
                    aria-label="Close"
                    style={{
                        position: 'absolute', top: '16px', right: '16px', zIndex: 10,
                        width: '36px', height: '36px', borderRadius: '50%',
                        border: 'none', background: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '18px', lineHeight: 1,
                        transition: 'background 0.2s',
                    }}
                >✕</button>

                {submitted ? (
                    <div style={{
                        textAlign: 'center', padding: '80px 48px',
                        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
                    }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                        <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'white', marginBottom: '12px' }}>Check your inbox!</h2>
                        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', maxWidth: '420px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                            We&apos;ve sent you a link to start your live AIR interview. It takes under a minute to begin — no setup required.
                        </p>
                        <button onClick={handleDismiss} className="btn btn--secondary" style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.15)' }}>
                            Close
                        </button>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        {/* Left — Quote + Social Proof */}
                        <div style={{
                            background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
                            padding: '48px 40px',
                            display: 'flex', flexDirection: 'column', justifyContent: 'center',
                            position: 'relative', overflow: 'hidden',
                        }}>
                            {/* Ambient glow */}
                            <div style={{
                                position: 'absolute', top: '-30%', left: '-20%',
                                width: '200px', height: '200px', borderRadius: '50%',
                                background: 'rgba(245,87,51,0.08)', filter: 'blur(60px)',
                                pointerEvents: 'none',
                            }} />

                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                                letterSpacing: '0.08em', color: 'var(--color-primary)',
                                marginBottom: '20px', position: 'relative',
                            }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Before You Go
                            </div>

                            <h2 style={{
                                fontSize: '26px', fontWeight: 800, lineHeight: 1.25,
                                color: 'white', marginBottom: '20px', position: 'relative',
                            }}>
                                Try a live AIR interview — <span style={{ color: 'var(--color-primary)' }}>on us.</span>
                            </h2>

                            <p style={{
                                fontSize: '14px', lineHeight: 1.7,
                                color: 'rgba(255,255,255,0.55)', marginBottom: '28px',
                                position: 'relative',
                            }}>
                                Experience the exact AI interview your candidates go through. No recording, no commitment — just the real product in under 60 seconds.
                            </p>

                            {/* Quote card */}
                            <div style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '14px', padding: '20px',
                                position: 'relative',
                            }}>
                                {/* G2 Stars */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                                    <div style={{
                                        width: '22px', height: '22px', borderRadius: '4px',
                                        background: '#ff492c', display: 'flex',
                                        alignItems: 'center', justifyContent: 'center',
                                        fontSize: '10px', fontWeight: 900, color: 'white',
                                    }}>G2</div>
                                    <div style={{ display: 'flex', gap: '1px' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < 4 ? '#f59e0b' : 'none'} stroke="#f59e0b" strokeWidth={i < 4 ? '0' : '1.5'}>
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>4.5/5</span>
                                </div>

                                <p style={{
                                    fontSize: '13.5px', lineHeight: 1.65,
                                    color: 'rgba(255,255,255,0.75)', margin: '0 0 16px',
                                    fontStyle: 'italic',
                                }}>
                                    &ldquo;I was skeptical about AI interviews, but AIR genuinely impressed me. The conversation felt natural, the follow-up questions were sharp, and I got feedback faster than any human process I&apos;ve been through.&rdquo;
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{
                                        width: '32px', height: '32px', borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'white', fontWeight: 700, fontSize: '12px',
                                    }}>SK</div>
                                    <div>
                                        <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>Sarah K.</div>
                                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Senior Software Engineer · Interviewed via AIR</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — Dark Form */}
                        <div style={{
                            background: 'linear-gradient(180deg, #16213e 0%, #1a1a2e 100%)',
                            padding: '48px 40px',
                            display: 'flex', flexDirection: 'column', justifyContent: 'center',
                        }}>
                            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px', color: 'white' }}>
                                Start a live interview
                            </h3>
                            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '24px' }}>
                                Enter your info. You&apos;ll be interviewing with AIR in under a minute.
                            </p>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                    <div>
                                        <label htmlFor="air-exit-firstName" style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '4px' }}>First Name *</label>
                                        <input
                                            id="air-exit-firstName"
                                            type="text"
                                            required
                                            placeholder="Jane"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            style={{
                                                width: '100%', fontSize: '14px', padding: '11px 14px',
                                                borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)',
                                                background: 'rgba(255,255,255,0.05)', color: 'white',
                                                outline: 'none', transition: 'border-color 0.2s',
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="air-exit-lastName" style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '4px' }}>Last Name *</label>
                                        <input
                                            id="air-exit-lastName"
                                            type="text"
                                            required
                                            placeholder="Doe"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            style={{
                                                width: '100%', fontSize: '14px', padding: '11px 14px',
                                                borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)',
                                                background: 'rgba(255,255,255,0.05)', color: 'white',
                                                outline: 'none', transition: 'border-color 0.2s',
                                            }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="air-exit-email" style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '4px' }}>Work Email *</label>
                                    <input
                                        id="air-exit-email"
                                        type="email"
                                        required
                                        placeholder="jane@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        style={{
                                            width: '100%', fontSize: '14px', padding: '11px 14px',
                                            borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)',
                                            background: 'rgba(255,255,255,0.05)', color: 'white',
                                            outline: 'none', transition: 'border-color 0.2s',
                                        }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn--primary btn--lg"
                                    disabled={submitting}
                                    style={{ width: '100%', marginTop: '6px' }}
                                >
                                    {submitting ? 'Starting…' : 'Start My Interview →'}
                                </button>
                                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', textAlign: 'center', margin: 0, lineHeight: 1.5 }}>
                                    By continuing, you agree to Braintrust&apos;s{' '}
                                    <Link href="/terms" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'underline' }}>Terms</Link> and{' '}
                                    <Link href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'underline' }}>Privacy Policy</Link>.
                                </p>
                            </form>

                            {/* Trusted by strip */}
                            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginBottom: '10px' }}>
                                    Trusted by recruiting teams at
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                                    {['Nike', 'Goldman Sachs', 'Porsche', 'Atlassian', 'Deloitte'].map(name => (
                                        <span key={name} style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.03em' }}>{name}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes airFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes airSlideUp {
                    from { opacity: 0; transform: translateY(24px) scale(0.97); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </div>
    );
}
