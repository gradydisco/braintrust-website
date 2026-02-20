import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Human Data — Enterprise-Grade Data Collection & Annotation',
    description: 'Access verified domain experts for data labeling, annotation, and collection at scale. Power your AI models with high-quality human data from Braintrust\'s 2M+ professional network.',
};

const capabilities = [
    { title: 'Data Labeling & Annotation', desc: 'Structured annotation across text, image, video, and audio datasets. Multi-language capabilities spanning 100+ countries.' },
    { title: 'Content Moderation', desc: 'Human review and classification of content for safety, policy compliance, and quality — at scale with rapid turnaround.' },
    { title: 'Data Collection', desc: 'Custom data collection programs leveraging our global network of domain experts. Surveys, recordings, image capture, and more.' },
    { title: 'Search Relevance', desc: 'Expert evaluation of search results, ranking algorithms, and recommendation systems for precision and recall optimization.' },
    { title: 'Transcription & Translation', desc: 'Professional-grade transcription and translation services with domain expertise in medical, legal, financial, and technical fields.' },
    { title: 'Quality Assurance', desc: 'Multi-layer QA processes including inter-annotator agreement scoring, automated checks, and continuous improvement loops.' },
];

const industries = [
    'Healthcare & Life Sciences',
    'Financial Services',
    'Legal & Compliance',
    'Technology & Software',
    'Retail & E-commerce',
    'Automotive & Manufacturing',
    'Media & Entertainment',
    'Government & Public Sector',
];

const faqItems = [
    { question: 'What types of human data does Braintrust provide?', answer: 'We provide data labeling, annotation, content moderation, data collection, transcription, translation, search relevance evaluation, and other customized data services powered by our global network of verified professionals.' },
    { question: 'How do you ensure data quality?', answer: 'We use multi-layer quality assurance including automated validation checks, expert review panels, inter-annotator agreement scoring, and continuous feedback loops with your team. Every annotator is verified and domain-qualified.' },
    { question: 'What industries can you support?', answer: 'Our network covers healthcare, legal, finance, technology, retail, automotive, media, government, and dozens of other verticals. We match domain experts to your specific data needs.' },
    { question: 'How quickly can you scale?', answer: 'With 2M+ professionals in our network, we can rapidly scale data operations to meet tight deadlines. Most programs can begin delivering data within days of kickoff.' },
    { question: 'Is the data secure?', answer: 'Yes. We are SOC 2 Type II certified. All data is handled under strict NDAs, and we support HIPAA, GDPR, and other compliance requirements as needed.' },
];

export default function HumanData() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Products', href: '/products' },
                        { label: 'Talent Marketplace', href: '/products/talent-marketplace' },
                        { label: 'Human Data' },
                    ]} />
                    <div className="hero__content">
                        <div className="badge">Human Data</div>
                        <h1>Expert data<br /><span className="text-gradient">at scale.</span></h1>
                        <p>High-quality data labeling, annotation, and collection powered by 2M+ verified domain experts across every industry.</p>
                        <div className="hero__actions">
                            <Link href="/book-demo" className="btn btn--primary btn--lg">Get Started</Link>
                            <Link href="/products/talent-marketplace/ai-training" className="btn btn--secondary btn--lg">AI Training →</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Human data capabilities</h2>
                        <p>Enterprise-grade data services powered by verified domain experts.</p>
                    </div>
                    <div className="grid grid--3">
                        {capabilities.map((item) => (
                            <div key={item.title} className="card card--feature">
                                <h4 style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--gray">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Industries</div>
                        <h2>Domain expertise across every vertical</h2>
                        <p>Our network spans thousands of specializations — matched to your exact data needs.</p>
                    </div>
                    <div className="grid grid--auto" style={{ maxWidth: '800px', margin: '0 auto', gap: 'var(--space-4)' }}>
                        {industries.map((ind) => (
                            <div key={ind} className="card" style={{ padding: 'var(--space-4) var(--space-6)', textAlign: 'center' }}>
                                <span style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{ind}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    <div className="section-header"><h2>FAQ</h2></div>
                    <FAQ items={faqItems} schemaId="human-data" />
                </div>
            </section>

            <CTASection
                title="Scale your data operations"
                description="Connect with our team to discuss your human data needs and get a custom solution."
                primaryLabel="Contact Sales"
                primaryHref="/book-demo"
            />
        </>
    );
}
