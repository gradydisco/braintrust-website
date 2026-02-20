# Production Launch Checklist

## T-14 Days: Pre-Launch Verification

### Content
- [ ] All page copy finalized and proofread
- [ ] All meta titles unique and < 60 characters
- [ ] All meta descriptions unique and < 160 characters
- [ ] Every page has exactly one H1
- [ ] Heading hierarchy is logical (H1 → H2 → H3)
- [ ] All internal links work (no 404s)
- [ ] External links open in new tab with `rel="noopener noreferrer"`
- [ ] Placeholder content replaced (privacy, terms, blog posts)
- [ ] Token disclaimer reviewed by legal

### Technical SEO
- [ ] `sitemap.xml` generates correctly at `/sitemap.xml`
- [ ] `robots.txt` serves correctly at `/robots.txt`
- [ ] Organization schema in root layout
- [ ] Product schema on product pages
- [ ] FAQ schema on FAQ sections
- [ ] BreadcrumbList schema on breadcrumb pages
- [ ] Canonical URLs correct
- [ ] Open Graph and Twitter Card meta tags present
- [ ] Social share images uploaded

### Design & Accessibility
- [ ] All pages responsive on mobile (320px - 430px)
- [ ] All pages responsive on tablet (768px)
- [ ] All pages responsive on desktop (1024px+)
- [ ] Skip navigation link works
- [ ] All interactive elements keyboard accessible
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Images have alt text (when added)
- [ ] Form fields have labels
- [ ] Error states visible and descriptive

---

## T-7 Days: Integration Testing

### Lead Capture
- [ ] Book a Demo form submits successfully
- [ ] Lead appears in Salesforce (or logs correctly)
- [ ] Slack notification received with correct data
- [ ] Thank you message displays after submission
- [ ] Required field validation works

### Features
- [ ] Audience toggle persists across pages
- [ ] Navigation changes based on audience selection
- [ ] Mobile menu opens and closes correctly
- [ ] Dropdown menus work on hover (desktop)
- [ ] Token price page loads data from CoinGecko
- [ ] FAQ accordions open and close correctly

### Performance
- [ ] Lighthouse score > 90 (Performance)
- [ ] Lighthouse score > 90 (Accessibility)
- [ ] Lighthouse score > 90 (Best Practices)
- [ ] Lighthouse score > 90 (SEO)
- [ ] LCP < 2.5 seconds
- [ ] First Input Delay < 100ms
- [ ] Cumulative Layout Shift < 0.1

---

## T-1 Day: Final Verification

### DNS & SSL
- [ ] DNS records propagated
- [ ] SSL certificate active
- [ ] `www` redirects to root domain
- [ ] HTTP redirects to HTTPS
- [ ] No mixed content warnings

### Deployment
- [ ] Final PR merged to `main`
- [ ] Vercel production build successful
- [ ] All environment variables set in production
- [ ] Preview URL tested and approved
- [ ] Rollback plan documented

### Analytics
- [ ] Google Analytics tracking confirmed
- [ ] Conversion events firing
- [ ] Cookie consent banner functional
- [ ] Vercel Analytics enabled

---

## Launch Day (T-0)

1. [ ] Merge final PR to `main`
2. [ ] Verify Vercel auto-deployment completes
3. [ ] Test live site: `https://usebraintrust.com`
4. [ ] Verify all pages load correctly
5. [ ] Submit sitemap to Google Search Console
6. [ ] Submit sitemap to Bing Webmaster Tools
7. [ ] Test lead capture form on production
8. [ ] Announce launch internally

---

## Post-Launch (T+1 to T+7)

- [ ] Monitor Core Web Vitals in Vercel
- [ ] Check Google Search Console for indexing issues
- [ ] Monitor lead flow in Salesforce
- [ ] Review analytics for engagement patterns
- [ ] Collect team feedback for iteration
- [ ] Create backlog items for V2 features
