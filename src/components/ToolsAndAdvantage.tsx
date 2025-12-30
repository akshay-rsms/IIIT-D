"use client";


const ToolsAndAdvantage = () => {
    const tools = [
        { name: "TensorFlow", logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
        { name: "Keras", logo: "/keras.svg" },
        { name: "Hadoop", logo: "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-ar21.svg" },
        { name: "PyTorch", logo: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
        { name: "SciKit Learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "Spark", logo: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-ar21.svg" },
        { name: "Git", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
        { name: "GitLab", logo: "https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21.svg" },
        { name: "OpenCV", logo: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" },
    ];

    const advantages = [
        { id: "/001", title: "Prestigious M.Tech Degree" },
        { id: "/002", title: "Industry-Relevant Curriculum" },
        { id: "/003", title: "Hands-On Campus Immersion" },
        { id: "/004", title: "Expert Faculty Guidance" },
        { id: "/005", title: "Professional Networking" },
        { id: "/006", title: "Strong Industry Connect" },
    ];

    return (
        <section className="py-16 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-32">

                {/* Tools Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left Card */}
                    <div className="lg:col-span-6 bg-brand-blue rounded-none p-10 lg:p-16 flex flex-col justify-center text-white relative overflow-hidden">
                        <div className="space-y-6 lg:space-y-8 relative z-10">
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-outfit leading-tight">
                                Tools <br />
                                You'll <br />
                                Master <span className="text-2xl lg:text-4xl">→</span>
                            </h2>
                            <p className="text-white/80 text-base md:text-xl leading-relaxed max-w-md">
                                Gain proficiency with the industry-standard frameworks and development environments used by top AI engineering teams worldwide.
                            </p>
                        </div>

                        {/* Floating Decorative Elements */}
                        <div className="absolute top-0 right-0 p-8 transform translate-x-1/4 -translate-y-1/4">
                            <div className="bg-white p-6 rounded-full shadow-2xl animate-pulse">
                                <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" className="h-10 w-10" alt="" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-1/4 p-8 transform -translate-x-1/2 translate-y-1/2">
                            <div className="bg-white p-5 rounded-full shadow-2xl">
                                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" className="h-8 w-8" alt="" />
                            </div>
                        </div>
                        <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/20 rounded-full" />
                        <div className="absolute top-1/4 left-10 w-3 h-3 bg-white/10 rounded-full" />
                    </div>

                    {/* Right Grid */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {tools.map((tool, index) => (
                                <div key={index} className="aspect-square flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-none shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all cursor-default group">
                                    <div className="h-16 w-full flex items-center justify-center">
                                        <img src={tool.logo} alt={tool.name} className="max-h-12 max-w-full object-contain transition-all duration-300" />
                                    </div>
                                    <p className="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">{tool.name}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-8 px-4">
                            <p className="text-white/0 select-none">.</p>
                            <p className="text-gray-400 font-bold italic text-lg tracking-tight">
                                & soooo many more!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Advantage Section */}
                <div className="space-y-12 lg:space-y-16">
                    <div className="text-center space-y-4">
                        <div className="inline-block px-4 py-1.5 bg-gray-50 rounded-none text-gray-500 font-bold text-xs tracking-widest uppercase">
                            READY TO JOIN?
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-bold font-outfit text-brand-dark">
                            The IIIT Dharwad Advantage
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                        {advantages.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 p-6 bg-brand-light/50 border border-brand-blue/5 hover:border-brand-blue/20 hover:bg-white hover:shadow-lg transition-all rounded-none group">
                                <div className="flex-shrink-0">
                                    <img src="/blue-bulletin.svg" alt="bullet" className="h-6 w-6" />
                                </div>
                                <h4 className="text-lg font-bold text-brand-dark group-hover:text-brand-blue transition-colors leading-snug">
                                    {item.title}
                                </h4>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center justify-center pt-8">
                        <p className="text-2xl font-bold text-brand-dark font-outfit">Ready to accelerate your career?</p>
                        <div className="flex gap-4">
                            <button className="bg-brand-blue text-white px-8 py-4 rounded-none font-bold hover:shadow-lg hover:shadow-brand-blue/30 transition-all">
                                Apply Now →
                            </button>
                            <button className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-none font-bold hover:bg-gray-50 transition-all">
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
