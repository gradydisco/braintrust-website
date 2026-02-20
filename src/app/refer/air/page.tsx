'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RevealSection from '@/components/RevealSection';

/* ============================================
   REFERRAL MODAL COMPONENT
   ============================================ */
function ReferralModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        yourFirstName: '', yourLastName: '', yourEmail: '',
        refFirstName: '', refLastName: '', refEmail: '',
        refJobTitle: '', refLinkedIn: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // API-ready: send formData to Salesforce endpoint
        console.log('Referral submitted:', formData);
        setSubmitted(true);
    };

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed', inset: 0, zIndex: 9999,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
                padding: 'var(--space-4)',
            }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div
                style={{
                    background: 'var(--color-white)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-8)',
                    maxWidth: '560px', width: '100%',
                    maxHeight: '90vh', overflowY: 'auto',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
                    position: 'relative',
                }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute', top: '16px', right: '16px',
                        background: 'none', border: 'none', cursor: 'pointer',
                        fontSize: '20px', color: 'var(--text-tertiary)',
                        width: '32px', height: '32px', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                    aria-label="Close"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M2 2l12 12M14 2L2 14" />
                    </svg>
                </button>

                {submitted ? (
                    <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
                        <div style={{
                            width: '56px', height: '56px', borderRadius: '50%',
                            background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto var(--space-4)', fontSize: '24px',
                        }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </div>
                        <h3 style={{ marginBottom: 'var(--space-2)' }}>Referral submitted</h3>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0 }}>
                            Thank you for your referral. Our team will review and reach out within 2 business days.
                        </p>
                        <button
                            onClick={() => { setSubmitted(false); onClose(); }}
                            className="btn btn--primary"
                            style={{ marginTop: 'var(--space-6)' }}
                        >
                            Done
                        </button>
                    </div>
                ) : (
                    <>
                        <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-1)' }}>Refer a Client</h3>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                            Earn $1,000 USD for every referred company that becomes a customer.
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                            {/* Your Info */}
                            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                                <legend style={{
                                    fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                                    letterSpacing: '0.08em', color: 'var(--text-tertiary)',
                                    marginBottom: 'var(--space-3)',
                                }}>Your Information</legend>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                                    <FormInput label="First Name" name="yourFirstName" value={formData.yourFirstName} onChange={handleChange} required />
                                    <FormInput label="Last Name" name="yourLastName" value={formData.yourLastName} onChange={handleChange} required />
                                </div>
                                <div style={{ marginTop: 'var(--space-3)' }}>
                                    <FormInput label="Email" name="yourEmail" type="email" value={formData.yourEmail} onChange={handleChange} required />
                                </div>
                            </fieldset>

                            {/* Referral Info */}
                            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                                <legend style={{
                                    fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                                    letterSpacing: '0.08em', color: 'var(--text-tertiary)',
                                    marginBottom: 'var(--space-3)',
                                }}>Referral Information</legend>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                                    <FormInput label="First Name" name="refFirstName" value={formData.refFirstName} onChange={handleChange} required />
                                    <FormInput label="Last Name" name="refLastName" value={formData.refLastName} onChange={handleChange} required />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
                                    <FormInput label="Email" name="refEmail" type="email" value={formData.refEmail} onChange={handleChange} required />
                                    <FormInput label="Job Title" name="refJobTitle" value={formData.refJobTitle} onChange={handleChange} required />
                                    <FormInput label="LinkedIn URL" name="refLinkedIn" value={formData.refLinkedIn} onChange={handleChange} placeholder="https://linkedin.com/in/..." />
                                </div>
                            </fieldset>

                            <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
                                Submit Referral
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

function FormInput({ label, name, type = 'text', value, onChange, required, placeholder }: {
    label: string; name: string; type?: string; value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean; placeholder?: string;
}) {
    return (
        <div>
            <label
                htmlFor={name}
                style={{
                    display: 'block', fontSize: '12px', fontWeight: 600,
                    color: 'var(--text-secondary)', marginBottom: '4px',
                }}
            >
                {label}{required && <span style={{ color: 'var(--color-primary)' }}> *</span>}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                style={{
                    width: '100%', padding: '10px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-gray-200)',
                    fontSize: 'var(--text-sm)',
                    outline: 'none', transition: 'border-color 200ms',
                    background: 'var(--color-white)',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--color-gray-200)'; }}
            />
        </div>
    );
}

/* ============================================
   LINKEDIN SHARE HELPER
   ============================================ */
const linkedInShareUrl = (() => {
    const text = encodeURIComponent(
        `I just experienced a live AI-powered interview with Braintrust AIR.\n\nPretty wild to see how fast first-round screening can be automated.\n\nWorth checking out: https://www.usebraintrust.com/air`
    );
    return `https://www.linkedin.com/feed/?shareActive=true&text=${text}`;
})();

/* ============================================
   ICONS (monochrome SVGs)
   ============================================ */
const icons = {
    marketplace: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
    ),
    g2: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    ),
    linkedin: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    ),
    referral: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
    ),
};

/* ============================================
   REFERRAL ACTION CARDS DATA
   ============================================ */
const G2_URL = 'https://www.g2.com/contributor/braintrust-25-amazonx?secure%5Bpage_id%5D=braintrust-25-amazonx&secure%5Brewards%5D=true&secure%5Btoken%5D=3615f08f5c535c9dd3a1b43dff9fcf15975d592e3be4cb7e29a407341cd557b7';

/* ============================================
   MAIN PAGE COMPONENT
   ============================================ */
export default function ReferEarnAIR() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Products', href: '/products' },
                        { label: 'AIR', href: '/products/air' },
                        { label: 'Refer & Earn' },
                    ]} />
                    <div className="hero__content">
                        <div className="badge">AIR Referral Program</div>
                        <h1>Turn your interview<br /><span className="text-gradient">into opportunity.</span></h1>
                        <p>Choose your path below to start earning or explore opportunities in our network.</p>
                    </div>
                </div>
            </section>

            {/* ====== 4 REFERRAL CARDS ====== */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

                        {/* 1) JOIN THE MARKETPLACE — PRIMARY */}
                        <RevealSection>
                            <div style={{
                                padding: 'var(--space-10)',
                                borderRadius: 'var(--radius-xl)',
                                border: '1.5px solid var(--color-primary)',
                                background: 'linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-white) 100%)',
                                boxShadow: 'var(--shadow-lg)',
                                position: 'relative',
                            }}>
                                <span style={{
                                    position: 'absolute', top: '-10px', left: 'var(--space-6)',
                                    padding: '4px 14px', borderRadius: 'var(--radius-full)',
                                    background: 'var(--color-primary)', color: 'white',
                                    fontSize: '11px', fontWeight: 700,
                                    letterSpacing: '0.05em', textTransform: 'uppercase',
                                }}>
                                    Recommended
                                </span>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)' }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '50%',
                                        background: 'var(--color-primary-50)', color: 'var(--color-primary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>{icons.marketplace}</div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>Join the Marketplace</h3>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                            Unlock paid opportunities on the Braintrust network. Join 2M+ vetted professionals working with Fortune 500 companies — with zero platform fees.
                                        </p>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: 'var(--space-5)' }}>
                                            {['Unlock paid opportunities', 'Join 2M+ vetted professionals', 'No platform fees — ever'].map(item => (
                                                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                        <a
                                            href="https://app.usebraintrust.com/auth/sign_up/goals/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn--primary btn--lg"
                                        >
                                            Join the Marketplace
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </RevealSection>

                        {/* 2) WRITE A G2 REVIEW */}
                        <RevealSection delay={100}>
                            <div style={{
                                padding: 'var(--space-8)',
                                borderRadius: 'var(--radius-xl)',
                                border: '1px solid var(--color-gray-100)',
                                background: 'var(--color-white)',
                                boxShadow: 'var(--shadow-sm)',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)' }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '50%',
                                        background: 'var(--color-primary-50)', color: 'var(--color-primary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>{icons.g2}</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)', flexWrap: 'wrap' }}>
                                            <h3 style={{ fontSize: 'var(--text-xl)', margin: 0 }}>Write a G2 Review</h3>
                                            <span style={{
                                                padding: '3px 10px', borderRadius: 'var(--radius-full)',
                                                background: 'rgba(34,197,94,0.1)', color: '#16a34a',
                                                fontSize: '12px', fontWeight: 700,
                                            }}>Earn $25 USD</span>
                                        </div>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                            Help others discover AIR by sharing your honest experience on G2. Reviews are verified and contribute to our community reputation.
                                        </p>
                                        <a
                                            href={G2_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn--secondary"
                                        >
                                            Leave a Review on G2
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </RevealSection>

                        {/* 3) SHARE ON LINKEDIN */}
                        <RevealSection delay={200}>
                            <div style={{
                                padding: 'var(--space-8)',
                                borderRadius: 'var(--radius-xl)',
                                border: '1px solid var(--color-gray-100)',
                                background: 'var(--color-white)',
                                boxShadow: 'var(--shadow-sm)',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)' }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '50%',
                                        background: 'var(--color-primary-50)', color: 'var(--color-primary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>{icons.linkedin}</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)', flexWrap: 'wrap' }}>
                                            <h3 style={{ fontSize: 'var(--text-xl)', margin: 0 }}>Share on LinkedIn</h3>
                                            <span style={{
                                                padding: '3px 10px', borderRadius: 'var(--radius-full)',
                                                background: 'rgba(34,197,94,0.1)', color: '#16a34a',
                                                fontSize: '12px', fontWeight: 700,
                                            }}>Earn $10 USD</span>
                                        </div>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                            Post about your experience with Braintrust AIR on LinkedIn. Tag @Braintrust and use #BraintrustAIR to be featured in our community highlights.
                                        </p>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: 'var(--space-4)', fontSize: '12px', color: 'var(--text-tertiary)' }}>
                                            <span>Must have 100+ LinkedIn connections</span>
                                            <span>Available in US, Canada, UK, EU, Mexico, Brazil, India, Japan, South Korea, Singapore</span>
                                        </div>
                                        <a
                                            href={linkedInShareUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn--secondary"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.open(linkedInShareUrl, '_blank', 'width=600,height=600');
                                            }}
                                        >
                                            Share on LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </RevealSection>

                        {/* 4) REFER A CLIENT */}
                        <RevealSection delay={300}>
                            <div style={{
                                padding: 'var(--space-8)',
                                borderRadius: 'var(--radius-xl)',
                                border: '1px solid var(--color-gray-100)',
                                background: 'var(--color-white)',
                                boxShadow: 'var(--shadow-sm)',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)' }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '50%',
                                        background: 'var(--color-primary-50)', color: 'var(--color-primary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>{icons.referral}</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)', flexWrap: 'wrap' }}>
                                            <h3 style={{ fontSize: 'var(--text-xl)', margin: 0 }}>Refer a Client</h3>
                                            <span style={{
                                                padding: '3px 10px', borderRadius: 'var(--radius-full)',
                                                background: 'rgba(34,197,94,0.1)', color: '#16a34a',
                                                fontSize: '12px', fontWeight: 700,
                                            }}>Earn $1,000 USD</span>
                                        </div>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                            Know a company that could benefit from AI-powered recruiting? Submit a warm introduction and earn $1,000 for every referred company that becomes a customer.
                                        </p>
                                        <button
                                            className="btn btn--secondary"
                                            onClick={() => setModalOpen(true)}
                                        >
                                            Refer a Company
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* ====== REWARD TERMS ====== */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container container--narrow">
                    <RevealSection>
                        <div style={{
                            padding: 'var(--space-6) var(--space-8)',
                            borderRadius: 'var(--radius-lg)',
                            background: 'var(--color-gray-50)',
                            border: '1px solid var(--color-gray-100)',
                        }}>
                            <h4 style={{ marginBottom: 'var(--space-3)', fontSize: 'var(--text-base)' }}>Referral Program Terms</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: '3px' }}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                                    <span>Client referrals must be a genuine, warm introduction. The referred company must not already be in the Braintrust database or actively engaged.</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: '3px' }}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                                    <span>The $1,000 referral bonus is paid after Braintrust receives the client&apos;s first invoice payment and the client remains active for at least 30 days.</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: '3px' }}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                                    <span>LinkedIn share and G2 review rewards are subject to review and approval at Braintrust&apos;s sole discretion. Rewards are paid via gift card.</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: '3px' }}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                                    <span>Braintrust reserves the right to modify or discontinue the referral program at any time.</span>
                                </div>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== BOTTOM CTA ====== */}
            <section className="section">
                <div className="container">
                    <div className="cta-section">
                        <h2>Questions about the referral program?</h2>
                        <p>Reach out to our team — we&apos;re happy to help.</p>
                        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/contact" className="btn btn--white btn--lg">Contact Us</Link>
                            <Link href="/products/air" className="btn btn--secondary btn--lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                                Learn About AIR
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Referral Modal */}
            <ReferralModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}
