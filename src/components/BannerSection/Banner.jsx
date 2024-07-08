import React from 'react'
import BannerImage from '../../assets/BannerImage.jpg'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
      <div className="banner-left">
        <h2>Enhance Your <span>Skills</span> With Best <span>Online</span> Courses</h2>
        <p>"Empower Your Mind, Expand Your Horizons: Learning Redefined."</p>
        <button className='banner-button'>Get Started</button>
      </div>
      <div className="banner-right">
        <img src={BannerImage} alt="" />
      </div>
    </div>
  )
}

export default Banner
