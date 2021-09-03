import React from "react";
import Categories from "../Categories/Categories";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h1 className="home-title">Welcome!</h1>
        <p>
          This is a platform on which you can take many quizzes of many types
        </p>
        <p>Explore different types and choose which one fits you best</p>
        <p>Take the quiz and get scored directly</p>
        <Categories />
        {/* <div className="home-btn">Sign in</div>
        <div className="home-btn">Sign up</div>
        <div className="home-btn">Continue as guest</div> */}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          transform="scale(1,1)"
          transform-origin="center"
          fill="#9f86c0"
          fillOpacity="1"
          d="M0,32L48,42.7C96,53,192,75,288,90.7C384,107,480,117,576,101.3C672,85,768,43,864,53.3C960,64,1056,128,1152,149.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          transform="scale(-1,-1)"
          transform-origin="center"
          fill="#9f86c0"
          fillOpacity="1"
          d="M0,32L48,42.7C96,53,192,75,288,90.7C384,107,480,117,576,101.3C672,85,768,43,864,53.3C960,64,1056,128,1152,149.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Home;
