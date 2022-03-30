import React from "react";
import "./contactCard.scss";
import Contact from '../../Assets/Images/contact.svg';

//import PropTypes from "prop-types";

const ContactCard = ({textOne, textTwo, src, alt }) => {
  return (
    <div className="card">
      <p className="card-title">Behöver du hjälp</p>
      <img src={Contact} alt={alt}></img>
      <p>{textOne}</p>
      <p>{textTwo}</p>
    </div>
  );
};

export default ContactCard;
