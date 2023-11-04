import React from 'react';
import { FaInstagram, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="footer-section">
              <div className="footer-heading">REACH US</div>
              <p className="footer-text">
                We provide the best products at affordable prices
              </p>
              <div className="icons">
                <a href="#"><FaInstagram className="footer-icon" /></a>
                <a href="#"><FaYoutube className="footer-icon" /></a>
                <a href="#"><FaEnvelope className="footer-icon" /></a>
                <a href="#"><FaPhone className="footer-icon" /></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="footer-section">
              <div className="footer-heading">NAVIGATE</div>
              <ul className="footer-list">
                <li>Home</li>
                <li>Section 2</li>
                <li>Section 3</li>
                <li>Section 4</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="footer-section">
              <div className="footer-heading">LINKS</div>
              <ul className="footer-list">
                <li>Privacy policy</li>
                <li>Refund and cancellation policy</li>
                <li>Terms and conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <center>&copy; {new Date().getFullYear()} Foodie</center>
        <center>All rights reserved</center>
      </div>
    </footer>
  );
};

export default Footer;
