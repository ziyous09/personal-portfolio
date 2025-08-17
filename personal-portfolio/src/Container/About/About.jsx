import Programmer from './coworking-male-programmer-writing-program-code.json';
import './About.css'
import Lottie from 'lottie-react'


const About = () => {
  return (
    <section id="about">
      <div className="details">
        <h1 id="name">Kunal Maurya</h1>
        <h2 id='position'>Software Developer Engineer</h2>
      </div>
      <div className="programmer">
        <Lottie animationData={Programmer}/>
      </div>
    </section>
  )
}

export default About