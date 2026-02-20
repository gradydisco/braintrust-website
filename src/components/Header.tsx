'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.css';

interface NavChild {
  label: string;
  href: string;
  desc?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const companyNav: NavItem[] = [
  {
    label: 'Products', href: '/products', children: [
      { label: 'Talent Marketplace', href: '/products/talent-marketplace', desc: 'Access 2M+ vetted professionals with AI-powered matching' },
      { label: 'AIR | AI Recruiter', href: '/products/air', desc: 'AI-powered screening, interviews, and assessments' },
      { label: 'Nexus', href: '/products/nexus', desc: 'Workflow automation across your entire business' },
    ]
  },
  {
    label: 'Solutions', href: '/solutions', children: [
      { label: 'Enterprise Hiring', href: '/solutions/enterprise-hiring', desc: 'Scale your talent pipeline with enterprise-grade tools' },
      { label: 'High-Volume Hiring', href: '/solutions/high-volume-hiring', desc: 'Fill hundreds of roles efficiently at scale' },
      { label: 'AI Training Data', href: '/solutions/ai-training-data', desc: 'Human data and RLHF for AI model training' },
    ]
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
];

const talentNav: NavItem[] = [
  { label: 'Find Jobs', href: '/jobs' },
  { label: 'AI Training', href: '/ai-training' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
];

export type AudienceMode = 'company' | 'talent';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audience, setAudience] = useState<AudienceMode>('company');
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const stored = document.cookie.split(';').find(c => c.trim().startsWith('bt_audience='));
    if (stored) {
      const val = stored.split('=')[1] as AudienceMode;
      if (val === 'company' || val === 'talent') setAudience(val);
    }

    if (pathname.startsWith('/for-talent') || pathname.startsWith('/jobs') || pathname.startsWith('/ai-training') || pathname.startsWith('/how-it-works')) {
      setAudience('talent');
    } else if (pathname.startsWith('/for-companies') || pathname.startsWith('/products') || pathname.startsWith('/solutions') || pathname.startsWith('/pricing') || pathname.startsWith('/book-demo')) {
      setAudience('company');
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchAudience = (mode: AudienceMode) => {
    setAudience(mode);
    document.cookie = `bt_audience=${mode};path=/;max-age=31536000`;
    // Route to the corresponding audience page
    if (mode === 'company') {
      if (pathname === '/' || pathname.startsWith('/for-talent')) {
        router.push('/for-companies');
      }
    } else {
      if (pathname === '/' || pathname.startsWith('/for-companies')) {
        router.push('/for-talent');
      }
    }
  };

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

  const nav = audience === 'company' ? companyNav : talentNav;

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
          {nav.map((item) => (
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
                  <div className={styles.dropdownHeader}>
                    <span className={styles.dropdownTitle}>{item.label}</span>
                  </div>
                  {item.children.map(child => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={styles.dropdownItem}
                      role="menuitem"
                      onClick={() => setDropdownOpen(null)}
                    >
                      <span className={styles.dropdownItemLabel}>{child.label}</span>
                      {child.desc && <span className={styles.dropdownItemDesc}>{child.desc}</span>}
                      <svg className={styles.dropdownArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                  <div className={styles.dropdownFooter}>
                    <Link href={item.href} className={styles.dropdownFooterLink} onClick={() => setDropdownOpen(null)}>
                      View all {item.label.toLowerCase()} →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.right}>
          <div className="audience-toggle">
            <button
              className={`audience-toggle__option ${audience === 'company' ? 'audience-toggle__option--active' : ''}`}
              onClick={() => switchAudience('company')}
              aria-pressed={audience === 'company'}
            >
              Companies
            </button>
            <button
              className={`audience-toggle__option ${audience === 'talent' ? 'audience-toggle__option--active' : ''}`}
              onClick={() => switchAudience('talent')}
              aria-pressed={audience === 'talent'}
            >
              Talent
            </button>
          </div>

          <Link href="/token" className={`nav-link ${styles.tokenLink}`}>
            <span className={styles.tokenDot}></span>
            BTRST
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
                <a href="https://app.usebraintrust.com/talent/login" className={styles.dropdownItem} target="_blank" rel="noopener noreferrer">
                  <span className={styles.dropdownItemLabel}>Talent Login</span>
                  <span className={styles.dropdownItemDesc}>Access the Talent Marketplace</span>
                </a>
                <a href="https://app.usebraintrust.com/client/login" className={styles.dropdownItem} target="_blank" rel="noopener noreferrer">
                  <span className={styles.dropdownItemLabel}>Client Marketplace</span>
                  <span className={styles.dropdownItemDesc}>Manage talent and hiring</span>
                </a>
                <a href="https://air.usebraintrust.com/login" className={styles.dropdownItem} target="_blank" rel="noopener noreferrer">
                  <span className={styles.dropdownItemLabel}>Client AIR</span>
                  <span className={styles.dropdownItemDesc}>AI Recruiter platform login</span>
                </a>
              </div>
            )}
          </div>

          <Link href={audience === 'company' ? '/book-demo' : '/jobs'} className="btn btn--primary btn--sm">
            {audience === 'company' ? 'Book a Demo' : 'Find Jobs'}
          </Link>

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
          <div className={styles.mobileAudienceToggle}>
            <div className="audience-toggle">
              <button
                className={`audience-toggle__option ${audience === 'company' ? 'audience-toggle__option--active' : ''}`}
                onClick={() => switchAudience('company')}
              >
                Companies
              </button>
              <button
                className={`audience-toggle__option ${audience === 'talent' ? 'audience-toggle__option--active' : ''}`}
                onClick={() => switchAudience('talent')}
              >
                Talent
              </button>
            </div>
          </div>
          {nav.map((item) => (
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
          <Link href="/token" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
            BTRST Token
          </Link>
          <div className={styles.mobileLoginSection}>
            <span className={styles.mobileLoginTitle}>Log In</span>
            <a href="https://app.usebraintrust.com/talent/login" className={styles.mobileSubLink} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
              Talent Login
            </a>
            <a href="https://app.usebraintrust.com/client/login" className={styles.mobileSubLink} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
              Client Marketplace
            </a>
            <a href="https://air.usebraintrust.com/login" className={styles.mobileSubLink} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
              Client AIR
            </a>
          </div>
          <div className={styles.mobileCTA}>
            <Link
              href={audience === 'company' ? '/book-demo' : '/jobs'}
              className="btn btn--primary btn--lg"
              style={{ width: '100%' }}
              onClick={() => setMobileOpen(false)}
            >
              {audience === 'company' ? 'Book a Demo' : 'Find Jobs'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
