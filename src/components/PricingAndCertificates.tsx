"use client";
import Logo from "./Logo";

const PricingAndCertificates = () => {
    return (
        <section className="bg-white overflow-hidden py-16 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-32">

                {/* Main Fee Card (Black & Blue Split) */}
                <div className="flex flex-col lg:flex-row rounded-none overflow-hidden shadow-2xl relative">
                    {/* Left Section (Black) */}
                    <div className="lg:w-[40%] bg-[#080808] p-8 lg:p-16 flex flex-col justify-between min-h-[400px] lg:min-h-[500px] relative">
                        <div className="space-y-10 lg:space-y-12">
                            <h2 className="text-4xl lg:text-6xl font-bold font-outfit text-white uppercase leading-tight tracking-tight">Program <br /> Fees</h2>

                            <div className="space-y-3">
                                <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Application Fee</p>
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl font-bold text-white tracking-tighter">₹2,000</span>
                                    <span className="px-2 py-0.5 border border-gray-700 rounded text-[8px] text-gray-500 font-bold uppercase tracking-wide">Non-Refundable</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#A3E635] text-black px-8 py-5 rounded-none flex items-center justify-between group cursor-pointer hover:bg-white transition-all shadow-xl shadow-[#A3E635]/20">
                            <div className="space-y-0.5">
                                <p className="text-[10px] font-black uppercase tracking-tight opacity-70">Emi Starting</p>
                                <p className="text-2xl font-black tracking-tighter">₹15,400/- <span className="text-sm font-bold opacity-60 ml-1">& More</span></p>
                            </div>
                        </div>

                        {/* Corner decor from image */}
                        <div className="absolute bottom-6 left-6 w-1 h-1 bg-gray-800 rounded-full" />
                    </div>

                    {/* Right Section (Blue) */}
                    <div className="lg:w-[60%] bg-brand-blue p-8 lg:p-16 flex flex-col justify-center gap-6">
                        {[
                            { label: "Pay Every Semester", value: "₹88,500" },
                            { label: "Pay Yearly", value: "₹1,77,000" },
                            { label: "Pay Total Fee", value: "₹3,54,000" },
                        ].map((fee, idx) => (
                            <div key={idx} className="bg-white p-6 lg:p-10 rounded-none flex justify-between items-center group hover:-translate-y-1 transition-all cursor-default shadow-lg shadow-black/5">
                                <p className="text-gray-900 font-black text-lg lg:text-xl tracking-tight">{fee.label}</p>
                                <p className="text-gray-900 font-black text-2xl lg:text-3xl tracking-tighter">{fee.value}</p>
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

                <div className="space-y-12 lg:space-y-24 pt-12 lg:pt-16">
                    <div className="w-full text-center">
                        <h2 className="text-3xl lg:text-6xl font-normal font-outfit text-brand-dark tracking-tight whitespace-nowrap">
                            Get an <span className="font-bold underline decoration-brand-blue decoration-8 underline-offset-8">Industry Worthy</span> Certificate
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        {/* Left: Certificate Preview */}
                        <div className="lg:col-span-7 relative">
                            <div className="relative p-3 bg-gray-50 rounded-none shadow-inner border border-gray-100">
                                <img
                                    src="/assets/mtech-certificate.png"
                                    alt="M.Tech Degree Certificate"
                                    className="w-full h-auto rounded-none shadow-[0_32px_128px_-32px_rgba(0,0,0,0.3)]"
                                />
                            </div>
                        </div>

                        {/* Right: Path Milestones */}
                        <div className="lg:col-span-5 relative flex flex-col gap-6">
                            {/* Connecting Line - visual only, positioned absolute related to layout if needed, but flex gap works for spacing */}

                            {[
                                { title: "PG Certification", desc: "Awarded upon completion of 15 credits in foundational courses (if the candidate exits the program after the 1st semester)." },
                                { title: "PG Diploma", desc: "Awarded upon completion of 30 credits, including core and elective courses (if the candidate exits the program after the 2nd semester)." },
                                { title: "M.Tech Degree", desc: "Awarded upon completion of 60 credits, including the master's thesis and capstone project." },
                            ].map((item, idx) => (
                                <div key={idx} className="relative pl-8">
                                    {/* Line connecting the left edge */}
                                    {idx !== 2 && <div className="absolute left-0 top-8 bottom-[-24px] w-px bg-brand-blue/30" />}
                                    {/* Line from previous if not first? No, easier to just draw down. */}

                                    {/* Card */}
                                    <div className="bg-white border-2 border-brand-blue p-6 lg:p-8 rounded-none shadow-sm relative z-10">

                                        {/* Connector Line to Box */}
                                        <div className="absolute top-8 left-0 w-8 h-px bg-brand-blue/30 -translate-x-full" />

                                        <div className="space-y-3">
                                            <h4 className="text-xl lg:text-2xl font-bold text-brand-blue tracking-tight">{item.title}</h4>
                                            <p className="text-gray-600 text-[10px] lg:text-xs leading-relaxed font-medium">
                                                {item.desc}
                                            </p>
                                        </div>
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
