import React from "react";
import logo from "../images/logo.png";

const Welcome = () => {
  return (
    <div className="Welcome">
        <img
          className="zoom"
          src={logo}
          alt="totoro-logo"
          onClick={() => {
            window.location.href = "./films";
          }}
        />
    </div>
  );
};

export default Welcome;
