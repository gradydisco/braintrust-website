'use client';

/**
 * AnnotationDemo — CSS-animated data annotation simulation
 * Shows a realistic text passage with entities being labeled in real-time
 */
export default function AnnotationDemo() {
    return (
        <div style={{ position: 'relative' }}>
            {/* Main annotation card */}
            <div style={{
                background: 'white',
                borderRadius: '16px',
                border: '1px solid rgba(50,50,93,0.08)',
                boxShadow: '0 8px 32px rgba(50,50,93,0.08)',
                overflow: 'hidden',
                maxWidth: '720px',
                margin: '0 auto',
            }}>
                {/* Top bar */}
                <div style={{
                    padding: '14px 20px',
                    borderBottom: '1px solid rgba(50,50,93,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: 'rgba(248,250,252,0.8)',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.02em' }}>
                            annotation_task_2847.jsonl
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>Task 12 of 48</span>
                        <div style={{
                            width: '120px', height: '6px', borderRadius: '3px',
                            background: 'var(--color-gray-100)', overflow: 'hidden',
                        }}>
                            <div style={{
                                width: '25%', height: '100%', borderRadius: '3px',
                                background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                                animation: 'progress-grow 3s ease-in-out infinite alternate',
                            }} />
                        </div>
                    </div>
                </div>

                {/* Category sidebar + Main content */}
                <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', minHeight: '240px' }}>
                    {/* Sidebar */}
                    <div style={{
                        borderRight: '1px solid rgba(50,50,93,0.06)',
                        padding: '16px 14px',
                        background: 'rgba(248,250,252,0.5)',
                        display: 'flex', flexDirection: 'column', gap: '6px',
                    }}>
                        <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                            Entity Labels
                        </div>
                        {[
                            { label: 'PERSON', color: '#6366f1' },
                            { label: 'ORG', color: '#059669' },
                            { label: 'TECH', color: '#f59e0b' },
                            { label: 'METRIC', color: '#ec4899' },
                            { label: 'DATE', color: '#8b5cf6' },
                        ].map((cat) => (
                            <div key={cat.label} style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                padding: '5px 8px', borderRadius: '6px',
                                fontSize: '11px', fontWeight: 600, color: cat.color,
                                background: `${cat.color}0a`,
                                border: `1px solid ${cat.color}15`,
                            }}>
                                <div style={{ width: 8, height: 8, borderRadius: '2px', background: cat.color, flexShrink: 0 }} />
                                {cat.label}
                            </div>
                        ))}
                    </div>

                    {/* Annotation text */}
                    <div style={{ padding: '24px', fontSize: '15px', lineHeight: 2.2, color: 'var(--text-primary)' }}>
                        <span className="anno-highlight anno-h1" style={{ '--anno-color': '#6366f1' } as React.CSSProperties}>
                            Dr. Sarah Chen
                            <span className="anno-tag" style={{ background: '#6366f1' }}>PERSON</span>
                        </span>
                        {' '}led the research team at{' '}
                        <span className="anno-highlight anno-h2" style={{ '--anno-color': '#059669' } as React.CSSProperties}>
                            DeepMind
                            <span className="anno-tag" style={{ background: '#059669' }}>ORG</span>
                        </span>
                        {' '}to develop a novel{' '}
                        <span className="anno-highlight anno-h3" style={{ '--anno-color': '#f59e0b' } as React.CSSProperties}>
                            transformer architecture
                            <span className="anno-tag" style={{ background: '#f59e0b' }}>TECH</span>
                        </span>
                        {' '}that achieved{' '}
                        <span className="anno-highlight anno-h4" style={{ '--anno-color': '#ec4899' } as React.CSSProperties}>
                            94.7% accuracy
                            <span className="anno-tag" style={{ background: '#ec4899' }}>METRIC</span>
                        </span>
                        {' '}on the benchmark, published in{' '}
                        <span className="anno-highlight anno-h5" style={{ '--anno-color': '#8b5cf6' } as React.CSSProperties}>
                            March 2025
                            <span className="anno-tag" style={{ background: '#8b5cf6' }}>DATE</span>
                        </span>
                        . The model was later deployed by{' '}
                        <span className="anno-highlight anno-h6" style={{ '--anno-color': '#059669' } as React.CSSProperties}>
                            Anthropic
                            <span className="anno-tag" style={{ background: '#059669' }}>ORG</span>
                        </span>
                        {' '}and{' '}
                        <span className="anno-highlight anno-h7" style={{ '--anno-color': '#059669' } as React.CSSProperties}>
                            OpenAI
                            <span className="anno-tag" style={{ background: '#059669' }}>ORG</span>
                        </span>
                        {' '}for production inference.
                    </div>
                </div>

                {/* Bottom bar — QA score */}
                <div style={{
                    padding: '12px 20px',
                    borderTop: '1px solid rgba(50,50,93,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: 'rgba(248,250,252,0.5)',
                    fontSize: '12px',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <span style={{ color: 'var(--text-tertiary)' }}>IAA Score:</span>
                        <span style={{ color: '#059669', fontWeight: 700 }}>0.94</span>
                        <span style={{ color: 'var(--text-tertiary)' }}>|</span>
                        <span style={{ color: 'var(--text-tertiary)' }}>Annotator:</span>
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Expert #2847</span>
                    </div>
                    <div style={{
                        padding: '4px 12px', borderRadius: '100px',
                        fontSize: '11px', fontWeight: 700,
                        background: 'rgba(5,150,105,0.08)', color: '#059669',
                    }}>
                        ✓ QA Passed
                    </div>
                </div>
            </div>

            <style>{`
                .anno-highlight {
                    position: relative;
                    padding: 2px 4px;
                    border-radius: 4px;
                    background: color-mix(in srgb, var(--anno-color) 12%, transparent);
                    border-bottom: 2px solid var(--anno-color);
                    animation: anno-fade-in 0.6s ease-out both;
                    white-space: nowrap;
                }
                .anno-tag {
                    position: absolute;
                    top: -18px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    color: white;
                    padding: 1px 6px;
                    border-radius: 3px;
                    white-space: nowrap;
                    opacity: 0;
                    animation: tag-pop 0.3s ease-out both;
                }
                .anno-h1 { animation-delay: 0.5s; }
                .anno-h1 .anno-tag { animation-delay: 0.9s; }
                .anno-h2 { animation-delay: 1.2s; }
                .anno-h2 .anno-tag { animation-delay: 1.6s; }
                .anno-h3 { animation-delay: 1.9s; }
                .anno-h3 .anno-tag { animation-delay: 2.3s; }
                .anno-h4 { animation-delay: 2.6s; }
                .anno-h4 .anno-tag { animation-delay: 3.0s; }
                .anno-h5 { animation-delay: 3.3s; }
                .anno-h5 .anno-tag { animation-delay: 3.7s; }
                .anno-h6 { animation-delay: 4.0s; }
                .anno-h6 .anno-tag { animation-delay: 4.4s; }
                .anno-h7 { animation-delay: 4.7s; }
                .anno-h7 .anno-tag { animation-delay: 5.1s; }

                @keyframes anno-fade-in {
                    from { background: transparent; border-bottom-color: transparent; }
                    to { background: color-mix(in srgb, var(--anno-color) 12%, transparent); border-bottom-color: var(--anno-color); }
                }
                @keyframes tag-pop {
                    from { opacity: 0; transform: translateX(-50%) translateY(4px) scale(0.8); }
                    to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
                }
                @keyframes progress-grow {
                    from { width: 15%; }
                    to { width: 55%; }
                }
            `}</style>
        </div>
    );
}
