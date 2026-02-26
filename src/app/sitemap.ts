import type { MetadataRoute } from 'next';
import { blogPosts, authors } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://usebraintrust.com';

    const routes = [
        // Root
        { url: '/', changeFrequency: 'weekly' as const, priority: 1.0 },

        // Company Experience
        { url: '/for-companies', changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: '/products', changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: '/products/talent-marketplace', changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: '/products/talent-marketplace/ai-training', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/products/air', changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: '/products/air/try', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/products/air/demos', changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: '/products/nexus', changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: '/solutions/enterprise-hiring', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/solutions/high-volume-hiring', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/solutions/ai-training-data', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/pricing', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/resources', changeFrequency: 'weekly' as const, priority: 0.7 },
        { url: '/blog', changeFrequency: 'daily' as const, priority: 0.8 },
        { url: '/about', changeFrequency: 'monthly' as const, priority: 0.6 },
        { url: '/book-demo', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/contact', changeFrequency: 'monthly' as const, priority: 0.5 },

        // Referral Programs
        { url: '/refer/air', changeFrequency: 'monthly' as const, priority: 0.6 },
        { url: '/refer/marketplace', changeFrequency: 'monthly' as const, priority: 0.6 },

        // Talent Experience
        { url: '/for-talent', changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: '/jobs', changeFrequency: 'daily' as const, priority: 0.9 },
        { url: '/ai-training', changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: '/ai-training/how-it-works', changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: '/ai-training/payments', changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: '/how-it-works', changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: '/talent-faq', changeFrequency: 'monthly' as const, priority: 0.6 },
        { url: '/trust-safety', changeFrequency: 'monthly' as const, priority: 0.5 },

        // Token Experience
        { url: '/token', changeFrequency: 'weekly' as const, priority: 0.7 },
        { url: '/token/what-is-btrst', changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: '/token/tokenomics', changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: '/token/governance', changeFrequency: 'monthly' as const, priority: 0.6 },
        { url: '/token/faq', changeFrequency: 'monthly' as const, priority: 0.6 },
        { url: '/token/price', changeFrequency: 'daily' as const, priority: 0.6 },

        // Human Data / AI Training Workforce
        { url: '/human-data-for-ai', changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: '/data-annotation-experts', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/data-labeling-talent', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/rlhf-talent-network', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/ai-model-evaluation-experts', changeFrequency: 'monthly' as const, priority: 0.8 },

        // Marketplace Hiring Pages
        { url: '/hire-ai-engineers', changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: '/hire-machine-learning-engineers', changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: '/hire-data-scientists', changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: '/hire-technical-talent', changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: '/hire-contract-engineers', changeFrequency: 'weekly' as const, priority: 0.8 },

        // Competitor Comparisons — Marketplace
        { url: '/compare/braintrust-vs-upwork', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/compare/braintrust-vs-fiverr', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/compare/braintrust-vs-toptal', changeFrequency: 'monthly' as const, priority: 0.8 },

        // GEO / LLM Definitional Pages
        { url: '/what-is-rlhf', changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: '/what-is-data-annotation', changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: '/what-is-ai-training-data', changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: '/what-is-a-talent-marketplace', changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: '/what-is-human-feedback-ai', changeFrequency: 'monthly' as const, priority: 0.9 },

        // Legal
        { url: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
    ];

    // Blog posts
    const blogRoutes = blogPosts.map((post) => ({
        url: `/blog/${post.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Author pages
    const authorRoutes = authors.map((author) => ({
        url: `/author/${author.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }));

    const allRoutes = [...routes, ...blogRoutes, ...authorRoutes];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
