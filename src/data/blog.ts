import { batch1 } from './blogBatch1';
import { batch2 } from './blogBatch2';
import { batch3 } from './blogBatch3';
import { batch4 } from './blogBatch4';
import { batch5 } from './blogBatch5';
import { batch6 } from './blogBatch6';

export interface Author {
    slug: string;
    name: string;
    role: string;
    bio: string;
    avatar: string; // URL or path
    social?: {
        twitter?: string;
        linkedin?: string;
        github?: string;
    };
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // Markdown or HTML
    category: string;
    tags: string[];
    authorSlug: string;
    publishedAt: string; // ISO date string
    readingTime: string;
    featured?: boolean;
}

// ============================================
// AUTHORS
// ============================================
export const authors: Author[] = [
    {
        slug: 'adam-jackson',
        name: 'Adam Jackson',
        role: 'Founder CEO',
        bio: 'Adam co-founded Braintrust to build a talent network that returns value to the people who create it. Previously, he co-founded Doctor on Demand and has been building marketplaces for over a decade.',
        avatar: '/authors/adam-jackson.jpg',
        social: {
            twitter: 'https://x.com/adamjceo',
            linkedin: 'https://www.linkedin.com/in/adamjackson/',
        },
    },
    {
        slug: 'grady-gardner',
        name: 'Grady Gardner',
        role: 'GM and CRO',
        bio: 'Grady leads the Go-To-Market and Revenue teams at Braintrust, bringing deep expertise in scaling enterprise high-volume recruiting solutions and AI workforce automation.',
        avatar: '/authors/braintrust-team.jpg',
        social: {
            linkedin: 'https://www.linkedin.com/in/gradygardner/',
        },
    },
    {
        slug: 'gabriel-luna-ostaseski',
        name: 'Gabriel Luna-Ostaseski',
        role: 'Co-Founder & CBO',
        bio: 'Gabriel co-founded Braintrust and leads the business operations side. He brings deep experience in enterprise go-to-market strategy and marketplace dynamics.',
        avatar: '/authors/gabriel-luna-ostaseski.jpg',
        social: {
            linkedin: 'https://www.linkedin.com/in/gabriel-luna-ostaseski/',
        },
    },
    {
        slug: 'anne-muscarella',
        name: 'Anne Muscarella',
        role: 'Content Writer',
        bio: 'Anne writes about AI recruiting, workforce automation, and the evolving talent landscape. She covers real-world case studies, product updates, and compliance topics for Braintrust.',
        avatar: '/authors/braintrust-team.jpg',
    },
    {
        slug: 'braintrust-team',
        name: 'Braintrust Team',
        role: 'Editorial',
        bio: 'The Braintrust editorial team covers AI recruiting, workforce automation, and the future of work. We write for HR leaders, talent professionals, and technology executives.',
        avatar: '/authors/braintrust-team.jpg',
    },
];

// ============================================
// BLOG POSTS
// ============================================
export const blogPosts: BlogPost[] = [
    ...batch1,
    ...batch2,
    ...batch3,
    ...batch4,
    ...batch5,
    ...batch6,
];

// ============================================
// HELPERS
// ============================================
export function getAuthor(slug: string): Author | undefined {
    return authors.find(a => a.slug === slug);
}

export function getPostsByAuthor(authorSlug: string): BlogPost[] {
    return blogPosts.filter(p => p.authorSlug === authorSlug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(p => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
    return blogPosts.filter(p => p.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
    return blogPosts.filter(p => p.category === category);
}

export function getAllCategories(): string[] {
    return [...new Set(blogPosts.map(p => p.category))];
}
