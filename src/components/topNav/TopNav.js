import React from "react";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="register">
        <i class="fa-solid fa-user"></i>
        <span>Register</span>
      </div>
      <div className="logo-title">
        <h1><span>9ce</span>bet</h1>
      </div>
      <div className="login">
        <span>Login</span>
        <i class="fa-solid fa-right-to-bracket"></i>
      </div>
    </div>
  );
};

export default TopNav;
