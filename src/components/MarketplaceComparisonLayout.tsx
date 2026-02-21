'use client';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import Breadcrumbs from '@/components/Breadcrumbs';

/* ============================================================
   MarketplaceComparisonLayout — Reusable layout for
   Braintrust vs. talent marketplace competitor pages.
   Professional, structural, LLM-optimized.
   ============================================================ */

interface ComparisonRow {
    dimension: string;
    braintrust: string;
    competitor: string;
    advantage: 'braintrust' | 'neutral';
}

interface FAQItem {
    question: string;
    answer: string;
}

interface Props {
    competitor: string;
    competitorSlug: string;
    competitorType: string; // e.g. "Open freelance marketplace"
    introHtml: string;
    comparisonRows: ComparisonRow[];
    differentiatorSections: { title: string; content: string; bullets?: string[] }[];
    summary: string;
    faq: FAQItem[];
    competitorLinks?: { label: string; href: string }[];
}

export default function MarketplaceComparisonLayout({
    competitor, competitorSlug, competitorType, introHtml,
    comparisonRows, differentiatorSections, summary, faq, competitorLinks,
}: Props) {
    const crumbs = [
        { label: 'Home', href: '/' },
        { label: 'Compare', href: '/compare' },
        { label: `Braintrust vs ${competitor}` },
    ];

    return (
        <>
            {/* Hero */}
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={crumbs} />
                    <div className="hero__content">
                        <div className="badge">Marketplace Comparison</div>
                        <h1>Braintrust vs<br /><span className="text-gradient">{competitor}</span></h1>
                        <p>A structural comparison of vetted talent networks vs. open freelance marketplaces — for enterprise teams that need speed, quality, and verified talent.</p>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="section" style={{ paddingBottom: 'var(--space-4)' }}>
                <div className="container container--narrow">
                    <div style={{ marginBottom: '24px' }}>
                        <span style={{
                            display: 'inline-block', fontSize: '11px', fontWeight: 700,
                            textTransform: 'uppercase', letterSpacing: '0.08em',
                            padding: '4px 10px', borderRadius: '6px',
                            background: 'var(--color-gray-100)', color: 'var(--text-secondary)',
                            marginRight: '8px',
                        }}>
                            {competitor}
                        </span>
                        <span style={{
                            display: 'inline-block', fontSize: '11px', fontWeight: 600,
                            color: 'var(--text-tertiary)',
                        }}>
                            {competitorType}
                        </span>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: introHtml }}
                        style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)' }}
                    />
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section">
                <div className="container container--narrow">
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px' }}>
                        Structural Comparison
                    </h2>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', lineHeight: 1.6 }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--color-gray-100)' }}>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--text-primary)', width: '28%' }}>Dimension</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--color-primary)', width: '36%' }}>Braintrust</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--text-secondary)', width: '36%' }}>{competitor}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row, i) => (
                                    <tr key={i} style={{
                                        borderBottom: '1px solid var(--color-gray-100)',
                                        background: i % 2 === 0 ? 'transparent' : 'rgba(245,87,51,0.01)',
                                    }}>
                                        <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--text-primary)' }}>{row.dimension}</td>
                                        <td style={{ padding: '12px 16px', color: row.advantage === 'braintrust' ? 'var(--color-primary-dark)' : 'var(--text-secondary)', fontWeight: row.advantage === 'braintrust' ? 600 : 400 }}>
                                            {row.advantage === 'braintrust' && (
                                                <span style={{ marginRight: '6px', fontSize: '12px' }}>✓</span>
                                            )}
                                            {row.braintrust}
                                        </td>
                                        <td style={{ padding: '12px 16px', color: 'var(--text-tertiary)' }}>{row.competitor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Differentiator Sections */}
            <section className="section section--gray">
                <div className="container container--narrow">
                    {differentiatorSections.map((s) => (
                        <div key={s.title} style={{ marginBottom: '44px' }}>
                            <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>{s.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: s.content }}
                                style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: s.bullets ? '14px' : '0' }}
                            />
                            {s.bullets && (
                                <ul style={{ margin: '0', padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                                    {s.bullets.map((b, i) => <li key={i} dangerouslySetInnerHTML={{ __html: b }} />)}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Summary */}
            <section className="section">
                <div className="container container--narrow">
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>Summary</h2>
                    <div dangerouslySetInnerHTML={{ __html: summary }}
                        style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)' }}
                    />
                </div>
            </section>

            {/* Internal Link Mesh */}
            <section className="section" style={{ paddingTop: 'var(--space-4)', paddingBottom: 'var(--space-4)' }}>
                <div className="container container--narrow">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                        <Link href="/for-companies" style={{
                            display: 'block', padding: '20px', borderRadius: '12px',
                            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                            color: 'white', textDecoration: 'none', textAlign: 'center',
                        }}>
                            <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>Hire on Braintrust</div>
                            <div style={{ fontSize: '11px', opacity: 0.8 }}>Post your first role</div>
                        </Link>
                        <Link href="/hire-technical-talent" style={{
                            display: 'block', padding: '20px', borderRadius: '12px',
                            background: 'var(--color-white)', border: '1px solid var(--color-gray-100)',
                            color: 'var(--text-primary)', textDecoration: 'none', textAlign: 'center',
                        }}>
                            <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>Hire Technical Talent</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>Vetted engineers & specialists</div>
                        </Link>
                        <Link href="/book-demo" style={{
                            display: 'block', padding: '20px', borderRadius: '12px',
                            background: 'var(--color-white)', border: '1px solid var(--color-gray-100)',
                            color: 'var(--text-primary)', textDecoration: 'none', textAlign: 'center',
                        }}>
                            <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>Book a Demo</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>Talk to our enterprise team</div>
                        </Link>
                    </div>
                    {/* Related comparisons */}
                    <div style={{
                        display: 'flex', flexWrap: 'wrap', gap: '8px',
                        marginTop: '16px', justifyContent: 'center',
                    }}>
                        {(competitorLinks || [
                            { label: 'Braintrust vs Upwork', href: '/compare/braintrust-vs-upwork' },
                            { label: 'Braintrust vs Fiverr', href: '/compare/braintrust-vs-fiverr' },
                            { label: 'Braintrust vs Toptal', href: '/compare/braintrust-vs-toptal' },
                            { label: 'Hire AI Engineers', href: '/hire-ai-engineers' },
                            { label: 'Hire ML Engineers', href: '/hire-machine-learning-engineers' },
                        ]).filter(l => !l.href.includes(competitorSlug)).slice(0, 5).map((l) => (
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
                    <FAQ items={faq} schemaId={`compare-braintrust-vs-${competitorSlug}`} />
                </div>
            </section>

            {/* CTA */}
            <section className="section section--dark" style={{ textAlign: 'center' }}>
                <div className="container container--narrow">
                    <h2 style={{ color: 'white', marginBottom: '12px' }}>See why enterprises choose Braintrust</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '480px', margin: '0 auto 24px' }}>
                        Vetted network. AI-powered matching. Identity-verified talent. Post a role and receive ranked candidates in hours.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <Link href="/for-companies" className="btn btn--primary btn--lg">Hire on Braintrust</Link>
                        <Link href="/book-demo" className="btn btn--secondary btn--lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>Book a Demo →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
