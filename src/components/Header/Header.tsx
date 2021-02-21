import React from "react";
import Particles from "react-particles-js";
import "./Header.scss";

const Header: React.FC = () => (
  <header className="Header">
    <div className="HeaderTitle">
      <h1>
        Hola, soy <span className="HeaderName">Carlos Hernández</span>.
      </h1>
      <h1>Desarrollador Web Full Stack.</h1>
    </div>
  </header>
);

export default Header;
