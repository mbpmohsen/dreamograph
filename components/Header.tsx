'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-navy-dark text-white py-4 px-6 fixed top-0 left-0 w-full z-10 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    {/* Assuming a circular logo; replace with actual image or SVG */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="49"
                        viewBox="0 0 52 49"
                        fill="none"
                    >
                        <path
                            d="M27.5471 0.0430118H25.5764C25.0876 0.0156406 24.6301 0 24.1804 0C20.1725 0 16.1998 1.00491 12.6728 2.91307C12.5751 2.9639 12.4773 3.01865 12.4148 3.05384C12.3131 3.10467 12.2153 3.16332 12.1489 3.20242C4.65309 7.51142 0 15.5468 0 24.1765C0 27.8482 0.801583 31.3751 2.3852 34.6558C2.4634 34.8239 2.54943 34.9881 2.63936 35.1641C2.68628 35.2658 2.74102 35.3713 2.78795 35.4613C2.85442 35.5942 2.9248 35.7154 2.99909 35.8445L3.04602 35.9266C3.13986 36.1064 3.24152 36.2824 3.34319 36.4427C7.67174 43.7899 15.6524 48.3531 24.1765 48.3531C24.5988 48.3531 25.0329 48.3413 25.4512 48.3179H27.5432C33.991 48.3179 40.0518 45.8076 44.611 41.2444C49.1742 36.6852 51.6845 30.6244 51.6845 24.1765C51.6845 10.8703 40.8573 0.0430118 27.5471 0.0430118ZM25.4239 47.1996C25.0133 47.2191 24.5949 47.2309 24.1804 47.2309C23.9185 47.2309 23.6526 47.2309 23.3906 47.2191V1.14177C23.6526 1.13004 23.9185 1.12613 24.1804 1.12613C24.6184 1.12613 25.0641 1.14177 25.5412 1.16914C37.7057 1.87688 47.2348 11.9846 47.2348 24.1804C47.2348 36.3762 37.6549 46.5505 25.4278 47.2035L25.4239 47.1996Z"
                            fill="white"
                        />
                    </svg>
                    <div>
                        <span className="text-xl font-bold">DREAMOGRAPH</span>
                        <p className="text-xs uppercase tracking-wider">Who You Are</p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="flex items-center gap-7">
                    <nav className="hidden md:flex space-x-6 items-center">
                        {[
                            {
                                href: '/',
                                label: 'Home',
                                active: true,
                            },
                            {
                                href: '#analyze-dream',
                                label: 'Analyze Dream',
                            },
                            {
                                href: '#about',
                                label: 'About',
                            },
                            {
                                href: '#blog',
                                label: 'Blog',
                            },
                            {
                                href: '#contact',
                                label: 'Contact',
                            },
                        ].map(({ href, label, active }) => (
                            <Link
                                key={label}
                                href={href}
                                className={`
        relative font-bold text-gray-300 hover:text-white
        after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
        after:top-[calc(100%+6px)]
        after:h-[3px] after:w-[120%]
        after:bg-white
        ${active ? 'after:opacity-100' : 'after:opacity-0 hover:after:opacity-100'}
        after:transition-opacity
      `}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Download Button - Desktop */}
                    <button
                        type="button"
                        className="hidden md:flex items-center text-black bg-white text-navy-dark px-4 py-2 rounded-xl font-medium hover:bg-gray-200"
                    >
                        <span>Download App</span>
                        <span className="ml-2">↓</span>{' '}
                        {/* Down arrow; replace with icon if using react-icons */}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    className="md:hidden flex items-center text-white focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                isMobileMenuOpen
                                    ? 'M6 18L18 6M6 6l12 12'
                                    : 'M4 6h16M4 12h16M4 18h16'
                            }
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <nav className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-navy-dark py-4">
                    <Link
                        href="/"
                        className="text-gray-300 hover:text-white"
                        onClick={toggleMobileMenu}
                    >
                        Home
                    </Link>
                    <Link
                        href="#analyze-dream"
                        className="text-gray-300 hover:text-white"
                        onClick={toggleMobileMenu}
                    >
                        Analyze Dream
                    </Link>
                    <Link
                        href="#about"
                        className="text-gray-300 hover:text-white"
                        onClick={toggleMobileMenu}
                    >
                        About
                    </Link>
                    <Link
                        href="#blog"
                        className="text-gray-300 hover:text-white"
                        onClick={toggleMobileMenu}
                    >
                        Blog
                    </Link>
                    <Link
                        href="#contact"
                        className="text-gray-300 hover:text-white"
                        onClick={toggleMobileMenu}
                    >
                        Contact
                    </Link>
                    <button
                        type="button"
                        className="flex items-center bg-white text-navy-dark px-4 py-2 rounded-full font-medium hover:bg-gray-200"
                        onClick={toggleMobileMenu}
                    >
                        <span>Download App</span>
                        <span className="ml-2">↓</span>
                    </button>
                </nav>
            )}
        </header>
    );
}
