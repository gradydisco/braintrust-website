import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Refer & Earn — AIR AI Recruiter | Braintrust',
    description: 'Earn rewards by referring clients to Braintrust AIR. Join the marketplace, leave a G2 review, share on LinkedIn, or refer a client and earn up to $1,000 USD.',
};

export default function ReferAIRLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
