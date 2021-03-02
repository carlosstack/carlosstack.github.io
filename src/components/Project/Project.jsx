import React from "react";
import "./Project.scss";

import {
  AngularTag,
  ReactTag,
  TypescriptTag,
  HerokuTag,
  MySqlTag,
  PythonTag,
  FirebaseTag,
} from "../Tags/Tags";

const Project = (props) => (
  <div className="MainContainer">
    {/* {props.background == "BgProject" ? (
      <svg
        className="TopSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill-opacity="1"
          d="M0,96L1440,256L1440,320L0,320Z"
        ></path>
      </svg>
    ) : (
      <div></div>
    )} */}
    <div className={"Project " + props.background}>
      <div className="Container">
        <div className={"InfoContainer " + props.direction}>
          <img className="MainImg" src={props.img} alt="" />
          <div>
            <a className="Title" href="#">
              <h1>{props.name}</h1>
            </a>
            <p className="Description">{props.description}</p>
            <h2 className="TechTitle">Tecnologia</h2>
            <div className="TechDescription">{props.tech}</div>
          </div>
        </div>
        <div className="ProjectTech">
          {props.tags?.map((item) => {
            switch (item) {
              case "react":
                return <ReactTag />;
              case "angular":
                return <AngularTag />;
              case "python":
                return <PythonTag />;
              case "typescript":
                return <TypescriptTag />;
              case "mysql":
                return <MySqlTag />;
              case "heroku":
                return <HerokuTag />;
              case "firebase":
                return <FirebaseTag />;
              default:
                break;
            }
          })}
        </div>
        <div className="ActionContainer">
          <a href={props.link} className="ActionBtn">
            {props.btnText}
          </a>
        </div>
      </div>
    </div>
    {/* {props.background == "BgProject" ? (
      <svg
        className="BottomSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill-opacity="1"
          d="M0,96L1440,256L1440,0L0,0Z"
        ></path>
      </svg>
    ) : (
      <div></div>
    )} */}
  </div>
);

export default Project;
