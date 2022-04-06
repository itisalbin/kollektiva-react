import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";
import RadioCheckbox from "../components /RadioCheckboxInput";

import "./createAd.scss";

const CreateAd02 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="2" />
      <div className="grid-container">
        <CreateAdMenu />
        <div>
          <h2>Basinformation om boende</h2>
          <div className="input-container"></div>

          <h3>Typ av bostad?</h3>
          <form>
            <div className="grid-container-2">
              <div className="grid-item">
                <RadioCheckbox type="checkbox" id="villa" lableText="Villa" />
                <RadioCheckbox type="checkbox" id="stuga" lableText="Stuga" />
              </div>
              <div className="grid-item">
                <RadioCheckbox type="checkbox" id="radhus" lableText="Radhus" />
                <RadioCheckbox type="checkbox" id="parhus" lableText="Parhus" />
              </div>
            </div>
            <h3>Hel bostad eller del av bostad?</h3>
            <div className="grid-container-2">
              <RadioCheckbox
                type="checkbox"
                id="Hela_bostaden"
                lableText="Hela bostaden"
              />
              <RadioCheckbox
                type="checkbox"
                id="part"
                lableText="Del av bostad"
              />
            </div>
            <h3>Möblerad eller omöblerad?</h3>
            <div className="grid-container-2">
              <RadioCheckbox
                type="checkbox"
                id="Möblerat"
                lableText="Möblerat"
              />
              <RadioCheckbox
                type="checkbox"
                id="Omöblerat"
                lableText="Omöblerat"
              />
            </div>
          </form>
        </div>
      </div>
      <CreateAdNextPrev link="/create-ad3" text="Nästa" backTo="/create-ad"/>
    </div>
  );
};

export default CreateAd02;
