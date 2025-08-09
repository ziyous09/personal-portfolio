import React, { useState } from 'react';
import ScrambleText from './../Effects/ScrambleText';

// Main App Component - Sets up the page background and layout
export default function App() {
  // Theme state: 'dark' or 'light'
  const [theme, setTheme] = useState('dark');

  // Update body class for theme for global styling if needed
  React.useEffect(() => {
    document.body.className = ''; // Clear existing classes
    document.body.classList.add(theme === 'dark' ? 'bg-black' : 'bg-white');
  }, [theme]);

  // Theme toggle handler
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className={`relative min-h-screen w-full ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      } flex flex-col items-center p-4 sm:p-8 font-sans transition-colors duration-300`}
    >
      {/* Background decorative shapes (only for dark theme for better contrast) */}
      {theme === 'dark' && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-green-500/20 rounded-full blur-[150px] -top-20 -left-40"></div>
          <div className="absolute w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-green-400/10 rounded-full blur-[120px] bottom-20 right-0"></div>
        </div>
      )}

      {/* Header container for Logo, Navbar, and Buttons */}
      <header className="fixed top-[40px] w-full max-w-7xl mx-auto z-50 px-4 flex items-center justify-between">
        {/* Left Side: Logo */}
        <div
          className={`${
            theme === 'dark' ? 'text-white' : 'text-black'
          } text-xl sm:text-2xl font-bold tracking-wider cursor-pointer`}
        >
          PORT<span className="text-green-500">F</span>OLIO
          <span className="text-green-500">/&gt;</span>
        </div>

        {/* Center: Navbar Component */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Navbar theme={theme} />
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Elegant & Aligned Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            className={`relative flex items-center h-8 rounded-full p-1 w-[60px] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 
              ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-900'}`}
          >
            {/* Sliding Background */}
            <span
              className={`absolute h-6 w-6 rounded-full bg-green-500 shadow-lg transform transition-transform duration-300 ease-in-out 
                ${theme === 'light' ? 'translate-x-[2px]' : 'translate-x-[30px]'}`}
            />
            {/* Light Icon Wrapper */}
            <span className="relative z-10 flex-1 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-colors duration-300 ${theme === 'light' ? 'text-black' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            {/* Dark Icon Wrapper */}
            <span className="relative z-10 flex-1 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-colors duration-300 ${theme === 'dark' ? 'text-black' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </span>
          </button>
          {/* Get Resume Button */}
          <button
            className={`hidden sm:flex items-center justify-center gap-2 font-medium transition-colors duration-300 h-11 px-5 rounded-full backdrop-blur-xl shadow-lg group overflow-hidden relative ${
              theme === 'dark'
                ? 'bg-black/30 border border-white/10 text-white hover:bg-black/50'
                : 'bg-white/30 border border-black/10 text-black hover:bg-white/50'
            }`}
          >
            <span
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400/20 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            ></span>
            <span className="relative z-10 group-hover:text-green-500 transition-colors duration-300">
              Get Resume
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center text-center ${
          theme === 'dark' ? 'text-white' : 'text-black'
        } pt-[180px]`}
      >
        <p className="text-green-500 M-0 font-semibold text-sm sm:text-base">COMPUTER SCIENCE EXPERT</p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mt-2 leading-tight">
          ANONYMOUS
        </h1>
        <p
          className={`max-w-xl md:max-w-2xl mt-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          } text-base sm:text-lg`}
        >
          Fundamental Studio crafts exceptional digital experiences that transform brands and captivate audiences. We're the strategic partner that brings your vision to life.
        </p>
        <button
          className={`mt-8 px-6 py-3 rounded-full ${
            theme === 'dark'
              ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
              : 'bg-black/10 border border-black/20 text-black hover:bg-black/20'
          } font-semibold flex items-center gap-2 backdrop-blur-sm transition-colors duration-300`}
        >
          Get Resume
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

// Navbar Component
const Navbar = ({ theme }) => {
  const navLinks = ['Home', 'About', 'Work', 'Contact', 'Blog'];

  return (
    <div
      className={`relative px-12 sm:px-20 py-4 rounded-full ${ // INCREASED px-8->px-12, sm:px-12->sm:px-20
        theme === 'dark'
          ? 'bg-black/50 border border-white/20'
          : 'bg-white/60 border border-black/20'
      } backdrop-blur-xl shadow-lg`}
      style={{ minHeight: '56px', minWidth: '490px' }} // INCREASED minWidth for wider navbar
    >
      {/* Neon circular dot effect styles */}
      <style>
        {`
          .nav-dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #22d3ee;
            opacity: 0;
            position: absolute;
            left: 50%;
            top: -2px;
            transform: translateX(-50%);
            pointer-events: none;
            z-index: 20;
            transition: opacity 0.3s, box-shadow 0.3s;
            box-shadow:
              0 0 4px 1px #22d3ee,
              0 0 8px 2px #22d3ee;
          }
          .nav-dot-dark {
            background: #22c55e;
            box-shadow:
              0 0 4px 1px #22c55e,
              0 0 8px 2px #22c55e;
          }
          .group:hover .nav-dot {
            opacity: 1;
            box-shadow:
              0 0 8px 2px #22d3ee,
              0 0 16px 4px #22d3ee;
          }
          .group:hover .nav-dot-dark {
            box-shadow:
              0 0 8px 2px #22c55e,
              0 0 16px 4px #22c55e;
          }
        `}
      </style>
      <div className="flex items-center gap-7">
        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <div
              key={link}
              className="flex items-center justify-center"
              style={{ width: '72px', minWidth: '72px', height: '40px' }}
            >
              <a
                href="#"
                className={`
                  text-lg font-extrabold relative group overflow-visible
                  ${theme === 'dark'
                    ? 'text-gray-200 hover:text-green-400'
                    : 'text-gray-700 hover:text-cyan-400'
                  }
                  transition-colors duration-300
                `}
                style={{
                  transitionProperty: 'color',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Circular neon dot above the element, appears on hover */}
                <span
                  className={`nav-dot ${theme === 'dark' ? 'nav-dot-dark' : ''}`}
                ></span>
                <span className="relative z-10 flex items-center justify-center w-full">
                  <ScrambleText value={link} fontSize="18px" />
                </span>
                {/* Elegant underline effect */}
                <span
                  className={`
                    absolute left-0 bottom-0 w-full h-[1px]
                    ${theme === 'dark' ? 'bg-green-400' : 'bg-cyan-400'}
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300 ease-out
                    rounded-full
                    z-0
                  `}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};