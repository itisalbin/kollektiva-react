import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";
import Dummy from "../Assets/Images/grey_img.png";

import "./createAd.scss";
import "./createAd7.scss";

const CreateAd07 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="7" />
      <div className="container-7">
        <CreateAdMenu index="6" />
        <div className="content-container7">
          <h2 className="header-desktop">Förhadsgranska: Din bostadsprofil</h2>
          <h2 className="header-mobile">Förhadsgranska:</h2>
          <div className="headline-container">
            <p className="bold">Rubrik på bostaden</p>
            <p>Villa - Hela boendet - Möblerat</p>
            <p className="bold">15.000:- i månaden</p>
          </div>
          <div className="gray-box"></div>
          <div className="small-image-container">
            <img alt="a description" className="supporting-image" src={Dummy}></img>
            <img alt="a description" className="supporting-image" src={Dummy}></img>
            <img alt="a description" className="supporting-image" src={Dummy}></img>
            <img alt="a description" className="supporting-image" src={Dummy}></img>
          </div>
          <p className="show-all-images">Visa alla bilder...</p>
          <h5>Område: Stockholm, Aspudden</h5>
          <div className="flex-container-line">
            <div className="line"></div>
          </div>

          <div className="description-container">
            <ul>
              <li>
                <h3>Beskrivning av boendet</h3>
              </li>
              <li>Rum:</li>
              <li>Kvadratmeter:</li>
              <li>Hyr ut i fem år</li>
              <li>Tvättmaskin</li>
              <li>Önskemål av hyresgäst:</li>
              <li>Djur tillåtet</li>
              <li>Rökning tillåtet</li>
            </ul>
            <div className="empty-frame"></div>
          </div>
          <div className="flex-container-line">
            <div className="line"></div>
          </div>
          <div className="offers-container">
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
