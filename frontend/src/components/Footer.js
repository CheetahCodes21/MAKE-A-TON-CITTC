import React from 'react';
import { FaInstagram, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';


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
                <a href="#" className="text-white mr-2"><FaInstagram size={24} /></a>
                <a href="#" className="text-white mr-2"><FaYoutube size={24} /></a>
                <a href="#" className="text-white mr-2"><FaEnvelope size={24} /></a>
                <a href="#" className="text-white"><FaPhone size={24} /></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="footer-section mb-3 mb-md-0">
              <h5 className="footer-heading">NAVIGATE</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">Section 2</a></li>
                <li><a href="#" className="text-white">Section 3</a></li>
                <li><a href="#" className="text-white">Section 4</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="footer-section">
              <h5 className="footer-heading">LINKS</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Privacy policy</a></li>
                <li><a href="#" className="text-white">Refund and cancellation policy</a></li>
                <li><a href="#" className="text-white">Terms and conditions</a></li>
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
