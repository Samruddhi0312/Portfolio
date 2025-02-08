import React from 'react'
import './Portfolio.css'
import project_1 from '../../assets/p1.png'
import project_2 from '../../assets/p2.png'
import project_3 from '../../assets/p3.webp'



const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
        <div className="portfolio-title">
            <h1>My Work</h1>
        </div>
        <div className="my-work-container">
          <a href="https://samruddhi0312.github.io/Bootstrap_project/" target='_blank'> <img src={project_1} alt="" /></a>
          <a href="https://jamstacksamruddhi.netlify.app/" target='_blank'><img src={project_2} alt="" /></a>
          <a href="#" target='_blank'><img src={project_3} alt=""  /></a>
            

        </div>
        <div className="my-work-showmore">
          <p>Show More</p>
          
        </div>

      
    </div>
  )
}

export default Portfolio
