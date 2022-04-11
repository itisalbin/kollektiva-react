import React from "react";
import "./CreateAdMenu.scss";

const headings = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6", "Page 7"];

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
