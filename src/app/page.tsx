import type { Metadata } from 'next';
import Link from 'next/link';
import LogoMarquee from '@/components/LogoMarquee';
import CTASection from '@/components/CTASection';
import NexusProductVisual from '@/components/NexusProductVisual';
import Image from 'next/image';
import AIRProductVisual from '@/components/AIRProductVisual';

import TalentMarketplaceVisual from '@/components/TalentMarketplaceVisual';

export const metadata: Metadata = {
  title: 'Braintrust — Hire. Screen. Automate.',
  description: 'Everything enterprises need to hire, assess, and manage talent — powered by AI and the world\'s largest talent network. Talent Marketplace, AIR, and Nexus.',
};

const productVisuals: Record<string, React.ReactNode> = {
  'Talent Marketplace': <TalentMarketplaceVisual />,
  'AIR | AI Recruiter': <AIRProductVisual />,
  'Nexus': <NexusProductVisual />,
};

const products = [
  {
    name: 'Talent Marketplace',
    badge: 'Talent Marketplace',
    tagline: 'Elite talent. Enterprise-ready.',
    description: 'Access 2M+ vetted professionals across engineering, design, product, and operations. Our AI matches you with ideal candidates in hours — with competitive, transparent pricing.',
    href: '/products/talent-marketplace',
    ctaLabel: 'Explore the Talent Marketplace',
    color: 'var(--color-primary)',
    features: [
      'AI-powered candidate matching',
      'Transparent, competitive pricing',
      'Enterprise compliance & onboarding',
      'Human data for AI model training',
      'Global talent pool across 100+ countries',
    ],
  },
  {
    name: 'AIR | AI Recruiter',
    badge: 'AIR | AI Recruiter',
    tagline: 'Superhuman recruiting intelligence.',
    description: 'Deploy AI that screens resumes, conducts structured interviews, and provides skills-based assessments — reducing bias and accelerating time-to-hire by 80%.',
    href: '/products/air',
    ctaLabel: 'See How AI Interviews Work',
    color: 'var(--color-accent)',
    features: [
      'AI-driven resume screening',
      'Automated structured interviews',
      'Skills-based candidate assessment',
      'Bias-reduced evaluation framework',
      'Seamless ATS integration',
    ],
  },
  {
    name: 'Nexus',
    badge: 'Nexus',
    tagline: 'Automate every process. Connect every system.',
    description: 'Custom AI agents that handle the repetitive, manual, operational work — from revenue ops to onboarding to customer service. Automate what\'s draining your budget and slowing you down.',
    href: '/products/nexus',
    ctaLabel: 'Find Your Automation ROI',
    color: 'var(--color-token)',
    features: [
      'Custom AI agents for your unique processes',
      'Revenue ops, onboarding & support automation',
      'Reimagines operations from the ground up',
      'Scale without ballooning headcount',
      'Works across your entire tool stack',
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ====== HERO ====== */}
      <section
        className="hero hero--centered"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'calc(var(--header-height) + 120px) 0 40px',
        }}
      >
        <div className="container">
          <div className="hero__content" style={{ maxWidth: 960 }}>
            {/* Plain eyebrow — no pill, matches Figma */}
            <p style={{
              fontSize: '24px',
              fontWeight: 400,
              color: '#1a1a1a',
              letterSpacing: '-0.01em',
              marginBottom: '16px',
            }}>
              Hire. Screen. Automate
            </p>
            <h1 style={{
              fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
              fontWeight: 600,
              color: '#1a1a1a',
              letterSpacing: '-0.03em',
              lineHeight: 1.02,
              marginBottom: 'var(--space-6)',
            }}>
              Three products<br />
              <span style={{
                background: 'linear-gradient(90deg, #7B70E8 0%, #C878B8 45%, #F4845F 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>One ecosystem.</span>
            </h1>
            <p style={{ maxWidth: 740, margin: '0 auto var(--space-12)', fontSize: '19px', color: '#475569', lineHeight: 1.6, fontWeight: 400 }}>
              Everything enterprises need to hire, assess, and manage talent<br />— powered by AI and the world&apos;s most vetted talent network.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/book-demo"
                className="btn btn--lg"
                id="home-hero-demo"
                style={{
                  background: '#0a0a0a',
                  color: '#fff',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                  border: 'none',
                }}
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="btn btn--lg"
                id="home-hero-pricing"
                style={{
                  background: 'transparent',
                  color: '#0a0a0a',
                  border: '1.5px solid #0a0a0a',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== LOGO CAROUSEL ====== */}
      <section style={{ background: 'white', padding: 'var(--space-12) 0', '--lm-bg': '#fff' } as React.CSSProperties}>
        <div className="container">
          <LogoMarquee />
        </div>
      </section>

      {/* ====== PRODUCT SECTIONS ====== */}
      {products.map((product, index) => (
        <section key={product.name} className={`section ${index % 2 === 1 ? 'section--gray' : ''}`}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-16)',
              alignItems: 'center',
            }}>
              {/* Text side */}
              <div style={{ order: index % 2 === 1 ? 2 : 1 }}>
                <div className="badge" style={{ marginBottom: 'var(--space-4)' }}>
                  {product.badge}
                </div>
                <h2 style={{ marginBottom: 'var(--space-3)' }}>{product.tagline}</h2>
                <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)' }}>
                  {product.description}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)', listStyle: 'none', padding: 0 }}>
                  {product.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                      <span style={{ color: product.color, fontWeight: 700, flexShrink: 0 }}>→</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href={product.href} className="btn btn--primary btn--lg" id={`home-product-cta-${index}`}>
                  {product.ctaLabel}
                </Link>
              </div>

              {/* Visual side */}
              <div style={{ order: index % 2 === 1 ? 1 : 2, display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 460 }}>
                  {productVisuals[product.name]}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ====== FINAL CTA ====== */}
      <CTASection
        title="See the platform in action"
        description="Book a personalized demo and discover how Braintrust products can transform your hiring."
        primaryLabel="Book a Demo"
        primaryHref="/book-demo"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
