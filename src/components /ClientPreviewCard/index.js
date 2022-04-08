import React from "react";
import "./clientPreviewCard.scss";
import Image from "../../Assets/Images/dummy1.webp";

//import PropTypes from "prop-types";

const ClientPreviewCard = ({
  topText,
  cardHeadline,
  cardDecptiption,
  rent,
  alt,
}) => {
  return (
    <div className="client-card">
      <div>
        <p className="client-heading ">{topText}</p>
      </div>
      <img src={Image} alt={alt}></img>
      <p className="client-heading">{cardHeadline}</p>
      <p className="client-p">{cardDecptiption}</p>
      <p className="client-p rent">{rent}kr/månad</p>
    </div>
  );
};

export default ClientPreviewCard;
