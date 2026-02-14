export default function About() {
    const skills = {
        languages: ["C++ (C++11/14/17/21)", "C", "Python (basic)", "Shell Scripting"],
        core: ["OOP", "Multithreading & Concurrency", "Memory Management", "STL", "Performance Optimization", "System-Level Development"],
        tools: ["Linux", "Git", "GitLab CI/CD", "CMake", "Docker", "GDB/Valgrind"],
    };

    return (
        <section className="relative z-20 bg-[#121212] pt-24 pb-12 px-6 md:px-12 text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-white/90">
                    Professional Identity
                </h2>
                <p className="text-xl leading-relaxed text-gray-300 mb-12">
                    I am a <span className="text-purple-400 font-semibold">performance-focused C++ Software Engineer</span> with 2.5+ years of professional experience building efficient and reliable software systems. My core expertise lies in modern C++, multithreading, performance optimization, and debugging complex runtime issues. I enjoy solving challenging engineering problems and building scalable, maintainable software used in production environments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-t border-white/10 pt-16">
                    <div>
                        <h3 className="text-lg font-mono text-purple-400 mb-4 uppercase tracking-widest">Languages</h3>
                        <ul className="space-y-2">
                            {skills.languages.map((skill) => (
                                <li key={skill} className="text-gray-400">{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-mono text-blue-400 mb-4 uppercase tracking-widest">Core Technical</h3>
                        <ul className="space-y-2">
                            {skills.core.map((skill) => (
                                <li key={skill} className="text-gray-400">{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-mono text-green-400 mb-4 uppercase tracking-widest">Platforms & Tools</h3>
                        <ul className="space-y-2">
                            {skills.tools.map((skill) => (
                                <li key={skill} className="text-gray-400">{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
