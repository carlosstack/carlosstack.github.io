import React from "react";
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
        {/* <span className="LogoContainer">
          <span className="NavLogo" id="NavLogo"></span>
          <span className="Logo"></span>
        </span> */}
        <a 
          onClick={() => {
            rotateLogo();
          }}
        >
          Inicio
        </a>
        <a
          onClick={() => {
            rotateLogo();
          }}
        >
          Sobre mi
        </a>
        <a
          onClick={() => {
            rotateLogo();
          }}
        >
          Mi trabajo
        </a>
        <a
          onClick={() => {
            rotateLogo();
          }}
        >
          Cursos
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
