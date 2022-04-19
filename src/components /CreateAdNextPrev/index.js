import React from "react";
import "./CreateAdNextPrev.scss";
import { IoIosArrowBack } from "react-icons/io";


const CreateAdNextPrev = ({ backTo, abort, link, text }) => {
  return (
    <div className="create-ad-next-prev">
      <div className="back-container">
        <IoIosArrowBack size="25px"/>
      <a href={backTo}> Tillbaka</a>
      </div>
      <div className="flex-container">
        <a className="abort" href="/">
          Avbryt
        </a>
        <div className="next-btn">
          <a  href={link}>
            {text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreateAdNextPrev;
