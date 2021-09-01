import React, { useState } from "react";
import "./Header.css";
import DehazeIcon from "@material-ui/icons/Dehaze";

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
    <div>
      <div className="header-box">
        <DehazeIcon onClick={() => toggleSidebar()} className="dehaze-icon" />
        <h1 className="header-title">Quiz App</h1>
      </div>
      {first ? null : (
        <div style={visible ? slideIn : slideOut} className="sidebar">
          <div className="header-box1">
            <DehazeIcon
              onClick={() => toggleSidebar()}
              className="dehaze-icon1"
            />
          </div>
          <div className="sidebar-body">sdfjh</div>
        </div>
      )}
    </div>
  );
};

export default Header;
