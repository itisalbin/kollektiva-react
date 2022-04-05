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
            <h3>Hur många rum har din bostad?</h3>
            <TextField placeholder="Ange antal rum..." />
            <h3>Hur stor är din bostad?</h3>
            <TextField placeholder="Ange antal kvadratmeter..." />
            <h3>Vad erbjuder ditt boende?</h3>
            <div className="grid-container-3">
              <div className="grid-item">
                <RadioCheckbox lableText="Garage" type="checkbox"/>
                <RadioCheckbox lableText="Tvättmaskin" type="checkbox"/>
                <RadioCheckbox lableText="Wi-Fi" type="checkbox"/>
                <RadioCheckbox lableText="Trädgård" type="checkbox"/>
                <RadioCheckbox lableText="Bubbelpool" type="checkbox"/>

              </div>
              <div className="grid-item">
              <RadioCheckbox lableText="Dusch" type="checkbox"/>
                <RadioCheckbox lableText="Torktumlare" type="checkbox"/>
                <RadioCheckbox lableText="El ingår" type="checkbox"/>
                <RadioCheckbox lableText="Pool" type="checkbox"/>
                <RadioCheckbox lableText="Cykelplats" type="checkbox"/>
              </div>
              <div className="grid-item">
              <RadioCheckbox lableText="Badkar" type="checkbox"/>
                <RadioCheckbox lableText="Diskmaskin" type="checkbox"/>
                <RadioCheckbox lableText="Hemmagym" type="checkbox"/>
                <RadioCheckbox lableText="Bastu" type="checkbox"/>
                <RadioCheckbox lableText="Elbilsladdning" type="checkbox"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateAdNextPrev link="/create-ad4" text="Nästa" />
    </div>
  );
};

export default CreateAd03;
