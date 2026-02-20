'use client';

import { useState, FormEvent } from 'react';
import styles from './page.module.css';

export default function BookDemo() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        companySize: '',
        productInterest: [] as string[],
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            // TODO: Integrate with Salesforce API route
            // TODO: Send Slack notification to reps
            // TODO: Connect to automated booking system
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, type: 'demo_request' }),
            });

            if (res.ok) {
                setSubmitted(true);
            }
        } catch {
            // Fallback — show success and handle async
            setSubmitted(true);
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <section className="hero hero--centered" style={{ minHeight: '70vh' }}>
                <div className="container">
                    <div className="hero__content">
                        <div style={{ fontSize: '4rem', marginBottom: 'var(--space-6)' }}>✅</div>
                        <h1>Thank you!</h1>
                        <p style={{ fontSize: 'var(--text-xl)' }}>We&apos;ve received your request. A member of our team will reach out within 1 business day to schedule your demo.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className={`hero hero--centered ${styles.hero}`}>
                <div className="container">
                    <div className="hero__content">
                        <div className="badge">Book a Demo</div>
                        <h1>See Braintrust<br /><span className="text-gradient">in action.</span></h1>
                        <p>Get a personalized walkthrough of the platform and learn how Braintrust can transform your hiring.</p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container container--narrow">
                    <form onSubmit={handleSubmit} className={styles.form} id="book-demo-form">
                        <div className={styles.formGrid}>
                            <div className="form-group">
                                <label htmlFor="firstName" className="form-label">First Name *</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="form-input"
                                    required
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName" className="form-label">Last Name *</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-input"
                                    required
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Work Email *</label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className={styles.formGrid}>
                            <div className="form-group">
                                <label htmlFor="company" className="form-label">Company *</label>
                                <input
                                    type="text"
                                    id="company"
                                    className="form-input"
                                    required
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="jobTitle" className="form-label">Job Title</label>
                                <input
                                    type="text"
                                    id="jobTitle"
                                    className="form-input"
                                    value={formData.jobTitle}
                                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="companySize" className="form-label">Company Size</label>
                            <select
                                id="companySize"
                                className="form-input form-select"
                                value={formData.companySize}
                                onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                            >
                                <option value="">Select...</option>
                                <option value="1-50">1-50 employees</option>
                                <option value="51-200">51-200 employees</option>
                                <option value="201-1000">201-1,000 employees</option>
                                <option value="1001-5000">1,001-5,000 employees</option>
                                <option value="5001+">5,001+ employees</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Which product(s) are you interested in?</label>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
                                {[
                                    { value: 'talent-marketplace', label: 'Talent Marketplace', desc: 'Access 2M+ vetted professionals' },
                                    { value: 'air', label: 'AIR | AI Recruiter', desc: 'AI-powered screening, interviews & assessments' },
                                    { value: 'nexus', label: 'Nexus', desc: 'Custom AI agents for operational work' },
                                ].map((product) => (
                                    <label
                                        key={product.value}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '10px',
                                            padding: '12px 14px',
                                            borderRadius: '10px',
                                            border: `1.5px solid ${formData.productInterest.includes(product.value) ? 'var(--color-primary)' : 'var(--color-gray-200)'}`,
                                            background: formData.productInterest.includes(product.value) ? 'rgba(245, 87, 51, 0.04)' : 'white',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={formData.productInterest.includes(product.value)}
                                            onChange={() => {
                                                const updated = formData.productInterest.includes(product.value)
                                                    ? formData.productInterest.filter(p => p !== product.value)
                                                    : [...formData.productInterest, product.value];
                                                setFormData({ ...formData, productInterest: updated });
                                            }}
                                            style={{ marginTop: '3px', accentColor: 'var(--color-primary)' }}
                                        />
                                        <div>
                                            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{product.label}</div>
                                            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '2px' }}>{product.desc}</div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Tell us about your needs</label>
                            <textarea
                                id="message"
                                className="form-input form-textarea"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="What are you looking to solve? How many roles are you hiring for?"
                            />
                        </div>

                        <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%' }} disabled={submitting}>
                            {submitting ? 'Submitting...' : 'Request a Demo'}
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
