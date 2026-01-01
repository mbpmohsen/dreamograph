import Image from 'next/image';
import ai from '@/public/ai-chat.png';
import album from '@/public/album.png';
import dream from '@/public/dream-analysis.png';
import mood from '@/public/mood.png';
import privacy from '@/public/privacy.png';
import trend from '@/public/trend-tracking.png';

export default function CoreFeatures() {
    return (
        <section className="bg-[#f5f1ed] py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Core features
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl">
                        Our app offers a range of features designed to help you understand your
                        dreams and unlock your subconscious.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-[#F2EEEA] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-[40px] h-[40px] bg-[#C65F43] rounded-full flex items-center justify-center mb-6">
                            <div className="w-full h-full flex items-center justify-center">
                                <Image
                                    src={dream.src}
                                    alt="dream"
                                    width={dream.width}
                                    height={dream.height}
                                />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Dream Analysis</h3>
                        <p className="text-gray-600 leading-relaxed">
                            AI-powered insights into your subconscious mind using psychological
                            frameworks
                        </p>
                    </div>

                    <div className="bg-[#F2EEEA] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-[40px] h-[40px] bg-[#C65F43] rounded-full flex items-center justify-center mb-6">
                            <div className="w-full h-full flex items-center justify-center">
                                <Image
                                    src={trend.src}
                                    alt="trend"
                                    width={trend.width}
                                    height={trend.height}
                                />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Trend tracking</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Track recurring themes and patterns in your dreams over time
                        </p>
                    </div>

                    <div className="bg-[#F2EEEA] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-[40px] h-[40px] bg-[#C65F43] rounded-full flex items-center justify-center mb-6">
                            <div className="w-full h-full flex items-center justify-center">
                                <Image src={ai.src} alt="ai" width={ai.width} height={ai.height} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Chat</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ask questions about your dreams and get personalized interpretations
                        </p>
                    </div>

                    <div className="bg-[#F2EEEA] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-[40px] h-[40px] bg-[#C65F43] rounded-full flex items-center justify-center mb-6">
                            <div className="w-full h-full flex items-center justify-center">
                                <Image
                                    src={mood.src}
                                    alt="ai"
                                    width={mood.width}
                                    height={mood.height}
                                />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Mood Check-ins</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Connect your daily emotions with your nighttime dreams
                        </p>
                    </div>

                    <div className="bg-[#F2EEEA] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-[40px] h-[40px] bg-[#C65F43] rounded-full flex items-center justify-center mb-6">
                            <div className="w-full h-full flex items-center justify-center">
                                <Image
                                    src={album.src}
                                    alt="album"
                                    width={album.width}
                                    height={album.height}
                                />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Album & Prints</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Create beautiful visualizations of your dreams for reflection and
                            sharing
                        </p>
                    </div>

                    <div className="bg-[#F2EEEA] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-[40px] h-[40px] bg-[#C65F43] rounded-full flex items-center justify-center mb-6">
                            <div className="w-full h-full flex items-center justify-center">
                                <Image
                                    src={privacy.src}
                                    alt="privacy"
                                    width={privacy.width}
                                    height={privacy.height}
                                />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Privacy focused</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Your dream data is encrypted and kept confidential.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
