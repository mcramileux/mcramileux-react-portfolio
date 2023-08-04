//TO EDIT FOOTER SECTION
//view the footer
//THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, 
//and their profile on a third platform (Stack Overflow, Twitter)

import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="icons">
          <a href="https://github.com/jjocelynn" target="blank">
            <img src="./assets/images/GitHub-Logo.png" className="icon" />
          </a>
          <a href="https://placeHolderForLinkedInPage" target="blank">
            <img src="./assets/images/linkedIn-logo.png" className="icon" />
          </a>
          <a href="https://placeHolderForStackOverflow" target="blank">
            <img src="./assets/images/stack-overFlow.png" className="icon" />
          </a>
        </div>
        • &copy; 2023 Robinson's Website Development •
      </div>
    </footer>
  );
}