import React from "react";
import "./Contact.scss";

const Contact: React.FC = () => (
  <div className="ContactContainer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#1B242F"
        fill-opacity="1"
        d="M0,32L720,192L1440,32L1440,320L720,320L0,320Z"
      ></path>
    </svg>
    <div className="Contact">
      {/* <h1>Contactame</h1> */}
      <p className="ContactEmail"> <i className="fas fa-mail"></i> carlosehdr@gmail.com</p>

    </div>
  </div>
);

export default Contact;
