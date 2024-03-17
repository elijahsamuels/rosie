import React, { useState } from "react";
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
			setSearchString(e.target.value)
	};
		
  const BasicTrickCards = () => {
    const sortedTricks = tricksData
      .sort((a, b) => a.title.localeCompare(b.title))
      .filter((trick) => trick.category === "Basic")
      .filter((trick) => trick.description.includes(searchString) || trick.title.includes(searchString));

    return (
      <>
        <div style={styles.title}>Basic Tricks</div>
        {sortedTricks.map((trick) => {
          return <TrickCard key={trick.title} data={trick} />;
        })}
      </>
    );
  };

  const CircusTrickCards = () => {
    const sortedTricks = tricksData
      .sort((a, b) => a.title.localeCompare(b.title))
      .filter((trick) => trick.category === "Circus")
			.filter((trick) => trick.description.includes(searchString) || trick.title.includes(searchString));
			
    return (
      <>
        <div style={styles.title}>Circus Tricks</div>
        {sortedTricks.map((trick) => {
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
    </div>
  );
};

export default Tricks;
