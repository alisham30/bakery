import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <h2>AshBaky</h2>
      <p>Freshly baked with love, just for you.</p>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">🔗 Instagram</a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">🔗 Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">🔗 Twitter</a>
      </div>
    </div>
    <p className="copyright">© 2025 AshBaky. All rights reserved.</p>
  </footer>
);

export default Footer;
