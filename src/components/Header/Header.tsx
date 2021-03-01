import React from "react";
import "./Header.scss";
import PerfilImg from "../../assets/me.jpg";

const Header: React.FC = () => (
  <div className="Header">
    {/* <Particles
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
            color: "#171A21",
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
      /> */}
    <img className="PerfilImg" src={PerfilImg} alt="" />
    <h1 className="Title">Carlos Hernández</h1>
    <h2 className="SubTitle">Full Stack Developer</h2>
    <div className="SocialLinks">
      <a href="#">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="#">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </div>
);

export default Header;
