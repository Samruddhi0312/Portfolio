import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About Me</h1>

      </div>
      <div className="about-section">
        <div className="about-left">
          <div className="about-para">
            <p>"I'm a passionate React front end developer with a background in Information Technology and a knack for building dynamic, user-friendly web applications. Currently expanding my skill set through full-stack development training, I aim to craft seamless digital experiences."</p>
          </div>
        </div>

        <div className="about-right">
          <div className="about-skills">
            <p className="about-skill">HTML<hr style={{ width: "70%" }} /></p>
            <p className="about-skill">CSS <hr style={{ width: "70%" }} /></p>
            <p className="about-skill">JavaScript<hr style={{ width: "60%" }} /></p>
            <p className="about-skill">React Js<hr style={{ width: "50%" }} /></p>
          </div>
        </div>


      </div>
    </div>
      
    
  )
}

export default About
