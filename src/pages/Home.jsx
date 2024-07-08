import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/BannerSection/Banner'
import Category from '../components/category/Category'
import PopularCourse from '../components/PopularCourses/PopularCourse'
import Features from '../components/Features/Features'
import TrustedBy from '../components/TrustedBy/TrustedBy'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      
      <Banner/>
      <Category/>
      <PopularCourse/>
      <Features/>
      <TrustedBy/>
      
    </div>
  )
}

export default Home
