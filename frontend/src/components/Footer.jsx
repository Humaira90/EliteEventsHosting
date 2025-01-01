import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        {/* Contact Information */}
        <div className="section">
          <h4>Contact Us</h4>
          <p>Email: eliteevents@gmail.com</p>
          <p>Phone: 01877766670, 01877766680</p>
          <p>Address: 453/B-1, Road no-1, Zakir Hossain Road, Chittagong</p>
        </div>

        {/* About Section */}
        <div className="section">
          <h4>About Us</h4>
          <p>
            Elite Events specializes in creating unforgettable events tailored
            to your vision.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="section">
          <h4>Follow Us</h4>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3689.8402672129037!2d91.8214439!3d22.3596594!3m2!1i1024!2i768!4f13.1!2m1!1smap!5e0!3m2!1sen!2sbd!4v1734618177841!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>&copy; 2024 Elite Events. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
