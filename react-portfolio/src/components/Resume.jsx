import React from 'react';
import { motion } from 'framer-motion';

function Resume() {
  const proficiencies = [
    "HTML5", "CSS3", "JavaScript (ES6+)", "React", "Node.js", 
    "Express", "MongoDB", "SQL", "Git", "Responsive Web Design"
  ];

  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/path/to/your/resume.pdf" download className="resume-download">Download Resume</a>
      <h3>Proficiencies</h3>
      <ul className="proficiencies-list">
        {proficiencies.map((skill, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;