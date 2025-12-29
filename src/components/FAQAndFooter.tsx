"use client";

import { useState } from "react";
import Logo from "./Logo";

const FAQAndFooter = () => {
    const [activeTab, setActiveTab] = useState("General Info");

    const faqs = [
        { q: "What is M.Tech in data science?", a: "The M.Tech in Data Science and Artificial Intelligence is a 2-year (4 semesters) postgraduate program designed to prepare students for high-impact roles in the tech industry and academia. The program emphasizes project-based learning and research-driven problem-solving, going beyond conventional degree structures." },
        { q: "How are the classes conducted?", a: "Classes are conducted online in a synchronous mode, allowing for real-time interaction with faculty and peers. Recorded sessions are juga available for flexible learning." },
        { q: "What are the eligibility criteria?", a: "A Bachelor's degree in Engineering/Technology or a Master's degree in Science/Applications with a minimum specified percentage is generally required." },
        { q: "Is there any placement support?", a: "Yes, IIIT Dharwad provides comprehensive placement support, including career counseling, mock interviews, and access to our strong network of hiring partners." },
    ];

    return (
        <footer className="bg-white">

            {/* FAQ Section (Strict Dark Theme) */}
            <section className="bg-[#050505] py-32 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    <div className="space-y-6 max-w-2xl">
                        <h2 className="text-5xl lg:text-6xl font-black font-outfit leading-tight tracking-tight">Frequently <br /> Asked Questions</h2>
                        <p className="text-gray-600 font-bold leading-relaxed text-sm">
                            We’ll be there when you need us. Find quick answers to common questions about the M.Tech program.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Tabs */}
                        <div className="lg:w-[22%] space-y-2">
                            {["General Info", "Admissions", "Curriculum", "Certifications"].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setActiveTab(t)}
                                    className={`w-full text-left px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === t ? "bg-white text-brand-blue shadow-2xl shadow-white/10" : "bg-[#1A1A1A] text-gray-500 hover:text-gray-300 border border-transparent hover:border-white/5"}`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>

                        {/* FAQ Items */}
                        <div className="lg:w-[78%] space-y-4">
                            {faqs.map((f, i) => (
                                <div key={i} className={`bg-[#121212] rounded-[2rem] p-10 border border-white/5 space-y-8 group hover:border-brand-blue/30 transition-all ${i === 0 ? 'ring-1 ring-brand-blue/20 shadow-2xl shadow-brand-blue/5' : ''}`}>
                                    <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform">
                                        <h4 className="text-2xl font-black text-gray-300 tracking-tight">{f.q}</h4>
                                    </div>

                                    {i === 0 && (
                                        <div className="pt-4 border-t border-white/5">
                                            <p className="text-gray-500 leading-relaxed text-sm font-bold max-w-3xl">
                                                {f.a}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid-based Footer (Matches Mockup) */}
            <section className="w-full border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-12">

                    {/* Left Column: Logo (3 cols) */}
                    <div className="md:col-span-3 p-12 md:p-16 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                        <Logo className="h-16 w-auto" />
                    </div>

                    {/* Right Area (9 cols) */}
                    <div className="md:col-span-9 flex flex-col">

                        {/* Top Row: Links and Socials */}
                        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-gray-100">
                            {/* Inner Left: Policy Links (8 cols) */}
                            <div className="md:col-span-8 p-12 flex flex-wrap items-center justify-center gap-8 md:gap-12 border-b md:border-b-0 md:border-r border-gray-100">
                                {["Terms & Conditions", "Privacy Policy", "Refund Policy"].map((link) => (
                                    <a key={link} href="#" className="font-bold text-gray-500 text-xs hover:text-brand-blue transition-colors whitespace-nowrap">{link}</a>
                                ))}
                            </div>

                            {/* Inner Right: Social Icons (4 cols) */}
                            <div className="md:col-span-4 p-8 flex items-center justify-center gap-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 bg-gray-100 rounded-lg hover:bg-brand-blue/10 transition-colors cursor-pointer" />
                                ))}
                            </div>
                        </div>

                        {/* Bottom Row: Newsletter */}
                        <div className="p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
                            <h4 className="text-3xl font-black font-outfit text-brand-dark tracking-tighter shrink-0">Join Our Newsletter</h4>
                            <div className="flex-grow max-w-xl w-full flex bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                <input
                                    type="email"
                                    placeholder="Enter your email →"
                                    className="flex-grow px-6 py-4 focus:outline-none font-medium text-sm text-gray-600"
                                />
                                <button className="bg-[#111] text-white px-8 py-4 font-bold text-sm hover:bg-black transition-colors whitespace-nowrap">
                                    Subscribe →
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Final Copyright Stripe */}
                <div className="py-6 border-t border-gray-100 text-center">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        © 2026 IIIT DHARWAD. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </section>

        </footer>
    );
};

export default FAQAndFooter;
