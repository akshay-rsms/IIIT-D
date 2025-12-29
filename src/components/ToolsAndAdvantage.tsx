"use client";

import { Award, BookOpenCheck, Users, GraduationCap, MapPin, Handshake } from "lucide-react";

const ToolsAndAdvantage = () => {
    const tools = [
        { name: "TensorFlow", logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
        { name: "PyTorch", logo: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
        { name: "Keras", logo: "https://www.vectorlogo.zone/logos/keras/keras-icon.svg" },
        { name: "SciKit Learn", logo: "https://www.vectorlogo.zone/logos/pocoo_beets/pocoo_beets-icon.svg" }, // Approximation
        { name: "Hadoop", logo: "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg" },
        { name: "Spark", logo: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg" },
        { name: "Git", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
        { name: "GitLab", logo: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg" },
        { name: "OpenCV", logo: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" },
    ];

    const advantages = [
        { id: "/001", title: "Prestigious M.Tech Degree", Icon: GraduationCap },
        { id: "/002", title: "Industry-Relevant Curriculum", Icon: BookOpenCheck },
        { id: "/003", title: "Hands-On Campus Immersion", Icon: MapPin },
        { id: "/004", title: "Expert Faculty Guidance", Icon: Award },
        { id: "/005", title: "Professional Networking", Icon: Users },
        { id: "/006", title: "Strong Industry Connect", Icon: Handshake },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                {/* Tools Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5 bg-brand-blue rounded-[3rem] p-12 text-white relative">
                        <div className="space-y-6 relative z-10">
                            <h2 className="text-5xl font-bold font-outfit uppercase">
                                Tools <br />
                                You'll <br />
                                Master <span className="text-3xl">→</span>
                            </h2>
                            <p className="text-white/80 leading-relaxed font-medium">
                                Gain proficiency with the industry-standard frameworks and development environments used by top AI engineering teams worldwide.
                            </p>
                            <p className="text-white/40 text-[10px] italic">
                                *Tool exposure varies by specialization; students may not work with all tools listed.
                            </p>
                        </div>
                        {/* Background elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-8 -mb-8" />
                    </div>

                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                            {tools.map((tool, index) => (
                                <div key={index} className="aspect-square flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-3xl hover:border-brand-blue/30 hover:shadow-lg transition-all group">
                                    <img src={tool.logo} alt={tool.name} className="h-12 w-12 object-contain" />
                                    <p className="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">{tool.name}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-right mt-6 text-gray-400 font-bold italic tracking-tighter">
                            & soooo many more!
                        </p>
                    </div>
                </div>

                {/* Advantage Section */}
                <div className="space-y-16">
                    <div className="text-center space-y-4">
                        <div className="inline-block px-4 py-1.5 bg-gray-50 rounded-lg text-gray-500 font-bold text-xs tracking-widest uppercase">
                            READY TO JOIN?
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-brand-dark">
                            The <span className="text-brand-blue">IIIT Dharwad</span> Advantage
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advantages.map((item, index) => (
                            <div key={index} className="p-10 bg-brand-light rounded-3xl relative group hover:bg-white hover:shadow-xl hover:shadow-brand-blue/5 border border-transparent hover:border-brand-blue/10 transition-all">
                                <span className="text-gray-300 font-mono text-xs absolute top-8 left-8">{item.id}</span>
                                <div className="mt-8 space-y-6">
                                    <item.Icon className="text-brand-blue/20 group-hover:text-brand-blue transition-colors" size={40} strokeWidth={1.5} />
                                    <h4 className="text-xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors leading-snug">
                                        {item.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center justify-center pt-8">
                        <p className="text-2xl font-bold text-brand-dark font-outfit">Ready to accelerate your career?</p>
                        <div className="flex gap-4">
                            <button className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-brand-blue/30 transition-all">
                                Apply Now →
                            </button>
                            <button className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                                Talk to counsellor →
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ToolsAndAdvantage;
