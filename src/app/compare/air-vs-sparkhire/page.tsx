import type { Metadata } from 'next';
import ComparisonLayout from '@/components/ComparisonLayout';
import competitors from '@/data/competitors';
const d = competitors.sparkhire;
export const metadata: Metadata = {
    title: `Braintrust AIR vs SparkHire — Conversational AI vs Video Interviews 2025`,
    description: `Compare Braintrust AIR vs SparkHire: adaptive AI voice interviews vs one-way video. Features, assessment depth, and enterprise capabilities compared.`,
    keywords: `AIR vs SparkHire, Braintrust vs SparkHire, SparkHire alternative, AI interview platform comparison`,
};
export default function Page() { return <ComparisonLayout competitor={d.name} competitorSlug={d.slug} introHtml={d.intro} featureRows={d.featureRows} voiceComparison={d.voice} conversationalDepth={d.conversational} scoringSophistication={d.scoring} enterpriseReadiness={d.enterprise} scalability={d.scalability} summary={d.summary} faq={d.faq} />; }
