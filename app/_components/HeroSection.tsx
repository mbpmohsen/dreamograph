import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/public/hero.svg';

export default function HeroSection() {
    return (
        <section>
            <div className="relative min-h-screen bg-[#0a1628] overflow-hidden">
                <div className="absolute inset-0 z-0 top-20">
                    <Image
                        alt="Hero"
                        src={Hero.src}
                        fill
                        className="object-cover opacity-20"
                        sizes="100vw"
                        priority={true}
                        quality={75}
                    />
                </div>

                <div
                    className="relative z-10 flex items-center min-h-screen px-6 py-20 lg:px-16 xl:px-24"
                    id="description"
                >
                    <div className="max-w-2xl lg:max-w-3xl w-full">
                        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-8 leading-tight lg:leading-[1.2]">
                            Where science meets
                            <br />
                            <span className="bg-clip-text text-white">the</span>
                            <span className="bg-clip-text text-[#C65F43] text-5xl md:text-6xl lg:text-[72px]">
                                {' '}
                                subconscious
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
                            Dreamograph blends psychology, AI, and art to decode your dreams,
                            helping you understand your mind through clarity, not mysticism.
                        </p>

                        <Link
                            href="/analyze-dream"
                            className="flex group relative bg-[#C65F43] text-white font-semibold rounded-[16px] hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
                            style={{
                                width: '234px',
                                height: '56px',
                                fontSize: '16px',
                            }}
                        >
                            <span className="flex items-center justify-center gap-3 px-6">
                                Analyze my dream
                                <svg
                                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
