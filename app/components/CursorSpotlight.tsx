"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorSpotlight() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHoveringText, setIsHoveringText] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring-based following
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    // Track if on mobile (no custom cursor)
    const isMobileRef = useRef(false);

    useEffect(() => {
        // Disable on touch devices
        isMobileRef.current = window.matchMedia("(pointer: coarse)").matches;
        if (isMobileRef.current) return;

        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Detect hovering over text elements
        const handleElementCheck = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isText =
                target.closest("h1, h2, h3, h4, h5, h6, p, span, li, a, button") !== null;
            setIsHoveringText(isText);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousemove", handleElementCheck);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);
        document.documentElement.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousemove", handleElementCheck);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
            document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    // Don't render on mobile
    if (typeof window !== "undefined" && isMobileRef.current) return null;

    return (
        <>
            {/* Outer glow ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
                style={{
                    x,
                    y,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHoveringText ? 120 : 40,
                    height: isHoveringText ? 120 : 40,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    width: { type: "spring", stiffness: 300, damping: 25 },
                    height: { type: "spring", stiffness: 300, damping: 25 },
                    opacity: { duration: 0.2 },
                }}
            >
                <div className="w-full h-full rounded-full bg-white" />
            </motion.div>

            {/* Hide default cursor site-wide */}
            <style jsx global>{`
                @media (pointer: fine) {
                    * {
                        cursor: none !important;
                    }
                }
            `}</style>
        </>
    );
}
