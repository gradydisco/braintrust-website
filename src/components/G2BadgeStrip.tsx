'use client';

/**
 * G2BadgeStrip — renders actual G2-style shield badges + optional SOC 2 image
 *
 * Usage:
 *   <G2BadgeStrip />              — all badges, no SOC 2
 *   <G2BadgeStrip showSoc2 />    — includes the real AICPA SOC 2 badge image
 */

const G2_RED = '#ff492c';
const G2_BLUE = '#1464f6';

// ── G2 "G" icon SVG (orange square) ──────────────────────────────────────────
function G2Icon({ size = 22 }: { size?: number }) {
    return (
        <div style={{
            width: size, height: size,
            background: G2_RED,
            borderRadius: '4px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
        }}>
            <svg width={size * 0.7} height={size * 0.7} viewBox="0 0 20 20" fill="white">
                {/* Simplified G2 wordmark */}
                <text x="2" y="15" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="13">G2</text>
            </svg>
        </div>
    );
}

// ── Rating badge (rectangular, no shield point) ───────────────────────────────
function G2RatingBadge() {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            background: 'white',
            border: '1.5px solid rgba(0,0,0,0.12)',
            borderRadius: '10px',
            padding: '12px 18px 10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            gap: '4px',
        }}>
            <G2Icon />
            <div style={{ display: 'flex', gap: '1.5px', marginTop: '4px' }}>
                {[...Array(4)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={G2_RED} stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                ))}
                <svg width="12" height="12" viewBox="0 0 24 24" stroke="none">
                    <defs>
                        <linearGradient id="g2half">
                            <stop offset="55%" stopColor={G2_RED} />
                            <stop offset="55%" stopColor="#e2e8f0" />
                        </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#g2half)" />
                </svg>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em' }}>
                4.6 / 5
            </div>
        </div>
    );
}

// ── Shield badge (pentagon/pennant shape) ─────────────────────────────────────
const BADGE_W = 116;  // px
const BADGE_H = 138;  // px — includes the triangular shield point
const NOTCH = 0.78; // where the triangle starts (78% of height)
const BAR_TOP = Math.round(BADGE_H * NOTCH) - 6; // gradient bar position

function G2AwardBadge({ title, season = 'FALL 2025' }: { title: string; season?: string }) {
    const clipPath = `polygon(0 0, 100% 0, 100% ${NOTCH * 100}%, 50% 100%, 0 ${NOTCH * 100}%)`;

    return (
        /* drop-shadow respects the clip-path outline */
        <div style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.10))' }}>
            <div style={{
                width: `${BADGE_W}px`,
                height: `${BADGE_H}px`,
                background: 'white',
                clipPath,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '12px 10px 0',
                textAlign: 'center',
                border: '1.5px solid rgba(0,0,0,0.11)', // visible on non-clipped area
                boxSizing: 'border-box',
            }}>
                {/* G2 icon — top right */}
                <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
                    <G2Icon size={22} />
                </div>

                {/* Season label */}
                <div style={{
                    fontSize: '7.5px', fontWeight: 700,
                    color: '#94a3b8',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '3px',
                }}>
                    {season}
                </div>

                {/* "G2" in red */}
                <div style={{
                    fontSize: '11px', fontWeight: 900,
                    color: G2_RED,
                    letterSpacing: '0.03em',
                    marginBottom: '5px',
                }}>
                    G2
                </div>

                {/* Award title */}
                <div style={{
                    fontSize: '13px', fontWeight: 900,
                    color: '#0f172a',
                    lineHeight: 1.2,
                    maxWidth: '90px',
                }}>
                    {title}
                </div>

                {/* Bottom gradient bar — sits just above the triangle notch */}
                <div style={{
                    position: 'absolute',
                    top: `${BAR_TOP}px`,
                    left: 0,
                    right: 0,
                    height: '6px',
                    background: `linear-gradient(90deg, ${G2_RED} 0%, ${G2_BLUE} 100%)`,
                }} />
            </div>
        </div>
    );
}

// ── Public strip component ────────────────────────────────────────────────────
interface G2BadgeStripProps {
    showSoc2?: boolean;
    season?: string;
}

const AWARDS = [
    'Best Est. ROI',
    'Fastest Implementation',
    'Best Results',
    'Leader',
    'Highest User Adoption',
];

export default function G2BadgeStrip({ showSoc2 = false, season = 'FALL 2025' }: G2BadgeStripProps) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '4px 0 8px',
        }}>
            <G2RatingBadge />

            {AWARDS.map(award => (
                <G2AwardBadge key={award} title={award} season={season} />
            ))}

            {showSoc2 && (
                <img
                    src="/badges/soc2.png"
                    alt="AICPA SOC 2 – Service Organizations"
                    style={{ height: `${BADGE_H}px`, width: 'auto', objectFit: 'contain' }}
                />
            )}
        </div>
    );
}
