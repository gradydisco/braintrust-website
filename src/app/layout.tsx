import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialProofTicker from '@/components/SocialProofTicker';

export const metadata: Metadata = {
  metadataBase: new URL('https://usebraintrust.com'),
  title: {
    default: 'Braintrust — The AI-Powered Talent Network',
    template: '%s | Braintrust',
  },
  description: 'Braintrust is an AI-powered talent network providing vetted talent marketplace, AI interview software, human data for AI training, and workflow automation. 2M+ assessed professionals. 100+ countries.',
  keywords: ['talent marketplace', 'AI recruiting', 'AI interview software', 'hire AI engineers', 'hire ML engineers', 'AI training data', 'RLHF', 'data annotation', 'human data for AI', 'BTRST', 'vetted talent network'],
  authors: [{ name: 'Braintrust' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://usebraintrust.com',
    siteName: 'Braintrust',
    title: 'Braintrust — The AI-Powered Talent Network',
    description: 'Vetted talent marketplace, AI interview software, and human data infrastructure for enterprise teams. 2M+ assessed professionals. 100+ countries.',
    images: [
      {
        url: 'https://usebraintrust.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Braintrust — The AI-Powered Talent Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@usebraintrust',
    title: 'Braintrust — The AI-Powered Talent Network',
    description: 'Vetted talent marketplace, AI interview software, and human data infrastructure for enterprise teams.',
    images: ['https://usebraintrust.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* ============================================================
     STRUCTURED DATA — JSON-LD Suite (emitted on every page)
     Consumed by:
      • Google Knowledge Panel + rich results
      • LLMs (ChatGPT, Perplexity, Gemini) for brand citation
      • Google Sitelinks Search Box (WebSite + SearchAction)
      • SoftwareApplication rich results for AIR & Nexus
      • Service rich results for Marketplace & Human Data
     ============================================================ */

  // 1. Organization — full identity signal for LLM citation
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://usebraintrust.com/#organization',
    name: 'Braintrust',
    legalName: 'Braintrust',
    alternateName: ['usebraintrust.com', 'Braintrust Network'],
    url: 'https://usebraintrust.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://usebraintrust.com/braintrust-logo.png',
      width: 200,
      height: 60,
    },
    foundingYear: 2019,
    description: 'Braintrust is an AI-powered talent network providing enterprise clients with a vetted talent marketplace, AI recruiting software (AIR), workflow automation (Nexus), and human data / AI training workforce infrastructure. The network includes 750,000+ assessed professionals across 100+ countries and 50+ languages, with automated assessment, ID verification, background checks, and rapid deployment into client systems.',
    knowsAbout: [
      'Talent Marketplace',
      'AI Training Data',
      'RLHF — Reinforcement Learning from Human Feedback',
      'Data Annotation',
      'Data Labeling',
      'AI Model Evaluation',
      'AI Recruiting Software',
      'AI Interview Software',
      'Machine Learning Engineer Hiring',
      'Data Scientist Hiring',
      'AI Engineer Hiring',
      'Contract Engineering',
      'Enterprise Talent Network',
      'Human Data for AI',
      'Workflow Automation',
      'Vetted Freelance Network',
      'Identity Verification for Talent',
      'Automated Skill Assessment',
    ],
    sameAs: [
      'https://twitter.com/usebraintrust',
      'https://www.linkedin.com/company/usebraintrust',
      'https://discord.gg/braintrust',
      'https://github.com/braintrustdata',
      'https://www.crunchbase.com/organization/braintrust-2',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: 'https://usebraintrust.com/book-demo',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: 'https://usebraintrust.com/contact',
        availableLanguage: 'English',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Braintrust Products & Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Talent Marketplace',
            description: 'AI-powered vetted talent marketplace. Pre-assessed, ID-verified engineers, data scientists, ML specialists matched in hours. 2M+ professionals.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Human Data for AI — AI Training Workforce',
            description: 'Enterprise AI training workforce: RLHF specialists, data annotators, data labelers, and AI model evaluation experts. 100+ countries, 50+ languages. Automated assessment, ID verification, rapid deployment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'SoftwareApplication',
            name: 'Braintrust AIR — AI Recruiting Software',
            description: 'Conversational AI interview software. Voice interviews, resume scoring, candidate assessment and ranking. High-volume capable. 16+ languages.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'SoftwareApplication',
            name: 'Braintrust Nexus — Workflow Automation',
            description: 'Enterprise workflow automation. Connects tools, automates recruiting and operational workflows, real-time analytics.',
          },
        },
      ],
    },
  };

  // 2. WebSite — enables Google Sitelinks Search Box
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://usebraintrust.com/#website',
    url: 'https://usebraintrust.com',
    name: 'Braintrust',
    description: 'The AI-powered talent network for enterprise hiring, human data for AI, and workflow automation.',
    publisher: { '@id': 'https://usebraintrust.com/#organization' },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://usebraintrust.com/jobs?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // 3. AIR — SoftwareApplication rich result
  const airSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': 'https://usebraintrust.com/products/air#software',
    name: 'Braintrust AIR — AI Recruiting & Interview Software',
    url: 'https://usebraintrust.com/products/air',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free trial available. Enterprise pricing on request.',
    },
    publisher: { '@id': 'https://usebraintrust.com/#organization' },
    description: 'Braintrust AIR conducts AI-powered conversational voice interviews, scores resumes, assesses candidates through domain-specific evaluations, and ranks applicants. Supports 16+ languages. Capable of thousands of interviews per day.',
    featureList: [
      'Conversational AI voice interviews',
      'Resume scoring and semantic matching',
      'Domain-specific candidate assessment',
      'Multi-language support (16+ languages)',
      'High-volume interview throughput (thousands/day)',
      'Customizable scoring frameworks',
      'ATS integration',
      'Automated candidate ranking',
    ],
  };

  // 4. Nexus — SoftwareApplication schema
  const nexusSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': 'https://usebraintrust.com/products/nexus#software',
    name: 'Braintrust Nexus — Enterprise Workflow Automation',
    url: 'https://usebraintrust.com/products/nexus',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    publisher: { '@id': 'https://usebraintrust.com/#organization' },
    description: 'Braintrust Nexus is an enterprise workflow automation platform that connects tools, automates recruiting and operational workflows, and provides real-time analytics across the talent lifecycle.',
  };

  // 5. Talent Marketplace — Service schema
  const marketplaceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://usebraintrust.com/products/talent-marketplace#service',
    name: 'Braintrust Talent Marketplace',
    url: 'https://usebraintrust.com/products/talent-marketplace',
    provider: { '@id': 'https://usebraintrust.com/#organization' },
    description: 'A vetted professional talent marketplace. 2M+ assessed, ID-verified engineers, ML specialists, data scientists, and technical professionals. AI-powered matching delivers ranked candidates in hours.',
    serviceType: 'Talent Marketplace',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hiring Categories',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hire AI Engineers', url: 'https://usebraintrust.com/hire-ai-engineers' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hire Machine Learning Engineers', url: 'https://usebraintrust.com/hire-machine-learning-engineers' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hire Data Scientists', url: 'https://usebraintrust.com/hire-data-scientists' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hire Technical Talent', url: 'https://usebraintrust.com/hire-technical-talent' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hire Contract Engineers', url: 'https://usebraintrust.com/hire-contract-engineers' } },
      ],
    },
  };

  // 6. Human Data — Service schema  
  const humanDataSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://usebraintrust.com/human-data-for-ai#service',
    name: 'Braintrust Human Data for AI — AI Training Workforce',
    url: 'https://usebraintrust.com/human-data-for-ai',
    provider: { '@id': 'https://usebraintrust.com/#organization' },
    description: 'Enterprise AI training workforce infrastructure. Vetted RLHF specialists, data annotators, data labelers, and AI model evaluation experts. Automated assessment, government-issued ID verification, and deployment pipeline. 100+ countries, 50+ languages.',
    serviceType: 'AI Training Data & Human Feedback Workforce',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Training Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RLHF Data Collection', url: 'https://usebraintrust.com/rlhf-talent-network' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Annotation', url: 'https://usebraintrust.com/data-annotation-experts' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Labeling', url: 'https://usebraintrust.com/data-labeling-talent' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Model Evaluation', url: 'https://usebraintrust.com/ai-model-evaluation-experts' } },
      ],
    },
  };

  const allSchemas = [
    organizationSchema,
    websiteSchema,
    airSchema,
    nexusSchema,
    marketplaceSchema,
    humanDataSchema,
  ];

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <SocialProofTicker />
      </body>
    </html>
  );
}
