import React from "react";
import TrickCard from "../TrickCard";
import TricksList from './TricksList.json' 
import styles from "./styles";

const TrickCards = () => {
  const sortedTricks = TricksList.sort((a, b) => a.title.localeCompare(b.title));

  return sortedTricks.map((trick) => {
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
