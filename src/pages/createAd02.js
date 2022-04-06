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
                <RadioCheckbox
                  type="checkbox"
                  name="villa"
                  id="villa"
                  value="villa"
                  lableText="Villa"
                />
                <RadioCheckbox
                  type="checkbox"
                  name="stuga"
                  id="stuga"
                  value="stuga"
                  lableText="Stuga"
                />
              </div>
              <div className="grid-item">
                <RadioCheckbox
                  type="checkbox"
                  name="radhus"
                  id="radhus"
                  value="radhus"
                  lableText="Radhus"
                />
                <RadioCheckbox
                  type="checkbox"
                  name="parhus"
                  id="parhus"
                  value="parhus"
                  lableText="Parhus"
                />
              </div>
            </div>
            <h3>Hel bostad eller del av bostad?</h3>
            <div className="grid-container-2">
              <RadioCheckbox
                type="checkbox"
                name="Hela_bostaden"
                id="Hela_bostaden"
                value="Hela_bostaden"
                lableText="Hela bostaden"
              />
              <RadioCheckbox
                type="checkbox"
                name="part"
                id="part"
                value="part"
                lableText="Del av bostad"
              />
            </div>
            <h3>Möblerad eller omöblerad?</h3>
            <div className="grid-container-2">
              <RadioCheckbox
                type="checkbox"
                name="Möblerat"
                id="Möblerat"
                value="Möblerat"
                lableText="Möblerat"
              />
              <RadioCheckbox
                type="checkbox"
                name="Omöblerat"
                id="Omöblerat"
                value="Omöblerat"
                lableText="Omöblerat"
              />
            </div>
          </form>
        </div>
      </div>
      <CreateAdNextPrev link="/create-ad3" text="Nästa" />
    </div>
  );
};

export default CreateAd02;
