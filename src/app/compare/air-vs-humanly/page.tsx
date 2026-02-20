import type { Metadata } from 'next';
import ComparisonLayout from '@/components/ComparisonLayout';
import competitors from '@/data/competitors';
const d = competitors.humanly;
export const metadata: Metadata = {
    title: `Braintrust AIR vs Humanly — AI Voice Interviews vs Chat Screening 2025`,
    description: `Compare Braintrust AIR vs Humanly: adaptive voice AI interviewing vs chat-based high-volume screening. Features, assessment depth, and scalability.`,
    keywords: `AIR vs Humanly, Braintrust vs Humanly, Humanly alternative, AI interview vs chatbot`,
};
export default function Page() { return <ComparisonLayout competitor={d.name} competitorSlug={d.slug} introHtml={d.intro} featureRows={d.featureRows} voiceComparison={d.voice} conversationalDepth={d.conversational} scoringSophistication={d.scoring} enterpriseReadiness={d.enterprise} scalability={d.scalability} summary={d.summary} faq={d.faq} />; }
