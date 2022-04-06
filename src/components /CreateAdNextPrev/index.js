import React from "react";
import "./CreateAdNextPrev.scss";

const CreateAdNextPrev = ({ backTo, abort, link, text }) => {
  return (
    <div className="create-ad-next-prev">
      <a href={backTo}> Tillbaka</a>
      
      <div className="flex-container">
        <a className="abort" href="/">
          Avbryt
        </a>
        <div className="btn">
          <a  href={link}>
            {text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreateAdNextPrev;
