import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
import profile_img from '../../assets/myphoto.jpg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=''/>
        <h1><span>I am Rishabh Jain,</span> Frontend Developer based in India</h1>
        <p>I am a prefinal year student of computer science and engineering from Ramdeobaba College and Management.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero