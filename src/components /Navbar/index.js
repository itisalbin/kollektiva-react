import React from "react";
import "./navbar.scss";
import Button from "../Button";
import Logo from "../../Assets/Images/KOLLEKTIVA.png"

const Navbar = ({alt}) => {
  return (
    <div className="navbar">
      <img alt={alt} src={Logo}></img>
      <div className="link-container">
        <p>Hyr ut bostad</p>
        <p>Sök bostad</p>
        <p>Så fungerar Kollektiva</p>
      </div>
      <button>Logga in</button>
    
    </div>
  );
};

export default Navbar;
