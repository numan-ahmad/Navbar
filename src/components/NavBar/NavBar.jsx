import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="nav-fixed">
        <div className="nav-container">
          <div className="nav-heading">
            <h3>MNA'S</h3>
          </div>
          <div className="search-bar">
            <input type="search" />
          </div>
          <div className="nav-mobile" onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </div>
          <div className={`menu-container ${isOpen ? "isopen" : ""}`}>
            <div className="menu">About Us</div>
            <div className="menu">Contact Us</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
