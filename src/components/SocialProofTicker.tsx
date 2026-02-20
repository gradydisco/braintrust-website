'use client';
import { useState, useEffect } from 'react';
import styles from './SocialProofTicker.module.css';

const events = [
    { icon: '⚡', text: 'A Nexus workflow just completed', location: 'San Francisco, CA', time: '2s ago', type: 'nexus' },
    { icon: '🎤', text: 'AI interview just completed', location: 'London, UK', time: '5s ago', type: 'air' },
    { icon: '✅', text: 'Candidate shortlisted for Sr. Engineer', location: 'New York, NY', time: '8s ago', type: 'air' },
    { icon: '🤝', text: 'ML Engineer just hired', location: 'Berlin, DE', time: '12s ago', type: 'hire' },
    { icon: '⚡', text: 'Nexus synced 340 records to ATS', location: 'Toronto, CA', time: '15s ago', type: 'nexus' },
    { icon: '🎤', text: 'Voice interview completed in Spanish', location: 'Mexico City, MX', time: '18s ago', type: 'air' },
    { icon: '✅', text: '3 candidates shortlisted for Design Lead', location: 'Austin, TX', time: '22s ago', type: 'air' },
    { icon: '🤝', text: 'Data Scientist just hired', location: 'Singapore, SG', time: '25s ago', type: 'hire' },
    { icon: '⚡', text: 'Automated onboarding workflow triggered', location: 'Sydney, AU', time: '30s ago', type: 'nexus' },
    { icon: '🎤', text: 'AI interview completed in Japanese', location: 'Tokyo, JP', time: '33s ago', type: 'air' },
    { icon: '✅', text: 'Product Manager shortlisted', location: 'Chicago, IL', time: '38s ago', type: 'air' },
    { icon: '🤝', text: 'Full Stack Engineer just hired', location: 'Amsterdam, NL', time: '42s ago', type: 'hire' },
];

export default function SocialProofTicker() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Initial delay before showing first event
        const initialDelay = setTimeout(() => {
            setIsVisible(true);
            setIsAnimating(true);
        }, 3000);

        return () => clearTimeout(initialDelay);
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setIsAnimating(false);

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % events.length);
                setIsAnimating(true);
            }, 400);
        }, 4500);

        return () => clearInterval(interval);
    }, [isVisible]);

    const current = events[currentIndex];

    if (!isVisible) return null;

    return (
        <div className={`${styles.ticker} ${isAnimating ? styles.slideIn : styles.slideOut}`}>
            <div className={styles.tickerContent}>
                <div className={styles.iconWrapper}>
                    <span className={styles.icon}>{current.icon}</span>
                    <span className={styles.liveDot}></span>
                </div>
                <div className={styles.textContent}>
                    <div className={styles.eventText}>{current.text}</div>
                    <div className={styles.eventMeta}>
                        <span className={styles.location}>{current.location}</span>
                        <span className={styles.separator}>·</span>
                        <span className={styles.time}>{current.time}</span>
                    </div>
                </div>
                <button
                    className={styles.closeBtn}
                    onClick={() => setIsVisible(false)}
                    aria-label="Dismiss"
                >
                    ×
                </button>
            </div>
        </div>
    );
}
