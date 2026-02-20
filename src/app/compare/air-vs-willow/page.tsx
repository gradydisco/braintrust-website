import type { Metadata } from 'next';
import ComparisonLayout from '@/components/ComparisonLayout';
import competitors from '@/data/competitors';
const d = competitors.willow;
export const metadata: Metadata = {
    title: `Braintrust AIR vs Willow — Enterprise AI Interviewer vs Recruiting Automation 2025`,
    description: `Compare Braintrust AIR vs Willow: full-stack conversational AI interviewing vs AI recruiting automation. Features, maturity, and enterprise capabilities.`,
    keywords: `AIR vs Willow, Braintrust vs Willow, Willow alternative, AI recruiting comparison`,
};
export default function Page() { return <ComparisonLayout competitor={d.name} competitorSlug={d.slug} introHtml={d.intro} featureRows={d.featureRows} voiceComparison={d.voice} conversationalDepth={d.conversational} scoringSophistication={d.scoring} enterpriseReadiness={d.enterprise} scalability={d.scalability} summary={d.summary} faq={d.faq} />; }
