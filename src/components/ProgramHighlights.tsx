"use client";

import { PlayCircle } from "lucide-react";

const ProgramHighlights = () => {
    const highlights = [
        { label: "Duration", value: "2 Years", subLabel: "Online" },
        { label: "Mode", value: "Online", subLabel: "" },
        { label: "Fees", value: "₹3.54L", subLabel: "" },
        { label: "Starts on", value: "Feb, 2026", subLabel: "" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Video Placeholder */}
                    <div className="relative group cursor-pointer aspect-video rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1620712943543-bcc4628c71d5?q=80&w=2000&auto=format&fit=crop"
                            alt="Program Video"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="bg-white/90 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                                <PlayCircle size={48} className="text-brand-blue" />
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/30 rounded-full overflow-hidden">
                            <div className="w-1/3 h-full bg-brand-blue" />
                        </div>
                    </div>

                    {/* Highlights Content */}
                    <div className="space-y-12">
                        <h2 className="text-4xl font-bold font-outfit text-brand-dark">
                            Key Highlights <span className="text-gray-400">about</span> <br />
                            <span className="text-brand-blue">this program</span>
                        </h2>

                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="bg-brand-light p-6 rounded-2xl border border-gray-100 hover:border-brand-blue/30 transition-all group">
                                    <p className="text-gray-500 font-medium text-sm mb-1">{item.label}</p>
                                    <p className="text-2xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors">{item.value}</p>
                                    {item.subLabel && <p className="text-sm text-gray-400 mt-1">{item.subLabel}</p>}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProgramHighlights;
