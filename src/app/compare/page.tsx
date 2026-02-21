import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Compare Braintrust — AIR, Marketplace & Talent Network Comparisons',
    description: 'Compare Braintrust AIR, Marketplace, and talent network vs. HireVue, TestGorilla, Upwork, Toptal, Fiverr, and more. Detailed structural comparisons for enterprise hiring teams.',
    keywords: 'Braintrust comparison, AIR vs HireVue, Braintrust vs Upwork, Braintrust vs Toptal, Braintrust vs Fiverr, AI interview comparison, talent marketplace comparison',
};

const comparisons = [
    { name: 'HireVue', slug: 'hirevue', desc: 'Enterprise video interviewing & assessments', type: 'Video' },
    { name: 'TestGorilla', slug: 'testgorilla', desc: 'Pre-hire skills assessment library', type: 'Testing' },
    { name: 'Paradox', slug: 'paradox', desc: 'Conversational AI recruiting assistant', type: 'Chat AI' },
    { name: 'VidCruiter', slug: 'vidcruter', desc: 'Video interviewing & recruitment automation', type: 'Video' },
    { name: 'SparkHire', slug: 'sparkhire', desc: 'Simple video interview platform', type: 'Video' },
    { name: 'MyInterview', slug: 'myinterview', desc: 'AI-assisted video screening', type: 'Video' },
    { name: 'Humanly', slug: 'humanly', desc: 'Chat AI for high-volume screening', type: 'Chat AI' },
    { name: 'Interviewer.ai', slug: 'interviewer-ai', desc: 'AI video screening & ranking', type: 'Video' },
    { name: 'BrightHire', slug: 'brighthire', desc: 'Interview intelligence platform', type: 'Intelligence' },
    { name: 'Take2', slug: 'take2', desc: 'Job simulation assessments', type: 'Assessment' },
    { name: 'AlexAI', slug: 'alexai', desc: 'AI recruiting assistant', type: 'Chat AI' },
    { name: 'Micro1', slug: 'micro1', desc: 'AI technical interviewing', type: 'Technical' },
    { name: 'HeyMilo', slug: 'heymilo', desc: 'Voice AI interviews', type: 'Voice AI' },
    { name: 'Willow', slug: 'willow', desc: 'AI recruiting automation', type: 'Automation' },
];

export default function ComparePage() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Compare' }]} />
                    <div className="hero__content">
                        <div className="badge">Comparisons</div>
                        <h1>Compare Braintrust AIR<br /><span className="text-gradient">with any platform.</span></h1>
                        <p>Detailed, side-by-side comparisons of AIR against the top AI interview, assessment, and recruiting platforms.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                        {comparisons.map((c) => (
                            <Link key={c.slug} href={`/compare/air-vs-${c.slug}`} style={{
                                display: 'block', padding: '20px 24px', borderRadius: '12px',
                                background: 'var(--color-white)', border: '1px solid var(--color-gray-100)',
                                textDecoration: 'none', transition: 'border-color 0.2s',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>AIR vs {c.name}</h3>
                                    <span style={{
                                        fontSize: '10px', fontWeight: 700, padding: '3px 8px',
                                        borderRadius: '4px', background: 'var(--color-primary-50)',
                                        color: 'var(--color-primary)', textTransform: 'uppercase',
                                        letterSpacing: '0.04em',
                                    }}>{c.type}</span>
                                </div>
                                <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', margin: 0, lineHeight: 1.5 }}>{c.desc}</p>
                            </Link>
                        ))}
                    </div>

                    {/* Marketplace Comparisons */}
                    <div style={{ marginTop: '48px', marginBottom: '24px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>Talent Marketplace Comparisons</h2>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>How Braintrust&apos;s vetted network compares to open freelance marketplaces.</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                            {[
                                { name: 'Upwork', slug: 'upwork', desc: 'Open freelance marketplace', type: 'Open Market' },
                                { name: 'Fiverr', slug: 'fiverr', desc: 'Task-based gig marketplace', type: 'Gig' },
                                { name: 'Toptal', slug: 'toptal', desc: 'Manual-vetting freelance network', type: 'Vetted' },
                            ].map((c) => (
                                <Link key={c.slug} href={`/compare/braintrust-vs-${c.slug}`} style={{
                                    display: 'block', padding: '20px 24px', borderRadius: '12px',
                                    background: 'var(--color-white)', border: '1px solid var(--color-gray-100)',
                                    textDecoration: 'none', transition: 'border-color 0.2s',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                                        <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>Braintrust vs {c.name}</h3>
                                        <span style={{
                                            fontSize: '10px', fontWeight: 700, padding: '3px 8px',
                                            borderRadius: '4px', background: 'var(--color-primary-50)',
                                            color: 'var(--color-primary)', textTransform: 'uppercase',
                                            letterSpacing: '0.04em',
                                        }}>{c.type}</span>
                                    </div>
                                    <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', margin: 0, lineHeight: 1.5 }}>{c.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section--gray" style={{ textAlign: 'center' }}>
                <div className="container container--narrow">
                    <h2>Not sure which platform fits?</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '460px', margin: '0 auto 20px' }}>
                        Our team will help you evaluate Braintrust AIR for your specific hiring needs.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <Link href="/book-demo" className="btn btn--primary">Book a Demo</Link>
                        <Link href="/products/air/try" className="btn btn--secondary">Try AIR Free →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
