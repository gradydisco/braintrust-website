import type { Metadata } from 'next';
import ComparisonLayout from '@/components/ComparisonLayout';
import competitors from '@/data/competitors';
const d = competitors.micro1;
export const metadata: Metadata = {
    title: `Braintrust AIR vs Micro1 — Full-Stack AI Interviewer vs Technical Assessment 2025`,
    description: `Compare Braintrust AIR vs Micro1: comprehensive conversational AI interviews vs specialized technical coding interviews. Features, scope, and capabilities.`,
    keywords: `AIR vs Micro1, Braintrust vs Micro1, Micro1 alternative, AI technical interview comparison`,
};
export default function Page() { return <ComparisonLayout competitor={d.name} competitorSlug={d.slug} introHtml={d.intro} featureRows={d.featureRows} voiceComparison={d.voice} conversationalDepth={d.conversational} scoringSophistication={d.scoring} enterpriseReadiness={d.enterprise} scalability={d.scalability} summary={d.summary} faq={d.faq} />; }
