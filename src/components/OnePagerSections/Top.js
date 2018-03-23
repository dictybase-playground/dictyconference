import React from "react";
import { withStyles } from "material-ui/styles";
import HeaderImage from "../Images/header_image_4.jpg";

const styles = theme => ({
  container: {
    fontFamily: "roboto",
    color: "white",
    paddingBottom: "1%"
  },
  header: {
    position: "relative"
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
    fontFamily: "roboto",
    fontWeight: "lighter"
  },
  title: {
    fontSize: "5rem",
    paddingLeft: "3px",
    fontFamily: "roboto"
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
        alt="Header background"
        width="100%"
      />

      <div className={props.classes.text}>
        <center>
          <h1 className={props.classes.title}>Dicty 2018</h1>
          <h2>Annual International Dictyostelium Conference</h2>
          <p>
            <b>August 12 to August 16, 2018</b> at the Netherlands, Egmond aan
            Zee
          </p>
          <p>Organized by Arjan Kortholt and Peter van Haastert</p>
        </center>
      </div>
    </div>
  </div>;

export default withStyles(styles)(Top);
