'use client';

import Accordion from '@/components/Accordion';

const faqs = [
    {
        title: 'How do I get started with Dreamograph?',
        content:
            'Simply download the app from the App Store or Google Play, create a free account, and start recording your dreams. Our AI will analyze your dreams and provide insights based on established psychological frameworks.',
        defaultOpen: true,
    },
    {
        title: 'Is my dream data private and secure?',
        content:
            'Yes, your privacy is our top priority. All data is encrypted and stored securely, and we never share your personal information without consent.',
    },
    {
        title: 'What makes Dreamograph different from other dream apps?',
        content:
            'Dreamograph combines AI with psychological expertise to offer scientifically grounded insights, rather than mystical interpretations.',
    },
    {
        title: 'Can I cancel my subscription anytime?',
        content:
            'Absolutely, you can cancel your subscription at any time through your account settings.',
    },
    {
        title: 'Do you offer a free trial?',
        content: 'Yes, we offer a 7-day free trial for new users to explore all premium features.',
    },
];

const FAQSection = () => {
    return (
        <section className="py-12 bg-[#FAF7F2]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Find answers to common questions about Dreamograph
                </p>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <Accordion key={index} title={faq.title} defaultOpen={faq.defaultOpen}>
                            {faq.content}
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
