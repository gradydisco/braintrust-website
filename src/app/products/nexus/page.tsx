import type { Metadata } from 'next';
import Link from 'next/link';
import NexusWorkflow from '@/components/NexusWorkflow';
import AutomationAnalysisForm from '@/components/AutomationAnalysisForm';
import NexusPrivacy from '@/components/NexusPrivacy';
import NexusBottomCapture from '@/components/NexusBottomCapture';

export const metadata: Metadata = {
    title: 'Nexus — Workflow Automation Platform for Modern Enterprise',
    description: 'Nexus automates mundane, repetitive tasks across your entire business.',
};

const capabilities = [
    {
        title: 'Universal API Integration',
        desc: 'Nexus connects flawlessly to any enterprise application with an API—meaning it works gracefully with the systems you already use, silently moving data without manual exports or transfers.',
    },
    {
        title: 'Custom-Built for Your Exact Process',
        desc: 'Unlike rigid off-the-shelf software, Nexus bends to fit your reality. Every workflow is designed around your specific business logic, routing rules, and edge cases.',
    },
    {
        title: 'Runs End-to-End Automatically',
        desc: 'Unlike legacy tools like Zapier or n8n that leave the complex building to your developers, Nexus acts as your engineering team—designing, building, and deploying dozens of automated workflows simultaneously with zero human intervention.',
    },
];

const workflows = [
    { dept: 'Finance', name: 'Invoice Processing', outcome: 'Email receipt to ERP entry without keystrokes.' },
    { dept: 'Recruiting', name: 'Candidate Screening', outcome: 'Inbound application to scored and ranked instantly.' },
    { dept: 'Operations', name: 'Order Management', outcome: 'Purchase to fulfillment handoff fully automated.' },
    { dept: 'Sales', name: 'Lead Routing', outcome: 'Form fill to CRM record and rep assignment in seconds.' },
    { dept: 'HR & Admin', name: 'Employee Onboarding', outcome: 'Offer signed to IT provisioning triggered globally.' },
    { dept: 'Compliance', name: 'Audit Logging', outcome: 'Continuous tracking and reporting without manual checks.' },
];

export default function Nexus() {
    return (
        <>
            {/* 1. THE HOOK */}
            <section className="hero hero--centered">
                <div className="container">
                    <div className="hero__content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <p style={{
                            fontSize: '24px',
                            fontWeight: 400,
                            color: '#1a1a1a',
                            letterSpacing: '-0.01em',
                            marginBottom: '16px',
                            textAlign: 'center'
                        }}>
                            Nexus | Enterprise Workflow Automation
                        </p>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                            fontWeight: 600,
                            color: '#1a1a1a',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.02,
                            marginBottom: 'var(--space-6)',
                            textAlign: 'center'
                        }}>
                            Automate anything.<br /><span className="text-gradient">Across everything.</span>
                        </h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto var(--space-8)', textAlign: 'center', fontSize: '19px', color: '#4a4a4a', lineHeight: 1.5 }}>
                            Nexus eliminates the manual, repetitive work that's quietly killing your team's productivity — and shares the savings with you.
                        </p>
                        <div className="hero__actions">
                            <Link href="#lead-form" className="btn btn--primary btn--lg">Find Your First Workflow</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. THE PROBLEM */}
            <section className="section" style={{ paddingTop: 0, paddingBottom: 'var(--space-16)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '64px',
                        alignItems: 'center',
                    }}>
                        {/* Left: Problem copy */}
                        <div>
                            <p style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', marginBottom: '20px' }}>The Problem</p>
                            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                                You already know which workflows are broken.
                            </h2>
                            <p style={{ fontSize: '18px', fontWeight: 400, color: '#4a4a4a', lineHeight: 1.7, marginBottom: '24px' }}>
                                Every ops leader, every finance director, every recruiting team has a list — the repetitive, manual processes that eat hours every week. Everyone knows they should be automated.
                            </p>
                            <p style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', lineHeight: 1.6, marginBottom: '40px', paddingLeft: '16px', borderLeft: '3px solid var(--color-primary)' }}>
                                The problem is fixing them has always required developers, months of scoping, and budget you can't justify.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <p style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>Nexus fixes that. Here's how.</p>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'bounce 1.8s ease-in-out infinite', flexShrink: 0 }}>
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <polyline points="19 12 12 19 5 12" />
                                </svg>
                            </div>
                            <style>{`@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }`}</style>
                        </div>
                        {/* Right: Cost-of-doing-nothing stat panel */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                { label: 'Avg. hours lost per week to manual tasks', value: '20+ hrs', sub: 'per person, per team' },
                                { label: 'Typical cost to build a workflow with developers', value: '$50k–$200k', sub: 'per workflow, per year' },
                                { label: 'Time from idea to live automation', value: '3–6 months', sub: 'with traditional dev teams' },
                                { label: 'Nexus time to first live workflow', value: '< 30 days', sub: 'no developers needed', highlight: true },
                            ].map((stat) => (
                                <div key={stat.label} style={{
                                    padding: '24px',
                                    borderRadius: '12px',
                                    background: stat.highlight ? 'var(--color-primary-50)' : 'var(--color-gray-50, #f8f8f8)',
                                    border: stat.highlight ? '1px solid rgba(232,113,74,0.25)' : '1px solid rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '16px',
                                }}>
                                    <p style={{ fontSize: '14px', color: stat.highlight ? 'var(--color-primary)' : '#4a4a4a', margin: 0, lineHeight: 1.4, fontWeight: stat.highlight ? 600 : 400 }}>{stat.label}</p>
                                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                                        <div style={{ fontSize: '22px', fontWeight: 800, color: stat.highlight ? 'var(--color-primary)' : '#1a1a1a', letterSpacing: '-0.02em' }}>{stat.value}</div>
                                        <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>{stat.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{`@media (max-width: 768px) { .nexus-problem-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            {/* 3. THE VISUAL MOMENT */}
            <NexusWorkflow />

            {/* 4. WHAT NEXUS IS */}
            <section className="section section--gray">
                <div className="container">
                    <div className="section-header" style={{ maxWidth: '850px', margin: '0 auto var(--space-8)' }}>
                        <h2>Nexus builds the workflow. Then it runs it. Every time.</h2>
                        <p style={{ marginTop: '16px', fontSize: '19px', lineHeight: 1.6, color: '#4a4a4a' }}>
                            Other platforms like Zapier or n8n only give you the APIs — you still need expensive developers to actually build and maintain the connections.
                            <strong> Nexus uses specialized AI agents to do the building for you.</strong> No engineering team required. You can scope, design, and deploy dozens of complex workflows simultaneously in a fraction of the time.
                        </p>
                    </div>
                    <div className="grid grid--3" style={{ marginBottom: 'var(--space-12)' }}>
                        {capabilities.map((item) => (
                            <div key={item.title} className="card card--feature" style={{ background: 'var(--color-white)', border: '1px solid rgba(0,0,0,0.05)' }}>
                                <h4 style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h4>
                                <p style={{ fontSize: 'var(--text-md)', lineHeight: 1.5, color: '#4a4a4a' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Product Screenshots */}
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            {/* Main execution trace */}
                            <div style={{ gridColumn: '1 / -1', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
                                <div style={{ padding: '12px 16px', background: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginLeft: '8px' }}>Nexus — Execution Trace Flow</span>
                                </div>
                                <img src="/nexus/workflow-trace.png" alt="Nexus workflow execution trace" style={{ width: '100%', display: 'block', imageRendering: '-webkit-optimize-contrast' as any }} />
                            </div>
                            {/* Dashboard */}
                            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
                                <div style={{ padding: '12px 16px', background: '#f8fafc', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                                    <span style={{ fontSize: '12px', color: '#888', marginLeft: '8px' }}>Nexus — All Workflows</span>
                                </div>
                                <img src="/nexus/workflow-dashboard.png" alt="Nexus workflow dashboard" style={{ width: '100%', display: 'block', imageRendering: '-webkit-optimize-contrast' as any }} />
                            </div>
                            {/* Cost savings */}
                            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
                                <div style={{ padding: '12px 16px', background: '#f8fafc', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                                    <span style={{ fontSize: '12px', color: '#888', marginLeft: '8px' }}>Nexus — Impact Overview</span>
                                </div>
                                <img src="/nexus/cost-savings.png" alt="Nexus cost savings dashboard" style={{ width: '100%', display: 'block', imageRendering: '-webkit-optimize-contrast' as any }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. HOW IT WORKS */}
            <section className="section" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.04)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <h2 style={{ color: '#1a1a1a', marginBottom: '16px', fontSize: '40px', letterSpacing: '-0.02em', fontWeight: 600 }}>How it works</h2>
                        <p style={{ fontSize: '20px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>From manual bottleneck to fully autonomous process in under 30 days.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                        {[
                            { title: 'We map your workflow', desc: 'Tell us exactly what your team does manually today, step by painful step.' },
                            { title: 'We build it in Nexus', desc: 'Our team connects directly to your systems through our universal API framework.' },
                            { title: 'It runs. You save money', desc: 'Your manual process disappears, replaced entirely by an autonomous engine.' }
                        ].map((step, i) => (
                            <div key={i} style={{ 
                                padding: '40px 32px', 
                                background: '#f8fafc', 
                                border: '1px solid rgba(0,0,0,0.04)', 
                                borderRadius: '24px',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}>
                                <div style={{ 
                                    width: '56px', height: '56px', 
                                    borderRadius: '50%', 
                                    background: '#ffffff', 
                                    border: '1px solid rgba(232, 113, 74, 0.2)',
                                    color: 'var(--color-primary)', 
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '22px', fontWeight: 'bold',
                                    marginBottom: '24px',
                                    boxShadow: '0 8px 16px rgba(232, 113, 74, 0.08)'
                                }}>
                                    {i + 1}
                                </div>
                                <h3 style={{ fontSize: '22px', color: '#1a1a1a', marginBottom: '12px', fontWeight: 700 }}>{step.title}</h3>
                                <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.6, textWrap: 'balance', margin: 0 } as any}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. THE BUSINESS MODEL */}
            <section className="section" style={{ background: '#fafafa', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent)' }} />
                
                <div className="container container--narrow" style={{ position: 'relative', zIndex: 1, paddingBottom: '24px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <h2 style={{ color: '#1a1a1a', marginBottom: '16px', fontSize: '40px', letterSpacing: '-0.02em' }}>We only make money when you save money.</h2>
                        <p style={{ fontSize: '22px', color: '#666', fontWeight: 400 }}>Shared incentives keep us aligned. You only pay for results.</p>
                    </div>

                    <div style={{ 
                        background: '#ffffff', 
                        borderRadius: '24px', 
                        border: '1px solid rgba(0,0,0,0.06)', 
                        boxShadow: '0 20px 40px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02)',
                        overflow: 'hidden'
                    }}>
                        <div style={{ padding: '40px', textAlign: 'center', borderBottom: '1px solid rgba(0,0,0,0.06)', background: '#f8fafc' }}>
                            <p style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', marginBottom: '16px' }}>How it breaks down</p>
                            <h3 style={{ fontSize: '32px', color: '#1a1a1a', margin: 0, lineHeight: 1.3 }}>
                                You keep <span style={{ color: '#22c55e' }}>75%</span> of the savings.<br/>
                                We charge <span className="text-gradient">25%</span>.
                            </h3>
                        </div>
                        <div style={{ padding: '48px', background: '#ffffff' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
                                <span style={{ fontSize: '18px', color: '#666' }}>Example: Target Workflow Savings</span>
                                <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', letterSpacing: '-0.02em' }}>$100k / month</span>
                            </div>
                            
                            <div style={{ width: '100%', height: '56px', display: 'flex', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px', border: '1px solid rgba(0,0,0,0.08)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}>
                                <div style={{ width: '75%', background: '#1a1a1a', display: 'flex', alignItems: 'center', paddingLeft: '24px', fontSize: '16px', fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>You keep $75,000</div>
                                <div style={{ width: '25%', background: 'rgba(232, 113, 74, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '24px', fontSize: '15px', fontWeight: 600, color: 'var(--color-primary)' }}>We make $25,000</div>
                            </div>

                            <p style={{ fontSize: '16px', color: '#888', textAlign: 'center', margin: 0 }}>
                                If you don't save time and money, neither do we. It's that simple. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. GETTING STARTED (Pick Your First Workflow) */}
            <section className="section" style={{ background: '#f8fafc', borderTop: '1px solid rgba(0,0,0,0.04)' }}>
                <style dangerouslySetInnerHTML={{__html: `
                    .workflow-card-ux {
                        background: #ffffff;
                        padding: 36px 32px;
                        border-radius: 20px;
                        border: 1px solid rgba(0,0,0,0.05);
                        box-shadow: 0 4px 12px rgba(0,0,0,0.01);
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        cursor: pointer;
                        position: relative;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                    }
                    .workflow-card-ux:hover {
                        transform: translateY(-4px);
                        border-color: rgba(232, 113, 74, 0.3);
                        box-shadow: 0 20px 40px rgba(0,0,0,0.04), 0 8px 16px rgba(232, 113, 74, 0.08);
                    }
                    .workflow-card-ux::after {
                        content: '→';
                        position: absolute;
                        bottom: 34px;
                        right: 32px;
                        color: var(--color-primary);
                        font-family: system-ui, sans-serif;
                        font-size: 24px;
                        font-weight: 300;
                        opacity: 0;
                        transform: translateX(-10px);
                        transition: all 0.3s ease;
                    }
                    .workflow-card-ux:hover::after {
                        opacity: 1;
                        transform: translateX(0);
                    }
                `}} />
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <h2 style={{ color: '#1a1a1a', marginBottom: '16px', fontSize: '40px', letterSpacing: '-0.02em', fontWeight: 600 }}>Pick Your First Workflow</h2>
                        <p style={{ fontSize: '20px', color: '#666', maxWidth: '640px', margin: '0 auto' }}>
                            We don't do vague consulting analysis. We identify real, high-impact workflows to pilot in your environment in under 30 days.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '24px',
                        marginBottom: '64px'
                    }}>
                        {workflows.map((wf) => (
                            <div key={wf.name} className="workflow-card-ux">
                                <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(232,113,74,0.08)', padding: '6px 14px', borderRadius: '100px', marginBottom: '24px', alignSelf: 'flex-start' }}>
                                    <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)' }}>{wf.dept}</span>
                                </div>
                                <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '20px', fontWeight: 600, letterSpacing: '-0.01em' }}>{wf.name}</h3>
                                <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', width: '100%', marginBottom: '20px' }} />
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flexGrow: 1 }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.5, margin: 0, paddingRight: '24px' }}>{wf.outcome}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', padding: '48px', background: 'white', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '16px', boxShadow: '0 12px 30px rgba(0,0,0,0.03)' }}>
                        <h3 style={{ fontSize: '28px', marginBottom: '16px' }}>Start with one. See the savings. Add more.</h3>
                        <p style={{ fontSize: '16px', color: '#4a4a4a', marginBottom: '32px' }}>Book a session to identify your first major automation win.</p>
                        
                        <Link href="#lead-form" className="btn btn--primary btn--lg" style={{ width: '100%', padding: '16px' }}>Find My First Workflow</Link>
                    </div>
                </div>
            </section>
            
            <NexusPrivacy />
            
            <div id="lead-form" style={{ scrollMarginTop: '64px' }}>
                <NexusBottomCapture />
            </div>
            
            <AutomationAnalysisForm />
        </>
    );
}
