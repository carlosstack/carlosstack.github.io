import React from "react";
import Particles from "react-particles-js";
import "./Header.scss";

const Header: React.FC = () => (
  <header className="Header">
    <div className="HeaderTitle">
      <p className="HelloText">
        Hola soy <span className="DotBlue">Carlos Hernández</span>.
      </p>
      <p className="HeaderSubTitle">Soy desarrollador web full stack.</p>
      <button className="down-btn">
        Ver mi trabajo <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  </header>
);

export default Header;
