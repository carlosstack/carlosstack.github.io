import React from "react";
import { GitTag, VsCodeTag } from "../Tags/Tags";
import "./Footer.scss";


const Footer = () => (
  <div className="Footer">
   <h1>Herramientas que útilizo</h1>
   <div className="Tools">
       <GitTag />
       <VsCodeTag />
   </div>
   <p>Carlos Hernández ©2021</p>
  </div>
);

export default Footer;