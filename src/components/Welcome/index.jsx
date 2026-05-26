import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Rosie from "../../images/Subject.png";
import "./styles.css";

const Welcome = () => {
  const navigate = useNavigate();
  const [terminalLogs, setTerminalLogs] = useState([]);

  useEffect(() => {
    const logs = [
      { text: "$ init rosie-core", delay: 100 },
      { text: "[ OK ] kernel initialized", delay: 400 },
      { text: "[ OK ] neural core: active (ChuckIt Fetch)", delay: 800 },
      { text: "[ OK ] cuteness level: 100%", delay: 1200 },
      { text: "[ OK ] energy reserve: 98%", delay: 1600 },
      { text: "$ rosie-OS ready --interactive", delay: 2000 },
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setTerminalLogs((prev) => [...prev, log.text]);
      }, log.delay);
    });
  }, []);

  return (
    <div className="container">
      <header className="page-header">
        <div className="page-subtitle">Overview</div>
        <h1 className="page-title">Rosie the Bat Dog</h1>
      </header>

      <div className="welcome-dashboard">
        {/* Cell 1: Hero Card */}
        <div className="bento-cell cell-hero">
          <div className="hero-photo-wrapper">
            <img src={Rosie} alt="Rosie" className="hero-photo" />
          </div>
          <div className="hero-details">
            <span className="status-badge">
              <span className="status-dot"></span>
              Active
            </span>
            <span className="hero-subtitle">Profile Subject</span>
            <h2 className="hero-title">Rosie</h2>
            
            <div className="spec-list">
              <div className="spec-item">
                <span className="spec-label">Breed</span>
                <span className="spec-value">ACD / Husky / Catahoula</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Coat</span>
                <span className="spec-value">Sleek Black & Brindle</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Role</span>
                <span className="spec-value">Chief Joy Officer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cell 2: Terminal Emulator */}
        <div className="bento-cell cell-terminal">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot dot-red"></div>
              <div className="terminal-dot dot-yellow"></div>
              <div className="terminal-dot dot-green"></div>
            </div>
            <div className="terminal-title">Console</div>
          </div>
          <div className="terminal-body">
            {terminalLogs.map((log, index) => {
              const isCommand = log.startsWith("$");
              const isSuccess = log.includes("[ OK ]");
              return (
                <div key={index}>
                  {isCommand ? (
                    <span>
                      <span className="terminal-prompt">rosie-os:~</span> {log.substring(2)}
                    </span>
                  ) : (
                    <span className={isSuccess ? "terminal-success" : ""}>
                      {log}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Cell 3: Mission */}
        <div className="bento-cell cell-mission">
          <div>
            <div className="card-header-mono">Mission</div>
            <h3 className="card-title-lg">Spread Joy & Positivity</h3>
            <p className="card-paragraph">
              Rosie's primary function is to spread joy and positive vibes. Whether she's brightening your Instagram feed with her playful tricks or bringing smiles to the local dog park, she remains a dedicated companion focused on the simple, happy moments in life.
            </p>
          </div>
        </div>

        {/* Cell 4: Tricks Stats Widget */}
        <div className="bento-cell cell-stats">
          <div className="stat-container">
            <div className="stat-value">20+</div>
            <div className="stat-label">Mastered Tricks</div>
          </div>
        </div>

        {/* Cell 5: Quick Links / Navigation Action */}
        <div className="bento-cell cell-quicklink">
          <div>
            <div className="card-header-mono">Explore</div>
            <h3 className="card-title-lg">Browse Rosie's World</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", marginTop: "16px" }}>
            <button className="dashboard-btn" onClick={() => navigate("/tricks")}>
              View Mastered Tricks
            </button>
            <button className="dashboard-btn dashboard-btn-alt" onClick={() => navigate("/picks")}>
              Browse Favorite Picks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
