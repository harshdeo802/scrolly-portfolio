"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SVG gauge needle component
function GaugeNeedle({ angle }: { angle: number }) {
    return (
        <motion.div
            className="absolute bottom-0 left-1/2 origin-bottom"
            style={{ width: 2, height: 44, marginLeft: -1 }}
            animate={{ rotate: angle }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
        >
            <div className="w-full h-full bg-gradient-to-t from-red-600 to-red-400 rounded-full" />
            <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
        </motion.div>
    );
}

// Tick marks for the gauge
function GaugeTicks({ count, radius }: { count: number; radius: number }) {
    return (
        <>
            {Array.from({ length: count }, (_, i) => {
                const angle = -135 + (i / (count - 1)) * 270;
                const rad = (angle * Math.PI) / 180;
                const isMajor = i % 3 === 0;
                const innerR = isMajor ? radius - 10 : radius - 6;
                const x1 = 50 + Math.cos(rad) * innerR;
                const y1 = 50 + Math.sin(rad) * innerR;
                const x2 = 50 + Math.cos(rad) * radius;
                const y2 = 50 + Math.sin(rad) * radius;
                return (
                    <line
                        key={i}
                        x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke={isMajor ? "#888" : "#444"}
                        strokeWidth={isMajor ? 1.5 : 0.8}
                    />
                );
            })}
        </>
    );
}

// Indicator light
function StatusLight({ label, active, color, delay }: { label: string; active: boolean; color: string; delay: number }) {
    return (
        <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay }}
        >
            <motion.div
                className="w-2 h-2 rounded-full"
                animate={{
                    backgroundColor: active ? color : "#333",
                    boxShadow: active ? `0 0 8px ${color}88` : "none",
                }}
                transition={{ duration: 0.3 }}
            />
            <span className="text-[9px] font-mono uppercase tracking-wider" style={{ color: active ? color : "#555" }}>
                {label}
            </span>
        </motion.div>
    );
}

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [mounted, setMounted] = useState(false);

    // Needle angles: -135 (min) to +135 (max)
    const rpmAngle = -135 + (progress / 100) * 200; // Goes most of the way
    const speedAngle = -135 + (progress / 100) * 270; // Full sweep

    useEffect(() => {
        setMounted(true);

        // Disable scrolling during loading
        document.body.style.overflow = "hidden";

        const duration = 3200;
        const interval = 30;
        const steps = duration / interval;
        let current = 0;

        const timer = setInterval(() => {
            current++;
            const t = current / steps;
            // Ease with slight overshoot for needle feel
            const eased = t < 0.8
                ? 1 - Math.pow(1 - t / 0.8, 3)
                : 1 + Math.sin((t - 0.8) / 0.2 * Math.PI) * 0.03;
            setProgress(Math.min(Math.round(eased * 100), 100));

            if (current >= steps) {
                clearInterval(timer);
                setTimeout(() => {
                    document.body.style.overflow = "";
                    setIsLoading(false);
                }, 500);
            }
        }, interval);

        return () => {
            clearInterval(timer);
            document.body.style.overflow = "";
        };
    }, []);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="dashboard-loader"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[99999] bg-[#0a0a0a] flex flex-col items-center justify-center"
                >
                    {/* Subtle ambient glow */}
                    <motion.div
                        animate={{ opacity: [0.03, 0.08, 0.03] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500 blur-[150px] rounded-full pointer-events-none"
                    />

                    {/* Dashboard cluster */}
                    <div className="relative flex items-center gap-2 sm:gap-6 md:gap-12">
                        {/* RPM Gauge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36"
                        >
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                {/* Outer ring */}
                                <circle cx="50" cy="50" r="46" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                                <circle cx="50" cy="50" r="44" fill="#0d0d0d" stroke="#222" strokeWidth="0.5" />
                                <GaugeTicks count={19} radius={42} />
                                {/* RPM label */}
                                <text x="50" y="70" textAnchor="middle" fill="#555" fontSize="6" fontFamily="monospace">RPM</text>
                                <text x="50" y="78" textAnchor="middle" fill="#444" fontSize="4" fontFamily="monospace">×1000</text>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-16 h-8 sm:w-24 sm:h-12 md:w-28 md:h-14">
                                    <GaugeNeedle angle={rpmAngle} />
                                </div>
                            </div>
                        </motion.div>

                        {/* Center: Digital speed display */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-center w-16 sm:w-auto"
                        >
                            <motion.p
                                className="text-3xl sm:text-5xl md:text-7xl font-bold font-mono tabular-nums"
                                style={{
                                    color: "#fff",
                                    textShadow: "0 0 20px rgba(255,255,255,0.15)",
                                }}
                            >
                                {progress}
                            </motion.p>
                            <p className="text-[8px] sm:text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em] mt-1">
                                System
                            </p>
                        </motion.div>

                        {/* Speed Gauge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36"
                        >
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <circle cx="50" cy="50" r="46" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                                <circle cx="50" cy="50" r="44" fill="#0d0d0d" stroke="#222" strokeWidth="0.5" />
                                <GaugeTicks count={25} radius={42} />
                                <text x="50" y="70" textAnchor="middle" fill="#555" fontSize="6" fontFamily="monospace">km/h</text>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-24 h-12 md:w-28 md:h-14">
                                    <GaugeNeedle angle={speedAngle} />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Status indicators row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-5 md:gap-8 mt-8"
                    >
                        <StatusLight label="Engine" active={progress > 15} color="#22c55e" delay={0.8} />
                        <StatusLight label="ADAS" active={progress > 35} color="#3b82f6" delay={1.0} />
                        <StatusLight label="Camera" active={progress > 55} color="#a855f7" delay={1.2} />
                        <StatusLight label="Sensors" active={progress > 75} color="#f59e0b" delay={1.4} />
                        <StatusLight label="Ready" active={progress >= 100} color="#22c55e" delay={1.6} />
                    </motion.div>

                    {/* Thin progress bar at bottom */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48">
                        <div className="h-[1px] w-full bg-white/5 overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-green-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
