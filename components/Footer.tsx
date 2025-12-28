import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-navy-dark text-gray-400 py-8 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
                {/* Logo and Tagline */}
                <div className="flex flex-col space-y-2">
                    <Link href="/" className="flex items-center space-x-2 text-white">
                        {/* Placeholder for half-black half-white circle */}
                        <div className="w-6 h-6 bg-gradient-to-r from-black to-white rounded-full" />
                        <div>
                            <span className="text-lg font-bold">DREAMOGRAPH</span>
                            <p className="text-xs uppercase tracking-wider text-gray-400">
                                Who You Are
                            </p>
                        </div>
                    </Link>
                    <p className="text-sm italic">Where science meets the subconscious.</p>
                </div>

                {/* Navigation Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16">
                    {/* Product */}
                    <div>
                        <h4 className="text-white font-semibold mb-2">Product</h4>
                        <ul className="space-y-1">
                            <li>
                                <Link href="#analyze-dream" className="hover:text-white">
                                    Analyze Dream
                                </Link>
                            </li>
                            <li>
                                <Link href="#download-app" className="hover:text-white">
                                    Download App
                                </Link>
                            </li>
                            <li>
                                <Link href="#blog" className="hover:text-white">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-2">Company</h4>
                        <ul className="space-y-1">
                            <li>
                                <Link href="#about-us" className="hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-2">Legal</h4>
                        <ul className="space-y-1">
                            <li>
                                <Link href="#privacy-policy" className="hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#terms-of-use" className="hover:text-white">
                                    Terms of Use
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mx-auto  border-t border-gray-700 flex items-center justify-between pt-8 w-full mt-8">
                {/* Copyright */}
                <div className="text-center text-sm">© 2025 Dreamograph. All rights reserved.</div>
                {/* Social Icons */}
                <div className="flex space-x-4">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-instagram-icon lucide-instagram"
                        >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-twitter-icon lucide-twitter"
                        >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-youtube-icon lucide-youtube"
                        >
                            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                            <path d="m10 15 5-3-5-3z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
