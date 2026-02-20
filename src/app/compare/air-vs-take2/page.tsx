import type { Metadata } from 'next';
import ComparisonLayout from '@/components/ComparisonLayout';
import competitors from '@/data/competitors';
const d = competitors.take2;
export const metadata: Metadata = {
    title: `Braintrust AIR vs Take2 — Conversational AI vs Job Simulations 2025`,
    description: `Compare Braintrust AIR vs Take2: adaptive conversational AI interviews vs job simulation assessments. Different approaches to candidate evaluation.`,
    keywords: `AIR vs Take2, Braintrust vs Take2, Take2 alternative, AI interview vs simulation`,
};
export default function Page() { return <ComparisonLayout competitor={d.name} competitorSlug={d.slug} introHtml={d.intro} featureRows={d.featureRows} voiceComparison={d.voice} conversationalDepth={d.conversational} scoringSophistication={d.scoring} enterpriseReadiness={d.enterprise} scalability={d.scalability} summary={d.summary} faq={d.faq} />; }
