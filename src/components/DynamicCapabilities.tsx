'use client';

import { useState, useRef, useEffect } from 'react';
import RevealSection from './RevealSection';

const PRIMARY = '#f55733';

// Extracted Capabilities Data
const CAPABILITIES = [
    { title: 'Conversational Voice Interviews', desc: 'Real-time, adaptive voice interviews evaluating communication, depth, and fit — at any volume, 24/7.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>), stat: { label: 'interview capacity', val: '1000s/day' } },
    { title: 'Resume Scoring & Matching', desc: 'AI-powered scoring ranks every applicant by skills, experience, and role fit — no resume goes unseen.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>), stat: { label: 'applicants screened', val: '100%' } },
    { title: 'Semantic Candidate Search', desc: 'Context-aware matching surfaces candidates traditional keyword searches miss — including skills adjacency and career trajectory.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>), stat: { label: 'more qualified matches', val: '3x' } },
    { title: 'Customizable Scoring Frameworks', desc: 'Weight technical skills, communication, domain expertise, and behavioral signals — tailored rubrics for every role.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>), stat: { label: 'scoring rubrics', val: 'Custom' } },
    { title: '16+ Languages Supported', desc: 'Conduct interviews and assessments natively in 16+ languages — built for global teams and international pools.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>), stat: { label: 'native languages', val: '16+' } },
    { title: 'Lower Attrition, Better Hires', desc: 'Deeper, more consistent evaluation leads to stronger matches — reducing first-year attrition and improving retention.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>), stat: { label: 'less first-year attrition', val: '35%' } },
    { title: 'Measurable Cost Savings', desc: 'Replace multiple point solutions with one platform. Clients typically see 10-20x return on their AIR investment.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>), stat: { label: 'typical ROI', val: '10-20x' } },
    { title: 'Enterprise Scale & Integrations', desc: 'Native ATS integrations with Greenhouse, Lever, Workday, and 50+ more. Scale hiring without scaling headcount.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>), stat: { label: 'ATS integrations', val: '50+' } },
];

const SIGNALS = [
    { title: 'Resume Match Score', desc: 'AI ranking of resume relevance to job requirements. Skills extraction, keyword density, and experience mapping.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></svg>), color: '#3b82f6' },
    { title: 'AI Interview Score', desc: 'Composite score across all dimensions. Response depth, clarity, structured thinking, and on-topic accuracy.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>), color: '#f55733' },
    { title: 'Behavioral Analysis', desc: 'Signals for problem-solving, collaboration, and adaptability. Mapped against 200+ behavioral competency indicators.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 017 4.5v0A2.5 2.5 0 014.5 7v0A2.5 2.5 0 017 9.5V12a2 2 0 002 2h6a2 2 0 002-2V9.5A2.5 2.5 0 0119.5 7v0A2.5 2.5 0 0117 4.5v0A2.5 2.5 0 0114.5 2h-5z" /><line x1="9" y1="12" x2="9" y2="21" /><line x1="15" y1="12" x2="15" y2="21" /><line x1="5" y1="21" x2="19" y2="21" /></svg>), color: '#10b981' },
    { title: 'Communication Rating', desc: 'Clarity, structure, and articulation. Evaluates sentence coherence, vocabulary range, pacing, and filler word frequency.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>), color: '#8b5cf6' },
    { title: 'Technical Assessment', desc: 'Role-specific knowledge and applied skill evaluation. Domain question accuracy and practical framing.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>), color: '#0ea5e9' },
    { title: 'Intent & Motivation', desc: 'Signals of genuine interest and role-fit alignment. Evaluates research depth, enthusiasm indicators, and career context.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>), color: '#f59e0b' },
    { title: 'Language Proficiency', desc: 'Fluency assessment in 16+ languages. Evaluates grammar accuracy, vocabulary richness, and native-speaker proximity.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>), color: '#ec4899' },
    { title: 'Fraud & Identity Check', desc: 'Multi-signal verification to ensure interview integrity. IP consistency, device fingerprinting, and session continuity.', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>), color: '#14b8a6' },
];

export default function DynamicCapabilities() {
    const [activeTab, setActiveTab] = useState<'capabilities' | 'signals'>('capabilities');
    
    return (
        <section className="section" style={{ 
            backgroundColor: '#0a192f', 
            paddingTop: 'var(--space-20)',
            paddingBottom: 'var(--space-20)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Ambient glows */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(245,87,51,0.1) 0%, rgba(10,25,47,0) 70%)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(10,25,47,0) 70%)', zIndex: 0 }} />
            
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <RevealSection>
                    <div className="section-header" style={{ marginBottom: '40px' }}>
                        <div className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.15)' }}>The complete AI engine</div>
                        <h2 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Power and precision.</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
                            Everything you need to source, screen, and select top talent at scale.
                        </p>
                    </div>
                </RevealSection>
                
                <RevealSection delay={150}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-10)' }}>
                        <div style={{ 
                            background: 'rgba(0,0,0,0.3)', 
                            borderRadius: '100px', 
                            padding: '6px',
                            display: 'inline-flex',
                            border: '1px solid rgba(255,255,255,0.08)',
                            boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.2)'
                        }}>
                            <button
                                onClick={() => setActiveTab('capabilities')}
                                style={{
                                    all: 'unset', padding: '10px 24px', cursor: 'pointer',
                                    borderRadius: '100px', fontSize: '14px', fontWeight: 600,
                                    color: activeTab === 'capabilities' ? 'var(--color-white)' : 'rgba(255,255,255,0.5)',
                                    background: activeTab === 'capabilities' ? 'rgba(255,255,255,0.1)' : 'transparent',
                                    transition: 'all 0.3s ease',
                                    boxShadow: activeTab === 'capabilities' ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                                }}
                            >
                                Platform Capabilities
                            </button>
                            <button
                                onClick={() => setActiveTab('signals')}
                                style={{
                                    all: 'unset', padding: '10px 24px', cursor: 'pointer',
                                    borderRadius: '100px', fontSize: '14px', fontWeight: 600,
                                    color: activeTab === 'signals' ? 'var(--color-white)' : 'rgba(255,255,255,0.5)',
                                    background: activeTab === 'signals' ? 'rgba(255,255,255,0.1)' : 'transparent',
                                    transition: 'all 0.3s ease',
                                    boxShadow: activeTab === 'signals' ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                                }}
                            >
                                Recruiter Output Signals
                            </button>
                        </div>
                    </div>
                </RevealSection>
                
                <div style={{ position: 'relative', minHeight: '600px' }}>
                    {/* Capabilities Grid */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%',
                        opacity: activeTab === 'capabilities' ? 1 : 0,
                        transform: activeTab === 'capabilities' ? 'translateY(0)' : 'translateY(20px)',
                        pointerEvents: activeTab === 'capabilities' ? 'auto' : 'none',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px',
                    }}>
                        {CAPABILITIES.map((cap, i) => (
                            <div key={i} className="dyn-card" style={{
                                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column'
                            }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(245,87,51,0.1)', color: PRIMARY, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                    {cap.icon}
                                </div>
                                <h3 style={{ fontSize: '18px', color: 'white', marginBottom: '10px' }}>{cap.title}</h3>
                                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, flex: 1, marginBottom: '20px' }}>{cap.desc}</p>
                                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px', marginTop: 'auto' }}>
                                    <span style={{ fontSize: '16px', fontWeight: 700, color: PRIMARY }}>{cap.stat.val}</span>
                                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginLeft: '8px' }}>{cap.stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Signals Grid */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%',
                        opacity: activeTab === 'signals' ? 1 : 0,
                        transform: activeTab === 'signals' ? 'translateY(0)' : 'translateY(20px)',
                        pointerEvents: activeTab === 'signals' ? 'auto' : 'none',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px',
                    }}>
                         {SIGNALS.map((sig, i) => (
                            <div key={i} className="dyn-card" style={{
                                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column'
                            }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${sig.color}15`, color: sig.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                    {sig.icon}
                                </div>
                                <h3 style={{ fontSize: '18px', color: 'white', marginBottom: '10px' }}>{sig.title}</h3>
                                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, flex: 1 }}>{sig.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .dyn-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.06) !important; border-color: rgba(255,255,255,0.12) !important; box-shadow: 0 12px 30px rgba(0,0,0,0.3); }
            `}</style>
        </section>
    );
}
