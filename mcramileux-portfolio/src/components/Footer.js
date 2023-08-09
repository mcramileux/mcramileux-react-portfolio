import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='bg-dark text-info py-3'>
      <div className='container-footer text-center'>
        <div className='row'>
          <div className='col-12'>
            <div className='social-icons'>
              <a href='https://github.com/mcramileux/' target='_blank' className='text-info' rel='noopener noreferrer'>
                 <FontAwesomeIcon icon={faGithub} /> 
              </a>
              <a href='https://www.linkedin.com/in/mcramileux/' target='_blank' className='text-info' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} /> 
              </a>
              <a href='https://twitter.com/mcramileux' target='_blank' className='text-info' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faTwitter} /> 
              </a>
            </div>
              <section>
                <p>
                  <h6 className='copyright-text'>&copy; 2023 mcramileux. All rights reserved.</h6>
                </p>
              </section> 
          </div>
        </div>
      </div>
    </footer>
  );
}