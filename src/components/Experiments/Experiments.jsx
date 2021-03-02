import React, { Fragment } from "react";
import "./Experiments.scss";
import downloadrImg from "../../assets/projects/downloadr.png";
import tributeImg from "../../assets/projects/tribute.png";
import demoappImg from "../../assets/projects/demoapp.png";
import spacenewsImg from "../../assets/projects/spacenews.png";

const Experiments = () => (
  <Fragment>
    <div className="ExperimentsContainer">
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
    </div>
  </Fragment>
);

export default Experiments;
