// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies ---DONE

import React from 'react';
import resumeDownload from '../../assets/documents/kramilo-cv.pdf';
import './Resume.css';

export default function Resume() {
  return (
    <section id='resume'>
      <div className='container-resume px-4 py-4 px-lg-5 py-lg-5 bg-white rounded'>
        <div className='row justify-content-center'>
          <div className='col-sm-12 section-header'>
            <h1 className='resume-title'>Resume</h1>
              <div className='row justify-content-center'>
                <div className='col-sm-12 text-center'>
                  <div className='resume-download'>
                    <a href={resumeDownload} download='Resume'target='_blank' className='resume' rel='noopener noreferrer'>
                    <button type='button' class='btn btn-info'>Download Resume</button>
                    </a>
                  </div>
                </div>
            <h3 className='frontend-skills'>Front End Skills</h3>
            <ul className='frontend-list'>
              <li> HTML </li>
              <li> CSS </li>
              <li> JavaScript </li>
              <li> Bootstrap </li>
              <li> Handlebars </li>
              <li> REACT </li>
            </ul>

            <h3 className='backend-skills'>Backend End Skills</h3>
            <ul className='backend-list'>
              <li> Node</li>
              <li> Express</li>
              <li> MySQL</li>
              <li> Mongo</li>
            </ul>

            <h3 className='deployment'>Others</h3>
            <ul className='deployment-sites'>
              <li>Github</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div> 
        </div>
      </div>
    </section>
  );
}
