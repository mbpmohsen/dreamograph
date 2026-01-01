export default function HeroSection() {
    const stats = [
        {
            value: '+20k',
            label: 'Dreams Analyzed',
        },
        {
            value: '5',
            label: 'Scientific Frameworks Integrated',
        },
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#152a47] overflow-hidden">
            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            ></div>

            {/* Gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                {/* Breadcrumb */}
                <nav className="mb-8 sm:mb-12">
                    <ol className="flex items-center space-x-2 text-sm text-gray-400">
                        <li className="hover:text-white transition-colors cursor-pointer">Home</li>
                        <li>/</li>
                        <li className="text-gray-500">About</li>
                    </ol>
                </nav>

                {/* Main content grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
                    {/* Left content */}
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Redefining how the world
                            </h1>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#d67b60] leading-tight">
                                understands dreams
                            </h2>
                        </div>

                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                            Dreamograph transforms dreams into meaningful insights using a blend of
                            psychology, neuroscience, and generative AI. We give users a way to
                            explore their subconscious with clarity, curiosity, and emotional depth,
                            through interpretations, patterns, and dream-inspired visuals.
                        </p>
                    </div>

                    {/* Right content - Image grid */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        {/* Puzzle image */}
                        <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                            <div className="text-slate-400 text-sm">Puzzle Image</div>
                        </div>

                        {/* Perspective image */}
                        <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                            <div className="text-slate-400 text-sm">Perspective Image</div>
                        </div>

                        {/* Brain image - spans full width on second row */}
                        <div className="col-span-2 aspect-[2/1] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                            <div className="text-slate-400 text-sm">Brain Image</div>
                        </div>
                    </div>
                </div>

                {/* Stats section */}
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 mb-12 sm:mb-16">
                    <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center space-y-2">
                                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#d67b60]">
                                    {stat.value}
                                </div>
                                <div className="text-base sm:text-lg text-gray-300">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Purpose statement */}
                <div className="text-center max-w-5xl mx-auto">
                    <p className="text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-relaxed">
                        Our purpose is to make dream analysis modern, credible, and beautifully
                        accessible, turning every dream into a pathway to self-understanding.
                    </p>
                </div>
            </div>
        </section>
    );
}
