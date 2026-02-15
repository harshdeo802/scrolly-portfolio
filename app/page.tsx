"use client";

import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import CursorSpotlight from "./components/CursorSpotlight";
import AmbientMusic from "./components/AmbientMusic";
import FeaturedProject from "./components/FeaturedProject";
import LoadingScreen from "./components/LoadingScreen";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white relative">
      <LoadingScreen />
      <CursorSpotlight />
      <AmbientMusic />
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

      {/* Honda 0 Series Featured Project */}
      <FeaturedProject />

      {/* Quote / Motto Section — inspired by minhpham.design */}
      <section className="relative h-screen flex items-center justify-center bg-[#121212] overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center px-6 max-w-4xl relative z-10"
        >
          <p className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8">My Philosophy</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            <span className="text-white/90">Performance</span>
            <br />
            <span className="text-white/40">is not an afterthought</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              — it&apos;s the architecture.
            </span>
          </h2>
        </motion.div>
      </section>

      <section id="projects">
        <Projects />
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center justify-center bg-[#121212] border-t border-white/5 overflow-hidden">

        {/* Background grain texture */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#021012] via-[#050a0a]/80 to-transparent pointer-events-none" />

        {/* Sharp Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/20 blur-[80px] rounded-full pointer-events-none" />

        {/* Subtle Glow Layer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="text-center relative z-10 flex flex-col items-center gap-10 px-6">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em]"
          >
            Get in Touch
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white/90"
          >
            Let&apos;s work
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">together.</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-6"
          >
            {[
              { href: "mailto:harshdeo802@gmail.com", icon: FaEnvelope, label: "Email", hoverColor: "hover:text-teal-400", hoverShadow: "hover:shadow-teal-500/20" },
              { href: "https://www.linkedin.com/in/harsh-deo-445245200/", icon: FaLinkedin, label: "LinkedIn", hoverColor: "hover:text-blue-400", hoverShadow: "hover:shadow-blue-500/20" },
              { href: "https://www.instagram.com/musingswithjayson/", icon: FaInstagram, label: "Instagram", hoverColor: "hover:text-pink-500", hoverShadow: "hover:shadow-pink-500/20" },
            ].map(({ href, icon: Icon, label, hoverColor, hoverShadow }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`group relative p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:scale-110 hover:border-white/20 ${hoverColor} ${hoverShadow} hover:shadow-lg transition-all duration-300`}
                aria-label={label}
              >
                <Icon size={28} />
                {/* Tooltip */}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs font-mono rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
                  {label}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
