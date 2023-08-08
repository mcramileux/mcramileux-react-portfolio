// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

import React from 'react';
import resumeDownload from '../../assets/documents/kramilo-cv.pdf';

export default function Resume() {
  return (
    <section id='resume'>
      <div className='container-resume text-center'>
        <div className='row'>
          <div className='col-sm-12 section-header'>
            <h1 className='resume-title'>Resume</h1>
            <h4>Technical Skills</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-12'>
            <div className="resume-download">
              <a href={resumeDownload} download='Resume'target='_blank' className='text-dark' rel='noopener noreferrer'>
                <span className='resume-icon'></span> 
                  Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
