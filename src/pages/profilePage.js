import React from "react";
import ClientPreviewCard from "../components /ClientPreviewCard";

const ProfilePage = () => {
  return (
    <div>
      <h5>Hej Göran</h5>
      <p>
        Hej Göran! Nu har du laddat upp din bostadsannons. Nästa steg är att
        hitta en bra hyresgäst anpassat för dig!
      </p>
      

      <ClientPreviewCard
        topText="Läs mer om Erik"
        cardHeadline="Detta är en rubrik"
        cardDecptiption="Här står ngt om mig"
        rent="15.000"
      />
    </div>
  );
};

export default ProfilePage;
