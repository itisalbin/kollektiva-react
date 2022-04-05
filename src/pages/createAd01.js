import React from "react";
import RadioCheckboxInput from "../components /RadioCheckboxInput";
import ProgressCreateAd from "../components /ProgressCreateAd";
import CreateAdNextPrev from "../components /CreateAdNextPrev";


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
          lableText="HUUUSSS"
        />
        <CreateAdNextPrev
        
        />
    </div>
  );
};

export default CreateAd01;