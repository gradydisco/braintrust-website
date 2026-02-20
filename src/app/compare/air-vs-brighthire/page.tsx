import type { Metadata } from 'next';
import ComparisonLayout from '@/components/ComparisonLayout';
import competitors from '@/data/competitors';
const d = competitors.brighthire;
export const metadata: Metadata = {
    title: `Braintrust AIR vs BrightHire — AI Interviewer vs Interview Intelligence 2025`,
    description: `Compare Braintrust AIR vs BrightHire: autonomous AI interviewing vs interview recording and intelligence. Understand the difference and which you need.`,
    keywords: `AIR vs BrightHire, Braintrust vs BrightHire, BrightHire alternative, AI interview vs interview intelligence`,
};
export default function Page() { return <ComparisonLayout competitor={d.name} competitorSlug={d.slug} introHtml={d.intro} featureRows={d.featureRows} voiceComparison={d.voice} conversationalDepth={d.conversational} scoringSophistication={d.scoring} enterpriseReadiness={d.enterprise} scalability={d.scalability} summary={d.summary} faq={d.faq} />; }
