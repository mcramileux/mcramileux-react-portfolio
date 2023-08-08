// You’ll deploy this application to GitHub Pages. 
// Follow the instructions in the Git Guide or consult the Create React App Docs on GitHub Pages to create a build that you can deploy.
// Important: Be sure to push your codebase to the default branch in GitHub -- NOT your built and deployed code. 
// Ensure this happens by using the gh-pages branch to host the deployed application's build.

import React from 'react';
import './About.css';
import authorAvatar from '../../assets/images/pfp.jpeg';

export default function About() {
  return (
    <header className="bg-light text-dark py-3">
      <div className="container-about text-center">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className='about-title'>About Me</h1>
            <div className="flex-container">
              <img src={authorAvatar} alt="Author Avatar" className="avatar" />
              <p>
                I am Kristine, an aspiring web developer currently engaged in online studies at the University of Adelaide. As the culmination of my studies approaches at the end of this month, I am eager to expand my skill set and embrace new opportunities, with coding being a central focus of my learning journey.

                My professional background spans a decade in the Hospitality Industry, reflecting my dedication and adaptability. Seeking a more balanced lifestyle, I am embarking on a career transition into the field of web development, where I am driven to leverage my newfound skills to make a meaningful impact.

                Throughout my coding bootcamp experience, I have diligently undertaken a range of projects, which I am pleased to present in my portfolio. I invite you to explore these endeavors, and should you have any inquiries or wish to discuss my work further, I am readily available for communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
