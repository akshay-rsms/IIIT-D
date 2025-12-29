"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

                    <div className="hidden md:ml-6 md:flex md:space-x-8">
                        <Link href="#curriculum" className="text-gray-700 hover:text-brand-dark px-3 py-2 text-sm font-medium transition-colors">
                            Curriculum
                        </Link>
                        <Link href="#about" className="text-gray-700 hover:text-brand-dark px-3 py-2 text-sm font-medium transition-colors">
                            About
                        </Link>
                        <Link href="#pricing" className="text-gray-700 hover:text-brand-dark px-3 py-2 text-sm font-medium transition-colors">
                            Pricing
                        </Link>
                        <Link href="#about-iiit" className="text-gray-700 hover:text-brand-dark px-3 py-2 text-sm font-medium transition-colors">
                            About IIIT
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <a
                            href="tel:+919900892524"
                            className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-none shadow-sm text-white bg-brand-blue hover:bg-brand-blue-hover focus:outline-none transition-all gap-2"
                        >
                            <Phone size={16} />
                            +91 - 9900892524
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
