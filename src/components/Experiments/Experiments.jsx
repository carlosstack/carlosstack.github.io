import React, { Fragment } from "react";
import "./Experiments.scss";
import downloadrImg from "../../assets/projects/downloadr.png";
import tributeImg from "../../assets/projects/tribute.png";
import demoappImg from "../../assets/projects/demoapp.png";
import spacenewsImg from "../../assets/projects/spacenews.png";

const Experiments = () => (
  <Fragment>
    <svg
      className="TopSvg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#f1f1f1"
        fill-opacity="1"
        d="M0,96L1440,256L1440,320L0,320Z"
      ></path>
    </svg>
    <div className="Experiments">
      <h1 className="Title">Algunos pequeños experiementos</h1>
      <div className="Grid">
          <a href="https://downloadr.ninja">
              <img src={downloadrImg} alt="Downloadr"/>
          </a>
          <a href="https://simple-tribute-page--carlosehernande.repl.co/">
              <img src={tributeImg} alt="Tribute"/>
          </a>
          <a href="https://express-mongodb-demoapp.herokuapp.com/">
              <img src={demoappImg} alt="CRUD Demo App"/>
          </a>
          <a href="https://github.com/carlosstack/space-news">
              <img src={spacenewsImg} alt="Space News website template"/>
          </a>
      </div>
    </div>
    <svg
      className="BottomSvg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#f1f1f1"
        fill-opacity="1"
        d="M0,96L1440,256L1440,0L0,0Z"
      ></path>
    </svg>
  </Fragment>
);

export default Experiments;
