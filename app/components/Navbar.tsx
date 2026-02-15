"use client";

import { useEffect, useState } from "react";
import { FiHome, FiUser, FiBriefcase, FiZap, FiMail, FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

const navItems = [
    { name: "Home", id: "home", icon: FiHome },
    { name: "About", id: "about", icon: FiUser },
    { name: "Experience", id: "experience", icon: FiBriefcase },
    { name: "Impacts", id: "projects", icon: FiZap },
    { name: "Contact", id: "contact", icon: FiMail },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [showScrollTop, setShowScrollTop] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        // Scroll handler: only toggles scroll-to-top button visibility
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        // Single IntersectionObserver for active section tracking (created ONCE)
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -60% 0px" }
        );

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* Desktop Vertical Navbar */}
            <div className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 z-50">
                <nav className="flex flex-col gap-4 bg-black/40 backdrop-blur-xl px-3 py-6 rounded-full border border-white/10 shadow-2xl">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="relative group p-3 rounded-full transition-all duration-300 hover:bg-white/10"
                            aria-label={item.name}
                        >
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="active-bg"
                                    className="absolute inset-0 bg-white/20 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            <item.icon
                                className={`text-xl transition-colors duration-300 ${activeSection === item.id ? "text-white" : "text-white/60 group-hover:text-white"
                                    }`}
                            />

                            {/* Tooltip */}
                            <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
                                {item.name}
                            </span>
                        </button>
                    ))}
                </nav>
            </div>

            {/* Scroll To Top Button */}
            <div className="fixed bottom-8 right-8 z-50">
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={scrollToTop}
                        className="p-4 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition-colors"
                        aria-label="Scroll to top"
                    >
                        <FiArrowUp size={24} />
                    </motion.button>
                )}
            </div>
        </>
    );
}
