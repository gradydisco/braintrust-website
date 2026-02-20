import type { Metadata } from 'next';
import ComparisonLayout from '@/components/ComparisonLayout';
import competitors from '@/data/competitors';
const d = competitors.alexai;
export const metadata: Metadata = {
    title: `Braintrust AIR vs AlexAI — Enterprise AI Interviewer vs Recruiting Assistant 2025`,
    description: `Compare Braintrust AIR vs AlexAI: full-stack conversational AI interviewing vs chat-based recruiting automation. Features and enterprise readiness.`,
    keywords: `AIR vs AlexAI, Braintrust vs AlexAI, AlexAI alternative, AI interview comparison`,
};
export default function Page() { return <ComparisonLayout competitor={d.name} competitorSlug={d.slug} introHtml={d.intro} featureRows={d.featureRows} voiceComparison={d.voice} conversationalDepth={d.conversational} scoringSophistication={d.scoring} enterpriseReadiness={d.enterprise} scalability={d.scalability} summary={d.summary} faq={d.faq} />; }
