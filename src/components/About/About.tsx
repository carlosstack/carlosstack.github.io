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
      <h1>Sobre mi</h1>
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
      </div>

      <div className="AboutGrid">
        <div className="MeImage">
          <img src={Me} height="auto" width="360px" alt="mi foto" />
        </div>
        <div className="Skills">
          <div>
            {/* <br/>
        <h2>¿Quién soy?</h2>
        <br/> */}
            <p>
              Soy un desarrollador web full stack que vive en Caracas,
              Venezuela. Enfocado en el diseño de soluciones confiables y
              atractivas para los clientes de la mano de las mejores tecnologias
              del momento.
            </p>
          </div>
          <br />
          <br />
          <SkillBars />
        </div>
      </div>
    </div>
);

export default About;
