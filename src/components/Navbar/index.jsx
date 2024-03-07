import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import pawPrint from "../../images/paw_print_large2.svg";
import './styles.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          <img src={pawPrint} alt='paw print icon' className='navbar-logo'/>
        </Link>
        <div className='menu-icon' onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className='nav-item'>
            <Link to='/' className='nav-link' onClick={toggleMenu}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link' onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/tricks' className='nav-link' onClick={toggleMenu}>
              Tricks
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
