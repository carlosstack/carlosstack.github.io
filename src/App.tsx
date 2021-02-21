import React from "react";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      <Particles className="particlesjs"
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
              color: "#111111",
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
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <NavBar />
        
      </Router>
      
    </div>
  );
}

export default App;
