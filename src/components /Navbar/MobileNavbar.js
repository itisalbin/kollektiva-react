import React from "react";
import "./navbar.scss";
import NavbarLinks from "./NavbarLinks";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";



const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
const hamburger = <FiMenu
  className="hamburger-icon"
  size="40px"
  onClick={() => setOpen(!open)}
/>
const close = <GrClose
className="hamburger-icon"
size="40px"
onClick={() => setOpen(!open)}
/>
  return (
    <div className="mobile-navbar">
        {open ? close : hamburger}
      {open && <NavbarLinks />}
    </div>
  );
};

export default MobileNavbar;