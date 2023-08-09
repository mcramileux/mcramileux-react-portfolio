import React from 'react';
import './NavTabs.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className='bg-dark text-info py-2'>
      <div className='navbar navbar-expand-md'>
      <div className='container'>
      <h1 className='author text-info'>Kristine Ramilo</h1>
      <div className='navbar-collapse'>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <a
              href='#about'
              onClick={() => handlePageChange('About')}
              className={
                currentPage === 'About' ? 'nav-link active text-info' : 'nav-link text-info'
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
                currentPage === 'Portfolio' ? 'nav-link active text-info' : 'nav-link text-info'
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
                currentPage === 'Contact' ? 'nav-link active text-info' : 'nav-link text-info'
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
                currentPage === 'Resume' ? 'nav-link active text-info' : 'nav-link text-info'
              }
            >
              Resume
            </a>
          </li>
        </ul>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default NavTabs;