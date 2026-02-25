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
        { label: 'Talent Overview', href: '/for-talent' },
        { label: 'Browse Roles', href: '/jobs' },
        { label: 'Get Certified', href: '/talent-certification' },
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'Talent Types', href: '/talent-types' },
        { label: 'AI Gig Work', href: '/ai-training' },
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
                        <div className={styles.socials}>
                            <a href="https://www.linkedin.com/company/usebraintrust/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a href="https://x.com/usebraintrust" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className={styles.socialLink}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="https://www.youtube.com/c/Braintrustyoutube/featured" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialLink}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/usebraintrust/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" /></svg>
                            </a>
                        </div>
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
