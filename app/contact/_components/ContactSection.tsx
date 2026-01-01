const ContactSection = () => {
    return (
        <section className="bg-[#0a1628] py-12 text-white relative overflow-hidden pt-50">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2 z-10">
                    <p className="text-sm text-gray-400 mb-4">[Home / Contact]</p>
                    <h2 className="text-5xl font-bold text-orange-500 mb-4">Get in touch</h2>
                    <p className="text-gray-300 mb-8 max-w-md">
                        Have questions, feedback, or partnership ideas? We're here to support your
                        journey into dream exploration.
                    </p>
                    <div className="space-y-4">
                        <p>
                            <strong>Email:</strong>
                            <br />
                            hello@dreamograph.com
                        </p>
                        <p>
                            <strong>Phone:</strong>
                            <br />
                            +1234 567 8910
                        </p>
                        <p>Available Monday to Friday, 9 AM - 6 PM GMT</p>
                    </div>
                </div>
                <div className="md:w-1/2 max-w-lg bg-[#FAF7F2] text-gray-800 p-8 rounded-2xl shadow-lg z-10">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 bg-[#F2EEEA]"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="john@gmail.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 bg-[#F2EEEA]"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder=""
                                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 bg-[#F2EEEA]"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Tell us how we can help you..."
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-orange-500 bg-[#F2EEEA]"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#C65F43] text-white font-semibold rounded-[16px] hover:bg-orange-700 transition-colors"
                        >
                            Send message →
                        </button>
                    </form>
                </div>
            </div>
            {/* Optional grid background */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #1e3a5f 1px, transparent 1px),
            linear-gradient(to bottom, #1e3a5f 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                }}
            ></div>
        </section>
    );
};

export default ContactSection;
