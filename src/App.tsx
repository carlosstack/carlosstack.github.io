import React from "react";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
