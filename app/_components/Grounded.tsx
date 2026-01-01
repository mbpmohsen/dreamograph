export default function Grounded() {
    return (
        <section className="bg-[#f5f1ed] py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 px-4 xs:px-6 sm:px-8 md:px-12">
            <div className="max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 leading-tight md:leading-tighter">
                    Grounded in psychology
                </h2>

                <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl leading-relaxed md:leading-loose">
                    Inspired by Freud and Jung's frameworks, Dreamograph combines AI models and
                    research-based interpretation to give your dreams meaning, without superstition.
                </p>

                <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12">
                    <div className="flex items-start sm:items-center gap-2 xs:gap-3 sm:gap-4">
                        <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-orange-600 rounded-full flex-shrink-0 mt-1.5 xs:mt-1.5 sm:mt-0"></div>
                        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 font-semibold leading-relaxed sm:leading-normal">
                            Semantic clustering and pattern recognition
                        </p>
                    </div>

                    <div className="flex items-start sm:items-center gap-2 xs:gap-3 sm:gap-4">
                        <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-orange-600 rounded-full flex-shrink-0 mt-1.5 xs:mt-1.5 sm:mt-0"></div>
                        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 font-semibold leading-relaxed sm:leading-normal">
                            Emotional NLP and sentiment analysis
                        </p>
                    </div>

                    <div className="flex items-start sm:items-center gap-2 xs:gap-3 sm:gap-4">
                        <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-orange-600 rounded-full flex-shrink-0 mt-1.5 xs:mt-1.5 sm:mt-0"></div>
                        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 font-semibold leading-relaxed sm:leading-normal">
                            Symbolic mapping based on psychological research
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className="bg-[#2a3142] text-white text-sm xs:text-base sm:text-lg md:text-xl font-semibold px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 py-2 xs:py-3 sm:py-4 md:py-5 rounded-lg xs:rounded-xl sm:rounded-2xl hover:bg-[#363d52] transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto text-center inline-flex items-center justify-center min-h-[44px] xs:min-h-[48px] sm:min-h-[52px] md:min-h-[56px]"
                >
                    Learn more about the science
                </button>
            </div>
        </section>
    );
}
