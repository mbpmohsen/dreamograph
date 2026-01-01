import Image from 'next/image';
import imageDream from '@/public/dream.png';
import imageLamp from '@/public/lamp.png';
import imageRobot from '@/public/robot.png';

export default function ReasonSection() {
    return (
        <section className="bg-gradient-to-b from-[#0a1628] to-[#051129] py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                        Tired of waking up confused?
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed md:leading-loose px-4 sm:px-0">
                        Dreams can be confusing and difficult to interpret. Many people struggle to
                        understand the messages their subconscious is trying to convey, leading to
                        missed opportunities for personal growth and self discovery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#0d1b2e] rounded-2xl p-8 text-center hover:bg-[#112339] transition-colors">
                        <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                            <Image
                                alt="lamp"
                                src={imageLamp.src}
                                width={imageLamp.width}
                                height={imageLamp.height}
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Record your dream</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Effortlessly capture your dream details through voice or text input.
                        </p>
                    </div>

                    <div className="bg-[#0d1b2e] rounded-2xl p-8 text-center hover:bg-[#112339] transition-colors">
                        <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                            <Image
                                alt="robot"
                                src={imageRobot.src}
                                width={imageRobot.width}
                                height={imageRobot.height}
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">AI-powered analysis</h3>
                        <p className="text-gray-400 leading-relaxed">
                            our advanced AI deciphers themes, symbols, and emotions in your dreams.
                        </p>
                    </div>

                    <div className="bg-[#0d1b2e] rounded-2xl p-8 text-center hover:bg-[#112339] transition-colors">
                        <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                            <Image
                                alt="dream"
                                src={imageDream.src}
                                width={imageDream.width}
                                height={imageDream.height}
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Personal insights</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Receive clear, detailed interpretations to unlock self-understanding.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
