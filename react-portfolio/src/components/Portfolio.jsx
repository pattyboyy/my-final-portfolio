import React from 'react';
import Project from './Project';
import bizMagicScreenshot from '../assets/images/BizMagicScreenshot.png';
import textEditorScreenshot from '../assets/images/texteditorscreenshot.png';
import speakEzScreenshot from '../assets/images/Speakezscreenshot.png';
import watermarkProScreenshot from '../assets/images/watermarkproscreenshot.png';
import patsWeatherboardScreenshot from '../assets/images/patsweatherboard.png';
import budgetBoardScreenshot from '../assets/images/loan.png';

function Portfolio() {
  const projects = [
    {
      title: "Biz-Magic: Personal Business Startup Helper",
      image: bizMagicScreenshot,
      deployedLink: "https://business-startup-helper.onrender.com",
      githubLink: "https://github.com/pattyboyy/biz-magic"
    },
    {
      title: "Personal Text Editor",
      image: textEditorScreenshot,
      deployedLink: "https://github.com/pattyboyy/my-text-editor",
      githubLink: "https://github.com/pattyboyy/my-text-editor"
    },
    {
      title: "Local Speak Easy",
      image: speakEzScreenshot,
      deployedLink: "https://speak-ez.onrender.com",
      githubLink: "https://github.com/aionarae/speak-ez"
    },
    {
      title: "Personal Watermark Pro",
      image: watermarkProScreenshot,
      deployedLink: "https://pattyboyy.github.io/personal-watermark-pro/",
      githubLink: "https://github.com/pattyboyy/personal-watermark-pro"
    },
    {
      title: "Pat's Weatherboard",
      image: patsWeatherboardScreenshot,
      deployedLink: "https://pattyboyy.github.io/pats-weatherboard/",
      githubLink: "https://github.com/pattyboyy/pats-weatherboard"
    },
    {
      title: "Budget Board",
      image: budgetBoardScreenshot,
      deployedLink: "https://pattyboyy.github.io/group-budget-board/",
      githubLink: "https://github.com/pattyboyy/group-budget-board"
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