import Lottie from 'lottie-react';
import Programmer from './coworking-male-programmer-writing-program-code.json';
import './About.css';
// Import icons from the react-icons library
import { FaCode, FaPaintBrush, FaServer, FaCloud } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      {/* Main container for the top section */}
      <div className="about-main-container">
        
        {/* Left side with the Lottie Animation */}
        <div className="about-left">
          <div className="programmer-animation-container">
            <Lottie animationData={Programmer} loop={true} />
          </div>
        </div>

        {/* Right side with text details */}
        <div className="about-right">
          <span className="subtitle">ABOUT ME</span>
          <h1>About Kunal Maurya</h1>
          <p>
            As a dedicated Software Developer, I craft exceptional digital experiences that transform ideas into reality. I am a strategic partner focused on building robust and scalable solutions, from web design to backend systems, delivering results that matter.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <span className="stat-number">1.2K+</span>
              <p>Projects Completed</p>
            </div>
          </div>
          <button className="resume-btn">
            Get Resume &nbsp; &rarr;
          </button>
        </div>
      </div>

      {/* Skills section below the main content */}
      <div className="skills-container">
        <span className="subtitle">EXPERTISE</span>
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <FaCode size={30} />
            <h3>Web Development</h3>
          </div>
          <div className="skill-card">
            <FaPaintBrush size={30} />
            <h3>UI/UX Design</h3>
          </div>
          <div className="skill-card">
            <FaServer size={30} />
            <h3>Backend</h3>
          </div>
          <div className="skill-card">
            <FaCloud size={30} />
            <h3>DevOps</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;