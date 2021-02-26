import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Social">
        <a className="Link">
          <i className="fab fa-linkedin"></i>
        </a>
        {/* <a className="Link">
          <i className="fab fa-linkedin"></i>
        </a> */}
        <a className="Link">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p> Carlos Hernández <span className="bg-skyblue">©2021</span></p>
    </div>
  );
};

export default Footer;
