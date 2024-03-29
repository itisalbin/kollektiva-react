import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";
import ProfileCard from "../components /ProfileCard";
import Dummy from "../Assets/Images/grey_img.png";
import { AiFillCamera } from "react-icons/ai";

import "./createAd.scss";
import "./createAd6.scss";

const CreateAd06 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="6" />
      <div className="grid-container">
        <CreateAdMenu index="5" />
        <div className="main-container6 main-container">
          <h2>Din profil: Ladda upp din bostad</h2>
          <h3>Rubrik för ditt boende</h3>
          <input
            className="rent-input"
            type="text"
            placeholder="Skriv din rubrik här..."
          ></input>
          <div className="first-section">
            <div className="description-container">
              <div className="container">
                <div className="text-container">
                  <h5>Omslagsbild</h5>
                  <p>Ditt omslagsfoto utgör en gäst första intryck.</p>
                </div>

                <button className="btn-change-photo">Ändra foto</button>
                <button className="btn-two">
                  Ta foto <AiFillCamera className="camera-icon" size="24px" />{" "}
                </button>
              </div>
              <img src={Dummy}></img>
            </div>

            <div className="description-container">
              <div className="container">
                <div className="secont-text-container">
                  <h5>Omslagsbild</h5>
                  <p>Ditt omslagsfoto utgör en gäst första intryck.</p>
                </div>
              </div>
              <div className="right-container">
                <p>Beskrivning av boendet...</p>
              </div>
            </div>
          </div>

          <div className="second-section">
            <div className="headline-button-container">
              <h5>Foton</h5>
              <button className="btn-one">Ladda upp foton</button>
              <button className="btn-two">
                Ta foto <AiFillCamera className="camera-icon" size="24px" />{" "}
              </button>
            </div>
            <div className="image-container">
              <div>
                <img src={Dummy}></img>
                <p>Lägg till beskrivning...</p>
              </div>
              <div>
                <img src={Dummy}></img>
                <p>Lägg till beskrivning...</p>
              </div>
              <div>
                <img src={Dummy}></img>
                <p>Lägg till beskrivning...</p>
              </div>
              <div>
                <div className="image-input">
                  <p>Lägg till fler...</p>
                </div>
                <p>Lägg till beskrivning...</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateAdNextPrev link="/create-ad7" text="Nästa" backTo="/create-ad5" />
    </div>
  );
};

export default CreateAd06;
