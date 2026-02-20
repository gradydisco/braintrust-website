import type { MetadataRoute } from 'next';

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
        { url: '/products/nexus', changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: '/solutions', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/solutions/enterprise-hiring', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/solutions/high-volume-hiring', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/solutions/ai-training-data', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/pricing', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/resources', changeFrequency: 'weekly' as const, priority: 0.7 },
        { url: '/blog', changeFrequency: 'daily' as const, priority: 0.7 },
        { url: '/about', changeFrequency: 'monthly' as const, priority: 0.6 },
        { url: '/book-demo', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/contact', changeFrequency: 'monthly' as const, priority: 0.5 },

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

        // Legal
        { url: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
