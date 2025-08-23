import React, { useRef, useEffect } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import './Background.css';
const Background = () => {
    const vantaRef = useRef(null);
    let vantaEffect = null;

    useEffect(() => {
        if (vantaRef.current && window.THREE) {
            vantaEffect = NET({
                el: vantaRef.current,
                THREE: window.THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x12d93e,
                backgroundColor: 0x000000
            });
        }
        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
            }
        };
    }, []);

    return <div ref={vantaRef} className="bg"></div>;
};

export default Background;
