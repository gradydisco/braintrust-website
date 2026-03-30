'use client';

export default function TalentMarketplaceVisual() {
    return (
        <>
            <style>{`
                .tmv-pill {
                    background: white;
                    border-radius: 8px;
                    padding: 8px 12px;
                    font-size: 11px;
                    font-weight: 600;
                    color: #4b5563;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
                    border: 1px solid rgba(0,0,0,0.02);
                }
                .tmv-pill-purple {
                    background: #e9d5ff;
                    color: #6b21a8;
                    box-shadow: 0 4px 12px rgba(107, 33, 168, 0.1);
                    position: relative;
                }
                .tmv-card {
                    background: white;
                    border-radius: 12px;
                    padding: 16px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    position: relative;
                    z-index: 10;
                }
                .tmv-card-bg1 {
                    background: white;
                    opacity: 0.6;
                    border-radius: 12px;
                    height: 50px;
                    position: absolute;
                    bottom: -15px;
                    left: 20px;
                    right: 20px;
                    z-index: 5;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
                .tmv-card-bg2 {
                    background: white;
                    opacity: 0.3;
                    border-radius: 12px;
                    height: 40px;
                    position: absolute;
                    bottom: -28px;
                    left: 40px;
                    right: 40px;
                    z-index: 2;
                }
                .tmv-tag {
                    background: #f1f5f9;
                    color: #64748b;
                    font-size: 8px;
                    font-weight: 600;
                    padding: 4px 10px;
                    border-radius: 100px;
                    white-space: nowrap;
                    text-align: center;
                }
            `}</style>

            <div style={{ transform: 'scale(1.23) translateX(24px)', transformOrigin: 'center right', paddingRight: '20px' }}>
                <div style={{
                    background: '#fdba74', /* Peach orange */
                    borderRadius: '24px',
                    padding: '36px 32px 56px 32px',
                    position: 'relative',
                    width: '480px',
                    margin: '0 auto',
                    overflow: 'visible',
                    boxShadow: '0 12px 32px rgba(253, 186, 116, 0.3)'
                }}>

                    {/* Floating Pills Layer */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '24px', padding: '0 10px' }}>
                        <div className="tmv-pill">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            Role
                        </div>
                        <div className="tmv-pill">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                            Skills
                        </div>
                        <div className="tmv-pill tmv-pill-purple">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            Location
                            {/* Cursor Arrow icon imitating the screen shot */}
                            <svg style={{ position: 'absolute', right: '-8px', bottom: '-12px', zIndex: 20, fill: 'white', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))' }} width="18" height="18" viewBox="0 0 24 24" stroke="black" strokeWidth="1.5"><polygon points="3 3 10.5 21 13.5 13.5 21 10.5 3 3"/></svg>
                        </div>
                        <div className="tmv-pill">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            Approval status
                        </div>
                        <div className="tmv-pill">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                            Years of experience
                        </div>
                        <div className="tmv-pill">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                            Language
                        </div>
                    </div>

                    {/* Main UI Cards Layer */}
                    <div style={{ position: 'relative' }}>
                        <div className="tmv-card">
                            <div style={{
                                width: '82px', height: '64px', minWidth: '82px', flexShrink: 0, borderRadius: '8px',
                                background: '#fef3c7',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
                            }}>
                                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80" alt="Jordan Brittain" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <span style={{ fontSize: '15px', fontWeight: 800, color: '#111827', lineHeight: 1 }}>Jordan Brittain</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#a3e635" stroke="#4d7c0f" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                                </div>
                                <div style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>Product Designer</div>
                                <div style={{ fontSize: '10px', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                                    <strong>$95.00/hr</strong>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                    Austin, TX, USA
                                </div>
                                <div style={{ display: 'flex', gap: '6px' }}>
                                    <span className="tmv-tag">Product Design</span>
                                    <span className="tmv-tag">UI/UX Design</span>
                                    <span className="tmv-tag">Visual Design</span>
                                </div>
                            </div>
                            <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                                <button style={{
                                    background: '#111827', color: 'white', border: 'none', borderRadius: '6px',
                                    padding: '8px 16px', fontSize: '11px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                }}>
                                    Make offer
                                </button>
                            </div>
                        </div>
                        {/* Underneath cards to create stack depth effect */}
                        <div className="tmv-card-bg1">
                            <div style={{ position: 'absolute', bottom: '6px', left: '16px', right: '16px', display: 'flex', justifyContent: 'space-between', opacity: 0.4 }}>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#e2e8f0' }} />
                                    <div style={{ width: '80px', height: '6px', borderRadius: '4px', background: '#cbd5e1' }} />
                                </div>
                                <div style={{ width: '60px', height: '16px', borderRadius: '8px', background: '#111827' }} />
                            </div>
                        </div>
                        <div className="tmv-card-bg2">
                            <div style={{ position: 'absolute', bottom: '4px', left: '16px', right: '16px', display: 'flex', justifyContent: 'space-between', opacity: 0.2 }}>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#cbd5e1' }} />
                                    <div style={{ width: '60px', height: '6px', borderRadius: '4px', background: '#94a3b8' }} />
                                </div>
                                <div style={{ width: '50px', height: '12px', borderRadius: '6px', background: '#111827' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
