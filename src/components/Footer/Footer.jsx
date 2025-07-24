import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3 className="footer-title">SideKicks</h3>
          <p>
            Premium sneakers for sneakerheads and collectors. Find the latest
            drops and classic styles.
          </p>
          <div className="footer-socials">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Shop</h4>
          <ul>
            <li>All Sneakers</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Special Releases</li>
            <li>Sale</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Information</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Delivery Info</li>
            <li>Return Policy</li>
            <li>Size Guide</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Contact Us</h4>
          <p>123 Sneaker Street, Fashion District</p>
          <p>New York, NY 10001</p>
          <p>Email: info@kicksvault.com</p>
          <p>Tel: +1 (555) 123-4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 KicksVault. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
