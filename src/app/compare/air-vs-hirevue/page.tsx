import type { Metadata } from 'next';
import ComparisonLayout from '@/components/ComparisonLayout';
import competitors from '@/data/competitors';
const d = competitors.hirevue;
export const metadata: Metadata = {
    title: `Braintrust AIR vs HireVue — AI Interview Platform Comparison 2025`,
    description: `Compare Braintrust AIR vs HireVue: conversational voice AI vs video interviewing, feature comparison, enterprise readiness, and which platform is right for your organization.`,
    keywords: `AIR vs HireVue, Braintrust vs HireVue, AI interview comparison, HireVue alternative, AI video interview comparison`,
};
export default function Page() { return <ComparisonLayout competitor={d.name} competitorSlug={d.slug} introHtml={d.intro} featureRows={d.featureRows} voiceComparison={d.voice} conversationalDepth={d.conversational} scoringSophistication={d.scoring} enterpriseReadiness={d.enterprise} scalability={d.scalability} summary={d.summary} faq={d.faq} />; }
