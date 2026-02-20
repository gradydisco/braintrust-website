import type { Metadata } from 'next';
import ComparisonLayout from '@/components/ComparisonLayout';
import competitors from '@/data/competitors';
const d = competitors.paradox;
export const metadata: Metadata = {
    title: `Braintrust AIR vs Paradox (Olivia) — AI Interviewer vs Recruiting Assistant 2025`,
    description: `Compare Braintrust AIR vs Paradox: conversational AI interviewing vs recruiting workflow automation. Feature comparison, capabilities, and where each excels.`,
    keywords: `AIR vs Paradox, Braintrust vs Paradox, Paradox alternative, AI interview vs scheduling, Olivia AI comparison`,
};
export default function Page() { return <ComparisonLayout competitor={d.name} competitorSlug={d.slug} introHtml={d.intro} featureRows={d.featureRows} voiceComparison={d.voice} conversationalDepth={d.conversational} scoringSophistication={d.scoring} enterpriseReadiness={d.enterprise} scalability={d.scalability} summary={d.summary} faq={d.faq} />; }
