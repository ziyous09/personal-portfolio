import React, { useState } from 'react';
import ScrambleText from './../Effects/ScrambleText';
import './Navbar.css'


export default function App() {
  const [theme, setTheme] = useState('dark');

  React.useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme === 'dark' ? 'bg-black' : 'bg-white');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className={`navbar-root ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}
    >
      <header className="navbar-header">
        <div
          className={`navbar-logo ${theme === 'dark' ? 'dark' : 'light'}`}
        >
          PORT<span className="logo-green">F</span>OLIO
          <span className="logo-green">/&gt;</span>
        </div>
        <div className="navbar-navbar-container">
          <Navbar theme={theme} />
        </div>
        <div className="navbar-actions">
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            className={`theme-toggle-btn ${theme === 'light' ? 'bg-light' : 'bg-dark'}`}
          >
            <span
              className={`theme-toggle-thumb ${theme === 'light' ? 'light' : 'dark'}`}
            />
            <span className="theme-toggle-icon sun">
              <svg xmlns="http://www.w3.org/2000/svg" className={theme === 'light' ? 'sun' : 'sun inactive'} height="16" width="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <span className="theme-toggle-icon moon">
              <svg xmlns="http://www.w3.org/2000/svg" className={theme === 'dark' ? 'moon' : 'moon inactive'} height="16" width="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </span>
          </button>
          <button
            className={`get-resume-btn ${theme === 'dark' ? 'dark' : 'light'}`}
          >
            <span className="get-resume-gradient"></span>
            <span className="get-resume-text">
              Get Resume
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="get-resume-arrow"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

const Navbar = ({ theme }) => {
  const navLinks = ['Home', 'About', 'Work', 'Contact', 'Blog'];

  return (
    <div
      className={`navbar-bar ${theme === 'dark' ? 'dark' : 'light'}`}
    >
      <div className="navbar-bar-flex">
        <div className="navbar-links">
          {navLinks.map((link) => (
            <div
              key={link}
              className="navbar-link-item"
            >
              <a
                href="#"
                className={`navbar-link group ${theme === 'dark' ? 'dark' : 'light'}`}
              >
                <span
                  className={`nav-dot ${theme === 'dark' ? 'nav-dot-dark' : ''}`}
                ></span>
                <span className="navbar-link-text">
                  <ScrambleText value={link} fontSize="18px" />
                </span>
                <span
                  className="navbar-link-underline"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};