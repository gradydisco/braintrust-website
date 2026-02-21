'use client';

import { useState, useEffect, useRef } from 'react';

const transcriptLines = [
    { speaker: 'AIR', text: 'Walk me through a time you led a complex technical project end to end.' },
    { speaker: 'Jake', text: 'We kicked things off with deep user research to understand exactly what our users needed before writing a line of code...' },
    { speaker: 'AIR', text: 'How did you handle stakeholder disagreements on scope during that project?' },
    { speaker: 'Jake', text: 'I worked closely with stakeholders to prioritize ruthlessly — aligning on outcomes rather than features.' },
];

const criteria = [
    { score: 4.2, label: 'Technical depth & problem-solving', color: '#7c3aed' },
    { score: 3.8, label: 'Stakeholder communication', color: '#f59e0b' },
    { score: 4.5, label: 'Leadership & cross-functional alignment', color: '#059669' },
];

const roiStats = [
    { value: '80%', label: 'Faster screening', color: '#7c3aed' },
    { value: '1000s', label: 'Interviews / day', color: 'var(--color-primary)' },
    { value: '16+', label: 'Languages', color: '#059669' },
];

const CYCLE_MS = 9000;

export default function AIRProductVisual() {
    const [phase, setPhase] = useState<'intro' | 'interview' | 'transcript' | 'scoring' | 'done'>('intro');
    const [visibleLines, setVisibleLines] = useState(0);
    const [visibleCriteria, setVisibleCriteria] = useState(0);
    const [score, setScore] = useState(0);
    const [pulseActive, setPulseActive] = useState(false);
    const timersRef = useRef<NodeJS.Timeout[]>([]);

    const clearAllTimers = () => {
        timersRef.current.forEach(clearTimeout);
        timersRef.current = [];
    };

    const addTimer = (fn: () => void, ms: number) => {
        const id = setTimeout(fn, ms);
        timersRef.current.push(id);
    };

    const runCycle = () => {
        clearAllTimers();
        setPhase('intro');
        setVisibleLines(0);
        setVisibleCriteria(0);
        setScore(0);
        setPulseActive(false);

        addTimer(() => { setPhase('interview'); setPulseActive(true); }, 600);
        addTimer(() => { setPhase('transcript'); setPulseActive(false); }, 2000);

        // Transcript lines appear one by one
        [2000, 2900, 3800, 4700].forEach((t, i) =>
            addTimer(() => setVisibleLines(i + 1), t)
        );

        // Score starts counting up
        addTimer(() => {
            setPhase('scoring');
            let s = 0;
            const tick = setInterval(() => {
                s = Math.min(s + 0.15, 3.8);
                setScore(parseFloat(s.toFixed(1)));
                if (s >= 3.8) clearInterval(tick);
            }, 60);
            timersRef.current.push(tick as unknown as NodeJS.Timeout);
        }, 5800);

        // Criteria appear sequentially
        addTimer(() => setVisibleCriteria(1), 6000);
        addTimer(() => setVisibleCriteria(2), 6600);
        addTimer(() => setVisibleCriteria(3), 7200);
        addTimer(() => setPhase('done'), 7800);
    };

    useEffect(() => {
        runCycle();
        const interval = setInterval(runCycle, CYCLE_MS);
        return () => {
            clearAllTimers();
            clearInterval(interval);
        };
    }, []);

    const phaseLabel = {
        intro: 'Loading candidate profile',
        interview: 'AI interview in progress',
        transcript: 'Processing responses',
        scoring: 'Generating scorecard',
        done: 'Interview complete',
    }[phase];

    const phaseSub = {
        intro: 'Jake Smithers · Sr. Software Engineer',
        interview: 'Conversational AI interview — no recruiter needed',
        transcript: 'Transcribing and analyzing candidate responses',
        scoring: 'Scoring against rubric criteria',
        done: '3 criteria evaluated · Ready for review',
    }[phase];

    const statusColor = phase === 'done' ? '#059669' : 'var(--color-primary)';

    return (
        <>
            <style>{`
                @keyframes airPulse {
                    0%, 100% { transform: scale(1);   opacity: 1; }
                    50%       { transform: scale(1.15); opacity: 0.7; }
                }
                @keyframes airWave {
                    0%, 100% { height: 4px; }
                    50%       { height: 16px; }
                }
                @keyframes airFadeUp {
                    from { opacity: 0; transform: translateY(5px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes airScorePop {
                    0%   { transform: scale(0.85); opacity: 0; }
                    60%  { transform: scale(1.05); }
                    100% { transform: scale(1);    opacity: 1; }
                }
                @keyframes airSpin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                .air-line {
                    animation: airFadeUp 350ms ease forwards;
                }
                .air-criterion {
                    animation: airFadeUp 400ms ease forwards;
                }
                .air-score-pop {
                    animation: airScorePop 400ms ease forwards;
                }
                .air-bar {
                    border-radius: 2px;
                    background: var(--color-primary-50);
                    display: inline-flex;
                    align-items: flex-end;
                    gap: 2px;
                    padding: 4px 6px;
                    height: 28px;
                }
                .air-bar-seg {
                    width: 3px;
                    border-radius: 2px;
                    background: var(--color-primary);
                    transition: height 200ms ease;
                }
            `}</style>

            <div style={{
                background: '#fff',
                borderRadius: 'var(--radius-2xl)',
                padding: '18px',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
                {/* Status bar */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '7px 11px', borderRadius: '8px',
                    background: phase === 'done' ? 'rgba(5,150,105,0.06)' : 'var(--color-primary-50)',
                    border: `1px solid ${phase === 'done' ? 'rgba(5,150,105,0.22)' : 'rgba(240,106,62,0.22)'}`,
                    marginBottom: '12px', transition: 'all 400ms ease',
                }}>
                    {phase === 'done' ? (
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    ) : (
                        <svg style={{ animation: 'airSpin 1.2s linear infinite', flexShrink: 0 }} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                    )}
                    <div key={phase} style={{ animation: 'airFadeUp 250ms ease forwards', fontSize: '10px' }}>
                        <strong style={{ color: statusColor }}>{phaseLabel}</strong>
                        <span style={{ color: '#94a3b8', marginLeft: '6px', fontSize: '9px' }}>{phaseSub}</span>
                    </div>
                </div>

                {/* Interview panel */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                    {/* Video/audio panel */}
                    <div style={{
                        background: '#1e293b', borderRadius: '10px', padding: '12px',
                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '120px',
                    }}>
                        <div>
                            <div style={{ fontSize: '7px', color: '#64748b', marginBottom: '2px' }}>Sr. Software Engineer · Data Engineering</div>
                            <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff' }}>Jake Smithers</div>
                        </div>

                        {/* Animated mic / waveform */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            {phase === 'interview' ? (
                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '28px' }}>
                                    {[0.4, 0.7, 1, 0.85, 0.6, 0.9, 0.5, 0.75, 0.45].map((h, i) => (
                                        <div key={i} style={{
                                            width: '3px', borderRadius: '2px', background: 'var(--color-primary)',
                                            height: `${h * 20}px`,
                                            animation: `airWave ${0.5 + i * 0.12}s ease-in-out infinite alternate`,
                                            animationDelay: `${i * 0.08}s`,
                                        }} />
                                    ))}
                                </div>
                            ) : (
                                <div style={{
                                    width: '28px', height: '28px', borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    animation: phase === 'intro' ? 'airPulse 1.5s ease-in-out infinite' : 'none',
                                }}>
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                                        <polygon points="5 3 19 12 5 21" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        {/* Progress bar */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: 'rgba(255,255,255,0.1)' }}>
                                <div style={{
                                    height: '100%', borderRadius: '2px', background: 'var(--color-primary)',
                                    width: phase === 'intro' ? '0%' : phase === 'interview' ? '30%' : phase === 'transcript' ? '60%' : '90%',
                                    transition: 'width 800ms ease',
                                }} />
                            </div>
                            <span style={{ fontSize: '7px', color: '#64748b' }}>
                                {phase === 'intro' ? '0:00' : phase === 'interview' ? '0:14' : phase === 'transcript' ? '1:28' : '2:05'}
                            </span>
                        </div>
                    </div>

                    {/* Transcript */}
                    <div style={{ background: '#fafafa', borderRadius: '10px', padding: '10px', overflow: 'hidden' }}>
                        <div style={{ fontSize: '9px', fontWeight: 700, color: '#1e293b', marginBottom: '7px' }}>Transcript</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {transcriptLines.slice(0, visibleLines).map((line, i) => (
                                <div key={i} className="air-line">
                                    <div style={{ fontSize: '7px', fontWeight: 700, color: line.speaker === 'AIR' ? '#f59e0b' : '#1e293b', marginBottom: '1px' }}>
                                        {line.speaker === 'AIR' ? 'AIR' : 'Jake Smithers'}
                                    </div>
                                    <div style={{ fontSize: '6.5px', color: '#64748b', lineHeight: '1.5' }}>{line.text}</div>
                                </div>
                            ))}
                            {visibleLines === 0 && (
                                <div style={{ color: '#cbd5e1', fontSize: '8px', fontStyle: 'italic' }}>Interview starting…</div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Score + criteria */}
                <div style={{
                    borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '10px',
                    display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px', alignItems: 'start',
                }}>
                    {/* Score */}
                    <div style={{ textAlign: 'center', minWidth: '56px' }}>
                        <div style={{ fontSize: '7px', color: '#94a3b8', fontWeight: 600, marginBottom: '3px' }}>AI Score</div>
                        <div
                            key={phase === 'scoring' || phase === 'done' ? 'visible' : 'hidden'}
                            className={phase === 'scoring' || phase === 'done' ? 'air-score-pop' : ''}
                            style={{ fontSize: '24px', fontWeight: 800, color: '#1e293b', lineHeight: 1, paddingBottom: '0.1em' }}
                        >
                            {phase === 'scoring' || phase === 'done' ? score.toFixed(1) : '—'}
                        </div>
                        <div style={{ fontSize: '7px', color: '#94a3b8' }}>/ 5.0</div>
                    </div>

                    {/* Criteria */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        {criteria.slice(0, visibleCriteria).map((c, i) => (
                            <div key={i} className="air-criterion" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <div style={{
                                    width: '22px', height: '22px', borderRadius: '5px', flexShrink: 0,
                                    background: `${c.color}18`, display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                    fontSize: '8px', fontWeight: 800, color: c.color,
                                }}>{c.score}</div>
                                <div style={{ fontSize: '7.5px', fontWeight: 600, color: '#1e293b', lineHeight: 1.3 }}>{c.label}</div>
                            </div>
                        ))}
                        {visibleCriteria === 0 && (
                            <div style={{ fontSize: '8px', color: '#cbd5e1', fontStyle: 'italic' }}>Criteria scoring…</div>
                        )}
                    </div>
                </div>

                {/* ROI stats */}
                <div style={{ display: 'flex', gap: '7px', marginTop: '10px' }}>
                    {roiStats.map(s => (
                        <div key={s.label} style={{
                            flex: 1, background: '#f8fafc', borderRadius: '8px',
                            padding: '8px 9px', border: '1px solid rgba(0,0,0,0.05)',
                        }}>
                            <div style={{ fontSize: '14px', fontWeight: 800, color: s.color, lineHeight: 1, paddingBottom: '0.1em' }}>{s.value}</div>
                            <div style={{ fontSize: '7.5px', color: '#94a3b8', marginTop: '3px', lineHeight: 1.3 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
