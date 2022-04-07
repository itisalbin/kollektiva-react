import React from "react";
import "./navbar.scss";
import Logo from "../../Assets/Images/KOLLEKTIVA.png";

const Navbar = ({ alt, icon, alt2, iconTwo }) => {
  return (
    <div className="navbar">
      <img alt={alt} src={Logo}></img>
      <div className="link-container hidden">
        <p>Hyr ut bostad</p>
        <p>Sök bostad</p>
        <p>Så fungerar Kollektiva</p>
        <button>Logga in</button>
      </div>
      <div className="icon-container">
        <img className="hamburger-icon" src={icon} alt={alt2}></img>
        <img className="close-icon" src={iconTwo} alt={alt2}></img>
      </div>
    </div>
  );
};

export default Navbar;
