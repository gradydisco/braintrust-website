'use client';

import { useState, useEffect, useRef } from 'react';

const steps = [
    {
        id: 'invoice',
        label: 'Invoice Received',
        sub: 'Email / Upload',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        ),
        detail: 'Nexus monitors inboxes and upload portals, capturing invoices the moment they arrive — regardless of format.',
    },
    {
        id: 'extract',
        label: 'Data Extracted',
        sub: 'OCR + Parse',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
        ),
        detail: 'Vendor name, amount, line items, and due date are automatically extracted and structured for downstream processing.',
    },
    {
        id: 'validate',
        label: 'Validation Check',
        sub: 'Rules Engine',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
        ),
        detail: 'Business rules verify PO match, vendor status, and budget availability before any action is taken.',
    },
    {
        id: 'erp',
        label: 'ERP Sync',
        sub: 'NetSuite / SAP',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        ),
        detail: 'The invoice record is created and categorized directly in your ERP system — no manual data entry required.',
    },
    {
        id: 'approve',
        label: 'Approval Routing',
        sub: 'Finance Manager',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <polyline points="16 11 18 13 22 9" />
            </svg>
        ),
        detail: 'Approvers receive a structured request via email or Slack with full context and one-click decision options.',
    },
    {
        id: 'payment',
        label: 'Payment Triggered',
        sub: 'Bank / Stripe',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
        ),
        detail: 'Upon approval, payment is initiated automatically through your configured payment method — no manual processing.',
    },
    {
        id: 'accounting',
        label: 'Books Updated',
        sub: 'QuickBooks / Xero',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
        ),
        detail: 'The transaction is automatically reconciled and posted to your accounting system with correct GL codes.',
    },
    {
        id: 'notify',
        label: 'Confirmation Sent',
        sub: 'Slack / Email',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
        detail: 'Stakeholders receive a summary notification confirming the invoice was processed end-to-end.',
    },
];

export default function NexusWorkflow() {
    const [activeStep, setActiveStep] = useState(0);
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startCycle = () => {
        intervalRef.current = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 1800);
    };

    useEffect(() => {
        startCycle();
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, []);

    const handleStepHover = (i: number) => {
        setHoveredStep(i);
        if (intervalRef.current) clearInterval(intervalRef.current);
        setActiveStep(i);
    };

    const handleStepLeave = () => {
        setHoveredStep(null);
        startCycle();
    };

    const displayed = hoveredStep !== null ? hoveredStep : activeStep;

    return (
        <>
            <style>{`
                @keyframes flowDot {
                    0%   { transform: translateX(-8px); opacity: 0; }
                    15%  { opacity: 1; }
                    85%  { opacity: 1; }
                    100% { transform: translateX(calc(100% + 8px)); opacity: 0; }
                }
                @keyframes pulseRing {
                    0%   { transform: scale(1);   opacity: 0.6; }
                    100% { transform: scale(1.55); opacity: 0; }
                }
                .nw-node {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    cursor: default;
                    position: relative;
                    flex: 1;
                    min-width: 0;
                }
                .nw-icon-wrap {
                    width: 52px;
                    height: 52px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1.5px solid var(--color-gray-200);
                    background: var(--color-white);
                    position: relative;
                    transition: border-color 250ms ease, box-shadow 250ms ease, background 250ms ease;
                    flex-shrink: 0;
                }
                .nw-icon-wrap.active {
                    border-color: var(--color-primary);
                    background: var(--color-primary-50);
                    box-shadow: 0 0 0 5px rgba(240, 106, 62, 0.10);
                }
                .nw-pulse {
                    position: absolute;
                    inset: -5px;
                    border-radius: 18px;
                    border: 1.5px solid var(--color-primary);
                    animation: pulseRing 1.2s ease-out infinite;
                    pointer-events: none;
                }
                .nw-connector {
                    flex: 1;
                    height: 2px;
                    background: var(--color-gray-100);
                    position: relative;
                    overflow: hidden;
                    border-radius: 2px;
                    min-width: 16px;
                    max-width: 48px;
                    margin-top: -38px;
                    align-self: flex-start;
                    margin-top: 26px;
                }
                .nw-dot {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%) translateX(-8px);
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: var(--color-primary);
                    animation: flowDot 1.8s linear infinite;
                }
                .nw-label {
                    font-size: 11px;
                    font-weight: 700;
                    color: var(--text-primary);
                    text-align: center;
                    line-height: 1.3;
                    letter-spacing: 0.01em;
                    transition: color 250ms ease;
                }
                .nw-label.active { color: var(--color-primary); }
                .nw-sub {
                    font-size: 10px;
                    font-weight: 500;
                    color: var(--text-tertiary);
                    text-align: center;
                    letter-spacing: 0.02em;
                }
                .nw-detail-card {
                    transition: opacity 200ms ease, transform 200ms ease;
                }

                /* Mobile stacked layout */
                @media (max-width: 768px) {
                    .nw-desktop { display: none !important; }
                    .nw-mobile  { display: flex !important; }
                }
                @media (min-width: 769px) {
                    .nw-desktop { display: flex !important; }
                    .nw-mobile  { display: none !important; }
                }

                @keyframes flowDotV {
                    0%   { transform: translateX(-50%) translateY(-8px); opacity: 0; }
                    15%  { opacity: 1; }
                    85%  { opacity: 1; }
                    100% { transform: translateX(-50%) translateY(calc(100% + 8px)); opacity: 0; }
                }
                .nw-connector-v {
                    width: 2px;
                    height: 32px;
                    background: var(--color-gray-100);
                    position: relative;
                    overflow: hidden;
                    border-radius: 2px;
                    margin: 0 auto;
                }
                .nw-dot-v {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    transform: translateX(-50%) translateY(-8px);
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: var(--color-primary);
                    margin-left: -3px;
                    animation: flowDotV 1.8s linear infinite;
                }
            `}</style>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="section-header" style={{ marginBottom: 'var(--space-10)' }}>
                        <div className="badge">Live Example</div>
                        <h2>A workflow, from trigger to close</h2>
                        <p>Invoice processing — fully automated across eight steps, zero manual intervention.</p>
                    </div>

                    {/* Desktop: horizontal flow */}
                    <div className="nw-desktop" style={{
                        alignItems: 'flex-start',
                        gap: 0,
                        padding: 'var(--space-8) var(--space-6)',
                        background: 'var(--color-white)',
                        border: '1px solid var(--color-gray-100)',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                        overflow: 'hidden',
                    }}>
                        {steps.map((step, i) => (
                            <>
                                <div
                                    key={step.id}
                                    className="nw-node"
                                    onMouseEnter={() => handleStepHover(i)}
                                    onMouseLeave={handleStepLeave}
                                >
                                    <div className={`nw-icon-wrap ${activeStep === i ? 'active' : ''}`}>
                                        {activeStep === i && <div className="nw-pulse" />}
                                        <span style={{ color: activeStep === i ? 'var(--color-primary)' : 'var(--text-tertiary)', transition: 'color 250ms ease' }}>
                                            {step.icon}
                                        </span>
                                    </div>
                                    <span className={`nw-label ${activeStep === i ? 'active' : ''}`}>{step.label}</span>
                                    <span className="nw-sub">{step.sub}</span>
                                </div>
                                {i < steps.length - 1 && (
                                    <div key={`conn-${i}`} className="nw-connector" style={{ animationDelay: `${i * 0.22}s` }}>
                                        {activeStep > i && <div className="nw-dot" />}
                                    </div>
                                )}
                            </>
                        ))}
                    </div>

                    {/* Mobile: vertical flow */}
                    <div className="nw-mobile" style={{
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        padding: 'var(--space-6)',
                        background: 'var(--color-white)',
                        border: '1px solid var(--color-gray-100)',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    }}>
                        {steps.map((step, i) => (
                            <>
                                <div key={step.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                                    <div className={`nw-icon-wrap ${activeStep === i ? 'active' : ''}`} style={{ flexShrink: 0 }}>
                                        {activeStep === i && <div className="nw-pulse" />}
                                        <span style={{ color: activeStep === i ? 'var(--color-primary)' : 'var(--text-tertiary)', transition: 'color 250ms ease' }}>
                                            {step.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <div className={`nw-label ${activeStep === i ? 'active' : ''}`} style={{ textAlign: 'left' }}>{step.label}</div>
                                        <div className="nw-sub" style={{ textAlign: 'left' }}>{step.sub}</div>
                                    </div>
                                </div>
                                {i < steps.length - 1 && (
                                    <div key={`conn-v-${i}`} className="nw-connector-v">
                                        {activeStep > i && <div className="nw-dot-v" />}
                                    </div>
                                )}
                            </>
                        ))}
                    </div>

                    {/* Detail card */}
                    <div
                        className="nw-detail-card"
                        style={{
                            marginTop: 'var(--space-6)',
                            padding: 'var(--space-5) var(--space-6)',
                            borderRadius: 'var(--radius-lg)',
                            background: 'var(--color-primary-50)',
                            border: '1px solid var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-4)',
                            minHeight: '68px',
                        }}
                    >
                        <div style={{
                            width: '8px', height: '8px', borderRadius: '50%',
                            background: 'var(--color-primary)', flexShrink: 0,
                        }} />
                        <div>
                            <span style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-primary)' }}>
                                Step {displayed + 1}: {steps[displayed].label}
                            </span>
                            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginLeft: 'var(--space-3)' }}>
                                {steps[displayed].detail}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
