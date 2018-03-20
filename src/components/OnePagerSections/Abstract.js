import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import { venueStyles as styles } from "../OnePageStyles";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";


const Abstract = (props) =>
<div className={props.classes.container}>
  <center>
    <span className={props.classes.title}>Abstract</span>
  </center>

  <div className={props.classes.info}>
    <p>Insert the abstract here when it is provided.</p>
  </div>
</div>;

export default withStyles(styles)(Abstract);
