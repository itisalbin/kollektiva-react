import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";
import SettingsIcon from "../Assets/Images/settings.svg";


import "./createAd.scss";

const CreateAd04 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="4" />
      <div className="grid-container">
        <CreateAdMenu />
        <div>
          <h2>Område och adress</h2>
          <div className="search-container">
            <img src={SettingsIcon} alt="En ikon"></img>
            <input type="text"></input>
          </div>
          <h3>Din exakta adress kommer inte att synas i annonsen.</h3>
        </div>
      </div>
      <CreateAdNextPrev 
      link="/create-ad5"
      text="Nästa"
      />
    </div>
  );
};

export default CreateAd04;
