import Link from "next/link";

const projects = [
    {
        title: "Latency Reduction",
        category: "Performance",
        description: "Reduced real-time processing latency by 54% in production pipelines for mission-critical applications.",
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "System Throughput",
        category: "Multithreading",
        description: "Boosted throughput by 40% by architecting and developing 8+ concurrent multithreaded components.",
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "Build Automation",
        category: "DevOps",
        description: "Cut build times by 35% by implementing automated CI/CD workflows and optimizing dependencies.",
        gradient: "from-orange-500/20 to-red-500/20",
    },
    {
        title: "System Reliability",
        category: "Debugging",
        description: "Resolved 25+ complex runtime issues and memory leaks, significantly improving stability in production.",
        gradient: "from-green-500/20 to-emerald-500/20",
    },
];

export default function Projects() {
    return (
        <div className="relative z-20 bg-[#121212] py-32 px-6 md:px-12 w-full min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight">
                    Impact & Achievements
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 rounded-2xl border border-white/10 overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:border-white/20`}
                        >
                            {/* Glass Background */}
                            <div className="absolute inset-0 backdrop-blur-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
                                <div>
                                    <span className="text-xs font-mono text-gray-400 tracking-widest uppercase border border-gray-700 px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mt-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mt-4 text-lg">
                                        {project.description}
                                    </p>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 text-center">
                    <p className="text-white/30 text-sm uppercase tracking-widest">
                        © {new Date().getFullYear()} Portfolio
                    </p>
                </div>
            </div>
        </div>
    );
}
