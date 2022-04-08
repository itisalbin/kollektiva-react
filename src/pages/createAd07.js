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
        <div className="main-container7">
          <h2>Förhadsgranska: Såhär ser din bostadsprofil ut</h2>
          <div className="headline-container">
            <p className="bold">Rubrik på bostaden</p>
            <p>Villa - Hela boendet - Möblerat</p>
            <p className="bold">15.000:- i månaden</p>
          </div>
          <img alt="your house" className="main-image" src={Dummy}></img>
          <div className="small-image-container">
            <img alt="a description" className="supporting-image" src={Dummy}></img>
            <img alt="a description" className="supporting-image" src={Dummy}></img>
            <img alt="a description" className="supporting-image" src={Dummy}></img>
            <img alt="a description" className="supporting-image no-margin" src={Dummy}></img>
          </div>
          <p className="show-all-images">Visa alla bilder...</p>
          <h5>Område: Stockholm, Aspudden</h5>
          <div className="flex-container-line">
            <div className="line"></div>
          </div>

          <div className="description-container">
            <h3>Beskrivning av boendet</h3>
            <p></p>
          </div>
          <div className="flex-container-line">
            <div className="line"></div>
          </div>
          <div className="description-container">
            <h3>Vad detta boendet erbjuder:</h3>
            <ul>
              <li>Garage</li>
              <li>Pool</li>
              <li>Dusch</li>
              <li>Tvättmaskin</li>
              <li>Diskmaskin</li>
              <li>Hemmagym</li>
              <li>Wi-Fi</li>
            </ul>
          </div>
          <div className="flex-container-line">
            <div className="line"></div>
          </div>
        </div>
      </div>
      <CreateAdNextPrev link="/create-ad8" text="Nästa" backTo="/create-ad6" />
    </div>
  );
};

export default CreateAd07;
