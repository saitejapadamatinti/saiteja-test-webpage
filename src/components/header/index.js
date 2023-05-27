import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="header-main-div">
      <div><img className="header-logo" alt="logo" src="referance-images/Area Real Estate 1.png" /></div>
      <div className="ul-items-div">
        <ul className="header-ul-items">
          <li>Buy</li>
          <li>Rend</li>
          <li>Sell</li>
          <li>Sold</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <button className="header-book-now-btn">BOOK A FREE TRAIL</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
