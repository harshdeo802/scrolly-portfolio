"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Latency Reduction",
        category: "Performance",
        stat: "54%",
        description: "Reduced real-time processing latency by 54% in production pipelines for mission-critical applications.",
        gradient: "from-blue-500/20 to-cyan-500/20",
        borderHover: "hover:border-blue-500/30",
    },
    {
        title: "System Throughput",
        category: "Multithreading",
        stat: "40%",
        description: "Boosted throughput by 40% by architecting and developing 8+ concurrent multithreaded components.",
        gradient: "from-purple-500/20 to-pink-500/20",
        borderHover: "hover:border-purple-500/30",
    },
    {
        title: "Build Automation",
        category: "DevOps",
        stat: "35%",
        description: "Cut build times by 35% by implementing automated CI/CD workflows and optimizing dependencies.",
        gradient: "from-orange-500/20 to-red-500/20",
        borderHover: "hover:border-orange-500/30",
    },
    {
        title: "System Reliability",
        category: "Debugging",
        stat: "25+",
        description: "Resolved 25+ complex runtime issues and memory leaks, significantly improving stability in production.",
        gradient: "from-green-500/20 to-emerald-500/20",
        borderHover: "hover:border-green-500/30",
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

export default function Projects() {
    return (
        <div className="relative z-20 bg-[#121212] py-32 px-6 md:px-12 w-full min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight"
                >
                    Impact & Achievements
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative p-5 rounded-xl border border-white/10 overflow-hidden transform transition-all duration-500 hover:scale-[1.02] ${project.borderHover}`}
                        >
                            {/* Glass Background */}
                            <div className="absolute inset-0 backdrop-blur-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full justify-between min-h-[240px]">
                                <div>
                                    <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase border border-gray-700 px-2 py-0.5 rounded-full">
                                        {project.category}
                                    </span>

                                    {/* Big stat number */}
                                    <div className="text-4xl font-bold text-white/10 mt-3 group-hover:text-white/20 transition-colors duration-500">
                                        {project.stat}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="mt-32 text-center"
                >
                    <p className="text-white/30 text-sm uppercase tracking-widest">
                        © {new Date().getFullYear()} Harsh Deo
                    </p>
                    <p className="text-white/15 text-[10px] mt-2">
                        Music by <a href="https://www.bensound.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/30 transition-colors">Bensound.com</a> · Benjamin Tissot
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
