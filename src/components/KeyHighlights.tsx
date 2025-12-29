"use client";

import { Cpu, BookOpen, Layers, Target } from "lucide-react";

const KeyHighlights = () => {
    const highlights = [
        {
            id: "/001",
            title: "Institute Autonomy",
            desc: "An academic Senate with industry professionals ensures that the curriculum remains relevant and responsive to industry trends.",
            Icon: Cpu,
        },
        {
            id: "/002",
            title: "Holistic Curriculum",
            desc: "The balanced mix of theory core subjects, specialized elective subjects, soft skills, and projects ensures students are well-rounded and adaptable.",
            Icon: BookOpen,
        },
        {
            id: "/003",
            title: "IT-Focused Curriculum",
            desc: "Specializing in IT-related fields from the start ensures candidates' alignment with technology-driven industries, meeting modern job demands.",
            Icon: Layers,
        },
        {
            id: "/004",
            title: "Outcome-Based Education Emphasis",
            desc: "Demonstrates that students are trained to meet specific objectives, indicating their skills are parallel to industry needs.",
            Icon: Target,
        },
    ];

    return (
        <section className="py-24 bg-[#0A0A0A] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16 space-y-4">
                    <p className="text-gray-500 font-medium tracking-widest uppercase text-sm">/ WHY US</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit flex items-center gap-4">
                        Key Highlights <span className="text-gray-400">→</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800/50 border border-gray-800/50 rounded-none overflow-hidden">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#0D0D0D] p-10 relative group hover:bg-[#111111] transition-colors"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-white/5 rounded-none group-hover:bg-brand-blue/10 transition-colors">
                                    <item.Icon size={32} className="text-white transition-colors" />
                                </div>
                                <span className="text-gray-600 font-mono text-lg">{item.id}</span>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold font-outfit">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default KeyHighlights;
