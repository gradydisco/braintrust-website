import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Best AI Interview Software 2025 — 15 Platforms Compared (Features, Pricing, Voice AI)',
    description: 'The most comprehensive comparison of AI interview software in 2025. We evaluated 15 platforms — including Braintrust AIR, HireVue, Paradox, TestGorilla, and SparkHire — across voice AI, conversational depth, enterprise readiness, and scalability.',
    keywords: 'best AI interview software, top AI interview platforms, AI interview software comparison, AI interviewing tools, best AI hiring software 2025, AI interview platform comparison',
};

const platforms = [
    {
        name: 'Braintrust AIR', tagline: 'Full-stack conversational AI interviewer', type: 'Conversational AI', voice: '✓ Real-time adaptive', conversational: '✓ Full adaptive', assessments: '✓ Multi-dimensional', enterprise: '✓ SOC 2, SSO, 50+ ATS', scale: '1000s/day', languages: '16+', bestFor: 'Enterprise & high-volume hiring with conversational voice interviews', slug: 'air', url: '/products/air',
        desc: 'Braintrust AIR is the most advanced conversational AI interview platform available. It conducts real-time, adaptive voice interviews that dynamically follow up on candidate responses, evaluate technical skills, communication quality, and behavioral signals simultaneously. AIR operates at enterprise scale — processing thousands of interviews per day across 16+ languages — with SOC 2 Type II certification, enterprise SSO, and native integrations with 50+ ATS platforms. Organizations typically see 10-20× ROI through reduced recruiter hours, faster time-to-hire, and improved quality of hire.'
    },
    {
        name: 'HireVue', tagline: 'Enterprise video interviewing & assessments', type: 'Video Interview', voice: '✗ Video-focused', conversational: '✗ Scripted/one-way', assessments: '✓ Game-based + video', enterprise: '✓ SOC 2, SSO', scale: 'Enterprise', languages: '10+', bestFor: 'Large enterprises wanting video-first assessment', slug: 'hirevue', url: '/compare/air-vs-hirevue',
        desc: 'HireVue is one of the longest-tenured platforms in AI hiring, known for video-based interviews with AI analysis. Candidates record responses to pre-set questions, and the AI evaluates delivery, content, and behavioral signals. HireVue also offers game-based assessments and coding challenges. Strong enterprise presence but limited in real-time conversational AI capabilities.'
    },
    {
        name: 'TestGorilla', tagline: 'Pre-hire skills assessment', type: 'Skills Testing', voice: '✗ None', conversational: '✗ Test-based', assessments: '✓ 400+ test library', enterprise: '△ Growing', scale: 'Medium-High', languages: '12+', bestFor: 'Skills-first hiring with extensive test library', slug: 'testgorilla', url: '/compare/air-vs-testgorilla',
        desc: 'TestGorilla offers a library of 400+ pre-built assessments covering cognitive ability, programming, language, and personality. It\'s a strong choice for organizations that want structured, test-based evaluation. However, it lacks voice AI and conversational interview capabilities — assessments are text-based and scripted.'
    },
    {
        name: 'VidCruiter', tagline: 'Video interviewing & recruitment automation', type: 'Video Interview', voice: '✗ Video only', conversational: '✗ Structured video', assessments: '△ Basic scoring', enterprise: '△ Mid-market focus', scale: 'Medium', languages: '5+', bestFor: 'Mid-market video interviewing', slug: 'vidcruiter', url: '/compare/air-vs-vidcruter',
        desc: 'VidCruiter provides structured video interviewing with configurable workflows and multi-stage interview support. It offers both one-way (asynchronous) and live video interview options. While solid for mid-market video-first hiring, it lacks AI conversational capabilities and advanced scoring frameworks.'
    },
    {
        name: 'SparkHire', tagline: 'Video interview platform', type: 'Video Interview', voice: '✗ Video only', conversational: '✗ One-way video', assessments: '△ Rating-based', enterprise: '△ Mid-market', scale: 'Medium', languages: '3+', bestFor: 'Simple one-way video interviews', slug: 'sparkhire', url: '/compare/air-vs-sparkhire',
        desc: 'SparkHire focuses on one-way and live video interviews with a clean, simple interface. Popular with mid-market companies for its ease of use and straightforward pricing. Limited AI capabilities — candidates record answers to preset questions with basic rating-based evaluation.'
    },
    {
        name: 'MyInterview', tagline: 'AI-assisted video screening', type: 'Video Interview', voice: '✗ Video only', conversational: '✗ Scripted', assessments: '△ AI scoring', enterprise: '△ SMB focus', scale: 'Low-Medium', languages: '5+', bestFor: 'SMB video screening', slug: 'myinterview', url: '/compare/air-vs-myinterview',
        desc: 'MyInterview uses AI to analyze video interview responses, scoring for keywords, sentiment, and communication quality. Designed for SMBs and mid-market companies seeking simple video screening. Limited enterprise features and no real-time conversational AI capability.'
    },
    {
        name: 'Paradox (Olivia)', tagline: 'Conversational AI recruiting assistant', type: 'Chat AI', voice: '△ Limited', conversational: '△ Chat-focused', assessments: '✗ Screening only', enterprise: '✓ Enterprise-ready', scale: 'High', languages: '10+', bestFor: 'High-volume scheduling & candidate engagement', slug: 'paradox', url: '/compare/air-vs-paradox',
        desc: 'Paradox\'s AI assistant "Olivia" excels at candidate engagement, scheduling automation, and high-volume applicant communication. It\'s a strong conversational AI for workflow automation but not designed for in-depth candidate assessment or evaluation — it handles the logistics of hiring rather than the evaluation.'
    },
    {
        name: 'Humanly', tagline: 'Chat AI for high-volume screening', type: 'Chat AI', voice: '△ Basic', conversational: '△ Chat-based', assessments: '△ Basic screening', enterprise: '△ Growing', scale: 'Medium-High', languages: '5+', bestFor: 'Chat-based high-volume screening', slug: 'humanly', url: '/compare/air-vs-humanly',
        desc: 'Humanly offers chatbot-based candidate screening and engagement for high-volume hiring. It automates initial screening questions and scheduling via text conversation. Useful for frontline hiring but limited in assessment depth and voice AI capabilities.'
    },
    {
        name: 'Interviewer.ai', tagline: 'AI video screening & ranking', type: 'Video Interview', voice: '✗ Video only', conversational: '✗ One-way', assessments: '△ AI scoring', enterprise: '✗ SMB focus', scale: 'Low-Medium', languages: '3+', bestFor: 'Budget video screening', slug: 'interviewer-ai', url: '/compare/air-vs-interviewer-ai',
        desc: 'Interviewer.ai provides AI-powered video screening with automated candidate ranking. Candidates record video responses, and the AI scores communication skills and content quality. Simple and affordable but limited in conversational depth and enterprise capabilities.'
    },
    {
        name: 'BrightHire', tagline: 'Interview intelligence platform', type: 'Interview Intelligence', voice: '✗ Records human interviews', conversational: '✗ Not AI interviewer', assessments: '△ Analysis tools', enterprise: '✓ Enterprise-ready', scale: 'Medium', languages: '3+', bestFor: 'Improving human interview quality', slug: 'brighthire', url: '/compare/air-vs-brighthire',
        desc: 'BrightHire records and analyzes live human interviews to improve hiring decisions. It\'s an interview intelligence tool — not an AI interviewer. It helps human interviewers be more consistent and provides post-interview analytics. Different category than conversational AI interviewing.'
    },
    {
        name: 'Take2', tagline: 'Job simulation assessments', type: 'Assessment', voice: '✗ None', conversational: '✗ Simulation-based', assessments: '✓ Job simulations', enterprise: '△ Growing', scale: 'Medium', languages: '3+', bestFor: 'Role-specific job simulations', slug: 'take2', url: '/compare/air-vs-take2',
        desc: 'Take2 provides job simulation assessments that evaluate candidates in realistic work scenarios. Candidates complete simulated tasks relevant to the actual role. Interesting assessment methodology but no conversational AI or voice interview capabilities.'
    },
    {
        name: 'AlexAI', tagline: 'AI-powered recruiting assistant', type: 'Chat AI', voice: '△ Limited', conversational: '△ Chat-based', assessments: '△ Basic', enterprise: '✗ Early stage', scale: 'Low-Medium', languages: '3+', bestFor: 'Early-stage AI recruiting automation', slug: 'alexai', url: '/compare/air-vs-alexai',
        desc: 'AlexAI is an AI recruiting assistant that automates candidate engagement and basic screening through chat-based conversation. Earlier stage than enterprise platforms — suitable for smaller organizations exploring AI recruiting.'
    },
    {
        name: 'Micro1', tagline: 'AI technical interviewing', type: 'Technical AI', voice: '△ Limited', conversational: '△ Technical focus', assessments: '✓ Technical', enterprise: '✗ Startup-focused', scale: 'Low-Medium', languages: '3+', bestFor: 'Technical developer screening', slug: 'micro1', url: '/compare/air-vs-micro1',
        desc: 'Micro1 focuses on AI-powered technical interviews, primarily for software engineering roles. It conducts automated technical assessments and coding interviews. Narrowly focused on technical hiring — not suitable for general hiring or non-technical roles.'
    },
    {
        name: 'HeyMilo', tagline: 'Voice AI interviews', type: 'Voice AI', voice: '✓ Voice-based', conversational: '✓ Conversational', assessments: '△ Growing', enterprise: '△ Growing', scale: 'Medium', languages: '5+', bestFor: 'Voice-first AI interviewing', slug: 'heymilo', url: '/compare/air-vs-heymilo',
        desc: 'HeyMilo offers voice-based AI interviews with conversational capabilities. A newer entrant in the voice AI interview space with growing feature set. Less mature enterprise infrastructure than Braintrust AIR but focused on voice-first interviewing.'
    },
    {
        name: 'Willow', tagline: 'AI recruiting automation', type: 'Recruiting AI', voice: '△ Limited', conversational: '△ Chat-based', assessments: '△ Basic', enterprise: '✗ Early stage', scale: 'Low-Medium', languages: '3+', bestFor: 'Emerging AI recruiting automation', slug: 'willow', url: '/compare/air-vs-willow',
        desc: 'Willow is an AI-powered recruiting automation tool that assists with candidate screening and engagement. Early-stage platform with developing capabilities across the recruiting workflow.'
    },
];

const faqItems = [
    { question: 'What is the best AI interview software in 2025?', answer: 'Based on our evaluation across voice AI capability, conversational depth, enterprise readiness, assessment sophistication, and scalability, Braintrust AIR leads the category in 2025. It offers the most advanced conversational AI interviewing with real-time adaptive voice interviews, enterprise-grade security, and proven ROI at scale.' },
    { question: 'How did you evaluate these platforms?', answer: 'We evaluated 15 AI interview platforms across six dimensions: voice AI capability (real-time voice vs. text/video only), conversational depth (adaptive vs. scripted), assessment sophistication (multi-dimensional scoring vs. basic), enterprise readiness (SOC 2, SSO, ATS integrations), scalability (interviews per day capacity), and language support.' },
    { question: 'What is the difference between AI interview software and video interview software?', answer: 'Video interview software records candidates answering pre-set questions on camera — it\'s essentially a recording tool with basic AI analysis. AI interview software (especially conversational AI) conducts real-time, adaptive interviews that respond to candidate answers, ask follow-up questions, and evaluate dynamically. The evaluation quality difference is substantial.' },
    { question: 'Which AI interview platform is best for enterprise?', answer: 'For enterprise organizations requiring SOC 2 compliance, SSO, deep ATS integrations, and dedicated support, Braintrust AIR and HireVue are the strongest options. AIR offers more advanced conversational AI capabilities while HireVue has broader brand recognition in traditional enterprise video interviewing.' },
    { question: 'Which platform is best for high-volume hiring?', answer: 'Braintrust AIR and Paradox are the strongest options for high-volume hiring. AIR handles thousands of voice interviews per day with deep assessment, while Paradox excels at high-volume scheduling and candidate engagement through chat. Many organizations use both.' },
    { question: 'Are AI interviewing platforms biased?', answer: 'Well-designed AI interview platforms are less biased than human interviewing because they evaluate candidates against consistent, structured criteria. However, bias can exist in AI systems if they are trained on biased data. Leading platforms conduct regular bias audits, use skills-based evaluation, and provide transparent scoring rationale.' },
    { question: 'How much do AI interview platforms cost?', answer: 'Pricing varies significantly. Enterprise platforms typically charge per-interview or on annual contracts ranging from $10K-$200K+ depending on volume and capabilities. Most platforms offer ROI that far exceeds cost — Braintrust AIR customers typically see 10-20× return on investment.' },
    { question: 'Can AI interview software integrate with my ATS?', answer: 'Most platforms offer ATS integrations. Braintrust AIR integrates with 50+ ATS platforms. HireVue and Paradox also offer extensive integration ecosystems. Smaller or newer platforms may have more limited integration options.' },
];

export default function BestAIInterviewSoftware2025() {
    return (
        <>
            {/* Hero */}
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources' }, { label: 'Best AI Interview Software 2025' }]} />
                    <div className="hero__content">
                        <div className="badge">2025 Rankings</div>
                        <h1>Best AI interview software<br /><span className="text-gradient">compared for 2025.</span></h1>
                        <p>We evaluated 15 AI interview platforms across voice AI, conversational depth, enterprise readiness, assessment sophistication, and scalability. Here are the results.</p>
                    </div>
                </div>
            </section>

            {/* Evaluation Criteria */}
            <section className="section" style={{ paddingBottom: 'var(--space-4)' }}>
                <div className="container container--narrow">
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>Evaluation Criteria</h2>
                    <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        We assessed each platform across six dimensions that matter most for modern AI-powered hiring:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '32px' }}>
                        {[
                            { label: 'Voice AI', desc: 'Real-time voice interview capability vs. text/video only' },
                            { label: 'Conversational Depth', desc: 'Adaptive follow-ups vs. scripted question sequences' },
                            { label: 'Assessment Quality', desc: 'Multi-dimensional scoring vs. basic pass/fail' },
                            { label: 'Enterprise Readiness', desc: 'SOC 2, SSO, ATS integrations, dedicated support' },
                            { label: 'Scalability', desc: 'Thousands of interviews per day capacity' },
                            { label: 'Language Support', desc: 'Number of production-quality languages supported' },
                        ].map((c) => (
                            <div key={c.label} style={{
                                padding: '16px', borderRadius: '10px',
                                background: 'rgba(245,87,51,0.03)', border: '1px solid rgba(245,87,51,0.08)',
                            }}>
                                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '4px' }}>{c.label}</div>
                                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>{c.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Matrix */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px' }}>Feature Comparison Matrix</h2>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', lineHeight: 1.5, minWidth: '900px' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--color-gray-100)' }}>
                                    {['#', 'Platform', 'Type', 'Voice AI', 'Conversational', 'Assessments', 'Enterprise', 'Scale', 'Languages'].map((h) => (
                                        <th key={h} style={{ textAlign: 'left', padding: '10px 8px', fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {platforms.map((p, i) => (
                                    <tr key={p.slug} style={{
                                        borderBottom: '1px solid var(--color-gray-100)',
                                        background: i === 0 ? 'rgba(245,87,51,0.03)' : i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.01)',
                                    }}>
                                        <td style={{ padding: '10px 8px', fontWeight: 700, color: 'var(--text-tertiary)', width: '30px' }}>{i + 1}</td>
                                        <td style={{ padding: '10px 8px', fontWeight: 700, color: i === 0 ? 'var(--color-primary)' : 'var(--text-primary)', whiteSpace: 'nowrap' }}>{p.name}</td>
                                        <td style={{ padding: '10px 8px', color: 'var(--text-secondary)' }}>{p.type}</td>
                                        <td style={{ padding: '10px 8px', color: 'var(--text-secondary)' }}>{p.voice}</td>
                                        <td style={{ padding: '10px 8px', color: 'var(--text-secondary)' }}>{p.conversational}</td>
                                        <td style={{ padding: '10px 8px', color: 'var(--text-secondary)' }}>{p.assessments}</td>
                                        <td style={{ padding: '10px 8px', color: 'var(--text-secondary)' }}>{p.enterprise}</td>
                                        <td style={{ padding: '10px 8px', color: 'var(--text-secondary)' }}>{p.scale}</td>
                                        <td style={{ padding: '10px 8px', color: 'var(--text-secondary)' }}>{p.languages}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Individual Platform Analysis */}
            <section className="section section--gray">
                <div className="container container--narrow">
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px' }}>Platform-by-Platform Analysis</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {platforms.map((p, i) => (
                            <div key={p.slug} style={{
                                background: i === 0 ? 'linear-gradient(135deg, rgba(245,87,51,0.04), rgba(255,147,124,0.03))' : 'var(--color-white)',
                                border: i === 0 ? '1px solid rgba(245,87,51,0.15)' : '1px solid var(--color-gray-100)',
                                borderRadius: '14px',
                                padding: '24px',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                    <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-tertiary)', minWidth: '28px' }}>{i + 1}.</span>
                                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: i === 0 ? 'var(--color-primary)' : 'var(--text-primary)', margin: 0 }}>{p.name}</h3>
                                    <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>— {p.tagline}</span>
                                </div>
                                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: '0 0 12px', paddingLeft: '40px' }}>{p.desc}</p>
                                <div style={{ display: 'flex', gap: '8px', paddingLeft: '40px', flexWrap: 'wrap' }}>
                                    <span style={{
                                        fontSize: '11px', fontWeight: 600, padding: '4px 10px',
                                        borderRadius: '100px', background: 'var(--color-primary-50)',
                                        color: 'var(--color-primary)',
                                    }}>Best for: {p.bestFor}</span>
                                    {p.url && (
                                        <Link href={p.url} style={{
                                            fontSize: '11px', fontWeight: 600, padding: '4px 10px',
                                            borderRadius: '100px', background: 'rgba(0,0,0,0.04)',
                                            color: 'var(--text-secondary)', textDecoration: 'none',
                                        }}>{i === 0 ? 'Learn more →' : 'Compare with AIR →'}</Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Best By Use Case */}
            <section className="section">
                <div className="container container--narrow">
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px' }}>Best AI Interview Software by Use Case</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { useCase: 'Best Overall AI Interview Platform', winner: 'Braintrust AIR', reason: 'Most advanced conversational AI with voice interviews, enterprise security, and proven ROI.' },
                            { useCase: 'Best for Enterprise Video Interviewing', winner: 'HireVue', reason: 'Established enterprise brand with video assessment and game-based testing capabilities.' },
                            { useCase: 'Best for High-Volume Scheduling', winner: 'Paradox (Olivia)', reason: 'Excellent at candidate engagement and scheduling automation at massive scale.' },
                            { useCase: 'Best for Skills Testing', winner: 'TestGorilla', reason: 'Largest library of pre-built skills assessments with broad coverage.' },
                            { useCase: 'Best for Voice-First Interviewing', winner: 'Braintrust AIR', reason: 'Real-time adaptive voice interviews with enterprise-grade infrastructure.' },
                            { useCase: 'Best for Technical Hiring', winner: 'Braintrust AIR / Micro1', reason: 'AIR for full-stack technical + behavioral; Micro1 for developer-only focus.' },
                            { useCase: 'Best for Interview Intelligence', winner: 'BrightHire', reason: 'Specializes in recording and analyzing human interviews to improve quality.' },
                            { useCase: 'Best for Budget-Conscious Teams', winner: 'SparkHire / MyInterview', reason: 'Simple, affordable video interview tools for smaller organizations.' },
                        ].map((item) => (
                            <div key={item.useCase} style={{
                                display: 'grid', gridTemplateColumns: '1fr 150px 1fr', gap: '16px',
                                padding: '16px 20px', borderRadius: '10px',
                                background: 'var(--color-white)', border: '1px solid var(--color-gray-100)',
                                alignItems: 'center',
                            }}>
                                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>{item.useCase}</span>
                                <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--color-primary)' }}>{item.winner}</span>
                                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>{item.reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Link Mesh */}
            <section className="section section--gray" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
                <div className="container container--narrow">
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>Related Guides & Comparisons</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {[
                            { label: 'AI Interview Software Guide', href: '/ai-interview-software' },
                            { label: 'AI Voice Interview Software', href: '/ai-voice-interview-software' },
                            { label: 'Conversational AI Interviews', href: '/conversational-ai-interview-platform' },
                            { label: 'AI Assessment Software', href: '/ai-assessment-software' },
                            { label: 'AI Recruiting Software', href: '/ai-recruiting-software' },
                            { label: 'Automated Hiring Software', href: '/automated-hiring-software' },
                            { label: 'AIR vs HireVue', href: '/compare/air-vs-hirevue' },
                            { label: 'AIR vs Paradox', href: '/compare/air-vs-paradox' },
                            { label: 'AIR vs TestGorilla', href: '/compare/air-vs-testgorilla' },
                            { label: 'AIR vs SparkHire', href: '/compare/air-vs-sparkhire' },
                            { label: 'AIR vs HeyMilo', href: '/compare/air-vs-heymilo' },
                            { label: 'Try AIR Free', href: '/products/air/try' },
                            { label: 'ROI Calculator', href: '/products/air' },
                        ].map((l) => (
                            <Link key={l.href} href={l.href} style={{
                                fontSize: '12px', fontWeight: 600, padding: '6px 14px',
                                borderRadius: '8px', background: 'var(--color-white)',
                                border: '1px solid var(--color-gray-100)',
                                color: 'var(--text-secondary)', textDecoration: 'none',
                            }}>{l.label}</Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container container--narrow">
                    <div className="section-header"><h2>FAQ</h2></div>
                    <FAQ items={faqItems} schemaId="best-ai-interview-software-2025" />
                </div>
            </section>

            {/* CTA */}
            <section className="section section--dark" style={{ textAlign: 'center' }}>
                <div className="container container--narrow">
                    <h2 style={{ color: 'white', marginBottom: '12px' }}>Try the #1 AI interview platform</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '500px', margin: '0 auto 24px' }}>
                        Experience Braintrust AIR — the most advanced conversational AI interviewing platform — free, or book a demo with our team.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <Link href="/book-demo" className="btn btn--primary btn--lg">Book a Demo</Link>
                        <Link href="/products/air/try" className="btn btn--secondary btn--lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>Try AIR Free →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
