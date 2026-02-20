# Vercel Setup Runbook

## 1. Create Vercel Project

```bash
# Install Vercel CLI if needed
npm i -g vercel

# Login
vercel login

# Link project
vercel link
# Select: usebraintrust organization
# Project name: braintrust-marketing
# Framework: Next.js
# Root: ./
```

## 2. Domain Configuration

```
Vercel Dashboard → Project → Settings → Domains

1. Add domain: usebraintrust.com
2. Add domain: www.usebraintrust.com (redirect to root)
3. DNS: Point A record to 76.76.21.21
4. DNS: Point CNAME record for www to cname.vercel-dns.com
5. Wait for SSL certificate provisioning (automatic)
```

## 3. Environment Variables

```
Vercel Dashboard → Project → Settings → Environment Variables

Production + Preview:
- NEXT_PUBLIC_BASE_URL = https://usebraintrust.com

Production Only:
- SALESFORCE_ORG_ID = (from Salesforce admin)
- SALESFORCE_WEB_TO_LEAD_URL = https://webto.salesforce.com/servlet/servlet.WebToLead
- SLACK_WEBHOOK_URL = (from Slack app config)
- BOOKING_SYSTEM_API_KEY = (from Calendly/Chili Piper)
- LEAD_NOTIFICATION_EMAIL = sales@usebraintrust.com

Optional:
- NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
- NEXT_PUBLIC_GTM_ID = GTM-XXXXXXX
- COINGECKO_API_KEY = (for rate limiting)
```

## 4. Preview Deployments

Every PR automatically gets a preview URL:
- Pattern: `braintrust-marketing-<hash>.vercel.app`
- Review on this URL before merging to main
- Share with stakeholders for approval

## 5. Build Settings

```
Settings → General → Build & Development

Framework: Next.js
Build Command: npm run build (default)
Output Directory: .next (default)
Install Command: npm install (default)
Node.js Version: 20.x
```

## 6. Vercel Function Configuration

The project uses one API route:
- `/api/leads` — Lead capture (serverless function)
- Region: `iad1` (US East) or closest to primary audience
- Timeout: 10s (default)

## 7. Analytics (Optional)

```
Vercel Dashboard → Analytics → Enable

Enable:
- Web Vitals monitoring
- Audience analytics
- Speed Insights
```

## 8. Caching Strategy

```
Next.js handles caching via:
- Static pages: Pre-rendered at build time, cached at edge
- Client pages (book-demo, token/price): Rendered on client
- API routes: No caching (per-request)

Custom headers in next.config.ts handle security headers.
```
