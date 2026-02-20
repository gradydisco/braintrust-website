import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Braintrust Terms of Service. Review the terms and conditions for using the Braintrust platform and website.',
};

export default function Terms() {
    return (
        <section className="section" style={{ paddingTop: 'calc(var(--header-height) + var(--space-12))' }}>
            <div className="container container--narrow">
                <h1 style={{ marginBottom: 'var(--space-8)' }}>Terms of Service</h1>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    <p><strong>Last updated:</strong> February 2026</p>
                    <p>These Terms of Service (&quot;Terms&quot;) govern your use of the Braintrust website and platform. By accessing or using our services, you agree to be bound by these Terms.</p>
                    <h2>Use of Services</h2>
                    <p>You may use our services only in compliance with these Terms and all applicable laws and regulations.</p>
                    <h2>BTRST Token Disclaimer</h2>
                    <p>BTRST is a utility token used for governance and network participation. It is not an investment contract, security, or financial instrument. Nothing on this website constitutes financial advice.</p>
                    <h2>Contact</h2>
                    <p>Questions about these Terms? Contact us at legal@usebraintrust.com.</p>
                    <p style={{ color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
                        [This is a placeholder terms of service. Replace with your organization&apos;s complete terms before production launch.]
                    </p>
                </div>
            </div>
        </section>
    );
}
