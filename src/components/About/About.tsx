import React from "react";
import SkillBars from "../SkillBars/SkillBars";
import "./About.scss";
import FastIcon from "../../assets/fast-icon.png";
import DinamicIcon from "../../assets/dinamic.png";
import AdaptativeIcon from "../../assets/adaptative.png";
import ShieldIcon from "../../assets/shield.png";
import Me from "../../assets/me.png";

const About: React.FC = () => (
  <div className="About" id="about">
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#D3D3D3"
        fill-opacity="1"
        d="M0,32L1440,128L1440,320L0,320Z"
      ></path>
    </svg> */}
    <div className="AboutContainer BgSmoke Container">
      {/* <h1>¿Quién soy?</h1> */}
      <p>
        Soy un desarrollador web full stack que vive en Caracas, Venezuela.
        Enfocado en el diseño de soluciones confiables y atractivas para los
        clientes de la mano de las mejores tecnologias del momento.
      </p>
      {/* 
      <div className="SkillsIcons">
        <span className="fast">
          <img src={FastIcon} width="100%" height="100%" alt="" />
          Rápido
        </span>
        <span className="dinamic">
          <img src={DinamicIcon} width="100%" height="100%" alt="" />
          Dinamico
        </span>
        <span className="adaptative">
          <img src={AdaptativeIcon} width="100%" height="100%" alt="" />
          Responsivo
        </span>
        <span className="confiable">
          <img src={ShieldIcon} width="100%" height="100%" alt="" />
          Confiable
        </span>
      </div> */}

      {/* <div className="AboutGrid">
        <div className="MeImage">
          <img src={Me} height="auto" width="360px" alt="mi foto" />
        </div>
        <div className="Skills">
          <div>
           
           
          </div>
          <br />
          <br />
          <SkillBars />
        </div>
      </div> */}
    </div>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#D3D3D3"
        fill-opacity="1"
        d="M0,32L1440,128L1440,0L0,0Z"
      ></path>
    </svg> */}
  </div>
);

export default About;
