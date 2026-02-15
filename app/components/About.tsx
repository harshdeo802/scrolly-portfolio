"use client";

import {
    SiCplusplus,
    SiC,
    SiPython,
    SiGnubash,
    SiLinux,
    SiGit,
    SiGitlab,
    SiCmake,
    SiDocker
} from "react-icons/si";
import { VscDebug } from "react-icons/vsc";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface SkillItem {
    name: string;
    icon: IconType;
    color: string;
}

export default function About() {
    const languages: SkillItem[] = [
        { name: "C++ (11/14/17/21)", icon: SiCplusplus, color: "text-blue-500" },
        { name: "C Language", icon: SiC, color: "text-blue-300" },
        { name: "Python", icon: SiPython, color: "text-yellow-400" },
        { name: "Shell Scripting", icon: SiGnubash, color: "text-green-500" },
    ];

    const tools: SkillItem[] = [
        { name: "Linux", icon: SiLinux, color: "text-yellow-500" },
        { name: "Git", icon: SiGit, color: "text-red-500" },
        { name: "GitLab CI/CD", icon: SiGitlab, color: "text-orange-500" },
        { name: "CMake", icon: SiCmake, color: "text-green-600" },
        { name: "Docker", icon: SiDocker, color: "text-blue-400" },
        { name: "GDB / Valgrind", icon: VscDebug, color: "text-gray-400" },
    ];

    const coreConcepts = [
        "OOP",
        "Multithreading & Concurrency",
        "Memory Management",
        "STL",
        "Performance Optimization",
        "System-Level Development"
    ];

    // Combine all skills for marquee
    const allSkills = [...languages, ...tools];

    const MarqueeRow = ({ items, direction = "left" }: { items: SkillItem[]; direction?: "left" | "right" }) => {
        // Double the items for seamless loop
        const doubled = [...items, ...items, ...items, ...items];
        return (
            <div className="overflow-hidden relative py-3 group">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#121212] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#121212] to-transparent z-10" />

                <div
                    className={`flex gap-4 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} group-hover:[animation-play-state:paused]`}
                >
                    {doubled.map((skill, i) => (
                        <div
                            key={`${skill.name}-${i}`}
                            className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-full whitespace-nowrap hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            <skill.icon className={`text-xl ${skill.color}`} />
                            <span className="text-sm font-mono text-gray-300">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    return (
        <section className="relative z-20 bg-[#121212] pt-24 pb-12 px-6 md:px-12 text-white">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-white/90"
                >
                    About Me
                </motion.h2>
                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-xl leading-relaxed text-gray-300 mb-8 max-w-3xl"
                >
                    I am a <span className="text-purple-400 font-semibold">performance-focused C++ Software Engineer</span> with 2.5+ years of professional experience building efficient and reliable software systems. My core expertise lies in modern C++, multithreading, performance optimization, and debugging complex runtime issues. I enjoy solving challenging engineering problems and building scalable, maintainable software used in production environments.
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-bold mb-4 text-white/90">Career Goal</h3>
                    <p className="text-lg leading-relaxed text-gray-400 max-w-3xl">
                        Seeking opportunities as a C++ Software Engineer where I can contribute to building high-quality products, optimize system performance, and solve complex engineering problems.
                    </p>
                </motion.div>

                {/* Marquee Skill Cards */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-16"
                >
                    <h3 className="text-lg font-mono text-purple-400 mb-6 uppercase tracking-widest border-b border-white/10 pb-2">
                        Tech Stack
                    </h3>
                    <MarqueeRow items={allSkills} direction="left" />
                    <MarqueeRow items={[...allSkills].reverse()} direction="right" />
                </motion.div>

                {/* Core Concepts */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                >
                    <h3 className="text-lg font-mono text-blue-400 mb-6 uppercase tracking-widest border-b border-white/10 pb-2">Core Technical</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {coreConcepts.map((concept) => (
                            <motion.li
                                key={concept}
                                variants={fadeInUp}
                                transition={{ duration: 0.4 }}
                                className="flex items-center text-gray-300 bg-white/[0.03] rounded-lg px-4 py-3 border border-white/5 hover:border-white/15 transition-colors"
                            >
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 shrink-0"></span>
                                {concept}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
