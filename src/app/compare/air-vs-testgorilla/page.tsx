import type { Metadata } from 'next';
import ComparisonLayout from '@/components/ComparisonLayout';
import competitors from '@/data/competitors';
const d = competitors.testgorilla;
export const metadata: Metadata = {
    title: `Braintrust AIR vs TestGorilla — Conversational AI vs Skills Testing 2025`,
    description: `Compare Braintrust AIR vs TestGorilla: conversational AI interviews vs pre-hire skills testing. Feature comparison, assessment depth, enterprise readiness.`,
    keywords: `AIR vs TestGorilla, Braintrust vs TestGorilla, AI interview vs skills test, TestGorilla alternative`,
};
export default function Page() { return <ComparisonLayout competitor={d.name} competitorSlug={d.slug} introHtml={d.intro} featureRows={d.featureRows} voiceComparison={d.voice} conversationalDepth={d.conversational} scoringSophistication={d.scoring} enterpriseReadiness={d.enterprise} scalability={d.scalability} summary={d.summary} faq={d.faq} />; }
