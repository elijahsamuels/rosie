import React from "react";
import { PicksData } from "./picksData.js";
import "./styles.css";

const Picks = () => {
  return (
    <div className="container">
      <header className="page-header">
        <div className="page-subtitle">RECOMMENDED GEAR</div>
        <h1 className="page-title">Rosie's Picks</h1>
      </header>

      <div className="pick-grid">
        {PicksData.map((pick) => (
          <div className="pick-card" key={pick.title}>
            <div className="pick-image-wrapper">
              <img src={pick.photo} alt={pick.title} className="pick-image" />
            </div>

            <div className="pick-title" title={pick.title}>
              {pick.title}
            </div>

            <div className="pick-footer">
              <div className="pick-meta">
                <span className="pick-category">{pick.category}</span>
              </div>
              
              <a 
                href={pick.amazonAffiliateLink} 
                className="pick-btn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Picks;
