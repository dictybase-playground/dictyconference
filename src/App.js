import React from "react";
import OnePager from "./components/OnePager";
import Version2 from "./components/Version2";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

require("typeface-roboto");


const App = () =>
    <Switch>
      <Redirect from="/" exact to="/version1" />
      <Route path="/version1" component={OnePager} />
      <Route path="/version2" component={Version2} />
    </Switch>;

export default App;
