import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";
import ProfileCard from "../components /ProfileCard";

import "./createAd.scss";

const CreateAd06 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="6" />
      <div className="grid-container">
        <CreateAdMenu />
        <div className="main-container6 main-container">
          <h2>Din profil: Ladda upp din bostad</h2>
          <h3>Rubrik för ditt boende</h3>
          <input
            className="rent-input"
            type="text"
            placeholder="Skriv din rubrik här..."
          ></input>
          <div className="profile-card">
            <ProfileCard alt="Profilbild" />
          </div>
        </div>
      </div>
      <CreateAdNextPrev link="/create-ad7" text="Nästa" backTo="/create-ad5" />
    </div>
  );
};

export default CreateAd06;
