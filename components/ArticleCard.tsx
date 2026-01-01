import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import type { FC } from 'react';

interface ArticleCardProps {
    article: {
        id: string;
        title: string;
        description: string;
        imageUrl: string;
        author: {
            name: string;
            imageUrl: string;
        };
        date: string;
        readTime: string;
        category?: string;
        tags?: string[];
    };
    index?: number;
}

const ArticleCard: FC<ArticleCardProps> = ({ article, index = 0 }) => {
    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.1,
                duration: 0.6,
                ease: 'easeOut',
            },
        },
        hover: {
            y: -8,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
    };

    const imageVariants: Variants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.article
            className="group bg-[#F0E1DB1A] hover:bg-[#F0E1DB33] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 border border-transparent hover:border-[#b85c4a]/10 h-full flex flex-col"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            <motion.div
                className="relative w-full h-48 xs:h-52 sm:h-56 md:h-64 lg:h-72 overflow-hidden"
                variants={imageVariants}
            >
                <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 375px) 100vw, (max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    priority={index < 2}
                />
                {article.category && (
                    <motion.div
                        className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1 rounded-full"
                        whileHover={{
                            scale: 1.05,
                        }}
                    >
                        {article.category}
                    </motion.div>
                )}
            </motion.div>

            <div className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 flex-1 flex flex-col">
                <motion.div
                    className="flex items-center gap-3 mb-3 sm:mb-4"
                    whileHover={{
                        x: 5,
                    }}
                >
                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                            src={article.author.imageUrl}
                            alt={article.author.name}
                            fill
                            className="object-cover"
                            sizes="40px"
                        />
                    </div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">
                        {article.author.name}
                    </p>
                </motion.div>

                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                    {article.title}
                </h3>

                <p className="text-gray-600 text-sm xs:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6 flex-1 line-clamp-3">
                    {article.description}
                </p>

                {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                        {article.tags.slice(0, 3).map((tag, idx) => (
                            <motion.span
                                key={tag}
                                className="text-xs px-3 py-1 bg-[#b85c4a]/10 text-[#b85c4a] rounded-full"
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                )}

                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 sm:gap-4 pt-4 border-t border-gray-200/50">
                    <div className="flex items-center gap-3 sm:gap-4 text-gray-500 text-xs sm:text-sm">
                        <motion.div
                            className="flex items-center gap-1 sm:gap-2"
                            whileHover={{
                                scale: 1.05,
                            }}
                        >
                            <svg
                                className="w-3 h-3 sm:w-4 sm:h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    x="3"
                                    y="4"
                                    width="18"
                                    height="18"
                                    rx="2"
                                    ry="2"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <line
                                    x1="16"
                                    y1="2"
                                    x2="16"
                                    y2="6"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <line
                                    x1="8"
                                    y1="2"
                                    x2="8"
                                    y2="6"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <line
                                    x1="3"
                                    y1="10"
                                    x2="21"
                                    y2="10"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span>{article.date}</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-1 sm:gap-2"
                            whileHover={{
                                scale: 1.05,
                            }}
                        >
                            <svg
                                className="w-3 h-3 sm:w-4 sm:h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                <polyline
                                    points="12 6 12 12 16 14"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>{article.readTime}</span>
                        </motion.div>
                    </div>

                    <motion.button
                        type="button"
                        className="flex items-center gap-1 sm:gap-2 text-gray-900 font-semibold text-sm sm:text-base hover:text-[#b85c4a] transition-colors group self-start xs:self-center"
                        whileHover={{
                            x: 5,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                    >
                        Read more
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </motion.article>
    );
};

export default ArticleCard;
