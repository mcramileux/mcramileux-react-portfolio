// TO EDIT FOR PORTFOLIO SECTION
// titled images of six of the developer’s applications 
// with links to both the deployed applications and the corresponding GitHub repositories
// href to the images

//A single Project component that will be used multiple times in the Portfolio section

// Projects
// For each project that is featured in your portfolio, include the following:
// An image of the deployed application (either a short animated GIF or screenshot)
// The title of the project
// A link to the deployed application
// A link to the corresponding GitHub repository

import React from 'react';
import Project from './Project.js';
// import './Portfolio.css';

import BloomAndBarter from '../../assets/images/BloomAndBarter.png';
import MvcTechBlog from '../../assets/images/MvcTechBlog.png';
import FirstPortfolio from '../../assets/images/FirstPortfolio.png';
import NoteTaker from '../../assets/images/NoteTaker.png';
import DailyScheduler from '../../assets/images/DailyScheduler.png';
import WeatherDashboard from '../../assets/images/WeatherDashboard.png';

const Portfolio = () => {
const projects = [
  {
      title: "Bloom and Barter",
      description: "Interactive Full Stack Application",
      image: BloomAndBarter,
      deployedSite: "https://bloom-and-barter-3911749eadd3.herokuapp.com",
      github: "https://github.com/jnaoroji/Bloom_and_Barter",
  },
  {
      title: "MVC Tech Blog",
      description: "Model-View-Controller (MVC): Tech Blog",
      image: MvcTechBlog,
      deployedSite: "https://still-headland-43283-de293bb87f62.herokuapp.com/",
      github: "https://github.com/mcramileux/mcramileux-tech-blog",
  },
  {
      title: "Mcramileux First Portfolio",
      description: "Advanced CSS: Portfolio",
      image: FirstPortfolio,
      deployedSite: "https://mcramileux.github.io/Kristines-Portfolio/",
      github: "https://github.com/mcramileux/Kristines-Portfolio",
  },
  {
      title: "Note Taker",
      description: "Express.js: Note Taker",
      image: NoteTaker,
      deployedSite: "https://rocky-fjord-38162.herokuapp.com/",
      github: "https://github.com/mcramileux/mcramileux-note-taker",
  },
  {
      title: "Daily Scheduler",
      description: "Third-Party APIs: Work Day Scheduler",
      image: DailyScheduler,
      deployedSite: "https://mcramileux.github.io/kristines-daily-routine-scheduler/",
      github: "https://github.com/mcramileux/kristines-daily-routine-scheduler",
  },
  {
      title: "WeatherDashboard",
      description: "Server-Side APIs: Weather Dashboard",
      image: WeatherDashboard ,
      deployedSite: "https://mcramileux.github.io/kristines-weather-dashboard/",
      github: "https://github.com/mcramileux/kristines-weather-dashboard",
  },
]

  return (
    <section className='container-portfolio my-5'>
      <h1 className='portfolio-title'>Portfolio</h1>
        <div className='container-portfolio text-center'></div>
          <div className='row'>
            {projects.map((project, index) => (
              <Project project = {project} key= {'project'+ index}/>
            ))}
        </div>
      </section>
    );
  };

export default Portfolio;