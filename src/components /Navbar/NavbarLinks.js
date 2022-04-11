import React from "react";
import "./navbar.scss";
import Logo from "../../Assets/Images/KOLLEKTIVA.png";

const NavbarLinks = () => {
    return (
      <div className="navbar-links">
        <div className="link-container hidden">
          <a href="/create-ad">Hyr ut bostad</a>
          <a href="/">Sök bostad</a>
          <a href="/">Så fungerar Kollektiva</a>
          <button>Logga in</button>
        </div>
      </div>
    );
  };
  
  export default NavbarLinks;