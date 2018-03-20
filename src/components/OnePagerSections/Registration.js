import React, { Component } from "react";
import { registerStyles as styles } from "../OnePageStyles";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

const Registration = (props) =>
  <div className={props.classes.container}>
    <center>
      <span className={props.classes.title}>Registration</span>
    </center>
      <div className={props.classes.info}>
        <ul>
          <li><p>To register visit this link (managed by xx)</p></li>
          <li><p>After registration to
          submit abstract visit this link (managed by organizers)</p></li>
          <li><p>Early bird
          registration ends on April 30. Regular registration on July 17</p></li>
          <li><p>Registration fees cover: meals, attendance to sessions, coffee breaks and social activities.</p></li>
        </ul>
      </div>
  </div>;

export default withStyles(styles)(Registration);
