import React from 'react';
import './About.css';
import authorAvatar from '../../assets/images/pfp.jpeg';

export default function About() {
  return (
    <section className='container my-5'>
      <div className='container-about text-center'>
        <div className='row gx-4 gx-lg-5 justify-content-center'>
            <h1 className='about-title'>About Me</h1>
            <div className='flex-container'>
              <img src={authorAvatar} alt='Author Avatar' className='avatar' />
              <p>
                I am Kristine, an aspiring web developer with a Certificate in Full Stack Web Development from the University of Adelaide. I am eager to expand my skill set and embrace new opportunities, with coding being a central focus of my learning journey.

                My professional background spans a decade in the Hospitality Industry, reflecting my dedication and adaptability. Seeking a more balanced lifestyle, I am embarking on a career transition into the field of web development, where I am driven to leverage my newfound skills to make a meaningful impact.

                Throughout my coding bootcamp experience, I have diligently undertaken a range of projects, which I am pleased to present in my portfolio. I invite you to explore these endeavors, and should you have any inquiries or wish to discuss my work further, I am readily available for communication.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}
