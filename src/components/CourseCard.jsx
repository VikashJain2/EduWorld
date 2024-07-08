import React from "react";
import "./PopularCourses/PopularCourse.css";
import { Link } from "react-router-dom";
const CourseCard = (props) => {
  return (
    <div className="course-card">
      <div className="course-img">
        <img src={props.img} alt="" />
      </div>
      <h5 className="course-level">{props.level}</h5>
      <div className="course-desc">
        <h4 className="course-detail">{props.detail}</h4>
      </div>
      <div className="course-rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <p className="rating"> ({props.rating} Rating)</p>
      </div>
      <div className="course-price">${props.price}</div>
      <div className="course-learners">
        <div className="first">
          <i className="fa-solid fa-school"></i> {props.lesson} Lessons
        </div>
        <div className="second">
          <i className="fa-solid fa-users"></i> {props.students} Students
        </div>
      </div>
      <div className="card-btn">

      <button className="course-btn">Learn More</button>
      <button className="course-btn">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;
