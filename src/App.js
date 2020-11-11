import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";





function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/home", "/react-portfolio"]}>
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
  
    
  
}

export default App;
