'use client';

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    schemaId?: string;
}

export default function FAQ({ items, schemaId }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <div className="faq-container">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {items.map((item, index) => (
                <div key={index} className="faq-item">
                    <button
                        className="faq-question"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        aria-expanded={openIndex === index}
                        aria-controls={`faq-answer-${schemaId || ''}-${index}`}
                        id={`faq-question-${schemaId || ''}-${index}`}
                    >
                        {item.question}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </button>
                    {openIndex === index && (
                        <div
                            className="faq-answer"
                            id={`faq-answer-${schemaId || ''}-${index}`}
                            role="region"
                            aria-labelledby={`faq-question-${schemaId || ''}-${index}`}
                        >
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
