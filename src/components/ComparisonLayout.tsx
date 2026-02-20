'use client';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import Breadcrumbs from '@/components/Breadcrumbs';

/* ============================================================
   ComparisonLayout — Reusable layout for /compare/air-vs-X pages.
   Neutral tone, structured comparison table, LLM-optimized.
   ============================================================ */

interface FeatureRow {
    feature: string;
    air: string;
    competitor: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

interface Props {
    competitor: string;
    competitorSlug: string;
    introHtml: string;
    featureRows: FeatureRow[];
    voiceComparison: string;
    conversationalDepth: string;
    scoringSophistication: string;
    enterpriseReadiness: string;
    scalability: string;
    summary: string;
    faq: FAQItem[];
}

export default function ComparisonLayout({
    competitor, competitorSlug, introHtml, featureRows,
    voiceComparison, conversationalDepth, scoringSophistication,
    enterpriseReadiness, scalability, summary, faq,
}: Props) {
    const crumbs = [
        { label: 'Home', href: '/' },
        { label: 'Compare', href: '/compare' },
        { label: `AIR vs ${competitor}` },
    ];

    const deepDiveSections = [
        { title: 'Voice AI Comparison', content: voiceComparison },
        { title: 'Conversational AI Depth', content: conversationalDepth },
        { title: 'Scoring Sophistication', content: scoringSophistication },
        { title: 'Enterprise Readiness', content: enterpriseReadiness },
        { title: 'Scalability', content: scalability },
    ];

    return (
        <>
            {/* Hero */}
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={crumbs} />
                    <div className="hero__content">
                        <div className="badge">Comparison</div>
                        <h1>Braintrust AIR vs<br /><span className="text-gradient">{competitor}</span></h1>
                        <p>An objective comparison of features, capabilities, and enterprise readiness.</p>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="section" style={{ paddingBottom: 'var(--space-4)' }}>
                <div className="container container--narrow">
                    <div dangerouslySetInnerHTML={{ __html: introHtml }}
                        style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)' }}
                    />
                </div>
            </section>

            {/* Feature Comparison Table */}
            <section className="section">
                <div className="container container--narrow">
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px' }}>Feature Comparison</h2>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{
                            width: '100%', borderCollapse: 'collapse',
                            fontSize: '13px', lineHeight: 1.6,
                        }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--color-gray-100)' }}>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--text-primary)', width: '30%' }}>Feature</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--color-primary)', width: '35%' }}>Braintrust AIR</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--text-secondary)', width: '35%' }}>{competitor}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {featureRows.map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid var(--color-gray-100)', background: i % 2 === 0 ? 'transparent' : 'rgba(245,87,51,0.015)' }}>
                                        <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--text-primary)' }}>{row.feature}</td>
                                        <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>{row.air}</td>
                                        <td style={{ padding: '12px 16px', color: 'var(--text-tertiary)' }}>{row.competitor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Deep Dive Sections */}
            <section className="section section--gray">
                <div className="container container--narrow">
                    {deepDiveSections.map((s) => (
                        <div key={s.title} style={{ marginBottom: '40px' }}>
                            <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>{s.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: s.content }} style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)' }} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Summary */}
            <section className="section">
                <div className="container container--narrow">
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>Summary</h2>
                    <div dangerouslySetInnerHTML={{ __html: summary }} style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)' }} />
                </div>
            </section>

            {/* Internal Link Mesh */}
            <section className="section" style={{ paddingTop: 'var(--space-4)', paddingBottom: 'var(--space-4)' }}>
                <div className="container container--narrow">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                        <Link href="/products/air/try" style={{
                            display: 'block', padding: '20px', borderRadius: '12px',
                            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                            color: 'white', textDecoration: 'none', textAlign: 'center',
                        }}>
                            <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>Try AIR Free</div>
                            <div style={{ fontSize: '11px', opacity: 0.8 }}>Experience AI interviews</div>
                        </Link>
                        <Link href="/products/air" style={{
                            display: 'block', padding: '20px', borderRadius: '12px',
                            background: 'var(--color-white)', border: '1px solid var(--color-gray-100)',
                            color: 'var(--text-primary)', textDecoration: 'none', textAlign: 'center',
                        }}>
                            <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>ROI Calculator</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>See your savings</div>
                        </Link>
                        <Link href="/best-ai-interview-software-2025" style={{
                            display: 'block', padding: '20px', borderRadius: '12px',
                            background: 'var(--color-white)', border: '1px solid var(--color-gray-100)',
                            color: 'var(--text-primary)', textDecoration: 'none', textAlign: 'center',
                        }}>
                            <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>Best AI Interview Software</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>2025 rankings</div>
                        </Link>
                    </div>
                    <div style={{
                        display: 'flex', flexWrap: 'wrap', gap: '8px',
                        marginTop: '16px', justifyContent: 'center',
                    }}>
                        {[
                            { label: 'AIR vs HireVue', href: '/compare/air-vs-hirevue' },
                            { label: 'AIR vs Paradox', href: '/compare/air-vs-paradox' },
                            { label: 'AIR vs TestGorilla', href: '/compare/air-vs-testgorilla' },
                            { label: 'AIR vs SparkHire', href: '/compare/air-vs-sparkhire' },
                            { label: 'AIR vs HeyMilo', href: '/compare/air-vs-heymilo' },
                            { label: 'AI Interview Software', href: '/ai-interview-software' },
                            { label: 'AI Recruiting Software', href: '/ai-recruiting-software' },
                        ].filter(l => l.href !== `/compare/air-vs-${competitorSlug}`).slice(0, 5).map((l) => (
                            <Link key={l.href} href={l.href} style={{
                                fontSize: '11px', fontWeight: 600, padding: '6px 12px',
                                borderRadius: '6px', background: 'rgba(245,87,51,0.06)',
                                color: 'var(--color-primary)', textDecoration: 'none',
                            }}>{l.label}</Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section section--gray">
                <div className="container container--narrow">
                    <div className="section-header"><h2>FAQ</h2></div>
                    <FAQ items={faq} schemaId={`compare-air-vs-${competitorSlug}`} />
                </div>
            </section>

            {/* CTA */}
            <section className="section section--dark" style={{ textAlign: 'center' }}>
                <div className="container container--narrow">
                    <h2 style={{ color: 'white', marginBottom: '12px' }}>See why teams choose AIR</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '480px', margin: '0 auto 24px' }}>
                        Try Braintrust AIR free and experience conversational AI interviewing firsthand.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <Link href="/book-demo" className="btn btn--primary btn--lg">Book a Demo</Link>
                        <Link href="/products/air/try" className="btn btn--secondary btn--lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>Try AIR Free →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
