"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AmbientMusic() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        audioRef.current = new Audio("/audio/ambient.mp3");
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3;

        // Attempt autoplay
        audioRef.current.play().then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
        }).catch(() => {
            // Browser blocked autoplay — start on first click anywhere
            const startOnClick = () => {
                if (audioRef.current && !audioRef.current.paused) return;
                audioRef.current?.play().then(() => {
                    setIsPlaying(true);
                    setHasInteracted(true);
                }).catch(() => { });
            };
            document.addEventListener("click", startOnClick, { once: true });
        });

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (!hasInteracted) setHasInteracted(true);

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(() => {
                // Browser blocked autoplay — user will need to click again
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed top-6 right-6 z-50">
            <motion.button
                onClick={toggleMusic}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors group"
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                {isPlaying ? (
                    /* Animated equalizer bars */
                    <div className="flex items-end gap-[3px] h-4">
                        {[0, 0.2, 0.1].map((delay, i) => (
                            <motion.div
                                key={i}
                                className="w-[3px] bg-purple-400 rounded-full"
                                animate={{
                                    height: ["6px", "16px", "8px", "14px", "6px"],
                                }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    delay,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    /* Muted icon */
                    <div className="flex items-end gap-[3px] h-4 opacity-40 group-hover:opacity-70 transition-opacity">
                        <div className="w-[3px] h-[6px] bg-gray-400 rounded-full" />
                        <div className="w-[3px] h-[10px] bg-gray-400 rounded-full" />
                        <div className="w-[3px] h-[4px] bg-gray-400 rounded-full" />
                    </div>
                )}
            </motion.button>
        </div>
    );
}
