import React from "react";
import OnePager from "./components/OnePager";
import Version2 from "./components/Version2";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

require("typeface-roboto");

const App = () =>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path="/" component={OnePager} />
      <Switch>
        <Route path="/version2" component={Version2} />
      </Switch>
    </div>
  </BrowserRouter>;

export default App;
