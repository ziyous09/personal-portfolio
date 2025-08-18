import './SkillMarquee.css';

export default function SkillMarquee({ children, direction = 'normal' }) {
  // Conditionally apply the animation class based on the direction prop
  const animationClass = direction === 'reverse' ? 'animate-marquee-reverse' : 'animate-marquee';
  
  return (
    <div className="marquee-wrapper">
      <div className={`marquee-content ${animationClass}`}>
        {children}
      </div>
      <div className={`marquee-content ${animationClass}`}>
        {/* Duplicate the children for a seamless loop */}
        {children}
      </div>
    </div>
  );
};
