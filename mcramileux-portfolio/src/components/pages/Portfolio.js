import React from 'react';
import Project from './Project.js';
import './Portfolio.css';

// Import the images to the projects
import MusicSphere from '../../assets/images/MusicSphere.png';
import BloomAndBarter from '../../assets/images/BloomAndBarter.png';
import MvcTechBlog from '../../assets/images/MvcTechBlog.png';
import NoteTaker from '../../assets/images/NoteTaker.png';
import DailyScheduler from '../../assets/images/DailyScheduler.png';
import WeatherDashboard from '../../assets/images/WeatherDashboard.png';

const Portfolio = () => {
const projects = [
  {
    title: 'Mcramileux React Portfolio',
    description: 'Advanced CSS: Portfolio',
    image: MusicSphere,
    deployedSite: 'https://mcramileux.github.io/mcramileux-react-portfolio/',
    github: 'https://github.com/mcramileux/mcramileux-react-portfolio',
  },
  {
      title: 'Bloom and Barter',
      description: 'Interactive Full Stack Application',
      image: BloomAndBarter,
      deployedSite: 'https://bloom-and-barter-3911749eadd3.herokuapp.com',
      github: 'https://github.com/jnaoroji/Bloom_and_Barter',
  },
  {
      title: 'MVC Tech Blog',
      description: 'Model-View-Controller (MVC): Tech Blog',
      image: MvcTechBlog,
      deployedSite: 'https://still-headland-43283-de293bb87f62.herokuapp.com/',
      github: 'https://github.com/mcramileux/mcramileux-tech-blog',
  },
  {
      title: 'Note Taker',
      description: 'Express.js: Note Taker',
      image: NoteTaker,
      deployedSite: 'https://rocky-fjord-38162.herokuapp.com/',
      github: 'https://github.com/mcramileux/mcramileux-note-taker',
  },
  {
      title: 'Daily Scheduler',
      description: 'Third-Party APIs: Work Day Scheduler',
      image: DailyScheduler,
      deployedSite: 'https://mcramileux.github.io/kristines-daily-routine-scheduler/',
      github: 'https://github.com/mcramileux/kristines-daily-routine-scheduler',
  },
  {
      title: 'WeatherDashboard',
      description: 'Server-Side APIs: Weather Dashboard',
      image: WeatherDashboard ,
      deployedSite: 'https://mcramileux.github.io/kristines-weather-dashboard/',
      github: 'https://github.com/mcramileux/kristines-weather-dashboard',
  },
]

  return (
    <section className='container my-5'>
      <div className='container-portfolio text-center'>
        <div className='row justify-content-center'>
          <div className="col-md-12">
            <h1 className='portfolio-title'>Portfolio</h1>
            <div className='flex-container'>
              <div className='row'>
                {projects.map((project, index) => (
                <Project project = {project} key= {'project'+ index}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;