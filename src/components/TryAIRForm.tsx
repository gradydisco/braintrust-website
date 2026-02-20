'use client';
import { useState, FormEvent } from 'react';

/**
 * Email capture form for "Try AIR" flow.
 * Captures email → submits to API → signals success for redirect to demo hub.
 */
export default function TryAIRForm({ onSuccess }: { onSuccess: () => void }) {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email || !email.includes('@')) {
            setError('Please enter a valid email address.');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    firstName: email.split('@')[0],
                    type: 'try_air_demo',
                }),
            });

            if (!res.ok) throw new Error('Failed to submit');
            onSuccess();
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            maxWidth: '480px',
            margin: '0 auto',
            padding: 'var(--space-10)',
            borderRadius: 'var(--radius-2xl)',
            background: 'var(--color-white)',
            border: '1px solid var(--color-gray-100)',
            boxShadow: '0 20px 60px rgba(50, 50, 93, 0.12), 0 10px 20px rgba(0, 0, 0, 0.06)',
        }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--color-primary-50)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-4)',
                }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </div>
                <h3 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)' }}>Try AIR for Yourself</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                    See how AI-powered interviews work. Enter your email to access live demo interviews.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 'var(--space-4)' }}>
                    <label htmlFor="try-air-email" style={{
                        display: 'block',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: 'var(--space-2)',
                    }}>
                        Work Email
                    </label>
                    <input
                        id="try-air-email"
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '14px 16px',
                            borderRadius: 'var(--radius-md)',
                            border: `1.5px solid ${error ? 'var(--color-error)' : 'var(--color-gray-200)'}`,
                            fontSize: 'var(--text-base)',
                            outline: 'none',
                            transition: 'border-color 200ms',
                            background: 'var(--color-gray-50)',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                        onBlur={(e) => (e.target.style.borderColor = error ? 'var(--color-error)' : 'var(--color-gray-200)')}
                    />
                    {error && (
                        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-error)', marginTop: 'var(--space-1)' }}>{error}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="btn btn--primary btn--lg"
                    style={{
                        width: '100%',
                        opacity: loading ? 0.7 : 1,
                        pointerEvents: loading ? 'none' : 'auto',
                    }}
                >
                    {loading ? 'Loading...' : 'Access Demo Interviews →'}
                </button>

                <p style={{
                    fontSize: '11px',
                    color: 'var(--text-tertiary)',
                    textAlign: 'center',
                    marginTop: 'var(--space-3)',
                    lineHeight: 1.4,
                }}>
                    By continuing, you agree to Braintrust&apos;s{' '}
                    <a href="/terms" style={{ color: 'var(--text-tertiary)', textDecoration: 'underline' }}>Terms</a>{' '}
                    and{' '}
                    <a href="/privacy" style={{ color: 'var(--text-tertiary)', textDecoration: 'underline' }}>Privacy Policy</a>.
                </p>
            </form>
        </div>
    );
}
