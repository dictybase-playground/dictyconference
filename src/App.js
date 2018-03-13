import React, { Component } from 'react';
import OnePager from './components/OnePager';
import Version2 from "./components/Version2";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={OnePager} />
      <Route path="/version2" component={Version2} />
    </div>
  </Router>
);



export default App;
