'use client';

import { useState } from 'react';

export default function DescribeSection() {
    const [dreamText, setDreamText] = useState('');

    const handleAnalyze = () => {
        console.log('Analyzing dream:', dreamText);
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#001a33] via-[#001f3d] to-[#0a1628] overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            ></div>

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <nav className="flex justify-center mb-8 sm:mb-12">
                    <ol className="flex items-center space-x-2 text-sm text-gray-400">
                        <li className="hover:text-white transition-colors cursor-pointer">Home</li>
                        <li>/</li>
                        <li className="text-gray-500">Analyze dream</li>
                    </ol>
                </nav>

                <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Analyze your <span className="text-[#C65F43]">dream</span>
                    </h1>

                    <div className="space-y-2 max-w-2xl mx-auto">
                        <p className="text-lg sm:text-xl text-gray-300">
                            Unlock the meaning beneath your subconscious.
                        </p>
                        <p className="text-lg sm:text-xl text-gray-300">
                            Receive insights grounded in psychology and enhanced by AI.
                        </p>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-gradient-to-br from-gray-100 to-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-2xl">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                                    Describe your dream
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    Share every detail you remember, emotions, people, places,
                                    colors, and sensations. The richer your description, the deeper
                                    the insights.
                                </p>
                            </div>

                            <div>
                                <textarea
                                    value={dreamText}
                                    onChange={(e) => setDreamText(e.target.value)}
                                    placeholder="Last night, I dreamed that I was standing at the edge of a vast ocean. The water was crystal clear, and I could see..."
                                    rows={8}
                                    className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#d67b60] focus:ring-2 focus:ring-[#d67b60]/20 transition-all resize-none text-sm sm:text-base"
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={handleAnalyze}
                                className="w-full bg-gradient-to-r from-[#d67b60] to-[#c86850] hover:from-[#c86850] hover:to-[#b85840] text-white font-semibold py-4 sm:py-5 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group text-base sm:text-lg"
                            >
                                Analyze my dream
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
