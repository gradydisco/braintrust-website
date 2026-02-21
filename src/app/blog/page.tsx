'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { blogPosts, getFeaturedPosts, getAllCategories, getAuthor } from '@/data/blog';

// Collect all unique tags across all posts
function getAllTags(): string[] {
    const tagSet = new Set<string>();
    blogPosts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
}

export default function Blog() {
    const featured = getFeaturedPosts();
    const categories = getAllCategories();
    const allTags = getAllTags();

    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [showTags, setShowTags] = useState(false);

    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const catMatch = !activeCategory || post.category === activeCategory;
            const tagMatch = !activeTag || post.tags.includes(activeTag);
            return catMatch && tagMatch;
        });
    }, [activeCategory, activeTag]);

    const handleCategoryClick = (cat: string) => {
        setActiveCategory((prev) => (prev === cat ? null : cat));
        setActiveTag(null);
    };

    const handleTagClick = (tag: string) => {
        setActiveTag((prev) => (prev === tag ? null : tag));
        setActiveCategory(null);
    };

    const clearFilters = () => {
        setActiveCategory(null);
        setActiveTag(null);
    };

    const hasActiveFilter = !!activeCategory || !!activeTag;
    const filterLabel = activeCategory || activeTag;

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

            {/* Featured Posts — only show when no filter active */}
            {featured.length > 0 && !hasActiveFilter && (
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
                    <div className="section-header" style={{ marginBottom: 'var(--space-6)' }}>
                        <h2>All Articles</h2>
                    </div>

                    {/* Filter Controls */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        {/* Category row */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginRight: 'var(--space-1)' }}>
                                Category
                            </span>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => handleCategoryClick(cat)}
                                    style={{
                                        padding: '5px 14px',
                                        borderRadius: 'var(--radius-full)',
                                        border: activeCategory === cat ? '1.5px solid var(--color-primary)' : '1.5px solid var(--color-gray-200)',
                                        background: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-white)',
                                        color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                                        fontSize: 'var(--text-xs)',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.04em',
                                        transition: 'all 180ms ease',
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Tags toggle + row */}
                        <div>
                            <button
                                onClick={() => setShowTags((v) => !v)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-1)',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: 'var(--text-xs)',
                                    fontWeight: 600,
                                    color: 'var(--text-tertiary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    padding: '0',
                                    marginBottom: showTags ? 'var(--space-3)' : 0,
                                    transition: 'color 150ms ease',
                                }}
                            >
                                <span>Tags</span>
                                <span style={{ fontSize: '10px', transform: showTags ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease', display: 'inline-block' }}>▼</span>
                            </button>

                            {showTags && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                                    {allTags.map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => handleTagClick(tag)}
                                            style={{
                                                padding: '4px 12px',
                                                borderRadius: 'var(--radius-full)',
                                                border: activeTag === tag ? '1.5px solid var(--color-primary)' : '1.5px solid var(--color-gray-200)',
                                                background: activeTag === tag ? 'var(--color-primary-50)' : 'var(--color-white)',
                                                color: activeTag === tag ? 'var(--color-primary)' : 'var(--text-tertiary)',
                                                fontSize: 'var(--text-xs)',
                                                fontWeight: activeTag === tag ? 700 : 500,
                                                cursor: 'pointer',
                                                transition: 'all 180ms ease',
                                            }}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Active filter indicator + clear */}
                    {hasActiveFilter && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-3)',
                            marginBottom: 'var(--space-5)',
                            padding: '10px 16px',
                            borderRadius: 'var(--radius-lg)',
                            background: 'var(--color-primary-50)',
                            border: '1px solid var(--color-primary)',
                            width: 'fit-content',
                        }}>
                            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-primary)', fontWeight: 600 }}>
                                Showing: {filterLabel}
                            </span>
                            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                                ({filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''})
                            </span>
                            <button
                                onClick={clearFilters}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'var(--color-primary)',
                                    fontWeight: 700,
                                    fontSize: 'var(--text-sm)',
                                    padding: '0 0 0 var(--space-2)',
                                    lineHeight: 1,
                                }}
                            >
                                ✕ Clear
                            </button>
                        </div>
                    )}

                    {/* Empty state */}
                    {filteredPosts.length === 0 && (
                        <div style={{ textAlign: 'center', padding: 'var(--space-16) 0', color: 'var(--text-tertiary)' }}>
                            <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-3)' }}>No articles match this filter.</p>
                            <button onClick={clearFilters} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', fontWeight: 600 }}>
                                Clear filters
                            </button>
                        </div>
                    )}

                    {/* Post list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        {filteredPosts.map((post) => {
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
                                    {/* Tags row */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-1)', marginBottom: 'var(--space-3)' }}>
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                onClick={(e) => { e.preventDefault(); handleTagClick(tag); }}
                                                style={{
                                                    padding: '2px 10px',
                                                    borderRadius: 'var(--radius-full)',
                                                    background: activeTag === tag ? 'var(--color-primary-50)' : 'var(--color-gray-100)',
                                                    color: activeTag === tag ? 'var(--color-primary)' : 'var(--text-tertiary)',
                                                    fontSize: '11px',
                                                    fontWeight: activeTag === tag ? 700 : 500,
                                                    cursor: 'pointer',
                                                    border: activeTag === tag ? '1px solid var(--color-primary)' : '1px solid transparent',
                                                    transition: 'all 150ms ease',
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
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
