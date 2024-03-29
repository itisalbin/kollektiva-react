import React from "react";
import "./profileMenuItem.scss";
import { AiOutlineHome } from "react-icons/ai";


const ProfileMenuItem = ({ text, itemIcon, alt }) => {
  return (
    <div className="profileMenuItem">
      <img src={itemIcon} alt={alt}></img>
      <p>{text}</p>
    </div>
  );
};

export default ProfileMenuItem;
