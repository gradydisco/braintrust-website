import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'For Companies — Hire Top Talent & AI Solutions',
    description: 'Access 2M+ vetted professionals, AI-powered recruiting tools, and enterprise-grade AI training data. Competitive pricing. Enterprise compliance built-in.',
};

const products = [
    {
        title: 'Talent Marketplace',
        description: 'Access a global network of 2M+ vetted engineers, designers, PMs, STEM professionals, sales experts, researchers, and specialists. AI-powered matching finds ideal candidates in hours, not weeks.',
        href: '/products/talent-marketplace',
        features: ['AI-Powered Matching', 'Competitive Pricing', 'Enterprise Compliance', 'Human Data for AI Training'],
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: 'AIR | AI Recruiter',
        description: 'Deploy AI-powered recruiting that screens, interviews, and assesses candidates with superhuman consistency. Reduce time-to-hire by 80%.',
        href: '/products/air',
        features: ['AI Screening', 'Automated Interviews', 'Skills Assessment', 'Bias-Reduced Hiring'],
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z" /><path d="M12 2a10 10 0 0 1 10 10" />
                <circle cx="12" cy="12" r="6" />
            </svg>
        ),
    },
    {
        title: 'Nexus',
        description: 'Automate workflows across your entire organization — not just recruiting. Connect every tool you use, trigger custom rules, and let Nexus handle the coordination so your team can focus on decisions, not administration.',
        href: '/products/nexus',
        features: ['Cross-Functional Automation', '200+ Integrations', 'Custom Rules Engine', 'Real-time Dashboards'],
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
];

export default function ForCompanies() {
    return (
        <>
            <section className={`hero hero--centered ${styles.hero}`}>
                <div className={styles.heroBg}></div>
                <div className="container">
                    <div className="hero__content">
                        <div className="badge">For Companies</div>
                        <h1>Hire smarter.<br /><span className="text-gradient">Scale faster.</span></h1>
                        <p>One platform for elite talent, AI-powered recruiting, and enterprise AI training data — with competitive pricing and full compliance.</p>
                        <div className="hero__actions">
                            <Link href="/book-demo" className="btn btn--primary btn--lg" id="companies-hero-demo">Book a Demo</Link>
                            <Link href="/products" className="btn btn--secondary btn--lg" id="companies-hero-products">Explore Products</Link>
                        </div>

                        {/* HERO MEDIA */}
                        <div style={{
                            position: 'relative', maxWidth: 960, margin: 'var(--space-12) auto 0',
                            borderRadius: 'var(--radius-2xl)', overflow: 'hidden',
                            boxShadow: 'var(--shadow-xl)', border: '1px solid rgba(0,0,0,0.05)',
                        }}>
                            <img
                                src="/images/companies_hiring.png"
                                alt="Founders discussing hiring strategy"
                                style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Platform</div>
                        <h2>Three products.<br />One powerful ecosystem.</h2>
                        <p>Everything you need to hire top talent, leverage AI, and automate workflows — in a single platform.</p>
                    </div>

                    <div className={styles.productGrid}>
                        {products.map((product) => (
                            <Link key={product.href} href={product.href} className={styles.productCard}>
                                <div className="feature-icon">{product.icon}</div>
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <ul className={styles.featureList}>
                                    {product.features.map((f) => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>
                                <span className={styles.learnMore}>
                                    Learn more →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--gray">
                <div className="container">
                    <div className="stats-grid">
                        <div><div className="stat__value text-gradient">80%</div><div className="stat__label">Faster Time-to-Hire</div></div>
                        <div><div className="stat__value text-gradient">$0</div><div className="stat__label">Talent Fees</div></div>
                        <div><div className="stat__value text-gradient">95%</div><div className="stat__label">Hire Satisfaction Rate</div></div>
                        <div><div className="stat__value text-gradient">5 days</div><div className="stat__label">Avg. Time to First Match</div></div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to hire smarter?"
                description="Book a demo and see how Braintrust can transform your talent strategy."
                primaryLabel="Book a Demo"
                primaryHref="/book-demo"
                secondaryLabel="View Pricing"
                secondaryHref="/pricing"
            />
        </>
    );
}
