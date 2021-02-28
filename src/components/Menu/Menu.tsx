import React from "react";
import "./Menu.scss";
import MePhoto from "../../assets/me.jpg";
import RandomQuotes from "../RandomQuotes/RandomQuotes";
import { Link } from "react-router-dom";

const Menu: React.FC = () => (
  <div className="Menu">
    <div className="GridItem Photo">
      <Link to="/about" className="GridItemInner BorderOnHover">
        <div className="Info">
          <h1>Carlos Hernández</h1>
          <p>
           Desarrollador web full stack.
          </p>
        </div>
      </Link>
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
          <i className="fas fa-toolbox"></i>
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
        <RandomQuotes />
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
