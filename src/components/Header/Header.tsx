import React from "react";
import Particles from "react-particles-js";
import "./Header.scss";

const Header: React.FC = () => (
  <header className="Header">
    <div className="HeaderTitle">
      <div className="HelloText">Hola</div>
      <div>
        <span>
          Soy 
          <span className="NameText"> Carlos Hernández</span>
        </span>
        <br/>
        <div>Desarrollador Web Full Stack.</div>
      </div>
    </div>
  </header>
);

export default Header;
