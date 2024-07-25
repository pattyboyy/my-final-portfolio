import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "/path/to/project1.jpg",
      deployedLink: "https://project1.com",
      githubLink: "https://github.com/yourusername/project1"
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
