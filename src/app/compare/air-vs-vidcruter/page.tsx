import type { Metadata } from 'next';
import ComparisonLayout from '@/components/ComparisonLayout';
import competitors from '@/data/competitors';
const d = competitors.vidcruter;
export const metadata: Metadata = {
    title: `Braintrust AIR vs VidCruiter — AI Voice Interviews vs Video Recruiting 2025`,
    description: `Compare Braintrust AIR vs VidCruiter: real-time conversational AI interviews vs structured video interviewing. Features, enterprise readiness, and scalability.`,
    keywords: `AIR vs VidCruiter, Braintrust vs VidCruiter, VidCruiter alternative, AI interview comparison`,
};
export default function Page() { return <ComparisonLayout competitor={d.name} competitorSlug={d.slug} introHtml={d.intro} featureRows={d.featureRows} voiceComparison={d.voice} conversationalDepth={d.conversational} scoringSophistication={d.scoring} enterpriseReadiness={d.enterprise} scalability={d.scalability} summary={d.summary} faq={d.faq} />; }
