// src/pages/About.jsx
import React, { useEffect, useState } from 'react';
import './About.scss'

const About = () => {
  const [displayImage, setDisplayImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplayImage(true);
    }, 500);
  }, [])
  return (
    <>
      <div>
        <h1>🙋🏽About Me</h1>
              
        <div className="about-images">
          <div className={`${displayImage ? 'display-about-image': ''} about-image-container`}><img src="/about/about-1.jpg" /></div>
          <div className={`${displayImage ? 'display-about-image': ''} about-image-container`}><img src="/about/about-2.jpg" /></div>
          <div className={`${displayImage ? 'display-about-image': ''} about-image-container`}><img src="/about/about-3.jpg" /></div>
      </div>
        <p>I am a passionate individual who loves to stay active, both physically and mentally. Hitting the gym is a daily ritual that keeps me energized and focused. When I&apos;m not working out, you&apos;ll often find me immersed in the captivating worlds of sci-fi movies and RPGs, where imagination knows no bounds. As a Fullstack engineer specializing in React, with extensive experience in Ruby on Rails and Python, I have the privilege of turning innovative ideas into functional and user-friendly digital solutions.</p>

        <p>Professionally, I&apos;ve had the rewarding experience of building Gamer Sensei from the ground up, a project that has been a true labor of love. Mentoring junior developers is another aspect of my career that I deeply cherish; there&apos;s nothing quite like helping others grow and succeed. My friends and family would describe me as a humorous and driven individual who is always loyal and supportive. Whether in my professional endeavors or personal relationships, I strive to bring positivity, dedication, and a bit of fun to everything I do.</p>
      </div>
    </>
  );
};

export default About;
