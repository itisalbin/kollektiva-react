import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";
import Dummy from "../Assets/Images/dummy2.webp";

import "./createAd.scss";

const CreateAd07 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="7" />
      <div className="grid-container">
        <CreateAdMenu />
        <div className="main-container">
          <h2>Förhadsgranska: Såhär ser din bostadsprofil ut</h2>
          <div className="headline-container">
            <p className="bold">Rubrik på bostaden</p>
            <p>Villa - Hela boendet - Möblerat</p>
            <p className="bold">15.000:- i månaden</p>
          </div>
          <img className="main-image" src={Dummy}></img>
          <div className="small-image-container">
            <img className="supporting-image" src={Dummy}></img>
            <img className="supporting-image" src={Dummy}></img>
            <img className="supporting-image" src={Dummy}></img>
            <img className="supporting-image" src={Dummy}></img>
          </div>
        </div>
      </div>
      <CreateAdNextPrev link="/create-ad8" text="Nästa" backTo="/create-ad6" />
    </div>
  );
};

export default CreateAd07;
