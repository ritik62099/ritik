// src/Footer.jsx
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="personal-info">
          <h2>Ritik Kumar</h2>
          <p>123 Main Street, Anytown, USA</p>
          <p>Phone: +91 6209968385</p>
          <p>Email: ritik841207@gmail.com</p>
        </div>
        <div className="social-media">
          <h3>Follow Me</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/aryen841207?utm_source=qr&igsh=MXRpcHhqdXU2b3YxeA==" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ritik. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
