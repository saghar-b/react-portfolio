import React from 'react';
import './Styles/Work.css';
import byoImage from '../Assets/byo.png'
import weatherImage from '../Assets/weather.png'
import dayPlannerImage from '../Assets/day-planner.png'
import socializersImage from '../Assets/socializers.png'

export default function Work() {
  return (
    <>
      <div className='work' >

        <aside  >
          <h3>My Work</h3>
          <div className="line "></div>

        </aside>
       

          <div className=" small-project">
            <div className="container">
              <a href="https://github.com/chuanw101/byo-backpack" target="_blank" rel="">
                <img className="small-image" src={byoImage} alt="byo-backpack" /></a>
              <div className="text-block">
                <a className="btn " href="https://byo-backpack.herokuapp.com/"
                  target="_blank" rel="noopener noreferrer">
                  <h6 >Byo Backpack</h6>
                  <p className='textfont btn-outline-warning'>CSS/js/Handlebars/MySQL</p>
                </a>
              </div>
            </div>
            <div className="container">
              <a href="https://github.com/saghar-b/Weather-Dashboard-April-12" target="_blank" rel="">
                <img className="small-image" src={weatherImage} alt="Weather-Dashboard" /></a>
              <div className="text-block">
                <a className="btn " href="https://saghar-b.github.io/Weather-Dashboard-April-12/"
                  target="_blank" rel="noopener noreferrer">
                  <h6 >Weather Dashboard</h6>
                  <p className='textfont btn-outline-warning'>API/jQuery</p>
                </a>
              </div>
            </div>
            <div className="container">
              <a href="hhttps://github.com/saghar-b/Day-Planner-April-7" target="_blank" rel="">
                <img className="small-image " src={dayPlannerImage} alt="Day Planner" /></a>
              <div className="text-block">
                <a className="btn " href=" https://saghar-b.github.io/Day-Planner-April-7/"
                  target="_blank" rel="noopener noreferrer">
                  <h6>Day Planner</h6>
                  <p className='textfont btn-outline-warning'>Script/CSS</p>
                </a>
              </div>
            </div>
            <div className="container">
              <a href="https://github.com/anoorishad/Socializer" target="_blank" rel="">
                <img className="small-image " src={socializersImage} alt="Socializer" /></a>
              <div className="text-block">
                <a className="btn " href=" https://anoorishad.github.io/Socializer/"
                  target="_blank" rel="noopener noreferrer">
                  <h6 >Socializer</h6>
                  <p className='textfont btn-outline-warning'>Script/CSS</p>
                </a>
              </div>
            </div>

          </div>
        {/* </div> */}


      </div>
    </>
  );
}