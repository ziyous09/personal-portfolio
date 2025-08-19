import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

const useVanta = (effect, elRef) => {
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    let effectInstance;
    if (effect && elRef.current) {
      effectInstance = effect({
        el: elRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x00c951,
        backgroundColor: 0x0,
        shininess: 50.00,
        waveHeight: 15.00,
        waveSpeed: 0.75,
        zoom: 0.75
      });
      setVantaEffect(effectInstance);
    }

    // Cleanup function to destroy the effect on unmount
    return () => {
      if (effectInstance) effectInstance.destroy();
    };
  }, [effect, elRef]);

  return vantaEffect;
};

export default useVanta;