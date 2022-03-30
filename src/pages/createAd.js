import React from "react";
import RadioCheckboxInput from "../components /RadioCheckboxInput";
import TextInput from "../components /TextInput";
import Button from "../components /Button";

//import PropTypes from "prop-types";

const CreateAd = () => {
  return (
    <div>
      <form>
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
        <TextInput name="adress" id="adress" lableText="Enter your adress:" />
        <Button
        text="Nästa"
        />
      </form>
    </div>
  );
};

export default CreateAd;