import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <div className="relative">
        <Overlay />
        <ScrollyCanvas numFrames={192} />
      </div>
      <About />
      <Experience />
      <Projects />

      <div className="h-screen flex items-center justify-center bg-[#121212] border-t border-white/5">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white/50">
            Let's work together.
          </h2>
          <a href="mailto:harshdeo802@gmail.com" className="text-xl text-white mt-4 border-b border-white pb-1 inline-block hover:opacity-70 transition-opacity">
            harshdeo802@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
