import React from "react";
import OnePager from "./components/OnePager";
import Version2 from "./components/Version2";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

require("typeface-roboto");

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={OnePager} />
      <Switch>
        <Route path="/version2" component={Version2} />
      </Switch>
    </div>
  </Router>;

export default App;
