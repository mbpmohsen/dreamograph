export default function JoinSection() {
    return (
        <section className="bg-[#f5f1ed] py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="relative bg-gradient-to-br from-[#0f1d3d] via-[#1a2b4f] to-[#0f1d3d] rounded-[3rem] overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern
                                    id="network"
                                    x="0"
                                    y="0"
                                    width="100"
                                    height="100"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <circle cx="50" cy="50" r="2" fill="#4a9eff" opacity="0.5" />
                                    <circle cx="10" cy="10" r="1.5" fill="#4a9eff" opacity="0.4" />
                                    <circle cx="90" cy="20" r="1.5" fill="#4a9eff" opacity="0.4" />
                                    <circle cx="20" cy="80" r="1.5" fill="#4a9eff" opacity="0.4" />
                                    <circle cx="80" cy="90" r="1.5" fill="#4a9eff" opacity="0.4" />
                                    <line
                                        x1="50"
                                        y1="50"
                                        x2="10"
                                        y2="10"
                                        stroke="#4a9eff"
                                        strokeWidth="0.5"
                                        opacity="0.3"
                                    />
                                    <line
                                        x1="50"
                                        y1="50"
                                        x2="90"
                                        y2="20"
                                        stroke="#4a9eff"
                                        strokeWidth="0.5"
                                        opacity="0.3"
                                    />
                                    <line
                                        x1="50"
                                        y1="50"
                                        x2="20"
                                        y2="80"
                                        stroke="#4a9eff"
                                        strokeWidth="0.5"
                                        opacity="0.3"
                                    />
                                    <line
                                        x1="50"
                                        y1="50"
                                        x2="80"
                                        y2="90"
                                        stroke="#4a9eff"
                                        strokeWidth="0.5"
                                        opacity="0.3"
                                    />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#network)" />
                        </svg>
                    </div>

                    <div className="relative z-10 text-center py-20 px-8">
                        <h2 className="text-4xl md:text-5xl  font-bold text-white mb-6">
                            Ready to decode your dreams?
                        </h2>

                        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                            Join thousands of users exploring their subconscious mind with
                            Dreamograph
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                type="button"
                                className="bg-[#b85c4a] text-white font-semibold px-10 py-4 rounded-[16px] hover:bg-[#a04d3d] transition-colors shadow-lg text-lg"
                            >
                                Start analyzing
                            </button>

                            <button
                                type="button"
                                className="bg-white text-gray-900 font-semibold px-10 py-4 rounded-[16px] hover:bg-gray-100 transition-colors shadow-lg text-lg"
                            >
                                Download App
                            </button>
                        </div>
                    </div>

                    <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-400 rounded-full opacity-10 blur-2xl"></div>
                </div>
            </div>
        </section>
    );
}
