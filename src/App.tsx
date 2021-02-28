import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/intro" exact>
            <Header />
          </Route>
          <Route path="/" exact>
            <Menu />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
