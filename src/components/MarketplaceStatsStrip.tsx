'use client';
import { useState, useEffect, useRef } from 'react';

const stats = [
    { target: 10, suffix: 'K+', prefix: '', label: 'Active Jobs', decimal: false },
    { target: 2, suffix: 'M+', prefix: '', label: 'Community Members', decimal: false },
    { target: 1.3, suffix: 'M+', prefix: '', label: 'Talent Applications', decimal: true },
    { target: 370, suffix: 'M+', prefix: '$', label: 'Paid to Talent', decimal: false },
];

function Counter({ target, decimal, prefix, suffix }: { target: number; decimal: boolean; prefix: string; suffix: string }) {
    const [value, setValue] = useState(0);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const duration = 1600;
        const startTime = Date.now();

        const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(parseFloat((eased * target).toFixed(decimal ? 1 : 0)));
            if (progress < 1) rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [target, decimal]);

    const display = decimal ? value.toFixed(1) : Math.round(value).toLocaleString();

    return <>{prefix}{display}{suffix}</>;
}

export default function MarketplaceStatsStrip() {
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="stats-grid">
            {stats.map(s => (
                <div key={s.label}>
                    <div className="stat__value text-gradient" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        {started ? (
                            <Counter target={s.target} decimal={s.decimal} prefix={s.prefix} suffix={s.suffix} />
                        ) : (
                            `${s.prefix}0${s.suffix}`
                        )}
                    </div>
                    <div className="stat__label">{s.label}</div>
                </div>
            ))}
        </div>
    );
}
