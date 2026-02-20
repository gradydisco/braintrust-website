import type { Metadata } from 'next';
import ComparisonLayout from '@/components/ComparisonLayout';
import competitors from '@/data/competitors';
const d = competitors.heymilo;
export const metadata: Metadata = {
    title: `Braintrust AIR vs HeyMilo — Enterprise vs Emerging Voice AI Interviews 2025`,
    description: `Compare Braintrust AIR vs HeyMilo: two voice AI interview platforms compared on conversational depth, enterprise readiness, scalability, and scoring.`,
    keywords: `AIR vs HeyMilo, Braintrust vs HeyMilo, HeyMilo alternative, voice AI interview comparison`,
};
export default function Page() { return <ComparisonLayout competitor={d.name} competitorSlug={d.slug} introHtml={d.intro} featureRows={d.featureRows} voiceComparison={d.voice} conversationalDepth={d.conversational} scoringSophistication={d.scoring} enterpriseReadiness={d.enterprise} scalability={d.scalability} summary={d.summary} faq={d.faq} />; }
