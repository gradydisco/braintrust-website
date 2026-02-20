'use client';

import { useEffect, useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import styles from './page.module.css';

interface PriceData {
    current_price: number;
    market_cap: number;
    total_volume: number;
    price_change_percentage_24h: number;
}

export default function TokenPrice() {
    const [priceData, setPriceData] = useState<PriceData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const res = await fetch(
                    'https://api.coingecko.com/api/v3/coins/braintrust?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false'
                );
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setPriceData({
                    current_price: data.market_data.current_price.usd,
                    market_cap: data.market_data.market_cap.usd,
                    total_volume: data.market_data.total_volume.usd,
                    price_change_percentage_24h: data.market_data.price_change_percentage_24h,
                });
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchPrice();
    }, []);

    const formatUSD = (num: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(num);
    const formatCompact = (num: number) => new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(num);

    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'BTRST Token', href: '/token' }, { label: 'Price' }]} />
                    <div className="hero__content">
                        <div className="badge badge--token">BTRST Price</div>
                        <h1>Live market data.</h1>
                        <p>Current BTRST price and market data powered by CoinGecko.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    {loading && (
                        <div className={styles.loading}>
                            <div className={styles.spinner}></div>
                            <p>Loading market data...</p>
                        </div>
                    )}

                    {error && (
                        <div className={styles.error}>
                            <p>Unable to load real-time price data. Please check <a href="https://www.coingecko.com/en/coins/braintrust" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>CoinGecko</a> for current pricing.</p>
                        </div>
                    )}

                    {priceData && (
                        <div className="stats-grid" style={{ marginBottom: 'var(--space-16)' }}>
                            <div>
                                <div className="stat__value text-gradient-token">{formatUSD(priceData.current_price)}</div>
                                <div className="stat__label">Current Price</div>
                            </div>
                            <div>
                                <div className="stat__value" style={{ color: priceData.price_change_percentage_24h >= 0 ? 'var(--color-success)' : 'var(--color-error)' }}>
                                    {priceData.price_change_percentage_24h >= 0 ? '+' : ''}{priceData.price_change_percentage_24h.toFixed(2)}%
                                </div>
                                <div className="stat__label">24h Change</div>
                            </div>
                            <div>
                                <div className="stat__value text-gradient-token">{formatCompact(priceData.market_cap)}</div>
                                <div className="stat__label">Market Cap</div>
                            </div>
                            <div>
                                <div className="stat__value text-gradient-token">{formatCompact(priceData.total_volume)}</div>
                                <div className="stat__label">24h Volume</div>
                            </div>
                        </div>
                    )}

                    {/* CoinGecko Widget Embed */}
                    <div style={{
                        padding: 'var(--space-8)',
                        background: 'var(--color-gray-50)',
                        borderRadius: 'var(--radius-xl)',
                        border: '1px solid var(--color-gray-100)',
                        textAlign: 'center',
                    }}>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-4)' }}>
                            Price chart powered by CoinGecko
                        </p>
                        <div style={{
                            width: '100%',
                            height: 400,
                            background: 'var(--color-white)',
                            borderRadius: 'var(--radius-lg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-tertiary)',
                            fontSize: 'var(--text-sm)',
                        }}>
                            {/* TODO: Embed CoinGecko chart widget or custom chart using historical price API */}
                            Interactive price chart — integrate CoinGecko widget or Chart.js with historical data
                        </div>
                    </div>

                    <div style={{
                        marginTop: 'var(--space-8)',
                        padding: 'var(--space-6)',
                        background: 'var(--color-gray-50)',
                        borderRadius: 'var(--radius-lg)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--text-tertiary)',
                        textAlign: 'center',
                    }}>
                        Data provided by CoinGecko. Prices are indicative and may differ from exchange rates. Not financial advice.
                    </div>
                </div>
            </section>
        </>
    );
}
