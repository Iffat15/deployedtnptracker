import React from 'react'
import './About.css'
import about_img from '../../Assets/about.png'
import play_icon from '../../Assets/edusity_assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" />
      </div>
      <div className="about-right">
        <img src={play_icon} alt="" />
      </div>
    </div>
  )
}

export default About
