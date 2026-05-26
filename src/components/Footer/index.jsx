import React from "react";
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { links } from './constants';
import './styles.css';

const copyrightAndCurrentYear = () => {
  const date = new Date();
  return `© ${date.getFullYear()}`;
};

const { instagram } = links;

const Footer = () => {
  return (
    <footer className='footer2'> 
      <div className="social-links">
        <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="mailto:elijahsamuels@gmail.com" aria-label="Email">
          <AiOutlineMail />
        </a>
      </div>
      <div className="footer-info">
        <span>{copyrightAndCurrentYear()}</span>
        <a href='https://www.elijahsamuels.com' target="_blank" rel="noopener noreferrer">
          Elijah Samuels
        </a>
        <span style={{ color: 'var(--border-separator)' }}>•</span>
        <span style={{ color: 'var(--text-muted)' }}>v1.0.0</span>
      </div>
    </footer>
  );
};

export default Footer;
