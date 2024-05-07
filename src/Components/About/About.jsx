import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/myphoto.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am an experienced Frontend Developer </p>
                    <p>I have a passion for creating beautiful and functional websites.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>React.Js</p><hr style = {{width:"80%"}}/></div>
                    <div className="about-skill"><p>Next.Js</p><hr style = {{width:"40%"}}/></div>
                    <div className="about-skill"><p>MongoDB</p><hr style = {{width:"60%"}}/></div>
                    <div className="about-skill"><p>Express.Js</p><hr style = {{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>Years of Experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>15+</h1>
                <p>Projects</p>
            </div>
        </div>
    </div>
  )
}

export default About