import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import AutomationAnalysisForm from '@/components/AutomationAnalysisForm';
import NexusBottomCapture from '@/components/NexusBottomCapture';

export const metadata: Metadata = {
    title: 'Nexus — Workflow Automation Platform for Modern Enterprise',
    description: 'Nexus automates mundane, repetitive tasks across your entire business — from HR and finance to operations and recruiting. Connects to every enterprise system via API with pre-built connectors for leading platforms.',
};

const capabilities = [
    {
        title: 'Intelligent Workflow Automation',
        desc: 'Design end-to-end workflows with a visual builder. Automate repetitive tasks across every department — from approvals and data entry to notifications and reporting.',
    },
    {
        title: 'Universal System Integration',
        desc: 'Connects to every enterprise application with an API. Pre-built connectors for leading platforms, with broad compatibility for virtually any system. Nexus moves data seamlessly, eliminating manual transfers.',
    },
    {
        title: 'Custom Rules Engine',
        desc: 'Create event-driven automation rules: trigger actions based on events, route approvals, escalate exceptions, and enforce business logic — no code required.',
    },
    {
        title: 'Real-Time Analytics & Insights',
        desc: 'Track workflow performance, identify bottlenecks, and measure time savings. Live dashboards give you visibility into every automated process.',
    },
    {
        title: 'Cross-Functional Orchestration',
        desc: 'Nexus works across departments — front office, back office, admin, HR, finance, recruiting, and operations. One platform for your entire business.',
    },
    {
        title: 'Enterprise Security & Access Control',
        desc: 'Role-based access, audit trails, and compliance automation built in. Your data stays secure at every step with enterprise-grade security controls.',
    },
];

const departments = [
    { name: 'Recruiting & HR', examples: 'Automate interview scheduling, onboarding workflows, offer approvals, and candidate pipeline management.' },
    { name: 'Finance & Accounting', examples: 'Streamline invoice processing, expense approvals, vendor management, and financial reporting.' },
    { name: 'Operations', examples: 'Orchestrate supply chain workflows, inventory management, quality assurance, and logistics coordination.' },
    { name: 'Sales & Marketing', examples: 'Automate lead routing, campaign triggers, pipeline updates, and CRM synchronization.' },
    { name: 'Admin & IT', examples: 'Manage access provisioning, ticket routing, asset tracking, and compliance documentation.' },
    { name: 'Legal & Compliance', examples: 'Automate contract workflows, regulatory filings, audit trails, and policy management.' },
];

const integrations = [
    { name: 'Salesforce', category: 'CRM' },
    { name: 'Slack', category: 'Communication' },
    { name: 'Workday', category: 'HCM' },
    { name: 'Greenhouse', category: 'ATS' },
    { name: 'NetSuite', category: 'ERP' },
    { name: 'HubSpot', category: 'Marketing' },
    { name: 'Jira', category: 'Project Mgmt' },
    { name: 'Microsoft Teams', category: 'Communication' },
    { name: 'Google Workspace', category: 'Productivity' },
    { name: 'BambooHR', category: 'HR' },
    { name: 'Lever', category: 'ATS' },
    { name: 'ServiceNow', category: 'ITSM' },
    { name: 'Zendesk', category: 'Support' },
    { name: 'Stripe', category: 'Payments' },
    { name: 'QuickBooks', category: 'Accounting' },
    { name: 'Any API', category: 'Custom' },
];

const faqItems = [
    { question: 'What is Nexus?', answer: 'Nexus is Braintrust\'s workflow automation platform. It connects your existing tools, automates repetitive tasks across every department, and provides real-time analytics on your business processes — saving thousands of hours per year.' },
    { question: 'What systems does Nexus integrate with?', answer: 'Nexus connects to every enterprise application with an API. Pre-built connectors are available for Salesforce, Slack, Workday, Greenhouse, NetSuite, HubSpot, Lever, Jira, Microsoft Teams, Google Workspace, and many more. Custom API integrations are supported for virtually any system.' },
    { question: 'Can Nexus work beyond recruiting?', answer: 'Absolutely. While Nexus is powerful for recruiting automation, it\'s designed for any department — finance, operations, sales, marketing, admin, legal, and more. Any repetitive, multi-step process can be automated with Nexus.' },
    { question: 'Do I need technical skills to use Nexus?', answer: 'No. Nexus features a visual workflow builder and pre-built templates that let anyone create automations. For more advanced needs, our team provides implementation support and custom integrations.' },
    { question: 'How quickly can I see ROI?', answer: 'Most customers see measurable time savings within the first 30 days. On average, Nexus eliminates 20+ hours per week of manual work per team, translating to significant cost savings.' },
];

export default function Nexus() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Nexus' }]} />
                    <div className="hero__content">
                        <div className="badge badge--token">Nexus</div>
                        <h1>Automate anything.<br /><span className="text-gradient">across everything.</span></h1>
                        <p>Nexus is a workflow automation platform that eliminates mundane, repetitive tasks — moving data between systems, powering complex workflows, and saving thousands of hours across every part of your business.</p>
                        <div className="hero__actions">
                            <Link href="/book-demo" className="btn btn--primary btn--lg">Book a Demo</Link>
                            <Link href="/products" className="btn btn--secondary btn--lg">All Products →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Platform</div>
                        <h2>Enterprise workflow automation</h2>
                        <p>One platform to automate tasks, connect systems, and orchestrate workflows across your entire organization.</p>
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

            {/* Department Use Cases */}
            <section className="section section--gray">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Use Cases</div>
                        <h2>Works across every department</h2>
                        <p>Nexus automates workflows wherever your business needs it — not just recruiting.</p>
                    </div>
                    <div className="grid grid--2">
                        {departments.map((dept) => (
                            <div key={dept.name} className="card card--feature">
                                <h4 style={{ marginBottom: 'var(--space-2)', color: 'var(--color-primary)' }}>{dept.name}</h4>
                                <p style={{ fontSize: 'var(--text-sm)' }}>{dept.examples}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">Integrations</div>
                        <h2>Connects to every enterprise system via API</h2>
                        <p>Pre-built connectors available for leading enterprise platforms. Custom integrations for any system with an API.</p>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '12px',
                        maxWidth: '900px',
                        margin: '0 auto',
                    }}>
                        {integrations.map((item) => (
                            <div key={item.name} className="card--enterprise" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px 16px',
                                background: 'var(--color-white)',
                                border: '1px solid rgba(50, 50, 93, 0.08)',
                                borderRadius: 'var(--radius-lg)',
                                textAlign: 'center',
                                gap: '4px',
                            }}>
                                <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-primary)' }}>{item.name}</span>
                                <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-tertiary)', letterSpacing: '0.03em', textTransform: 'uppercase' }}>{item.category}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section section--dark">
                <div className="container">
                    <div className="stats-grid">
                        <div><div className="stat__value text-gradient">Any API</div><div className="stat__label">Universal Connectivity</div></div>
                        <div><div className="stat__value text-gradient">20hrs+</div><div className="stat__label">Saved Per Week, Per Person</div></div>
                        <div><div className="stat__value text-gradient">99.9%</div><div className="stat__label">Uptime SLA</div></div>
                        <div><div className="stat__value text-gradient">30 days</div><div className="stat__label">Avg. Time to ROI</div></div>
                    </div>
                </div>
            </section>

            {/* ====== FREE AUTOMATION ANALYSIS — EXIT-INTENT MODAL ====== */}
            <AutomationAnalysisForm />

            <section className="section section--gray">
                <div className="container container--narrow">
                    <div className="section-header"><h2>FAQ</h2></div>
                    <FAQ items={faqItems} schemaId="nexus" />
                </div>
            </section>

            {/* ====== BOTTOM-OF-PAGE AUTOMATION ANALYSIS CAPTURE ====== */}
            <NexusBottomCapture />

            <CTASection
                title="Automate your business workflows"
                description="See how Nexus can eliminate repetitive tasks, connect your systems, and save your team thousands of hours."
                primaryLabel="Book a Demo"
                primaryHref="/book-demo"
            />
        </>
    );
}
