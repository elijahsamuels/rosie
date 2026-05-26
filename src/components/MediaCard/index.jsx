import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const MediaCard = ({ data }) => {
  const {
    title = "",
    photo = "",
    imageSource = "",
    video = "",
    instagramURL = "",
    description = "",
  } = data;

  return (
    <div className="media-card">
      {title && <div className="media-card-title">{title}</div>}
      
      {imageSource && (
        <img src={imageSource} alt={title} className="media-card-photo" />
      )}
      {photo && (
        <img src={photo} alt={title} className="media-card-photo" />
      )}
      {video && (
        <img src={video} alt={title} className="media-card-video" />
      )}
      {instagramURL && (
        <InstagramEmbed 
          url={instagramURL} 
          className="media-card-instagram" 
          width="100%" 
        />
      )}
      
      {description && (
        <div className="media-card-description">
          <strong>Description</strong>
          {description}
        </div>
      )}
    </div>
  );
};

export default MediaCard;
