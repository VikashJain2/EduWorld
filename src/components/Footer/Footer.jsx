import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer>

    
    <div className='footer'>
      <div className="footer-first">
        <h2 className="footer-logo">Edu<span>World!</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, mollitia consequatur dignissimos facere aperiam earum.</p>

        <div className="footer-info">
            <h4 className="footer-address"><span>Address:</span>&nbsp;&nbsp;24-A Noida, Delhi</h4>
            <h4 className='footer-number'><span>Call:</span>&nbsp;&nbsp;(+91)123-456-7891</h4>
            <h4 className="footer-email"><span>Email:</span>&nbsp;&nbsp;info@eduworld.com</h4>
        </div>
        </div>
        <div className="footer-second">
            <h2 className="online-platform">Online Platform</h2>
            <a href="/about">About</a>
            <a href="/course">Courses</a>
            <a href="/">Instructor</a>
            <a href="/">Events</a>
            <a href="/">Support</a>
        </div>

        <div className="footer-third">
        <h2 className="links">Links</h2>
            <a href="/contact">Contact Us</a>
            <a href="/">Private Policy</a>
            <a href="/">Terms And Conditions</a>
            <a href="/">sign In/Registration</a>
            <a href="/">FAQ's</a>
        </div>

      <div className="footer-forth">
        <h2 className='newsletter'>NewsLetter</h2>
        <p>Enter your email address to register to our newsletter subscription</p>
        <div className="form">
            <input type="text" placeholder='Enter your email'/>
            
        <button>Subscribe&nbsp;<i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
      
      
    </div>
    <div className="footer-container">
        <div className="container">
        <p className='copy-right'>&copy; Copyright All Rights Reserved by <span>vikashJain</span></p>
        </div>
    </div>
    </footer>
  )
}

export default Footer
