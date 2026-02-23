'use client';

import { useState, useEffect, useRef } from 'react';

const PRIMARY = '#f55733';
const INTERVAL = 3800; // ms per step

// ─── Tiny SVG icons (stroke-based, 20×20 viewBox) ─────────────────────────────
const Icon = {
    sliders: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
        </svg>
    ),
    bolt: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
    ),
    mic: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
        </svg>
    ),
    check_circle: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    ),
    layout: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
        </svg>
    ),
    // Output card icons
    doc: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></svg>),
    brain: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 017 4.5v0A2.5 2.5 0 014.5 7v0A2.5 2.5 0 017 9.5V12a2 2 0 002 2h6a2 2 0 002-2V9.5A2.5 2.5 0 0119.5 7v0A2.5 2.5 0 0117 4.5v0A2.5 2.5 0 0114.5 2h-5z" /><line x1="9" y1="12" x2="9" y2="21" /><line x1="15" y1="12" x2="15" y2="21" /><line x1="5" y1="21" x2="19" y2="21" /></svg>),
    chat: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>),
    code: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>),
    target: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>),
    globe: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>),
    shield: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>),
};

// ─── Step card mockups ────────────────────────────────────────────────────────

function CardShell({ children }: { children: React.ReactNode }) {
    return (
        <div style={{
            background: 'white',
            border: '1px solid rgba(50,50,93,0.09)',
            borderRadius: '14px',
            padding: '24px',
            boxShadow: '0 4px 24px rgba(50,50,93,0.07)',
            maxWidth: '820px',
            margin: '0 auto',
            minHeight: '200px',
        }}>
            {children}
        </div>
    );
}

function Pill({ children, color = '#f55733' }: { children: React.ReactNode; color?: string }) {
    return (
        <span style={{
            display: 'inline-block',
            fontSize: '10px', fontWeight: 700,
            color, background: color + '14',
            border: `1px solid ${color}28`,
            padding: '2px 8px', borderRadius: '100px',
            letterSpacing: '0.03em',
        }}>{children}</span>
    );
}

function Row({ label, done = false }: { label: string; done?: boolean }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 0', borderBottom: '1px solid rgba(50,50,93,0.05)' }}>
            <div style={{
                width: '16px', height: '16px', borderRadius: '50%', flexShrink: 0,
                background: done ? '#10b981' : 'rgba(50,50,93,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
                {done && <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>}
            </div>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)', flex: 1 }}>{label}</span>
        </div>
    );
}

function Step1Card() {
    return (
        <CardShell>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>Interview Configuration</div>
                    <div style={{ marginBottom: '12px' }}>
                        <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '6px' }}>Role</div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', background: 'rgba(50,50,93,0.04)', padding: '7px 12px', borderRadius: '7px', border: '1px solid rgba(50,50,93,0.08)' }}>Senior Product Manager</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>Interview questions</div>
                        {['Describe your go-to-market approach', 'Walk me through a product failure and what you learned', 'How do you prioritize competing stakeholder needs?'].map((q, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                                <div style={{ width: '14px', height: '14px', borderRadius: '3px', background: PRIMARY + '15', border: `1px solid ${PRIMARY}30`, flexShrink: 0, marginTop: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={PRIMARY} strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{q}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>Scoring Rubric</div>
                    {[
                        { label: 'Strategic Thinking', weight: '30%', color: '#7c3aed' },
                        { label: 'Communication', weight: '25%', color: '#0ea5e9' },
                        { label: 'Customer Empathy', weight: '25%', color: '#10b981' },
                        { label: 'Technical Fluency', weight: '20%', color: '#f59e0b' },
                    ].map(c => (
                        <div key={c.label} style={{ marginBottom: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{c.label}</span>
                                <span style={{ fontSize: '11px', fontWeight: 700, color: c.color }}>{c.weight}</span>
                            </div>
                            <div style={{ height: '4px', background: 'rgba(50,50,93,0.07)', borderRadius: '100px' }}>
                                <div style={{ height: '100%', background: c.color, borderRadius: '100px', width: c.weight, transition: 'width 600ms ease' }} />
                            </div>
                        </div>
                    ))}
                    <div style={{ marginTop: '16px' }}>
                        <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>Assessment depth</div>
                        <div style={{ display: 'flex', gap: '6px' }}>
                            <Pill color="#7c3aed">Conversational</Pill>
                            <Pill color="#0ea5e9">16+ Languages</Pill>
                            <Pill color="#10b981">30 min</Pill>
                        </div>
                    </div>
                </div>
            </div>
        </CardShell>
    );
}

function Step2Card() {
    const stages = [
        { label: 'Application received in ATS', icon: '📋', done: true, time: '9:14 AM' },
        { label: 'AIR trigger fired — candidate matched role criteria', icon: '⚡', done: true, time: '9:14 AM' },
        { label: 'Interview invitation sent to candidate', icon: '✉️', done: true, time: '9:14 AM' },
        { label: 'Candidate link opened', icon: '🔗', done: true, time: '9:31 AM' },
        { label: 'Interview session started', icon: '🎤', done: false, time: 'In progress' },
    ];
    return (
        <CardShell>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>Automation Log</div>
                    {stages.map((s, i) => (
                        <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: s.done ? '#10b981' : 'rgba(50,50,93,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>
                                    {s.done ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg> : <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(50,50,93,0.3)' }} />}
                                </div>
                                {i < stages.length - 1 && <div style={{ width: '1px', height: '14px', background: s.done ? '#10b981' : 'rgba(50,50,93,0.1)', margin: '2px 0' }} />}
                            </div>
                            <div style={{ paddingBottom: '4px' }}>
                                <div style={{ fontSize: '12px', color: s.done ? 'var(--text-primary)' : 'var(--text-tertiary)', fontWeight: s.done ? 500 : 400, lineHeight: 1.3 }}>{s.label}</div>
                                <div style={{ fontSize: '10px', color: s.done ? '#10b981' : 'var(--text-tertiary)', marginTop: '2px', fontWeight: 600 }}>{s.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>Zero Manual Steps</div>
                    {['No scheduling emails', 'No manual invite links', 'No recruiter action required', 'Works 24/7 across time zones', 'ATS status updated automatically'].map((item, i) => (
                        <Row key={i} label={item} done />
                    ))}
                </div>
            </div>
        </CardShell>
    );
}

function Step3Card() {
    const exchange = [
        { role: 'air', text: 'Walk me through a product you launched that didn\'t perform as expected. What did you learn?' },
        { role: 'candidate', text: 'Sure — we launched a B2B onboarding flow that had 40% drop-off within the first week. We\'d over-indexed on feature education and under-invested in the activation moment.' },
        { role: 'air', text: 'Interesting. How did you identify the activation moment, and what did you change?' },
        { role: 'candidate', text: 'We ran session recordings and interviewed churned users. Turns out they needed one "aha" before anything else. We restructured week one around that single outcome.' },
    ];
    return (
        <CardShell>
            <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '24px' }}>
                <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Live Session</div>
                    <div style={{ background: 'rgba(50,50,93,0.03)', border: '1px solid rgba(50,50,93,0.08)', borderRadius: '12px', padding: '16px', textAlign: 'center', marginBottom: '12px' }}>
                        <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg, #667eea, #764ba2)', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>👤</div>
                        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>Sarah M.</div>
                        <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', marginTop: '2px' }}>Senior PM candidate</div>
                        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '3px', alignItems: 'center' }}>
                            {[3, 5, 4, 6, 4, 5, 3, 6, 5, 4, 3, 5].map((h, i) => (
                                <div key={i} style={{ width: '3px', borderRadius: '100px', background: PRIMARY, height: `${h * 2}px`, opacity: 0.6 + (i % 3) * 0.13 }} />
                            ))}
                        </div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '10px', background: '#10b98118', padding: '3px 8px', borderRadius: '100px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                            <span style={{ fontSize: '10px', fontWeight: 700, color: '#10b981' }}>Recording</span>
                        </div>
                    </div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>Real-time signals</div>
                    {[{ label: 'Clarity', pct: 82 }, { label: 'Depth', pct: 76 }, { label: 'Pace', pct: 91 }].map(s => (
                        <div key={s.label} style={{ marginBottom: '7px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                                <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>{s.label}</span>
                                <span style={{ fontSize: '10px', fontWeight: 700, color: PRIMARY }}>{s.pct}</span>
                            </div>
                            <div style={{ height: '3px', background: 'rgba(50,50,93,0.07)', borderRadius: '100px' }}>
                                <div style={{ height: '100%', background: PRIMARY, borderRadius: '100px', width: `${s.pct}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Conversation</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {exchange.map((msg, i) => (
                            <div key={i} style={{
                                display: 'flex', gap: '8px',
                                justifyContent: msg.role === 'air' ? 'flex-start' : 'flex-end',
                            }}>
                                {msg.role === 'air' && (
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: PRIMARY, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                        <span style={{ color: 'white', fontSize: '9px', fontWeight: 800 }}>AI</span>
                                    </div>
                                )}
                                <div style={{
                                    maxWidth: '85%',
                                    background: msg.role === 'air' ? 'rgba(50,50,93,0.04)' : PRIMARY + '12',
                                    border: `1px solid ${msg.role === 'air' ? 'rgba(50,50,93,0.08)' : PRIMARY + '22'}`,
                                    borderRadius: msg.role === 'air' ? '4px 12px 12px 12px' : '12px 4px 12px 12px',
                                    padding: '8px 12px',
                                    fontSize: '12px',
                                    lineHeight: 1.5,
                                    color: 'var(--text-secondary)',
                                }}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CardShell>
    );
}

function Step4Card() {
    const checks = [
        { label: 'AI Interview Score', value: '87 / 100', color: '#10b981', pct: 87 },
        { label: 'Resume–Role Match', value: '91 / 100', color: '#0ea5e9', pct: 91 },
        { label: 'Identity Verification', value: 'Confirmed', color: '#7c3aed', pct: 100 },
        { label: 'IP / Device Validation', value: 'No anomalies', color: '#10b981', pct: 100 },
        { label: 'Fraud Signal Scan', value: 'Clear', color: '#10b981', pct: 100 },
    ];
    return (
        <CardShell>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: '24px' }}>
                <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>Processing Results</div>
                    {checks.map((c, i) => (
                        <div key={i} style={{ marginBottom: '14px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                                <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 500 }}>{c.label}</span>
                                <span style={{ fontSize: '11px', fontWeight: 700, color: c.color, background: c.color + '14', padding: '2px 8px', borderRadius: '100px' }}>{c.value}</span>
                            </div>
                            <div style={{ height: '5px', background: 'rgba(50,50,93,0.07)', borderRadius: '100px' }}>
                                <div style={{ height: '100%', background: c.color, borderRadius: '100px', width: `${c.pct}%`, transition: 'width 600ms ease' }} />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>Verification Summary</div>
                    <div style={{ background: 'rgba(16,185,129,0.04)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                        </div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#10b981', marginBottom: '4px' }}>All Clear</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>Candidate passes all verification checks</div>
                    </div>
                    <div style={{ marginTop: '16px' }}>
                        <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '8px', fontWeight: 600 }}>Signal integrity</div>
                        {['Single authenticated session', 'Consistent location', 'No coaching detected', 'Voice consistent throughout'].map((t, i) => (
                            <Row key={i} label={t} done />
                        ))}
                    </div>
                </div>
            </div>
        </CardShell>
    );
}

function Step5Card() {
    const candidates = [
        { name: 'Sarah M.', role: 'Senior PM', interview: 87, resume: 91, badge: 'Verified', color: '#10b981' },
        { name: 'James T.', role: 'Senior PM', interview: 79, resume: 84, badge: 'Verified', color: '#10b981' },
        { name: 'Priya K.', role: 'Senior PM', interview: 74, resume: 77, badge: 'Verified', color: '#10b981' },
    ];
    const metrics = ['Communication', 'Technical', 'Behavioral', 'Intent', 'Language', 'Leadership'];
    return (
        <CardShell>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: '24px' }}>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Ranked Candidates</div>
                        <Pill color="#7c3aed">3 of 127 reviewed</Pill>
                    </div>
                    {candidates.map((c, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 14px', background: i === 0 ? 'rgba(245,87,51,0.04)' : 'rgba(50,50,93,0.02)', border: `1px solid ${i === 0 ? 'rgba(245,87,51,0.12)' : 'rgba(50,50,93,0.07)'}`, borderRadius: '10px', marginBottom: '8px' }}>
                            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `hsl(${i * 40 + 200}, 60%, 60%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: 'white', flexShrink: 0 }}>{i + 1}</div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>{c.name}</div>
                                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>{c.role}</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '10px', color: 'var(--text-tertiary)' }}>Interview</div>
                                <div style={{ fontSize: '14px', fontWeight: 800, color: PRIMARY }}>{c.interview}</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '10px', color: 'var(--text-tertiary)' }}>Resume</div>
                                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0ea5e9' }}>{c.resume}</div>
                            </div>
                            <div style={{ fontSize: '10px', fontWeight: 700, color: c.color, background: c.color + '14', padding: '2px 7px', borderRadius: '100px' }}>{c.badge}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>Sarah M. — Breakdown</div>
                    {metrics.map((m, i) => {
                        const scores = [87, 82, 91, 78, 95, 74];
                        return (
                            <div key={m} style={{ marginBottom: '8px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{m}</span>
                                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-primary)' }}>{scores[i]}</span>
                                </div>
                                <div style={{ height: '4px', background: 'rgba(50,50,93,0.07)', borderRadius: '100px' }}>
                                    <div style={{ height: '100%', background: `hsl(${200 + i * 20}, 70%, 55%)`, borderRadius: '100px', width: `${scores[i]}%` }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </CardShell>
    );
}

// ─── Step definitions ─────────────────────────────────────────────────────────
const STEPS = [
    { num: '01', title: 'Design Your Interview', micro: 'Customize questions, scoring rubrics, and assessment depth for each unique role.', icon: Icon.sliders, Card: Step1Card },
    { num: '02', title: 'Auto-Send Invitations', micro: 'Candidates are automatically invited from your ATS. Zero manual scheduling.', icon: Icon.bolt, Card: Step2Card },
    { num: '03', title: 'Live AI Interview', micro: 'Candidates complete a conversational voice interview — on their own schedule.', icon: Icon.mic, Card: Step3Card },
    { num: '04', title: 'Score + Verify', micro: 'AI scoring, resume ranking, and multi-point verification ensure signal integrity.', icon: Icon.check_circle, Card: Step4Card },
    { num: '05', title: 'Recruiter Dashboard', micro: 'All insights delivered in one ranked, filterable dashboard — ready to act on.', icon: Icon.layout, Card: Step5Card },
];

// ─── Output cards ─────────────────────────────────────────────────────────────
const OUTPUTS = [
    { icon: Icon.doc, title: 'Resume Match Score', desc: 'AI ranking of resume relevance to job requirements.', detail: 'Skills extraction, keyword density, experience mapping, education fit.' },
    { icon: Icon.mic, title: 'AI Interview Score', desc: 'Composite score across all interview dimensions.', detail: 'Response depth, clarity, structured thinking, on-topic accuracy.' },
    { icon: Icon.brain, title: 'Behavioral Analysis', desc: 'Signals for problem-solving, collaboration, adaptability.', detail: 'Pattern matching against 200+ behavioral competency indicators.' },
    { icon: Icon.chat, title: 'Communication Rating', desc: 'Clarity, structure, and articulation during the interview.', detail: 'Sentence coherence, vocabulary range, pacing, filler word frequency.' },
    { icon: Icon.code, title: 'Technical Assessment', desc: 'Role-specific knowledge and applied skill evaluation.', detail: 'Domain question accuracy, depth of explanation, practical framing.' },
    { icon: Icon.target, title: 'Intent & Motivation', desc: 'Signals of genuine interest and role-fit alignment.', detail: 'Research signals, goal alignment, enthusiasm indicators, career context.' },
    { icon: Icon.globe, title: 'Language Proficiency', desc: 'Fluency assessment in 16+ languages.', detail: 'Grammar accuracy, vocabulary richness, comprehension, native-speaker proximity.' },
    { icon: Icon.shield, title: 'Fraud & Identity Check', desc: 'Multi-signal verification to ensure interview integrity.', detail: 'IP consistency, device fingerprinting, session continuity, voice consistency.' },
];

// ─── Main component ───────────────────────────────────────────────────────────
export default function AIRWorkflow() {
    const [active, setActive] = useState(0);
    const [started, setStarted] = useState(false);
    const [paused, setPaused] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Trigger on scroll into view
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setStarted(true); },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    // Auto-advance
    useEffect(() => {
        if (!started || paused) return;
        const id = setInterval(() => setActive(a => (a + 1) % STEPS.length), INTERVAL);
        return () => clearInterval(id);
    }, [started, paused]);

    const ActiveCard = STEPS[active].Card;

    return (
        <section ref={sectionRef} className="section section--gray">
            <div className="container">
                {/* Header */}
                <div className="section-header" style={{ marginBottom: 'var(--space-12)' }}>
                    <div className="badge">Automated Workflow</div>
                    <h2>From application to<br />ranked, verified talent.</h2>
                    <p>Five fully automated steps. Zero recruiter coordination required until you're ready to interview.</p>
                </div>

                {/* ── Step nodes ─────────────────────────────────────────── */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0',
                        marginBottom: '28px',
                        overflowX: 'auto',
                    }}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    {STEPS.map((step, i) => {
                        const isActive = i === active;
                        const isComplete = i < active;
                        return (
                            <div
                                key={i}
                                style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}
                            >
                                {/* Node button */}
                                <button
                                    onClick={() => { setActive(i); setPaused(true); }}
                                    style={{
                                        all: 'unset',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        flex: 1,
                                        padding: '0 8px',
                                        transition: 'opacity 200ms',
                                    }}
                                >
                                    {/* Circle */}
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        border: `2px solid ${isActive ? PRIMARY : isComplete ? '#10b981' : 'rgba(50,50,93,0.15)'}`,
                                        background: isActive ? PRIMARY : isComplete ? '#10b981' : 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: isActive || isComplete ? 'white' : 'rgba(50,50,93,0.35)',
                                        transition: 'all 350ms ease',
                                        boxShadow: isActive ? `0 4px 16px ${PRIMARY}40` : 'none',
                                        flexShrink: 0,
                                    }}>
                                        {isComplete
                                            ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            : step.icon
                                        }
                                    </div>
                                    {/* Step number + title */}
                                    <div style={{ marginTop: '10px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '10px', fontWeight: 700, color: isActive ? PRIMARY : 'var(--text-tertiary)', letterSpacing: '0.06em', transition: 'color 300ms' }}>{step.num}</div>
                                        <div style={{ fontSize: '12px', fontWeight: isActive ? 700 : 500, color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)', lineHeight: 1.3, transition: 'all 300ms', maxWidth: '90px' }}>{step.title}</div>
                                    </div>
                                    {/* Progress bar */}
                                    <div style={{ marginTop: '8px', width: '40px', height: '3px', background: 'rgba(50,50,93,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                                        <div style={{
                                            height: '100%',
                                            background: isActive ? PRIMARY : isComplete ? '#10b981' : 'transparent',
                                            borderRadius: '100px',
                                            width: isActive ? '100%' : isComplete ? '100%' : '0%',
                                            transition: 'width 300ms ease, background 300ms',
                                        }} />
                                    </div>
                                </button>

                                {/* Connector line between nodes */}
                                {i < STEPS.length - 1 && (
                                    <div style={{
                                        flex: '0 0 24px',
                                        height: '2px',
                                        background: i < active ? '#10b981' : 'rgba(50,50,93,0.12)',
                                        borderRadius: '100px',
                                        transition: 'background 400ms ease',
                                        marginBottom: '40px',
                                    }} />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* ── Active step micro description ───────────────────────── */}
                <div style={{ textAlign: 'center', marginBottom: '20px', minHeight: '24px' }}>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', transition: 'opacity 300ms' }}>
                        {STEPS[active].micro}
                    </p>
                </div>

                {/* ── Step card (animated swap) ───────────────────────────── */}
                <div
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <ActiveCard />
                </div>
            </div>

            {/* ── Output summary panel ──────────────────────────────────── */}
            <div className="container" style={{ marginTop: 'var(--space-16)' }}>
                <div className="section-header" style={{ marginBottom: 'var(--space-10)' }}>
                    <div className="badge">Recruiter Output</div>
                    <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Every signal you need.<br />In one place.</h2>
                    <p>AIR delivers eight independent data points for every candidate — pre-ranked and ready to action.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: '16px',
                }}>
                    {OUTPUTS.map((out, i) => (
                        <div
                            key={i}
                            className="air-output-card"
                            style={{
                                background: 'white',
                                border: '1px solid rgba(50,50,93,0.08)',
                                borderRadius: '12px',
                                padding: '20px',
                                cursor: 'default',
                                transition: 'box-shadow 220ms ease, border-color 220ms ease, transform 220ms ease',
                            }}
                        >
                            <div style={{
                                width: '36px', height: '36px', borderRadius: '9px',
                                background: `hsl(${i * 40 + 10}, 70%, 96%)`,
                                color: `hsl(${i * 40 + 10}, 65%, 42%)`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '12px',
                            }}>
                                {out.icon}
                            </div>
                            <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '5px' }}>{out.title}</div>
                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '10px' }}>{out.desc}</div>
                            <div className="air-output-card__detail" style={{
                                fontSize: '11px', color: 'var(--text-tertiary)', lineHeight: 1.5,
                                borderTop: '1px solid rgba(50,50,93,0.06)',
                                paddingTop: '10px',
                                maxHeight: '0px',
                                overflow: 'hidden',
                                transition: 'max-height 280ms ease, opacity 280ms ease',
                                opacity: 0,
                            }}>
                                {out.detail}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hover styles for output cards */}
            <style>{`
                .air-output-card:hover {
                    box-shadow: 0 6px 24px rgba(50,50,93,0.10);
                    border-color: rgba(245,87,51,0.18) !important;
                    transform: translateY(-2px);
                }
                .air-output-card:hover .air-output-card__detail {
                    max-height: 80px !important;
                    opacity: 1 !important;
                }
            `}</style>
        </section>
    );
}
