'use client';
import { useState, useEffect, useCallback } from 'react';

const roles = [
    'Sr. Software Engineer', 'Full Stack Developer', 'Product Manager', 'UX Designer',
    'Data Scientist', 'DevOps Engineer', 'ML Engineer', 'Financial Analyst',
    'Cloud Architect', 'Product Designer', 'Backend Engineer', 'Frontend Developer',
    'Platform Engineer', 'Data Engineer', 'Growth Marketer', 'Security Engineer',
    'Technical Program Manager', 'Staff Engineer', 'VP of Engineering', 'Head of Design',
];

const locations = [
    'New York, US', 'Toronto, CA', 'London, UK', 'San Francisco, US',
    'Austin, TX', 'Berlin, DE', 'Sydney, AU', 'Amsterdam, NL',
    'Chicago, IL', 'Seattle, WA', 'Singapore, SG', 'Dublin, IE',
    'Miami, FL', 'Denver, CO', 'Paris, FR', 'Vancouver, CA',
];

const companySizes = [
    'Series A startup', 'Fortune 500', 'Series C company', 'Enterprise',
    'Public company', 'Scale-up', 'Mid-market firm', 'Global enterprise',
];

const rates = ['$85', '$110', '$130', '$155', '$175', '$195', '$220', '$240'];

type EventType = 'hire' | 'match' | 'offer' | 'invoice';

interface FeedItem {
    id: number;
    type: EventType;
    role: string;
    location: string;
    company: string;
    rate: string;
    matchCount: number;
    seconds: number;
}

function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function AnimatedCounter({ value, duration = 1400 }: { value: number; duration?: number }) {
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
    }, [value]);
    return <>{display.toLocaleString()}</>;
}

const eventConfig: Record<EventType, { label: string; color: string; bg: string; border: string; icon: string }> = {
    hire: { label: 'Hire confirmed', color: '#059669', bg: 'rgba(5,150,105,0.06)', border: 'rgba(5,150,105,0.18)', icon: '✓' },
    match: { label: 'AI match surfaced', color: 'var(--color-primary)', bg: 'rgba(240,106,62,0.06)', border: 'rgba(240,106,62,0.18)', icon: '◎' },
    offer: { label: 'Offer accepted', color: '#7c3aed', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.18)', icon: '↗' },
    invoice: { label: '$0 fees saved', color: '#0284c7', bg: 'rgba(2,132,199,0.06)', border: 'rgba(2,132,199,0.18)', icon: '↓' },
};

function generateItem(): FeedItem {
    const types: EventType[] = ['hire', 'hire', 'match', 'match', 'offer', 'invoice'];
    return {
        id: Date.now() + Math.random(),
        type: pick(types),
        role: pick(roles),
        location: pick(locations),
        company: pick(companySizes),
        rate: pick(rates) + '/hr',
        matchCount: Math.floor(Math.random() * 18) + 4,
        seconds: Math.floor(Math.random() * 22) + 1,
    };
}

function FeedRow({ item, isNew }: { item: FeedItem; isNew: boolean }) {
    const cfg = eventConfig[item.type];
    const subtitle = {
        hire: `${item.location} · ${item.company}`,
        match: `${item.matchCount} candidates · ${item.location}`,
        offer: `${item.rate} · ${item.location}`,
        invoice: `$0 agency fees · ${item.company}`,
    }[item.type];

    return (
        <div style={{
            display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
            padding: 'var(--space-3) var(--space-4)',
            borderRadius: 'var(--radius-lg)',
            background: isNew ? cfg.bg : 'var(--color-gray-50)',
            border: `1px solid ${isNew ? cfg.border : 'var(--color-gray-100)'}`,
            animation: isNew ? 'mkt-fade-in 400ms ease-out' : undefined,
            transition: 'background 600ms, border-color 600ms, opacity 300ms',
            opacity: isNew ? 1 : 0.7,
        }}>
            <div style={{
                width: '26px', height: '26px', borderRadius: '7px', flexShrink: 0,
                background: isNew ? cfg.bg : 'var(--color-gray-100)',
                border: `1px solid ${isNew ? cfg.border : 'transparent'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', fontWeight: 700, color: isNew ? cfg.color : 'var(--text-tertiary)',
            }}>
                {cfg.icon}
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{
                    fontSize: '12.5px', fontWeight: 600, color: 'var(--text-primary)',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                    {cfg.label} · {item.role}
                </div>
                <div style={{
                    fontSize: '11px', color: 'var(--text-tertiary)',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                    {subtitle} · {item.seconds}s ago
                </div>
            </div>
        </div>
    );
}

export default function LiveMarketplaceTicker() {
    const BASE_HIRES = 8_247;
    const BASE_MATCHES = 142_863;
    const BASE_APPS = 1_204_771;

    const [hiresThisWeek, setHiresThisWeek] = useState(BASE_HIRES);
    const [matchesToday, setMatchesToday] = useState(BASE_MATCHES);
    const [appsProcessed, setAppsProcessed] = useState(BASE_APPS);
    const [feed, setFeed] = useState<FeedItem[]>([]);
    const [feedKey, setFeedKey] = useState(0);

    useEffect(() => {
        setFeed([generateItem(), generateItem(), generateItem(), generateItem()]);

        const t1 = setInterval(() => setHiresThisWeek(p => p + 1), 7000);
        const t2 = setInterval(() => setMatchesToday(p => p + Math.floor(Math.random() * 3) + 1), 3000);
        const t3 = setInterval(() => setAppsProcessed(p => p + Math.floor(Math.random() * 5) + 2), 2000);
        const t4 = setInterval(() => {
            setFeed(prev => [generateItem(), ...prev.slice(0, 3)]);
            setFeedKey(prev => prev + 1);
        }, 3800);

        return () => { clearInterval(t1); clearInterval(t2); clearInterval(t3); clearInterval(t4); };
    }, []);

    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            {/* LIVE label */}
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 'var(--space-3)', marginBottom: 'var(--space-8)',
            }}>
                <span style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: '#22c55e',
                    boxShadow: '0 0 8px #22c55e, 0 0 20px rgba(34,197,94,0.35)',
                    animation: 'mkt-pulse-live 2s ease-in-out infinite',
                    display: 'inline-block',
                }} />
                <span style={{
                    fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' as const,
                    letterSpacing: '0.12em', color: '#22c55e',
                }}>
                    Live — Marketplace activity right now
                </span>
            </div>

            {/* Big 3-stat row */}
            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'var(--space-6)', marginBottom: 'var(--space-8)', textAlign: 'center',
            }}>
                {[
                    { value: <AnimatedCounter value={hiresThisWeek} />, suffix: '+', label: 'Hires this week' },
                    { value: <AnimatedCounter value={matchesToday} />, suffix: '+', label: 'AI matches today' },
                    { value: <AnimatedCounter value={appsProcessed} />, suffix: '+', label: 'Applications processed' },
                ].map(s => (
                    <div key={s.label}>
                        <div style={{
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800,
                            color: 'var(--text-primary)', lineHeight: 1.1,
                            fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em',
                        }}>
                            {s.value}{s.suffix}
                        </div>
                        <div style={{
                            fontSize: '13px', fontWeight: 500, color: 'var(--text-tertiary)',
                            marginTop: 'var(--space-2)', textTransform: 'uppercase' as const,
                            letterSpacing: '0.06em',
                        }}>
                            {s.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Activity feed */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: 'var(--space-3)',
            }}>
                {feed.map((item, i) => (
                    <FeedRow key={`${feedKey}-${i}`} item={item} isNew={i === 0} />
                ))}
            </div>

            <style>{`
                @keyframes mkt-pulse-live {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.4); }
                }
                @keyframes mkt-fade-in {
                    from { opacity: 0; transform: translateY(-6px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
