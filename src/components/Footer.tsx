import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const footerLinks = {
    Products: [
        { label: 'Talent Marketplace', href: '/products/talent-marketplace' },
        { label: 'AIR | AI Recruiter', href: '/products/air' },
        { label: 'Nexus', href: '/products/nexus' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Book a Demo', href: '/book-demo' },
    ],
    'Human Data for AI': [
        { label: 'Human Data Overview', href: '/human-data-for-ai' },
        { label: 'Data Annotation Experts', href: '/data-annotation-experts' },
        { label: 'Data Labeling Talent', href: '/data-labeling-talent' },
        { label: 'RLHF Talent Network', href: '/rlhf-talent-network' },
        { label: 'AI Model Evaluation', href: '/ai-model-evaluation-experts' },
    ],
    'Hire Talent': [
        { label: 'Hire AI Engineers', href: '/hire-ai-engineers' },
        { label: 'Hire ML Engineers', href: '/hire-machine-learning-engineers' },
        { label: 'Hire Data Scientists', href: '/hire-data-scientists' },
        { label: 'Hire Technical Talent', href: '/hire-technical-talent' },
        { label: 'Hire Contract Engineers', href: '/hire-contract-engineers' },
    ],
    Solutions: [
        { label: 'Enterprise Hiring', href: '/solutions/enterprise-hiring' },
        { label: 'High-Volume Hiring', href: '/solutions/high-volume-hiring' },
        { label: 'AI Training Data', href: '/solutions/ai-training-data' },
        { label: 'For Companies', href: '/for-companies' },
    ],
    'For Talent': [
        { label: 'Find Jobs', href: '/jobs' },
        { label: 'AI Training Work', href: '/ai-training' },
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'Talent FAQ', href: '/talent-faq' },
        { label: 'Trust & Safety', href: '/trust-safety' },
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
        { label: 'Compare Platforms', href: '/compare' },
        { label: 'vs Upwork', href: '/compare/braintrust-vs-upwork' },
        { label: 'vs Toptal', href: '/compare/braintrust-vs-toptal' },
    ],
    Company: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Resources', href: '/resources' },
        { label: 'Contact', href: '/contact' },
    ],
    'Referral Programs': [
        { label: 'AIR Referral Program', href: '/refer/air' },
        { label: 'Marketplace Referral Program', href: '/refer/marketplace' },
    ],
    Legal: [
        { label: 'Marketplace | Terms', href: '/terms' },
        { label: 'Marketplace | Privacy', href: '/privacy-policy' },
        { label: 'Marketplace | Code of Conduct', href: '/code-of-conduct' },
        { label: 'Marketplace | Referral Terms', href: '/referral-terms' },
        { label: 'Marketplace | Network Standards', href: '/network-standards' },
        { label: 'AIR | Terms', href: '/air-terms' },
        { label: 'AIR | Privacy Policy', href: '/air-privacy-policy' },
        { label: 'AIR | Referral Terms', href: '/air-referral-terms' },
        { label: 'BTRST Purchaser Terms', href: '/btrst-purchaser-terms' },
        { label: 'Cookie Policy', href: '/cookie-policy' },
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

                </div>
            </div>
        </footer>
    );
}
