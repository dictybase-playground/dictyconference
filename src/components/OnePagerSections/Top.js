import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

import HeaderImage from "../Images/header_image_4.jpg";

const styles = theme => ({
  background: {
    background: "#011f4b",
    }
  })

const Top = (props) =>
  <div className={props.classes.background}>
    <img src={HeaderImage} width="100%"/>
    <h1>Dicty 2018</h1>
    <h2>Annual International Dictyostelium Conference</h2>
    <p>August 12 to August 16, 2018, The Netherlands</p>
    <p>Egmond aan Zee</p>
  </div>;


export default withStyles(styles)(Top);
