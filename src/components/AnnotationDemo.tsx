'use client';

import { useState } from 'react';

/**
 * AnnotationDemo — Tabbed data work simulation
 * Shows 3 realistic workflows: Annotation, RLHF, and Evals
 */

const TABS = [
    { id: 'rlhf', label: 'RLHF Ranking' },
    { id: 'annotation', label: 'Data Annotation' },
    { id: 'evals', label: 'Model Evaluation' },
] as const;

export default function AnnotationDemo() {
    const [activeTab, setActiveTab] = useState<string>('rlhf');

    return (
        <div style={{ position: 'relative' }}>
            {/* Tab bar */}
            <div style={{
                display: 'flex', gap: '4px', marginBottom: '16px',
                background: 'var(--color-gray-50)', borderRadius: '14px',
                padding: '4px', maxWidth: '480px', margin: '0 auto 16px',
            }}>
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            flex: 1, padding: '10px 16px', borderRadius: '10px',
                            border: 'none', cursor: 'pointer',
                            background: activeTab === tab.id ? 'var(--color-white)' : 'transparent',
                            boxShadow: activeTab === tab.id ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                            fontSize: '13px', fontWeight: 600,
                            color: activeTab === tab.id ? 'var(--text-primary)' : 'var(--text-tertiary)',
                            transition: 'all 0.2s ease',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Main card */}
            <div style={{
                background: 'white',
                borderRadius: '16px',
                border: '1px solid rgba(50,50,93,0.08)',
                boxShadow: '0 8px 32px rgba(50,50,93,0.08)',
                overflow: 'hidden',
                maxWidth: '780px',
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
                            {activeTab === 'annotation' && 'annotation_task_2847.jsonl'}
                            {activeTab === 'rlhf' && 'rlhf_comparison_batch_41.json'}
                            {activeTab === 'evals' && 'eval_scoring_run_19.json'}
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
                            {activeTab === 'annotation' && 'Task 12 of 48'}
                            {activeTab === 'rlhf' && 'Pair 7 of 30'}
                            {activeTab === 'evals' && 'Sample 15 of 60'}
                        </span>
                        <div style={{
                            width: '120px', height: '6px', borderRadius: '3px',
                            background: 'var(--color-gray-100)', overflow: 'hidden',
                        }}>
                            <div style={{
                                width: activeTab === 'annotation' ? '25%' : activeTab === 'rlhf' ? '23%' : '25%',
                                height: '100%', borderRadius: '3px',
                                background: activeTab === 'annotation'
                                    ? 'linear-gradient(90deg, var(--color-primary), var(--color-accent))'
                                    : activeTab === 'rlhf'
                                        ? 'linear-gradient(90deg, #6366f1, #818cf8)'
                                        : 'linear-gradient(90deg, #059669, #34d399)',
                                animation: 'progress-grow 3s ease-in-out infinite alternate',
                            }} />
                        </div>
                    </div>
                </div>

                {/* Content area */}
                {activeTab === 'annotation' && <AnnotationContent />}
                {activeTab === 'rlhf' && <RLHFContent />}
                {activeTab === 'evals' && <EvalsContent />}

                {/* Bottom bar */}
                <div style={{
                    padding: '12px 20px',
                    borderTop: '1px solid rgba(50,50,93,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: 'rgba(248,250,252,0.5)',
                    fontSize: '12px',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <span style={{ color: 'var(--text-tertiary)' }}>IAA Score:</span>
                        <span style={{ color: '#059669', fontWeight: 700 }}>
                            {activeTab === 'annotation' ? '0.94' : activeTab === 'rlhf' ? '0.91' : '0.96'}
                        </span>
                        <span style={{ color: 'var(--text-tertiary)' }}>|</span>
                        <span style={{ color: 'var(--text-tertiary)' }}>Annotator:</span>
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                            {activeTab === 'annotation' ? 'Expert #2847' : activeTab === 'rlhf' ? 'Expert #1203' : 'Expert #4519'}
                        </span>
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
                .anno-h1 { animation-delay: 0.3s; }
                .anno-h1 .anno-tag { animation-delay: 0.6s; }
                .anno-h2 { animation-delay: 0.8s; }
                .anno-h2 .anno-tag { animation-delay: 1.1s; }
                .anno-h3 { animation-delay: 1.3s; }
                .anno-h3 .anno-tag { animation-delay: 1.6s; }
                .anno-h4 { animation-delay: 1.8s; }
                .anno-h4 .anno-tag { animation-delay: 2.1s; }
                .anno-h5 { animation-delay: 2.3s; }
                .anno-h5 .anno-tag { animation-delay: 2.6s; }
                .anno-h6 { animation-delay: 2.8s; }
                .anno-h6 .anno-tag { animation-delay: 3.1s; }
                .anno-h7 { animation-delay: 3.3s; }
                .anno-h7 .anno-tag { animation-delay: 3.6s; }

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
                @keyframes rlhf-select {
                    0% { border-color: rgba(50,50,93,0.08); box-shadow: none; }
                    50% { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }
                    100% { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }
                }
                @keyframes score-fill {
                    from { width: 0; }
                }
            `}</style>
        </div>
    );
}

/* ===== ANNOTATION TAB ===== */
function AnnotationContent() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', minHeight: '260px' }}>
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
    );
}

/* ===== RLHF TAB ===== */
function RLHFContent() {
    return (
        <div style={{ padding: '24px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                Which response is more helpful, harmless, and honest?
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px', padding: '12px 16px', background: 'var(--color-gray-50)', borderRadius: '10px', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Prompt:</strong> &quot;Explain the difference between supervised fine-tuning and RLHF in language model training.&quot;
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                {/* Response A */}
                <div style={{
                    border: '2px solid rgba(50,50,93,0.08)', borderRadius: '12px', padding: '16px',
                    fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)',
                    position: 'relative',
                }}>
                    <div style={{ fontSize: '10px', fontWeight: 800, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Response A</div>
                    <p style={{ margin: 0 }}>SFT trains on labeled examples with correct answers. RLHF uses human preferences to train a reward model, then optimizes the language model using reinforcement learning (PPO). RLHF better captures nuanced quality...</p>
                </div>
                {/* Response B — selected */}
                <div style={{
                    border: '2px solid #6366f1', borderRadius: '12px', padding: '16px',
                    fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)',
                    position: 'relative',
                    boxShadow: '0 0 0 3px rgba(99,102,241,0.12)',
                    animation: 'rlhf-select 1.5s ease-out both 0.8s',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <div style={{ fontSize: '10px', fontWeight: 800, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Response B</div>
                        <div style={{ fontSize: '9px', fontWeight: 700, color: '#6366f1', padding: '2px 8px', borderRadius: '4px', background: 'rgba(99,102,241,0.08)' }}>PREFERRED</div>
                    </div>
                    <p style={{ margin: 0 }}>SFT teaches the model to imitate — it learns from example outputs. RLHF teaches the model to improve — it learns from human judgments about what&apos;s better. Think of SFT as &quot;learn to write like this&quot; and RLHF as &quot;learn what good writing is.&quot;</p>
                </div>
            </div>
            {/* Scoring rubric */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {[
                    { label: 'Helpfulness', score: 4, max: 5, color: '#6366f1' },
                    { label: 'Accuracy', score: 5, max: 5, color: '#059669' },
                    { label: 'Harmlessness', score: 5, max: 5, color: '#0ea5e9' },
                    { label: 'Conciseness', score: 4, max: 5, color: '#f59e0b' },
                ].map(r => (
                    <div key={r.label} style={{ flex: 1, minWidth: '120px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                            <span>{r.label}</span>
                            <span style={{ color: r.color }}>{r.score}/{r.max}</span>
                        </div>
                        <div style={{ height: '5px', borderRadius: '3px', background: 'var(--color-gray-100)', overflow: 'hidden' }}>
                            <div style={{
                                width: `${(r.score / r.max) * 100}%`, height: '100%', borderRadius: '3px',
                                background: r.color,
                                animation: 'score-fill 0.8s ease-out both 1.2s',
                            }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ===== EVALS TAB ===== */
function EvalsContent() {
    const testCases = [
        { input: 'Capital of France?', expected: 'Paris', actual: 'Paris', pass: true, latency: '120ms' },
        { input: 'Solve: 2x + 5 = 17', expected: 'x = 6', actual: 'x = 6', pass: true, latency: '340ms' },
        { input: 'Is glass a liquid?', expected: 'No (amorphous solid)', actual: 'Yes, it flows slowly', pass: false, latency: '180ms' },
        { input: 'Year Python released?', expected: '1991', actual: '1991', pass: true, latency: '95ms' },
        { input: 'Largest ocean?', expected: 'Pacific', actual: 'Pacific Ocean', pass: true, latency: '110ms' },
    ];

    return (
        <div style={{ padding: '0' }}>
            {/* Eval table header */}
            <div style={{
                display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 60px 60px',
                padding: '10px 20px', fontSize: '10px', fontWeight: 700,
                color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em',
                background: 'rgba(248,250,252,0.5)',
                borderBottom: '1px solid rgba(50,50,93,0.06)',
            }}>
                <span>Input</span>
                <span>Expected</span>
                <span>Model Output</span>
                <span style={{ textAlign: 'center' }}>Status</span>
                <span style={{ textAlign: 'right' }}>Latency</span>
            </div>
            {/* Rows */}
            {testCases.map((tc, i) => (
                <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 60px 60px',
                    padding: '12px 20px', fontSize: '13px',
                    borderBottom: i < testCases.length - 1 ? '1px solid rgba(50,50,93,0.04)' : 'none',
                    background: !tc.pass ? 'rgba(237,95,116,0.04)' : 'transparent',
                    alignItems: 'center',
                }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{tc.input}</span>
                    <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>{tc.expected}</span>
                    <span style={{
                        color: tc.pass ? 'var(--text-secondary)' : '#ed5f74',
                        fontFamily: 'var(--font-mono)', fontSize: '12px',
                        fontWeight: tc.pass ? 400 : 600,
                    }}>{tc.actual}</span>
                    <span style={{ textAlign: 'center' }}>
                        {tc.pass ? (
                            <span style={{ fontSize: '11px', fontWeight: 700, color: '#059669', padding: '2px 8px', borderRadius: '4px', background: 'rgba(5,150,105,0.08)' }}>PASS</span>
                        ) : (
                            <span style={{ fontSize: '11px', fontWeight: 700, color: '#ed5f74', padding: '2px 8px', borderRadius: '4px', background: 'rgba(237,95,116,0.08)' }}>FAIL</span>
                        )}
                    </span>
                    <span style={{ textAlign: 'right', color: 'var(--text-tertiary)', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>{tc.latency}</span>
                </div>
            ))}
            {/* Summary row */}
            <div style={{
                padding: '14px 20px',
                background: 'rgba(248,250,252,0.5)',
                borderTop: '1px solid rgba(50,50,93,0.06)',
                display: 'flex', gap: '24px', fontSize: '12px',
            }}>
                <div><span style={{ color: 'var(--text-tertiary)' }}>Pass Rate:</span> <span style={{ fontWeight: 700, color: '#059669' }}>80%</span></div>
                <div><span style={{ color: 'var(--text-tertiary)' }}>Avg Latency:</span> <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>169ms</span></div>
                <div><span style={{ color: 'var(--text-tertiary)' }}>Total:</span> <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>4/5 passed</span></div>
            </div>
        </div>
    );
}
