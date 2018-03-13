import React, { Component } from 'react';
import OnePager from './components/OnePager';
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

const Version2 = () => (
  <div>
    <h2>Hello</h2>
  </div>
);


export default App;
