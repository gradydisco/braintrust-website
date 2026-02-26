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
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                }
                .bna-row:last-child { border-bottom: none; }
                .bna-icon-before {
                    width: 36px; height: 36px; border-radius: 10px;
                    display: flex; align-items: center; justify-content: center;
                    background: rgba(208,64,32,0.2); color: #ffa090; flex-shrink: 0;
                }
                .bna-icon-after {
                    width: 36px; height: 36px; border-radius: 10px;
                    display: flex; align-items: center; justify-content: center;
                    background: rgba(234,179,8,0.18); color: #fbbf24; flex-shrink: 0;
                }
                .bna-label { font-size: 14px; font-weight: 700; color: rgba(255,255,255,0.95); margin-bottom: 2px; }
                .bna-sub-before { font-size: 12.5px; color: rgba(255,160,144,0.85); line-height: 1.5; }
                .bna-sub-after  { font-size: 12.5px; color: rgba(253,224,138,0.75); line-height: 1.5; }
            `}</style>

            <section className="section" style={{
                background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 50%, #0f0f1a 100%)',
                position: 'relative', overflow: 'hidden',
            }}>
                {/* Ambient glow */}
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(245,87,51,0.06) 0%, transparent 70%)',
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-header" style={{ marginBottom: 'var(--space-10)' }}>
                        <div className="badge badge--dark">Before vs. After</div>
                        <h2 style={{ color: 'var(--color-white)' }}>What your team deals with now —<br />and what <span className="text-gradient">Nexus replaces it with</span></h2>
                        <p style={{ color: 'rgba(255,255,255,0.5)' }}>The same process. Completely different experience.</p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto 1fr',
                        gap: 'var(--space-6)',
                        alignItems: 'start',
                    }}>
                        {/* Before column */}
                        <div style={{
                            background: 'rgba(208,64,32,0.08)',
                            border: '1px solid rgba(208,64,32,0.25)',
                            borderRadius: 'var(--radius-xl)',
                            padding: 'var(--space-8)',
                            backdropFilter: 'blur(16px)',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff6b4a', flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontWeight: 800, fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.9)' }}>Without Nexus</div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: '#ff8a70', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Manual · Fragmented · Slow</div>
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
                                borderRadius: 'var(--radius-lg)', background: 'rgba(208,64,32,0.12)',
                                border: '1px solid rgba(208,64,32,0.25)', textAlign: 'center',
                            }}>
                                <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: '#ff8a70' }}>Avg. time to resolution</div>
                                <div style={{ fontWeight: 800, fontSize: 'var(--text-2xl)', color: '#ff6b4a', marginTop: '4px' }}>7–10 days</div>
                                <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,140,120,0.6)', marginTop: '4px' }}>Per invoice cycle. Fully manual.</div>
                            </div>
                        </div>

                        {/* Center divider */}
                        <div style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            paddingTop: 'var(--space-10)', gap: 'var(--space-2)',
                        }}>
                            <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.1)' }} />
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%',
                                background: 'var(--gradient-warm)', display: 'flex',
                                alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '18px',
                                flexShrink: 0, boxShadow: '0 0 20px rgba(245,87,51,0.3)',
                            }}>→</div>
                            <div style={{ width: '1px', flex: 1, background: 'rgba(255,255,255,0.1)' }} />
                        </div>

                        {/* After column */}
                        <div style={{
                            background: 'rgba(234,179,8,0.05)',
                            border: '1px solid rgba(234,179,8,0.2)',
                            borderRadius: 'var(--radius-xl)',
                            padding: 'var(--space-8)',
                            backdropFilter: 'blur(16px)',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fbbf24', flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontWeight: 800, fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.95)' }}>With Nexus</div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: '#fbbf24', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Automated · Connected · Instant</div>
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
                                borderRadius: 'var(--radius-lg)', background: 'rgba(234,179,8,0.1)',
                                border: '1px solid rgba(234,179,8,0.2)', textAlign: 'center',
                            }}>
                                <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: '#fbbf24' }}>Avg. time to resolution</div>
                                <div style={{ fontWeight: 800, fontSize: 'var(--text-2xl)', color: '#fbbf24', marginTop: '4px' }}>Same day</div>
                                <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(253,224,138,0.6)', marginTop: '4px' }}>Zero manual steps. Full audit trail.</div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile stacked note */}
                    <p style={{ textAlign: 'center', fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.3)', marginTop: 'var(--space-6)' }}>
                        Invoice processing shown as example. Nexus automates any multi-step enterprise workflow.
                    </p>
                </div>
            </section>
        </>
    );
}
