import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

const baseName = process.env.REACT_APP_BASENAME ? process.env.REACT_APP_BASENAME : "/"
ReactDOM.render((
    <BrowserRouter basename={baseName}>
        <App />
    </BrowserRouter>
), document.getElementById("root"));
registerServiceWorker();
