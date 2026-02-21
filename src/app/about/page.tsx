import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'About Braintrust — AI Recruiting, Talent Marketplace & Workflow Automation',
    description: 'Braintrust is an AI infrastructure company. We build AI interview software, talent marketplace technology, and workflow automation for enterprise teams. Founded 2018. 2M+ network members. 100+ enterprise customers.',
};

const timeline = [
    { year: '2018', label: 'Founded', desc: 'Launched with a mission to remove the middleman from enterprise hiring.' },
    { year: '2020', label: 'Marketplace Scale', desc: 'Grew rapidly during the remote-work surge — connecting laid-off tech talent with contract opportunities.' },
    { year: '2022', label: 'AI Training', desc: 'Expanded into human data infrastructure, supporting frontier AI labs and model training at scale.' },
    { year: '2024', label: 'Braintrust AIR', desc: 'Launched our AI interview software as a standalone enterprise product line.' },
    { year: '2025', label: 'Braintrust Nexus', desc: 'Extended automation across the enterprise with AI-native workflow infrastructure.' },
];

const team = [
    {
        name: 'Adam Jackson',
        title: 'Co-Founder & CEO',
        bio: 'Adam co-founded Braintrust to build a talent network that returns value to the people who create it. Previously, he co-founded Doctor on Demand, which he scaled to over 1,000 physicians and a multi-billion dollar valuation. He has spent over a decade building marketplace businesses that challenge legacy fee structures.',
        initials: 'AJ',
    },
    {
        name: 'Grady Gardner',
        title: 'GM & CRO, AIR and Marketplace',
        bio: 'Grady leads revenue operations, go-to-market strategy, and commercial execution for Braintrust AIR and the Talent Marketplace. He brings deep enterprise sales and operational leadership experience, having scaled high-growth technology businesses across SaaS and marketplace models.',
        initials: 'GG',
    },
    {
        name: 'Nick Velloff',
        title: 'Chief Architect',
        bio: 'Nick leads the technical architecture of Braintrust\'s AI infrastructure — spanning the conversational AI engine powering AIR, the Nexus automation platform, and the underlying data systems that connect the network. He has built enterprise-grade infrastructure across distributed systems and machine learning applications.',
        initials: 'NV',
    },
    {
        name: 'Andy Wang',
        title: 'Head of Finance',
        bio: 'Andy oversees financial strategy, planning, and operations across Braintrust\'s three business lines. He brings experience from high-growth technology businesses and institutional finance, with a focus on building the operational infrastructure that supports rapid scale.',
        initials: 'AW',
    },
];

export default function About() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
                    <div className="hero__content">
                        <div className="badge">About Braintrust</div>
                        <h1>
                            Building the Infrastructure{' '}
                            <span className="text-gradient">for Intelligent Work.</span>
                        </h1>
                        <p style={{ maxWidth: '680px', margin: '0 auto' }}>
                            Braintrust is an AI infrastructure company. We build the tools that help enterprise organizations hire smarter, train AI models, and automate the workflows that slow teams down — all connected through a network of over two million vetted professionals.
                        </p>
                        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-8)' }}>
                            <Link href="/book-demo" className="btn btn--primary">Book a Demo</Link>
                            <Link href="/for-companies" className="btn btn--secondary">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STAT STRIP ───────────────────────────────────────── */}
            <section className="section section--dark" style={{ padding: 'var(--space-12) 0' }}>
                <div className="container">
                    <div className="stats-grid">
                        <div>
                            <div className="stat__value text-gradient">2018</div>
                            <div className="stat__label">Founded</div>
                        </div>
                        <div>
                            <div className="stat__value text-gradient">2M+</div>
                            <div className="stat__label">Network Members</div>
                        </div>
                        <div>
                            <div className="stat__value text-gradient">100+</div>
                            <div className="stat__label">Enterprise Customers</div>
                        </div>
                        <div>
                            <div className="stat__value text-gradient">100+</div>
                            <div className="stat__label">Countries</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ORIGIN STORY ─────────────────────────────────────── */}
            <section className="section">
                <div className="container container--narrow">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-16)' }}>

                        {/* 2018 */}
                        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 'var(--space-10)', alignItems: 'start' }}>
                            <div>
                                <div style={{ fontSize: 'var(--text-5xl)', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1 }}>2018</div>
                                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 'var(--space-1)' }}>The Beginning</div>
                            </div>
                            <div>
                                <h2 style={{ marginBottom: 'var(--space-4)' }}>The problem was obvious. The solution wasn't.</h2>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                    Enterprise hiring was broken in a specific, frustrating way. Staffing agencies charged 40–60% markups on every placement. Companies paid enormous fees for talent they could barely vet. Professionals kept a fraction of what clients actually paid for their work. And the agency in the middle contributed almost nothing to justify the cut.
                                </p>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                    Adam Jackson co-founded Braintrust in 2018 with a straightforward thesis: build a talent marketplace that eliminates the middleman entirely. No agency markups. No opaque fee structures. Talent earns more. Companies spend less. Hiring gets better.
                                </p>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
                                    The marketplace was built around rigorous, skills-based vetting — not resume parsing — creating a network of professionals who had earned their place through demonstrated competency, not credential signaling.
                                </p>
                            </div>
                        </div>

                        <div style={{ borderTop: '1px solid var(--color-gray-100)' }} />

                        {/* 2020 */}
                        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 'var(--space-10)', alignItems: 'start' }}>
                            <div>
                                <div style={{ fontSize: 'var(--text-5xl)', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1 }}>2020</div>
                                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 'var(--space-1)' }}>Market Inflection</div>
                            </div>
                            <div>
                                <h2 style={{ marginBottom: 'var(--space-4)' }}>A hiring wave, a remote revolution, and a network that was ready.</h2>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                    When the world shifted to remote work in early 2020, Braintrust was already positioned for it. The marketplace launched out of beta into an environment where enterprise demand for contract IT and software talent was accelerating rapidly, and where the traditional agency model — built on in-person relationships and geographic proximity — showed its limits.
                                </p>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                    The platform connected thousands of laid-off technology professionals with contract opportunities at Fortune 2000 companies. Growth during this period validated the core model: enterprise buyers wanted quality talent, fast, without the agency overhead. Professionals wanted to work directly with the companies paying for their expertise.
                                </p>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
                                    The vetting infrastructure built during this period — skills assessment tools, structured evaluation frameworks, quality benchmark systems — became a foundational asset. It would later become the basis for what is now Braintrust AIR.
                                </p>
                            </div>
                        </div>

                        <div style={{ borderTop: '1px solid var(--color-gray-100)' }} />

                        {/* 2022 */}
                        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 'var(--space-10)', alignItems: 'start' }}>
                            <div>
                                <div style={{ fontSize: 'var(--text-5xl)', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1 }}>2022</div>
                                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 'var(--space-1)' }}>AI Training</div>
                            </div>
                            <div>
                                <h2 style={{ marginBottom: 'var(--space-4)' }}>Human infrastructure for the AI era.</h2>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                    As AI research and development accelerated in 2022 and 2023, frontier labs needed something that couldn't be sourced from a server rack: high-quality human judgment at scale. Training data annotation, model evaluation, preference ranking, and domain-expert review require people — diverse, skilled, reliable people working across thousands of disciplines.
                                </p>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                    Braintrust expanded into AI training infrastructure, connecting network members — across healthcare, engineering, STEM, legal, and the humanities — with leading AI labs and infrastructure companies. Thousands of contributors now work monthly on AI training projects, conducting model evaluation, generating specialized datasets, and providing expert review across highly technical domains.
                                </p>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
                                    AI training is now one of the fastest-growing segments of the Braintrust network — and our position as a trusted intermediary between frontier AI development and high-quality human expertise has become a meaningful competitive differentiator.
                                </p>
                            </div>
                        </div>

                        <div style={{ borderTop: '1px solid var(--color-gray-100)' }} />

                        {/* 2024 */}
                        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 'var(--space-10)', alignItems: 'start' }}>
                            <div>
                                <div style={{ fontSize: 'var(--text-5xl)', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1 }}>2024</div>
                                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 'var(--space-1)' }}>Braintrust AIR</div>
                            </div>
                            <div>
                                <h2 style={{ marginBottom: 'var(--space-4)' }}>The assessment tools we built for ourselves became a standalone product.</h2>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                    Over six years of running a marketplace, Braintrust developed assessment infrastructure that enterprise customers kept asking about independently. The AI-driven screening tools we used to vet our own network were outperforming the standalone products our customers were paying external vendors to provide.
                                </p>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                    In 2024, we launched Braintrust AIR as a standalone enterprise product — AI interview software that conducts real, adaptive voice interviews with candidates, evaluates responses semantically, and delivers structured scorecards directly into ATS systems like Workday, iCIMS, Greenhouse, and SmartRecruiters.
                                </p>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
                                    AIR automates the highest-volume, most time-intensive part of enterprise recruiting — the initial screening conversation — at infinite scale, with zero scheduling overhead, and with a consistency and objectivity that human phone screens cannot replicate. It passed an independent third-party bias audit with zero adverse findings across all demographic groups.
                                </p>
                                <div style={{ marginTop: 'var(--space-6)' }}>
                                    <Link href="/products/air" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', fontSize: 'var(--text-base)' }}>
                                        Learn about Braintrust AIR →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div style={{ borderTop: '1px solid var(--color-gray-100)' }} />

                        {/* 2025 */}
                        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 'var(--space-10)', alignItems: 'start' }}>
                            <div>
                                <div style={{ fontSize: 'var(--text-5xl)', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1 }}>2025</div>
                                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 'var(--space-1)' }}>Braintrust Nexus</div>
                            </div>
                            <div>
                                <h2 style={{ marginBottom: 'var(--space-4)' }}>Workflow automation for the entire enterprise.</h2>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                    The same AI infrastructure logic that powers AIR — connecting systems, transforming data, automating structured decisions — applies to far more than recruiting. Enterprises run on dozens of disconnected systems. Data lives in silos. Workflows that should take seconds take weeks because they're stitched together by manual steps and outdated integrations.
                                </p>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                                    Braintrust Nexus is our enterprise workflow automation platform. It lets teams build AI-native automation flows that connect front-office, middle-office, and back-office systems — without engineering resources. Nexus processes data, routes decisions, and triggers actions across 100+ enterprise integrations, designed to replace the manual coordination work that currently consumes massive organizational capacity.
                                </p>
                                <div style={{ marginTop: 'var(--space-6)' }}>
                                    <Link href="/products/nexus" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', fontSize: 'var(--text-base)' }}>
                                        Learn about Braintrust Nexus →
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── TIMELINE VISUAL ──────────────────────────────────── */}
            <section className="section section--gray">
                <div className="container">
                    <div className="section-header" style={{ marginBottom: 'var(--space-12)' }}>
                        <div className="badge">Evolution</div>
                        <h2>Five Years. Three Product Lines. One Mission.</h2>
                        <p>From talent marketplace to AI infrastructure company.</p>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: 'var(--space-2)',
                        position: 'relative',
                    }}>
                        {/* Connector line */}
                        <div style={{
                            position: 'absolute',
                            top: '28px',
                            left: 'calc(10% + 16px)',
                            right: 'calc(10% + 16px)',
                            height: '2px',
                            background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                            zIndex: 0,
                        }} />
                        {timeline.map((item, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 800,
                                    fontSize: 'var(--text-sm)',
                                    marginBottom: 'var(--space-4)',
                                    flexShrink: 0,
                                }}>
                                    {item.year.slice(2)}
                                </div>
                                <div style={{ fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>{item.year}</div>
                                <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }}>{item.label}</div>
                                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TODAY + FORWARD ──────────────────────────────────── */}
            <section className="section">
                <div className="container container--narrow">
                    <div className="section-header" style={{ marginBottom: 'var(--space-10)' }}>
                        <div className="badge">Today</div>
                        <h2>Where We Are — and Where We're Going</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-12)' }}>
                        {[
                            { icon: '🌐', title: 'Talent Marketplace', body: 'A global network of 2M+ vetted professionals connecting with enterprise clients across IT, finance, design, and specialized AI training work — with zero agency fees for talent.' },
                            { icon: '🎙️', title: 'Braintrust AIR', body: 'AI interview software that automates first-round screening at enterprise scale. Conversational voice interviews, semantic scoring, and ATS integration — out of the box.' },
                            { icon: '⚡', title: 'Braintrust Nexus', body: 'AI-native workflow automation. Connect your enterprise systems, remove manual coordination steps, and automate structured decisions across every business function.' },
                        ].map((card, i) => (
                            <div key={i} className="card" style={{ padding: 'var(--space-8)' }}>
                                <div style={{ fontSize: '2rem', marginBottom: 'var(--space-4)' }}>{card.icon}</div>
                                <h3 style={{ marginBottom: 'var(--space-3)', fontSize: 'var(--text-lg)' }}>{card.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>{card.body}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{
                        padding: 'var(--space-10)',
                        borderRadius: 'var(--radius-xl)',
                        background: 'linear-gradient(135deg, var(--color-primary-50), var(--color-white))',
                        border: '1px solid var(--color-primary)',
                        textAlign: 'center',
                    }}>
                        <p style={{ fontSize: 'var(--text-xl)', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
                            By 2026 and beyond, we believe AI infrastructure and human expertise are not competing forces — they're complementary ones. Our job is to build the systems that connect them, at the scale enterprise demands.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── EXECUTIVE TEAM ───────────────────────────────────── */}
            <section className="section section--gray">
                <div className="container">
                    <div className="section-header" style={{ marginBottom: 'var(--space-12)' }}>
                        <div className="badge">Leadership</div>
                        <h2>Executive Team</h2>
                        <p>The leadership team building Braintrust's AI infrastructure platform.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)', maxWidth: '1100px', margin: '0 auto' }}>
                        {team.map((person) => (
                            <div key={person.name} style={{
                                background: 'var(--color-white)',
                                borderRadius: 'var(--radius-xl)',
                                border: '1px solid var(--color-gray-100)',
                                padding: 'var(--space-8)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--space-5)',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        background: 'var(--gradient-warm)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontWeight: 800,
                                        fontSize: 'var(--text-lg)',
                                        flexShrink: 0,
                                        letterSpacing: '0.02em',
                                    }}>
                                        {person.initials}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--text-primary)' }}>{person.name}</div>
                                        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-primary)', fontWeight: 600 }}>{person.title}</div>
                                    </div>
                                </div>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{person.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Work with us."
                description="Whether you're building an enterprise hiring stack, need AI training data infrastructure, or want to automate complex workflows — we'd like to talk."
                primaryLabel="Book a Demo"
                primaryHref="/book-demo"
                secondaryLabel="Explore the Platform"
                secondaryHref="/products"
            />
        </>
    );
}
