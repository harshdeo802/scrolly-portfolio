"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Section 1: Name
    // Stays visible 0->0.25, Fades out 0.25->0.35. (Ends at 0.35)
    const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.35], [0, -150]);

    // ** GAP of 0.05 (5% scroll) where both are opacity 0 **

    // Section 2: Building high-performance systems
    // Starts at 0.40. Fades in 0.40->0.50, Stays visible 0.50->0.80, Fades out 0.80->0.90
    const opacity2 = useTransform(scrollYProgress, [0.40, 0.50, 0.80, 0.90], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.40, 0.90], [100, 0]); // Enters from bottom

    // Section 3: Multithreading...
    const opacity3 = useTransform(scrollYProgress, [0.90, 0.95, 1], [0, 1, 1]);
    const y3 = useTransform(scrollYProgress, [0.90, 1], [100, 0]);

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                {/* Section 1 */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-lg">
                        Harsh Deo.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mt-4 tracking-widest uppercase">
                        C++ Software Engineer
                    </p>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-32 md:translate-x-0 md:translate-y-[-50%] text-center md:text-left w-full px-4 md:w-auto"
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight break-words">
                        Building <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-2 inline-block">
                            high-performance
                        </span> <br />
                        systems.
                    </h2>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-32 md:translate-x-0 md:translate-y-[-50%] text-center md:text-right w-full px-4 md:w-auto"
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                        Multithreading, <br />
                        Optimization & <br />
                        Linux.
                    </h2>
                </motion.div>
            </div>
        </div>
    );
}
