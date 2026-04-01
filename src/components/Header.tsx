'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

interface NavChild {
  label: string;
  href: string;
  desc?: string;
  group?: string;
  isSecondary?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const unifiedNav: NavItem[] = [
  {
    label: 'Find Talent', href: '/products/talent-marketplace', children: [
      { label: 'Talent Marketplace', href: '/products/talent-marketplace', desc: 'Access 2M+ vetted professionals with AI-powered matching' },
      { label: 'Human Data', href: '/solutions/ai-training-data', desc: 'Expert contributors for every AI training need' },
    ]
  },
  {
    label: 'Screen Talent', href: '/products/air', children: [
      { label: 'AIR | AI Recruiter', href: '/products/air', desc: 'AI-powered screening, interviews, and assessments' },
      { label: 'Enterprise Hiring', href: '/solutions/enterprise-hiring', desc: 'Enterprise-grade AI hiring at scale', isSecondary: true },
      { label: 'High-Volume Hiring', href: '/solutions/high-volume-hiring', desc: 'Fill hundreds of roles efficiently at scale', isSecondary: true },
      { label: 'Best AI Interview Software 2025', href: '/best-ai-interview-software-2025', desc: 'Top 15 platforms ranked and compared', group: 'Compare', isSecondary: true },
    ]
  },
  {
    label: 'Automate', href: '/products/nexus', children: [
      { label: 'Nexus', href: '/products/nexus', desc: 'Workflow automation across your entire business' },
    ]
  },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Company', href: '/about', children: [
      { label: 'About', href: '/about', desc: 'Our mission, team, and story' },
      { label: 'Blog', href: '/blog', desc: 'Insights, case studies, and product updates' },
    ]
  },
  {
    label: 'For Talent', href: '/jobs', children: [
      { label: 'Browse Open Roles', href: '/jobs', desc: 'Preview high-quality matched opportunities across every field' },
      { label: 'AI Gig Work', href: '/ai-training', desc: 'Flexible, remote AI training work in your discipline' },
      { label: 'Talent Types', href: '/talent-types', desc: 'See all 12+ specialty categories we support' },
      { label: 'Certification Overview', href: '/talent-certification', desc: 'What Certified Braintrust Talent means and how to get it' },
      { label: 'How It Works', href: '/how-it-works', desc: '5-step journey from profile to paycheck' },
      { label: 'Start Your Profile', href: 'https://app.usebraintrust.com', desc: 'Create your free profile and begin certification' },
    ]
  }
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setDropdownOpen(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent, label: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setDropdownOpen(dropdownOpen === label ? null : label);
    } else if (e.key === 'Escape') {
      setDropdownOpen(null);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo} aria-label="Braintrust Home">
            <img
              src="/braintrust-logo.png"
              alt="Braintrust"
              className={styles.logoImage}
            />
          </Link>
        </div>

        <nav className={styles.nav} aria-label="Main navigation">
          {unifiedNav.map((item) => (
            <div
              key={item.href}
              className={styles.navItem}
              onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
              onMouseLeave={() => item.children && handleDropdownLeave()}
            >
              {item.children ? (
                <button
                  className={`nav-link ${pathname.startsWith(item.href) ? 'nav-link--active' : ''}`}
                  onClick={() => setDropdownOpen(dropdownOpen === item.label ? null : item.label)}
                  onKeyDown={(e) => handleKeyDown(e, item.label)}
                  aria-expanded={dropdownOpen === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 4, transition: 'transform 200ms', transform: dropdownOpen === item.label ? 'rotate(180deg)' : 'none' }}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`nav-link ${pathname === item.href || pathname.startsWith(item.href + '/') ? 'nav-link--active' : ''}`}
                >
                  {item.label}
                </Link>
              )}
              {item.children && dropdownOpen === item.label && (
                <div
                  className={styles.dropdown}
                  role="menu"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className={styles.dropdownContent}>
                    {item.children.map((child, idx) => {
                      const prevGroup = idx > 0 ? item.children![idx - 1].group : undefined;
                      const showGroupHeader = child.group && child.group !== prevGroup;
                      return (
                        <React.Fragment key={child.href}>
                          {showGroupHeader && (
                            <div className={styles.dropdownGroupHeader}>{child.group}</div>
                          )}
                          <Link
                            href={child.href}
                            className={styles.dropdownItem}
                            onClick={() => setDropdownOpen(null)}
                          >
                            <span className={child.isSecondary ? styles.dropdownItemLabelSecondary : styles.dropdownItemLabel}>{child.label}</span>
                            {child.desc && <span className={child.isSecondary ? styles.dropdownItemDescSecondary : styles.dropdownItemDesc}>{child.desc}</span>}
                          </Link>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.right}>
          <Link href="/book-demo" className="btn btn--primary">
            Book a Demo
          </Link>

          <div
            className={styles.navItem}
            onMouseEnter={() => handleDropdownEnter('login')}
            onMouseLeave={() => handleDropdownLeave()}
            style={{ position: 'relative' }}
          >
            <button
              className={`nav-link ${styles.loginBtn}`}
              onClick={() => setDropdownOpen(dropdownOpen === 'login' ? null : 'login')}
              aria-expanded={dropdownOpen === 'login'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
              Log In
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '2px' }}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {dropdownOpen === 'login' && (
              <div className={styles.loginDropdown}>
                <a href="https://app.usebraintrust.com" className={styles.dropdownItem} target="_blank" rel="noopener noreferrer">
                  <span className={styles.dropdownItemLabel}>Talent Login</span>
                  <span className={styles.dropdownItemDesc}>Access the Talent Marketplace</span>
                </a>
                <a href="https://app.usebraintrust.com" className={styles.dropdownItem} target="_blank" rel="noopener noreferrer">
                  <span className={styles.dropdownItemLabel}>Client Marketplace</span>
                  <span className={styles.dropdownItemDesc}>Manage talent and hiring</span>
                </a>
                <a href="https://air.usebraintrust.com/" className={styles.dropdownItem} target="_blank" rel="noopener noreferrer">
                  <span className={styles.dropdownItemLabel}>Client AIR</span>
                  <span className={styles.dropdownItemDesc}>AI Recruiter platform login</span>
                </a>
              </div>
            )}
          </div>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {unifiedNav.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map(child => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={styles.mobileSubLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className={styles.mobileLoginSection}>
            <span className={styles.mobileLoginTitle}>Log In</span>
            <a href="https://app.usebraintrust.com/auth/login/" className={styles.mobileSubLink} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
              Talent Login
            </a>
            <a href="https://app.usebraintrust.com" className={styles.mobileSubLink} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
              Client Marketplace
            </a>
            <a href="https://air.usebraintrust.com/" className={styles.mobileSubLink} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
              Client AIR
            </a>
          </div>
          <div className={styles.mobileCTA}>
            <Link
              href="/book-demo"
              className="btn btn--primary btn--lg"
              style={{ width: '100%' }}
              onClick={() => setMobileOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
