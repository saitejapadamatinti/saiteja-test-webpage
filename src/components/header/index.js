import React, { useState } from "react";
import "./index.css";

const Header = () => {
  const [mobilenav, setMobileNam] = useState(false);
  return (
    // <div className="header-main-div">
    //   <div><img className="header-logo" alt="logo" src="referance-images/Area Real Estate 1.png" /></div>
    //   <div className="ul-items-div">
    //     <ul className="header-ul-items">
    //       <li>Buy</li>
    //       <li>Rend</li>
    //       <li>Sell</li>
    //       <li>Sold</li>
    //       <li>About</li>
    //       <li>Contact</li>
    //       <li>
    //         <button className="header-book-now-btn">BOOK A FREE TRAIL</button>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    // mobile screen
    <div className="mobile-header-main-div">
      <div>
        <img
          className="header-logo-mobile"
          alt="logo"
          src="referance-images/Area Real Estate 1.png"
        />
      </div>
      <h4 className="header-icon-open" onClick={() => setMobileNam(true)}>Open</h4>
      {mobilenav && (
        <div className="nav-mobile-items-div">
          <h1 onClick={() => setMobileNam(false)}>Close</h1>
          <ul className="header-ul-items-mobile">
            <li>Buy</li>
            <li>Rend</li>
            <li>Sell</li>
            <li>Sold</li>
            <li>About</li>
            <li>Contact</li>

            {/* <li>
          
            <button className="header-book-now-btn">BOOK A FREE TRAIL</button>
          
          </li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
