"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function FeaturedProject() {
    return (
        <section className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 overflow-hidden border-t border-white/5">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-4"
                >
                    Featured Project
                </motion.p>

                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold tracking-tight text-white/90 mb-12"
                >
                    Honda 0 Series
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300"> — AD/ADAS</span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Main description card */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="lg:col-span-3 bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-red-500/20 transition-colors group"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            {/* Honda "H" mark */}
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-bold text-white text-xl">
                                H
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Honda Motor Co., Ltd.</p>
                                <p className="text-gray-500 text-xs font-mono">via KPIT Technologies</p>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4">
                            Driver Monitoring System
                        </h3>

                        <p className="text-gray-300 leading-relaxed mb-6">
                            Contributing to Honda&apos;s next-generation <span className="text-red-400 font-medium">Driver Monitoring System (DMS)</span> for the 0 Series EV platform — an ongoing R&amp;D initiative. The system utilizes advanced AI, sensing technology, and recognition/decision-making algorithms to enable safer automated driving experiences.
                        </p>

                        <div className="space-y-3 mb-6">
                            {[
                                "Built real-time C++ inference pipelines for driver state detection and behavior analysis",
                                "Ported AI perception models to embedded hardware, optimizing for low-latency execution",
                                "Developed end-to-end processing pipelines integrating pose estimation and gaze tracking modules",
                                "Optimized system performance for safety-critical, real-time response requirements",
                            ].map((point, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0" />
                                    {point}
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://0.honda/en/about/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-mono text-red-400 hover:text-red-300 transition-colors group/link"
                        >
                            Learn about Honda 0 Series
                            <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Side stats */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="lg:col-span-2 grid grid-cols-2 lg:flex lg:flex-col gap-4"
                    >
                        {[
                            { label: "Domain", value: "AD/ADAS", sublabel: "Autonomous Driving" },
                            { label: "Tech", value: "C++17", sublabel: "Real-time Systems" },
                            { label: "Focus", value: "DMS", sublabel: "Driver Monitoring" },
                            { label: "Platform", value: "0 Series", sublabel: "Next-gen Honda EV" },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-red-500/20 transition-colors flex-1"
                            >
                                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">{stat.label}</p>
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{stat.sublabel}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
