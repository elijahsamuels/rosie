import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import styles from "./styles";
// import "./styles.css";

const MediaCard = ({ data }) => {
  const {
    title = "",
    photo = "",
    imageSource = "",
    video = "",
    instagramURL = "",
    description = "",
    // howTo = "",
    // category = "Basic",
  } = data;

  return (
    <div>
      {title && <div>{title}</div>}
      {imageSource && <img src={imageSource} alt={title} style={styles.photoCard} />}
      {photo && <img src={photo} alt={title} className="photo" />}
      {video && <img src={video} alt={title} className="video" />}
      {instagramURL && <InstagramEmbed url={instagramURL} className="instagram" width={"100%"} />}
      {description && (
        <div className="description">
          <span>Description:</span>
          {description}
        </div>
      )}
    </div>
  );
};

export default MediaCard;
