"use client";



const ProgramHighlights = () => {
    const highlights = [
        { label: "Duration", value: "2 Years", subLabel: "Online" },
        { label: "Mode", value: "Online", subLabel: "" },
        { label: "Fees", value: "₹3.54L", subLabel: "" },
        { label: "Starts on", value: "Feb, 2026", subLabel: "" },
    ];

    return (
        <section className="py-12 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Video Placeholder */}
                    <div className="relative group cursor-pointer aspect-video rounded-none overflow-hidden shadow-2xl">
                        <img
                            src="/assets/program-video.jpg"
                            alt="Program Video"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    </div>

                    {/* Highlights Content */}
                    <div className="space-y-12">
                        <div className="text-center">
                            <h2 className="text-2xl lg:text-4xl font-outfit text-brand-dark leading-tight inline-block">
                                <span className="font-bold">Key Highlights</span> <span className="font-normal">about</span> <br />
                                <span className="font-normal">this program</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="bg-brand-light p-6 rounded-none border border-gray-100 transition-all group">
                                    <p className="text-gray-500 font-medium text-sm mb-1">{item.label}</p>
                                    <p className="text-2xl font-bold text-brand-dark transition-colors">{item.value}</p>
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
