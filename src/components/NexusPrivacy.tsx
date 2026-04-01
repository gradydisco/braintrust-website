import React from 'react';
import Link from 'next/link';

export default function NexusPrivacy() {
    return (
        <>
            {/* Dark Section: How Nexus Handles Your Data */}
            <section className="section" style={{ background: '#111111', color: '#ffffff', padding: '96px 0' }}>
                <div className="container container--narrow">
                    <h2 style={{ fontSize: '40px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '24px', color: '#fff' }}>How Nexus Handles Your Data</h2>
                    <p style={{ fontSize: '18px', color: '#a1a1aa', maxWidth: '640px', lineHeight: 1.6, marginBottom: '64px' }}>
                        Nexus connects to the tools you already use to build automated workflows. Transparency about how we access, use, and protect your data across every integration is fundamental to how we operate.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {/* Box 1 */}
                        <div style={{ background: '#1c1c1c', border: '1px solid #333', borderRadius: '16px', padding: '32px' }}>
                            <div style={{ display: 'inline-flex', background: '#3b2f5b', color: '#c4b5fd', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '100px', marginBottom: '32px' }}>Authentication & Identity</div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
                                <div>
                                    <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>What We Access</h4>
                                    <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.5, margin: 0 }}>Basic profile information (name, email) from connected identity providers when you sign in or link an account.</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Why We Need It</h4>
                                    <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.5, margin: 0 }}>To securely authenticate your identity and connect your accounts to Nexus workflows without storing passwords.</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>What We Don't Do</h4>
                                    <p style={{ fontSize: '16px', color: '#999', lineHeight: 1.5, margin: 0 }}>We never sell profile data, use it for ad targeting, or share it beyond what's needed to operate your account.</p>
                                </div>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div style={{ background: '#1c1c1c', border: '1px solid #333', borderRadius: '16px', padding: '32px' }}>
                            <div style={{ display: 'inline-flex', background: '#3b2f5b', color: '#c4b5fd', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '100px', marginBottom: '32px' }}>Calendar & Scheduling</div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
                                <div>
                                    <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>What We Access</h4>
                                    <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.5, margin: 0 }}>Availability and time-slot data from connected calendar services to coordinate scheduling within workflows.</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Why We Need It</h4>
                                    <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.5, margin: 0 }}>To automate scheduling tasks like interview coordination, meeting booking, and availability checks across your team.</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>What We Don't Do</h4>
                                    <p style={{ fontSize: '16px', color: '#999', lineHeight: 1.5, margin: 0 }}>We never read event content beyond free/busy status, share calendar data with third parties, or use it for advertising.</p>
                                </div>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div style={{ background: '#1c1c1c', border: '1px solid #333', borderRadius: '16px', padding: '32px' }}>
                            <div style={{ display: 'inline-flex', background: '#3b2f5b', color: '#c4b5fd', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '100px', marginBottom: '32px' }}>Email & Messaging</div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
                                <div>
                                    <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>What We Access</h4>
                                    <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.5, margin: 0 }}>The ability to send messages on your behalf through connected email or messaging providers as part of automated workflows.</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Why We Need It</h4>
                                    <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.5, margin: 0 }}>To send automated communications — outreach, confirmations, follow-ups — from your own accounts as defined by your workflows.</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>What We Don't Do</h4>
                                    <p style={{ fontSize: '16px', color: '#999', lineHeight: 1.5, margin: 0 }}>We never read your inbox, scan existing messages, or store message content beyond delivery confirmation.</p>
                                </div>
                            </div>
                        </div>

                        {/* Box 4 */}
                        <div style={{ background: '#1c1c1c', border: '1px solid #333', borderRadius: '16px', padding: '32px' }}>
                            <div style={{ display: 'inline-flex', background: '#3b2f5b', color: '#c4b5fd', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '100px', marginBottom: '32px' }}>CRM & Business Tools</div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
                                <div>
                                    <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>What We Access</h4>
                                    <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.5, margin: 0 }}>Records and fields from connected CRM, ATS, or productivity tools that your workflows are configured to read or update.</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Why We Need It</h4>
                                    <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.5, margin: 0 }}>To sync data between systems, automate record updates, and trigger workflow actions based on changes in your tools.</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>What We Don't Do</h4>
                                    <p style={{ fontSize: '16px', color: '#999', lineHeight: 1.5, margin: 0 }}>We never access data outside the scopes you've authorized, use your business data for our own purposes, or share it with other customers.</p>
                                </div>
                            </div>
                        </div>

                        {/* API Compliance Box */}
                        <div style={{ background: 'linear-gradient(145deg, rgba(59,47,91,0.2) 0%, rgba(28,28,28,0.5) 100%)', border: '1px solid #3b2f5b', borderRadius: '16px', padding: '32px', display: 'flex', gap: '16px', marginTop: '16px' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            <div>
                                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>Third-Party API Compliance</h4>
                                <p style={{ fontSize: '16px', color: '#c4b5fd', lineHeight: 1.6, margin: 0 }}>
                                    Nexus's use and transfer of information received from third-party APIs adheres to each provider's data policies and terms of service. Where providers mandate specific data use restrictions — such as the <a href="https://developers.google.com/terms/api-services-user-data-policy" style={{ color: '#fff', textDecoration: 'underline' }}>Google API Services User Data Policy</a> including <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" style={{ color: '#fff', textDecoration: 'underline' }}>Limited Use requirements</a> — Nexus fully complies. We apply the same principle of minimum-access, purpose-limited data use to every integration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Light Section: Your Privacy Matters */}
            <section className="section" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.05)', padding: '96px 0' }}>
                <div className="container container--narrow">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'flex-start' }}>
                        <div>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '24px' }}>
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                <polyline points="9 12 11 14 15 10"></polyline>
                            </svg>
                            <h2 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.02em', color: '#1a1a1a', marginBottom: '24px' }}>Your Privacy Matters</h2>
                            <p style={{ fontSize: '18px', color: '#666', lineHeight: 1.6, marginBottom: '32px' }}>
                                We're committed to being transparent about how Nexus handles your data across every integration. Our data practices comply with each provider's API policies, including applicable limited-use and data-handling requirements.
                            </p>
                            
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    'We only request the minimum permissions needed for your workflows to function',
                                    'We never sell, transfer, or use your data for advertising',
                                    'We never allow humans to read your data unless you give explicit consent',
                                    'You can disconnect any integration and revoke access at any time'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        <span style={{ fontSize: '16px', color: '#1a1a1a', lineHeight: 1.5 }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '56px' }}>
                            <Link href="/nexus/privacy-policy" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: '#1a1a1a', color: '#ffffff', borderRadius: '12px', textDecoration: 'none', fontWeight: 600, fontSize: '16px', transition: 'transform 0.2s ease', border: '1px solid #1a1a1a' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                    Read our Privacy Policy
                                </div>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                            </Link>
                            
                            <Link href="/nexus/terms" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: '#f8fafc', color: '#1a1a1a', borderRadius: '12px', textDecoration: 'none', fontWeight: 600, fontSize: '16px', border: '1px solid rgba(0,0,0,0.06)', transition: 'background 0.2s ease' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                    Terms of Service
                                </div>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                            </Link>
                            
                            <div style={{ marginTop: '24px', fontSize: '15px', color: '#666' }}>
                                Questions? Contact<br/>
                                <a href="mailto:privacy@usebraintrust.com" style={{ color: '#8b5cf6', textDecoration: 'none', fontWeight: 500 }}>privacy@usebraintrust.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
