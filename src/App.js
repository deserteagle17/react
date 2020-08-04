import React from "react";
import Header from "./header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Body from "./body.js";
import About from "./about.js";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/about.js" component={About} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
