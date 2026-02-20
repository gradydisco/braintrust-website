import type { Metadata } from 'next';
import SEOArticleLayout from '@/components/SEOArticleLayout';

export const metadata: Metadata = {
    title: 'AI Interview Software for Enterprise — SOC 2, SSO, ATS Integrations & Global Scale',
    description: 'How Fortune 1000 organizations deploy AI interview software: enterprise security, compliance, ATS integrations, multi-language support, and scalable AI interviewing with Braintrust AIR.',
    keywords: 'AI interview software enterprise, enterprise AI hiring, enterprise interview automation, SOC 2 AI interview, enterprise recruiting AI, Fortune 500 AI hiring',
};

export default function Page() {
    return (
        <SEOArticleLayout
            badge="Industry Solution"
            h1={'AI interview software<br /><span class="text-gradient">for enterprise.</span>'}
            subtitle="How Fortune 1000 companies deploy conversational AI interviews at scale — with the security, integrations, and compliance enterprise requires."
            breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'AI Interview Software', href: '/ai-interview-software' }, { label: 'Enterprise' }]}
            definitionBlock={{
                term: 'Enterprise AI interview software',
                definition: 'is AI-powered interviewing technology that meets the security, compliance, integration, and scale requirements of large organizations. Enterprise platforms provide SOC 2 certification, SSO, deep ATS integrations, customizable scoring frameworks, dedicated support, and the ability to process thousands of interviews daily across multiple languages and geographies.',
            }}
            sections={[
                {
                    id: 'enterprise-requirements',
                    title: 'What Makes AI Interview Software "Enterprise-Ready"?',
                    content: `<p>Enterprise organizations have fundamentally different requirements than SMBs when evaluating AI interview software. The technology must integrate into complex, regulated environments with strict security, compliance, and governance needs:</p>`,
                    bullets: [
                        '<strong>SOC 2 Type II Certification:</strong> Third-party audited security controls are non-negotiable. <a href="/products/air">Braintrust AIR</a> is SOC 2 Type II certified — meeting the gold standard for SaaS security.',
                        '<strong>Enterprise SSO (SAML):</strong> Integration with corporate identity providers (Okta, Azure AD, OneLogin) for seamless authentication and user management.',
                        '<strong>ATS Integration Depth:</strong> Native, bi-directional integrations with enterprise ATS platforms — Greenhouse, Lever, Workday, iCIMS, SuccessFactors. Not just API connections, but workflow-level integration.',
                        '<strong>Data Governance:</strong> Configurable data retention policies, GDPR compliance, data residency options, and the ability to control where data is stored and how long it\'s retained.',
                        '<strong>Audit Logging:</strong> Complete, tamper-proof audit logs for all system actions — essential for compliance reporting and governance.',
                        '<strong>Custom SLAs:</strong> Guaranteed uptime, response times, and escalation procedures backed by enterprise-grade service level agreements.',
                    ],
                },
                {
                    id: 'enterprise-challenges',
                    title: 'Enterprise Hiring Challenges AI Solves',
                    content: `<p>Large organizations face hiring challenges that are categorically different from small companies:</p>
<p><strong>Scale:</strong> When you\'re hiring 1,000+ people per year across dozens of roles and locations, manual interviewing fails. AI interview software scales linearly — 10 interviews or 10,000, the same consistency and quality.</p>
<p><strong>Consistency:</strong> Across 50 hiring managers, 10 business units, and 15 countries, interview quality and evaluation standards drift dramatically. AI enforces consistent evaluation criteria everywhere.</p>
<p><strong>Speed:</strong> Enterprise hiring cycles average 42 days. Every week of delay costs productivity, morale, and competitive positioning. AI compresses screening-to-shortlist from weeks to days.</p>
<p><strong>Cost:</strong> Enterprise recruiting operations consume significant budget — recruiter salaries, agency fees, scheduling overhead, travel. AI recovers substantial costs. <a href="/products/air">See the ROI calculator →</a></p>
<p><strong>Global Hiring:</strong> Fortune 1000 companies hire across languages and geographies. AI interview platforms supporting 16+ languages enable consistent evaluation worldwide.</p>`,
                },
                {
                    id: 'deployment-model',
                    title: 'Enterprise Deployment Model',
                    content: `<p>Enterprise deployment of <a href="/products/air">Braintrust AIR</a> follows a structured implementation process designed for minimal disruption and maximum adoption:</p>`,
                    bullets: [
                        '<strong>Week 1 — Discovery & Architecture:</strong> Solution architecture review, security questionnaire completion, SSO configuration, and ATS integration planning.',
                        '<strong>Week 2 — Integration & Configuration:</strong> ATS integration deployment, scoring framework design per role family, and interview flow configuration.',
                        '<strong>Week 3 — Pilot & Calibration:</strong> Limited deployment with selected roles and teams. Interview output calibration against hiring manager expectations.',
                        '<strong>Week 4 — Full Launch:</strong> Enterprise-wide rollout with team training, hiring manager onboarding, and dedicated CSM support.',
                    ],
                },
                {
                    id: 'roi-enterprise',
                    title: 'Enterprise ROI of AI Interviewing',
                    content: `<p>Enterprise ROI from AI interview software compounds across multiple cost centers:</p>
<p><strong>Recruiter Capacity:</strong> Each recruiter gains 15-25 hours per role by eliminating manual screening and phone screen coordination. Across an enterprise hiring 1,000+ annually, this represents millions in recovered capacity.</p>
<p><strong>Agency Fee Reduction:</strong> Faster direct hiring pipelines reduce dependency on external agencies. Organizations typically eliminate 30-50% of agency spend within the first year.</p>
<p><strong>Vacancy Cost Reduction:</strong> Reducing time-to-fill by 50-80% directly reduces the productivity cost of open positions — particularly impactful for revenue-generating roles.</p>
<p><strong>Quality of Hire:</strong> Structured AI evaluation improves candidate-role matching, reducing first-year attrition by up to 35%. In enterprise organizations, each avoided bad hire saves $50-100K+.</p>
<p>Braintrust AIR enterprise customers typically see <strong>10-20× ROI</strong> within the first year.</p>`,
                },
                {
                    id: 'integration-ecosystem',
                    title: 'Enterprise Integration Ecosystem',
                    content: `<p>Braintrust AIR integrates with the enterprise technology stack that Fortune 1000 organizations rely on:</p>`,
                    bullets: [
                        '<strong>ATS:</strong> Greenhouse, Lever, Workday Recruiting, iCIMS, SuccessFactors, BambooHR, SmartRecruiters, and 40+ more.',
                        '<strong>Identity:</strong> Okta, Azure AD, OneLogin, Ping Identity — SAML SSO with role-based access controls.',
                        '<strong>Communication:</strong> Automated candidate notifications through email, SMS, and ATS-native messaging.',
                        '<strong>Analytics:</strong> Data export to BI tools (Tableau, Looker, Power BI) for custom reporting and analytics.',
                        '<strong>HRIS:</strong> Bi-directional data flow with Workday, Oracle HCM, and SAP SuccessFactors for unified talent management.',
                    ],
                },
            ]}
            faq={[
                { question: 'Is Braintrust AIR enterprise-ready?', answer: 'Yes. Braintrust AIR is SOC 2 Type II certified, supports enterprise SSO (SAML), integrates with 50+ ATS platforms, offers configurable data retention, full audit logging, and provides dedicated CSMs with custom SLAs for enterprise customers.' },
                { question: 'How long does enterprise deployment take?', answer: 'Most enterprise deployments complete in 30 days — including security review, SSO configuration, ATS integration, scoring framework design, pilot testing, and full launch with team training.' },
                { question: 'Can AIR handle global hiring in multiple languages?', answer: 'Yes. AIR conducts interviews in 16+ languages with production-quality speech recognition and synthesis. This enables consistent candidate evaluation across geographies while allowing candidates to interview in their preferred language.' },
                { question: 'How does pricing work for enterprise?', answer: 'Enterprise pricing is based on annual interview volume and configured capabilities. Contact our enterprise team for a custom quote. Most enterprise customers see 10-20× ROI within the first year, making the investment highly favorable.' },
                { question: 'What ATS platforms does AIR integrate with?', answer: 'AIR integrates natively with 50+ ATS platforms including Greenhouse, Lever, Workday, iCIMS, SuccessFactors, BambooHR, SmartRecruiters, and more. Integrations are bi-directional — scored candidates, transcripts, and assessments sync automatically.' },
            ]}
            faqSchemaId="ai-interview-software-enterprise"
            ctaTitle="Deploy AI interviewing at enterprise scale"
            ctaDesc="Talk to our enterprise team about deploying Braintrust AIR across your organization — SOC 2, SSO, and 50+ ATS integrations included."
        />
    );
}
