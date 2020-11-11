import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"





function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
    
  
}

export default App;
