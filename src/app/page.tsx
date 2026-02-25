import Link from 'next/link';
import styles from './page.module.css';
import RevealSection from '@/components/RevealSection';
import LogoMarquee from '@/components/LogoMarquee';

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

            {/* HERO MEDIA */}
            <div style={{
              position: 'relative', maxWidth: 1080, margin: 'var(--space-16) auto 0',
              borderRadius: 'var(--radius-2xl)', overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)', border: '1px solid rgba(0,0,0,0.05)',
              background: 'var(--color-white)',
            }}>
              <img
                src="/images/home_collab.png"
                alt="Tech team collaborating"
                style={{ width: '100%', display: 'block', objectFit: 'cover', height: 'auto', maxHeight: '600px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== CLIENT LOGO MARQUEE ====== */}
      <section style={{ background: 'white', padding: 'var(--space-12) 0', '--lm-bg': '#fff' } as React.CSSProperties}>
        <div className="container">
          <LogoMarquee />
        </div>
      </section>

      {/* ====== SOCIAL PROOF / STATS ====== */}
      <section className="section section--gray" style={{ padding: 'var(--space-10) 0' }}>
        <div className="container">
          <RevealSection>
            <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)' }}>
              <div className={styles.stat}>
                <div className="stat__value text-gradient">2M+</div>
                <div className="stat__label">Talent Network Members</div>
              </div>
              <div className={styles.stat}>
                <div className="stat__value text-gradient">100+</div>
                <div className="stat__label">Enterprise &amp; Fortune 2000 Customers</div>
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
          </RevealSection>
        </div>
      </section>

      {/* ====== ECOSYSTEM OVERVIEW ====== */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="section-header">
              <div className="badge">Ecosystem</div>
              <h2>One network.<br />Three powerful dimensions.</h2>
              <p>Braintrust unites talent, technology, and AI infrastructure into a single, intelligent platform.</p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
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
          </RevealSection>
        </div>
      </section>

      {/* ====== PRODUCT HIGHLIGHTS ====== */}
      <section className="section section--dark">
        <div className="container">
          <RevealSection>
            <div className="section-header">
              <div className="badge badge--dark">Products</div>
              <h2>Built for the enterprise.<br />Powered by AI.</h2>
              <p>Three products that transform how companies hire, train AI, and automate workflows.</p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
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
                <h3>AIR | AI Recruiter</h3>
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
          </RevealSection>
        </div>
      </section>

      {/* ====== TALENT DISCIPLINES ====== */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="section-header">
              <div className="badge">Talent</div>
              <h2>The people behind<br />every breakthrough.</h2>
              <p>From engineers shipping production code to designers crafting pixel-perfect experiences — meet the 2M+ professionals who make it happen.</p>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 'var(--space-6)' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {[1, 2, 3, 4, 5].map((num, i) => (
                    <div key={num} style={{
                      width: '48px', height: '48px', borderRadius: '50%',
                      border: '3px solid var(--color-gray-50)',
                      marginLeft: i > 0 ? '-12px' : '0',
                      overflow: 'hidden', position: 'relative', zIndex: 5 - i,
                      boxShadow: 'var(--shadow-md)',
                      background: 'var(--color-gray-100)',
                    }}>
                      <img src={`/images/talent_portrait_${num}.png`} alt="Braintrust Talent" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    border: '3px solid var(--color-gray-50)',
                    marginLeft: '-12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--color-primary-50)', color: 'var(--color-primary)',
                    fontSize: '11px', fontWeight: 800, position: 'relative', zIndex: 0,
                  }}>
                    2M+
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
          <RevealSection delay={200}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '1000px', margin: '0 auto' }}>
              {[
                {
                  title: 'Software Engineering',
                  desc: 'Full-stack, backend, mobile, and embedded engineers building at scale.',
                  count: '450K+',
                  color: '#6366f1',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
                },
                {
                  title: 'Machine Learning & AI',
                  desc: 'ML engineers, AI researchers, and data annotators training the next generation of models.',
                  count: '120K+',
                  color: '#8b5cf6',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.58-3.25 3.93M12 2a4 4 0 00-4 4c0 1.95 1.4 3.58 3.25 3.93M12 22v-8m0 0a3 3 0 110-6" /><circle cx="12" cy="18" r="4" /></svg>,
                },
                {
                  title: 'Product Design & UX',
                  desc: 'UI/UX designers, researchers, and design system architects with enterprise portfolio experience.',
                  count: '180K+',
                  color: '#ec4899',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="13.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="10.5" r="2.5" /><circle cx="8.5" cy="7.5" r="2.5" /><circle cx="6.5" cy="12.5" r="2.5" /><path d="M12 22c-4.97 0-9-2.69-9-6v-1c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v1c0 3.31-4.03 6-9 6z" /></svg>,
                },
                {
                  title: 'Product Management',
                  desc: 'PMs who have shipped at startups and Fortune 500s — roadmaps, strategy, and execution.',
                  count: '95K+',
                  color: '#f59e0b',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>,
                },
                {
                  title: 'Data Science & Analytics',
                  desc: 'Analysts, data engineers, and statisticians turning raw data into business intelligence.',
                  count: '200K+',
                  color: '#10b981',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>,
                },
                {
                  title: 'DevOps & Infrastructure',
                  desc: 'Cloud architects, SREs, and platform engineers keeping systems reliable at scale.',
                  count: '85K+',
                  color: '#0ea5e9',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>,
                },
                {
                  title: 'Marketing & Growth',
                  desc: 'Growth marketers, content strategists, and performance experts who drive real pipeline.',
                  count: '160K+',
                  color: '#f97316',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
                },
                {
                  title: 'Operations & Strategy',
                  desc: 'Ops leaders and strategists who streamline processes and drive organizational efficiency.',
                  count: '110K+',
                  color: '#64748b',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>,
                },
                {
                  title: 'Finance & Accounting',
                  desc: 'CFO-level strategists to financial analysts — FP&A, audit, and compliance experts.',
                  count: '75K+',
                  color: '#059669',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>,
                },
                {
                  title: 'Legal & Compliance',
                  desc: 'In-house counsel, regulatory specialists, and contract professionals.',
                  count: '40K+',
                  color: '#78716c',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                },
                {
                  title: 'STEM & Research',
                  desc: 'Scientists, researchers, and technical experts across biotech, physics, and engineering.',
                  count: '65K+',
                  color: '#7c3aed',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M9 3h6M12 3v7m0 0l-4 8h8l-4-8z" /><circle cx="12" cy="19" r="2" /></svg>,
                },
                {
                  title: 'Sales & Business Dev',
                  desc: 'BDRs, account executives, and sales leaders who close enterprise deals.',
                  count: '130K+',
                  color: '#e11d48',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
                },
              ].map((d) => (
                <div key={d.title} style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: `${d.color}10`,
                      color: d.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>{d.icon}</div>
                    <span style={{
                      fontSize: '12px', fontWeight: 800, color: d.color,
                      background: `${d.color}08`,
                      padding: '2px 8px', borderRadius: '6px',
                    }}>{d.count}</span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>{d.title}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>{d.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/for-talent" className="btn btn--primary btn--lg">
                Explore Our Talent Network
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== GUIDES & RESOURCES ====== */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="section-header">
              <div className="badge">Resources</div>
              <h2>Guides, rankings<br />& comparisons.</h2>
              <p>In-depth resources to help you evaluate AI interview software and build a best-in-class hiring operation.</p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', maxWidth: '1000px', margin: '0 auto 24px' }}>
              <Link href="/best-ai-interview-software-2025" style={{
                display: 'block', padding: '20px', borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(245,87,51,0.05), rgba(255,147,124,0.03))',
                border: '1px solid rgba(245,87,51,0.12)', textDecoration: 'none',
              }}>
                <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--color-primary)', marginBottom: '6px', display: 'block' }}>2025 Rankings</span>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>Best AI Interview Software</div>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>15 platforms ranked & compared</div>
              </Link>
              <Link href="/compare" style={{
                display: 'block', padding: '20px', borderRadius: '14px',
                background: 'var(--color-white)', border: '1px solid var(--color-gray-100)', textDecoration: 'none',
              }}>
                <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--color-primary)', marginBottom: '6px', display: 'block' }}>Comparisons</span>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>AIR vs Competitors</div>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>14 side-by-side comparisons</div>
              </Link>
              <Link href="/ai-interview-software" style={{
                display: 'block', padding: '20px', borderRadius: '14px',
                background: 'var(--color-white)', border: '1px solid var(--color-gray-100)', textDecoration: 'none',
              }}>
                <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--color-primary)', marginBottom: '6px', display: 'block' }}>Guide</span>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>AI Interview Software</div>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>Complete category guide</div>
              </Link>
              <Link href="/ai-voice-interview-software" style={{
                display: 'block', padding: '20px', borderRadius: '14px',
                background: 'var(--color-white)', border: '1px solid var(--color-gray-100)', textDecoration: 'none',
              }}>
                <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--color-primary)', marginBottom: '6px', display: 'block' }}>Guide</span>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>Voice AI Interviews</div>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>Real-time voice vs video vs text</div>
              </Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', maxWidth: '1000px', margin: '0 auto' }}>
              {[
                { label: 'Conversational AI Interviews', href: '/conversational-ai-interview-platform' },
                { label: 'AI Assessment Software', href: '/ai-assessment-software' },
                { label: 'AI Recruiting Software', href: '/ai-recruiting-software' },
                { label: 'Automated Hiring Software', href: '/automated-hiring-software' },
                { label: 'For Healthcare', href: '/ai-interview-software-for-healthcare' },
                { label: 'For Enterprise', href: '/ai-interview-software-for-enterprise' },
                { label: 'For Startups', href: '/ai-interview-software-for-startups' },
                { label: 'For High-Volume', href: '/ai-interview-software-for-high-volume-hiring' },
                { label: 'For Technical Roles', href: '/ai-voice-interviews-for-technical-roles' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  fontSize: '11px', fontWeight: 600, padding: '6px 14px',
                  borderRadius: '8px', background: 'var(--color-white)',
                  border: '1px solid var(--color-gray-100)',
                  color: 'var(--text-secondary)', textDecoration: 'none',
                }}>{link.label}</Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <Link href="/resources" className={styles.cardLink}>
                View All Resources →
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== TRUSTED BY — Logo Marquee (bottom) ====== */}
      <section style={{ background: 'white', padding: 'var(--space-12) 0', '--lm-bg': '#fff' } as React.CSSProperties}>
        <div className="container">
          <LogoMarquee speed={50} />
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="section">
        <div className="container">
          <RevealSection>
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
          </RevealSection>
        </div>
      </section>
    </>
  );
}
