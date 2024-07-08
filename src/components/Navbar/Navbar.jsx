import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const [isNavShowing,setIsNavShowing] = useState(false)
  return (
    <nav className='navbar'>
      <h1 className='navbar-logo'>Edu<span>World!</span></h1>
     
      <ul className={isNavShowing?'nav-menu active':'nav-menu'}>
        <li className='hover-underline-animation'><Link to="/">Home</Link></li>
        <li className='hover-underline-animation'><Link to="/course">Courses</Link></li>
        <li className='hover-underline-animation'><Link to="/about">About</Link></li>
        <li className='hover-underline-animation'><Link to="/contact">Contact Us</Link></li>
      <button className='sign-up'>Join For Free</button>
      </ul>
      <div className="nav-icons">
        <i className={isNavShowing?'fas fa-times':'fas fa-bars'} onClick={()=>setIsNavShowing(prev=>!prev)}></i>
      </div>
    </nav>
  )
}

export default Navbar
