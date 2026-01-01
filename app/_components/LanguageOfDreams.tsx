import Image from 'next/image';
import imageFeelings from '@/public/feelings.png';
import imageLocations from '@/public/locations.png';
import imageMobile from '@/public/mobile.png';
import imagePeople from '@/public/people.png';
import imageSymbols from '@/public/symbols.png';

export default function LanguageOfDreams() {
    return (
        <section className="bg-gradient-to-b from-[#0a1935] to-[#1a2950] py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                        The language of your dreams
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed md:leading-loose px-4 sm:px-0">
                        Dreamograph detects the recurring elements within your dreams, from places
                        and people to feelings and symbols, revealing the deeper emotional and
                        psychological patterns behind them.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[340px]">
                            <Image
                                src={imageMobile.src}
                                alt="mobile"
                                width={imageMobile.width}
                                height={imageMobile.height}
                            />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                <Image
                                    src={imageFeelings.src}
                                    alt="feelings"
                                    width={imageFeelings.width}
                                    height={imageFeelings.height}
                                />
                            </div>
                            <div>
                                <h3 className="text-white text-2xl font-bold mb-2">Feelings</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Understand how your feelings shift and repeat across your dream
                                    history.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                <Image
                                    src={imageLocations.src}
                                    alt="locations"
                                    width={imageLocations.width}
                                    height={imageLocations.height}
                                />
                            </div>
                            <div>
                                <h3 className="text-white text-2xl font-bold mb-2">Locations</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Maps recurring places and how they relate to your memories or
                                    emotions.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                <Image
                                    src={imageSymbols.src}
                                    alt="symbols"
                                    width={imageSymbols.width}
                                    height={imageSymbols.height}
                                />
                            </div>
                            <div>
                                <h3 className="text-white text-2xl font-bold mb-2">Symbols</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Recognizes recurring dream symbols and their psychological
                                    meaning.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                <Image
                                    src={imagePeople.src}
                                    alt="people"
                                    width={imagePeople.width}
                                    height={imagePeople.height}
                                />
                            </div>
                            <div>
                                <h3 className="text-white text-2xl font-bold mb-2">People</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Tracks who appears in your dreams and your emotional link to
                                    them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
