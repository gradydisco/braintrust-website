'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './PriceChart.module.css';

// Generate realistic-looking 90-day price data starting around $0.09 and ending near $0.065
function generatePriceData() {
    const data: { date: string; price: number }[] = [];
    const now = new Date();
    let price = 0.092;

    for (let i = 89; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);

        // Add realistic daily fluctuation
        const change = (Math.random() - 0.52) * 0.004;
        price = Math.max(0.055, Math.min(0.12, price + change));

        // Add a dip around day 50-60
        if (i >= 30 && i <= 40) {
            price -= 0.002;
        }

        data.push({
            date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            price: Math.round(price * 10000) / 10000,
        });
    }

    return data;
}

export default function PriceChart() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [data] = useState(generatePriceData);
    const [hoveredPoint, setHoveredPoint] = useState<{ x: number; y: number; date: string; price: number } | null>(null);

    const currentPrice = data[data.length - 1].price;
    const startPrice = data[0].price;
    const change = ((currentPrice - startPrice) / startPrice) * 100;
    const isPositive = change >= 0;

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = 320 * dpr;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = '320px';

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.scale(dpr, dpr);

        const width = rect.width;
        const height = 320;
        const padding = { top: 20, right: 20, bottom: 40, left: 60 };
        const chartWidth = width - padding.left - padding.right;
        const chartHeight = height - padding.top - padding.bottom;

        const prices = data.map((d) => d.price);
        const minPrice = Math.min(...prices) * 0.97;
        const maxPrice = Math.max(...prices) * 1.03;

        const getX = (i: number) => padding.left + (i / (data.length - 1)) * chartWidth;
        const getY = (price: number) => padding.top + (1 - (price - minPrice) / (maxPrice - minPrice)) * chartHeight;

        // Clear
        ctx.clearRect(0, 0, width, height);

        // Grid lines
        ctx.strokeStyle = 'rgba(0,0,0,0.04)';
        ctx.lineWidth = 1;
        const gridLines = 5;
        for (let i = 0; i <= gridLines; i++) {
            const y = padding.top + (i / gridLines) * chartHeight;
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(width - padding.right, y);
            ctx.stroke();

            // Price labels
            const priceLabel = (maxPrice - (i / gridLines) * (maxPrice - minPrice)).toFixed(4);
            ctx.fillStyle = 'rgba(0,0,0,0.35)';
            ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText('$' + priceLabel, padding.left - 8, y + 4);
        }

        // Date labels
        ctx.fillStyle = 'rgba(0,0,0,0.35)';
        ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.textAlign = 'center';
        const labelInterval = Math.floor(data.length / 6);
        for (let i = 0; i < data.length; i += labelInterval) {
            ctx.fillText(data[i].date, getX(i), height - 10);
        }

        // Area fill gradient
        const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
        gradient.addColorStop(0, isPositive ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(getX(0), height - padding.bottom);
        data.forEach((d, i) => ctx.lineTo(getX(i), getY(d.price)));
        ctx.lineTo(getX(data.length - 1), height - padding.bottom);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        // Line
        ctx.beginPath();
        ctx.strokeStyle = isPositive ? '#10B981' : '#EF4444';
        ctx.lineWidth = 2;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        data.forEach((d, i) => {
            if (i === 0) ctx.moveTo(getX(i), getY(d.price));
            else ctx.lineTo(getX(i), getY(d.price));
        });
        ctx.stroke();

        // Current price dot
        const lastX = getX(data.length - 1);
        const lastY = getY(currentPrice);
        ctx.beginPath();
        ctx.arc(lastX, lastY, 4, 0, Math.PI * 2);
        ctx.fillStyle = isPositive ? '#10B981' : '#EF4444';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(lastX, lastY, 7, 0, Math.PI * 2);
        ctx.strokeStyle = isPositive ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();

    }, [data, currentPrice, isPositive]);

    // Handle hover
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const containerWidth = container.getBoundingClientRect().width;
        const padding = { left: 60, right: 20 };
        const chartWidth = containerWidth - padding.left - padding.right;

        const index = Math.round(((x - padding.left) / chartWidth) * (data.length - 1));
        if (index >= 0 && index < data.length) {
            const point = data[index];
            const prices = data.map((d) => d.price);
            const minPrice = Math.min(...prices) * 0.97;
            const maxPrice = Math.max(...prices) * 1.03;
            const px = padding.left + (index / (data.length - 1)) * chartWidth;
            const py = 20 + (1 - (point.price - minPrice) / (maxPrice - minPrice)) * 260;
            setHoveredPoint({ x: px, y: py, date: point.date, price: point.price });
        }
    };

    return (
        <div className={styles.chartContainer}>
            <div className={styles.chartHeader}>
                <div>
                    <div className={styles.chartTitle}>BTRST / USD</div>
                    <div className={styles.chartPrice}>
                        ${currentPrice.toFixed(4)}
                        <span className={`${styles.changeBadge} ${isPositive ? styles.positive : styles.negative}`}>
                            {isPositive ? '+' : ''}{change.toFixed(2)}%
                        </span>
                    </div>
                </div>
                <div className={styles.timeFilters}>
                    <button className={styles.timeBtn}>24h</button>
                    <button className={styles.timeBtn}>1W</button>
                    <button className={`${styles.timeBtn} ${styles.timeBtnActive}`}>3M</button>
                    <button className={styles.timeBtn}>1Y</button>
                    <button className={styles.timeBtn}>All</button>
                </div>
            </div>
            <div className={styles.chartWrapper} ref={containerRef}>
                <canvas
                    ref={canvasRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setHoveredPoint(null)}
                    className={styles.canvas}
                />
                {hoveredPoint && (
                    <div
                        className={styles.tooltip}
                        style={{ left: hoveredPoint.x, top: hoveredPoint.y - 48 }}
                    >
                        <div className={styles.tooltipPrice}>${hoveredPoint.price.toFixed(4)}</div>
                        <div className={styles.tooltipDate}>{hoveredPoint.date}</div>
                    </div>
                )}
            </div>
            <div className={styles.chartFooter}>
                <div className={styles.statRow}>
                    <div className={styles.miniStat}>
                        <span className={styles.miniLabel}>Market Cap</span>
                        <span className={styles.miniValue}>$15.9M</span>
                    </div>
                    <div className={styles.miniStat}>
                        <span className={styles.miniLabel}>Volume (24h)</span>
                        <span className={styles.miniValue}>$165.7K</span>
                    </div>
                    <div className={styles.miniStat}>
                        <span className={styles.miniLabel}>Circulating Supply</span>
                        <span className={styles.miniValue}>241.3M BTRST</span>
                    </div>
                    <div className={styles.miniStat}>
                        <span className={styles.miniLabel}>Total Supply</span>
                        <span className={styles.miniValue}>250M BTRST</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
