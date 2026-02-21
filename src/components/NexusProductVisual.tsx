'use client';

import { useState, useEffect, useRef } from 'react';

const steps = [
    {
        label: 'Trigger',
        sub: 'Invoice arrives',
        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
        detail: 'Detected in real time from inbox or portal',
    },
    {
        label: 'Extract',
        sub: 'Data parsed',
        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
        detail: 'All fields structured automatically',
    },
    {
        label: 'Validate',
        sub: 'Rules checked',
        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>,
        detail: 'Budget, PO match and vendor status verified',
    },
    {
        label: 'Route',
        sub: 'Approval sent',
        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>,
        detail: 'Right person notified with one-click approval',
    },
    {
        label: 'Done',
        sub: 'Paid & logged',
        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
        detail: 'Payment triggered, books updated, team notified',
    },
];

const roiStats = [
    { value: '84%', label: 'Ops automated', color: '#6366f1' },
    { value: '12K+', label: 'Tasks / month', color: '#22c55e' },
    { value: '24/7', label: 'Always on', color: 'var(--color-primary)' },
];

export default function NexusProductVisual() {
    const [activeStep, setActiveStep] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActiveStep(prev => (prev + 1) % steps.length);
        }, 1600);
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, []);

    return (
        <>
            <style>{`
                @keyframes npvFlowDot {
                    0%   { left: -6px; opacity: 0; }
                    15%  { opacity: 1; }
                    85%  { opacity: 1; }
                    100% { left: calc(100% + 6px); opacity: 0; }
                }
                @keyframes npvPulse {
                    0%   { transform: scale(1);   opacity: 0.5; }
                    100% { transform: scale(1.65); opacity: 0; }
                }
                @keyframes npvStatPop {
                    0%   { transform: scale(1); }
                    40%  { transform: scale(1.06); }
                    100% { transform: scale(1); }
                }
                .npv-icon {
                    width: 44px; height: 44px; border-radius: 12px;
                    display: flex; align-items: center; justify-content: center;
                    border: 1.5px solid rgba(0,0,0,0.08);
                    background: white; position: relative; flex-shrink: 0;
                    transition: border-color 200ms ease, background 200ms ease;
                }
                .npv-icon.active {
                    border-color: var(--color-primary);
                    background: var(--color-primary-50);
                }
                .npv-pulse {
                    position: absolute; inset: -5px; border-radius: 17px;
                    border: 1.5px solid var(--color-primary);
                    animation: npvPulse 1.2s ease-out infinite;
                    pointer-events: none;
                }
                .npv-conn {
                    flex: 1; height: 2px; background: rgba(0,0,0,0.06);
                    position: relative; overflow: hidden; border-radius: 2px;
                    align-self: center; min-width: 8px;
                }
                .npv-dot {
                    position: absolute; left: -6px; top: 50%; margin-top: -4px;
                    width: 7px; height: 7px; border-radius: 50%;
                    background: var(--color-primary);
                    animation: npvFlowDot 1.6s linear infinite;
                }
                .npv-stat {
                    flex: 1; background: white; border-radius: 10px;
                    padding: 10px 12px; border: 1px solid rgba(0,0,0,0.05);
                }
                .npv-stat.active-stat {
                    animation: npvStatPop 1.6s ease-in-out infinite;
                }
            `}</style>

            <div style={{
                background: 'linear-gradient(145deg, #fffbeb 0%, #fef9c3 30%, #fff 100%)',
                borderRadius: 'var(--radius-2xl)',
                padding: '22px 20px 20px',
                border: '1px solid rgba(234, 179, 8, 0.1)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
                {/* Window chrome */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '18px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
                    <div style={{ flex: 1 }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9px', fontWeight: 700, color: '#eab308', letterSpacing: '0.04em' }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                        NEXUS RUNNING
                    </div>
                </div>

                {/* Workflow label */}
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                    Invoice automation · Live
                </div>

                {/* Node flow */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, marginBottom: '12px' }}>
                    {steps.map((step, i) => (
                        <>
                            <div key={step.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flex: 1, minWidth: 0 }}>
                                <div className={`npv-icon ${activeStep === i ? 'active' : ''}`}>
                                    {activeStep === i && <div className="npv-pulse" />}
                                    <span style={{ color: activeStep === i ? 'var(--color-primary)' : '#94a3b8', transition: 'color 200ms ease' }}>
                                        {step.icon}
                                    </span>
                                </div>
                                <div style={{ fontSize: '9px', fontWeight: 700, color: activeStep === i ? 'var(--color-primary)' : '#1e293b', textAlign: 'center', transition: 'color 200ms ease', lineHeight: 1.2 }}>{step.label}</div>
                                <div style={{ fontSize: '8px', color: '#94a3b8', textAlign: 'center', lineHeight: 1.2 }}>{step.sub}</div>
                            </div>
                            {i < steps.length - 1 && (
                                <div key={`c-${i}`} className="npv-conn" style={{ marginTop: '22px' }}>
                                    {activeStep > i && <div className="npv-dot" />}
                                </div>
                            )}
                        </>
                    ))}
                </div>

                {/* Active step detail */}
                <div style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: 'var(--color-primary-50)',
                    border: '1px solid rgba(240, 106, 62, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '14px',
                    minHeight: '36px',
                }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <div style={{ fontSize: '10px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                        <strong style={{ color: 'var(--color-primary)' }}>{steps[activeStep].label}:</strong>{' '}
                        {steps[activeStep].detail}
                    </div>
                </div>

                {/* ROI stats */}
                <div style={{ display: 'flex', gap: '8px' }}>
                    {roiStats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`npv-stat ${i === activeStep % 3 ? 'active-stat' : ''}`}
                        >
                            <div style={{ fontSize: '18px', fontWeight: 800, color: stat.color, lineHeight: 1, paddingBottom: '0.1em' }}>{stat.value}</div>
                            <div style={{ fontSize: '9px', color: '#94a3b8', marginTop: '3px' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
