'use client';
import { useState, useRef, useCallback } from 'react';

/**
 * Lazy-loaded YouTube embed — loads a lightweight thumbnail first,
 * then replaces it with the real iframe when clicked.
 * Optimized for performance: no YouTube JS loaded until interaction.
 */
export default function YouTubeEmbed({
    videoId,
    title = 'Video',
}: {
    videoId: string;
    title?: string;
}) {
    const [loaded, setLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleLoad = useCallback(() => {
        setLoaded(true);
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%', // 16:9
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                background: 'var(--color-gray-900)',
                cursor: loaded ? 'default' : 'pointer',
                boxShadow: '0 20px 60px rgba(50, 50, 93, 0.15), 0 10px 20px rgba(0, 0, 0, 0.08)',
            }}
            onClick={!loaded ? handleLoad : undefined}
            role={!loaded ? 'button' : undefined}
            tabIndex={!loaded ? 0 : undefined}
            aria-label={!loaded ? `Play ${title}` : undefined}
            onKeyDown={!loaded ? (e) => { if (e.key === 'Enter' || e.key === ' ') handleLoad(); } : undefined}
        >
            {!loaded ? (
                <>
                    {/* Thumbnail */}
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt={title}
                        loading="lazy"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                    {/* Play button overlay */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0,0,0,0.3)',
                        transition: 'background 250ms',
                    }}>
                        <div style={{
                            width: '72px',
                            height: '72px',
                            borderRadius: '50%',
                            background: 'var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 20px rgba(232, 96, 76, 0.5)',
                            transition: 'transform 250ms, box-shadow 250ms',
                        }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '3px' }}>
                                <polygon points="5,3 19,12 5,21" />
                            </svg>
                        </div>
                    </div>
                    {/* Label */}
                    <div style={{
                        position: 'absolute',
                        bottom: 'var(--space-6)',
                        left: 'var(--space-6)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-2)',
                        padding: '8px 16px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(8px)',
                        color: 'white',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 600,
                    }}>
                        ▶ Watch Demo
                    </div>
                </>
            ) : (
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                    }}
                />
            )}
        </div>
    );
}
