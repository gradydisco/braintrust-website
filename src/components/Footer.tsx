import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const footerLinks = {
    Products: [
        { label: 'Talent Marketplace', href: '/products/talent-marketplace' },
        { label: 'AI Training Data', href: '/products/talent-marketplace/ai-training' },
        { label: 'Human Data', href: '/products/talent-marketplace/human-data' },
        { label: 'AIR | AI Recruiter', href: '/products/air' },
        { label: 'Nexus', href: '/products/nexus' },
    ],
    Solutions: [
        { label: 'Enterprise Hiring', href: '/solutions/enterprise-hiring' },
        { label: 'High-Volume Hiring', href: '/solutions/high-volume-hiring' },
        { label: 'AI Training Data', href: '/solutions/ai-training-data' },
    ],
    'For Talent': [
        { label: 'Find Jobs', href: '/jobs' },
        { label: 'AI Training Work', href: '/ai-training' },
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'Talent FAQ', href: '/talent-faq' },
        { label: 'Trust & Safety', href: '/trust-safety' },
    ],
    Programs: [
        { label: 'Refer & Earn — AIR', href: '/refer/air' },
        { label: 'Refer & Earn — Marketplace', href: '/refer/marketplace' },
        { label: 'Try AIR', href: '/products/air/try' },
    ],
    'BTRST Token': [
        { label: 'What is BTRST', href: '/token/what-is-btrst' },
        { label: 'Tokenomics', href: '/token/tokenomics' },
        { label: 'Governance', href: '/token/governance' },
        { label: 'Token FAQ', href: '/token/faq' },
        { label: 'Price', href: '/token/price' },
    ],
    Guides: [
        { label: 'Best AI Interview Software', href: '/best-ai-interview-software-2025' },
        { label: 'AI Interview Software', href: '/ai-interview-software' },
        { label: 'AI Voice Interviews', href: '/ai-voice-interview-software' },
        { label: 'AI Recruiting Software', href: '/ai-recruiting-software' },
        { label: 'Compare AIR', href: '/compare' },
    ],
    Company: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Resources', href: '/resources' },
        { label: 'Contact', href: '/contact' },
        { label: 'Book a Demo', href: '/book-demo' },
    ],
};

export default function Footer() {
    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={`container ${styles.inner}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo} aria-label="Braintrust Home">
                            <Image
                                src="/braintrust-logo.png"
                                alt="Braintrust"
                                width={140}
                                height={35}
                                className={styles.logoImage}
                            />
                        </Link>
                        <p className={styles.brandDesc}>
                            The AI-powered talent network connecting top professionals with the world&apos;s leading companies. Enterprise recruiting. Workflow automation. Human data infrastructure.
                        </p>
                    </div>

                    <div className={styles.links}>
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category} className={styles.linkColumn}>
                                <h4 className={styles.columnTitle}>{category}</h4>
                                <ul>
                                    {links.map(link => (
                                        <li key={link.href}>
                                            <Link href={link.href} className={styles.link}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Braintrust. All rights reserved.
                    </p>
                    <div className={styles.legal}>
                        <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
                        <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
