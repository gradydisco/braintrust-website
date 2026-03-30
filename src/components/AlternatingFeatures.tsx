'use client';

import React from 'react';
import Link from 'next/link';
import RevealSection from './RevealSection';

export default function AlternatingFeatures() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '120px', marginTop: '40px' }}>
            
            {/* Feature 1: AI Matching */}
            <RevealSection>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                    <div style={{ paddingRight: '20px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>Powerful AI candidate matching</h2>
                        <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '32px' }}>
                            Braintrust's AI powered matching engine scans our network of 2M+ talent members globally to match you with the top five candidates for your role instantly.
                        </p>
                        <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '40px' }}>
                            Rank, search, sort, and receive real-time feedback to ensure you're getting the best talent for the job.
                        </p>
                        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                            <Link href="/book-demo" className="btn btn--secondary" style={{ border: '2px solid #000', color: '#000', padding: '12px 24px', borderRadius: '100px', fontWeight: 700 }}>
                                Get matched
                            </Link>
                            <Link href="/products/air" style={{ fontWeight: 700, textDecoration: 'underline', color: 'var(--text-primary)' }}>Learn more</Link>
                        </div>
                    </div>
                    {/* UI Mockup Graphic */}
                    <div style={{ 
                        background: '#e2f4c3', borderRadius: '24px', padding: '48px', position: 'relative', 
                        display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '400px'
                    }}>
                        <div style={{
                            background: '#fff', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                            padding: '24px', width: '380px', position: 'relative', zIndex: 2
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontSize: '11px', color: '#6b7280', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-primary)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                Match summary provided by Braintrust AIR
                            </div>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid #f3f4f6' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f3f4f6', overflow: 'hidden' }}>
                                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '16px' }}>Ilsa Hahn <span style={{color: '#10b981', display: 'inline-block', marginLeft: '4px'}}>✓</span></div>
                                    <div style={{ display: 'inline-block', background: '#34d399', color: 'white', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '100px', marginTop: '4px' }}>Great match</div>
                                </div>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {[
                                    '10 years of experience',
                                    'Selectively applying to jobs right now',
                                    'Top candidate for multiple past job positions',
                                    'Strong proficiency in product management',
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '12.5px', color: '#4b5563', lineHeight: 1.4, alignItems: 'center' }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Background globe/bubbles visual abstraction */}
                        <div style={{ position: 'absolute', top: '50%', left: '20%', transform: 'translateY(-50%)', zIndex: 1 }}>
                            <div style={{ width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)', position: 'absolute', top: '-125px', left: '-125px' }} />
                        </div>
                    </div>
                </div>
            </RevealSection>

            {/* Feature 2: AI Screening */}
            <RevealSection>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                    <div style={{ 
                        background: '#fef1a6', borderRadius: '24px', padding: '40px', position: 'relative', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'
                    }}>
                        <div style={{
                            background: '#fff', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                            padding: '24px', width: '100%', maxWidth: '440px', border: '1px solid #f3f4f6'
                        }}>
                             <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f3f4f6', overflow: 'hidden' }}>
                                    <img src="https://i.pravatar.cc/150?img=11" alt="Profile" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '14px' }}>Rana McKeating <span style={{color: '#10b981', display: 'inline-block', marginLeft: '4px'}}>✓</span></div>
                                    <div style={{ fontSize: '12px', color: '#6b7280' }}>Senior Front-End Engineer</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                <div style={{ background: '#ecfccb', color: '#4d7c0f', fontWeight: 800, fontSize: '20px', padding: '8px 12px', borderRadius: '8px', lineHeight: 1 }}>
                                    4.8<span style={{ fontSize: '12px', color: '#65a30d', display: 'block', marginTop: '2px', fontWeight: 600 }}>/5.0</span>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#3b82f6" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                        AI Interview summary
                                    </div>
                                    <p style={{ fontSize: '11px', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
                                        Rana exhibits exemplary communication skills, demonstrates profound expertise in front-end development, and effectively articulates their professional experiences...
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f3f4f6' }}>
                                <button style={{ background: '#f3f4f6', color: '#374151', border: 'none', padding: '8px 16px', borderRadius: '6px', fontSize: '12px', fontWeight: 600 }}>Advance to final round</button>
                                <button style={{ background: '#4f46e5', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', fontSize: '12px', fontWeight: 600 }}>Make offer</button>
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingLeft: '20px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>Save time with async AI screening interviews</h2>
                        <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '40px' }}>
                            AI-driven video screenings will review, grade, and provide detailed scorecards for each candidate, saving you time and enhancing decision accuracy. AI takes over the first screening call so you can focus your time on the most promising candidates.
                        </p>
                        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                            <Link href="/book-demo" className="btn btn--secondary" style={{ border: '2px solid #000', color: '#000', padding: '12px 24px', borderRadius: '100px', fontWeight: 700 }}>
                                Start for free
                            </Link>
                            <Link href="/products/air" style={{ fontWeight: 700, textDecoration: 'underline', color: 'var(--text-primary)' }}>Learn more</Link>
                        </div>
                    </div>
                </div>
            </RevealSection>

            {/* Feature 3: Compliance & Onboarding */}
            <RevealSection>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                    <div style={{ paddingRight: '20px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>Hire & onboard contractors worldwide, compliantly</h2>
                        <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '40px' }}>
                            We provide EOR services in over 150 countries and manage background checks, onboarding, worker classification and compliance for all employment types: independent contractors, full-time employees, and contract-to-hire.
                        </p>
                        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                            <Link href="/book-demo" className="btn btn--secondary" style={{ border: '2px solid #000', color: '#000', padding: '12px 24px', borderRadius: '100px', fontWeight: 700 }}>
                                Hire today
                            </Link>
                        </div>
                    </div>
                    {/* UI Mockup Graphic */}
                    <div style={{ 
                        background: '#dcfce7', borderRadius: '24px', padding: '40px', position: 'relative', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px', overflow: 'hidden'
                    }}>
                        <div style={{
                            background: '#fff', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                            padding: '0', width: '100%', maxWidth: '440px', position: 'relative', marginTop: '60px' // offset to match screenshot framing
                        }}>
                             <div style={{ display: 'flex', padding: '16px 20px', borderBottom: '1px solid #f3f4f6', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }} />
                                        Creating offer <span style={{ color: '#9ca3af', fontWeight: 400 }}>for Senior Growth Marketer</span>
                                    </div>
                                </div>
                                <button style={{ background: '#10b981', color: 'white', border: 'none', padding: '6px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: 600 }}>Send offer</button>
                             </div>
                             <div style={{ padding: '24px' }}>
                                <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '20px' }}>Make sure these details are right before submitting your offer</div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
                                    {/* Left summary */}
                                    <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '16px', border: '1px solid #f1f5f9' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e2e8f0', marginBottom: '12px', overflow: 'hidden' }}>
                                            <img src="https://i.pravatar.cc/150?img=12" alt="Profile" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                        </div>
                                        <div style={{ fontSize: '12px', fontWeight: 700, marginBottom: '2px' }}>Jasmine Russell</div>
                                        <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '12px' }}>Saint Paul, MN, USA</div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, color: '#334155' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="#10b981" stroke="none"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4" stroke="white" strokeWidth="2"/></svg> Onboarded</div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, color: '#334155' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="#10b981" stroke="none"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4" stroke="white" strokeWidth="2"/></svg> Approved talent</div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, color: '#334155' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="#10b981" stroke="none"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4" stroke="white" strokeWidth="2"/></svg> Vetted</div>
                                        </div>
                                    </div>
                                    {/* Right inputs */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        <div style={{ fontSize: '12px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ color: '#64748b' }}>Sending to</span><span style={{ fontWeight: 600 }}>Jasmine Russell</span>
                                        </div>
                                        <div style={{ fontSize: '12px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ color: '#64748b' }}>Pay</span><span style={{ fontWeight: 600 }}>$100 per hour</span>
                                        </div>
                                        <div style={{ fontSize: '12px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ color: '#64748b' }}>Commitment</span><span style={{ fontWeight: 600 }}>40 hours per week</span>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </RevealSection>

            {/* Feature 4: Payroll */}
            <RevealSection>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                    <div style={{ 
                        background: '#e0f2fe', borderRadius: '24px', padding: '40px', position: 'relative', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'
                    }}>
                        {/* Diagram Container */}
                        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{
                                background: '#fff', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                                padding: '16px 32px', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 2
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                                <span style={{ fontSize: '20px', fontWeight: 800 }}>Braintrust</span>
                            </div>
                            
                            {/* Dotted lines going down */}
                            <div style={{ position: 'absolute', top: '50%', width: '200px', height: '80px', borderTop: 'none', borderBottom: '2px dashed #94a3b8', borderLeft: '2px dashed #94a3b8', borderRight: '2px dashed #94a3b8', zIndex: 1, marginTop: '-10px' }} />
                            <div style={{ width: '2px', height: '40px', borderLeft: '2px dashed #94a3b8', zIndex: 1 }} />
                            
                            {/* Down arrow circle */}
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff', border: '2px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, marginTop: '-20px', marginBottom: '40px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                            </div>

                            <div style={{ display: 'flex', gap: '40px', zIndex: 2, position: 'relative', width: '280px', justifyContent: 'space-between' }}>
                                {['£ GBP', '$ USD', '€ EUR'].map(currency => (
                                    <div key={currency} style={{
                                        background: '#fff', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                                        padding: '12px 16px', fontWeight: 700, fontSize: '14px', border: '1px solid #f1f5f9',
                                        display: 'flex', alignItems: 'center', gap: '8px'
                                    }}>
                                        <span style={{ color: '#eab308', opacity: 0.8 }}>{currency.charAt(0)}</span>
                                        {currency.substring(2)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingLeft: '20px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>Pay anyone, anywhere</h2>
                        <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '40px' }}>
                            Pay your global contractors in their local currency with our domestic and international payroll, invoice and expense management services; complete with automated reminders, tracking, and much more.
                        </p>
                        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                            <Link href="/book-demo" className="btn btn--secondary" style={{ border: '2px solid #000', color: '#000', padding: '12px 24px', borderRadius: '100px', fontWeight: 700 }}>
                                Sign up for free
                            </Link>
                        </div>
                    </div>
                </div>
            </RevealSection>
        </div>
    );
}
