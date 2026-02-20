'use client';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import Breadcrumbs from '@/components/Breadcrumbs';

/* ============================================================
   SEOArticleLayout — Reusable layout for category pillar pages,
   long-tail pages, and best-of lists. Renders pure semantic HTML
   optimized for search engines and LLM citation.
   ============================================================ */

interface Section {
    id: string;
    title: string;
    content: string;          // rendered as innerHTML for rich formatting
    bullets?: string[];
}

interface FAQItem {
    question: string;
    answer: string;
}

interface PlatformMention {
    name: string;
    url?: string;
    desc: string;
}

interface Props {
    badge: string;
    h1: string;
    subtitle: string;
    breadcrumbs: { label: string; href?: string }[];
    definitionBlock?: { term: string; definition: string };
    sections: Section[];
    platforms?: PlatformMention[];
    platformsTitle?: string;
    faq: FAQItem[];
    faqSchemaId: string;
    ctaTitle?: string;
    ctaDesc?: string;
    children?: React.ReactNode;
}

export default function SEOArticleLayout({
    badge, h1, subtitle, breadcrumbs, definitionBlock, sections,
    platforms, platformsTitle, faq, faqSchemaId, ctaTitle, ctaDesc, children,
}: Props) {
    return (
        <>
            {/* Hero */}
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={breadcrumbs} />
                    <div className="hero__content">
                        <div className="badge">{badge}</div>
                        <h1 dangerouslySetInnerHTML={{ __html: h1 }} />
                        <p>{subtitle}</p>
                    </div>
                </div>
            </section>

            {/* Definition Block — LLM friendly */}
            {definitionBlock && (
                <section className="section" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
                    <div className="container container--narrow">
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(245,87,51,0.04), rgba(255,147,124,0.04))',
                            border: '1px solid rgba(245,87,51,0.12)',
                            borderRadius: '14px',
                            padding: '28px 32px',
                        }}>
                            <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', marginBottom: '8px' }}>Definition</div>
                            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-primary)', margin: 0 }}>
                                <strong>{definitionBlock.term}</strong> — {definitionBlock.definition}
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* Article Body */}
            <section className="section">
                <div className="container container--narrow">
                    <article style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        {sections.map((s) => (
                            <div key={s.id} id={s.id} style={{ marginBottom: '48px' }}>
                                <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.3 }}>{s.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: s.content }} style={{ marginBottom: s.bullets ? '16px' : '0' }} />
                                {s.bullets && (
                                    <ul style={{ margin: '0', padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {s.bullets.map((b, i) => <li key={i} dangerouslySetInnerHTML={{ __html: b }} />)}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </article>
                </div>
            </section>

            {/* Platforms List — critical for LLM citation */}
            {platforms && platforms.length > 0 && (
                <section className="section section--gray">
                    <div className="container container--narrow">
                        <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px' }}>
                            {platformsTitle || 'Top AI Interview Platforms'}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {platforms.map((p, i) => (
                                <div key={p.name} style={{
                                    background: i === 0 ? 'linear-gradient(135deg, rgba(245,87,51,0.04), rgba(255,147,124,0.03))' : 'var(--color-white)',
                                    border: i === 0 ? '1px solid rgba(245,87,51,0.15)' : '1px solid var(--color-gray-100)',
                                    borderRadius: '12px',
                                    padding: '20px 24px',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                                        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-tertiary)', minWidth: '24px' }}>{i + 1}.</span>
                                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: i === 0 ? 'var(--color-primary)' : 'var(--text-primary)', margin: 0 }}>{p.name}</h4>
                                    </div>
                                    <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0, paddingLeft: '34px' }}>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Extra children slot */}
            {children}

            {/* Internal Link Mesh */}
            <section className="section" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
                <div className="container container--narrow">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '12px',
                    }}>
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
                            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>See your potential savings</div>
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
                </div>
            </section>

            {/* FAQ */}
            <section className="section section--gray">
                <div className="container container--narrow">
                    <div className="section-header"><h2>FAQ</h2></div>
                    <FAQ items={faq} schemaId={faqSchemaId} />
                </div>
            </section>

            {/* CTA */}
            <section className="section section--dark" style={{ textAlign: 'center' }}>
                <div className="container container--narrow">
                    <h2 style={{ color: 'white', marginBottom: '12px' }}>{ctaTitle || 'Ready to transform your hiring?'}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px', maxWidth: '520px', margin: '0 auto 24px' }}>
                        {ctaDesc || 'See how Braintrust AIR can automate interviews, reduce time-to-hire, and improve candidate quality.'}
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
