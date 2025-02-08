import React from 'react'
import '../Footer/Footer.css'
import logo from '../../assets/logo.jpg'
import email from '../../assets/email_icon.jpg'
import linked from '../../assets/linkedin_icon.webp'
import github from '../../assets/github_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <hr/>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I'm Samruddhi Dayanand Pachpinde. Passionate full stack developer skilled in building responsive web application.</p>

            </div>
            <div className="footer-top-right">
              <div className="footer-email-input">
                <img src={email} alt="" />
                <img src={linked} alt="" />
                <img src={github} alt="" />

              </div>
            </div>
        </div>
        <hr/>
      
    </div>
  )
}

export default Footer
