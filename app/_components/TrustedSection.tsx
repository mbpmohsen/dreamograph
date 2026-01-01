export default function TrustedSection() {
    return (
        <section className="bg-[#f5f1ed] py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                        Trusted by Dreamers Worldwide
                    </h2>
                    <div className="text-4xl md:text-6xl font-bold">
                        <span className="text-[#b85c4a]">+20,000</span>
                        <span className="text-gray-900"> dreams analyzed</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    <div className="bg-[#F2EEEA] rounded-3xl p-8 shadow-sm">
                        <div className="text-gray-300 text-6xl leading-none mb-4">"</div>

                        <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                            "I love how <span className="text-[#b85c4a] not-italic">private</span>{' '}
                            and secure it feels. The dream{' '}
                            <span className="text-[#b85c4a] not-italic">
                                calendar visualization
                            </span>{' '}
                            is beautiful and really helps me reflect on patterns."
                        </p>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                                {/* Profile image placeholder */}
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">Nick Williams</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#F2EEEA] rounded-3xl p-8 shadow-sm">
                        <div className="text-gray-300 text-6xl leading-none mb-4">"</div>

                        <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                            "The{' '}
                            <span className="text-[#b85c4a] not-italic">
                                psychology-based analysis
                            </span>{' '}
                            feels legitimate, not like generic dream dictionaries. AI's responses
                            are genuinely helpful."
                        </p>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden"></div>
                            <div>
                                <p className="font-bold text-gray-900">Nellie Smith</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#F2EEEA] rounded-3xl p-8 shadow-sm">
                        <div className="text-gray-300 text-6xl leading-none mb-4">"</div>

                        <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                            "Dreamograph helped me understand{' '}
                            <span className="text-[#b85c4a] not-italic">recurring themes</span> in
                            my dreams. The AI insights are surprisingly accurate and thoughtful."
                        </p>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden"></div>
                            <div>
                                <p className="font-bold text-gray-900">Claudie Johnson</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
