import Image from 'next/image';
import dreamograpth1 from '@/public/dreamograpth-1.png';
import dreamograpth2 from '@/public/dreamograpth-2.png';

export default function DreamographSection() {
    return (
        <section className="relative min-h-[90vh] sm:min-h-screen bg-gradient-to-br from-[#001a33] via-[#002147] to-[#001529] overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-4 sm:left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
                <div className="absolute bottom-1/4 right-4 sm:right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
            </div>

            <div className="relative container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 lg:gap-16 items-center">
                    <div className="text-white space-y-6 xs:space-y-7 sm:space-y-8 max-w-xl mx-auto lg:mx-0 order-2 lg:order-1">
                        <div className="space-y-3 xs:space-y-4 sm:space-y-5">
                            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tighter">
                                Get the Dreamograph App
                            </h1>
                            <p className="text-base xs:text-lg sm:text-xl text-gray-300 leading-relaxed">
                                Available now for iOS and Android. Start recording your dreams
                                tonight.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-5">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 xs:gap-3 bg-white text-black px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-colors group w-full xs:w-auto"
                            >
                                <svg
                                    className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-xs opacity-80">Download the app on</div>
                                    <div className="text-sm xs:text-base sm:text-lg font-semibold">
                                        App Store
                                    </div>
                                </div>
                            </button>

                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 xs:gap-3 bg-white text-black px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-colors group w-full xs:w-auto"
                            >
                                <svg
                                    className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-xs opacity-80">Download the app on</div>
                                    <div className="text-sm xs:text-base sm:text-lg font-semibold">
                                        Google Play
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2">
                        <div className="relative w-full max-w-2xl">
                            <div className="flex justify-center gap-3 xs:gap-4 sm:gap-5 lg:gap-6 -mb-4 sm:-mb-0">
                                <div className="relative w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 transform hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={dreamograpth2.src}
                                        alt="dream"
                                        width={dreamograpth2.width}
                                        height={dreamograpth2.height}
                                        className="w-full h-auto"
                                        sizes="(max-width: 375px) 160px, (max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                                        priority
                                    />
                                </div>
                                <div className="relative w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 transform hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={dreamograpth1.src}
                                        alt="dream"
                                        width={dreamograpth1.width}
                                        height={dreamograpth1.height}
                                        className="w-full h-auto"
                                        sizes="(max-width: 375px) 160px, (max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
