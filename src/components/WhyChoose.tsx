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
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Content Left */}
                    <div className="lg:w-1/2 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold font-outfit text-brand-dark">
                                Why Choose <br />
                                <span className="text-brand-blue">IIIT Dharwad?</span>
                            </h2>
                            <p className="text-xl text-gray-600 font-medium">
                                India's Next Frontier for Data Science & AI Education
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {points.map((point, index) => (
                                <div key={index} className="space-y-3">
                                    <CheckCircle2 className="text-brand-blue" size={24} />
                                    <h4 className="font-bold text-lg text-brand-dark leading-snug">
                                        {point.title}
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {point.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <button className="inline-flex items-center gap-4 bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold text-lg group shadow-xl shadow-brand-blue/20 hover:scale-[1.02] transition-all">
                                Apply Now
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Image Right with Content */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop"
                                alt="Student at IIIT"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Overlay Card */}
                        <div className="absolute -bottom-10 -right-6 md:right-10 bg-brand-blue text-white p-10 rounded-[2rem] shadow-2xl max-w-[280px]">
                            <div className="space-y-6">
                                <div className="text-4xl font-light opacity-60 font-outfit">///T</div>
                                <div className="space-y-2">
                                    <p className="text-2xl font-bold leading-tight">Key Highlights →</p>
                                    <p className="text-sm opacity-80">Explore what makes us unique.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
