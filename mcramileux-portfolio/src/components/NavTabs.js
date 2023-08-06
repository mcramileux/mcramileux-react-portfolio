//TO EDIT NAV BAR
//view the navigation titles

// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

import React from 'react';
import './NavTabs.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className='navbar navbar-expand-md'>
      <div className="container-nav">
      {/* <h1 href='#about' onClick={() => handlePageChange('About')}>
        Kristine Ramilo
      </h1> */}
      <h1 className='author'>Kristine Ramilo</h1>
      <div className='navbar-collapse'>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <a
              href='#about'
              onClick={() => handlePageChange('About')}
              className={
                currentPage === 'About' ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='#Portfolio'
              onClick={() => handlePageChange('Portfolio')}
              className={
                currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
              }
            >
              Portfolio
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='#contact'
              onClick={() => handlePageChange('Contact')}
              className={
                currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='#resume'
              onClick={() => handlePageChange('Resume')}
              className={
                currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
              }
            >
              Resume
            </a>
          </li>
        </ul>
        </div>
      </div>
      </nav>
    
  );
}

export default NavTabs;