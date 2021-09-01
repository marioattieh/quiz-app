import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome!</h1>
      <div className="btn">Sign in</div>
      <div className="btn">Sign up</div>
      <div className="btn">Continue as guest</div>
    </div>
  );
};

export default Home;
