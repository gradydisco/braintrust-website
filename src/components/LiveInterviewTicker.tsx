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
   ANIMATED NUMBER COMPONENT
   ============================================ */
function AnimatedNumber({ value, duration = 2000 }: { value: number; duration?: number }) {
    const [display, setDisplay] = useState(value);

    useEffect(() => {
        const start = display;
        const diff = value - start;
        if (diff === 0) return;
        const startTime = Date.now();
        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(start + diff * eased));
            if (progress >= 1) clearInterval(timer);
        }, 30);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, duration]);

    return <>{display.toLocaleString()}</>;
}

/* ============================================
   MAIN TICKER COMPONENT
   ============================================ */
export default function LiveInterviewTicker() {
    // Base numbers: ~365K total interviews, 1M+ minutes
    const BASE_INTERVIEWS = 367_842;
    const BASE_MINUTES = 1_043_291;

    const [concurrent, setConcurrent] = useState(57);
    const [totalInterviews, setTotalInterviews] = useState(BASE_INTERVIEWS);
    const [totalMinutes, setTotalMinutes] = useState(BASE_MINUTES);
    const [activityFeed, setActivityFeed] = useState<Array<{
        role: string; location: string; lang: string; time: string; id: number;
    }>>([]);
    const [feedKey, setFeedKey] = useState(0);

    // Generate a new activity item
    const generateActivity = useCallback(() => {
        const seconds = Math.floor(Math.random() * 25) + 2;
        return {
            role: pick(roles),
            location: pick(locations),
            lang: pick(languages),
            time: `${seconds}s ago`,
            id: Date.now() + Math.random(),
        };
    }, []);

    useEffect(() => {
        // Initialize feed
        setActivityFeed([generateActivity(), generateActivity(), generateActivity()]);

        // Concurrent interviews: fluctuate every 3-6s
        const concurrentTimer = setInterval(() => {
            setConcurrent(prev => {
                const delta = Math.floor(Math.random() * 7) - 3; // -3 to +3
                return Math.max(38, Math.min(89, prev + delta));
            });
        }, 3500);

        // Total interviews: tick up ~1 every 4-8s (realistic for ~1K/day)
        const interviewTimer = setInterval(() => {
            setTotalInterviews(prev => prev + 1);
        }, 5000 + Math.random() * 3000);

        // Total minutes: tick up ~2-4 every 2s (many concurrent interviews adding minutes)
        const minuteTimer = setInterval(() => {
            setTotalMinutes(prev => prev + Math.floor(Math.random() * 3) + 2);
        }, 2000);

        // Activity feed: new item every 4-7s
        const feedTimer = setInterval(() => {
            setActivityFeed(prev => {
                const newFeed = [generateActivity(), ...prev.slice(0, 2)];
                return newFeed;
            });
            setFeedKey(prev => prev + 1);
        }, 5000);

        return () => {
            clearInterval(concurrentTimer);
            clearInterval(interviewTimer);
            clearInterval(minuteTimer);
            clearInterval(feedTimer);
        };
    }, [generateActivity]);

    return (
        <div style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--space-6) var(--space-8)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Subtle animated background glow */}
            <div style={{
                position: 'absolute', top: '-50%', right: '-20%',
                width: '400px', height: '400px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(232,119,34,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* Top Row: LIVE badge + stats */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-5)',
            }}>
                {/* LIVE indicator */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                }}>
                    <span style={{
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: '#22c55e',
                        boxShadow: '0 0 8px #22c55e, 0 0 16px rgba(34, 197, 94, 0.4)',
                        animation: 'pulse-live 2s ease-in-out infinite',
                        display: 'inline-block',
                    }} />
                    <span style={{
                        fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                        letterSpacing: '0.1em', color: '#22c55e',
                    }}>
                        Live Now
                    </span>
                </div>

                {/* Stat pills */}
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                    <StatPill
                        label="Interviews right now"
                        value={<AnimatedNumber value={concurrent} duration={800} />}
                        color="#22c55e"
                    />
                    <StatPill
                        label="Total interviews"
                        value={<AnimatedNumber value={totalInterviews} duration={1200} />}
                        color="#f59e0b"
                    />
                    <StatPill
                        label="Minutes of AI interviewing"
                        value={<><AnimatedNumber value={totalMinutes} duration={1500} /></>}
                        color="#8b5cf6"
                    />
                </div>
            </div>

            {/* Activity Feed */}
            <div style={{
                display: 'flex',
                gap: 'var(--space-3)',
                flexWrap: 'wrap',
            }}>
                {activityFeed.map((item, i) => (
                    <div
                        key={`${feedKey}-${i}`}
                        style={{
                            flex: '1 1 280px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-3)',
                            padding: 'var(--space-3) var(--space-4)',
                            borderRadius: 'var(--radius-lg)',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            animation: i === 0 ? 'fade-in-up 400ms ease-out' : undefined,
                            opacity: i === 0 ? 1 : 0.6 + (0.2 * (2 - i)),
                        }}
                    >
                        <div style={{
                            width: '6px', height: '6px', borderRadius: '50%',
                            background: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.3)',
                            flexShrink: 0,
                        }} />
                        <div style={{ minWidth: 0 }}>
                            <div style={{
                                fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.9)',
                                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                            }}>
                                Interview completed · {item.role}
                            </div>
                            <div style={{
                                fontSize: '11px', color: 'rgba(255,255,255,0.4)',
                                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                            }}>
                                {item.location} · {item.lang} · {item.time}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes pulse-live {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.3); }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

/* ============================================
   STAT PILL SUB-COMPONENT
   ============================================ */
function StatPill({ label, value, color }: { label: string; value: React.ReactNode; color: string }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            padding: '6px 14px',
            borderRadius: '100px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
        }}>
            <span style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 800,
                color,
                fontVariantNumeric: 'tabular-nums',
            }}>
                {value}
            </span>
            <span style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 500,
                whiteSpace: 'nowrap',
            }}>
                {label}
            </span>
        </div>
    );
}
