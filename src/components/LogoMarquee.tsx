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
// Replace `src` values with `/logos/filename.svg` after uploading your files.
const logos: { name: string; src: string }[] = [
    { name: 'NASA', src: 'https://logo.clearbit.com/nasa.gov' },
    { name: 'Nike', src: 'https://logo.clearbit.com/nike.com' },
    { name: 'Goldman Sachs', src: 'https://logo.clearbit.com/goldmansachs.com' },
    { name: 'Porsche', src: 'https://logo.clearbit.com/porsche.com' },
    { name: 'Atlassian', src: 'https://logo.clearbit.com/atlassian.com' },
    { name: 'Deloitte', src: 'https://logo.clearbit.com/deloitte.com' },
    { name: 'Nestlé', src: 'https://logo.clearbit.com/nestle.com' },
    { name: 'Wayfair', src: 'https://logo.clearbit.com/wayfair.com' },
    { name: 'Honda', src: 'https://logo.clearbit.com/honda.com' },
    { name: 'Colgate', src: 'https://logo.clearbit.com/colgate.com' },
    { name: 'Capgemini', src: 'https://logo.clearbit.com/capgemini.com' },
    { name: 'Coursera', src: 'https://logo.clearbit.com/coursera.org' },
    { name: 'Pacific Life', src: 'https://logo.clearbit.com/pacificlife.com' },
    { name: 'Pepsi', src: 'https://logo.clearbit.com/pepsi.com' },
    { name: 'Airbnb', src: 'https://logo.clearbit.com/airbnb.com' },
    { name: 'Stripe', src: 'https://logo.clearbit.com/stripe.com' },
    { name: 'Shopify', src: 'https://logo.clearbit.com/shopify.com' },
    { name: 'Zendesk', src: 'https://logo.clearbit.com/zendesk.com' },
    { name: 'Dropbox', src: 'https://logo.clearbit.com/dropbox.com' },
    { name: 'Square', src: 'https://logo.clearbit.com/squareup.com' },
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

            {/* Fade edges */}
            <div style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', zIndex: 2,
                    background: 'linear-gradient(90deg, var(--marquee-bg, white) 0%, transparent 100%)',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', zIndex: 2,
                    background: 'linear-gradient(270deg, var(--marquee-bg, white) 0%, transparent 100%)',
                    pointerEvents: 'none',
                }} />

                {/* Scrolling track */}
                <div style={{
                    display: 'flex',
                    gap: '48px',
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
                                width={100}
                                height={36}
                                style={{
                                    height: '32px',
                                    width: 'auto',
                                    maxWidth: '110px',
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
