"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Curriculum", href: "#curriculum" },
        { name: "About", href: "#about" },
        { name: "Pricing", href: "#pricing" },
        { name: "About IIIT", href: "#about-iiit" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? "py-2 shadow-md" : "py-4 shadow-sm"
                }`}
        >
            <div className="w-full px-6 lg:px-12">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                        <Logo className="h-10 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-brand-dark px-3 py-2 text-sm font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Call Button - Hidden on small mobile, visible on tablet+ */}
                        <a
                            href="tel:+919900892524"
                            className="hidden sm:inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-none shadow-sm text-white bg-brand-blue hover:bg-brand-blue-hover focus:outline-none transition-all gap-2"
                        >
                            <Phone size={16} />
                            +91 - 9900892524
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-gray-600 hover:text-brand-dark transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed inset-x-0 top-[72px] bg-white border-b border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
            >
                <div className="px-6 py-8 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-xl font-bold text-gray-900 hover:text-brand-blue transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-6">
                        <a
                            href="tel:+919900892524"
                            className="inline-flex w-full items-center justify-center px-6 py-4 border border-transparent text-lg font-bold rounded-none shadow-sm text-white bg-brand-blue hover:bg-brand-blue-hover transition-all gap-2"
                        >
                            <Phone size={20} />
                            Call Us +91-9900892524
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
