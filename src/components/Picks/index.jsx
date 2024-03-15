import React from "react";
import { PicksData } from "./picksData.js";
import "./styles.css";

const AllPicks = () => {
  return PicksData.map((pick) => {
    return (
      <div className="pick-container">
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
      <AllPicks />
    </div>
  );
};

export default Picks;
