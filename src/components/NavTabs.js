import React from 'react';
import '../styles/Navbar.css';
import  image from './Assets/saghar.jpeg'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header >
    <nav className='navbar'>
      <div className='image'>
      <img src={image}  className="d-inline-block align-text-center  "></img>
      <h3>saghar Portfolio</h3>
      </div>
      <ul className="nav nav-tabs">
        <li >
          <a
            href="#about"
            onClick={() => handlePageChange('About')}

            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li >
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Work')}

            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
          >
            My Work
          </a>
        </li>
        <li >
          <a
            href="#contact"

            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li >
          <a
            href="#resume"

            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
    </header>
  );
}

export default NavTabs;
