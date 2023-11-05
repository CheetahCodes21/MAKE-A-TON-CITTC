import React from 'react';
import { FaInstagram, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import if you're using react-router

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-4 pb-2">
      <div className="container">
        <div className="row text-center text-md-left">
          <div className="col-md-4 col-sm-6">
            <div className="footer-section mb-3 mb-md-0">
              <h5 className="footer-heading">REACH US</h5>
              <p>We provide the best products at affordable prices</p>
              <div className="icons">
                {/* Update these links to your social media URLs */}
                <a href="https://instagram.com" className="text-white ms-2" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
                <a href="https://youtube.com" className="text-white ms-2" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
                <a href="mailto:info@example.com" className="text-white ms-2"><FaEnvelope size={24} /></a>
                <a href="tel:+123456789" className="text-white ms-2"><FaPhone size={24} /></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="footer-section mb-3 mb-md-0">
              <h5 className="footer-heading">NAVIGATE</h5>
              <ul className="list-unstyled">
                {/* Replace "#" with actual paths */}
                <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                {/* Add the rest of the navigation links */}
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="footer-section ">
              <h5 className="footer-heading">LINKS</h5>
              <ul className="list-unstyled">
                {/* Update these links to actual paths or pages */}
                <li><Link to="/privacy-policy" className="text-white text-decoration-none"> Privacy policy</Link></li>
                <li><Link to="/refund-policy" className="text-white text-decoration-none"> Refund and cancellation policy</Link></li>
                <li><Link to="/terms-conditions" className="text-white text-decoration-none"> Terms and conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
