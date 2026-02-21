'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// ─── Shared icon set ─────────────────────────────────────────────────────────

const icons = {
    file: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
    search: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
    check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>,
    database: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>,
    user: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>,
    card: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
    chart: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
    bell: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
    done: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    mail: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
    mic: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>,
    calendar: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
    star: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
    gift: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>,
    box: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
    truck: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
    zap: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    target: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
    trending: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
    refresh: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg>,
};

// ─── Workflow scenarios ───────────────────────────────────────────────────────

const scenarios: Record<string, { label: string; description: string; steps: { label: string; sub: string; icon: React.ReactNode; detail: string }[] }> = {
    finance: {
        label: 'Finance',
        description: 'Invoice received to payment confirmed — zero manual steps.',
        steps: [
            { label: 'Invoice Received', sub: 'Email / Upload', icon: icons.file, detail: 'Nexus monitors inboxes and upload portals, capturing invoices the moment they arrive in any format.' },
            { label: 'Data Extracted', sub: 'OCR + Parse', icon: icons.search, detail: 'Vendor, amount, line items, and due date are automatically extracted and structured for processing.' },
            { label: 'Validation Check', sub: 'Rules Engine', icon: icons.check, detail: 'Business rules verify PO match, vendor status, and budget availability before any action proceeds.' },
            { label: 'ERP Sync', sub: 'NetSuite / SAP', icon: icons.database, detail: 'The invoice record is created and categorized directly in your ERP — no manual data entry.' },
            { label: 'Approval Routing', sub: 'Finance Manager', icon: icons.user, detail: 'Approvers receive a structured request via email or Slack with full context and one-click decision options.' },
            { label: 'Payment Triggered', sub: 'Bank / Stripe', icon: icons.card, detail: 'Upon approval, payment is initiated automatically through your configured payment method.' },
            { label: 'Books Updated', sub: 'QuickBooks / Xero', icon: icons.chart, detail: 'The transaction is automatically reconciled and posted with correct GL codes.' },
            { label: 'Confirmation Sent', sub: 'Slack / Email', icon: icons.done, detail: 'Stakeholders receive a summary notification confirming end-to-end processing.' },
        ],
    },
    recruiting: {
        label: 'Recruiting',
        description: 'Application to onboarding — fully orchestrated without recruiter bottlenecks.',
        steps: [
            { label: 'Application In', sub: 'ATS / Career Page', icon: icons.file, detail: 'New applications are detected in real time across all inbound channels and immediately queued for assessment.' },
            { label: 'AI Interview', sub: 'Braintrust AIR', icon: icons.mic, detail: 'AIR conducts a conversational voice interview automatically — no scheduling required from your team.' },
            { label: 'Score Generated', sub: 'Semantic Rubric', icon: icons.star, detail: 'Each candidate receives a structured scorecard graded against role-specific competency criteria.' },
            { label: 'ATS Updated', sub: 'Greenhouse / Workday', icon: icons.database, detail: 'Scorecards and stage updates are pushed directly into your ATS with zero manual data entry.' },
            { label: 'Interview Scheduled', sub: 'Calendar Sync', icon: icons.calendar, detail: 'Qualified candidates automatically receive a scheduling link synced to the hiring manager\'s availability.' },
            { label: 'Decision Logged', sub: 'Hiring Manager', icon: icons.check, detail: 'Post-interview feedback is captured and logged, triggering the appropriate next workflow step.' },
            { label: 'Offer Letter Sent', sub: 'DocuSign / PDF', icon: icons.mail, detail: 'Approved offers are generated from template and delivered to the candidate for signature.' },
            { label: 'Onboarding Triggered', sub: 'HRIS / IT Provisioning', icon: icons.gift, detail: 'Signed offer automatically initiates onboarding workflows: HRIS record, IT provisioning, welcome sequence.' },
        ],
    },
    operations: {
        label: 'Operations',
        description: 'Order placed to delivery confirmed — logistics automated end to end.',
        steps: [
            { label: 'Order Received', sub: 'E-commerce / ERP', icon: icons.box, detail: 'Orders from all channels are captured and normalized into a single, structured data format.' },
            { label: 'Inventory Check', sub: 'WMS / ERP', icon: icons.search, detail: 'Real-time inventory is queried and availability confirmed before fulfillment is initiated.' },
            { label: 'Fulfillment Assigned', sub: 'Warehouse System', icon: icons.check, detail: 'The optimal warehouse location or fulfillment partner is selected and the pick order is created.' },
            { label: 'Shipment Created', sub: 'Carrier API', icon: icons.truck, detail: 'Shipping labels and tracking numbers are generated via carrier API and attached to the order record.' },
            { label: 'CRM Updated', sub: 'Salesforce / HubSpot', icon: icons.database, detail: 'The order status, carrier, and ETA are pushed to the customer record for visibility.' },
            { label: 'Customer Notified', sub: 'Email / SMS', icon: icons.bell, detail: 'The customer receives an automated shipping confirmation with tracking link and estimated delivery.' },
            { label: 'Invoice Sent', sub: 'Accounting System', icon: icons.card, detail: 'An invoice is automatically generated and delivered upon shipment.' },
            { label: 'Delivery Confirmed', sub: 'Carrier Webhook', icon: icons.done, detail: 'Delivery confirmation triggers final order closure and any post-delivery workflows.' },
        ],
    },
    sales: {
        label: 'Sales',
        description: 'Lead captured to pipeline active — every handoff automated.',
        steps: [
            { label: 'Lead Captured', sub: 'Form / Ad / Chat', icon: icons.zap, detail: 'Leads from all sources — web forms, paid ads, chat tools — are captured in real time.' },
            { label: 'Data Enriched', sub: 'Clearbit / Apollo', icon: icons.search, detail: 'Company size, industry, tech stack, and contact details are automatically appended.' },
            { label: 'Lead Scored', sub: 'Scoring Rules', icon: icons.target, detail: 'Each lead is scored against your ICP criteria — firmographics, intent signals, and fit.' },
            { label: 'Rep Assigned', sub: 'Round Robin / Rules', icon: icons.user, detail: 'High-scoring leads are routed to the right rep based on territory, load, or segment rules.' },
            { label: 'CRM Record Created', sub: 'Salesforce / HubSpot', icon: icons.database, detail: 'A fully enriched CRM record is created instantly — no manual entry from the rep.' },
            { label: 'Sequence Triggered', sub: 'Outreach / Salesloft', icon: icons.mail, detail: 'The rep\'s personalized outreach sequence starts automatically within minutes of lead capture.' },
            { label: 'Manager Alerted', sub: 'Slack / Teams', icon: icons.bell, detail: 'High-priority leads trigger an immediate Slack alert to the team lead with full context.' },
            { label: 'Pipeline Updated', sub: 'CRM Dashboard', icon: icons.trending, detail: 'Pipeline reports reflect the new opportunity in real time — no end-of-day sync required.' },
        ],
    },
};

const TAB_KEYS = ['finance', 'recruiting', 'operations', 'sales'] as const;
type TabKey = typeof TAB_KEYS[number];

export default function NexusWorkflow() {
    const [activeTab, setActiveTab] = useState<TabKey>('finance');
    const [activeStep, setActiveStep] = useState(0);
    const [paused, setPaused] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const currentSteps = scenarios[activeTab].steps;

    const startCycle = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % currentSteps.length);
        }, 1800);
    }, [currentSteps.length]);

    useEffect(() => {
        setActiveStep(0);
        if (!paused) startCycle();
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [activeTab, paused, startCycle]);

    const handleStepHover = (i: number) => {
        setPaused(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
        setActiveStep(i);
    };

    const handleStepLeave = () => {
        setPaused(false);
        startCycle();
    };

    const handleTabChange = (tab: TabKey) => {
        setPaused(false);
        setActiveTab(tab);
        setActiveStep(0);
    };

    return (
        <>
            <style>{`
                @keyframes nwFlowDot {
                    0%   { left: -8px; opacity: 0; }
                    12%  { opacity: 1; }
                    88%  { opacity: 1; }
                    100% { left: calc(100% + 8px); opacity: 0; }
                }
                @keyframes nwPulseRing {
                    0%   { transform: scale(1);    opacity: 0.55; }
                    100% { transform: scale(1.6);  opacity: 0; }
                }
                @keyframes nwFlowDotV {
                    0%   { top: -8px; opacity: 0; }
                    12%  { opacity: 1; }
                    88%  { opacity: 1; }
                    100% { top: calc(100% + 8px); opacity: 0; }
                }
                .nw2-icon-wrap {
                    width: 50px; height: 50px; border-radius: 13px;
                    display: flex; align-items: center; justify-content: center;
                    border: 1.5px solid var(--color-gray-200);
                    background: var(--color-white); position: relative;
                    transition: border-color 220ms ease, box-shadow 220ms ease, background 220ms ease;
                    flex-shrink: 0;
                }
                .nw2-icon-wrap.nw2-active {
                    border-color: var(--color-primary);
                    background: var(--color-primary-50);
                    box-shadow: 0 0 0 5px rgba(240,106,62,0.09);
                }
                .nw2-pulse {
                    position: absolute; inset: -5px; border-radius: 18px;
                    border: 1.5px solid var(--color-primary);
                    animation: nwPulseRing 1.3s ease-out infinite;
                    pointer-events: none;
                }
                .nw2-connector {
                    height: 2px; background: var(--color-gray-100);
                    position: relative; overflow: hidden; border-radius: 2px;
                    flex: 1; min-width: 12px; max-width: 44px; align-self: center;
                }
                .nw2-dot {
                    position: absolute; left: -8px; top: 50%; margin-top: -4px;
                    width: 8px; height: 8px; border-radius: 50%;
                    background: var(--color-primary);
                    animation: nwFlowDot 1.8s linear infinite;
                }
                .nw2-connector-v {
                    width: 2px; height: 28px; background: var(--color-gray-100);
                    position: relative; overflow: hidden; border-radius: 2px; margin: 0 auto;
                }
                .nw2-dot-v {
                    position: absolute; left: 50%; margin-left: -4px; top: -8px;
                    width: 8px; height: 8px; border-radius: 50%;
                    background: var(--color-primary);
                    animation: nwFlowDotV 1.8s linear infinite;
                }
                .nw2-tab {
                    padding: 8px 20px; border-radius: 999px; border: 1.5px solid var(--color-gray-200);
                    background: var(--color-white); font-size: 13px; font-weight: 600;
                    color: var(--text-secondary); cursor: pointer;
                    transition: all 180ms ease; white-space: nowrap;
                }
                .nw2-tab.nw2-tab-active {
                    border-color: var(--color-primary); background: var(--color-primary);
                    color: white;
                }
                .nw2-node {
                    display: flex; flex-direction: column; align-items: center;
                    gap: 8px; flex: 1; min-width: 0; cursor: default;
                }
                .nw2-label {
                    font-size: 10.5px; font-weight: 700; color: var(--text-primary);
                    text-align: center; line-height: 1.3; letter-spacing: 0.01em;
                    transition: color 220ms ease;
                }
                .nw2-label.nw2-active { color: var(--color-primary); }
                .nw2-sub {
                    font-size: 9.5px; font-weight: 500; color: var(--text-tertiary);
                    text-align: center; letter-spacing: 0.02em;
                }
                @media (max-width: 768px) {
                    .nw2-desktop { display: none !important; }
                    .nw2-mobile  { display: flex !important; }
                }
                @media (min-width: 769px) {
                    .nw2-desktop { display: flex !important; }
                    .nw2-mobile  { display: none !important; }
                }
            `}</style>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="section-header" style={{ marginBottom: 'var(--space-8)' }}>
                        <div className="badge">Live Workflows</div>
                        <h2>See it working, across your business</h2>
                        <p>Select a department to see how Nexus automates that team's most time-consuming processes.</p>
                    </div>

                    {/* Tab row */}
                    <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 'var(--space-8)' }}>
                        {TAB_KEYS.map((key) => (
                            <button
                                key={key}
                                className={`nw2-tab ${activeTab === key ? 'nw2-tab-active' : ''}`}
                                onClick={() => handleTabChange(key)}
                            >
                                {scenarios[key].label}
                            </button>
                        ))}
                    </div>

                    {/* Scenario description */}
                    <p style={{ textAlign: 'center', fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-8)', fontStyle: 'italic' }}>
                        {scenarios[activeTab].description}
                    </p>

                    {/* Desktop: horizontal */}
                    <div className="nw2-desktop" style={{
                        alignItems: 'flex-start', gap: 0,
                        padding: 'var(--space-8) var(--space-6)',
                        background: 'var(--color-white)',
                        border: '1px solid var(--color-gray-100)',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    }}>
                        {currentSteps.map((step, i) => (
                            <>
                                <div
                                    key={`${activeTab}-${step.label}`}
                                    className="nw2-node"
                                    onMouseEnter={() => handleStepHover(i)}
                                    onMouseLeave={handleStepLeave}
                                >
                                    <div className={`nw2-icon-wrap ${activeStep === i ? 'nw2-active' : ''}`}>
                                        {activeStep === i && <div className="nw2-pulse" />}
                                        <span style={{ color: activeStep === i ? 'var(--color-primary)' : 'var(--text-tertiary)', transition: 'color 220ms ease' }}>
                                            {step.icon}
                                        </span>
                                    </div>
                                    <span className={`nw2-label ${activeStep === i ? 'nw2-active' : ''}`}>{step.label}</span>
                                    <span className="nw2-sub">{step.sub}</span>
                                </div>
                                {i < currentSteps.length - 1 && (
                                    <div key={`conn-${i}`} className="nw2-connector">
                                        {activeStep > i && <div className="nw2-dot" />}
                                    </div>
                                )}
                            </>
                        ))}
                    </div>

                    {/* Mobile: vertical */}
                    <div className="nw2-mobile" style={{
                        flexDirection: 'column', alignItems: 'stretch',
                        padding: 'var(--space-6)',
                        background: 'var(--color-white)',
                        border: '1px solid var(--color-gray-100)',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    }}>
                        {currentSteps.map((step, i) => (
                            <>
                                <div key={`${activeTab}-m-${step.label}`} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                                    <div className={`nw2-icon-wrap ${activeStep === i ? 'nw2-active' : ''}`}>
                                        {activeStep === i && <div className="nw2-pulse" />}
                                        <span style={{ color: activeStep === i ? 'var(--color-primary)' : 'var(--text-tertiary)', transition: 'color 220ms ease' }}>
                                            {step.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <div className={`nw2-label ${activeStep === i ? 'nw2-active' : ''}`} style={{ textAlign: 'left' }}>{step.label}</div>
                                        <div className="nw2-sub" style={{ textAlign: 'left' }}>{step.sub}</div>
                                    </div>
                                </div>
                                {i < currentSteps.length - 1 && (
                                    <div key={`conn-v-${i}`} className="nw2-connector-v">
                                        {activeStep > i && <div className="nw2-dot-v" />}
                                    </div>
                                )}
                            </>
                        ))}
                    </div>

                    {/* Detail card */}
                    <div style={{
                        marginTop: 'var(--space-5)',
                        padding: 'var(--space-4) var(--space-6)',
                        borderRadius: 'var(--radius-lg)',
                        background: 'var(--color-primary-50)',
                        border: '1px solid var(--color-primary)',
                        display: 'flex', alignItems: 'center', gap: 'var(--space-4)', minHeight: '64px',
                    }}>
                        <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                        <div>
                            <span style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-primary)' }}>
                                Step {activeStep + 1} of {currentSteps.length}: {currentSteps[activeStep].label}
                            </span>
                            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginLeft: 'var(--space-3)' }}>
                                {currentSteps[activeStep].detail}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
