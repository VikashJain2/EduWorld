import React from "react";
import Banner from "../components/BannerSection/Banner";
import about from "../assets/aboutus.jpg";
import aboutcourse from "../assets/aboutus-2.png"
import aboutlife from "../assets/aboutus-3.png"
import Features from "../components/Features/Features"
import TrustedBy from "../components/TrustedBy/TrustedBy"
import './About.css'
const About = () => {
  return (
    <div className="about">
      <Banner />
      <div className="container about-container">
        <div className="about-img">
          <img src={about} alt="" />
        </div>

        <div className="about-details">
          <h3>About Us</h3>
          <h2 className="about-heading">Welcome to Edu<span>World!</span>, Enhance your skills with best Online Courses</h2>
          <p>You can start and finish one of these popular courses in under a day - for free! Check out the list below. Take the course for free.</p>
          <div className="about-access">
          <img src={aboutcourse} alt="" />
          <div>

          <h4 className="course-access">100+ <span>Courses</span></h4>
          <p>You can start and finish one of these popular courses in under our site</p>
          </div>
          </div>

          <div className="about-access">
          <img src={aboutlife} alt="" />
          <div>

          <h4 className="course-access">Lifetime <span>Access</span></h4>
          <p>You can start and finish one of these popular courses in under our site</p>
          </div>
          </div>
        </div>
      </div>

      <Features/>
      <TrustedBy/>
    </div>
  );
};

export default About;
