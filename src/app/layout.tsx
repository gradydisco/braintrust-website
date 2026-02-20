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
  description: 'Braintrust connects top talent with leading companies through an AI-powered talent network. Enterprise recruiting, workflow automation, and human data infrastructure.',
  keywords: ['talent marketplace', 'AI recruiting', 'AI interviewer', 'hire talent', 'find jobs', 'AI training data', 'BTRST'],
  authors: [{ name: 'Braintrust' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://usebraintrust.com',
    siteName: 'Braintrust',
    title: 'Braintrust — The AI-Powered Talent Network',
    description: 'Connect with top talent or find your next opportunity through an AI-powered talent marketplace.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Braintrust — The AI-Powered Talent Network',
    description: 'Connect with top talent or find your next opportunity through an AI-powered talent marketplace.',
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
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Braintrust',
    url: 'https://usebraintrust.com',
    logo: 'https://usebraintrust.com/logo.png',
    sameAs: [
      'https://twitter.com/usebraintrust',
      'https://linkedin.com/company/usebraintrust',
      'https://discord.gg/braintrust',
    ],
    description: 'The AI-powered talent network connecting top talent with leading companies through intelligent matching and enterprise-grade infrastructure.',
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
