import React from "react";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Particles from "react-particles-js";
import Projects from "./components/Projects/Projects";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Particles
        className="particlesjs"
        height={"100vh"}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1800,
              },
            },
          },
          background: {
            color: "#222222",
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
      <Header />
      <NavBar />
      <About />
      <Projects />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
