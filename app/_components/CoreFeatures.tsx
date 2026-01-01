// biome-ignore assist/source/organizeImports: <explanation>
import FeatureCard from '@/components/FeatureCard';
import Image from 'next/image';
import ai from '@/public/ai-chat.png';
import album from '@/public/album.png';
import dream from '@/public/dream-analysis.png';
import mood from '@/public/mood.png';
import privacy from '@/public/privacy.png';
import trend from '@/public/trend-tracking.png';

const IconWrapper = ({ src, alt, size = 24 }) => (
    <div className="flex items-center justify-center">
        <Image src={src} alt={alt} width={size} height={size} className="w-auto h-auto" />
    </div>
);

export default function CoreFeatures() {
    const features = [
        {
            icon: <IconWrapper src={dream.src} alt="Dream Analysis" />,
            title: 'Dream Analysis',
            description:
                'AI-powered insights into your subconscious mind using psychological frameworks',
        },
        {
            icon: <IconWrapper src={trend.src} alt="Trend Tracking" />,
            title: 'Trend Tracking',
            description: 'Track recurring themes and patterns in your dreams over time',
        },
        {
            icon: <IconWrapper src={ai.src} alt="AI Chat" />,
            title: 'AI Chat',
            description: 'Ask questions about your dreams and get personalized interpretations',
        },
        {
            icon: <IconWrapper src={mood.src} alt="Mood Check-ins" />,
            title: 'Mood Check-ins',
            description: 'Connect your daily emotions with your nighttime dreams',
        },
        {
            icon: <IconWrapper src={album.src} alt="Album & Prints" />,
            title: 'Album & Prints',
            description:
                'Create beautiful visualizations of your dreams for reflection and sharing',
        },
        {
            icon: <IconWrapper src={privacy.src} alt="Privacy Focused" />,
            title: 'Privacy Focused',
            description: 'Your dream data is encrypted and kept confidential',
        },
    ];

    return (
        <section className="bg-[#f5f1ed] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                        Core features
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl md:max-w-4xl leading-relaxed">
                        Our app offers a range of features designed to help you understand your
                        dreams and unlock your subconscious.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
