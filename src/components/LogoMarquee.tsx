'use client';

/**
 * LogoMarquee — infinite auto-scrolling client logo strip
 *
 * 📁 TO SWAP IN REAL LOGOS:
 * 1. Drop your SVG/PNG files into /public/logos/ (e.g. nike.svg, nasa.svg)
 * 2. Replace each `src` below with `/logos/company.svg`
 * 3. Set USE_CLEARBIT = false
 *
 * Current mode: Clearbit placeholder URLs (no downloads needed)
 */

// ─── Logo list ────────────────────────────────────────────────────────────────
// To add/remove logos: edit this array and drop files in /public/logos/
const logos: { name: string; src: string }[] = [
    { name: 'NASA', src: '/logos/nasa.png' },
    { name: 'Google', src: '/logos/google.png' },
    { name: 'Goldman Sachs', src: '/logos/goldman-sachs.png' },
    { name: 'Deloitte', src: '/logos/deloitte.png' },
    { name: 'Atlassian', src: '/logos/atlassian.png' },
    { name: 'Porsche', src: '/logos/porsche.png' },
    { name: 'PayPal', src: '/logos/paypal.png' },
    { name: 'Honda', src: '/logos/honda.svg' },
    { name: 'Whole Foods', src: '/logos/whole-foods.png' },
    { name: 'Reddit', src: '/logos/reddit.png' },
    { name: 'Coursera', src: '/logos/coursera.webp' },
    { name: 'Wayfair', src: '/logos/wayfair.png' },
    { name: 'Colgate', src: '/logos/colgate.svg' },
    { name: 'Pepsi', src: '/logos/pepsi.png' },
    { name: 'Bank of America', src: '/logos/bank-of-america.png' },
    { name: 'Scale AI', src: '/logos/scale-ai.webp' },
    { name: 'Dayforce', src: '/logos/dayforce.webp' },
    { name: 'Pacific Life', src: '/logos/pacific-life.webp' },
    { name: 'Guardian', src: '/logos/guardian.png' },
    { name: 'Motley Fool', src: '/logos/motley-fool.png' },
    { name: 'Task Rabbit', src: '/logos/taskrabbit.png' },
    { name: 'Stanley', src: '/logos/stanley.png' },
    { name: 'Celsius', src: '/logos/celsius.png' },
];

// Duplicate so the marquee loops seamlessly
const track = [...logos, ...logos];

interface LogoMarqueeProps {
    label?: string;
    speed?: number; // seconds for one full loop
}

export default function LogoMarquee({
    label = 'Trusted by the world\'s leading companies',
    speed = 40,
}: LogoMarqueeProps) {
    return (
        <div style={{ overflow: 'hidden', userSelect: 'none' }}>
            {/* Label */}
            {label && (
                <p style={{
                    textAlign: 'center',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-tertiary)',
                    marginBottom: '28px',
                }}>
                    {label}
                </p>
            )}

            {/* Fade edges — color set via --lm-bg to match the parent section */}
            <div style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', zIndex: 2,
                    background: 'linear-gradient(90deg, var(--lm-bg, #fff) 0%, transparent 100%)',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', zIndex: 2,
                    background: 'linear-gradient(270deg, var(--lm-bg, #fff) 0%, transparent 100%)',
                    pointerEvents: 'none',
                }} />

                {/* Scrolling track */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '64px',
                    animation: `logo-marquee ${speed}s linear infinite`,
                    width: 'max-content',
                }}>
                    {track.map((logo, i) => (
                        <div
                            key={`${logo.name}-${i}`}
                            className="logo-marquee-item"
                            title={logo.name}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '40px',
                                flexShrink: 0,
                            }}
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                width={120}
                                height={44}
                                style={{
                                    height: '40px',
                                    width: 'auto',
                                    maxWidth: '130px',
                                    objectFit: 'contain',
                                    filter: 'grayscale(100%)',
                                    opacity: 0.45,
                                    transition: 'filter 300ms ease, opacity 300ms ease',
                                }}
                                onError={(e) => {
                                    // Fallback to text if image fails to load
                                    const wrap = e.currentTarget.parentElement;
                                    if (wrap) {
                                        e.currentTarget.style.display = 'none';
                                        wrap.innerHTML = `<span class="logo-text-fallback">${logo.name}</span>`;
                                    }
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes logo-marquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                .logo-marquee-item:hover img {
                    filter: grayscale(0%) !important;
                    opacity: 1 !important;
                }
                .logo-text-fallback {
                    font-size: 13px;
                    font-weight: 700;
                    color: var(--text-tertiary);
                    letter-spacing: 0.04em;
                    white-space: nowrap;
                    opacity: 0.5;
                }
            `}</style>
        </div>
    );
}
