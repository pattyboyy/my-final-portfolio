import React from 'react';
import Project from './Project';
import bizMagicScreenshot from '../assets/images/BizMagicScreenshot.png';
// Import other project images here

function Portfolio() {
  const projects = [
    {
      title: "Biz-Magic: Personal Business Startup Helper",
      image: bizMagicScreenshot,
      deployedLink: "https://business-startup-helper.onrender.com",
      githubLink: "https://github.com/pattyboyy/biz-magic"
    },
    {
      title: "Project 2",
      image: "/placeholder-image.jpg", // Use a placeholder if you don't have the image yet
      deployedLink: "https://project2.com",
      githubLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Project 3",
      image: "/placeholder-image.jpg",
      deployedLink: "https://project3.com",
      githubLink: "https://github.com/yourusername/project3"
    },
    {
      title: "Project 4",
      image: "/placeholder-image.jpg",
      deployedLink: "https://project4.com",
      githubLink: "https://github.com/yourusername/project4"
    },
    // Add more projects here
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;