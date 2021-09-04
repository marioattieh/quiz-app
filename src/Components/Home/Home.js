import React from "react";
import CategoriesBar from "../Categories/CategoriesBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome!</h1>
      <p>This is a platform on which you can take many quizzes of many types</p>
      <p>Explore different types and choose which one fits you best</p>
      <p>Take the quiz and get scored directly</p>
      <CategoriesBar />
      <div className="anim"></div>
      {/* <div className="home-btn">Sign in</div>
        <div className="home-btn">Sign up</div>
        <div className="home-btn">Continue as guest</div> */}
    </div>
  );
};

export default Home;
