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

    const SkillIcon = ({ item }: { item: SkillItem }) => (
        <div className="group relative flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
            <item.icon className={`text-4xl ${item.color} mb-0 transition-all duration-300 group-hover:scale-110 group-hover:mb-2`} />

            {/* Text Reveal on Hover */}
            <span className="absolute bottom-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-xs font-mono text-gray-300 tracking-wider text-center w-full px-1">
                {item.name}
            </span>
        </div>
    );

    return (
        <section className="relative z-20 bg-[#121212] pt-24 pb-12 px-6 md:px-12 text-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-white/90">
                    About Me
                </h2>
<<<<<<< HEAD
                <p className="text-xl leading-relaxed text-gray-300 mb-8 max-w-3xl">
                    I am a <span className="text-purple-400 font-semibold">performance-focused C++ Software Engineer</span> with 2.5+ years of professional experience building efficient and reliable software systems. My core expertise lies in modern C++, multithreading, performance optimization, and debugging complex runtime issues. I enjoy solving challenging engineering problems and building scalable, maintainable software used in production environments.
                </p>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-4 text-white/90">Career Goal</h3>
                    <p className="text-lg leading-relaxed text-gray-400 max-w-3xl">
                        Seeking opportunities as a C++ Software Engineer where I can contribute to building high-quality products, optimize system performance, and solve complex engineering problems.
                    </p>
                </div>

=======
                <p className="text-xl leading-relaxed text-gray-300 mb-16 max-w-3xl">
                    I am a <span className="text-purple-400 font-semibold">performance-focused C++ Software Engineer</span> with 2.5+ years of professional experience building efficient and reliable software systems. My core expertise lies in modern C++, multithreading, performance optimization, and debugging complex runtime issues.
                </p>

>>>>>>> 21a1e40bc214ad7a4b6b172e8f13a148232ddc9b
                <div className="space-y-16">
                    {/* Languages - Logo Grid */}
                    <div>
                        <h3 className="text-lg font-mono text-purple-400 mb-8 uppercase tracking-widest border-b border-white/10 pb-2">Languages</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {languages.map((skill) => (
                                <SkillIcon key={skill.name} item={skill} />
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Core Concepts - List */}
                        <div>
                            <h3 className="text-lg font-mono text-blue-400 mb-6 uppercase tracking-widest border-b border-white/10 pb-2">Core Technical</h3>
                            <ul className="space-y-3">
                                {coreConcepts.map((concept) => (
                                    <li key={concept} className="flex items-center text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                                        {concept}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tools - Logo Grid */}
                        <div>
                            <h3 className="text-lg font-mono text-green-400 mb-6 uppercase tracking-widest border-b border-white/10 pb-2">Platforms & Tools</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {tools.map((skill) => (
                                    <SkillIcon key={skill.name} item={skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
