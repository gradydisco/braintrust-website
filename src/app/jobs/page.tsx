import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Browse Jobs — See What You Could Be Matched To | Braintrust',
    description: 'Preview high-quality roles from leading companies. Get certified and Braintrust\'s AI will match you to opportunities where you have a real shot — at real pay.',
    openGraph: {
        title: 'Browse Jobs — See What You Could Be Matched To',
        description: 'Not a job board. A curated preview of what\'s possible once you\'re a Certified Braintrust Talent member.',
    },
};

const featuredRoles = [
    { title: 'Senior Full-Stack Engineer', rate: '$150–200/hr', category: 'Engineering', hired: 42, initials: ['SK', 'JM'] },
    { title: 'Staff ML Engineer', rate: '$180–260/hr', category: 'AI / ML', hired: 28, initials: ['TY', 'AL'] },
    { title: 'Product Designer — AI', rate: '$120–165/hr', category: 'Design', hired: 35, initials: ['ER', 'CC'] },
    { title: 'Data Science Lead', rate: '$170–230/hr', category: 'Data Science', hired: 19, initials: ['JK', 'NP'] },
    { title: 'Medical Professional', rate: '$50–85/hr', category: 'AI Training', hired: 60, initials: ['AB', 'GN'] },
    { title: 'Physics Expert', rate: '$50–100/hr', category: 'AI Training', hired: 50, initials: ['TM', 'DL'] },
    { title: 'Legal Specialist', rate: '$90–110/hr', category: 'AI Training', hired: 20, initials: ['RS', 'KW'] },
    { title: 'Finance Specialist', rate: '$80–100/hr', category: 'AI Training', hired: 20, initials: ['PG', 'SM'] },
    { title: 'DevOps / Cloud Architect', rate: '$140–190/hr', category: 'Engineering', hired: 31, initials: ['MK', 'RL'] },
    { title: 'Senior Product Manager', rate: '$130–185/hr', category: 'Product', hired: 24, initials: ['DT', 'LC'] },
    { title: 'Writer — AI Annotator', rate: '$20–40/hr', category: 'AI Training', hired: 70, initials: ['AF', 'HC'] },
    { title: 'Voice Recording Contributor', rate: '$20–40/hr', category: 'AI Training', hired: 45, initials: ['MR', 'JP'] },
    { title: 'Coding / Developer', rate: '$50–80/hr', category: 'Engineering', hired: 70, initials: ['AK', 'BL'] },
    { title: 'Economics Specialist', rate: '$50–60/hr', category: 'AI Training', hired: 20, initials: ['AT', 'RV'] },
    { title: 'Mathematics Expert', rate: '$20–60/hr', category: 'AI Training', hired: 25, initials: ['TD', 'MN'] },
    { title: 'English Linguistics', rate: '$10–30/hr', category: 'AI Training', hired: 40, initials: ['JR', 'SW'] },
    { title: 'Mechanical Engineer', rate: '$55–80/hr', category: 'Engineering', hired: 10, initials: ['PW', 'BT'] },
    { title: 'Electrical Engineer', rate: '$30–90/hr', category: 'Engineering', hired: 15, initials: ['DB', 'NC'] },
    { title: 'RLHF Healthcare Expert', rate: '$100–180/hr', category: 'AI Training', hired: 18, initials: ['LM', 'KR'] },
    { title: 'ML Operations Engineer', rate: '$140–200/hr', category: 'AI / ML', hired: 22, initials: ['RP', 'SE'] },
    { title: 'UX Researcher', rate: '$90–140/hr', category: 'Design', hired: 16, initials: ['AW', 'DJ'] },
    { title: 'Marketing Strategist', rate: '$85–130/hr', category: 'Marketing', hired: 12, initials: ['KL', 'BM'] },
    { title: 'Frontend Engineer — React', rate: '$130–175/hr', category: 'Engineering', hired: 38, initials: ['VN', 'CR'] },
    { title: 'Content Strategist', rate: '$60–95/hr', category: 'Marketing', hired: 14, initials: ['HL', 'FS'] },
];

const categories = [
    { name: 'Engineering', count: 4800, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>, href: '/jobs?cat=engineering' },
    { name: 'AI & ML', count: 2100, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>, href: '/jobs?cat=ai-ml' },
    { name: 'Product', count: 890, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>, href: '/jobs?cat=product' },
    { name: 'Design', count: 760, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>, href: '/jobs?cat=design' },
    { name: 'Data Science', count: 1200, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>, href: '/jobs?cat=data' },
    { name: 'Marketing', count: 450, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>, href: '/jobs?cat=marketing' },
    { name: 'Operations', count: 620, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>, href: '/jobs?cat=operations' },
    { name: 'AI Training', count: 900, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>, href: '/jobs?cat=ai-training' },
    { name: 'Finance', count: 340, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>, href: '/jobs?cat=finance' },
    { name: 'Sales & GTM', count: 280, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>, href: '/jobs?cat=sales' },
    { name: 'HR & People', count: 190, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>, href: '/jobs?cat=hr' },
    { name: 'IT & Infra', count: 560, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>, href: '/jobs?cat=it' },
];

const categoryColors: Record<string, string> = {
    'Engineering': '#5469D4',
    'AI / ML': '#00B894',
    'Design': '#E8A0BF',
    'Data Science': '#FFBC44',
    'Product': '#F4845F',
    'AI Training': '#9B8AFF',
    'Marketing': '#00D4AA',
    'Gig / Flexible': '#00D4AA',
};

export default function Jobs() {
    return (
        <>
            {/* ── HERO ────────────────────────────────────────── */}
            <section style={{
                position: 'relative',
                padding: 'calc(var(--header-height) + var(--space-20)) 0 var(--space-20)',
                background: 'linear-gradient(175deg, #fff 0%, #FFF8F5 100%)',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    background: 'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(244,132,95,0.1), transparent)',
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
                        <h1 style={{ marginBottom: 'var(--space-5)' }}>
                            See what you could<br />
                            <span className="text-gradient">be matched to.</span>
                        </h1>

                        <p style={{ fontSize: 'var(--text-xl)', maxWidth: 640, margin: '0 auto var(--space-8)', lineHeight: 1.65 }}>
                            These aren&apos;t listings to blindly apply to. They&apos;re a preview of the quality of roles
                            Braintrust members get matched with — roles you are highly likely to win,
                            competing with fewer, qualified peers. No more spray and pray.
                        </p>

                        {/* CTA split */}
                        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-8)' }}>
                            <Link href="https://app.usebraintrust.com" className="btn btn--primary btn--lg" id="jobs-hero-join">
                                Get Matched to These Roles
                            </Link>
                            <Link href="/talent-certification" className="btn btn--secondary btn--lg" id="jobs-hero-cert">
                                Learn About Certification
                            </Link>
                        </div>

                        {/* Key differentiators */}
                        <div style={{
                            display: 'flex', gap: 'var(--space-6)', justifyContent: 'center',
                            flexWrap: 'wrap', padding: 'var(--space-5) var(--space-6)',
                            background: 'var(--color-white)', borderRadius: 'var(--radius-xl)',
                            border: '1px solid var(--color-gray-100)', boxShadow: 'var(--shadow-sm)',
                        }}>
                            {[
                                { label: '$0 fees', sub: 'for talent, always' },
                                { label: '10K+ roles', sub: 'active right now' },
                                { label: 'Compete less', sub: 'qualified pool only' },
                                { label: '95% relevance', sub: 'average match score' },
                            ].map(item => (
                                <div key={item.label} style={{ textAlign: 'center' }}>
                                    <div style={{ fontWeight: 800, fontSize: 'var(--text-xl)', color: 'var(--color-primary)' }}>{item.label}</div>
                                    <div style={{ fontSize: 12, color: 'var(--text-tertiary)', fontWeight: 500 }}>{item.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Portrait accent — offset right */}
                    <div style={{ position: 'absolute', right: '5%', bottom: '-40px', zIndex: 2 }}>
                        <div style={{
                            width: 180, height: 180, borderRadius: '50%',
                            overflow: 'hidden',
                            boxShadow: '0 16px 48px rgba(0,0,0,0.12), 0 0 0 4px rgba(244,132,95,0.15)',
                            border: '4px solid white',
                        }}>
                            <img
                                src="/images/talent_portrait_2.png"
                                alt="AI researcher and Braintrust talent member"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CATEGORIES ─────────────────────────────────── */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Browse by specialty.</h2>
                        <p>10,000+ active roles across every major category. Certified members get matched — so the best roles come to you.</p>
                    </div>

                    <div className="grid grid--4" style={{ gap: 'var(--space-4)' }}>
                        {categories.map((cat) => (
                            <Link key={cat.name} href={cat.href} style={{
                                background: 'var(--color-white)',
                                border: '1px solid var(--color-gray-100)',
                                borderRadius: 'var(--radius-xl)',
                                padding: 'var(--space-5)',
                                textDecoration: 'none', textAlign: 'center',
                                transition: 'all var(--transition-base)',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)',
                            }}>
                                <span style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    width: 48, height: 48, borderRadius: 'var(--radius-lg)',
                                    background: 'var(--color-gray-50)', color: 'var(--color-gray-950)',
                                    marginBottom: 'var(--space-2)',
                                }}>{cat.icon}</span>
                                <span style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{cat.name}</span>
                                <span style={{ fontSize: 12, color: 'var(--text-tertiary)', fontWeight: 500 }}>{cat.count.toLocaleString()}+ roles</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FEATURED ROLES — COMPACT GRID ───────────────── */}
            <section className="section" style={{ background: 'var(--color-gray-950)' }}>
                <style>{`
                    .role-card {
                        background: rgba(255,255,255,0.04);
                        border: 1px solid rgba(255,255,255,0.08);
                        border-radius: var(--radius-xl);
                        padding: var(--space-5);
                        display: flex;
                        flex-direction: column;
                        gap: var(--space-3);
                        transition: all 0.2s ease;
                        cursor: default;
                    }
                    .role-card:hover {
                        background: rgba(255,255,255,0.08);
                        border-color: rgba(255,255,255,0.15);
                        transform: translateY(-2px);
                        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                    }
                    @media (max-width: 1024px) {
                        .role-grid { grid-template-columns: repeat(3, 1fr) !important; }
                    }
                    @media (max-width: 768px) {
                        .role-grid { grid-template-columns: repeat(2, 1fr) !important; }
                    }
                    @media (max-width: 480px) {
                        .role-grid { grid-template-columns: 1fr !important; }
                    }
                `}</style>
                <div className="container">
                    <div className="section-header">
                        <h2 style={{ color: 'white' }}>See what&apos;s available<br /><span className="text-gradient">right now on the network.</span></h2>
                        <p style={{ color: 'rgba(255,255,255,0.55)' }}>A sample of live roles. Get certified to unlock AI-powered matching.</p>
                    </div>

                    <div className="role-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 'var(--space-4)',
                    }}>
                        {featuredRoles.map((role) => {
                            const catColor = categoryColors[role.category] || '#5469D4';
                            return (
                                <div key={role.title} className="role-card">
                                    {/* Title */}
                                    <h4 style={{ color: 'white', margin: 0, fontSize: 'var(--text-base)', fontWeight: 700, lineHeight: 1.35 }}>{role.title}</h4>

                                    {/* Rate */}
                                    <div style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: catColor }}>{role.rate}</div>

                                    {/* Footer: avatars + social proof */}
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                                            {/* Avatar stack */}
                                            <div style={{ display: 'flex' }}>
                                                {role.initials.map((init, j) => (
                                                    <div key={init} style={{
                                                        width: 26, height: 26, borderRadius: '50%',
                                                        background: `linear-gradient(135deg, ${catColor}, ${catColor}88)`,
                                                        color: 'white', fontSize: 9, fontWeight: 700,
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        border: '2px solid var(--color-gray-950)',
                                                        marginLeft: j > 0 ? -8 : 0,
                                                        position: 'relative', zIndex: 2 - j,
                                                    }}>{init}</div>
                                                ))}
                                            </div>
                                            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>
                                                {role.hired} hired recently
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Unlock CTA */}
                    <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
                        <Link href="https://app.usebraintrust.com" className="btn btn--lg" id="jobs-unlock-cta"
                            style={{ background: 'white', color: 'var(--color-gray-950)', fontSize: '1.05rem', padding: '16px 36px', fontWeight: 700 }}>
                            See All 10,000+ Roles →
                        </Link>
                        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginTop: 'var(--space-3)' }}>
                            Create your free profile. Get certified. Get matched.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHY DIFFERENT ──────────────────────────────── */}
            <section className="section" style={{ background: 'var(--color-gray-950)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2 style={{ color: 'white' }}>Why this is different<br /><span className="text-gradient">from a job board.</span></h2>
                    </div>
                    <div className="grid grid--3">
                        {[
                            {
                                label: 'No mass applying',
                                desc: 'You don\'t apply to everything. Braintrust\'s AI matches you to roles where you have a genuine chance of winning.',
                                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
                            },
                            {
                                label: 'Fewer, better competitors',
                                desc: 'Certified members compete in a smaller, qualified pool — not against thousands of random applicants.',
                                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
                            },
                            {
                                label: 'You negotiate directly',
                                desc: 'No staffing agency, no recruiter taking a cut. You work with the hiring team directly and own your rate.',
                                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
                            },
                        ].map(item => (
                            <div key={item.label} style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                borderRadius: 'var(--radius-xl)',
                                padding: 'var(--space-8)',
                            }}>
                                <div style={{ fontSize: '2rem', marginBottom: 'var(--space-4)' }}>{item.icon}</div>
                                <h4 style={{ color: 'white', marginBottom: 'var(--space-2)', fontSize: 'var(--text-xl)' }}>{item.label}</h4>
                                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
