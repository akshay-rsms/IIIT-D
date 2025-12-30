"use client";

import { CheckCircle2 } from "lucide-react";

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
        <section className="py-16 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                    {/* Content Left */}
                    <div className="lg:w-1/2 space-y-10 lg:space-y-12">
                        <div className="space-y-4 text-center lg:text-left">
                            <h2 className="text-3xl lg:text-5xl font-bold font-outfit text-brand-dark leading-tight">
                                Why Choose <span className="font-bold">IIIT Dharwad?</span>
                            </h2>
                            <p className="text-lg lg:text-xl text-gray-600 font-medium">
                                India's Next Frontier for Data Science & AI Education
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {points.map((point, index) => (
                                <div key={index} className="space-y-3">
                                    <CheckCircle2 className="text-brand-dark" size={24} />
                                    <h4 className="font-bold text-lg text-brand-dark leading-snug">
                                        {point.title}
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {point.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 flex justify-center lg:justify-start">
                            <button className="inline-flex items-center gap-4 bg-brand-blue text-white px-8 lg:px-10 py-4 lg:py-5 rounded-none font-bold text-base lg:text-lg group shadow-xl shadow-brand-blue/20 hover:scale-[1.02] transition-all">
                                Apply Now
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Image Right with Content */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <img
                                src="/assets/why-choose.png"
                                alt="Expert at IIIT"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
