import React, { useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import "./styles.css";

const TrickCard = ({ data }) => {
  const {
    title = "",
    photo = "",
    video = "",
    instagramURL = "",
    description = "",
    howTo = "",
    category = "Basic",
  } = data;

  return (
    <div className="card">
      <div className="title">{title}</div>

      {photo && <img src={photo} alt={title} className="photo" />}
      {video && <img src={video} alt={title} className="video" />}
      {instagramURL && (
        <InstagramEmbed url={instagramURL} className="instagram" width={"100%"} />
      )}

      {description && (
        <div className="description">
          <span>Description:</span>
          {description}
        </div>
      )}

      {howTo && (
        <div className="how-to">
          <strong>How to: </strong>
          {howTo}
        </div>
      )}

      {category && <div className="category">Category: {category}</div>}
    </div>
  );
};

export default TrickCard;
