"use client";
import Logo from "./Logo";

const PricingAndCertificates = () => {
    return (
        <section className="bg-white overflow-hidden py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                {/* Main Fee Card (Black & Blue Split) */}
                <div className="flex flex-col lg:flex-row rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                    {/* Left Section (Black) */}
                    <div className="lg:w-[40%] bg-[#080808] p-16 flex flex-col justify-between min-h-[500px] relative">
                        <div className="space-y-12">
                            <h2 className="text-6xl font-bold font-outfit text-white uppercase leading-tight tracking-tight">Program <br /> Fees</h2>

                            <div className="space-y-3">
                                <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Application Fee</p>
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl font-bold text-white tracking-tighter">₹2,000</span>
                                    <span className="px-2 py-0.5 border border-gray-700 rounded text-[8px] text-gray-500 font-bold uppercase tracking-wide">Non-Refundable</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#A3E635] text-black px-8 py-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-white transition-all shadow-xl shadow-[#A3E635]/20">
                            <div className="space-y-0.5">
                                <p className="text-[10px] font-black uppercase tracking-tight opacity-70">Emi Starting</p>
                                <p className="text-2xl font-black tracking-tighter">₹15,400/- <span className="text-sm font-bold opacity-60 ml-1">& More</span></p>
                            </div>
                        </div>

                        {/* Corner decor from image */}
                        <div className="absolute bottom-6 left-6 w-1 h-1 bg-gray-800 rounded-full" />
                    </div>

                    {/* Right Section (Blue) */}
                    <div className="lg:w-[60%] bg-brand-blue p-16 flex flex-col justify-center gap-6">
                        {[
                            { label: "Pay Every Semester", value: "₹88,500" },
                            { label: "Pay Yearly", value: "₹1,77,000" },
                            { label: "Pay Total Fee", value: "₹3,54,000" },
                        ].map((fee, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl flex justify-between items-center group hover:-translate-y-1 transition-all cursor-default shadow-lg shadow-black/5">
                                <p className="text-gray-900 font-black text-xl tracking-tight">{fee.label}</p>
                                <p className="text-gray-900 font-black text-3xl tracking-tighter">{fee.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Meta info text divider */}
                <div className="max-w-2xl mx-auto text-center pt-8">
                    <p className="text-gray-400 font-bold text-xs leading-relaxed space-y-2">
                        <span className="block italic">→ Students are required to maintain a minimum of 75% attendance each semester.*</span>
                        <span className="block italic">→ *60% through live synchronous classes and 15% through asynchronous (recorded) sessions.</span>
                    </p>
                </div>

                {/* Bottom Part: Certificate Section */}
                <div className="space-y-24 pt-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl lg:text-6xl font-black font-outfit text-brand-dark tracking-tight">
                            Get an <span className="text-brand-blue border-b-8 border-brand-blue/10">Industry Worthy</span> Certificate
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        {/* Left: Certificate Preview */}
                        <div className="lg:col-span-7 relative">
                            <div className="relative p-3 bg-gray-50 rounded-3xl shadow-inner border border-gray-100 rotate-1 scale-[1.02]">
                                <img
                                    src="https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=1200"
                                    alt="Sample Degree Certificate"
                                    className="w-full h-auto rounded-2xl shadow-[0_32px_128px_-32px_rgba(0,0,0,0.3)] contrast-125 opacity-90"
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <p className="text-[10vw] font-black text-black/[0.03] -rotate-12 uppercase tracking-[2em] font-sans">SAMPLE</p>
                                </div>
                                <div className="absolute top-8 left-8 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                                    <Logo className="h-8 w-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Right: Path Milestones */}
                        <div className="lg:col-span-5 relative space-y-4">
                            {/* Connecting Line Decor */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-[60%] bg-brand-blue/20 -ml-8 hidden lg:block" />

                            {[
                                { title: "PG Certification", desc: "Awarded upon completion of 15 credits in foundational courses (if the candidate exits the program after the 1st semester)." },
                                { title: "PG Diploma", desc: "Awarded upon completion of 30 credits, including core and elective courses (if the candidate exits the program after the 2nd semester)." },
                                { title: "M.Tech Degree", desc: "Awarded upon completion of 60 credits, including the master's thesis and capstone project." },
                            ].map((item, idx) => (
                                <div key={idx} className="p-10 border border-brand-blue/10 bg-white rounded-2xl relative group hover:bg-brand-blue/5 hover:border-brand-blue/30 transition-all shadow-sm">
                                    {/* Tick icon as seen in design boxes */}
                                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-brand-blue/10 group-hover:border-brand-blue/30 rounded flex items-center justify-center transition-all">
                                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full opacity-40 group-hover:opacity-100" />
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-black text-brand-blue tracking-tighter">{item.title}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed font-bold">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PricingAndCertificates;
