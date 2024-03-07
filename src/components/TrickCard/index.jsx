import React, { useState } from "react";
import styles from "./styles";
import pawPrint from "../../images/paw_print_large.svg";

const TrickCard = ({ trick }) => {
	
		const {
			title = "",
			likes = 0,
			photo = "",
			video = "",
			description = "",
			howTo = "",
			category = 'Basic',
		} = trick;

	const [trickCount, setTrickCount] = useState(likes)

  const handleClick = () => {
    // TODO: limit this by UserAgent data (IP, mac, etc...)
		setTrickCount(trickCount + 1)
  };

  return (
    <div style={styles.card}>
      <div style={styles.title}>{title}</div>
      <div style={styles.likes}>
        likes: {trickCount}
        <img
          src={pawPrint}
          alt="likes"
          style={styles.pawPrint}
          onClick={handleClick}
        />
      </div>
      <div style={styles.photo}>
        <img src={photo} alt={title} />
      </div>
      <div style={styles.video}>
        <img src={video} alt={title} />
      </div>
      <div>
        <div style={styles.description}>
          <strong>Description: </strong>
          {description}
        </div>
      </div>
      <div>
        <div style={styles.howTo}>
          <strong>How to: </strong>
          {howTo}
        </div>
      </div>
      <div style={styles.category}>Category: {category}</div>
    </div>
  );
};

export default TrickCard;
