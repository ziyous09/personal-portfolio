
export default function MarqueeStyles(){
    return(
    <style>
        {`
        @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0%); }
        }
        .animate-marquee {
            animation: marquee 50s linear infinite;
        }
        .animate-marquee-reverse {
            animation: marquee-reverse 50s linear infinite;
        }
        .marquee-wrapper:hover .animate-marquee,
        .marquee-wrapper:hover .animate-marquee-reverse {
            animation-play-state: paused;
        }
        `}
  </style>
);
}