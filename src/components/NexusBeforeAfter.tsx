'use client';

const manualSteps = [
    {
        label: 'Invoice arrives in email',
        pain: 'Sits unread in a shared inbox for hours or days',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
    },
    {
        label: 'Someone manually re-types data',
        pain: 'Into a spreadsheet. Copy/paste errors are common.',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
    },
    {
        label: 'Approval email chain begins',
        pain: 'Three people cc\'d. Two don\'t respond. One is out of office.',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
    },
    {
        label: 'Finance manually enters into ERP',
        pain: 'After hunting down the approved PDF buried in a thread.',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>,
    },
    {
        label: 'Payment initiated — maybe',
        pain: '9 days after the invoice arrived. Vendor follow-up already sent twice.',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
    },
];

const nexusSteps = [
    {
        label: 'Invoice auto-detected',
        win: 'Captured in real time from inbox or portal. No human needed.',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
    },
    {
        label: 'Data extracted instantly',
        win: 'All fields parsed and structured. Accuracy verified automatically.',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>,
    },
    {
        label: 'Approval routed in seconds',
        win: 'The right person receives a single, clear request. One click to approve.',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>,
    },
    {
        label: 'ERP synced automatically',
        win: 'Record created with correct coding. No spreadsheet needed.',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>,
    },
    {
        label: 'Payment confirmed, same day',
        win: 'Vendors are paid on time. No follow-ups. Full audit trail.',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    },
];

export default function NexusBeforeAfter() {
    return (
        <>
            <style>{`
                .bna-row {
                    display: flex;
                    align-items: flex-start;
                    gap: var(--space-3);
                    padding: var(--space-4) 0;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }
                .bna-row:last-child { border-bottom: none; }
                .bna-icon-before {
                    width: 36px; height: 36px; border-radius: 10px;
                    display: flex; align-items: center; justify-content: center;
                    background: #FFF3F0; color: #D04020; flex-shrink: 0;
                }
                .bna-icon-after {
                    width: 36px; height: 36px; border-radius: 10px;
                    display: flex; align-items: center; justify-content: center;
                    background: var(--color-primary-50); color: var(--color-primary); flex-shrink: 0;
                }
                .bna-label { font-size: 13px; font-weight: 700; color: var(--text-primary); margin-bottom: 2px; }
                .bna-sub-before { font-size: 12px; color: #B04030; line-height: 1.5; }
                .bna-sub-after  { font-size: 12px; color: var(--text-secondary); line-height: 1.5; }
            `}</style>

            <section className="section">
                <div className="container">
                    <div className="section-header" style={{ marginBottom: 'var(--space-10)' }}>
                        <div className="badge">Before vs. After</div>
                        <h2>What your team deals with now — and what Nexus replaces it with</h2>
                        <p>The same process. Completely different experience.</p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto 1fr',
                        gap: 'var(--space-6)',
                        alignItems: 'start',
                    }}>
                        {/* Before column */}
                        <div style={{
                            background: 'var(--color-white)',
                            border: '1px solid #F0C0B0',
                            borderRadius: 'var(--radius-xl)',
                            padding: 'var(--space-8)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#D04020', flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontWeight: 800, fontSize: 'var(--text-lg)', color: 'var(--text-primary)' }}>Without Nexus</div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: '#B04030', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Manual · Fragmented · Slow</div>
                                </div>
                            </div>
                            {manualSteps.map((step) => (
                                <div key={step.label} className="bna-row">
                                    <div className="bna-icon-before">{step.icon}</div>
                                    <div>
                                        <div className="bna-label">{step.label}</div>
                                        <div className="bna-sub-before">{step.pain}</div>
                                    </div>
                                </div>
                            ))}
                            <div style={{
                                marginTop: 'var(--space-6)', padding: 'var(--space-4)',
                                borderRadius: 'var(--radius-lg)', background: '#FFF3F0',
                                border: '1px solid #F0C0B0', textAlign: 'center',
                            }}>
                                <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: '#D04020' }}>Avg. time to resolution</div>
                                <div style={{ fontWeight: 800, fontSize: 'var(--text-2xl)', color: '#D04020', marginTop: '4px' }}>7–10 days</div>
                                <div style={{ fontSize: 'var(--text-xs)', color: '#B04030', marginTop: '4px' }}>Per invoice cycle. Fully manual.</div>
                            </div>
                        </div>

                        {/* Center divider */}
                        <div style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            paddingTop: 'var(--space-10)', gap: 'var(--space-2)',
                        }}>
                            <div style={{ width: '1px', height: '60px', background: 'var(--color-gray-200)' }} />
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%',
                                background: 'var(--gradient-warm)', display: 'flex',
                                alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '18px',
                                flexShrink: 0,
                            }}>→</div>
                            <div style={{ width: '1px', flex: 1, background: 'var(--color-gray-200)' }} />
                        </div>

                        {/* After column */}
                        <div style={{
                            background: 'var(--color-white)',
                            border: '1px solid var(--color-primary)',
                            borderRadius: 'var(--radius-xl)',
                            padding: 'var(--space-8)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontWeight: 800, fontSize: 'var(--text-lg)', color: 'var(--text-primary)' }}>With Nexus</div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Automated · Connected · Instant</div>
                                </div>
                            </div>
                            {nexusSteps.map((step) => (
                                <div key={step.label} className="bna-row">
                                    <div className="bna-icon-after">{step.icon}</div>
                                    <div>
                                        <div className="bna-label">{step.label}</div>
                                        <div className="bna-sub-after">{step.win}</div>
                                    </div>
                                </div>
                            ))}
                            <div style={{
                                marginTop: 'var(--space-6)', padding: 'var(--space-4)',
                                borderRadius: 'var(--radius-lg)', background: 'var(--color-primary-50)',
                                border: '1px solid var(--color-primary)', textAlign: 'center',
                            }}>
                                <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-primary)' }}>Avg. time to resolution</div>
                                <div style={{ fontWeight: 800, fontSize: 'var(--text-2xl)', color: 'var(--color-primary)', marginTop: '4px' }}>Same day</div>
                                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginTop: '4px' }}>Zero manual steps. Full audit trail.</div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile stacked note */}
                    <p style={{ textAlign: 'center', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 'var(--space-6)' }}>
                        Invoice processing shown as example. Nexus automates any multi-step enterprise workflow.
                    </p>
                </div>
            </section>
        </>
    );
}
