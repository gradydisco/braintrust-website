import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Braintrust Privacy Policy. Learn how we collect, use, and protect your personal information.',
};

export default function Privacy() {
    return (
        <section className="section" style={{ paddingTop: 'calc(var(--header-height) + var(--space-12))' }}>
            <div className="container container--narrow">
                <h1 style={{ marginBottom: 'var(--space-8)' }}>Privacy Policy</h1>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    <p><strong>Last updated:</strong> February 2026</p>
                    <p>This Privacy Policy describes how Braintrust (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and discloses your personal information when you visit our website at usebraintrust.com (the &quot;Site&quot;) or use our services.</p>
                    <h2>Information We Collect</h2>
                    <p>We collect information you provide directly to us, including name, email address, company information, and any other information you choose to provide when filling out forms, creating an account, or contacting us.</p>
                    <h2>How We Use Your Information</h2>
                    <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send communications, and comply with legal obligations.</p>
                    <h2>Contact Us</h2>
                    <p>If you have questions about this Privacy Policy, please contact us at privacy@usebraintrust.com.</p>
                    <p style={{ color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
                        [This is a placeholder privacy policy. Replace with your organization&apos;s complete privacy policy before production launch.]
                    </p>
                </div>
            </div>
        </section>
    );
}
