"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProgramStructure = () => {
    const [activeTab, setActiveTab] = useState("structure");
    const [openSemester, setOpenSemester] = useState<number | null>(0);

    const semesters = [
        {
            id: 0,
            title: "Semester 1",
            credits: "15 Credits",
            courses: [
                { name: "Applied Mathematics for Data Science and AI", type: "Discipline Core", credits: "3 Credits" },
                { name: "Machine Learning Paradigms", type: "Discipline Core", credits: "3 Credits" },
                { name: "Data Science Lab", type: "Discipline Core", credits: "2 Credits" },
            ],
        },
        { id: 1, title: "Semester 2", credits: "15 Credits", courses: [] },
        { id: 2, title: "Semester 3", credits: "15 Credits", courses: [] },
        { id: 3, title: "Semester 4", credits: "15 Credits", courses: [] },
        { id: 4, title: "Semester 5", credits: "15 Credits", courses: [] },
    ];

    return (
        <section className="py-16 lg:py-24 bg-brand-light">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10 lg:mb-16 space-y-4">
                    <h2 className="text-3xl lg:text-5xl font-bold font-outfit text-brand-dark">
                        M.Tech DSAI Program
                    </h2>
                    <p className="text-gray-500 font-medium text-sm lg:text-base">
                        Data Science & Artificial Intelligence with 5 Specializations
                    </p>

                    <div className="flex justify-center mt-8 lg:mt-10">
                        <div className="bg-white p-1 rounded-none shadow-sm border border-gray-100 flex gap-1">
                            <button
                                onClick={() => setActiveTab("structure")}
                                className={`px-4 lg:px-8 py-3 rounded-none font-bold text-xs lg:text-sm transition-all ${activeTab === "structure" ? "bg-brand-blue text-white shadow-md" : "text-gray-500 hover:text-brand-dark"}`}
                            >
                                Program Structure
                            </button>
                            <button
                                onClick={() => setActiveTab("specializations")}
                                className={`px-4 lg:px-8 py-3 rounded-none font-bold text-xs lg:text-sm transition-all flex items-center gap-2 ${activeTab === "specializations" ? "bg-brand-blue text-white shadow-md" : "text-gray-500 hover:text-brand-dark"}`}
                            >
                                Specializations <span className="text-[10px] opacity-60">→</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    {semesters.map((sem, index) => (
                        <div key={index} className="bg-white rounded-none overflow-hidden border-b border-gray-100">
                            <button
                                onClick={() => setOpenSemester(openSemester === index ? null : index)}
                                className="w-full px-6 lg:px-8 py-6 lg:py-8 flex justify-between items-center hover:bg-gray-50/50 transition-colors group"
                            >
                                <div className="flex items-center gap-4 lg:gap-6">
                                    <span className="text-xl lg:text-3xl font-medium text-gray-900">{sem.title}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm lg:text-base text-gray-500 font-medium font-m-plus-1-code">{sem.credits}</span>
                                    <div className={`transition-transform duration-300 ${openSemester === index ? 'rotate-180 text-brand-blue' : 'text-brand-blue'}`}>
                                        <div className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] ${openSemester === index ? 'border-b-brand-blue' : 'border-b-brand-blue rotate-180'}`} />
                                    </div>
                                </div>
                            </button>

                            <AnimatePresence>
                                {openSemester === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden bg-gray-50/50"
                                    >
                                        <div className="p-8 lg:p-12">
                                            {sem.courses.length > 0 ? (
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-left border-collapse">
                                                        <thead>
                                                            <tr className="text-[10px] text-gray-400 font-bold uppercase tracking-wider border-b border-transparent">
                                                                <th className="pb-2 w-[60%] font-normal">Course</th>
                                                                <th className="pb-2 w-[20%] font-normal">Type</th>
                                                                <th className="pb-2 w-[20%] font-normal">Credits</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {sem.courses.map((course, cIdx) => (
                                                                <tr key={cIdx} className="group border-b border-dashed border-gray-200 last:border-0">
                                                                    <td className="py-6 font-medium text-gray-800 text-sm lg:text-base pr-4">{course.name}</td>
                                                                    <td className="py-6 align-middle">
                                                                        <span className="bg-brand-blue text-white text-[10px] font-medium px-3 py-1.5 rounded-sm whitespace-nowrap inline-block">
                                                                            {course.type}
                                                                        </span>
                                                                    </td>
                                                                    <td className="py-6 align-middle">
                                                                        <span className="font-m-plus-1-code text-sm lg:text-base text-gray-800 border-b border-gray-800 leading-tight inline-block">
                                                                            {course.credits}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            ) : (
                                                <p className="text-center text-gray-400 py-4 italic">Next semester curriculum coming soon...</p>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProgramStructure;
