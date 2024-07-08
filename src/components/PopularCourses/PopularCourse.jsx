import React from 'react'
import "./PopularCourse.css"
import CourseCard from '../CourseCard'
import { course } from './Course'
import { Link } from 'react-router-dom'
const PopularCourse = () => {
  return (
    <div className='popular-course'>
      <h3 className='popular-heading' align="center">Popular Courses</h3>

      <h1 className='popular-desc' align="center">Pick A <span>Course</span> To Get Started</h1>
    <div className="course-container">

      {
        course.filter((item,idx)=> idx<6).map(item=>{
          return <CourseCard key={item.id} img={item.image} level={item.level} detail={item.detail} rating={item.rating} price={item.price} lesson={item.lesson} students={item.students}/>
        })
      }

      {/* <CourseCard img={course1} level="Beginner" detail="Build Responsive Real- World Website With HTML, CSS And Js" rating="5.0/5" price="29.00" lesson="8" students="20"/>
      <CourseCard img={course2} level="Advanced" detail="Java Programming MasterClass For Software Developers" rating="4.5/5" price="49.00" lesson="15" students="35"/>
      <CourseCard img={course3} level="Intermediate" detail="The Complete Comtasia Course For Content Creators" rating="3.0/5" price="35.00" lesson="13" students="25"/>
      <CourseCard img={course4} level="Intermediate" detail="The Complete Data Science Course Using Python" rating="5.0/5" price="55.00" lesson="25" students="40"/>
      <CourseCard img={course5} level="Advanced" detail="The Complete Cyber Security Course For Ethical Hacker" rating="4.5/5" price="46.00" lesson="22" students="15"/>
      <CourseCard img={course6} level="Advanced" detail="The Complete Cloud Computing Course For Cloud Engineers" rating="5.0/5" price="60.00" lesson="25" students="35"/> */}
      
    </div>
   <Link to="/course">
  <button className='course-btn-2'>Browse More Courses&nbsp;<i className="fa-solid fa-arrow-right"></i></button> </Link> 
      
    </div>
  )
}

export default PopularCourse
