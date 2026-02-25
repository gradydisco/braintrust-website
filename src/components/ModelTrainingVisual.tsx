'use client';

/**
 * ModelTrainingVisual — animated CSS visualization of model training pipeline
 * Shows data flowing through stages: Raw Data → Annotation → Training → Evaluation
 */
export default function ModelTrainingVisual() {
    const stages = [
        { label: 'Raw Data', icon: '📄', color: '#64748b', desc: 'Unstructured text, images, audio' },
        { label: 'Annotation', icon: '🏷️', color: '#6366f1', desc: 'Expert labeling & tagging' },
        { label: 'RLHF', icon: '🧠', color: '#f59e0b', desc: 'Human preference signals' },
        { label: 'Training', icon: '⚡', color: '#059669', desc: 'Model fine-tuning' },
        { label: 'Evaluation', icon: '✅', color: '#ec4899', desc: 'Quality & safety checks' },
    ];

    return (
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
            {/* Pipeline */}
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                position: 'relative',
            }}>
                {/* Connecting line */}
                <div style={{
                    position: 'absolute', top: '36px', left: '60px', right: '60px',
                    height: '3px', background: 'var(--color-gray-100)',
                    zIndex: 0,
                }}>
                    <div className="pipeline-progress" style={{
                        height: '100%', borderRadius: '2px',
                        background: 'linear-gradient(90deg, #6366f1, #f59e0b, #059669, #ec4899)',
                    }} />
                </div>

                {stages.map((stage, i) => (
                    <div
                        key={stage.label}
                        className={`pipeline-stage pipeline-s${i}`}
                        style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            gap: '10px', position: 'relative', zIndex: 1, flex: 1,
                        }}
                    >
                        <div style={{
                            width: '72px', height: '72px', borderRadius: '20px',
                            background: 'white',
                            border: `2px solid ${stage.color}25`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '28px',
                            boxShadow: `0 4px 16px ${stage.color}15`,
                            transition: 'transform 0.3s, box-shadow 0.3s',
                        }}>
                            {stage.icon}
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '13px', fontWeight: 700, color: stage.color }}>{stage.label}</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>{stage.desc}</div>
                        </div>
                    </div>
                ))}

                {/* Animated particles */}
                {[0, 1, 2].map((p) => (
                    <div key={p} className={`pipeline-particle pp-${p}`} style={{
                        position: 'absolute', top: '32px', left: '60px',
                        width: '10px', height: '10px', borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                        boxShadow: '0 0 10px rgba(245,87,51,0.4)',
                        zIndex: 3,
                    }} />
                ))}
            </div>

            <style>{`
                .pipeline-progress {
                    animation: pipeline-fill 4s ease-in-out infinite;
                }
                @keyframes pipeline-fill {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }

                .pipeline-stage {
                    opacity: 0;
                    animation: stage-appear 0.5s ease-out both;
                }
                .pipeline-s0 { animation-delay: 0.2s; }
                .pipeline-s1 { animation-delay: 0.6s; }
                .pipeline-s2 { animation-delay: 1.0s; }
                .pipeline-s3 { animation-delay: 1.4s; }
                .pipeline-s4 { animation-delay: 1.8s; }

                @keyframes stage-appear {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .pipeline-particle {
                    animation: particle-flow 3s ease-in-out infinite;
                }
                .pp-0 { animation-delay: 0s; }
                .pp-1 { animation-delay: 1s; }
                .pp-2 { animation-delay: 2s; }

                @keyframes particle-flow {
                    0% { left: 60px; opacity: 0; transform: scale(0.6); }
                    10% { opacity: 1; transform: scale(1); }
                    90% { opacity: 1; transform: scale(1); }
                    100% { left: calc(100% - 60px); opacity: 0; transform: scale(0.6); }
                }

                .pipeline-stage:hover > div:first-child {
                    transform: scale(1.1);
                    box-shadow: 0 6px 24px rgba(0,0,0,0.12);
                }
            `}</style>
        </div>
    );
}
