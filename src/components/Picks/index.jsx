import React from "react";
import { PicksData } from "./picksData.js";
import "./styles.css";

const AllPicks = () => {
  return PicksData.map((pick) => {
    return (
      <div className="pick-card" key={pick.title}>
        <div className="pick-title">{pick.title}</div>
        <a href={pick.amazonAffiliateLink} className="pick-link">
          {pick.title}
        </a>

        <img src={pick.photo} alt={pick.title} className="pick-image" />
      </div>
    );
  });
};

const Picks = () => {
  return (
    <div>
      Picks
      <div className="pick-container">
        <AllPicks />
      </div>
    </div>
  );
};

export default Picks;
