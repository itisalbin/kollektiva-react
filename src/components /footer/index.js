import React from "react";
import ContactCard from "../ContactCard";
import "./footer.scss";
//import PropTypes from "prop-types";

const Footer = () => {
  return (
    <footer className="footer">
        <p>KOLLEKTIVA</p>
        <p>Kontaktuppgifter</p>
        <ContactCard
       textOne="Kontakta oss:"
       textTwo="0725-175555"
       
       />
    </footer>
  );
};

export default Footer;