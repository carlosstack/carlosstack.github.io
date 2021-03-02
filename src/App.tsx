import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Project from "./components/Project/Project";
import Navbar from "./components/Navbar/Navbar";

import empleioImg from "./assets/projects/empleio.png";
import altiusImg from "./assets/projects/altius.png";
import snetImg from "./assets/projects/snet.png";
import quickpriceImg from "./assets/projects/quickprice.png";
import appsImg from "./assets/projects/apps.png";

import Experiments from "./components/Experiments/Experiments";
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
        description="Una aplicacion web para encontrar y publicar empleos, enfocado hacia una segementación de mercado especifica."
        tech="emple.io usa React como framework para el Frontend, MySql como gestor de bases de datos y una api Rest en Python."
        tags={["react", "typescript", "mysql", "python", "heroku"]}
        btnText="Muy pronto!"
        link=""
      />
      <Project
        img={altiusImg}
        name="Grupo Altius"
        description="Un sitio web para una empresa distribuidora de licores a nivel nacional."
        tech="Grupo Altius está desarrollado con Angular, Python (Flask), MySQL y firebase. El proyecto comprende todo el proceso de manejo de pedidos por la empresa, asi como un panel de administrador para llevar el control del inventario, pedidos y clientes."
        tags={["angular", "typescript", "mysql", "python", "heroku"]}
        direction="Reverse"
        btnText="Ir al sitio"
        link="altiusgrupo.com"
      />
      <Project
        background={"BgProject"}
        img={snetImg}
        name="Snet"
        description="Un sitio web multifuncional que contiene un exchange de divisas, un foro y un marketplace. Pensado como red social universitaria fue un prototipo realizado para afianzary poner a prueba mis conocimientos en el framework angular."
        tech="Snet está desarrollado con Angular y Firebase"
        tags={["angular", "typescript", "firebase"]}
        btnText="Ir al sitio"
        link="https://metromarket-e7539.firebaseapp.com/app/exchange/e/(exchange:new)"
      />
      <Project
        img={quickpriceImg}
        name="Quickprice"
        description="Un comparador de precio y reviews de productos que utiliza la api de BestBuy para obtener la informacion de los productos."
        tech="Quickprice está desarrollado con Angular y firebase"
        tags={["angular", "typescript", "firebase"]}
        direction="Reverse"
        btnText="Ir al sitio"
        link="quickprice.com"
      />
      {/* <Experiments /> */}
      {/* <Apps/> */}
      <Project
        background={"BgProject"}
        img={appsImg}
        name="2 Aplicaciones Android"
        description="Dos aplicaciones android publicadas en la google play. Dos pequeños proyectos para dominar las bases del desarrollo de aplicaciones para Android."
        tech="Programadas con el Android Sdk y Android Studio."
        tags={["android"]}
        btnText="Muy pronto!"
        link=""
      />
      <Footer />
    </div>
  );
}

export default App;
