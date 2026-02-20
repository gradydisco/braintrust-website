import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Browse Jobs — Find High-Paying Tech Roles',
    description: 'Browse thousands of high-paying tech jobs from Fortune 1000 companies. Zero fees. Direct connections. Find engineering, design, product, and operations roles.',
};

const categories = [
    { name: 'Engineering', count: 450, href: '/jobs/engineering' },
    { name: 'Design', count: 120, href: '/jobs/design' },
    { name: 'Product Management', count: 85, href: '/jobs/product' },
    { name: 'Data Science & AI', count: 200, href: '/jobs/data-science' },
    { name: 'Marketing', count: 65, href: '/jobs/marketing' },
    { name: 'Operations', count: 90, href: '/jobs/operations' },
];

const featuredJobs = [
    { title: 'Senior Full-Stack Engineer', company: 'Fortune 500 Tech Co.', rate: '$150-200/hr', type: 'Contract', location: 'Remote' },
    { title: 'Staff ML Engineer', company: 'Leading AI Startup', rate: '$180-250/hr', type: 'Full-Time', location: 'Remote' },
    { title: 'Product Designer', company: 'Enterprise SaaS', rate: '$120-160/hr', type: 'Contract', location: 'US Remote' },
    { title: 'Data Science Lead', company: 'Fortune 100 Financial', rate: '$170-220/hr', type: 'Full-Time', location: 'Hybrid NYC' },
    { title: 'DevOps Engineer', company: 'Fintech Scale-up', rate: '$140-180/hr', type: 'Contract', location: 'Remote' },
    { title: 'Frontend Engineer (React)', company: 'Healthcare Tech', rate: '$130-170/hr', type: 'Contract', location: 'Remote' },
];

export default function Jobs() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Jobs' }]} />
                    <div className="hero__content">
                        <div className="badge badge--accent">Jobs</div>
                        <h1>Find your next<br /><span className="text-gradient">opportunity.</span></h1>
                        <p>Thousands of high-paying roles from leading companies. Zero platform fees — you keep 100% of your earnings.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Browse by Category</h2>
                    </div>
                    <div className="grid grid--3">
                        {categories.map((cat) => (
                            <Link key={cat.name} href={cat.href} className="card card--feature">
                                <h4>{cat.name}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{cat.count}+ open roles</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--gray">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Opportunities</h2>
                        <p>Curated roles from top companies on the network.</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        {featuredJobs.map((job, i) => (
                            <div key={i} className="card" style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: 'var(--space-6)', alignItems: 'center', padding: 'var(--space-5) var(--space-6)' }}>
                                <div>
                                    <h5 style={{ marginBottom: 'var(--space-1)' }}>{job.title}</h5>
                                    <p style={{ fontSize: 'var(--text-sm)' }}>{job.company}</p>
                                </div>
                                <span className="badge">{job.type}</span>
                                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{job.location}</span>
                                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-accent-dark)' }}>{job.rate}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                            Sign up or log in to browse all available positions and apply directly.
                        </p>
                        <Link href="/login" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-4)' }}>
                            View All Jobs
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
