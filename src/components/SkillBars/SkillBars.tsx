import React from "react";
import "./SkillBars.scss";

const SkillBars: React.FC = () => (
  <div className="SkillBars">
    <div className="skill-bars">
      <div className="bar">
        <div className="info">
          <span>HTML</span>
        </div>
        <div className="progress-line html">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>CSS</span>
        </div>
        <div className="progress-line css">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>Typescript</span>
        </div>
        <div className="progress-line jquery">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>Angular</span>
        </div>
        <div className="progress-line python">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>React</span>
        </div>
        <div className="progress-line mysql">
          <span></span>
        </div>
      </div>
    </div>
  </div>
);

export default SkillBars;
