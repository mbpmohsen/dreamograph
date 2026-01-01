'use client';

import { motion } from 'framer-motion';
import ArticleCard from '@/components/ArticleCard';

const articles = [
    {
        id: '1',
        title: 'The Science Behind Dream Symbols',
        description:
            'Discover how recurring images in your dreams like water, falling, or flying, connect to emotions stored in the subconscious.',
        imageUrl: 'https://picsum.photos/seed/dream2/800/600',
        author: {
            name: 'Dr. Elise Hartmann',
            imageUrl: 'https://picsum.photos/seed/author2/200/200',
        },
        date: 'Oct 28, 2025',
        readTime: '16 min',
        category: 'Psychology',
        tags: [
            'Dream Analysis',
            'Symbolism',
            'Subconscious',
        ],
    },
    {
        id: '2',
        title: 'Unlocking Lucid Dreaming Techniques',
        description:
            'Learn practical methods to gain control over your dreams and explore your subconscious mind with awareness.',
        imageUrl: 'https://picsum.photos/seed/dream2/800/600',
        author: {
            name: 'Prof. Marcus Hale',
            imageUrl: 'https://picsum.photos/seed/author2/200/200',
        },
        date: 'Nov 15, 2025',
        readTime: '12 min',
        category: 'Neuroscience',
        tags: [
            'Lucid Dreams',
            'Techniques',
            'Mind Control',
        ],
    },
];

export default function JournalSection() {
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section className="bg-[#f5f1ed] py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Dreamograph Journal
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        Explore reflections from psychology, neuroscience, and art.
                    </p>
                </div>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {articles.map((article, index) => (
                        <ArticleCard key={article.id} article={article} index={index} />
                    ))}
                </motion.div>

                <div className="text-center">
                    <button
                        type="button"
                        className="bg-[#F2EEEA] text-gray-900 font-semibold px-10 py-4 rounded-[16px] hover:bg-gray-50 transition-colors shadow-sm"
                    >
                        See all articles
                    </button>
                </div>
            </div>
        </section>
    );
}
