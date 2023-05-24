import React from "react";
import "./FixedBottomNav.css";

const FixedBottomNav = () => {
  return (
    <div className="fixed-bottom-nav">
      <div className="fixed-icon">
        <i class="fa-solid fa-bars"></i>
        <span>A-Z Menu</span>
      </div>
      <div className="fixed-icon">
      <i class="fa-solid fa-dice"></i>
        <span>Casino</span>
      </div>

      <div className="fixed-icon">
      <i class="fa-solid fa-0"></i>
        <span>Betslip</span>
      </div>
      <div className="fixed-icon">
      <i class="fa-solid fa-chart-simple"></i>
        <span>Check Bets</span>
      </div>
      <div className="fixed-icon">
      <i class="fa-solid fa-right-to-bracket"></i>
        <span>Login</span>
      </div>
    </div>
  );
};

export default FixedBottomNav;
