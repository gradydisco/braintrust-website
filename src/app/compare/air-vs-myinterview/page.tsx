import type { Metadata } from 'next';
import ComparisonLayout from '@/components/ComparisonLayout';
import competitors from '@/data/competitors';
const d = competitors.myinterview;
export const metadata: Metadata = {
    title: `Braintrust AIR vs MyInterview — AI Conversational Interviews vs Video Screening 2025`,
    description: `Compare Braintrust AIR vs MyInterview: real-time AI voice interviews vs AI-assisted video screening. Features, scoring, and enterprise readiness.`,
    keywords: `AIR vs MyInterview, Braintrust vs MyInterview, MyInterview alternative, AI interview comparison`,
};
export default function Page() { return <ComparisonLayout competitor={d.name} competitorSlug={d.slug} introHtml={d.intro} featureRows={d.featureRows} voiceComparison={d.voice} conversationalDepth={d.conversational} scoringSophistication={d.scoring} enterpriseReadiness={d.enterprise} scalability={d.scalability} summary={d.summary} faq={d.faq} />; }
