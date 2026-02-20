'use client';
import { useEffect, useRef, type ReactNode } from 'react';

interface RevealSectionProps {
    children: ReactNode;
    className?: string;
    as?: 'section' | 'div' | 'article';
    delay?: number;
    threshold?: number;
}

/**
 * Client component wrapper that adds scroll-triggered fade-up animation
 * to its children. Works as a drop-in replacement for <section> or <div>.
 */
export default function RevealSection({
    children,
    className = '',
    as: Tag = 'div',
    delay = 0,
    threshold = 0.12,
}: RevealSectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                        }, delay);
                        observer.unobserve(el);
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay, threshold]);

    return (
        <Tag
            ref={ref as React.RefObject<HTMLDivElement>}
            className={className}
            style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </Tag>
    );
}
