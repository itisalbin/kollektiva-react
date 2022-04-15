import React from "react";
import "./navbar.scss";
import NavbarLinks from "./NavbarLinks";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

import { useState } from "react";
import Logo from "../../Assets/Images/KOLLEKTIVA.png";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const hamburger = (
    <FiMenu
      className="hamburger-icon"
      size="40px"
      onClick={() => setOpen(!open)}
    />
  );
  const close = (
    <GrClose
      className="hamburger-icon"
      size="40px"
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <div className="mobile-navbar">
      <img className="navbar-logo" alt="KOllektiva" src={Logo}></img>
      <div className="profile-hamburger-icons">
        <CgProfile size="35px" className="profile-icon"/>
        {open ? close : hamburger}
      </div>
      {open && <NavbarLinks />}
    </div>
  );
};

export default MobileNavbar;
