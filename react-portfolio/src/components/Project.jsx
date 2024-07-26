import React from 'react';
import { motion } from 'framer-motion';

function Project({ title, image, description, deployedLink, githubLink }) {
  return (
    <motion.div 
      className="project"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={title} />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">View App</a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;