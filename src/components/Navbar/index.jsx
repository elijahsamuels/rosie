import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          Rosie
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/picks" className="nav-link" onClick={toggleMenu}>
              Picks
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tricks" className="nav-link" onClick={toggleMenu}>
              Tricks
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/media" className="nav-link" onClick={toggleMenu}>
              Media
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/why" className="nav-link" onClick={toggleMenu}>
              Ops
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
