import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/letter-r.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a prefinal year computer science and engineering student with a motiv of bringing a change in society through technology</p>
            </div>
            <div className='footer-top-right'>
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscrible</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>@ Rishabh Jain. All rights are reserved</p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>

    </div>
  )
}

export default Footer