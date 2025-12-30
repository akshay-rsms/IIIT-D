"use client";

import { Monitor, BookOpen, Users2 } from "lucide-react";

const PedagogyAndAssessment = () => {
    return (
        <section className="bg-white overflow-hidden">

            {/* Split Section: Attendance vs Pedagogy */}
            <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
                {/* Left Section: Attendance Policy (Dark/Black) */}
                <div className="lg:w-1/2 bg-[#0A0A0A] p-10 lg:p-24 relative flex flex-col items-center lg:items-end">
                    <div className="max-w-md w-full space-y-16">
                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-bold font-outfit text-white">Attendance Policy</h2>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-medium">
                                The program follows a blended learning approach, combining multiple instructional methods to enhance learning outcomes:
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-[#121212] p-10 rounded-none space-y-6 border border-white/5 shadow-2xl">
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">SYNCHRONOUS ATTENDANCE</p>
                                <div className="relative h-1.5 bg-gray-900 rounded-full">
                                    <div className="absolute h-full w-[60%] bg-brand-blue rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                                    <div className="absolute top-1/2 left-[60%] w-5 h-5 bg-brand-blue border-4 border-[#121212] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-xl shadow-brand-blue/30" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm font-black text-white uppercase tracking-tighter">60% MINIMUM</p>
                                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium">Participation in live lectures, discussions, and interactive sessions.</p>
                                </div>
                            </div>

                            <div className="bg-[#121212] p-10 rounded-none space-y-6 border border-white/5 shadow-2xl">
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">SYNCHRONOUS ATTENDANCE</p>
                                <div className="relative h-1.5 bg-gray-900 rounded-full">
                                    <div className="absolute h-full w-[15%] bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                                    <div className="absolute top-1/2 left-[15%] w-5 h-5 bg-orange-500 border-4 border-[#121212] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-xl shadow-orange-500/30" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm font-black text-white uppercase tracking-tighter">15% MINIMUM</p>
                                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium">Completion of recorded content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Background Elements from design */}
                    <div className="absolute left-16 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
                        <div className="grid grid-cols-2 gap-4">
                            {[...Array(20)].map((_, i) => (
                                <div key={i} className="text-white text-xs font-mono tracking-[1em]">XXXX</div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Section: Pedagogy & Delivery (Vibrant Blue) */}
                <div className="lg:w-1/2 bg-brand-blue p-10 lg:p-24 space-y-12 lg:space-y-16 text-white relative">
                    <div className="space-y-4 lg:space-y-6">
                        <h2 className="text-3xl lg:text-5xl font-bold font-outfit">Pedagogy & Delivery</h2>
                        <p className="text-white/70 text-sm leading-relaxed max-w-sm font-medium">
                            The program follows a blended learning approach, combining multiple instructional methods to enhance learning outcomes:
                        </p>
                    </div>

                    <div className="space-y-4 max-w-md">
                        {[
                            { title: "Interactive Live Sessions", desc: "Engage with faculty and peers through discussions, Q&A, and case study analysis.", Icon: Monitor },
                            { title: "Experiential Learning", desc: "Apply knowledge through projects, simulations, and hands-on assignments.", Icon: BookOpen },
                            { title: "Collaborative Activities", desc: "Participate in group exercises, peer learning, and forums to foster teamwork and practical understanding.", Icon: Users2 },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-none space-y-4 shadow-xl shadow-brand-blue/10 group hover:scale-[1.02] transition-all cursor-default">
                                <h4 className="text-brand-dark font-bold text-xl leading-tight font-outfit tracking-tight">{item.title}</h4>
                                <p className="text-gray-500 text-[11px] leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section: Assessment & Evaluation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32 space-y-16 lg:space-y-24">

                {/* Header with image */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <div className="lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-6xl font-bold font-outfit text-brand-dark leading-tight">Assessment & <br /> Evaluation</h2>
                        <p className="text-gray-400 font-bold leading-relaxed text-sm max-w-md mx-auto lg:mx-0">
                            Students will be evaluated through a combination of quizzes, assignments, case studies, and end-term examinations. These diverse assessment methods ensure continuous learning and a well-rounded understanding.
                        </p>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="relative rounded-none overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] aspect-[4/3]">
                            <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000&auto=format&fit=crop" alt="Student Working" className="w-full h-full object-cover" />

                            <div className="absolute inset-0 border-[16px] border-white/10 rounded-none pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* 4-Step Process Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { step: "STEP 1", title: "Fill the application & pay the application fees." },
                        { step: "STEP 2", title: "Appear for interview round." },
                        { step: "STEP 3", title: "If selected, you will receive the offer letter" },
                        { step: "STEP 4", title: "Pay the program fee and confirm your admission" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 lg:p-12 rounded-none border border-gray-100 shadow-sm flex flex-col justify-between h-[280px] lg:h-[360px] group hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 transition-all relative">
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-blue/20 rounded-none group-hover:border-brand-blue transition-colors" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-blue/20 rounded-none group-hover:border-brand-blue transition-colors" />

                            <p className="text-brand-dark font-black text-2xl tracking-tight">{item.step}</p>
                            <p className="text-gray-800 font-bold text-xl leading-snug pr-4">{item.title}</p>
                            <div className="h-px w-full bg-gray-50 group-hover:bg-brand-blue/10" />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default PedagogyAndAssessment;
