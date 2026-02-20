import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* ====== HERO — AI-NATIVE WORKFORCE PLATFORM ====== */}
      <section className={`hero hero--centered ${styles.hero}`}>
        <div className={styles.heroBg}>
          <div className={styles.gridPattern}></div>
          <div className={styles.glowOrb1}></div>
          <div className={styles.glowOrb2}></div>
        </div>
        <div className="container">
          <div className="hero__content">
            <div className={`badge ${styles.heroBadge}`}>
              <span className={styles.pulse}></span>
              AI-Powered Talent Network
            </div>
            <h1>
              The future of work,
              <br />
              <span className="text-gradient">powered by AI.</span>
            </h1>
            <p>
              Braintrust connects elite talent with the world&apos;s most innovative companies — powered by AI recruiting, workflow automation, and enterprise-grade human data infrastructure.
            </p>

            <div className={styles.audienceCards}>
              <Link href="/for-companies" className={styles.audienceCard} id="audience-companies">
                <div className={styles.audienceIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3>I&apos;m a Company</h3>
                <p>Hire top talent, access AI training data, and automate recruiting with our AI suite.</p>
                <span className={styles.audienceArrow}>
                  Explore Solutions
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link href="/for-talent" className={styles.audienceCard} id="audience-talent">
                <div className={`${styles.audienceIcon} ${styles.audienceIconAccent}`}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3>I&apos;m Talent</h3>
                <p>Find high-paying jobs, contribute to AI training, and earn top rates at elite companies.</p>
                <span className={`${styles.audienceArrow} ${styles.audienceArrowAccent}`}>
                  View Opportunities
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SOCIAL PROOF / STATS ====== */}
      <section className="section section--gray">
        <div className="container">
          <div className="stats-grid">
            <div className={styles.stat}>
              <div className="stat__value text-gradient">2M+</div>
              <div className="stat__label">Talent Network Members</div>
            </div>
            <div className={styles.stat}>
              <div className="stat__value text-gradient" style={{ whiteSpace: 'nowrap' }}>Fortune 1000</div>
              <div className="stat__label">Enterprise Clients</div>
            </div>
            <div className={styles.stat}>
              <div className="stat__value text-gradient">80%</div>
              <div className="stat__label">Reduced Time-to-Hire</div>
            </div>
            <div className={styles.stat}>
              <div className="stat__value text-gradient">100+</div>
              <div className="stat__label">Countries Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ECOSYSTEM OVERVIEW ====== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Ecosystem</div>
            <h2>One network.<br />Three powerful dimensions.</h2>
            <p>Braintrust unites talent, technology, and AI infrastructure into a single, intelligent platform.</p>
          </div>

          <div className={`grid grid--3 ${styles.ecosystemGrid}`}>
            <div className={`card card--feature ${styles.ecosystemCard}`}>
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h4>Products &amp; Platform</h4>
              <p>Talent Marketplace, AIR (AI Recruiter), and Nexus — enterprise tools built for the AI era.</p>
              <Link href="/products" className={styles.cardLink}>
                Explore Products →
              </Link>
            </div>

            <div className={`card card--feature ${styles.ecosystemCard}`}>
              <div className="feature-icon feature-icon--accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4>Talent Network</h4>
              <p>2M+ professionals finding jobs, earning income, and contributing to AI training initiatives.</p>
              <Link href="/for-talent" className={styles.cardLink}>
                Join the Network →
              </Link>
            </div>

            <div className={`card card--feature ${styles.ecosystemCard}`}>
              <div className="feature-icon feature-icon--token">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>
              <h4>BTRST Token</h4>
              <p>Network incentives, ecosystem rewards, and transparent tokenomics powering the platform.</p>
              <Link href="/token" className={styles.cardLink}>
                Learn about BTRST →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PRODUCT HIGHLIGHTS ====== */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <div className="badge badge--dark">Products</div>
            <h2>Built for the enterprise.<br />Powered by AI.</h2>
            <p>Three products that transform how companies hire, train AI, and automate workflows.</p>
          </div>

          <div className={styles.productShowcase}>
            <div className={styles.productCard}>
              <div className={styles.productNumber}>01</div>
              <h3>Talent Marketplace</h3>
              <p>Access elite engineers, designers, researchers, and operators — vetted by AI, across every discipline.</p>
              <ul className={styles.productFeatures}>
                <li>AI-powered matching</li>
                <li>Zero platform fees for talent</li>
                <li>Enterprise compliance built-in</li>
                <li>Human data &amp; AI training</li>
              </ul>
              <Link href="/products/talent-marketplace" className="btn btn--secondary" style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'white' }}>
                Learn More
              </Link>
            </div>

            <div className={styles.productCard}>
              <div className={styles.productNumber}>02</div>
              <h3>AIR — AI Recruiter</h3>
              <p>An AI-powered recruiting suite that screens, interviews, and assesses candidates with superhuman accuracy.</p>
              <ul className={styles.productFeatures}>
                <li>Resume scoring and matching</li>
                <li>Conversational voice interviews</li>
                <li>Customizable scoring frameworks</li>
                <li>16+ languages supported</li>
                <li>Thousands of interviews per day</li>
                <li>Semantic candidate search</li>
              </ul>
              <Link href="/products/air" className="btn btn--secondary" style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'white' }}>
                Learn More
              </Link>
            </div>

            <div className={styles.productCard}>
              <div className={styles.productNumber}>03</div>
              <h3>Nexus</h3>
              <p>Workflow automation that connects your tools, reduces manual overhead, and accelerates operations across your entire business.</p>
              <ul className={styles.productFeatures}>
                <li>Workflow orchestration</li>
                <li>100+ pre-built integrations</li>
                <li>Custom automation rules</li>
                <li>Real-time analytics</li>
              </ul>
              <Link href="/products/nexus" className="btn btn--secondary" style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'white' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TALENT DISCIPLINES ====== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Talent</div>
            <h2>World-class talent<br />across every discipline.</h2>
            <p>Hire across the full spectrum of professional expertise — all rigorously vetted.</p>
          </div>
          <div className="grid grid--auto" style={{ maxWidth: '900px', margin: '0 auto', gap: 'var(--space-4)' }}>
            {[
              'Software Engineering',
              'Machine Learning & AI',
              'Product Design & UX',
              'Product Management',
              'Data Science & Analytics',
              'DevOps & Infrastructure',
              'Marketing & Growth',
              'Operations & Strategy',
              'Finance & Accounting',
              'Legal & Compliance',
              'STEM & Research',
              'Sales & Business Development',
            ].map((cap) => (
              <div key={cap} className="card" style={{ padding: 'var(--space-4) var(--space-6)', textAlign: 'center' }}>
                <span style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TRUSTED BY ====== */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header">
            <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
              Trusted by industry leaders
            </p>
          </div>
          <div className={styles.logoGrid}>
            {['NASA', 'Nike', 'Goldman Sachs', 'Porsche', 'Atlassian', 'Deloitte', 'Nestle', 'Pacific Life', 'Colgate', 'Pepsi', 'Honda', 'Wayfair'].map((name) => (
              <div key={name} className={styles.logoPlaceholder}>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2>Ready to transform how you work?</h2>
            <p>Join 2M+ professionals and Fortune 1000 companies on the platform that&apos;s powering the future of work.</p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', position: 'relative', flexWrap: 'wrap' }}>
              <Link href="/book-demo" className="btn btn--white btn--lg" id="home-cta-demo">
                Book a Demo
              </Link>
              <Link href="/for-talent" className="btn btn--secondary btn--lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }} id="home-cta-talent">
                Find Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
