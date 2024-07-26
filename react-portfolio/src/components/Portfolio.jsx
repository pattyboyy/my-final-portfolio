import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: "Biz-Magic: Personal Business Startup Helper",
      image: "react-portfolio/src/assets/images/BizMagicScreenshot.png",
      deployedLink: "https://business-startup-helper.onrender.com",
      githubLink: "https://github.com/pattyboyy/biz-magic"
    },
    {
      title: "Project 2",
      image: "/path/to/project2.jpg",
      deployedLink: "https://project2.com",
      githubLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Project 2",
      image: "/path/to/project2.jpg",
      deployedLink: "https://project2.com",
      githubLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Project 2",
      image: "/path/to/project2.jpg",
      deployedLink: "https://project2.com",
      githubLink: "https://github.com/yourusername/project2"
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
