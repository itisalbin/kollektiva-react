import React from "react";
import "./ProfileCard.scss";
import Contact from "../../Assets/Images/dummy1.webp";

//import PropTypes from "prop-types";

const ProfileCard = ({ textOne, textTwo, src, alt }) => {
  return (
    <div className="profile-card">
      <p className="card-title">Profilbild</p>
      <img src={Contact} alt={alt}></img>
      <a href="/">Uppdatera foto</a>
      <p className="confirmed">Bekräftad identitet</p>
      <p>E-postadress</p>
      <p>Bank-ID</p>
      <p>Telefonnummer</p>
    </div>
  );
};

export default ProfileCard;
