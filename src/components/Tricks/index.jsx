import React, { useState, useMemo } from "react";
import TrickCard from "../TrickCard";
import { tricksData } from "./tricksData.js";
import styles from "./styles.js";
import "./styles.css";

const Search = ({ searchString, handleChange }) => {
  return (
    <label>
      Search Tricks:
      <input
        type="text"
        placeholder="Search Tricks..."
        className="search"
        value={searchString}
        onChange={handleChange}
      />
      Count: {Object.entries(tricksData).length - 1}
    </label>
  );
};

const Tricks = () => {
  const [searchString, setSearchString] = useState("");

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const filteredTricks = useMemo(() => {
    return tricksData
      .sort((a, b) => a.title.localeCompare(b.title))
      .filter(
        (trick) =>
          trick.description.includes(searchString) ||
          trick.title.includes(searchString)
      );
  }, [searchString]);

  const BasicTrickCards = () => {
    const basicTricks = filteredTricks.filter(
      (trick) => trick.category === "Basic"
    );

    return (
      <>
        <div style={styles.title}>Basic Tricks</div>
        {basicTricks.map((trick) => {
          return <TrickCard key={trick.title} data={trick} />;
        })}
      </>
    );
  };

  const CircusTrickCards = () => {
    const circusTricks = filteredTricks.filter(
      (trick) => trick.category === "Circus"
    );

    return (
      <>
        <div style={styles.title}>Circus Tricks</div>
        {circusTricks.map((trick) => {
          return <TrickCard key={trick.title} data={trick} />;
        })}
      </>
    );
  };

  const MiscTrickCards = () => {
    const miscTricks = filteredTricks.filter(
      (trick) => trick.category !== "Circus" && trick.category !== "Basic"
    );

    return (
      <>
        <div style={styles.title}>Misc Tricks</div>
        {miscTricks.map((trick) => {
          return <TrickCard key={trick.title} data={trick} />;
        })}
      </>
    );
  };

  return (
    <div style={styles.container}>
      <Search searchString={searchString} handleChange={handleChange} />
      <BasicTrickCards />
      <CircusTrickCards />
      <MiscTrickCards />
    </div>
  );
};

export default Tricks;
