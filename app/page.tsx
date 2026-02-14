import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white relative">
      <Navbar />

      <section id="home" className="relative">
        <Overlay />
        <ScrollyCanvas numFrames={192} />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-[#121212] border-t border-white/5 relative overflow-hidden">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#021012] via-[#050a0a]/80 to-transparent pointer-events-none" />

        {/* Sharp Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/20 blur-[80px] rounded-full pointer-events-none" />

        {/* Subtle Glow Layer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="text-center relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white/50">
            Let's work together.
          </h2>

          <div className="flex gap-6">
            <a
              href="mailto:harshdeo802@gmail.com"
              className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:scale-110 hover:text-teal-400 transition-all duration-300 shadow-lg"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-deo-445245200/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:scale-110 hover:text-blue-400 transition-all duration-300 shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="https://www.instagram.com/musingswithjayson/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:scale-110 hover:text-pink-500 transition-all duration-300 shadow-lg"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
