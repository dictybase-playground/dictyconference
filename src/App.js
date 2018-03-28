import React from "react";
import OnePager from "./components/OnePager";
import Version2 from "./components/Version2";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

require("typeface-roboto");

const App = () =>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path="/" component={OnePager} />
      <Route basename="/version2" component={Version2} />
    </div>
  </BrowserRouter>;

export default App;
