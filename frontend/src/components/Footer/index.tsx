import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Swayamvar</h3>
          <p>Your one-stop destination for all wedding needs. Find the perfect outfits, venues, and decorations for your special day.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bride-collection">Bride Collection</Link></li>
            <li><Link to="/groom-collection">Groom Collection</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><Link to="/decorations">Decoration</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>Wedding Street</li>
            <li>Gunupur, Odisha</li>
            <li>Phone: +91 93481 32197</li>
            <li>Email: info@swayamvar.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Swayamvar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 