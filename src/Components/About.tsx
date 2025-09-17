
import '../Styles/About.css'
import ScrollFloat from './ScrollFloat'
import ScrollReveal from './ScrollReveal'

function About() {
  return (
    <div className='About-container'>
    <div className="Aboutme-header">
      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=2%'
        scrollEnd='bottom bottom-=80%'
        stagger={0.05}
        textClassName='montserrat-bold'
      >
      About Me  
      </ScrollFloat></div>
      <div className="montserrat-regular">
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={10}
        blurStrength={5}
        textClassName='Aboutme-content'
      >
       Hi, I’m Eren! I’m a passionate developer with experience in web technologies, C++ projects, and Python. On the web side, I work with React, TailwindCSS, and GSAP to build interactive and responsive interfaces. I also enjoy experimenting with 3D effects (using OGL) and creating smooth animations. Beyond web development, I have worked on C++ projects, which gave me a strong foundation in algorithms and problem-solving. I also use Python for scripting, automation, and exploring new fields. One of my main interests is artificial intelligence. I follow advancements in AI closely and aim to integrate these technologies into my future projects. My goal is to combine creativity, performance, and innovation to build impactful software solutions.
      </ScrollReveal></div>

      
      
      </div>
  )
}

export default About