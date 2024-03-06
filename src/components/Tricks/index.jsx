import React from "react";
import TrickCard from "../TrickCard";
import TricksList from './TricksList.json' 
import styles from "./styles";

const TrickCards = () => {
	return TricksList.map((trick) => {
    return <TrickCard key={trick.title} trick={trick} />;
  });
};

const Tricks = () => {
  return (
    <div style={styles.container}>
      Tricks
      <TrickCards />
    </div>
  );
};

export default Tricks;
