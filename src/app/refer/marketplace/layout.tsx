import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Connector Program — Refer & Earn | Braintrust',
    description: 'Earn up to $100K in BTRST tokens by referring companies to the Braintrust Talent Marketplace. Join over 900 connectors making an impact.',
};

export default function ReferMarketplaceLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
