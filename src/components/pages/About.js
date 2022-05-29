import React from 'react';
import './Styles/About.css';

export default function About() {
  return (
    <>
      <div className='about' >
        <aside>
          <h3>About Me</h3>
          <div className="line "></div>

        </aside>
        <div className='bio'>

          <p>
            Full stack developer leveraging a background in architecture to provide unique perspectives on how end-users interact with websites and software platforms. Earned a certificate in Full Stack Web Development from the University Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.

          </p>
          <div>
            <h3>TECHNICAL SKILLS</h3>
            <ul>
              <li>JavaScript ES6+ </li>
              <li>CSS3,&ensp;HTML5</li>
              <li>jQuery, &ensp;Bootstrap, </li>
              <li>Node</li>
              <li>Express</li>
              <li>Express</li>
              <li>SQL ,&ensp;MySQL </li>
              <li>React, &ensp;Handlebars</li>
              <li>GitHubs</li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}
