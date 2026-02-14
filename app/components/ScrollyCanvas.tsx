"use client";

import { useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollyCanvas({ numFrames }: { numFrames: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(numFrames).fill(false));

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll progress with a spring
    // mass: inertia, stiffness: rigidity, damping: friction
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    // Preload images progressively
    useEffect(() => {
        const imgArray: HTMLImageElement[] = [];
        // Initialize loaded state
        setImagesLoaded(new Array(numFrames).fill(false));

        for (let i = 0; i < numFrames; i++) {
            const img = new Image();
            const filename = `frame_${i.toString().padStart(3, "0")}.png`;
            img.src = `/sequence/${filename}`;
            img.onload = () => {
                setImagesLoaded((prev) => {
                    const newState = [...prev];
                    newState[i] = true;
                    return newState;
                });
            };
            imgArray.push(img);
        }
        setImages(imgArray);
    }, [numFrames]);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: false }); // Optimization: disable alpha if opaque
        if (!ctx) return;

        // Clear and draw
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Find the requested frame, or fallback to the nearest loaded frame
        let frameToDraw = index;
        if (!imagesLoaded[index]) {
            // Look backwards for a loaded frame
            let found = false;
            for (let i = index; i >= 0; i--) {
                if (imagesLoaded[i]) {
                    frameToDraw = i;
                    found = true;
                    break;
                }
            }
            // If not found backwards, just don't draw (or draw black) to avoid flashing wrong future frames
            if (!found && index > 0) return;
        }

        const img = images[frameToDraw];
        if (!img || !imagesLoaded[frameToDraw]) return;

        // Object fit: cover logic
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        const frameIndex = Math.min(
            numFrames - 1,
            Math.floor(latest * numFrames)
        );
        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    return (
        <div ref={containerRef} className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                <canvas ref={canvasRef} className="block w-full h-full" />
            </div>
        </div>
    );
}
