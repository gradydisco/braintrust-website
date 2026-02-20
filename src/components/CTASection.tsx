import Link from 'next/link';

interface CTASectionProps {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
}

export default function CTASection({
    title,
    description,
    primaryLabel,
    primaryHref,
    secondaryLabel,
    secondaryHref,
}: CTASectionProps) {
    return (
        <section className="section">
            <div className="container">
                <div className="cta-section">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', position: 'relative' }}>
                        <Link href={primaryHref} className="btn btn--accent btn--lg" id="cta-primary">
                            {primaryLabel}
                        </Link>
                        {secondaryLabel && secondaryHref && (
                            <Link href={secondaryHref} className="btn btn--secondary btn--lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }} id="cta-secondary">
                                {secondaryLabel}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
