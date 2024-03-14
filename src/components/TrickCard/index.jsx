import React, { useState } from "react";
import "./styles.css";
import pawPrint from "../../images/paw_print_large.svg";

const TrickCard = ({ trick }) => {
  const {
    title = "",
    likes = 0,
    photo,
    video,
    description = "",
    howTo = "",
    category = "Basic",
  } = trick;

  const [trickCount, setTrickCount] = useState(likes);

  const handleClick = () => {
    // TODO: limit this by UserAgent data (IP, mac, etc...)
    setTrickCount(trickCount + 1);
  };

  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="likes">
        likes: {trickCount}
        <img
          src={pawPrint}
          alt="likes"
          className="paw-print"
          onClick={handleClick}
        />
      </div>

      {photo && <img src={photo} alt={title} className="photo" />}
      {video && <img src={video} alt={title} className="video" />}

      <div className="description">
        <span>Description:</span>
        {description}
      </div>

      <div className="how-to">
        <strong>How to: </strong>
        {howTo}
      </div>

      <div className="category">Category: {category}</div>
    </div>
  );
};

export default TrickCard;
