import React, { useState } from "react";
import "./Header.css";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Home from "../Home/Home";
import About from "../About/About";
import Category from "../Categories/Category";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Header = () => {
  const [first, setFirst] = useState(true);
  const [visible, setVisible] = useState(false);
  const slideIn = { animation: "slide-in 700ms forwards" };
  const slideOut = { animation: "slide-out 700ms forwards" };
  function toggleSidebar() {
    setVisible((prev) => !prev);
    setFirst(false);
  }
  return (
    <Router>
      <div className="header-box">
        <DehazeIcon onClick={() => toggleSidebar()} className="dehaze-icon" />
        <h1 className="header-title">Quiz App</h1>
        <div></div>
      </div>
      {first ? null : (
        <div style={visible ? slideIn : slideOut} className="sidebar">
          <div className="header-box1">
            <p className="dash">Dashboard</p>
            <DehazeIcon
              onClick={() => toggleSidebar()}
              className="dehaze-icon1"
            />
          </div>
          <div className="sidebar-body"></div>
        </div>
      )}
      <div className="component-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Category/:catId:name" component={Category} />
        </Switch>
      </div>
    </Router>
  );
};

export default Header;
