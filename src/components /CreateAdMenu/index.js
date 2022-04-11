import React from "react";
import "./CreateAdMenu.scss";

const headings = [
  "Hyresvärd/hyresgäst",
  "Basinformation om boende",
  "Storlek och bekvämligheter",
  "Område & adress",
  "Hyra och önskad hyresgäst",
  "Din profil: ladda upp din bostad",
  "Förhandsgranska",
];

const CreateAdMenu = ({ index }) => {
  const tags = [];
  for (let i = 0; i < headings.length; i++) {
    if (i == index) {
      tags.push(
        <li key={i}>
          <strong>{headings[i]}</strong>
        </li>
      );
    } else {
      tags.push(<li key={i}>{headings[i]}</li>);
    }
  }

  return (
    <div className="create-ad-menu">
      <ul>{tags}</ul>
    </div>
  );
};

export default CreateAdMenu;
