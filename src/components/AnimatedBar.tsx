'use client';

import { useState, useEffect, useRef } from 'react';

export default function AnimatedBar({ targetPct, color = 'var(--color-primary)' }: { targetPct: string, color?: string }) {
    const [width, setWidth] = useState('0%');
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // slight delay to feel natural
                    setTimeout(() => setWidth(targetPct), 300);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, [targetPct]);

    return (
        <div ref={ref} style={{ 
            height: '8px', 
            width: '100%', 
            background: 'rgba(50,50,93,0.06)', 
            borderRadius: '10px', 
            overflow: 'hidden',
        }}>
            <div style={{ 
                height: '100%', 
                width: width, 
                background: `linear-gradient(90deg, ${color}, var(--color-accent))`, 
                borderRadius: '10px',
                transition: 'width 1.8s cubic-bezier(0.22, 1, 0.36, 1)',
                boxShadow: '0 2px 4px rgba(245,87,51,0.2)'
            }} />
        </div>
    );
}
