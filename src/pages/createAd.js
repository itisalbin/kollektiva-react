import React from "react";
import RadioCheckboxInput from "../components /RadioCheckboxInput";
import Button from "../components /Button";

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
        <Button
        text="Nästa"
        />
      </form>
    </div>
  );
};

export default CreateAd;