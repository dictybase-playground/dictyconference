import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

import HeaderImage from "../Images/header_image_4.jpg";

const styles = theme => ({
  container: {
    fontFamily: "roboto",
  },
  header: {
    position: "relative",
  },
  text: {
    position: "absolute",
    top: "30%",
    textalign: "center",
    color: "white",
  },
  title: {
    fontSize: "5rem",
    paddingLeft: "1px",
    backgroundColor: "rgba(0,0,0, 0.5)",
    paddingTop: "1%",
    paddingBottom: "1%",
  },
  backgroundImage: {
    filter: "brightness(80%)"
  }
});

const Top = props =>
  <div className={props.classes.container}>
    <center>
      <div className={props.classes.header}>
        <img
          src={HeaderImage}
          className={props.classes.backgroundImage}
          width="100%"
        />

        <div className={props.classes.text}>
            <h1 className={props.classes.title}>Dicty 2018</h1>
        </div>
      </div>
    </center>
    <p>Annual International Dictyostelium Conference</p>
      <p>August 12 to August 16, 2018, The Netherlands</p>
      <p>Egmond aan Zee</p>
  </div>;

export default withStyles(styles)(Top);
