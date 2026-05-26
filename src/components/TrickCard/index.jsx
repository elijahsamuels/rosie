import React from "react";
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
      <div className="card-title">{title}</div>

      {photo && <img src={photo} alt={title} className="photo" />}
      {video && <img src={video} alt={title} className="video" />}
      {instagramURL && (
        <div className="instagram-wrapper">
          <InstagramEmbed url={instagramURL} className="instagram" width="100%" />
        </div>
      )}

      {description && (
        <div className="description">
          <strong>Description</strong>
          {description}
        </div>
      )}

      {howTo && (
        <div className="how-to">
          <strong>Instructions</strong>
          {howTo}
        </div>
      )}

      <div className="card-footer">
        <span className="category-chip">{category}</span>
      </div>
    </div>
  );
};

export default TrickCard;
