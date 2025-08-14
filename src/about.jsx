import React, { useEffect, useRef } from 'react';

function About() {
  let aboutstr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non mi vel velit eleifend elementum. Mauris ultricies vel diam sit amet porta. Vestibulum tempus purus sem, nec bibendum nisl placerat at. Sed tempor sapien sem, eget placerat ipsum scelerisque ac. Integer sit amet cursus magna. Proin maximus ante non cursus eleifend. Donec et augue nec dui varius venenatis. Pellentesque ut euismod nisi.";
  
  useEffect(() => {
    const duration = 4000;
    const startAngle = -20;
    const endAngle = 110;

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
      <div id="aboutcontainer">
        <div id="about-text">
          <h1 id="aboutheader">About</h1>
          <p id="abouttitle">{aboutstr}</p>
        </div>
        <img src="/assets/PP.png" id="pp" alt="ProfilePicture" />
      </div>
    </div>
  );
}

export default About;
