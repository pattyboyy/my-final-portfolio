import React from 'react';
import profileImage from '../assets/images/IMG_2208.jpeg';

function AboutMe() {
  return (
    <section className="about-me">
      <img src={profileImage} alt="Your Name" />
      <div>
        <h2>About Me</h2>
        <p>
          Hello! I'm [Your Name], a passionate web developer with expertise in 
          creating responsive and user-friendly web applications. With a strong 
          foundation in HTML, CSS, and JavaScript, and experience with modern 
          frameworks like React, I strive to build efficient and scalable 
          solutions. I'm always eager to learn new technologies and tackle 
          challenging projects.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;