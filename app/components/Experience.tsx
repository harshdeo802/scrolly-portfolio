export default function Experience() {
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

    return (
        <section className="relative z-20 bg-[#121212] py-12 px-6 md:px-12 text-white border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-white/90">
                    Work Experience
                </h2>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 border-l border-white/20">
                            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
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
                            <ul className="list-disc list-outside ml-4 space-y-2 mt-4 text-gray-300 leading-relaxed">
                                {exp.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-2">Education</h3>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-200">Bachelor of Engineering in Computer Science</h4>
                            <p className="text-gray-400">Chandigarh University (2023)</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-2">Certifications</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Modern C++ & ADAS Training – KPIT Technologies</li>
                            <li>Grand Finalist – Toycathon 2021</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
