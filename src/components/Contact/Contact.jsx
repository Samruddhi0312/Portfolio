import React from 'react'
import '../Contact/Contact.css'
import email from  '../../assets/email_icon.jpg'
import location from  '../../assets/location_icon.jpg'
import call from  '../../assets/call_icon.png'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>

        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={email} alt="" /> <p>samrudhipachpinde63@gamil.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="" /> <p>Pune</p>

                    </div>
                    <div className="contact-detail">
                        <img src={call} alt="" /> <p>9421841071</p>

                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
