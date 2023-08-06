//TO EDIT FOOTER SECTION
//view the footer
//THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, 
//and their profile on a third platform (Stack Overflow, Twitter)

import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-info py-3">
      <div className="container-footer text-center">
        <div className="row">
          <div className="col-12">
            <div className="social-icons">
              <a href="https://github.com/mcramileux/" target="_blank" className="text-info" rel="noopener noreferrer">
                 {/* <FontAwesomeIcon icon={faGithub} />  */}Github
                 
              </a>
              <a href="https://www.linkedin.com/in/mcramileux/" target="_blank" className="text-info" rel="noopener noreferrer">
                    {/* <FontAwesomeIcon icon={faLinkedin} /> */} Linkedin
              </a>
            </div>
              <section>
                <p>
                  <h6 className="copyright-text">&copy; 2023 mcramileux. All rights reserved.</h6>
                </p>
              </section> 
          </div>
        </div>
      </div>
    </footer>
  );
}