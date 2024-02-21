import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name ">
              <i class="fi fi-rr-marker location-icon absolute-center "></i>
              <div className="location-name">Banglore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar d-flex absolute-center">
            <i className="fi fi-bs-search absolute-center search-icon m-2 "></i>
            <input type="text" size={50} placeholder="Search for restaurant, cuisine or a dish" className="search-bar"/>
          </div>
        </div>
        <div className="profile-wrapper absolute-center">
            <img width={40} className="profile-image" src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A" alt="" />
            <label htmlFor="" className="profile-name">Amol </label>
            <i className="fi fi-br-angle-small-down "></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
