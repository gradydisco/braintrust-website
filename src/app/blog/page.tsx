import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { blogPosts, getFeaturedPosts, getAllCategories, getAuthor } from '@/data/blog';

export const metadata: Metadata = {
    title: 'Blog — Insights on AI Recruiting, Workforce Automation & the Future of Work | Braintrust',
    description: 'Expert insights on AI-powered recruiting, workforce automation, training data, and the future of enterprise hiring from the Braintrust team.',
};

export default function Blog() {
    const featured = getFeaturedPosts();
    const categories = getAllCategories();

    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
                    <div className="hero__content">
                        <div className="badge">Blog</div>
                        <h1>Insights &amp; Resources</h1>
                        <p>Expert perspectives on AI recruiting, workforce automation, and the future of enterprise talent.</p>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            {featured.length > 0 && (
                <section className="section" style={{ paddingTop: 0 }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
                            {featured.map((post) => {
                                const author = getAuthor(post.authorSlug);
                                return (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            padding: 'var(--space-8)',
                                            borderRadius: 'var(--radius-xl)',
                                            border: '1px solid var(--color-gray-100)',
                                            background: 'linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-white) 100%)',
                                            textDecoration: 'none',
                                            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                                        }}
                                        className="card"
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                                            <span className="badge">{post.category}</span>
                                            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontWeight: 500 }}>FEATURED</span>
                                        </div>
                                        <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>{post.title}</h3>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', flex: 1, marginBottom: 'var(--space-4)' }}>{post.excerpt}</p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                                            <span>{author?.name}</span>
                                            <span>·</span>
                                            <span>{post.readingTime}</span>
                                            <span>·</span>
                                            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* All Posts */}
            <section className="section section--gray">
                <div className="container">
                    <div className="section-header" style={{ marginBottom: 'var(--space-8)' }}>
                        <h2>All Articles</h2>
                    </div>

                    {/* Category Filters */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-8)' }}>
                        {categories.map((cat) => (
                            <span
                                key={cat}
                                className="badge"
                                style={{ cursor: 'pointer' }}
                            >
                                {cat}
                            </span>
                        ))}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        {blogPosts.map((post) => {
                            const author = getAuthor(post.authorSlug);
                            return (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="card"
                                    style={{ padding: 'var(--space-6)', textDecoration: 'none', display: 'block' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                                        <span className="badge">{post.category}</span>
                                        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                                            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>{post.title}</h3>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>{post.excerpt}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                                        <span style={{ fontWeight: 600 }}>{author?.name}</span>
                                        <span>·</span>
                                        <span>{post.readingTime}</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
