import React from 'react';
import '../styles/Navbar.css';
import image from './Assets/saghar.jpeg'
import github from './Assets/icon/github.png'
import email from './Assets/icon/Apple_Mail-512.png'
import linkedin from './Assets/icon/Linkedin.png'


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <header >
        <nav className='navbar'>
          <div className='image'>
            <img src={image} className="d-inline-block align-text-center  "></img>
            <div>
              <h3>saghar Portfolio</h3>
              <h6>behinaeen.saghar@gmail.com</h6>
            </div>
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

      <section >
        <div id="mySidenav" className="sidenav ">

          <a href="mailto:behinaeen.saghar@gmail.com"><img src={email}
            alt="mail icon" /></a>
          <a href="https://www.linkedin.com/in/sagharb/" target="_blanck"><img src={linkedin}
            alt="linkedin icon" /></a>
          <a href="https://github.com/saghar-b" target="_blanck"><img src={github}
            alt="git-hub icon" /></a>
          <div className="v-line"></div>
        </div>
      </section>
      {/* <section className='mySidenavRight'>
            <div className="sidenavRight ">

                <h6 className='v-text'>behinaaeen.saghar@gmail.com</h6>
                <div className="v-line btn-warning"></div>
            </div>
        </section> */}
    </>
  );
}

export default NavTabs;
