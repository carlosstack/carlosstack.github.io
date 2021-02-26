import React from "react";
import "./Menu.scss";
import MePhoto from "../../assets/me.jpg";

const Menu: React.FC = () => (
  <div className="Menu">
    <div className="GridItem Photo">
      <div className="GridItemInner BorderOnHover">
        <div className="Info">
          <h1>Carlos Hernández</h1>
          <p>
            Soy un desarrollador web full stack que vive en Caracas,
            Venezuela.
          </p>
        </div>
      </div>
    </div>
    <div className="GridItem">
      <div className="GridItemInner BorderOnHover BgViolet">
        <i className="fas fa-book"></i>
      </div>
    </div>
    <div className="tools">
      <div className="GridItem">
        <div className="GridItemInner BorderOnHover">
          <i className="fas fa-sticky-note"></i>
        </div>
      </div>
      <div className="GridItem">
        <div className="GridItemInner BorderOnHover">
          <i className="fas fa-calculator"></i>
        </div>
      </div>
      <div className="GridItem">
        <div className="GridItemInner BorderOnHover">
          <i className="fas fa-music"></i>
        </div>
      </div>
      <div className="GridItem">
        <div className="GridItemInner BorderOnHover">
          <i className="fas fa-sliders-h"></i>
        </div>
      </div>
    </div>

    <div className="GridItem">
      <div className="GridItemInner BorderOnHover BgBlue">
        <i className="fas fa-cloud-sun"></i>
      </div>
    </div>
    <div className="GridItem">
      <div className="GridItemInner BorderOnHover">
        <i className="fas fa-flask"></i>
      </div>
    </div>
    <div className="GridItem">
      <div className="GridItemInner BorderOnHover RandomQuotes">
        <h6>Ramdon quotes Machine</h6>
        <p>
          "Soy un desarrollador web full stack que vive en Caracas, Venezuela."
        </p>
      </div>
    </div>
    <div className="GridItem">
      <div className="GridItemInner BorderOnHover">
        <i className="fas fa-robot"></i>
      </div>
    </div>

    <div className="GridItem Mail">
      <div className="GridItemInner BorderOnHover">
        <i className="fas fa-briefcase"></i>
      </div>
    </div>
    <div className="GridItem">
      <div className="GridItemInner BorderOnHover">
        <i className="fab fa-linkedin-in"></i>
      </div>
    </div>
    <div className="GridItem">
      <div className="GridItemInner BorderOnHover">
        <i className="fab fa-github"></i>
      </div>
    </div>
    <div className="GridItem">
      <div className="GridItemInner BorderOnHover BgPink">
        <i className="fas fa-envelope"></i>
      </div>
    </div>
  </div>
);

export default Menu;
