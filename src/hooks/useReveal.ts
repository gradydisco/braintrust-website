'use client';
import { useEffect, useRef, type RefObject } from 'react';

/**
 * Hook that adds scroll-triggered reveal animation to an element.
 * Uses IntersectionObserver to add 'revealed' class when element enters viewport.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
    threshold = 0.1
): RefObject<T | null> {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -60px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}

/**
 * Hook that observes multiple children of a parent element and reveals them
 * with staggered delays. Children should have the 'reveal' class.
 */
export function useRevealGroup<T extends HTMLElement = HTMLElement>(
    threshold = 0.1
): RefObject<T | null> {
    const ref = useRef<T>(null);

    useEffect(() => {
        const parent = ref.current;
        if (!parent) return;

        const children = parent.querySelectorAll('.reveal');
        if (children.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Stagger children reveals
                        const items = entry.target.querySelectorAll('.reveal');
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('revealed');
                            }, index * 100);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        );

        observer.observe(parent);
        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}
