import React from "react";
import TrickCard from "../TrickCard";
import { tricksData } from "./tricksData.js";
import styles from "./styles.js";

const BasicTrickCards = () => {
  const sortedTricks = tricksData
    .sort((a, b) => a.title.localeCompare(b.title))
    .filter((trick) => trick.category === "Basic");

  return (
    <>
      <div style={styles.title}>Basic Tricks</div>
      {sortedTricks.map((trick) => {
        return <TrickCard key={trick.title} trick={trick} />;
      })}
    </>
  );
};

const CircusTrickCards = () => {
  const sortedTricks = tricksData
    .sort((a, b) => a.title.localeCompare(b.title))
    .filter((trick) => trick.category === "Circus");

  return (
    <>
      <div style={styles.title}>Circus Tricks</div>
      {sortedTricks.map((trick) => {
        return <TrickCard key={trick.title} trick={trick} />;
      })}
    </>
  );
};

const Tricks = () => {
  return (
    <div style={styles.container}>
      Tricks
      <BasicTrickCards />
      <CircusTrickCards />
    </div>
  );
};

export default Tricks;
