import React from "react";
import "./Header.scss";
import PerfilImg from "../../assets/me.jpg";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <div>
    <Particles
      className="particlesjs"
      height={"100%"}
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1800,
            },
          },
          color: {
            value: "#d1d1d1",
          },
          line_linked: {
            color: {
              value: "#d1d1d1",
            },
            distance: 200,
          },
        },
        background: {
          color: "#111",
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
          },
        },
      }}
    />
    <header className="Header">
      <div>
        <img className="PerfilImg" src={PerfilImg} alt="" />
        <span className="HeaderTitle">Carlos Hernández</span>

        <p className="HeaderSubTitle">Desarrollador web full stack.</p>
        <Link to="/menu" className="DownBtn">
          <i className="fas fa-sign-in-alt"></i>
        </Link>
      </div>
    </header>
  </div>
);

export default Header;
