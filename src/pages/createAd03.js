import React from "react";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";
import CreateAdMenu from "../components /CreateAdMenu";
import TextField from "../components /TextInput";
import RadioCheckbox from "../components /RadioCheckboxInput";

import "./createAd.scss";

const CreateAd03 = () => {
  return (
    <div className="create-ad-page">
      <ProgressCreateAd nr="3" />
      <div className="grid-container">
        <CreateAdMenu />
        <div>
          <h2>Storlek och bekvämligheter</h2>
          <div className="">
            <div className="text-field-container">
            <h3>Hur många rum har din bostad?</h3>
            <TextField placeholder="Ange antal rum..." />
            <h3>Hur stor är din bostad?</h3>
            <TextField placeholder="Ange antal kvadratmeter..." />
            </div>
            <div className="grid-container-3">
            <h3>Vad erbjuder ditt boende?</h3>
              <div className="grid-item">
                <RadioCheckbox
                  lableText="Garage"
                  type="checkbox"
                   id="Garage"
                />
                <RadioCheckbox lableText="Tvättmaskin" type="checkbox" id="tvättmaskin" />
                <RadioCheckbox lableText="Wi-Fi" type="checkbox" id="wifi"/>
                <RadioCheckbox lableText="Trädgård" type="checkbox" id="trädgård"/>
                <RadioCheckbox lableText="Bubbelpool" type="checkbox" id="bubbelpool"/>
              </div>
              <div className="grid-item">
                <RadioCheckbox lableText="Dusch" type="checkbox" id="dusch"/>
                <RadioCheckbox lableText="Torktumlare" type="checkbox" id="torktumlare"/>
                <RadioCheckbox lableText="El ingår" type="checkbox" id="el"/>
                <RadioCheckbox lableText="Pool" type="checkbox" id="pool"/>
                <RadioCheckbox lableText="Cykelplats" type="checkbox" id="cykelplats"/>
              </div>
              <div className="grid-item">
                <RadioCheckbox lableText="Badkar" type="checkbox" id="badkar"/>
                <RadioCheckbox lableText="Diskmaskin" type="checkbox" id="diskmaskin"/>
                <RadioCheckbox lableText="Hemmagym" type="checkbox" id="gym"/>
                <RadioCheckbox lableText="Bastu" type="checkbox" id="bastu"/>
                <RadioCheckbox lableText="Elbilsladdning" type="checkbox" id="elbil"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateAdNextPrev link="/create-ad4" text="Nästa" backTo="/create-ad2"/>
    </div>
  );
};

export default CreateAd03;
