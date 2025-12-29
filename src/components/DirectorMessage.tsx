"use client";

import { Sparkle } from "lucide-react";
import Logo from "./Logo";

const DirectorMessage = () => {
    const profileCards = [
        { name: "Prof. SR Mahadeva", title: "/ PROF & DIRECTOR", dept: "DATA SCIENCE & ARTIFICIAL INTELLIGENCE", edu: "/ PHD IIT MADRAS" },
        { name: "Prof. SR Mahadeva", title: "/ PROF & DIRECTOR", dept: "DATA SCIENCE & ARTIFICIAL INTELLIGENCE", edu: "/ PHD IIT MADRAS" },
        { name: "Prof. SR Mahadeva", title: "/ PROF & DIRECTOR", dept: "DATA SCIENCE & ARTIFICIAL INTELLIGENCE", edu: "/ PHD IIT MADRAS" },
        { name: "Prof. SR Mahadeva", title: "/ PROF & DIRECTOR", dept: "DATA SCIENCE & ARTIFICIAL INTELLIGENCE", edu: "/ PHD IIT MADRAS" },
    ];

    const benefits = [
        "Official ID",
        "Official Email Address",
        "Access to Events & Activities",
        "Official ID",
        "Official Email Address",
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* Top: Message & Video Section */}
                <div className="flex flex-col lg:flex-row border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm">
                    {/* Left Side: Text */}
                    <div className="lg:w-[40%] p-16 flex flex-col justify-between bg-white">
                        <h2 className="text-4xl lg:text-5xl font-bold font-outfit text-brand-dark leading-tight">
                            Message <br /> from the <br /> Director →
                        </h2>

                        <div className="mt-16 space-y-4">
                            <div className="space-y-0.5">
                                <p className="text-sm font-bold text-gray-400">Prof. SR</p>
                                <p className="text-sm font-bold text-gray-400">Mahadeva</p>
                            </div>
                            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">/ PROF & DIRECTOR</p>
                            <div className="pt-2">
                                <Logo className="h-10 w-auto" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Video Player */}
                    <div className="lg:w-[60%] bg-[#F8FAFC] relative aspect-video flex items-center justify-center group overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2000&auto=format&fit=crop"
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center text-white cursor-pointer hover:bg-white/30 hover:scale-105 transition-all">
                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                            </div>
                        </div>

                        {/* Profile Overlay */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl inline-block border border-white/10">
                                <p className="text-white text-sm font-bold">Prof. S R Mahadeva Prasanna</p>
                                <p className="text-white/60 text-[10px] font-medium mt-0.5">Professor and Director, IIIT Dharwad</p>
                            </div>
                        </div>

                        {/* Progress bar approximation */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden">
                            <div className="w-[15%] h-full bg-red-500" />
                        </div>
                    </div>
                </div>

                {/* Middle: Profile Card Row */}
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide pt-4">
                    {profileCards.map((p, i) => (
                        <div key={i} className="min-w-[340px] bg-[#F8FAFC] rounded-[2rem] p-8 flex justify-between items-center group hover:bg-white hover:shadow-xl hover:shadow-brand-blue/5 transition-all border border-transparent hover:border-brand-blue/10">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <p className="text-2xl font-bold text-gray-900 leading-tight">Prof. <br />SR Mahadeva</p>
                                    <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">{p.title}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[9px] font-bold text-gray-400 uppercase leading-snug tracking-tighter w-40">{p.dept}</p>
                                </div>
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{p.edu}</p>
                            </div>
                            <div className="w-24 h-32 bg-gray-200 rounded-2xl overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" alt="Prof" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom: All Students Section */}
                <div className="pt-12 space-y-10">
                    <h3 className="text-3xl font-bold font-outfit text-brand-dark text-center">All Students Will Recieve</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-3 px-6 py-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-brand-blue/20 transition-all cursor-default group">
                                <Sparkle size={18} className="text-brand-blue fill-brand-blue transition-transform group-hover:rotate-45" />
                                <span className="text-sm font-bold text-gray-700">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DirectorMessage;
