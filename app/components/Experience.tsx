"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Software Engineer",
        company: "KPIT Technologies Ltd.",
        location: "Pune",
        period: "Jan 2025 – Present",
        points: [
            "Designed and developed 4+ production-grade C++ applications for performance-critical environments.",
            "Built real-time processing pipelines and reduced system latency by 54%.",
            "Developed 8+ multithreaded components improving throughput by 40%.",
            "Automated build and testing workflows using CI/CD pipelines, reducing build time by 35%.",
            "Resolved 25+ complex runtime issues through profiling and debugging.",
        ]
    },
    {
        role: "Associate Software Engineer",
        company: "KPIT Technologies Ltd.",
        location: "Pune",
        period: "Jan 2024 – Dec 2024",
        points: [
            "Developed and maintained 5+ scalable C++ modules.",
            "Optimized processing pipelines reducing latency by 28–50%.",
            "Built reusable C++ utilities reducing external dependencies by 30%.",
            "Implemented unit and integration tests achieving 95% coverage.",
        ]
    },
    {
        role: "Software Engineer Intern",
        company: "KPIT Technologies Ltd.",
        location: "Pune",
        period: "Jun 2023 – Jan 2024",
        points: [
            "Developed 15+ C and C++ modules for Linux-based systems.",
            "Resolved 35+ defects improving system stability by 25%.",
            "Worked with build systems and version control workflows.",
        ]
    }
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const staggerItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

export default function Experience() {
    return (
        <section className="relative z-20 bg-[#121212] py-12 px-6 md:px-12 text-white border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-white/90"
                >
                    Work Experience
                </motion.h2>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative pl-8 border-l border-white/20"
                        >
                            {/* Timeline dot */}
                            <motion.span
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                                className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                            />

                            <div className="mb-2">
                                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                <div className="flex flex-wrap text-sm text-gray-400 font-mono mt-1 gap-4 uppercase tracking-wider">
                                    <span>{exp.company}</span>
                                    <span>•</span>
                                    <span>{exp.period}</span>
                                    <span>•</span>
                                    <span>{exp.location}</span>
                                </div>
                            </div>

                            {/* Each bullet point staggers in */}
                            <motion.ul
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, margin: "-30px" }}
                                className="list-disc list-outside ml-4 space-y-2 mt-4 text-gray-300 leading-relaxed"
                            >
                                {exp.points.map((point, idx) => (
                                    <motion.li
                                        key={idx}
                                        variants={staggerItem}
                                        transition={{ duration: 0.35 }}
                                    >
                                        {point}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    ))}
                </div>

                {/* Education & Certifications */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
                    >
                        <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-2">Education</h3>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <h4 className="text-lg font-semibold text-gray-200">Bachelor of Engineering in Computer Science</h4>
                            <p className="text-gray-400 mt-1">Chandigarh University (2023)</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
                    >
                        <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-2">Certifications</h3>
                        <motion.ul
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            className="space-y-3 text-gray-300"
                        >
                            <motion.li variants={staggerItem} transition={{ duration: 0.35 }} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 shrink-0"></span>
                                Modern C++ & ADAS Training – KPIT Technologies
                            </motion.li>
                            <motion.li variants={staggerItem} transition={{ duration: 0.35 }} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 shrink-0"></span>
                                Grand Finalist – Toycathon 2021
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
