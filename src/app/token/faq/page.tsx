import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
    title: 'BTRST Token FAQ — Common Questions Answered',
    description: 'Answers to frequently asked questions about BTRST token, governance, wallets, earning mechanisms, and participating in the Braintrust network.',
};

const faqItems = [
    { question: 'What is BTRST?', answer: 'BTRST is an ERC-20 utility token on the Ethereum blockchain. It powers governance of the Braintrust network and incentivizes contributions to the ecosystem.' },
    { question: 'How do I earn BTRST?', answer: 'You can earn BTRST by referring talent or clients, vetting new network members, contributing to governance proposals, and participating in network growth activities.' },
    { question: 'Where can I hold BTRST?', answer: 'BTRST is an ERC-20 token compatible with any Ethereum wallet including MetaMask, Coinbase Wallet, Ledger, and Trezor hardware wallets.' },
    { question: 'Is BTRST an investment?', answer: 'No. BTRST is a utility token designed for governance and network participation. It is not marketed or sold as an investment, security, or financial instrument.' },
    { question: 'How does governance voting work?', answer: 'BTRST holders can create and vote on proposals through the governance portal. Each token represents one vote. Proposals cover fee structures, product priorities, and treasury allocation.' },
    { question: 'What is the total supply of BTRST?', answer: 'There is a fixed total supply of 250,000,000 BTRST tokens. No additional tokens can be minted — the supply is permanently capped.' },
    { question: 'Is BTRST available on exchanges?', answer: 'BTRST is available on several decentralized and centralized exchanges. Please check CoinGecko or CoinMarketCap for current listings.' },
    { question: 'How are network fees distributed?', answer: 'When companies pay fees on Braintrust, those fees are converted to BTRST and distributed to network contributors — talent referrers, vetters, and node operators.' },
];

export default function TokenFAQ() {
    return (
        <>
            <section className="hero hero--centered">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'BTRST Token', href: '/token' }, { label: 'FAQ' }]} />
                    <div className="hero__content">
                        <div className="badge badge--token">Token FAQ</div>
                        <h1>Frequently asked<br />questions.</h1>
                        <p>Everything you need to know about BTRST, governance, and participating in the network.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    <FAQ items={faqItems} schemaId="token" />
                </div>
            </section>
        </>
    );
}
