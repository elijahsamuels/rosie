import React from "react";
import { aboutRosie } from "./aboutRosie";
import "./styles.css";

const About = () => {
  return (
    <div className="container">
      <header className="page-header">
        <div className="page-subtitle">Profile</div>
        <h1 className="page-title">About Rosie</h1>
      </header>

      <div className="about-grid">
        {/* Intro Section - Full Width */}
        {aboutRosie.intro && (
          <div className="about-card span-full">
            <span className="about-card-title">Introduction</span>
            <p className="about-card-text" style={{ fontSize: '1.05rem' }}>
              {aboutRosie.intro.paragraph}
            </p>
          </div>
        )}

        {/* Breed Card */}
        {aboutRosie.breed && (
          <div className="about-card">
            <span className="about-card-title">{aboutRosie.breed.title}</span>
            {aboutRosie.breed.graphData ? (
              <div className="bar-chart-container">
                {aboutRosie.breed.graphData.map((item, index) => (
                  <div key={index} className="bar-chart-item">
                    <div className="bar-chart-label">
                      <span>{item.label}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="bar-chart-track">
                      <div 
                        className="bar-chart-fill" 
                        style={{ 
                          width: `${item.percentage}%`, 
                          backgroundColor: item.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="about-card-textstrong">{aboutRosie.breed.paragraph}</p>
            )}
          </div>
        )}

        {/* Coat Card */}
        {aboutRosie.coat && (
          <div className="about-card">
            <span className="about-card-title">{aboutRosie.coat.title}</span>
            <p className="about-card-text">{aboutRosie.coat.paragraph}</p>
          </div>
        )}

        {/* Personality Card */}
        {aboutRosie.personality && (
          <div className="about-card">
            <span className="about-card-title">{aboutRosie.personality.title}</span>
            <p className="about-card-text">{aboutRosie.personality.paragraph}</p>
          </div>
        )}

        {/* Tricks Card */}
        {aboutRosie.tricks && (
          <div className="about-card">
            <span className="about-card-title">{aboutRosie.tricks.title}</span>
            <p className="about-card-text">{aboutRosie.tricks.paragraph}</p>
          </div>
        )}

        {/* Mission Card */}
        {aboutRosie.mission && (
          <div className="about-card span-full">
            <span className="about-card-title">{aboutRosie.mission.title}</span>
            <p className="about-card-text">{aboutRosie.mission.paragraph}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
