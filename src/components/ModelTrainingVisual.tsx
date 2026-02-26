'use client';

/**
 * ModelTrainingVisual — enterprise-grade animated pipeline visualization
 * Shows data flowing through stages with crisp SVG icons and particles
 */
export default function ModelTrainingVisual() {
    const stages = [
        {
            label: 'Raw Data',
            color: '#64748b',
            desc: 'Unstructured text, images, audio',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
            ),
        },
        {
            label: 'Annotation',
            color: '#6366f1',
            desc: 'Expert labeling & tagging',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
            ),
        },
        {
            label: 'RLHF',
            color: '#f59e0b',
            desc: 'Human preference signals',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.58-3.25 3.93M12 2a4 4 0 00-4 4c0 1.95 1.4 3.58 3.25 3.93M12 22v-8m0 0a3 3 0 110-6" />
                    <circle cx="12" cy="18" r="4" />
                </svg>
            ),
        },
        {
            label: 'Training',
            color: '#059669',
            desc: 'Model fine-tuning',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
            ),
        },
        {
            label: 'Evaluation',
            color: '#ec4899',
            desc: 'Quality & safety checks',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            ),
        },
    ];

    return (
        <div style={{ position: 'relative', maxWidth: '960px', margin: '0 auto', padding: '20px 0' }}>
            {/* Pipeline */}
            <div style={{
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                position: 'relative',
            }}>
                {/* Connecting line */}
                <div style={{
                    position: 'absolute', top: '36px', left: '80px', right: '80px',
                    height: '2px', background: 'var(--color-gray-100)',
                    zIndex: 0,
                }}>
                    <div className="pipeline-progress" style={{
                        height: '100%', borderRadius: '2px',
                        background: 'linear-gradient(90deg, #64748b, #6366f1, #f59e0b, #059669, #ec4899)',
                    }} />
                </div>

                {/* Arrow connectors */}
                {[0, 1, 2, 3].map((i) => (
                    <div key={`arrow-${i}`} className={`pipeline-arrow pa-${i}`} style={{
                        position: 'absolute',
                        top: '30px',
                        left: `${20 + (i + 0.5) * 15}%`,
                        zIndex: 2,
                        opacity: 0,
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gray-300)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </div>
                ))}

                {stages.map((stage, i) => (
                    <div
                        key={stage.label}
                        className={`pipeline-stage pipeline-s${i}`}
                        style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            gap: '12px', position: 'relative', zIndex: 1, flex: 1,
                        }}
                    >
                        <div className="pipeline-icon-ring" style={{
                            width: '72px', height: '72px', borderRadius: '20px',
                            background: 'white',
                            border: `2px solid ${stage.color}20`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: stage.color,
                            boxShadow: `0 4px 20px ${stage.color}12, 0 1px 3px rgba(0,0,0,0.04)`,
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                            cursor: 'default',
                        }}>
                            {stage.icon}
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '13px', fontWeight: 700, color: stage.color, letterSpacing: '-0.01em' }}>{stage.label}</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '3px', lineHeight: 1.4 }}>{stage.desc}</div>
                        </div>
                    </div>
                ))}

                {/* Animated particles */}
                {[0, 1, 2].map((p) => (
                    <div key={p} className={`pipeline-particle pp-${p}`} style={{
                        position: 'absolute', top: '33px', left: '80px',
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                        boxShadow: '0 0 12px rgba(245,87,51,0.5)',
                        zIndex: 3,
                    }} />
                ))}
            </div>

            <style>{`
                .pipeline-progress {
                    animation: pipeline-fill 4s ease-in-out infinite;
                }
                @keyframes pipeline-fill {
                    0% { width: 0%; opacity: 0.4; }
                    50% { opacity: 1; }
                    100% { width: 100%; opacity: 0.4; }
                }
                .pipeline-stage {
                    opacity: 0;
                    animation: stage-appear 0.5s ease-out both;
                }
                .pipeline-s0 { animation-delay: 0.2s; }
                .pipeline-s1 { animation-delay: 0.5s; }
                .pipeline-s2 { animation-delay: 0.8s; }
                .pipeline-s3 { animation-delay: 1.1s; }
                .pipeline-s4 { animation-delay: 1.4s; }
                @keyframes stage-appear {
                    from { opacity: 0; transform: translateY(16px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .pipeline-arrow {
                    animation: arrow-appear 0.4s ease-out both;
                }
                .pa-0 { animation-delay: 0.6s; }
                .pa-1 { animation-delay: 0.9s; }
                .pa-2 { animation-delay: 1.2s; }
                .pa-3 { animation-delay: 1.5s; }
                @keyframes arrow-appear {
                    from { opacity: 0; transform: translateX(-4px); }
                    to { opacity: 0.5; transform: translateX(0); }
                }
                .pipeline-particle {
                    animation: particle-flow 3.5s ease-in-out infinite;
                }
                .pp-0 { animation-delay: 0.5s; }
                .pp-1 { animation-delay: 1.7s; }
                .pp-2 { animation-delay: 2.9s; }
                @keyframes particle-flow {
                    0% { left: 80px; opacity: 0; transform: scale(0.5); }
                    8% { opacity: 1; transform: scale(1); }
                    92% { opacity: 1; transform: scale(1); }
                    100% { left: calc(100% - 80px); opacity: 0; transform: scale(0.5); }
                }
                .pipeline-icon-ring:hover {
                    transform: scale(1.08) translateY(-2px);
                    box-shadow: 0 8px 28px rgba(0,0,0,0.1);
                    border-color: currentColor;
                }
            `}</style>
        </div>
    );
}
