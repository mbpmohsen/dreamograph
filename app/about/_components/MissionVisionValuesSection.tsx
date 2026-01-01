import MissionVisionValuesCard from '@/components/MissionVisionValuesCard';

const MissionVisionValuesSection = () => {
    return (
        <section className="py-12 bg-[#f5f1ed]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <MissionVisionValuesCard
                        icon="🎯"
                        title="Our Mission"
                        description="We aim to make dream analysis accessible, meaningful, and scientifically grounded for everyone."
                        bullets={[
                            'Combine psychology with advanced AI',
                            'Help users recognize emotional patterns',
                            'Support deeper understanding of the subconscious',
                        ]}
                    />
                    <MissionVisionValuesCard
                        icon="📣"
                        title="Our Vision"
                        description="We envision a world where everyone can explore their dreams with clarity and confidence."
                        bullets={[
                            'Turn dream insights into everyday self-growth',
                            'Foster emotional awareness',
                            'Create tools that reveal the inner world',
                        ]}
                    />
                    <MissionVisionValuesCard
                        icon="⚙️"
                        title="Our Values"
                        description="We are guided by integrity, empathy, and respect for the complexity of the human mind."
                        bullets={[
                            'Scientific accuracy and transparency',
                            'Strong commitment to user privacy',
                            'Thoughtful, human-centered design',
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default MissionVisionValuesSection;
