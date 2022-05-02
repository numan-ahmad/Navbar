import React from "react";

const NavBar = () => {
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
          <div className="menu-container">
            <div className="menu">About Us</div>
            <div className="menu">Contact Us</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
