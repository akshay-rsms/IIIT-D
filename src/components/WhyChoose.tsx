"use client";

import { CheckCircle2 } from "lucide-react";

const WhyChoose = () => {
    const points = [
        {
            title: "India's Newest & Fastest-Growing IIIT",
            desc: "One of the most dynamic institutes among the 26 IIITs.",
            step: "REASON 1"
        },
        {
            title: "Industry-Aligned Curriculum",
            desc: "Programs tailored to meet global AI and tech demands.",
            step: "REASON 2"
        },
        {
            title: "Institute of National Importance",
            desc: "IIIT Dharwad enjoys full academic freedom.",
            step: "REASON 3"
        },
        {
            title: "Join Alumni Network",
            desc: "Full privileges as an IIIT Dharwad graduate.",
            step: "REASON 4"
        },
    ];

    return (
        <section className="bg-white overflow-hidden py-16 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">

                {/* Header with image */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <div className="lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-5xl font-bold font-outfit text-brand-dark leading-tight">
                            Why Choose <span className="font-bold">IIIT Dharwad?</span>
                        </h2>
                        <p className="text-gray-600 font-bold leading-relaxed text-sm lg:text-base max-w-md mx-auto lg:mx-0">
                            India's Next Frontier for Data Science & AI Education. Experience a curriculum designed for the future, delivered by experts.
                        </p>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="relative rounded-none overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] aspect-[4/3]">
                            <img src="/assets/why-choose.png" alt="Expert at IIIT" className="w-full h-full object-cover" />
                            {/* Badge */}
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold shadow-2xl z-10">
                                <span className="text-2xl">IIIT</span>
                            </div>
                            <div className="absolute inset-0 border-[16px] border-white/10 rounded-none pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* 4-Column Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {points.map((point, index) => (
                        <div key={index} className="bg-white p-8 lg:p-12 rounded-none border border-gray-100 shadow-sm flex flex-col justify-between h-[280px] lg:h-[360px] group hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 transition-all relative">
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-blue/20 rounded-none group-hover:border-brand-blue transition-colors" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-blue/20 rounded-none group-hover:border-brand-blue transition-colors" />

                            <p className="text-brand-dark font-black text-xl tracking-tight uppercase opacity-40 group-hover:opacity-100 transition-opacity">{point.step}</p>

                            <div className="space-y-4">
                                <h4 className="text-brand-dark font-bold text-xl leading-tight font-outfit">
                                    {point.title}
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed font-bold">
                                    {point.desc}
                                </p>
                            </div>

                            <div className="h-px w-full bg-gray-50 group-hover:bg-brand-blue/10" />
                        </div>
                    ))}
                </div>

                <div className="pt-6 flex justify-center">
                    <button className="inline-flex items-center gap-4 bg-brand-blue text-white px-8 lg:px-10 py-4 lg:py-5 rounded-none font-bold text-base lg:text-lg group shadow-xl shadow-brand-blue/20 hover:scale-[1.02] transition-all">
                        Apply Now
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default WhyChoose;
