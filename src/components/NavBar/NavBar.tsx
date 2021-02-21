import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

let current = 0;
let angle = [0, 90, 180, 270];

const rotateLogo = () => {
  current++;
  document.getElementById("NavLogo")!!.style.transform =
    "rotate(" + 90 * current + "deg)";
};

const NavBar: React.FC = () => (
  <div className="NavBar">
    <nav>
      <div className="NavContainer">
        <span className="LogoContainer">
          <span className="NavLogo" id="NavLogo"></span>
          <span className="Logo"></span>
        </span>
        <Link
          to="/"
          onClick={() => {
            rotateLogo();
          }}
        >
          Inicio
        </Link>
        <Link
          to="/about"
          onClick={() => {
            rotateLogo();
          }}
        >
          Sobre mi
        </Link>
        <a
          href="#about"
          onClick={() => {
            rotateLogo();
          }}
        >
          Mi trabajo
        </a>
        <a
          href="#about"
          onClick={() => {
            rotateLogo();
          }}
        >
          Experimentos
        </a>
        <a
          href="#about"
          onClick={() => {
            rotateLogo();
          }}
        >
          Contactame
        </a>
      </div>
    </nav>
  </div>
);

export default NavBar;
