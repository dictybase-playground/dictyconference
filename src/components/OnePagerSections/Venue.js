import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";

import {
  Container,
  Container2,
  Container3,
  Division,
  Header,
  Title,
  SubTitle,
  Details,
  Button,
  NavBar,
  ArrowDown1,
  ArrowDown2,
  ArrowDown3
} from "../OnePageStyles";


const styles = theme => ({
  container: {
    fontFamily: "roboto",
    backgroundColor: "#011f4b",
    paddingTop: "7%",
    paddingBottom: "7%",
    paddingLeft: "6%",
    paddingRight: "6%",
    color: "white",
  },
  header: {
    position: "relative",
  },
  text: {
    position: "absolute",
    top: "30%",
    textAlign: "left",
    color: "white",
    backgroundColor: "rgba(0,0,0, 0.3)",
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingLeft: "2%",
    paddingRight: "2%",
  },
  title: {
    fontSize: "4rem",
    paddingLeft: "3px",
    fontFamily: "roboto",
    fontWeight: "lighter",
  },
  info: {
    fontSize: 18,
    fontWeight: "lighter",
  },
});

const Venue = (props) =>
  <div className={props.classes.container}>
    <center>
      <span className={props.classes.title}>Venue</span>
    </center>

    <div className={props.classes.info}>
      <p>The <b>Dictyostelium International Conference 2018</b> will take place in
      Egmond aan Zee, conveniently located about 40 kilometers from Amsterdam
      International airport Schiphol.</p>
      <p>The Hotel Zuiderduin is located close to
      the beach, offering opportunities to swim, walk and enjoy the sunset.
      The hotel has a <b>WELLNESS CENTER with Swimming pool, Whirlpool and
      saunas, sport facilities for BOWLING, SQUASH COURT and FITNESS ROOM.</b></p>
      <p>You can rent bicycles in the hotel to enjoy the village and the dunes.</p>
    </div>
  </div>;

export default withStyles(styles)(Venue);
