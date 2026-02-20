import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import { authors, getPostsByAuthor } from '@/data/blog';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const author = authors.find(a => a.slug === slug);
    if (!author) return { title: 'Author Not Found' };
    return {
        title: `${author.name} — ${author.role} | Braintrust Blog`,
        description: author.bio,
    };
}

export default async function AuthorPage({ params }: Props) {
    const { slug } = await params;
    const author = authors.find(a => a.slug === slug);
    if (!author) notFound();

    const posts = getPostsByAuthor(author.slug);

    return (
        <>
            <section className="hero hero--centered">
                <div className="container container--narrow">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Blog', href: '/blog' },
                        { label: author.name },
                    ]} />
                    <div className="hero__content">
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'var(--gradient-warm)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 800,
                            fontSize: 'var(--text-2xl)',
                            margin: '0 auto var(--space-6)',
                        }}>
                            {author.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <h1 style={{ fontSize: 'var(--text-4xl)' }}>{author.name}</h1>
                        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-primary)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                            {author.role}
                        </p>
                        <p style={{ maxWidth: '600px', margin: '0 auto' }}>{author.bio}</p>

                        {author.social && (
                            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
                                {author.social.twitter && (
                                    <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                                        𝕏 Twitter
                                    </a>
                                )}
                                {author.social.linkedin && (
                                    <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                                        LinkedIn
                                    </a>
                                )}
                                {author.social.github && (
                                    <a href={author.social.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                                        GitHub
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container container--narrow">
                    <div className="section-header" style={{ marginBottom: 'var(--space-8)' }}>
                        <h2>Articles by {author.name.split(' ')[0]}</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        {posts.map((post) => (
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
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{post.excerpt}</p>
                            </Link>
                        ))}
                    </div>
                    {posts.length === 0 && (
                        <p style={{ textAlign: 'center', color: 'var(--text-tertiary)', padding: 'var(--space-12) 0' }}>
                            No articles published yet.
                        </p>
                    )}
                </div>
            </section>
        </>
    );
}
