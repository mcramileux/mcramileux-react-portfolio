//TO EDIT FOOTER SECTION
//view the footer
//THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, 
//and their profile on a third platform (Stack Overflow, Twitter)

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitHub, faLinkedin, faTwitter } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="footerContainer">
        <div className="icons">
            <a href="https://github.com/mcramileux/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGitHub} />
            </a>
            <a href="https://www.linkedin.com/in/mcramileux/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://twitter.com/mcramileux" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />   
            </a>
        </div>
        <section>
        <h4>Made with ❤️️ by Kristine</h4>
        <p>
           <h5 className="copyright-text">&copy; 2023 mcramileux. All rights reserved.</h5>
        </p>
        </section> 
      </div>
    </footer>
  );
}