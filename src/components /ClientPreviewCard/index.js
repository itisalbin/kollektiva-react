import React from "react";
import "./clientPreviewCard.scss";

//import PropTypes from "prop-types";

const ClientPreviewCard = ({ topText, cardHeadline, cardDecptiption, rent, image, alt }) => {
  return (
    <div className="client-card">
      <div>
        <p className="client-heading ">{topText}</p>
      </div>
      <img src={image} alt={alt}></img>
      <p className="client-heading">{cardHeadline}</p>
      <p className="client-p">{cardDecptiption}</p>
      <p className="client-p rent">{rent}</p>
    </div>
  );
};

export default ClientPreviewCard;
