import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Project from "./components/Project/Project";
import Navbar from "./components/Navbar/Navbar";

import notFound from "./assets/projects/notfound.png";

import empleioImg from "./assets/projects/empleio.jpg";
import altiusImg from "./assets/projects/altius.png";
import Experiments from "./components/Experiments/Experiments";
import Apps from "./components/Apps/Apps";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Project
        background={"BgProject"}
        img={empleioImg}
        name="emple.io"
        description="Un sitio web para buscar y publicar empleos."
        tech="emple.io usa React como framework para el frontend."
        tags={["react", "typescript",  "mysql", "python", "heroku"]}
        btnText="Muy pronto!"
        link=""
      />
      <Project
        img={altiusImg}
        name="Grupo Altius"
        description="Un sitio web una empresa distribuidora de licores."
        tech="Grupo Altius está desarrollado con Angular, Python (flask) y firebase"
        tags={["angular", "typescript", "mysql","python", "heroku"]}
        direction="Reverse"
        btnText="Ir al sitio"
        link="altiusgrupo.com"
      />
      <Project
        background={"BgProject"}
        img={notFound}
        name="Snet"
        description="Un sitio web multifuncional que contien un exchange de divisas, foro, marketplace."
        tech="Snet está desarrollado con Angular y firebase"
        tags={["angular", "typescript", "firebase"]}
        btnText="Ir al sitio"
        link="snet.io"
      />
      <Project
        img={notFound}
        name="Quickprice"
        description="Comparador de precio y reviews de productos."
        tech="Quickprice está desarrollado con Angular y firebase"
        tags={["angular", "typescript", "firebase"]}
        direction="Reverse"
        btnText="Ir al sitio"
        link="quickprice.com"
      />
      <Experiments />
      {/* <Apps/> */}
      <Footer />
    </div>
  );
}

export default App;
