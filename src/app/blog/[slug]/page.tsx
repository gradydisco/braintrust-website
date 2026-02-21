import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { blogPosts, getPostBySlug, getAuthor } from '@/data/blog';

// Parse inline markdown: **bold**, [text](url)
function parseInline(text: string): React.ReactNode[] {
    const parts: React.ReactNode[] = [];
    // Combined regex for **bold** and [text](url)
    const regex = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match;
    let key = 0;
    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        if (match[1] !== undefined) {
            // Bold
            parts.push(<strong key={key++}>{match[1]}</strong>);
        } else {
            // Link
            const href = match[3];
            const isExternal = href.startsWith('http');
            parts.push(
                isExternal
                    ? <a key={key++} href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>{match[2]}</a>
                    : <Link key={key++} href={href} style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>{match[2]}</Link>
            );
        }
        lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }
    return parts;
}

// Render a paragraph - detects headings (lines starting with **text:**)
function renderParagraph(paragraph: string, i: number): React.ReactNode {
    // Heading style: lines that are purely **Some heading**
    if (/^\*\*[^*]+\*\*$/.test(paragraph.trim())) {
        const headingText = paragraph.trim().replace(/^\*\*/, '').replace(/\*\*$/, '');
        return (
            <h3 key={i} style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-primary)', margin: 'var(--space-8) 0 var(--space-3)' }}>
                {headingText}
            </h3>
        );
    }
    return (
        <p key={i} style={{ marginBottom: 'var(--space-6)' }}>
            {parseInline(paragraph)}
        </p>
    );
}

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: 'Post Not Found' };
    return {
        title: `${post.title} | Braintrust Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const author = getAuthor(post.authorSlug);
    const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <>
            <section className="hero hero--centered">
                <div className="container container--narrow">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Blog', href: '/blog' },
                        { label: post.title },
                    ]} />
                    <div className="hero__content">
                        <div className="badge">{post.category}</div>
                        <h1 style={{ fontSize: 'clamp(var(--text-3xl), 4vw, var(--text-5xl))' }}>{post.title}</h1>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap', marginTop: 'var(--space-4)' }}>
                            {author && (
                                <Link
                                    href={`/author/${author.slug}`}
                                    style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-primary)', textDecoration: 'none' }}
                                >
                                    {author.name}
                                </Link>
                            )}
                            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>{publishedDate}</span>
                            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>{post.readingTime}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container container--narrow">
                    <article style={{
                        maxWidth: '720px',
                        margin: '0 auto',
                        fontSize: 'var(--text-lg)',
                        lineHeight: 'var(--leading-relaxed)',
                        color: 'var(--text-secondary)',
                    }}>
                        {post.content.split('\n\n').map((paragraph, i) => renderParagraph(paragraph, i))}
                    </article>

                    {/* Tags */}
                    <div style={{
                        maxWidth: '720px',
                        margin: 'var(--space-10) auto 0',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 'var(--space-2)',
                        paddingTop: 'var(--space-6)',
                        borderTop: '1px solid var(--color-gray-100)',
                    }}>
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    padding: '4px 12px',
                                    borderRadius: 'var(--radius-full)',
                                    background: 'var(--color-gray-50)',
                                    fontSize: 'var(--text-xs)',
                                    color: 'var(--text-tertiary)',
                                    fontWeight: 500,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Author Card */}
                    {author && (
                        <div style={{
                            maxWidth: '720px',
                            margin: 'var(--space-10) auto 0',
                            padding: 'var(--space-6)',
                            borderRadius: 'var(--radius-xl)',
                            border: '1px solid var(--color-gray-100)',
                            background: 'var(--color-gray-50)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    background: 'var(--gradient-warm)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: 'var(--text-lg)',
                                    flexShrink: 0,
                                }}>
                                    {author.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <Link
                                        href={`/author/${author.slug}`}
                                        style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none', fontSize: 'var(--text-base)' }}
                                    >
                                        {author.name}
                                    </Link>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', margin: 0 }}>{author.role}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <CTASection
                title="See how Braintrust can help"
                description="Book a demo to explore AI-powered recruiting, talent marketplace, and workforce automation."
                primaryLabel="Book a Demo"
                primaryHref="/book-demo"
            />
        </>
    );
}
