//TO EDIT Resume section
//link to a downloadable resume and a list of the developer’s proficiencies
import React from 'react';
import resumeDownload from '../../assets/documents/kramilo-cv.pdf';

export default function Resume() {
  return (
    <section id='resume'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 section-header'>
            <h2>Resume</h2>
            <h3>More about my credentials</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="resume-download">
              <a href="../../assets/documents/kramilo-cv.pdf" download="kramilo-resume.pdf">Download My Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
