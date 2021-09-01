import React, { useState } from "react";
import "./Header.css";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Home from "../Home/Home";

const Header = () => {
  const [first, setFirst] = useState(true);
  const [visible, setVisible] = useState(false);
  const slideIn = { animation: "slide-in 700ms forwards" };
  const slideOut = { animation: "slide-out 700ms forwards" };
  const pageSlideIn = { animation: "page-slide-in 700ms forwards" };
  const pageSlideOut = { animation: "page-slide-out 700ms forwards" };
  function toggleSidebar() {
    setVisible((prev) => !prev);
    setFirst(false);
  }
  return (
    <div>
      <div className="header-box">
        <DehazeIcon onClick={() => toggleSidebar()} className="dehaze-icon" />
        <h1 className="header-title">Quiz App</h1>
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
      {first ? (
        <div className="page-container">
          <Home />
        </div>
      ) : (
        <div
          style={visible ? pageSlideIn : pageSlideOut}
          className="page-container"
        >
          <Home />
        </div>
      )}
    </div>
  );
};

export default Header;
