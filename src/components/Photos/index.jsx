import React from "react";
import styles from "./styles";
import PhotoCard from '../PhotoCard'
import rosieGif from '../../images/gif/rosieGif.gif'

const photo = {
	imageSource: rosieGif,
	title: 'rosie 1'
}

const Photos = () => {
  return (
    <div style={styles.container}>
      Photos
			<PhotoCard photo={photo}/>
    </div>
  );
};

export default Photos;
