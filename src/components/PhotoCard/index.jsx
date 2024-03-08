import React from "react";
import styles from "./styles";

const PhotoCard = ({ photo }) => {
  const { imageSource, title = "" } = photo;

  return (
    <div>
      {title ? <div>{title}</div> : null}
      <img src={imageSource} alt={title} style={styles.photoCard}/>
    </div>
  );
};

export default PhotoCard;
