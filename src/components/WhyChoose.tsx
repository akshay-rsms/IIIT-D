"use client";

import { ChevronRight, Check } from "lucide-react";

const WhyChoose = () => {
    const points = [
        {
            title: "India's Newest & Fastest-Growing IIIT",
            desc: "One of the most dynamic institutes among the 26 IIITs.",
        },
        {
            title: "Industry-Aligned Curriculum",
            desc: "Programs tailored to meet global AI and tech demands.",
        },
        {
            title: "Institute of National Importance",
            desc: "IIIT Dharwad enjoys full academic freedom.",
        },
        {
            title: "Join Alumni Network",
            desc: "Full privileges as an IIIT Dharwad graduate.",
        },
    ];

    return (
        <section className="py-16 lg:py-24 bg-brand-light/30 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left: Text Content */}
                    <div className="relative p-8 lg:p-10">
                        {/* Blue Corner Brackets for Text */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-blue" />

                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-7xl font-outfit text-brand-dark leading-none tracking-tight">
                                Why Choose <br />
                                <div className="font-bold mt-2">IIIT Dharwad?</div>
                            </h2>
                            <p className="text-[22px] lg:text-[24px] font-normal font-work-sans text-brand-dark leading-snug max-w-xl">
                                India's Next Frontier for Data Science & AI Education.
                                <br />
                                <span className="block mt-2">
                                    Experience a curriculum designed for the future, delivered by experts.
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative">
                        {/* Blue Corner Brackets for Image */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-blue z-20" />

                        <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100">
                            <img
                                src="/student-laptop.png"
                                alt="Student with laptop"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* ///T Decor */}
                        <div className="absolute -bottom-6 -left-6 text-brand-blue/80 font-mono text-sm tracking-widest z-10">
                            ///T
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {points.map((point, index) => (
                        <div key={index} className="bg-white p-8 relative min-h-[280px] flex flex-col justify-start gap-6 border border-transparent hover:border-brand-blue/10 transition-all group">
                            {/* Blue Corner Brackets */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-blue" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-blue" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-blue" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-blue" />

                            <div className="bg-brand-blue rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                                <Check className="text-white w-5 h-5" />
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                    {point.title}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                    {point.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Apply Now Blue Card */}
                    <div className="bg-brand-blue p-8 relative min-h-[280px] flex flex-col justify-between group hover:shadow-xl transition-all cursor-pointer">
                        <div className="text-white/40 font-mono text-sm tracking-widest">///T</div>

                        <div className="space-y-2">
                            <h3 className="text-3xl font-normal text-white leading-none">
                                Apply <br /> Now →
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChoose;
