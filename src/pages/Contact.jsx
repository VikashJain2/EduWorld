import React from "react";
import Banner from "../components/BannerSection/Banner";
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact">
      <Banner />
    
      <div className="container contact-container">
        <div className="contact-detail">

        
        <h3>Contact Us</h3>
        <h1>Get <span>Connected</span> With Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, omnis.</p>

        <div className="contact-info">
            <h4 className="contact-address"><span>Address:</span>&nbsp;&nbsp;24-A Noida, Delhi</h4>
            <h4 className='contact-number'><span>Call:</span>&nbsp;&nbsp;(+91)123-456-7891</h4>
            <h4 className="contact-email"><span>Email:</span>&nbsp;&nbsp;info@eduworld.com</h4>
        </div>

        <div className="contact-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
        </div>
      </div>

      <form action="" className="contact-form">
        <h2>Let's <span>Connect</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sint.</p>
        <div className="form-name">
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
        </div>
        <input type="email" placeholder="Email" required/>
        <textarea name="" id="" rows="7" placeholder="How can we help you?"></textarea>
        <button className="btn">Send Message</button>
      </form>
      </div>
      
    </div>
  );
};

export default Contact;
