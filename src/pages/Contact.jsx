import React from 'react';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css'; // Import the Contact page styles

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact__details">
        <div className="contact__item">
          <FaGithub size={50} />
          <h3>GitHub</h3>
          <p>
            <a href="https://github.com/lemachipascal" target="_blank" rel="noopener noreferrer">
              github.com/yourusername
            </a>
          </p>
        </div>
        <div className="contact__item">
          <FaLinkedin size={50} />
          <h3>LinkedIn</h3>
          <p>
            <a href="https://www.linkedin.com/in/lemachi-pascal-3a8873326/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/yourusername
            </a>
          </p>
        </div>
        <div className="contact__item">
          <FaPhoneAlt size={50} />
          <h3>Phone</h3>
          <p>+254 758163355</p> {/* Updated phone number */}
        </div>
        <div className="contact__item">
          <FaEnvelope size={50} />
          <h3>Email</h3>
          <p>
            <a href="mailto:yourname@example.com">yourname@example.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
