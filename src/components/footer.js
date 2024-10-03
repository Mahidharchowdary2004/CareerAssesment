import React from 'react';
import './footer.css'; // Keep this for footer styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p>
          Follow us on:
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> |
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a> |
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
