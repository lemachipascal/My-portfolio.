import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the updated CSS for the Footer
import { SlEnvolope } from "react-icons/sl";
import { BsLinkedin } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h2 className="footer__title">My Portfolio</h2>
          <p>&copy; {new Date().getFullYear()} Lemachi. All Rights Reserved.</p>
        </div>
        <div className="footer__middle">
          <ul className="footer__links">
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer__right">
          <h3>Connect with Me</h3>
          <div className="footer__socials">
            <a href="https://github.com/lemachipascal" target="_blank" rel="noopener noreferrer" className="footer__social-icon">
            <VscGithubInverted />
            </a>
            <a href="https://www.linkedin.com/in/lemachi-pascal-3a8873326/" target="_blank" rel="noopener noreferrer" className="footer__social-icon">
            <BsLinkedin />
            </a>
            <a href="mailto:lemachijo421@example.com" className="footer__social-icon">
            <SlEnvolope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
