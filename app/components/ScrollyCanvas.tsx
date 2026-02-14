"use client";

import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollyCanvas({ numFrames }: { numFrames: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll();

    // Load images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        for (let i = 0; i < numFrames; i++) {
            const img = new Image();
            // Assumes frames are named frame_000_delay-0.0XXs.png, etc.
            // We need to match the actual filenames. 
            // Based on the file listing: frame_000_delay-0.042s.png
            // The delay part changes, so we might need a more robust way or just standard naming.
            // For now, I'll use a standardized name assumption or I need to handle the variable filenames.
            // Since I can't easily glob in the browser, I might need to generate a manifest or rename them.
            // Let's assume for this step I will rename them or use a pattern if possible.
            // Actually, the user has them as `frame_000_delay-...`. 
            // I will implement a prop or a manifest-based loading strategy, 
            // but for simplicity in this generated code, I'll assume I'll create a manifest.json
            // Or I can just try to load `frame_${i.toString().padStart(3, '0')}_delay-0.042s.png` 
            // but the delay varies! 
            // CRITICAL: I need to generate a list of filenames to load.
            // I will create a `public/sequence/manifest.json` in a separate step.

            const filename = `frame_${i.toString().padStart(3, "0")}.png`;
            img.src = `/sequence/${filename}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === numFrames) setIsLoaded(true);
            };
            imgArray.push(img);
        }
        setImages(imgArray);
    }, [numFrames]);

    // Render Frame
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Clear and draw
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Object fit: cover logic
        const img = images[index];
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded) return;
        const frameIndex = Math.min(
            numFrames - 1,
            Math.floor(latest * numFrames)
        );
        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) renderFrame(0);
    }, [isLoaded]);

    return (
        <div className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="block w-full h-full" />
            </div>
        </div>
    );
}
