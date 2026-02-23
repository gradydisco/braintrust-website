'use client';

import React from 'react';

interface LegalPageLayoutProps {
    title: string;
    lastUpdated?: string;
    children: React.ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
    return (
        <section className="section" style={{ paddingTop: 'calc(var(--header-height) + var(--space-12))' }}>
            <div className="container container--narrow">
                <h1 style={{ marginBottom: 'var(--space-4)', fontSize: 'clamp(var(--text-3xl), 4vw, var(--text-5xl))' }}>{title}</h1>
                {lastUpdated && (
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-8)' }}>
                        Last updated: {lastUpdated}
                    </p>
                )}
                <div className="legal-content" style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-secondary)',
                    lineHeight: 'var(--leading-relaxed)',
                }}>
                    {children}
                </div>
            </div>
            <style jsx global>{`
                .legal-content h2 {
                    font-size: var(--text-xl);
                    color: var(--text-primary);
                    margin: var(--space-10) 0 var(--space-4);
                    font-weight: 700;
                }
                .legal-content h3 {
                    font-size: var(--text-lg);
                    color: var(--text-primary);
                    margin: var(--space-8) 0 var(--space-3);
                    font-weight: 700;
                }
                .legal-content h4 {
                    font-size: var(--text-base);
                    color: var(--text-primary);
                    margin: var(--space-6) 0 var(--space-3);
                    font-weight: 700;
                }
                .legal-content p {
                    margin-bottom: var(--space-4);
                    line-height: var(--leading-relaxed);
                }
                .legal-content ul,
                .legal-content ol {
                    margin: var(--space-3) 0 var(--space-4);
                    padding-left: var(--space-6);
                }
                .legal-content li {
                    margin-bottom: var(--space-2);
                    list-style: disc;
                    line-height: var(--leading-relaxed);
                }
                .legal-content ol li {
                    list-style: decimal;
                }
                .legal-content a {
                    color: var(--color-primary);
                    text-decoration: underline;
                    text-underline-offset: 2px;
                }
                .legal-content a:hover {
                    color: var(--color-primary-dark);
                }
                .legal-content strong {
                    color: var(--text-primary);
                    font-weight: 600;
                }
                .legal-content hr {
                    border: none;
                    border-top: 1px solid var(--color-gray-100);
                    margin: var(--space-8) 0;
                }
                .legal-content blockquote {
                    border-left: 3px solid var(--color-gray-200);
                    padding-left: var(--space-4);
                    margin: var(--space-4) 0;
                    font-style: italic;
                    color: var(--text-tertiary);
                }
            `}</style>
        </section>
    );
}
