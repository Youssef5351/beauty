import React from "react";
import "./Footer.scss";
import photo4 from "../../assets - Copy/beauty.png"
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>Contact Us</h1>
          <span>
            You Can Call Us By
            01200587217
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo"><img src={photo4}/></span>
          <span className="copyright">
            © Copyright 2024 Beautify3. All Rights Reserved
          </span>
        </div>
        <div className="right">
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
