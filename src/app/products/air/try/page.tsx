'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TryAIRForm from '@/components/TryAIRForm';

export default function TryAIR() {
    const router = useRouter();
    const [, setSubmitted] = useState(false);

    const handleSuccess = () => {
        setSubmitted(true);
        router.push('/products/air/demos');
    };

    return (
        <>
            <section className="hero hero--centered" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
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

                    <div style={{ marginTop: 'var(--space-10)' }}>
                        <TryAIRForm onSuccess={handleSuccess} />
                    </div>

                    {/* Social Proof */}
                    <div style={{
                        marginTop: 'var(--space-12)',
                        textAlign: 'center',
                    }}>
                        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-3)' }}>
                            Trusted by recruiting teams at
                        </p>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: 'var(--space-6)',
                        }}>
                            {['Nike', 'Goldman Sachs', 'Porsche', 'Atlassian', 'Deloitte'].map(name => (
                                <span key={name} style={{
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 700,
                                    color: 'var(--color-gray-300)',
                                    letterSpacing: '0.04em',
                                    textTransform: 'uppercase',
                                }}>
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
