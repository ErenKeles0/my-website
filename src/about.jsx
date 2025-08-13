import React, { useEffect, useRef } from 'react';

function About() {
    const aboutRef = useRef(null);
    let aboutstr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non mi vel velit eleifend elementum. Mauris ultricies vel diam sit amet porta. Vestibulum tempus purus sem, nec bibendum nisl placerat at. Sed tempor sapien sem, eget placerat ipsum scelerisque ac. Integer sit amet cursus magna. Proin maximus ante non cursus eleifend. Donec et augue nec dui varius venenatis. Pellentesque ut euismod nisi.";
  useEffect(() => {
    const duration = 4000; // animasyon süresi
    const startAngle = -20;
    const endAngle = 110;

    // Ease In-Out Cubic (başta ve sonda yavaş)
    const easeInOutCubic = t =>
      t < 0.5
        ? 4 * Math.pow(t, 3)
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = startTime => {
      const step = time => {
        const elapsed = time - startTime;
        let progress = Math.min(elapsed / duration, 1);

        let slowStartProgress = Math.pow(progress, 1.5);

        let eased = easeInOutCubic(slowStartProgress);
        let angle = startAngle + (endAngle - startAngle) * eased;

        if (aboutRef.current) {
          aboutRef.current.style.background = `linear-gradient(${angle}deg, #000000, #131515, #484545)`;
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    requestAnimationFrame(time => animate(time));
  }, []);

  return (
    <div>
      <div
        ref={aboutRef}
        className="about"
        style={{
            display:"flex",
            flexDirection:'row',
            borderRadius: "8px",
            width: "auto",
            height: "870px",
            boxShadow: "0px 0px 20px 6px #c9c1b8",
            margin: "30px 10px 100px 10px"
        }}>
        <div style={{width:"1300px"}}>
            <h1 className="pt-sans-bold" style={{
                fontSize:"56pt",
                color:"#8d8573",
                margin:"100px 0 0 170px",
                textShadow: "4px 4px 4px solid black",
                }}>About</h1>

            <p className="pt-sans-regular" style={{
                fontSize:"16pt",
                color:"#c9c1b8",
                margin:"70px 0 0 150px",
                textShadow: "8px 8x 8px solid black"
            }}>{aboutstr}</p>
        </div>
        
        <img src="/assets/PP.png" alt="ProfilePicture" style={{
            width:"350px",
            height:"350px",
            borderRadius:"350px",
            boxShadow:"0px 0px 20px 6px solid black",
            margin:"230px 0 0 120px",

        }} />

      </div>
    </div>
  );
}

export default About;
