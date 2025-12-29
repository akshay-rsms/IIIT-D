"use client";

import { CheckCircle2 } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#F1F5F9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                            Admissions Closing Soon
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold font-outfit leading-tight text-brand-dark">
                            M.Tech <span className="text-brand-blue">in</span> <br />
                            Data Science <br />
                            & Artificial <br />
                            Intelligence
                        </h1>

                        <ul className="space-y-4">
                            {[
                                "Industry-Aligned Curriculum",
                                "Hands-On Projects",
                                "Campus Immersion Opportunity",
                                "IIIT Dharwad Alumni Status",
                                "Two years degree with multiple exit options",
                                "Fulltime MTech equivalent with PhD eligibility"
                            ].map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 size={20} className="text-brand-blue" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Form Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900">
                                Save Your Seat, <span className="text-brand-blue">Apply Now.</span>
                            </h3>
                            <p className="text-gray-500 mt-2 font-medium">100% Online</p>
                        </div>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="tel"
                                    placeholder="Phone No."
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                                />
                                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-gray-500">
                                    <option disabled selected>City</option>
                                    <option>Bangalore</option>
                                    <option>Hyderabad</option>
                                    <option>Mumbai</option>
                                    <option>Delhi</option>
                                </select>
                            </div>
                            <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-gray-500">
                                <option disabled selected>Work Experience</option>
                                <option>0-2 Years</option>
                                <option>2-5 Years</option>
                                <option>5+ Years</option>
                            </select>

                            <button className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-blue/30 transition-all flex items-center justify-center gap-2 group">
                                Apply Now
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </form>

                        <p className="text-center mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-600" />
                            Few Seats Left, Classes start on 1st March, 2026
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
