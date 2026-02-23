import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'AI Training Work — Earn Money Training AI Models',
    description: 'Contribute your expertise to AI model training. Earn money for RLHF, data labeling, evaluation, and domain-specific AI training tasks. Join 2M+ professionals.',
};

const faqItems = [
    { question: 'What kind of work is AI training?', answer: 'AI training work includes rating AI responses (RLHF), labeling data, evaluating model outputs, creating training prompts, and providing domain expertise for model improvement.' },
    { question: 'How much can I earn?', answer: 'Earnings vary by task complexity and domain expertise. Specialized domain experts typically earn $25-75/hr for AI training tasks.' },
    { question: 'Do I need technical skills?', answer: 'Not necessarily. Many AI training tasks require domain knowledge (e.g., medical, legal, writing) rather than programming skills.' },
    { question: 'How do I get paid?', answer: 'Payments are processed weekly via direct deposit, PayPal, or wire transfer. No platform fees — you keep 100% of your earnings.' },
];

export default function AITraining() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'AI Training' }]} />
                    <div className="hero__content">
                        <div className="badge badge--accent">AI Training</div>
                        <h1>Train AI models.<br /><span className="text-gradient">Earn money.</span></h1>
                        <p>Use your domain expertise to improve AI models. Flexible work, competitive pay, and meaningful impact on technology.</p>
                        <div className="hero__actions">
                            <Link href="/ai-training/how-it-works" className="btn btn--primary btn--lg">Learn How It Works</Link>
                            <Link href="/ai-training/payments" className="btn btn--secondary btn--lg">Payment Details</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid--3">
                        {[
                            { title: 'RLHF Tasks', desc: 'Rate, rank, and improve AI model responses using your expertise.', icon: '⭐' },
                            { title: 'Data Labeling', desc: 'Annotate text, images, and data to help train machine learning models.', icon: '🏷️' },
                            { title: 'Expert Evaluation', desc: 'Use your domain knowledge to assess AI output quality and accuracy.', icon: '🔍' },
                            { title: 'Red Teaming', desc: 'Test AI models for weaknesses, biases, and safety issues.', icon: '🛡️' },
                            { title: 'Content Creation', desc: 'Create training data, prompts, and evaluation benchmarks.', icon: '✍️' },
                            { title: 'Domain Review', desc: 'Review AI outputs in your field — medical, legal, financial, and more.', icon: '📋' },
                        ].map((item) => (
                            <div key={item.title} className="card card--feature">
                                <div style={{ fontSize: '2rem', marginBottom: 'var(--space-4)' }}>{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--gray">
                <div className="container container--narrow">
                    <div className="section-header"><h2>Frequently Asked Questions</h2></div>
                    <FAQ items={faqItems} schemaId="ai-training-talent" />
                </div>
            </section>

            <CTASection title="Start earning today" description="Join thousands of professionals earning money by training AI models." primaryLabel="Get Started" primaryHref="/login" />
        </>
    );
}
