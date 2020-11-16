import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import portfolioDB from "../../React-Portfolio/src/data/portfolioDB";

import "./App.css";





function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/home", "/react-portfolio"]}>
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio portfolioDB={portfolioDB}/>
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/contact">
          <Contact />
          </Route>
      </Switch>
    </Router>
  );
  
    
  
}

export default App;
