'use client';

import { useState, useEffect, useRef } from 'react';

const candidates = [
    { initials: 'RT', name: 'Rashad T.', role: 'Sr. Software Developer', location: 'Toronto, CA', color: '#7c3aed', bgColor: '#ede9fe', score: 97 },
    { initials: 'AH', name: 'Amanda H.', role: 'Full Stack Engineer', location: 'Austin, TX', color: '#059669', bgColor: '#d1fae5', score: 94 },
    { initials: 'BM', name: 'Breno M.', role: 'Sr. Software Engineer', location: 'Vancouver, CA', color: '#7c3aed', bgColor: '#ede9fe', score: 93 },
    { initials: 'IM', name: 'Irving M.', role: 'Front-End Engineer', location: 'Los Mochos, MX', color: '#d97706', bgColor: '#fde68a', score: 91 },
];

const phases = [
    { label: 'Posting job to network', sub: 'Broadcasting to 2M+ professionals' },
    { label: 'AI scanning talent pool', sub: 'Evaluating 1,400+ candidates' },
    { label: 'Top matches surfaced', sub: 'Ranked by skills & fit score' },
    { label: 'Ready for review', sub: '4 candidates shortlisted' },
];

const stats = [
    { value: '5 days', label: 'Avg. time to hire', color: '#7c3aed' },
    { value: '2M+', label: 'Vetted professionals', color: 'var(--color-primary)' },
    { value: '95%', label: 'Hire satisfaction', color: '#059669' },
];

export default function MarketplaceProductVisual() {
    // phase cycles 0→1→2→3→0... every 1.8s
    const [phase, setPhase] = useState(0);
    // which candidate is currently being highlighted
    const [activeCandidate, setActiveCandidate] = useState(-1);
    // candidates confirmed as matched
    const [matched, setMatched] = useState<number[]>([]);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const stepRef = useRef(0);

    useEffect(() => {
        // full cycle: phase 0 (1.2s) → scan each candidate (0.9s × 4) → phase 3 (1.6s) → reset
        const runCycle = () => {
            // Reset
            setPhase(0);
            setActiveCandidate(-1);
            setMatched([]);
            stepRef.current = 0;

            const t1 = setTimeout(() => {
                setPhase(1); // scanning starts
            }, 1200);

            // Scan each candidate sequentially
            const scanTimings = [1200, 2100, 3000, 3900];
            const matchTimings = [1900, 2800, 3700, 4600];

            const scans = scanTimings.map((t, i) =>
                setTimeout(() => setActiveCandidate(i), t)
            );
            const matches = matchTimings.map((t, i) =>
                setTimeout(() => {
                    setMatched(prev => [...prev, i]);
                    if (i === candidates.length - 1) {
                        setActiveCandidate(-1);
                        setPhase(2);
                    }
                }, t)
            );

            const t2 = setTimeout(() => setPhase(3), 5400);

            return () => {
                clearTimeout(t1);
                clearTimeout(t2);
                scans.forEach(clearTimeout);
                matches.forEach(clearTimeout);
            };
        };

        let cleanup = runCycle();
        intervalRef.current = setInterval(() => {
            if (cleanup) cleanup();
            cleanup = runCycle();
        }, 7200);

        return () => {
            if (cleanup) cleanup();
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <>
            <style>{`
                @keyframes mpvSpin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes mpvPulse {
                    0%   { transform: scale(1);   opacity: 0.55; }
                    100% { transform: scale(1.7);  opacity: 0; }
                }
                @keyframes mpvFadeIn {
                    from { opacity: 0; transform: translateY(4px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes mpvBarFill {
                    from { width: 0%; }
                    to   { width: var(--target-width); }
                }
                .mpv-card {
                    background: white;
                    border-radius: 10px;
                    padding: 10px 10px 8px;
                    border: 1.5px solid rgba(0,0,0,0.07);
                    position: relative;
                    transition: border-color 300ms ease, box-shadow 300ms ease;
                    overflow: hidden;
                }
                .mpv-card.scanning {
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 3px rgba(240,106,62,0.1);
                }
                .mpv-card.matched {
                    border-color: #059669;
                    box-shadow: 0 0 0 3px rgba(5,150,105,0.08);
                }
                .mpv-scan-pulse {
                    position: absolute;
                    inset: -4px;
                    border-radius: 13px;
                    border: 1.5px solid var(--color-primary);
                    animation: mpvPulse 0.9s ease-out infinite;
                    pointer-events: none;
                }
                .mpv-score {
                    animation: mpvFadeIn 300ms ease forwards;
                }
                .mpv-phase-label {
                    animation: mpvFadeIn 250ms ease forwards;
                }
            `}</style>

            <div style={{
                background: '#fff',
                borderRadius: 'var(--radius-2xl)',
                padding: '20px',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
                {/* Top bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round">
                            <circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                        </svg>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#1e293b' }}>Braintrust</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#94a3b8' }} />
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#94a3b8' }} />
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, color: 'white' }}>G</div>
                    </div>
                </div>

                {/* AI status bar */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '8px 12px', borderRadius: '8px',
                    background: phase >= 2 ? 'rgba(5,150,105,0.06)' : 'var(--color-primary-50)',
                    border: `1px solid ${phase >= 2 ? 'rgba(5,150,105,0.2)' : 'rgba(240,106,62,0.2)'}`,
                    marginBottom: '12px',
                    transition: 'all 400ms ease',
                }}>
                    {phase < 2 ? (
                        <svg style={{ animation: 'mpvSpin 1.2s linear infinite', flexShrink: 0 }} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                    ) : (
                        <svg style={{ flexShrink: 0 }} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    )}
                    <div className="mpv-phase-label" key={phase} style={{ fontSize: '10px', lineHeight: 1.3 }}>
                        <strong style={{ color: phase >= 2 ? '#059669' : 'var(--color-primary)', fontSize: '10px' }}>
                            {phases[phase].label}
                        </strong>
                        <span style={{ color: '#94a3b8', marginLeft: '6px', fontSize: '9px' }}>{phases[phase].sub}</span>
                    </div>
                </div>

                {/* Candidate grid */}
                <div style={{
                    background: '#faf5ff',
                    borderRadius: '12px',
                    padding: '12px',
                    marginBottom: '10px',
                    border: '1px solid rgba(139,92,246,0.08)',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42" /></svg>
                        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1e293b' }}>
                            {phase < 3 ? 'Your top candidates' : `${matched.length} matches ready`}
                        </span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                        {candidates.map((c, i) => {
                            const isScanning = activeCandidate === i;
                            const isMatched = matched.includes(i);
                            return (
                                <div
                                    key={c.initials}
                                    className={`mpv-card ${isScanning ? 'scanning' : ''} ${isMatched ? 'matched' : ''}`}
                                >
                                    {isScanning && <div className="mpv-scan-pulse" />}
                                    <div style={{
                                        width: '28px', height: '28px', borderRadius: '50%',
                                        background: isMatched ? '#d1fae5' : c.bgColor,
                                        color: isMatched ? '#059669' : c.color,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '8px', fontWeight: 800, margin: '0 auto 5px',
                                        border: `1.5px solid ${isMatched ? '#059669' : c.color}`,
                                        transition: 'all 300ms ease',
                                    }}>
                                        {isMatched ? (
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        ) : c.initials}
                                    </div>
                                    <div style={{ fontSize: '7.5px', fontWeight: 600, color: '#1e293b', textAlign: 'center', lineHeight: 1.2, marginBottom: '2px' }}>{c.name}</div>
                                    <div style={{ fontSize: '6.5px', color: '#94a3b8', textAlign: 'center', marginBottom: '4px' }}>{c.location}</div>
                                    {isMatched ? (
                                        <div className="mpv-score" style={{
                                            fontSize: '8px', fontWeight: 800,
                                            color: '#059669',
                                            background: '#d1fae5',
                                            borderRadius: '4px', padding: '2px 0',
                                            textAlign: 'center',
                                        }}>
                                            {c.score}% match
                                        </div>
                                    ) : (
                                        <div style={{
                                            fontSize: '7px', fontWeight: 700, color: isScanning ? 'var(--color-primary)' : '#94a3b8',
                                            background: isScanning ? 'var(--color-primary-50)' : '#f1f5f9',
                                            borderRadius: '4px', padding: '2px 0',
                                            textAlign: 'center',
                                            transition: 'all 250ms ease',
                                        }}>
                                            {isScanning ? 'Scanning...' : 'Pending'}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ROI stats */}
                <div style={{ display: 'flex', gap: '8px' }}>
                    {stats.map((s, i) => (
                        <div key={s.label} style={{
                            flex: 1, background: '#f8fafc', borderRadius: '8px',
                            padding: '9px 10px', border: '1px solid rgba(0,0,0,0.05)',
                        }}>
                            <div style={{ fontSize: '15px', fontWeight: 800, color: s.color, lineHeight: 1, paddingBottom: '0.1em' }}>{s.value}</div>
                            <div style={{ fontSize: '8px', color: '#94a3b8', marginTop: '3px', lineHeight: 1.3 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
