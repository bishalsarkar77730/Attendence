import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="foot-container">
        <div className="developer-info">
          <p>Developed by Bishal Sarkar</p>
          <p>Email: bishalsarkar.ml@gmail.com</p>
        </div>
        <div className="year">
          <p> developed &copy; 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
