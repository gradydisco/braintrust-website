'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export default function AIRExitPopup() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    const handleMouseLeave = useCallback((e: MouseEvent) => {
        if (e.clientY <= 0 && !dismissed) {
            setVisible(true);
        }
    }, [dismissed]);

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

    if (!visible) return null;

    return (
        <div
            onClick={handleDismiss}
            style={{
                position: 'fixed', inset: 0, zIndex: 9999,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                animation: 'airFadeIn 0.3s ease-out',
                padding: '24px',
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '100%', maxWidth: '800px',
                    borderRadius: '20px', overflow: 'hidden',
                    boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
                    animation: 'airSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    background: 'white',
                }}
            >
                {/* Close button */}
                <button
                    onClick={handleDismiss}
                    aria-label="Close"
                    style={{
                        position: 'absolute', top: '16px', right: '16px', zIndex: 10,
                        width: '36px', height: '36px', borderRadius: '50%',
                        border: 'none', background: 'rgba(0,0,0,0.05)',
                        color: 'var(--text-tertiary)', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '18px', lineHeight: 1,
                        transition: 'background 0.2s',
                    }}
                >✕</button>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                    {/* Left — Value prop + Quote */}
                    <div style={{
                        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                        padding: '44px 36px',
                        display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                            fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                            letterSpacing: '0.08em', color: 'var(--color-primary)',
                            marginBottom: '16px',
                        }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                            Before You Go
                        </div>

                        <h2 style={{
                            fontSize: '24px', fontWeight: 800, lineHeight: 1.3,
                            color: 'white', marginBottom: '12px',
                        }}>
                            Try a live AIR interview — <span style={{ color: 'var(--color-primary)' }}>free.</span>
                        </h2>

                        <p style={{
                            fontSize: '14px', lineHeight: 1.7,
                            color: 'rgba(255,255,255,0.65)', marginBottom: '24px',
                        }}>
                            Experience the exact AI interview your candidates go through. Under 60 seconds. No signup required.
                        </p>

                        {/* Quote card */}
                        <div style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px', padding: '16px',
                        }}>
                            {/* G2 Stars */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                                <div style={{
                                    width: '20px', height: '20px', borderRadius: '4px',
                                    background: '#ff492c', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                    fontSize: '9px', fontWeight: 900, color: 'white',
                                }}>G2</div>
                                <div style={{ display: 'flex', gap: '1px' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < 4 ? '#f59e0b' : 'none'} stroke="#f59e0b" strokeWidth={i < 4 ? '0' : '1.5'}>
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    ))}
                                </div>
                                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontWeight: 600 }}>4.5/5 · 217 reviews</span>
                            </div>

                            <p style={{
                                fontSize: '13px', lineHeight: 1.6,
                                color: 'rgba(255,255,255,0.8)', margin: '0 0 12px',
                                fontStyle: 'italic',
                            }}>
                                &ldquo;AIR genuinely impressed me. The conversation felt natural, the follow-ups were sharp, and I got feedback faster than any human process.&rdquo;
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{
                                    width: '28px', height: '28px', borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'white', fontWeight: 700, fontSize: '10px',
                                }}>SK</div>
                                <div>
                                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>Sarah K.</div>
                                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)' }}>Senior Software Engineer</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Clean CTA on white */}
                    <div style={{
                        background: 'white',
                        padding: '44px 40px',
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        {/* Illustration */}
                        <div style={{
                            width: '72px', height: '72px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, rgba(245,87,51,0.08), rgba(245,87,51,0.02))',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginBottom: '20px',
                        }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <line x1="12" y1="19" x2="12" y2="23" />
                                <line x1="8" y1="23" x2="16" y2="23" />
                            </svg>
                        </div>

                        <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px', color: 'var(--text-primary)' }}>
                            Start a Live Interview
                        </h3>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px', lineHeight: 1.6, maxWidth: '280px' }}>
                            Enter your name and email on the next page. You&apos;ll be talking to AIR in under a minute.
                        </p>

                        {/* Key benefits */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', alignItems: 'flex-start', width: '100%', maxWidth: '280px' }}>
                            {[
                                'No signup or credit card',
                                'Real product, not a recording',
                                'Takes less than 60 seconds',
                            ].map((item) => (
                                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/products/air/try"
                            className="btn btn--primary btn--lg"
                            onClick={() => {
                                sessionStorage.setItem('air_exit_shown', '1');
                            }}
                            style={{ width: '100%', maxWidth: '300px', fontSize: '15px' }}
                        >
                            Start My Interview →
                        </Link>

                        <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '12px' }}>
                            By continuing, you agree to Braintrust&apos;s{' '}
                            <Link href="/terms" style={{ color: 'var(--text-tertiary)', textDecoration: 'underline' }}>Terms</Link> and{' '}
                            <Link href="/privacy-policy" style={{ color: 'var(--text-tertiary)', textDecoration: 'underline' }}>Privacy Policy</Link>.
                        </p>

                        {/* Trust logos */}
                        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--color-gray-100)', width: '100%' }}>
                            <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-tertiary)', marginBottom: '8px' }}>
                                Trusted by recruiting teams at
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                                {['Nike', 'Goldman Sachs', 'Porsche', 'Atlassian', 'Deloitte'].map(name => (
                                    <span key={name} style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gray-300)', letterSpacing: '0.02em' }}>{name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
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
