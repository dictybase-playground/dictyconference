import React, { Component } from "react";
import { travelStyles as styles } from "../OnePageStyles";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

const Agenda = (props) =>
<div className={props.classes.container}>
  <center>
    <span className={props.classes.title}>Agenda</span>
  </center>
    <div className={props.classes.info}>
      <p>Insert agenda here when it is given.</p>
    </div>
</div>;

export default withStyles(styles)(Agenda);
