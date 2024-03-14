import { FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { links } from './constants'
import './styles.css';

const copyrightAndCurrentYear = () => {
  const date = new Date();
  return `© ${date.getFullYear()}`;
};


const { instagram } = links;

const Footer = () => {
  return (
    <footer className='footer'> 
      <div className="social-links">
        <a href={instagram}><FaInstagram /></a>
        <a href="mailto:elijahsamuels@gmail.com"><AiOutlineMail /></a>
      </div>
      <div className="footer-info">
        {copyrightAndCurrentYear()} <a href='https://www.elijahsamuels.com'>Elijah Samuels</a>
      </div>
    </footer>
  );
};

export default Footer;
