'use client';

/**
 * G2BadgeStrip — proper G2-style shield/pennant badges in a single row.
 *
 * Usage:
 *   <G2BadgeStrip />            — all G2 badges
 *   <G2BadgeStrip showSoc2 />  — includes AICPA SOC 2 badge image
 */

const G2_RED = '#ff492c';
const G2_BLUE = '#1464f6';

/* Badge dimensions */
const BADGE_W = 112;           // fixed width — keeps all badges uniform
const BADGE_H = 124;           // total height incl. shield point
const NOTCH = 0.78;          // triangle starts at 78% of height
const RECT_H = Math.round(BADGE_H * NOTCH);  // ~97px rectangular area
const BAR_TOP = RECT_H - 5;                   // gradient bar Y position

// ─────────────────────────────────────────────────────────────────────────────
// G2 logo icon (orange square with white "G2")
// ─────────────────────────────────────────────────────────────────────────────
function G2Icon({ size = 20 }: { size?: number }) {
    return (
        <div style={{
            width: size,
            height: size,
            background: G2_RED,
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
        }}>
            <span style={{
                color: 'white',
                fontSize: `${Math.round(size * 0.48)}px`,
                fontWeight: 900,
                letterSpacing: '-0.5px',
                lineHeight: 1,
                fontFamily: 'Arial Black, Arial, sans-serif',
                userSelect: 'none',
            }}>
                G2
            </span>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Rating chip (rectangular — no shield point)
// ─────────────────────────────────────────────────────────────────────────────
function G2RatingBadge() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: `${BADGE_W - 12}px`,
            height: `${RECT_H}px`,
            background: 'white',
            border: '1.5px solid rgba(0,0,0,0.12)',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            gap: '4px',
            boxSizing: 'border-box',
            flexShrink: 0,
        }}>
            <G2Icon size={20} />
            <div style={{ display: 'flex', gap: '1.5px', marginTop: '2px' }}>
                {[...Array(4)].map((_, i) => (
                    <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={G2_RED} stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                ))}
                <svg width="11" height="11" viewBox="0 0 24 24" stroke="none">
                    <defs>
                        <linearGradient id="g2half">
                            <stop offset="58%" stopColor={G2_RED} />
                            <stop offset="58%" stopColor="#e2e8f0" />
                        </linearGradient>
                    </defs>
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        fill="url(#g2half)"
                    />
                </svg>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#1e293b' }}>
                4.6 / 5
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Shield / pennant award badge
// Layout (all centered):
//   [G2 icon]
//   FALL 2025
//   Award Title
//   [gradient bar]  ← at NOTCH
//   [shield point]
// ─────────────────────────────────────────────────────────────────────────────
function G2AwardBadge({ title, season = 'FALL 2025' }: { title: string; season?: string }) {
    const clipPath = `polygon(0 0, 100% 0, 100% ${NOTCH * 100}%, 50% 100%, 0 ${NOTCH * 100}%)`;

    return (
        <div style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.10))', flexShrink: 0 }}>
            <div style={{
                width: `${BADGE_W}px`,
                height: `${BADGE_H}px`,
                background: 'white',
                clipPath,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px 10px 0',
                textAlign: 'center',
                boxSizing: 'border-box',
            }}>
                {/* G2 icon — centered at top */}
                <G2Icon size={20} />

                {/* Season label */}
                <div style={{
                    fontSize: '7px',
                    fontWeight: 700,
                    color: '#94a3b8',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase' as const,
                    marginTop: '4px',
                    marginBottom: '6px',
                }}>
                    {season}
                </div>

                {/* Award title */}
                <div style={{
                    fontSize: '12px',
                    fontWeight: 900,
                    color: '#0f172a',
                    lineHeight: 1.25,
                }}>
                    {title}
                </div>

                {/* Gradient bar — sits just above the triangle notch */}
                <div style={{
                    position: 'absolute',
                    top: `${BAR_TOP}px`,
                    left: 0,
                    right: 0,
                    height: '5px',
                    background: `linear-gradient(90deg, ${G2_RED} 0%, ${G2_BLUE} 100%)`,
                }} />
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Public strip component
// ─────────────────────────────────────────────────────────────────────────────
const AWARDS = [
    'Best Est. ROI',
    'Fastest Implementation',
    'Best Results',
    'Leader',
    'Highest User Adoption',
];

interface G2BadgeStripProps {
    showSoc2?: boolean;
    season?: string;
}

export default function G2BadgeStrip({ showSoc2 = false, season = 'FALL 2025' }: G2BadgeStripProps) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',      /* vertically center all items */
            justifyContent: 'center',
            flexWrap: 'nowrap',        /* force single row */
            overflowX: 'auto',         /* scroll on small viewports */
            gap: '10px',
            padding: '4px 0 12px',
            /* hide scrollbar */
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
        } as React.CSSProperties}>
            <G2RatingBadge />

            {AWARDS.map(award => (
                <G2AwardBadge key={award} title={award} season={season} />
            ))}

            {showSoc2 && (
                <img
                    src="/badges/soc2.png"
                    alt="AICPA SOC 2 – Service Organizations"
                    style={{
                        height: `${RECT_H + 4}px`,
                        width: 'auto',
                        objectFit: 'contain',
                        flexShrink: 0,
                    }}
                />
            )}
        </div>
    );
}
