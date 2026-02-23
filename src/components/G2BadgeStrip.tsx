'use client';

/**
 * G2BadgeStrip — proper G2-style shield badges + optional SOC 2 image
 * All badges align in a single row (nowrap + overflow-x: auto).
 *
 * Usage:
 *   <G2BadgeStrip />            — all G2 badges
 *   <G2BadgeStrip showSoc2 />  — includes the real AICPA SOC 2 badge
 */

const G2_RED = '#ff492c';
const G2_BLUE = '#1464f6';

const BADGE_H = 108;           // total badge height incl. shield point
const NOTCH = 0.80;          // where the triangle starts (80% height)
const RECT_H = Math.round(BADGE_H * NOTCH);   // 86px — rectangular area
const BAR_TOP = RECT_H - 5;    // gradient bar sits just above the notch

// ── G2 orange icon ────────────────────────────────────────────────────────────
function G2Icon({ size = 18 }: { size?: number }) {
    return (
        <div style={{
            width: size, height: size,
            background: G2_RED, borderRadius: '3px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
        }}>
            <span style={{
                color: 'white',
                fontSize: `${Math.round(size * 0.5)}px`,
                fontWeight: 900,
                letterSpacing: '-0.5px',
                lineHeight: 1,
                fontFamily: 'Arial Black, sans-serif',
            }}>G2</span>
        </div>
    );
}

// ── Rating chip (rectangular — matches real G2 rating badge) ──────────────────
function G2RatingBadge() {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center',
            height: `${RECT_H}px`,
            background: 'white',
            border: '1.5px solid rgba(0,0,0,0.13)',
            borderRadius: '9px',
            padding: '0 16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            gap: '3px',
            boxSizing: 'border-box',
        }}>
            <G2Icon size={20} />
            <div style={{ display: 'flex', gap: '1.5px', marginTop: '2px' }}>
                {[...Array(4)].map((_, i) => (
                    <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill={G2_RED} stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                ))}
                {/* half-star */}
                <svg width="10" height="10" viewBox="0 0 24 24" stroke="none">
                    <defs>
                        <linearGradient id="g2half">
                            <stop offset="58%" stopColor={G2_RED} />
                            <stop offset="58%" stopColor="#e2e8f0" />
                        </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#g2half)" />
                </svg>
            </div>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#1e293b', marginTop: '1px' }}>
                4.6 / 5
            </div>
        </div>
    );
}

// ── Shield / pennant badge ────────────────────────────────────────────────────
function G2AwardBadge({ title, season = 'FALL 2025' }: { title: string; season?: string }) {
    const clipPath = `polygon(0 0, 100% 0, 100% ${NOTCH * 100}%, 50% 100%, 0 ${NOTCH * 100}%)`;

    return (
        /* drop-shadow respects the clip-path outline */
        <div style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))' }}>
            <div style={{
                minWidth: '76px',
                height: `${BADGE_H}px`,
                background: 'white',
                clipPath,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                /* bottom padding accommodates the gradient bar + triangle area */
                padding: `9px 14px ${BADGE_H - RECT_H + 6}px`,
                textAlign: 'center',
                boxSizing: 'border-box',
            }}>
                {/* G2 icon — top right */}
                <div style={{ position: 'absolute', top: '6px', right: '6px' }}>
                    <G2Icon size={17} />
                </div>

                {/* Season — pushed left to not overlap the icon */}
                <div style={{
                    width: '100%',
                    paddingRight: '20px',
                    fontSize: '6.5px', fontWeight: 700,
                    color: '#94a3b8',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase' as const,
                    textAlign: 'left',
                    marginBottom: '4px',
                }}>
                    {season}
                </div>

                {/* Award title */}
                <div style={{
                    fontSize: '11.5px', fontWeight: 900,
                    color: '#0f172a',
                    lineHeight: 1.2,
                }}>
                    {title}
                </div>

                {/* Gradient bar just above the triangle notch */}
                <div style={{
                    position: 'absolute',
                    top: `${BAR_TOP}px`,
                    left: 0, right: 0,
                    height: '5px',
                    background: `linear-gradient(90deg, ${G2_RED} 0%, ${G2_BLUE} 100%)`,
                }} />
            </div>
        </div>
    );
}

// ── Public component ──────────────────────────────────────────────────────────
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
            alignItems: 'flex-start',
            justifyContent: 'center',
            /* single row — scrolls horizontally on narrow viewports */
            flexWrap: 'nowrap',
            overflowX: 'auto',
            gap: '10px',
            padding: '4px 2px 10px',
            /* hide scrollbar visually */
            msOverflowStyle: 'none',
            scrollbarWidth: 'none' as const,
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
                        height: `${RECT_H}px`,   // align to badge rectangle (not shield point)
                        width: 'auto',
                        objectFit: 'contain',
                        alignSelf: 'center',
                        flexShrink: 0,
                    }}
                />
            )}
        </div>
    );
}
