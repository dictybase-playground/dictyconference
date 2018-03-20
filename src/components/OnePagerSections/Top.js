import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

import HeaderImage from "../Images/header_image_4.jpg";

const styles = theme => ({
  container: {
    fontFamily: "roboto",
    // backgroundColor: "black",
    color: "white",
    paddingBottom: "1%",
  },
  header: {
    position: "relative",
  },
  text: {
    position: "absolute",
    top: "30%",
    textAlign: "left",
    color: "white",
    backgroundColor: "rgba(0,0,0, 0.5)",
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingLeft: "2%",
    paddingRight: "2%",
  },
  title: {
    fontSize: "5rem",
    paddingLeft: "3px",
  },
  backgroundImage: {
    filter: "brightness(88%)"
  }
});

const Top = props =>
  <div className={props.classes.container}>
      <div className={props.classes.header}>
        <img
          src={HeaderImage}
          className={props.classes.backgroundImage}
          width="100%"
        />

        <div className={props.classes.text}>
            <h1 className={props.classes.title}>Dicty 2018</h1>
            <h2>Annual International Dictyostelium Conference</h2>
            <p>August 12 to August 16, 2018 at the Netherlands, Egmond aan Zee</p>
        </div>
      </div>
  </div>;

export default withStyles(styles)(Top);
