import Image from 'next/image';
import howToBegan from '@/public/how-to-began.png';

const HowBeganSection = () => {
    return (
        <section className="bg-[#f5f3f0] py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-0">
                    {/* Left side - Images */}
                    <div className="relative min-h-[400px] lg:min-h-[600px] p-6 sm:p-8 lg:p-10">
                        <Image
                            src={howToBegan.src}
                            alt="howToBegan"
                            width={howToBegan.width}
                            height={howToBegan.height}
                            className="w-full h-auto"
                            sizes="(max-width: 375px) 160px, (max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                            priority
                        />
                    </div>

                    <div className="relative p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                        <div className="hidden lg:block absolute left-0 top-12 bottom-12 w-px"></div>

                        <div className="space-y-6 sm:space-y-8">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                How Dreamograph Began
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-base sm:text-lg">
                                    Dreamograph was founded in 2024 by a team of neuroscientists,
                                    psychologists, and AI researchers who shared a deep fascination
                                    with the hidden architecture of dreams.
                                </p>

                                <p className="text-base sm:text-lg">
                                    We realized that while dream interpretation has existed for
                                    thousands of years, it has remained either inaccessible or
                                    oversimplified. Traditional analysis often required clinical
                                    settings, while most online tools reduced dreams to generic,
                                    one-size-fits-all meanings.
                                </p>

                                <p className="text-base sm:text-lg font-medium">
                                    We set out to change that.
                                </p>

                                <p className="text-base sm:text-lg">
                                    By combining advanced generative AI with established
                                    psychological frameworks, we built a system that delivers
                                    personalized, emotionally intelligent dream insights —
                                    accessible to anyone with a smartphone. Our goal is to make
                                    dream exploration modern, credible, and beautifully intuitive.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowBeganSection;
