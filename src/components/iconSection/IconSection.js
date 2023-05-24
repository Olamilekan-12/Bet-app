import React from "react";
import "./IconSection.css";

const IconSection = () => {
  return (
    <div className="icon-section">
      <div className="icon-scroll-container">
        <div className="icon-container">
          <i class="fa-solid fa-futbol"></i>
          <span>Soccer</span>
        </div>
        <div className="icon-container">
          <i class="fa-solid fa-trophy"></i>
          <span>League</span>
        </div>
        <div className="icon-container">
          <i class="fa-solid fa-clock"></i>
          <span>Live</span>
        </div>
        <div className="icon-container">
        <i class="fa-solid fa-star"></i>
          <span>Favorites</span>
        </div>
        <div className="icon-container">
          <i class="fa-solid fa-check"></i>
          <span>Check Bet</span>
        </div>
        <div className="icon-container">
          <i class="fa-solid fa-pen"></i>
          <span>Book Bet</span>
        </div>
        <div className="icon-container">
          <i class="fa-solid fa-trophy"></i>
          <span>V-League</span>
        </div>
        <div className="icon-container">
        <i class="fa-solid fa-circle-info"></i>
          <span>Info</span>
        </div>
        <div className="icon-container">
        <i class="fa-solid fa-gear"></i>
          <span>Settings</span>
        </div>
        <div className="icon-container">
        <i class="fa-solid fa-shop"></i>
          <span>Shop</span>
        </div>

      </div>
    </div>
  );
};

export default IconSection;
