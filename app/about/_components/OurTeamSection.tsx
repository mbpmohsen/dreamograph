'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import TeamMemberCard from '@/components/TeamMemberCard';

const teamMembers = [
    {
        name: 'Ava Keller',
        title: 'Lead Psychologist',
        imageUrl: 'https://picsum.photos/seed/ava/300/400',
    },
    {
        name: 'Marcus Hale',
        title: 'AI Specialist',
        imageUrl: 'https://picsum.photos/seed/marcus/300/300',
    },
    {
        name: 'Elena Ruiz',
        title: 'UX Designer',
        imageUrl: 'https://picsum.photos/seed/elena/300/300',
    },
];

const OurTeamSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = teamMembers.length;

    const next = () => setCurrentIndex((prev) => (prev + 1) % length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + length) % length);

    return (
        <section className="bg-[#0a1628] py-12 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
                        <p className="text-gray-300 max-w-md leading-relaxed">
                            Dreamograph is built by a multidisciplinary team dedicated to
                            transforming dream exploration into a modern, intuitive, and credible
                            experience. We combine scientific depth with thoughtful design to help
                            users connect with their subconscious in meaningful ways.
                        </p>
                    </div>
                    <div className="md:w-2/3 flex items-center justify-center w-full">
                        <button
                            type="button"
                            onClick={prev}
                            className="text-gray-400 hover:text-white mr-4 text-2xl"
                        >
                            &lt;
                        </button>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{
                                    opacity: 0,
                                    x: 100,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -100,
                                }}
                                transition={{
                                    duration: 0.5,
                                }}
                                className="flex items-start gap-4"
                            >
                                <TeamMemberCard {...teamMembers[currentIndex]} />
                                {currentIndex + 1 < length && (
                                    <img
                                        src={teamMembers[currentIndex + 1].imageUrl}
                                        alt={teamMembers[currentIndex + 1].name}
                                        className="w-32 h-32 object-cover rounded-2xl self-center"
                                    />
                                )}
                                {currentIndex + 2 < length && (
                                    <img
                                        src={teamMembers[currentIndex + 2].imageUrl}
                                        alt={teamMembers[currentIndex + 2].name}
                                        className="w-32 h-32 object-cover rounded-2xl self-center"
                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>
                        <button
                            type="button"
                            onClick={next}
                            className="text-gray-400 hover:text-white ml-4 text-2xl"
                        >
                            &gt;
                        </button>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    {teamMembers.map((_, index) => (
                        <button
                            type="button"
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full mx-2 ${
                                index === currentIndex ? 'bg-orange-500' : 'bg-gray-500'
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeamSection;
