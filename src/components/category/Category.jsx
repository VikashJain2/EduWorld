import React from "react";
import "./category.css";
import category1 from "../../assets/category-1.svg";
import category2 from "../../assets/category-2.svg";
import category3 from "../../assets/category-3.svg";
import category4 from "../../assets/category-4.svg";
const Category = () => {
  return (
    <div className="category">
      <h3 className="category-heading">Categories</h3>
      <h1 align="center">
        Online <span>Classes</span> For Remote Learning
      </h1>

      <div className="card-container">
        <div className="card">
          <div className="card-img">
            <img src={category1} alt="" />
          </div>
          <h3 className="category-head" align="center">
            Online Degree<br></br>Programs
          </h3>

          <p align="center" className="card-text">
            Lorem ipsum dolor consec tur elit adicing sed umod tempor.
          </p>
          <h5 className="card-course">7 Courses</h5>
        </div>

        <div className="card">
          <div className="card-img">
            <img src={category2} alt="" />
          </div>
          <h3 className="category-head" align="center">
            Non-Degree<br></br>Programs
          </h3>

          <p align="center">
            Lorem ipsum dolor consec tur elit adicing sed umod tempor.
          </p>
          <h5 className="card-course">4 Courses</h5>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={category3} alt="" />
          </div>
          <h3 className="category-head" align="center">
            Off-Campus<br></br> Programs
          </h3>

          <p align="center">
            Lorem ipsum dolor consec tur elit adicing sed umod tempor.
          </p>
          <h5 className="card-course">8 Courses</h5>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={category4} alt="" />
          </div>
          <h3 className="category-head" align="center">
            Hybrid Distance<br></br> Programs
          </h3>

          <p align="center">
            Lorem ipsum dolor consec tur elit adicing sed umod tempor.
          </p>
          <h5 className="card-course">7 Courses</h5>
        </div>
      </div>
    </div>
  );
};

export default Category;
