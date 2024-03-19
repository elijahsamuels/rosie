import React from "react";
import styles from "./styles";
import MediaCard from '../MediaCard'
import { mediaData } from "./mediaData.js";

const Media = () => {
  return (
    <div style={styles.container}>
      <div className='page-title'>Media</div>
			{mediaData.map((media) => {
				return <MediaCard key={media.title} data={media}/>
			})}
    </div>
  );
};

export default Media;
