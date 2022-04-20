import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";
import { BsSearch } from "react-icons/bs";

import "./createAd.scss";
import "./createAd4.scss";
import RadioCheckbox from "../components /RadioCheckboxInput";

const CreateAd04 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="4" />
      <div className="grid-container">
        <CreateAdMenu index="3" />
        <div className="main-container4">
          <h2>Område och adress</h2>
          <div className="flex-container-4">
            <div className="search-container">
              <BsSearch className="search-icon" size="40px" />
              <input type="text"></input>
            </div>
            <RadioCheckbox lableText="Lägg till adress"/>
          </div>
          <h3>Din exakta adress kommer inte att synas i annonsen.</h3>
        </div>
      </div>
      <CreateAdNextPrev link="/create-ad5" text="Nästa" backTo="/create-ad3" />
    </div>
  );
};

export default CreateAd04;
