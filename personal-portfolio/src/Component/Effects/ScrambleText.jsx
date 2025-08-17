import React, { useEffect, useRef } from 'react';

// --- Reusable WaveText Component ---
// This component now only takes a 'text' prop and applies the wave effect to it.
// Styling should be applied by the parent component or an external CSS file (e.g., app.css).
const WaveText = ({ text = '' }) => {
    const waveTextRef = useRef(null);
    const animationRef = useRef(null);

    // useEffect will re-run if the 'text' prop changes.
    useEffect(() => {
        if (typeof gsap === 'undefined' || !waveTextRef.current) {
            console.error("GSAP library not found or ref not attached.");
            return;
        }

        const letters = gsap.utils.toArray(waveTextRef.current.children);
        
        // Ensure there are letters to animate
        if (letters.length === 0) return;

        const waveAmplitude = -25;
        const staggerAmount = 0.5;
        const animationDuration = 2;
        const wave = { time: 0 };

        animationRef.current = gsap.to(wave, {
            time: 2 * Math.PI,
            ease: "none",
            duration: animationDuration,
            repeat: -1,
            paused: true,
            onUpdate: () => {
                letters.forEach((letter, index) => {
                    const y = waveAmplitude * Math.sin(wave.time + index * staggerAmount);
                    gsap.set(letter, { y: y });
                });
            }
        });

        const handleMouseEnter = () => animationRef.current?.play();
        const handleMouseLeave = () => {
            if (animationRef.current) {
                animationRef.current.pause();
                gsap.to(letters, {
                    y: 0,
                    duration: 0.5,
                    ease: "power1.out"
                });
            }
        };

        const currentWaveText = waveTextRef.current;
        currentWaveText.addEventListener("mouseenter", handleMouseEnter);
        currentWaveText.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup function
        return () => {
            currentWaveText.removeEventListener("mouseenter", handleMouseEnter);
            currentWaveText.removeEventListener("mouseleave", handleMouseLeave);
            animationRef.current?.kill();
        };
    }, [text]); // Dependency array includes 'text'

    return (
        <h1 ref={waveTextRef}>
            {/* Split the text prop into characters and wrap each in a span */}
            {text.split('').map((char, index) => (
                <span key={index}>
                    {char}
                </span>
            ))}
        </h1>
    );
};

export default WaveText;
