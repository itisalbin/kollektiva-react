import React from "react";
import Button from "../Button";
import "./CreateAdNextPrev.scss";

const CreateAdNextPrev = ({ backTo, abort }) => {
  return (
    <div className="create-ad-next-prev">
        <a href={backTo}> Tillbaka</a>
        <div>
        <a className="abort" href={abort}> Avbryt</a>
        <Button
        text="Nästa"
        />
        </div>
    </div>
  );
};

export default CreateAdNextPrev;