'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RevealSection from '@/components/RevealSection';

/* ============================================
   CONNECTOR FORM MODAL
   ============================================ */
function ConnectorModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '',
        linkedin: '', phone: '',
        intent: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Connector form submitted:', formData);
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
                    maxWidth: '520px', width: '100%',
                    maxHeight: '90vh', overflowY: 'auto',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
                    position: 'relative',
                }}
            >
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
                        <h3 style={{ marginBottom: 'var(--space-2)' }}>You&apos;re in</h3>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0 }}>
                            Thank you for joining the Connector Program. Our team will reach out within 2 business days with your personalized referral link and intro templates.
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
                        <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-1)' }}>Join the Connector Program</h3>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                            Earn up to $100K in BTRST tokens for every company you refer that hires on Braintrust.
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                                <FormInput label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                <FormInput label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                            </div>
                            <FormInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                            <FormInput label="LinkedIn Profile" name="linkedin" value={formData.linkedin} onChange={handleChange} required placeholder="https://linkedin.com/in/..." />
                            <FormInput label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Optional" />
                            <div>
                                <label
                                    htmlFor="intent"
                                    style={{
                                        display: 'block', fontSize: '12px', fontWeight: 600,
                                        color: 'var(--text-secondary)', marginBottom: '4px',
                                    }}
                                >
                                    What best describes you? <span style={{ color: 'var(--color-primary)' }}>*</span>
                                </label>
                                <select
                                    id="intent"
                                    name="intent"
                                    value={formData.intent}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%', padding: '10px 12px',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--color-gray-200)',
                                        fontSize: 'var(--text-sm)',
                                        outline: 'none', background: 'var(--color-white)',
                                        cursor: 'pointer',
                                        color: formData.intent ? 'var(--text-primary)' : 'var(--text-tertiary)',
                                    }}
                                >
                                    <option value="" disabled>Select an option</option>
                                    <option value="one_client">I have one potential client to refer</option>
                                    <option value="multiple_clients">I have multiple potential clients to refer</option>
                                    <option value="bring_contract">I want to bring my current contract to Braintrust</option>
                                    <option value="learn_more">I&apos;d like to learn more before referring</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn--primary" style={{ width: '100%', marginTop: 'var(--space-2)' }}>
                                Join the Program
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
   FAQ ACCORDION
   ============================================ */
function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            style={{
                borderBottom: '1px solid var(--color-gray-100)',
                padding: 'var(--space-4) 0',
            }}
        >
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: 'var(--space-4)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left', padding: 0,
                    fontSize: 'var(--text-base)', fontWeight: 600,
                    color: 'var(--text-primary)',
                }}
                aria-expanded={open}
            >
                {question}
                <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    style={{
                        flexShrink: 0, transition: 'transform 200ms',
                        transform: open ? 'rotate(180deg)' : 'rotate(0)',
                    }}
                >
                    <path d="M4 6l4 4 4-4" />
                </svg>
            </button>
            <div
                style={{
                    overflow: 'hidden',
                    maxHeight: open ? '400px' : '0',
                    transition: 'max-height 300ms ease, opacity 200ms',
                    opacity: open ? 1 : 0,
                }}
            >
                <p style={{
                    fontSize: 'var(--text-sm)', color: 'var(--text-secondary)',
                    margin: 0, paddingTop: 'var(--space-3)',
                    lineHeight: 1.6,
                }}>
                    {answer}
                </p>
            </div>
        </div>
    );
}

/* ============================================
   ICONS
   ============================================ */
const icons = {
    account: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    ),
    connect: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
    ),
    reward: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
    ),
    clients: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 00-2-2H10a2 2 0 00-2 2v16" />
        </svg>
    ),
    talent: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    ),
    community: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    ),
};

/* ============================================
   FAQ DATA
   ============================================ */
const faqs = [
    {
        question: 'Who can refer companies to Braintrust?',
        answer: 'Anyone with a Braintrust account can refer companies. Whether you\'re a talent member, a partner, or a community member, you can earn BTRST by making introductions to companies that need to hire.',
    },
    {
        question: 'What types of companies can I refer?',
        answer: 'Any company looking to hire tech or professional talent — from fast-growing startups and Web3 projects to Fortune 500 enterprises. Braintrust works with companies of all sizes that are hiring at scale.',
    },
    {
        question: 'Who are the best contacts to introduce?',
        answer: 'The best referrals are warm introductions to hiring decision-makers: VPs of Engineering, CTOs, Product leaders, or Talent Acquisition / HR heads. The closer you are to the decision-maker, the more likely the referral will convert.',
    },
    {
        question: 'How and when do I get paid?',
        answer: 'You earn 2% of the total amount of every invoice paid by the referred client, up to $100,000 in BTRST tokens per company. Tokens are issued after the referred client pays their invoices and are distributed to your Braintrust wallet.',
    },
    {
        question: 'Is there a limit on how many companies I can refer?',
        answer: 'No. There is no cap on the number of companies you can refer. Each qualifying referral earns its own reward, so the more you refer, the more you earn.',
    },
    {
        question: 'What if the company is already talking to Braintrust?',
        answer: 'To qualify, the company must be a new introduction that is not already in the Braintrust pipeline or actively engaged. If you\'re unsure, submit your referral and our team will confirm eligibility.',
    },
];

/* ============================================
   REWARD TIERS DATA
   ============================================ */
const tiers = [
    {
        icon: icons.clients,
        label: 'Refer a Client',
        reward: 'Up to $100K in BTRST',
        desc: 'Earn 2% of every invoice paid by your referred client, up to $100,000 in BTRST tokens per company.',
        details: [
            'Tracked via personalized referral link',
            'Payout after client invoices are paid',
            'No limit on number of referrals',
        ],
        highlight: true,
    },
    {
        icon: icons.talent,
        label: 'Refer Talent',
        reward: '100 BTRST',
        desc: 'When the professional you referred completes their first engagement on the marketplace.',
        details: [
            'Both you and the referred talent earn',
            'Referral credited automatically',
            'Available worldwide',
        ],
        highlight: false,
    },
    {
        icon: icons.community,
        label: 'Community Contributor',
        reward: '50 BTRST',
        desc: 'Earn for governance participation, community contributions, and ecosystem development.',
        details: [
            'Governance voting participation',
            'Community mentorship',
            'Content contributions',
        ],
        highlight: false,
    },
];

/* ============================================
   MAIN PAGE COMPONENT
   ============================================ */
export default function ReferEarnMarketplace() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            {/* ====== HERO ====== */}
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Talent Marketplace', href: '/products/talent-marketplace' },
                        { label: 'Connector Program' },
                    ]} />
                    <div className="hero__content">
                        <div className="badge">Connector Program</div>
                        <h1>Refer companies.<br /><span className="text-gradient">Earn BTRST.</span></h1>
                        <p>Earn up to $100K in BTRST tokens every time you help a company hire on Braintrust. Over 900 connectors have already made an impact.</p>
                        <div className="hero__actions">
                            <button
                                className="btn btn--primary btn--lg"
                                onClick={() => setModalOpen(true)}
                            >
                                Join the Connector Program
                            </button>
                            <a
                                href="https://app.usebraintrust.com/auth/sign_up/goals/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--secondary btn--lg"
                            >
                                Sign Up as Talent
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== HOW IT WORKS ====== */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container container--narrow">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">How It Works</div>
                            <h2>Three steps to start earning</h2>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: 'var(--space-8)',
                            marginTop: 'var(--space-8)',
                        }}>
                            {[
                                {
                                    step: '01', icon: icons.account,
                                    title: 'Create your account',
                                    desc: 'Sign up for a free Braintrust account and get your personalized referral link from your dashboard.',
                                },
                                {
                                    step: '02', icon: icons.connect,
                                    title: 'Make introductions',
                                    desc: 'Use readymade email templates to introduce companies in your network who are looking to hire.',
                                },
                                {
                                    step: '03', icon: icons.reward,
                                    title: 'Earn BTRST',
                                    desc: 'When your referral hires on Braintrust, you earn 2% of every invoice in BTRST tokens — up to $100K per company.',
                                },
                            ].map((item) => (
                                <div key={item.step} style={{ textAlign: 'center' }}>
                                    <div style={{
                                        width: '56px', height: '56px', borderRadius: '50%',
                                        background: 'var(--color-primary-50)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto var(--space-4)',
                                        color: 'var(--color-primary)',
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div style={{
                                        fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' as const,
                                        letterSpacing: '0.08em', color: 'var(--color-primary)',
                                        marginBottom: 'var(--space-2)',
                                    }}>Step {item.step}</div>
                                    <h4 style={{ marginBottom: 'var(--space-2)' }}>{item.title}</h4>
                                    <p style={{ fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== REWARD TIERS ====== */}
            <section className="section" style={{ background: '#f8f9fb' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Rewards</div>
                            <h2>Incentive structure</h2>
                            <p>Transparent, predictable rewards for growing the Braintrust ecosystem.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                            {tiers.map((tier) => (
                                <div
                                    key={tier.label}
                                    style={{
                                        padding: 'var(--space-8)',
                                        borderRadius: 'var(--radius-xl)',
                                        border: `1.5px solid ${tier.highlight ? 'var(--color-primary)' : 'var(--color-gray-100)'}`,
                                        background: tier.highlight
                                            ? 'linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-white) 100%)'
                                            : 'var(--color-white)',
                                        boxShadow: tier.highlight ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                                        position: 'relative',
                                    }}
                                >
                                    {tier.highlight && (
                                        <span style={{
                                            position: 'absolute', top: '-10px', left: 'var(--space-6)',
                                            padding: '4px 14px', borderRadius: 'var(--radius-full)',
                                            background: 'var(--color-primary)', color: 'white',
                                            fontSize: '11px', fontWeight: 700,
                                            letterSpacing: '0.05em', textTransform: 'uppercase',
                                        }}>
                                            Most Popular
                                        </span>
                                    )}
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)' }}>
                                        <div style={{
                                            width: '48px', height: '48px', borderRadius: '50%',
                                            background: 'var(--color-primary-50)', color: 'var(--color-primary)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            flexShrink: 0,
                                        }}>{tier.icon}</div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)', flexWrap: 'wrap' }}>
                                                <h3 style={{ fontSize: 'var(--text-xl)', margin: 0 }}>{tier.label}</h3>
                                                <span style={{
                                                    padding: '4px 14px', borderRadius: 'var(--radius-full)',
                                                    background: 'rgba(34,197,94,0.1)', color: '#16a34a',
                                                    fontWeight: 700, fontSize: '12px',
                                                }}>{tier.reward}</span>
                                            </div>
                                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>{tier.desc}</p>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                                {tier.details.map((detail) => (
                                                    <div key={detail} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== SOCIAL PROOF ====== */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Trusted By</div>
                            <h2>Companies hired through our Connector Program</h2>
                            <p>From fast-growing startups to Fortune 500 enterprises — connectors have helped companies of all sizes hire on Braintrust.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                            gap: 'var(--space-4)',
                            marginTop: 'var(--space-6)',
                        }}>
                            {['Nextdoor', 'Teladoc', 'ConsenSys', 'Goldman Sachs', 'Nike', 'Pacific Life'].map((name) => (
                                <div
                                    key={name}
                                    style={{
                                        padding: 'var(--space-5) var(--space-4)',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '1px solid var(--color-gray-100)',
                                        background: 'var(--color-white)',
                                        textAlign: 'center',
                                        fontSize: 'var(--text-sm)',
                                        fontWeight: 600,
                                        color: 'var(--text-secondary)',
                                    }}
                                >
                                    {name}
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== BEST CONTACTS SECTION ====== */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container container--narrow">
                    <RevealSection>
                        <div style={{
                            padding: 'var(--space-8)',
                            borderRadius: 'var(--radius-xl)',
                            background: 'var(--color-gray-50)',
                            border: '1px solid var(--color-gray-100)',
                        }}>
                            <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>Who should you introduce?</h3>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                The best referrals are warm introductions to hiring decision-makers. Focus on these roles:
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-3)' }}>
                                {[
                                    { title: 'Engineering Leaders', role: 'VP of Engineering, CTO' },
                                    { title: 'Product Leaders', role: 'VP of Product, CPO' },
                                    { title: 'Talent Acquisition', role: 'Head of TA, HR Director' },
                                ].map(item => (
                                    <div key={item.title} style={{
                                        padding: 'var(--space-4)',
                                        borderRadius: 'var(--radius-lg)',
                                        background: 'var(--color-white)',
                                        border: '1px solid var(--color-gray-100)',
                                    }}>
                                        <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: '2px' }}>{item.title}</div>
                                        <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{item.role}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== FAQ ====== */}
            <section className="section" style={{ background: '#f8f9fb' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">FAQ</div>
                            <h2>Connector Program FAQ</h2>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{ marginTop: 'var(--space-4)' }}>
                            {faqs.map((faq) => (
                                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== TOKEN NOTE ====== */}
            <section className="section">
                <div className="container container--narrow">
                    <RevealSection>
                        <div style={{
                            padding: 'var(--space-6) var(--space-8)',
                            borderRadius: 'var(--radius-lg)',
                            background: 'var(--color-gray-50)',
                            border: '1px solid var(--color-gray-100)',
                        }}>
                            <h4 style={{ marginBottom: 'var(--space-2)' }}>About BTRST Tokens</h4>
                            <p style={{ fontSize: 'var(--text-sm)', margin: 0, color: 'var(--text-secondary)' }}>
                                BTRST is the governance token of the Braintrust network (ERC-20 on Ethereum). Token rewards are used for governance participation, community voting, and ecosystem development. BTRST tokens do not represent ownership or equity claims. Braintrust does not promote BTRST as a speculative investment.{' '}
                                <Link href="/token/what-is-btrst" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Learn more about BTRST</Link>
                            </p>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== BOTTOM CTA ====== */}
            <section className="section">
                <div className="container">
                    <div className="cta-section">
                        <h2>Ready to start referring?</h2>
                        <p>Join over 900 connectors who have already made an impact in their community.</p>
                        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button
                                className="btn btn--white btn--lg"
                                onClick={() => setModalOpen(true)}
                            >
                                Join the Connector Program
                            </button>
                            <Link href="/contact" className="btn btn--secondary btn--lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                                Ask a Question
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connector Modal */}
            <ConnectorModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}
