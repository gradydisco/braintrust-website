# Integration TODO List

## Priority 1 — Pre-Launch Required

### Salesforce Lead Routing
- [ ] Get Salesforce Organization ID from admin
- [ ] Create custom fields for lead type, company size
- [ ] Configure Web-to-Lead endpoint
- [ ] Update `/api/leads/route.ts` with Salesforce payload
- [ ] Test lead creation in Salesforce sandbox
- [ ] Set up lead assignment rules by territory/product interest
- **File**: `src/app/api/leads/route.ts`

### Slack Notifications
- [ ] Create Slack app or use Incoming Webhooks
- [ ] Set up `#website-leads` channel
- [ ] Add webhook URL to Vercel environment variables
- [ ] Uncomment Slack integration in `/api/leads/route.ts`
- [ ] Test notification format
- **File**: `src/app/api/leads/route.ts`

### Domain & DNS
- [ ] Configure DNS records for `usebraintrust.com`
- [ ] Set up `www` redirect
- [ ] Verify SSL certificate provisioning
- [ ] Test in all major browsers

---

## Priority 2 — Launch Window

### Booking System
- [ ] Select provider (Calendly, Chili Piper, HubSpot Meetings)
- [ ] Configure API integration
- [ ] Set up round-robin scheduling for sales team
- [ ] Auto-send booking link after form submission
- **File**: `src/app/api/leads/route.ts`

### Analytics
- [ ] Set up Google Analytics 4 property
- [ ] Configure Google Tag Manager container
- [ ] Add environment variables to Vercel
- [ ] Create analytics component (loaded after consent)
- [ ] Set up conversion tracking for demo form submissions

### Cookie Consent
- [ ] Select consent management platform
- [ ] Implement consent banner component
- [ ] Integrate with analytics (only fire after consent)
- [ ] Test GDPR and CCPA compliance flows

### Brand Assets
- [ ] Replace SVG logo placeholder with actual Braintrust logo
- [ ] Add favicon and app icons (`public/favicon.ico`, `public/icon.svg`)
- [ ] Add social share images (`public/og-image.png`)
- [ ] Update layout.tsx with actual logo paths

---

## Priority 3 — Post-Launch Enhancement

### CoinGecko Price Widget
- [ ] Get CoinGecko API Pro key for higher rate limits
- [ ] Implement actual price chart (Chart.js or TradingView widget)
- [ ] Add historical price data endpoint
- **File**: `src/app/token/price/page.tsx`

### Blog CMS
- [ ] Select headless CMS (Sanity, Contentful, or MDX)
- [ ] Set up blog post schema
- [ ] Create `/blog/[slug]` dynamic route
- [ ] Implement Article schema markup on blog posts
- [ ] Add RSS feed generation

### Job Listings Integration
- [ ] Connect to Braintrust talent API for real job data
- [ ] Create `/jobs/[category]` dynamic routes
- [ ] Add search and filter functionality
- [ ] Implement JobPosting schema markup

### Legal Content
- [ ] Replace placeholder Privacy Policy with final version
- [ ] Replace placeholder Terms of Service with final version
- [ ] Have legal team review token disclaimer language
- **Files**: `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`

### Performance
- [ ] Implement image optimization (WebP/AVIF)
- [ ] Add lazy loading for below-fold sections
- [ ] Set up Vercel Speed Insights
- [ ] Target : LCP < 2.5s, FID < 100ms, CLS < 0.1
