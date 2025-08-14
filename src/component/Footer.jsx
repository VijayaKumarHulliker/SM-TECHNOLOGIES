import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className='text-center'>About Us</h3>
          <p>"We’re a young, dynamic force with vast knowledge — building next-gen digital experiences with passion and precision. Our mission is to turn ideas into impactful digital solutions through innovative design, scalable development, and seamless user experiences"
          </p>
        </div>

        <div className="footer-section ">
          <h3 className='text-center'>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <HashLink smooth to="/#hero-section">
                Services
              </HashLink>
            </li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeiAejWb32vx2XL3bu65yoSToiarwsqaaMBJKgWoO7ARfpe6Q/viewform" target="_blank" rel="noopener noreferrer">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className='text-center'>Contact Us</h3>
          <p>📍 Pete Beedi Main Road, Chilur, Davanagere – 577230</p>
          <p><FaEnvelope />
            <a
              href="https://mail.google.com/mail/?view=cm&to=sm.technologies95@gmail.com"
              target="_blank"
            >sm.technologies95@gmail.com</a></p>
          <p><FaPhoneAlt /> <a href="tel:+917619684019">+91 76196 84019</a></p>
        </div>
      </div>

      <hr />

      <div className="footer-social">
        <h4>Follow Us On</h4>
        <div className="social-icons">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} By SM Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;