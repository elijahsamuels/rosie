import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import { copyrightAndCurrentYear } from '../../utility'
// import { CONSTANTS, LINKS } from '../../constants'
import './styles.css';

const copyrightAndCurrentYear = () => {
  const date = new Date();
  return `© ${date.getFullYear()}`;
};


// const { REACT_APP_COMPANY_NAME } = process.env;
// const { facebook, twitter, instagram, linkedin } = LINKS;

const Footer = () => {
  return (
    <footer className='footer'> 
      <div className="social-links">
        {/* <a href={facebook}><FaFacebook /></a>
        <a href={twitter}><FaTwitter /></a>
        <a href={instagram}><FaInstagram /></a>
        <a href={linkedin}><FaLinkedin /></a> */}
        <a href="mailto:elijahsamuels@gmail.com"><AiOutlineMail /></a>
      </div>
      <div className="footer-info">
        <p>{copyrightAndCurrentYear()} some business name</p>
      </div>
    </footer>
  );
};

export default Footer;
