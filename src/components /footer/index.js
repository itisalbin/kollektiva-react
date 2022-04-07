import React from "react";
import ContactCard from "../ContactCard";
import "./footer.scss";
//import PropTypes from "prop-types";

const Footer = () => {
  return (
    <footer className="footer">
      <h5>KOLLEKTIVA</h5>
      <div className="line"></div>
      <div className="grid-container">
        <div className="link-container">
          <p>Information</p>
          <p>Kontaktuppgifter</p>
          <p>Sociala medier</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
