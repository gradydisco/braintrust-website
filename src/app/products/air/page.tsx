import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import RevealSection from '@/components/RevealSection';

export const metadata: Metadata = {
    title: 'AIR | AI Recruiter | Conversational Voice Interviews & AI Assessments',
    description: 'AIR is Braintrust AI-powered recruiting suite featuring conversational voice interviews, customizable scoring frameworks, and enterprise-scale assessments in 16+ languages.',
};

const faqItems = [
    { question: 'What is AIR?', answer: 'AIR (AI Recruiter) is Braintrust AI-powered recruiting suite that uses machine learning to screen resumes, conduct conversational voice interviews, and provide deeply customizable skills-based candidate assessments at scale.' },
    { question: 'What are conversational voice interviews?', answer: 'AIR conducts real-time, natural-language voice interviews with candidates. The AI adapts questions based on responses, probes deeper on relevant topics, and evaluates communication skills, technical knowledge, and cultural fit — all in a single automated conversation.' },
    { question: 'How many languages does AIR support?', answer: 'AIR supports 16+ languages for both interviews and assessments, making it ideal for global hiring initiatives and multilingual workforces.' },
    { question: 'How does AI screening reduce bias?', answer: 'AIR uses skills-based evaluation criteria rather than demographic signals. The system is regularly audited for fairness and provides transparent scoring rationale for every candidate.' },
    { question: 'Does AIR integrate with existing ATS systems?', answer: 'Yes. AIR integrates with Greenhouse, Lever, Workday, BambooHR, and most major ATS platforms. Custom integrations are available for enterprise clients.' },
    { question: 'How many interviews can AIR handle?', answer: 'AIR is built for enterprise scale — it can conduct thousands of interviews per day, enabling high-volume hiring without proportionally scaling your recruiting team.' },
];

const industries = [
    { name: 'Technology', icon: '💻', desc: 'Software engineering, product, and technical roles at every level.' },
    { name: 'Healthcare', icon: '🏥', desc: 'Clinical, research, and administrative healthcare professionals.' },
    { name: 'Financial Services', icon: '🏦', desc: 'Banking, insurance, fintech, and financial operations talent.' },
    { name: 'Retail & E-Commerce', icon: '🛍️', desc: 'Digital commerce, supply chain, and customer experience roles.' },
    { name: 'Manufacturing', icon: '🏭', desc: 'Engineering, operations, and quality assurance professionals.' },
    { name: 'Professional Services', icon: '📊', desc: 'Consulting, legal, accounting, and advisory talent.' },
    { name: 'Media & Entertainment', icon: '🎬', desc: 'Creative, production, and digital media professionals.' },
    { name: 'Energy & Utilities', icon: '⚡', desc: 'Sustainable energy, infrastructure, and operations roles.' },
];

export default function AIR() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Products', href: '/products' },
                        { label: 'AIR | AI Recruiter' },
                    ]} />
                    <div className="hero__content">
                        <div className="badge">AIR | AI Recruiter</div>
                        <h1>Superhuman<br /><span className="text-gradient">recruiting intelligence.</span></h1>
                        <p>Conversational voice interviews, customizable scoring frameworks, and enterprise-scale assessments in 16+ languages — reducing time-to-hire by 80%.</p>
                        <div className="hero__actions">
                            <Link href="/book-demo" className="btn btn--primary btn--lg">Book a Demo</Link>
                            <Link href="/products/air/try" className="btn btn--secondary btn--lg">Try It Yourself →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== PROMO VIDEO ====== */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <RevealSection>
                        <YouTubeEmbed videoId="clsjRDLglCw" title="AIR | AI Recruiter Demo" />
                    </RevealSection>
                </div>
            </section>

            {/* ====== TRY IT YOURSELF CTA ====== */}
            <section className="section section--gray">
                <div className="container container--narrow">
                    <RevealSection>
                        <div style={{
                            textAlign: 'center',
                            padding: 'var(--space-12) var(--space-8)',
                            borderRadius: 'var(--radius-2xl)',
                            background: 'var(--color-white)',
                            border: '1px solid var(--color-gray-100)',
                            boxShadow: 'var(--shadow-lg)',
                        }}>
                            <div className="badge" style={{ marginBottom: 'var(--space-4)' }}>Interactive</div>
                            <h2 style={{ marginBottom: 'var(--space-3)' }}>Try AIR for yourself</h2>
                            <p style={{ maxWidth: '480px', margin: '0 auto var(--space-6)' }}>
                                Experience AI-powered interviews firsthand. Access live demo sessions across 10+ roles and industries.
                            </p>
                            <Link href="/products/air/try" className="btn btn--primary btn--lg">
                                Access Demo Interviews →
                            </Link>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== CAPABILITIES ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Capabilities</div>
                            <h2>How AIR transforms recruiting</h2>
                            <p>AI-powered tools that screen, interview, and assess candidates at enterprise scale.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div className="grid grid--3">
                            {[
                                { title: 'Conversational Voice Interviews', desc: 'AIR conducts real-time, adaptive voice interviews — evaluating communication, technical depth, and cultural fit. Thousands of interviews per day with consistent quality.' },
                                { title: 'Resume Scoring & Matching', desc: 'Process thousands of applications instantly. AI-powered resume scoring ranks candidates by skills, experience, and role fit with transparent scoring rationale.' },
                                { title: 'Semantic Candidate Search', desc: 'Go beyond keyword matching. AIR understands context, skills adjacency, and career trajectories to surface candidates that traditional searches miss.' },
                                { title: 'Customizable Scoring Frameworks', desc: 'Design evaluation criteria tailored to your roles. Weight technical skills, communication, domain expertise, and behavioral signals to match your hiring philosophy.' },
                                { title: '16+ Languages Supported', desc: 'Conduct interviews and assessments in 16+ languages natively. Global-ready hiring for distributed teams and international talent pools.' },
                                { title: 'Enterprise Scale', desc: 'Built for high-volume hiring. Conduct thousands of interviews per day without scaling your recruiting headcount. Native ATS integrations with Greenhouse, Lever, Workday, and more.' },
                            ].map((item) => (
                                <div key={item.title} className="card card--feature">
                                    <h4 style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h4>
                                    <p style={{ fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== STATS ====== */}
            <section className="section section--dark">
                <div className="container">
                    <RevealSection>
                        <div className="stats-grid">
                            <div><div className="stat__value text-gradient">1000s</div><div className="stat__label">Interviews Per Day</div></div>
                            <div><div className="stat__value text-gradient">80%</div><div className="stat__label">Faster Screening</div></div>
                            <div><div className="stat__value text-gradient">16+</div><div className="stat__label">Languages Supported</div></div>
                            <div><div className="stat__value text-gradient">50+</div><div className="stat__label">ATS Integrations</div></div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== INDUSTRIES SERVED ====== */}
            <section className="section">
                <div className="container">
                    <RevealSection>
                        <div className="section-header">
                            <div className="badge">Industries</div>
                            <h2>Built for every industry</h2>
                            <p>AIR powers hiring across sectors — adapting interviews and assessments to your domain.</p>
                        </div>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                            gap: 'var(--space-4)',
                        }}>
                            {industries.map((industry) => (
                                <div
                                    key={industry.name}
                                    className="card card--feature"
                                    style={{ textAlign: 'center', padding: 'var(--space-6)' }}
                                >
                                    <div style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-3)' }}>{industry.icon}</div>
                                    <h4 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--text-base)' }}>{industry.name}</h4>
                                    <p style={{ fontSize: 'var(--text-xs)', margin: 0 }}>{industry.desc}</p>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ====== FAQ ====== */}
            <section className="section section--gray">
                <div className="container container--narrow">
                    <div className="section-header"><h2>FAQ</h2></div>
                    <FAQ items={faqItems} schemaId="air" />
                </div>
            </section>

            <CTASection title="Transform your recruiting" description="See AIR in action — conversational voice interviews, customizable scoring, and enterprise-scale assessments." primaryLabel="Book a Demo" primaryHref="/book-demo" secondaryLabel="Try It Yourself" secondaryHref="/products/air/try" />
        </>
    );
}
