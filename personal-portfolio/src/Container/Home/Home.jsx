import React, { useState, useEffect } from 'react';
import { MorphingText } from "@/components/magicui/morphing-text";

import './Home.css';
// import VantaBackground from './../../Component/VantaBackground'; // Import the Vanta component

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['ELEGANCE', 'INNOVATION', 'CREATIVITY', 'EXCELLENCE'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    // Wrap the entire section in the VantaBackground component
      <section id="home">
        {/* Hero Content */}
        <div className="hero-content">
          <p className="subtitle">COMPUTER SCIENCE EXPERT</p>
          {/* The h1 now has the typing animation and cycles through words */}
          <h1 className="typing-animation"><MorphingText texts={['ELEGANCE', 'INNOVATION', 'CREATIVITY', 'EXCELLENCE']} /></h1>
          <p className="description">
            I craft exceptional digital experiences that transform brands and
            captivate audiences. I am the strategic partner that brings your vision to life.
          </p>
          {/* Button remains the same */}
          <button className="primary-btn">
            <span className="btn-gradient-overlay"></span>
            <span className="btn-text">Get Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="btn-arrow"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </button>
        </div>
      </section>
  )
}

export default Home;