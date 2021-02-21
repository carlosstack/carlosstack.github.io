import React from "react";
import SkillBars from "../SkillBars/SkillBars";
import "./About.scss";

const About: React.FC = () => (
  <div className="About" id="about">
    <h1>Acerca de mi</h1>
    <div>
      <br />
      <p>
        Soy un desarrollador web full stack y estudiante del último año de
        Ingeniería de Sistemas que vive en Caracas, Venezuela. Enfocado en el
        diseño de soluciones confiables y atractivas para los clientes de la
        mano de las mejores tecnologias del momento e interesado en trabajar
        junto a equipos de trabajo que incentiven la excelencia y aprendizaje
        constante.
      </p>
      <div className="Skills">
        <SkillBars />
        <div className="Divider"></div>
        <SkillBars />
      </div>
    </div>
  </div>
);

export default About;
