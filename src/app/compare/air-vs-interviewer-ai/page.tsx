import type { Metadata } from 'next';
import ComparisonLayout from '@/components/ComparisonLayout';
import competitors from '@/data/competitors';
const d = competitors['interviewer-ai'];
export const metadata: Metadata = {
    title: `Braintrust AIR vs Interviewer.ai — Conversational AI vs Video Screening 2025`,
    description: `Compare Braintrust AIR vs Interviewer.ai: real-time adaptive voice interviews vs automated video screening and ranking. Features and enterprise readiness.`,
    keywords: `AIR vs Interviewer.ai, Braintrust vs Interviewer.ai, Interviewer.ai alternative`,
};
export default function Page() { return <ComparisonLayout competitor={d.name} competitorSlug={d.slug} introHtml={d.intro} featureRows={d.featureRows} voiceComparison={d.voice} conversationalDepth={d.conversational} scoringSophistication={d.scoring} enterpriseReadiness={d.enterprise} scalability={d.scalability} summary={d.summary} faq={d.faq} />; }
