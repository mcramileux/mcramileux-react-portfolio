// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies ---DONE

import React from 'react';
import resumeDownload from '../../assets/documents/kramilo-cv.pdf';

export default function Resume() {
  return (
    <section id='resume'>
      <div className='container-resume text-center'>
        <div className='row justify-content-center'>
          <div className='col-sm-12 section-header'>
            <h1 className='resume-title'>Resume</h1>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className="resume-download">
                    <a href={resumeDownload} download='Resume'target='_blank' className='text-dark' rel='noopener noreferrer'>
                    {/* <span className='resume-icon'></span> 
                    Download Resume */}
                    <button type="button" class="btn btn-info">Download Resume</button>
                    </a>
                  </div>
                </div>
            <h4 className='frontend-skills'>Front End Skills</h4>
            <ul className='frontend-list'>
              <li> HTML </li>
              <li> CSS </li>
              <li> JavaScript </li>
              <li> Bootstrap </li>
              <li> Handlebars </li>
              <li> REACT </li>
            </ul>

            <h4 className='backend-skills'>Backend End Skills</h4>
            <ul className='backend-list'>
              <li> Node</li>
              <li> Express</li>
              <li> MySQL</li>
              <li> Mongo</li>
            </ul>

            <h4 className='deployment'>Others</h4>
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
