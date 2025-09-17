import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import BlurText from "./BlurText";
import '../Styles/Hi.css';

export default function Hi() {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    gsap.from(".ppdiv", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 1
    });
  }, []); // <-- boş array: sadece mountta çalışır

  return (
    <div className="HiContainer">
      <div className='ppdiv'>
        <img src="PP.png" className="profile-picture" alt="PP" />
      </div>
      <div className="texts-container">
        <div className="HiText1c">        
        <BlurText
          text="Hi!"
          delay={800}
          animateBy="words"
          direction="bottom"
          onAnimationComplete={() => setShowSecond(true)}
          className="HiText1 montserrat-bold"
        /></div>

        <div className="HiText2c">{showSecond && (
          <BlurText
            text="Welcome to my portfolio."
            delay={200}
            animateBy="words"
            direction="bottom"
            className="HiText2 montserrat-bold"
          />
        )}</div>
        
      </div>
    </div>
  )
}
