import React, { Fragment } from "react";
import "./Apps.scss";
import floatyImg from "../../assets/projects/floaty.webp";
import calcucompraImg from "../../assets/projects/calcucompra.webp";


const Apps = () => (
  <Fragment>
    <div className="Apps">
      <h1 className="AppsTitle">He publicado 2 aplicaciones (Android sdk)</h1>
      <div className="AppsGrid">
          <a href="https://downloadr.ninja">
              <img src={floatyImg} alt="floatyImg"/>
          </a>
          <a href="https://simple-tribute-page--carlosehernande.repl.co/">
              <img src={calcucompraImg} alt="calcucompraImg"/>
          </a>
      </div>
    </div>
  </Fragment>
);

export default Apps;
