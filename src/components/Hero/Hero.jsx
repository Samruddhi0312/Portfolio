import React from 'react'
import './Hero.css'
import profile_img from '../../assets/ProfilePic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div className='hero' id='home'>
            <img className='hero-img' src={profile_img} alt="" />
            <h1><span>I'm Samruddhi Pachpinde,</span> Fullstack Developer.</h1>
            <p>Hello... I'm Samruddhi Dayanand Pachpinde. Passionate full stack developer skilled in building responsive web application. </p>

                <div className="hero-action">
                    <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                    <div className="hero-resume">My Resume</div>
                    

                </div>

        </div>
    )
}

export default Hero
