import './Background.css';

export default function Background() {

    VANTA.NET({
        el: "#background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x12d93e,
        backgroundColor: 0x0
    })

    return (
        <div id="background"></div>
    );
}