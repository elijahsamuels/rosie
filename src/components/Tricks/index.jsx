import React, { useState, useMemo } from "react";
import TrickCard from "../TrickCard";
import { tricksData } from "./tricksData.js";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

const Search = ({ searchString, handleChange, count }) => {
  return (
    <div className="search-palette">
      <div className="search-field-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search tricks (e.g. roll, sleep, spin)..."
          className="search-input"
          value={searchString}
          onChange={handleChange}
        />
      </div>
      <div className="search-count">
        {count} tricks found
      </div>
    </div>
  );
};

const Tricks = () => {
  const [searchString, setSearchString] = useState("");

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const filteredTricks = useMemo(() => {
    const query = searchString.toLowerCase();
    return tricksData
      .sort((a, b) => a.title.localeCompare(b.title))
      .filter(
        (trick) =>
          (trick.description || "").toLowerCase().includes(query) ||
          (trick.title || "").toLowerCase().includes(query)
      );
  }, [searchString]);

  const basicTricks = filteredTricks.filter(
    (trick) => trick.category === "Basic"
  );

  const circusTricks = filteredTricks.filter(
    (trick) => trick.category === "Circus"
  );

  const miscTricks = filteredTricks.filter(
    (trick) => trick.category !== "Circus" && trick.category !== "Basic"
  );

  return (
    <div className="container">
      <header className="page-header">
        <div className="page-subtitle">Skills</div>
        <h1 className="page-title">Tricks & Skills</h1>
      </header>

      <div className="tricks-wrapper">
        <Search 
          searchString={searchString} 
          handleChange={handleChange} 
          count={filteredTricks.length} 
        />

        {/* Basic Tricks Section */}
        {basicTricks.length > 0 && (
          <div className="tricks-section">
            <h2 className="tricks-section-title">Basic Core Tricks</h2>
            <div className="tricks-grid">
              {basicTricks.map((trick) => (
                <TrickCard key={trick.title} data={trick} />
              ))}
            </div>
          </div>
        )}

        {/* Circus Tricks Section */}
        {circusTricks.length > 0 && (
          <div className="tricks-section">
            <h2 className="tricks-section-title">Circus & Advanced Tricks</h2>
            <div className="tricks-grid">
              {circusTricks.map((trick) => (
                <TrickCard key={trick.title} data={trick} />
              ))}
            </div>
          </div>
        )}

        {/* Misc Tricks Section */}
        {miscTricks.length > 0 && (
          <div className="tricks-section">
            <h2 className="tricks-section-title">Miscellaneous Tricks</h2>
            <div className="tricks-grid">
              {miscTricks.map((trick) => (
                <TrickCard key={trick.title} data={trick} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tricks;
