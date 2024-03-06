import React from "react";
import styles from "./styles";
import pawPrint from './paw_print_large.svg'

const TrickCard = ({trick}) => {
  const { title, likes, photo, video, description, howTo, difficulty } = trick;

  return (
    <div style={styles.card}>
      <div style={styles.title}>{title}</div>
      <div style={styles.likes}>likes: {likes} <img src={pawPrint} alt='likes' style={styles.pawPrint}/></div>
      <div style={styles.photo}>
				<img src={photo} alt={title}/>
			</div>
      <div style={styles.video}>
				<img src={video} alt={title}/>
			</div>
      <div style={styles.description}>{description}</div>
      <div style={styles.howTo}>{howTo}</div>
      <div style={styles.difficulty}>{difficulty}</div>
    </div>
  );
};

export default TrickCard;
