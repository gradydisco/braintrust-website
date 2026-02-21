import { batch1 } from './blogBatch1';
import { batch2 } from './blogBatch2';
import { batch3 } from './blogBatch3';
import { batch4 } from './blogBatch4';
import { batch5 } from './blogBatch5';

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
    {
        slug: 'ai-interviewing-enterprise-guide',
        title: 'AI Interviewing: The Enterprise Leader\'s Complete Guide',
        excerpt: 'How Fortune 500 companies are using AI-powered conversational interviews to screen 10x more candidates while reducing bias and improving quality of hire.',
        content: `AI interviewing is transforming how enterprises approach high-volume hiring. This guide covers the fundamentals of conversational AI interviews, implementation strategies, and measurable outcomes from early adopters.\n\nEnterprise organizations conducting thousands of interviews annually are discovering that AI-powered screening doesn't just save time — it fundamentally improves the quality and consistency of their hiring decisions.`,
        category: 'AI Recruiting',
        tags: ['AI Interviews', 'Enterprise', 'Recruiting Technology'],
        authorSlug: 'braintrust-team',
        publishedAt: '2026-02-18',
        readingTime: '8 min read',
        featured: true,
    },
    {
        slug: 'reducing-time-to-hire-with-ai',
        title: 'How We Reduced Time-to-Hire by 80% with AI Screening',
        excerpt: 'A deep dive into how Braintrust\'s AIR product processes thousands of applications daily and delivers qualified candidates in hours, not weeks.',
        content: `Traditional recruiting pipelines are broken. A single engineering role can attract 500+ applications, and human recruiters spend an average of 6 seconds per resume. The result: qualified candidates slip through the cracks while unqualified ones advance.\n\nBraintrust AIR was built to solve this. Here's how we engineered an 80% reduction in time-to-hire.`,
        category: 'Case Study',
        tags: ['AIR', 'Time-to-Hire', 'Automation'],
        authorSlug: 'adam-jackson',
        publishedAt: '2026-02-14',
        readingTime: '6 min read',
        featured: true,
    },
    {
        slug: 'conversational-ai-interviews-deep-dive',
        title: 'Conversational AI Interviews: Beyond Keyword Matching',
        excerpt: 'Why conversational voice interviews outperform traditional screening methods and how semantic understanding is changing candidate assessment.',
        content: `The first generation of AI recruiting tools were essentially keyword matchers — parsing resumes for specific terms and phrases. The results were mediocre at best and discriminatory at worst.\n\nConversational AI interviews represent a fundamentally different approach: real-time, adaptive dialogue that evaluates candidates the way the best human interviewers do.`,
        category: 'AI Recruiting',
        tags: ['Voice Interviews', 'NLP', 'Candidate Assessment'],
        authorSlug: 'braintrust-team',
        publishedAt: '2026-02-10',
        readingTime: '7 min read',
    },
    {
        slug: 'workforce-automation-2026-trends',
        title: 'Workforce Automation in 2026: 5 Trends Reshaping Enterprise Hiring',
        excerpt: 'From AI assessments to automated compliance, these five trends are defining how enterprises will hire talent this year and beyond.',
        content: `The workforce automation landscape is evolving rapidly. What was experimental in 2024 is becoming table stakes in 2026. Here are the five most important trends we're tracking.\n\n1. AI-First Screening is replacing resume-first workflows\n2. Skills-based assessments are overtaking credential-based filtering\n3. Global hiring compliance is being automated\n4. Predictive analytics are guiding workforce planning\n5. Candidate experience is being personalized at scale`,
        category: 'Industry Insights',
        tags: ['Workforce Automation', 'Trends', 'Enterprise'],
        authorSlug: 'gabriel-luna-ostaseski',
        publishedAt: '2026-02-06',
        readingTime: '5 min read',
    },
    {
        slug: 'building-ai-training-data-pipelines',
        title: 'Building AI Training Data Pipelines with Human-in-the-Loop',
        excerpt: 'How enterprises are leveraging Braintrust\'s talent network to build high-quality training datasets for foundation models and domain-specific AI.',
        content: `High-quality AI training data is the bottleneck for most enterprise AI initiatives. While synthetic data has its place, models trained on diverse, human-generated data consistently outperform their synthetic counterparts.\n\nBraintrust's network of 2M+ professionals provides a unique advantage: access to domain experts who can generate, label, and validate training data across every discipline.`,
        category: 'AI Training',
        tags: ['Training Data', 'RLHF', 'Foundation Models'],
        authorSlug: 'braintrust-team',
        publishedAt: '2026-02-02',
        readingTime: '9 min read',
    },
    {
        slug: 'enterprise-case-study-fortune-500-hiring',
        title: 'Case Study: How a Fortune 500 Retailer Hired 200 Engineers in 90 Days',
        excerpt: 'Using Braintrust\'s Talent Marketplace and AIR, a major retailer scaled their engineering team faster than traditional recruiting agencies could deliver.',
        content: `When a Fortune 500 retailer needed to rapidly scale their engineering team for a major digital transformation initiative, traditional recruiting agencies estimated 6-9 months. Using Braintrust, they hired 200 engineers in 90 days.\n\nThis case study examines the strategy, the technology stack used, and the measurable outcomes.`,
        category: 'Case Study',
        tags: ['Enterprise', 'Talent Marketplace', 'Scaling'],
        authorSlug: 'adam-jackson',
        publishedAt: '2026-01-28',
        readingTime: '6 min read',
    },
    {
        slug: 'eliminating-bias-in-ai-recruiting',
        title: 'Eliminating Bias in AI Recruiting: A Technical Approach',
        excerpt: 'How Braintrust builds fair, transparent AI assessments — and why skills-based evaluation outperforms demographic-correlated screening.',
        content: `AI recruiting tools have faced justified scrutiny around bias. Early systems often amplified existing biases in hiring data. At Braintrust, we took a different approach from day one.\n\nOur assessment framework is built on skills-based evaluation criteria. We score what candidates can do, not where they went to school or which companies they've worked at.`,
        category: 'AI Recruiting',
        tags: ['Bias', 'Fairness', 'AI Ethics'],
        authorSlug: 'braintrust-team',
        publishedAt: '2026-01-22',
        readingTime: '8 min read',
    },
    {
        slug: 'rlhf-at-scale-lessons-learned',
        title: 'RLHF at Scale: What We\'ve Learned Training Models with 2M+ Professionals',
        excerpt: 'Practical lessons from building large-scale RLHF and human data pipelines for enterprise AI training initiatives.',
        content: `Reinforcement Learning from Human Feedback (RLHF) has become essential for training high-quality AI models. But scaling RLHF is hard — you need diverse, expert human feedback, consistent quality, and robust quality assurance.\n\nBraintrust's talent network offers a unique infrastructure for RLHF at scale. Here's what we've learned.`,
        category: 'AI Training',
        tags: ['RLHF', 'Foundation Models', 'Scale'],
        authorSlug: 'braintrust-team',
        publishedAt: '2026-01-16',
        readingTime: '10 min read',
    },
    {
        slug: 'future-of-recruiting-technology',
        title: 'The Future of Recruiting Technology: AI Agents and Autonomous Hiring',
        excerpt: 'Looking ahead at how AI agents will transform recruiting from a human-intensive process to an AI-orchestrated workflow.',
        content: `Recruiting technology has evolved through three distinct eras: job boards (1990s-2000s), applicant tracking systems (2000s-2010s), and AI-assisted tools (2010s-present). We're now entering a fourth era: autonomous AI recruiting.\n\nThis isn't about replacing human judgment — it's about augmenting it at every stage of the hiring funnel.`,
        category: 'Industry Insights',
        tags: ['Future of Work', 'AI Agents', 'Recruiting'],
        authorSlug: 'adam-jackson',
        publishedAt: '2026-01-10',
        readingTime: '7 min read',
    },
    {
        slug: 'zero-fee-talent-marketplace-economics',
        title: 'The Economics of a Zero-Fee Talent Marketplace',
        excerpt: 'Why Braintrust charges zero platform fees to talent — and how this model creates better outcomes for both talent and companies.',
        content: `Traditional staffing agencies charge talent 15-40% of their earnings. Braintrust charges zero. This isn't a loss leader — it's a fundamentally different business model that creates better outcomes for everyone involved.\n\nHere's how the economics work, and why more companies are switching to talent-first platforms.`,
        category: 'Industry Insights',
        tags: ['Marketplace', 'Economics', 'Talent'],
        authorSlug: 'gabriel-luna-ostaseski',
        publishedAt: '2026-01-05',
        readingTime: '5 min read',
    },
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
