import React from "react";
import "./navbar.scss";
import NavbarLinks from "./NavbarLinks";
import Logo from "../../Assets/Images/KOLLEKTIVA.png";

const DesktopNavbar = () => {
  return (
    <div className="desktop-navbar">
      <NavbarLinks />
    </div>
  );
};

export default DesktopNavbar;
