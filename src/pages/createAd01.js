import React from "react";
import RadioCheckboxInput from "../components /RadioCheckboxInput";
import TextInput from "../components /TextInput";
import Button from "../components /Button";
import ProgressCreateAd from "../components /ProgressCreateAd";


//import PropTypes from "prop-types";

const CreateAd01 = () => {
  return (
    <div>
        <ProgressCreateAd
        nr="1"/>
      
        <RadioCheckboxInput
          type="checkbox"
          name="villa"
          id="villa"
          value="villa"
          lableText="VILLA"
        />
        <RadioCheckboxInput
          type="checkbox"
          name="hus"
          id="hus"
          value="hus"
          lableText="HUS"
        />
        <Button
        text="Nästa"
        />
    </div>
  );
};

export default CreateAd01;