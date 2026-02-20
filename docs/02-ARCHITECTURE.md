# Architecture & Sitemap

## Route Map (37 routes)

### Company Experience
| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Gateway homepage with audience selector |
| `/for-companies` | Static | Company landing page |
| `/products` | Static | Product overview |
| `/products/talent-marketplace` | Static | Marketplace detail + Product schema |
| `/products/talent-marketplace/ai-training` | Static | AI Training Data detail |
| `/products/air` | Static | AIR (AI Recruiter) detail |
| `/products/nexus` | Static | Nexus detail |
| `/solutions` | Static | Solutions overview |
| `/solutions/enterprise-hiring` | Static | Enterprise hiring solution |
| `/solutions/high-volume-hiring` | Static | High-volume solution |
| `/solutions/ai-training-data` | Static | AI Training Data solution |
| `/pricing` | Static | Pricing tiers |
| `/book-demo` | Client | Lead capture form |
| `/contact` | Static | Contact info |
| `/resources` | Static | Content hub |
| `/blog` | Static | Blog listing |
| `/about` | Static | About page |

### Talent Experience
| Route | Type | Description |
|-------|------|-------------|
| `/for-talent` | Static | Talent landing page |
| `/jobs` | Static | Job listings with categories |
| `/ai-training` | Static | AI training work overview |
| `/ai-training/how-it-works` | Static | AI training process |
| `/ai-training/payments` | Static | Payment details |
| `/how-it-works` | Static | Talent onboarding steps |
| `/talent-faq` | Static | Talent FAQ with schema |
| `/trust-safety` | Static | Trust & safety info |

### Token Experience
| Route | Type | Description |
|-------|------|-------------|
| `/token` | Static | Token hub |
| `/token/what-is-btrst` | Static | BTRST explainer |
| `/token/tokenomics` | Static | Supply & distribution |
| `/token/governance` | Static | Governance process |
| `/token/price` | Client | Live price from CoinGecko API |
| `/token/faq` | Static | Token FAQ with schema |

### Global
| Route | Type | Description |
|-------|------|-------------|
| `/login` | Static | Login portal redirect |
| `/privacy` | Static | Privacy policy |
| `/terms` | Static | Terms of service |
| `/sitemap.xml` | Generated | XML sitemap |
| `/robots.txt` | Generated | Robots.txt |
| `/api/leads` | Dynamic | Lead capture API |

## Component Architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header, Footer, Organization schema)
│   ├── page.tsx            # Homepage gateway
│   ├── globals.css         # Complete design system
│   ├── api/leads/route.ts  # Lead capture API
│   ├── robots.ts           # robots.txt generation
│   ├── sitemap.ts          # XML sitemap generation
│   ├── for-companies/      # Company experience
│   ├── for-talent/         # Talent experience
│   ├── products/           # Product pages
│   ├── solutions/          # Solution pages
│   ├── token/              # Token ecosystem
│   └── ...                 # Other pages
├── components/
│   ├── Header.tsx          # Global header with audience toggle
│   ├── Footer.tsx          # Global footer with link columns
│   ├── FAQ.tsx             # Reusable FAQ accordion + schema
│   ├── CTASection.tsx      # Reusable CTA section
│   └── Breadcrumbs.tsx     # Breadcrumbs + schema
└── docs/                   # Project documentation
```
