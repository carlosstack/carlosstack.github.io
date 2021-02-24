import React from "react";
// @ts-ignore
import ReactCardCarousel from "react-card-carousel";
//Certificates
import Certif1 from "../../assets/courses/certif1.png";
import Certif2 from "../../assets/courses/certif2.png";
import Certif3 from "../../assets/courses/certif3.png";
import Certif4 from "../../assets/courses/certif4.png";
import Certif5 from "../../assets/courses/certif5.png";
import Certif6 from "../../assets/courses/certif6.png";
import Certif7 from "../../assets/courses/certif7.png";

import "./Courses.scss";

const Courses = () => {
  return (
    <div className="Courses">
      <h1>Cursos y certificados</h1>
      <div className="ReactCardCarousel">
      <ReactCardCarousel autoplay={true} autoplay_speed={4000}>
        <div className="CardStyle">
          <img src={Certif1} height="350px" alt="Certif 1" />
          {/* <a href="#">Ver certificado</a> */}
        </div>
        <div className="CardStyle">
          <img src={Certif2} height="350px" alt="Certif 1" />
        </div>
        <div className="CardStyle">
          <img src={Certif3} height="350px" alt="Certif 1" />
        </div>
        <div className="CardStyle">
          <img src={Certif4} height="350px" alt="Certif 1" />
        </div>
        <div className="CardStyle">
          <img src={Certif5} height="350px" alt="Certif 1" />
        </div>
        <div className="CardStyle">
          <img src={Certif6} height="350px" alt="Certif 1" />
        </div>
        <div className="CardStyle">
          <img src={Certif7} height="350px" alt="Certif 1" />
        </div>
      </ReactCardCarousel>
      </div>
    </div>
  );
};

export default Courses;
