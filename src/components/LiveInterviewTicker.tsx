'use client';
import { useState, useEffect, useCallback } from 'react';

/* ============================================
   ACTIVITY FEED DATA
   ============================================ */
const roles = [
    'Software Engineer', 'Product Manager', 'Account Executive', 'UX Designer',
    'Data Scientist', 'DevOps Engineer', 'Recruiter', 'Financial Analyst',
    'Marketing Manager', 'Operations Manager', 'Full-Stack Developer',
    'Clinical Data Analyst', 'Customer Success Manager', 'Sales Rep',
    'Content Strategist', 'Machine Learning Engineer', 'Executive Assistant',
    'IT Project Manager', 'Accountant', 'Front-End Developer',
    'Call Center Rep', 'Retail Associate', 'Product Designer',
    'Cloud Architect', 'Registered Nurse', 'QA Engineer',
    'Business Analyst', 'HR Coordinator', 'Supply Chain Manager',
];

const locations = [
    'New York, US', 'London, UK', 'Toronto, CA', 'San Francisco, US',
    'Berlin, DE', 'São Paulo, BR', 'Sydney, AU', 'Singapore, SG',
    'Mumbai, IN', 'Amsterdam, NL', 'Dublin, IE', 'Tokyo, JP',
    'Austin, TX', 'Chicago, IL', 'Paris, FR', 'Mexico City, MX',
    'Seattle, WA', 'Denver, CO', 'Miami, FL', 'Tel Aviv, IL',
    'Stockholm, SE', 'Barcelona, ES', 'Dubai, AE', 'Hong Kong, HK',
];

const languages = [
    'English', 'Spanish', 'Portuguese', 'German', 'French', 'Japanese',
    'Mandarin', 'Hindi', 'Korean', 'Arabic', 'Dutch', 'Italian',
];

function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

/* ============================================
   ANIMATED COUNTER - big smooth numbers
   ============================================ */
function AnimatedCounter({ value, duration = 1500 }: { value: number; duration?: number }) {
    const [display, setDisplay] = useState(value);

    useEffect(() => {
        const start = display;
        const diff = value - start;
        if (diff === 0) return;
        const startTime = Date.now();
        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(start + diff * eased));
            if (progress >= 1) clearInterval(timer);
        }, 20);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, duration]);

    return <>{display.toLocaleString()}</>;
}

/* ============================================
   MAIN COMPONENT
   ============================================ */
export default function LiveInterviewTicker() {
    const BASE_INTERVIEWS = 367_842;
    const BASE_MINUTES = 1_043_291;

    const [concurrent, setConcurrent] = useState(57);
    const [totalInterviews, setTotalInterviews] = useState(BASE_INTERVIEWS);
    const [totalMinutes, setTotalMinutes] = useState(BASE_MINUTES);
    const [feed, setFeed] = useState<Array<{
        role: string; location: string; lang: string; seconds: number; id: number;
    }>>([]);
    const [feedKey, setFeedKey] = useState(0);

    const generateItem = useCallback(() => ({
        role: pick(roles),
        location: pick(locations),
        lang: pick(languages),
        seconds: Math.floor(Math.random() * 25) + 2,
        id: Date.now() + Math.random(),
    }), []);

    useEffect(() => {
        setFeed([generateItem(), generateItem(), generateItem(), generateItem()]);

        const t1 = setInterval(() => {
            setConcurrent(prev => {
                const d = Math.floor(Math.random() * 7) - 3;
                return Math.max(38, Math.min(89, prev + d));
            });
        }, 3500);

        const t2 = setInterval(() => {
            setTotalInterviews(prev => prev + 1);
        }, 5000 + Math.random() * 3000);

        const t3 = setInterval(() => {
            setTotalMinutes(prev => prev + Math.floor(Math.random() * 3) + 2);
        }, 2000);

        const t4 = setInterval(() => {
            setFeed(prev => [generateItem(), ...prev.slice(0, 3)]);
            setFeedKey(prev => prev + 1);
        }, 4500);

        return () => { clearInterval(t1); clearInterval(t2); clearInterval(t3); clearInterval(t4); };
    }, [generateItem]);

    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>

            {/* LIVE indicator + headline */}
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 'var(--space-3)', marginBottom: 'var(--space-8)',
            }}>
                <span style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: '#22c55e',
                    boxShadow: '0 0 8px #22c55e, 0 0 20px rgba(34, 197, 94, 0.35)',
                    animation: 'pulse-live 2s ease-in-out infinite',
                    display: 'inline-block',
                }} />
                <span style={{
                    fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' as const,
                    letterSpacing: '0.12em', color: '#22c55e',
                }}>
                    Live — Interviews happening now
                </span>
            </div>

            {/* Big 3-stat row */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'var(--space-6)',
                marginBottom: 'var(--space-8)',
                textAlign: 'center',
            }}>
                <StatBlock
                    value={<AnimatedCounter value={concurrent} duration={800} />}
                    label="Interviews right now"
                    accent="#1a1a2e"
                />
                <StatBlock
                    value={<AnimatedCounter value={totalInterviews} duration={1200} />}
                    suffix="+"
                    label="Interviews completed"
                    accent="#1a1a2e"
                />
                <StatBlock
                    value={<><AnimatedCounter value={totalMinutes} duration={1500} />+</>}
                    label="Minutes interviewed (last 90 days)"
                    accent="#1a1a2e"
                />
            </div>

            {/* Activity feed row */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: 'var(--space-3)',
            }}>
                {feed.map((item, i) => (
                    <div
                        key={`${feedKey}-${i}`}
                        style={{
                            display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                            padding: 'var(--space-3) var(--space-4)',
                            borderRadius: 'var(--radius-lg)',
                            background: i === 0 ? 'rgba(34, 197, 94, 0.06)' : 'var(--color-gray-50)',
                            border: `1px solid ${i === 0 ? 'rgba(34, 197, 94, 0.15)' : 'var(--color-gray-100)'}`,
                            animation: i === 0 ? 'ticker-fade-in 500ms ease-out' : undefined,
                            transition: 'opacity 300ms',
                            opacity: 1 - (i * 0.15),
                        }}
                    >
                        <div style={{
                            width: '7px', height: '7px', borderRadius: '50%',
                            background: i === 0 ? '#22c55e' : 'var(--color-gray-300)',
                            flexShrink: 0,
                            boxShadow: i === 0 ? '0 0 6px rgba(34,197,94,0.5)' : 'none',
                        }} />
                        <div style={{ minWidth: 0, flex: 1 }}>
                            <div style={{
                                fontSize: '13px', fontWeight: 600,
                                color: 'var(--text-primary)',
                                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                            }}>
                                {item.role}
                            </div>
                            <div style={{
                                fontSize: '11px', color: 'var(--text-tertiary)',
                                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                            }}>
                                {item.location} · {item.lang} · {item.seconds}s ago
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes pulse-live {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.4); }
                }
                @keyframes ticker-fade-in {
                    from { opacity: 0; transform: translateY(-6px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

/* ============================================
   STAT BLOCK — big number + label
   ============================================ */
function StatBlock({ value, suffix, label, accent }: {
    value: React.ReactNode; suffix?: string; label: string; accent: string;
}) {
    return (
        <div>
            <div style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: accent,
                lineHeight: 1.1,
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '-0.02em',
            }}>
                {value}{suffix}
            </div>
            <div style={{
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--text-tertiary)',
                marginTop: 'var(--space-2)',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.06em',
            }}>
                {label}
            </div>
        </div>
    );
}
