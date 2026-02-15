"use client";

import { useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

export default function ScrollyCanvas({ numFrames }: { numFrames: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
        new Array(numFrames).fill(false)
    );
    const lastFrameRef = useRef<number>(-1);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,
        stiffness: 100,
        damping: 20,
        restDelta: 0.001,
    });

    // Set canvas size on mount + resize (instead of every frame)
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: false });
        ctxRef.current = ctx;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            if (ctx) ctx.scale(dpr, dpr);
            // Re-render current frame after resize
            if (lastFrameRef.current >= 0) {
                renderFrame(lastFrameRef.current);
            }
        };

        const observer = new ResizeObserver(resizeCanvas);
        observer.observe(document.documentElement);
        resizeCanvas();

        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Progressive image loading: priority frames first, then batched idle loading
    useEffect(() => {
        const imgArray: HTMLImageElement[] = new Array(numFrames);
        const loadedState = new Array(numFrames).fill(false);

        const loadImage = (i: number): Promise<void> => {
            return new Promise((resolve) => {
                const img = new Image();
                const filename = `frame_${i.toString().padStart(3, "0")}.webp`;
                img.src = `/sequence/${filename}`;
                img.onload = () => {
                    loadedState[i] = true;
                    setImagesLoaded((prev) => {
                        const next = [...prev];
                        next[i] = true;
                        return next;
                    });
                    resolve();
                };
                img.onerror = () => resolve(); // Don't block on failure
                imgArray[i] = img;
            });
        };

        const loadAll = async () => {
            // Phase 1: Load first 20 frames immediately (critical for initial view)
            const priorityCount = Math.min(20, numFrames);
            const priorityPromises: Promise<void>[] = [];
            for (let i = 0; i < priorityCount; i++) {
                priorityPromises.push(loadImage(i));
            }
            await Promise.all(priorityPromises);

            // Phase 2: Load remaining frames in batches during idle time
            const batchSize = 10;
            for (let start = priorityCount; start < numFrames; start += batchSize) {
                const end = Math.min(start + batchSize, numFrames);
                const batchPromises: Promise<void>[] = [];
                for (let i = start; i < end; i++) {
                    batchPromises.push(loadImage(i));
                }
                // Yield to main thread between batches
                await new Promise<void>((resolve) => {
                    if ("requestIdleCallback" in window) {
                        (window as Window).requestIdleCallback(() => resolve());
                    } else {
                        setTimeout(resolve, 16);
                    }
                });
                await Promise.all(batchPromises);
            }
        };

        loadAll();
        setImages(imgArray);
    }, [numFrames]);

    const renderFrame = useCallback(
        (index: number) => {
            const canvas = canvasRef.current;
            const ctx = ctxRef.current;
            if (!canvas || !ctx) return;

            // Find the requested frame, or fallback to nearest loaded frame
            let frameToDraw = index;
            if (!imagesLoaded[index]) {
                let found = false;
                for (let i = index; i >= 0; i--) {
                    if (imagesLoaded[i]) {
                        frameToDraw = i;
                        found = true;
                        break;
                    }
                }
                if (!found && index > 0) return;
            }

            const img = images[frameToDraw];
            if (!img || !imagesLoaded[frameToDraw]) return;

            // Skip re-render if same frame
            if (lastFrameRef.current === frameToDraw) return;
            lastFrameRef.current = frameToDraw;

            const dpr = window.devicePixelRatio || 1;
            const displayWidth = canvas.width / dpr;
            const displayHeight = canvas.height / dpr;

            // Clear canvas
            ctx.clearRect(0, 0, displayWidth, displayHeight);

            // Object-fit: cover logic
            const scale = Math.max(
                displayWidth / img.width,
                displayHeight / img.height
            );
            const x = displayWidth / 2 - (img.width / 2) * scale;
            const y = displayHeight / 2 - (img.height / 2) * scale;

            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        },
        [images, imagesLoaded]
    );

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        const frameIndex = Math.min(
            numFrames - 1,
            Math.floor(latest * numFrames)
        );
        renderFrame(frameIndex);
    });

    return (
        <div ref={containerRef} className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full"
                    style={{ imageRendering: "auto" }}
                />
            </div>
        </div>
    );
}
