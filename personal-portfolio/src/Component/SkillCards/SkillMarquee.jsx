export default function SkillMarquee({ children, direction = 'normal' }){
    // Conditionally apply the animation class based on the direction prop
    const animationClass = direction === 'reverse' ? 'animate-marquee-reverse' : 'animate-marquee';
    return (
        <div className="w-full overflow-x-hidden whitespace-nowrap marquee-wrapper py-4">
            <div className={`inline-block ${animationClass}`}>
                {children}
            </div>
            <div className={`inline-block ${animationClass}`}>
                {/* Duplicate the children for a seamless loop */}
                {children}
            </div>
        </div>
    );
};
