"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [50, 0, -50]);

    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [50, 0, -50]);

    return (
        <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10 flex flex-col items-center">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
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
                className="fixed top-1/2 left-10 md:left-32 -translate-y-1/2 max-w-lg"
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    Building <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        high-performance
                    </span> <br />
                    systems.
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="fixed top-1/2 right-10 md:right-32 -translate-y-1/2 max-w-lg text-right"
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    Multithreading, <br />
                    Optimization & <br />
                    Linux.
                </h2>
            </motion.div>
        </div>
    );
}
