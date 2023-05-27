import React from "react";
import "./index.css";
import {AiFillInstagram,AiFillYoutube,AiFillFacebook,AiFillLinkedin} from 'react-icons/ai'


const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div>
          <img
            className="footer-logo"
            alt="footer-logo"
            src="referance-images/Area Real Estate 2.png"
          />
          <p className="footer-logo-description">
            Driven, passionate and focused on helping people realise their
            dreams through property. And yet, to see how far we have come since
            our launch in 2014 is extraordinary. Our goal was always to create a
            business focused on
          </p>
          <div className="social-media-icon-div">
            <AiFillInstagram className="footer-social-media-icon" />
            <AiFillFacebook className="footer-social-media-icon" />
            <AiFillLinkedin className="footer-social-media-icon" />
            <AiFillYoutube className="footer-social-media-icon" />
          </div>
        </div>
        <div>
          <h4 className="footer-links-head">Quick Links</h4>
          <ul className="footer-quick-properties-links-ul">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="footer-links-head">Properties</h4>
          <ul className="footer-quick-properties-links-ul">
            <li>Buy Homes</li>
            <li>Rent</li>
            <li>Sold</li>
            <li>Sell</li>
          </ul>
        </div>
        <div>
          <h4 className="footer-links-head">Contact Us</h4>
          <p className="footer-contact">
            Monday - Friday <br />
            ‍9:00 AM - 6:00 PM ET <br />
            <br />
            1900 N Bayshore Dr, 1A #131 Miami, FL 33132 <br />
            <br />
            <span className="footer-contact-link-contact">(305) 504-5094 <br /> info@redux.tax</span>
          </p>
        </div>
      </div>
      <div className="hr-div">
        <img className="footer-logo-icon" alt="footer-icon" src='referance-images/house-sketch-footer 1.png'/>
        <hr className="footer-hr-line" />
        <div className="footer-copy-right-div">
          <div className="footer-copy-right-container">
            <p>Copyright © Area Real Estate</p>
            <div className="footer-privacy-div">
              <p>Privacy Policy</p>
              <p>Disclaimer</p>
            </div>
          </div>
        </div>
        <hr className="footer-hr-line" />
      </div>
    </>
  );
};

export default Footer;
