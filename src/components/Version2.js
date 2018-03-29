import React from "react";
import headerImage from "./Images/header_image_3.jpg";
import HomeBody from "./Version2Components/HomeBody";
import Venue from "./Version2Components/Venue";
import Travel from "./Version2Components/Travel";
import Registration from "./Version2Components/Registration";
import Abstract from "./Version2Components/Abstract";
import Agenda from "./Version2Components/Agenda";

import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";

import { Redirect, Route, Link, Switch } from "react-router-dom";

import Grid from "material-ui/Grid";

const styles = theme => ({
  container: {
    padding: "2%"
  },
  button: {
    margin: 5,
    border: "2px solid #011f4b",
    color: "#011f4b",
    "&:hover": {
      cursor: "pointer",
      background: "#011f4b",
      color: "white"
    }
  },
  link: {
    /* Get rid of stubborn underline on clicked links */
    textDecoration: "none"
  }
});

const Version2 = props =>
  <div className={props.classes.container}>
    <img src={headerImage} width="100%" alt="Header background" />

    <AppBar position="static" color="default">
      <Toolbar>
        <Grid container spacing={8}>
          <Grid item sm={2} xs={4}>
            <Link to="/version2/home" className={props.classes.link}>
              <Button className={props.classes.button}>Home</Button>
            </Link>
          </Grid>
          <Grid item sm={2} xs={4}>
            <Link to="/version2/venue" className={props.classes.link}>
              <Button className={props.classes.button}>Venue</Button>
            </Link>
          </Grid>
          <Grid item sm={2} xs={4}>
            <Link to="/version2/travel" className={props.classes.link}>
              <Button className={props.classes.button}>Travel</Button>
            </Link>
          </Grid>
          <Grid item sm={2} xs={4}>
            <Link to="/version2/registration" className={props.classes.link}>
              <Button className={props.classes.button}>Register</Button>
            </Link>
          </Grid>
          <Grid item sm={2} xs={4}>
            <Link to="/version2/abstract" className={props.classes.link}>
              <Button className={props.classes.button}>Abstract</Button>
            </Link>
          </Grid>
          <Grid item sm={2} xs={4}>
            <Link to="/version2/agenda" className={props.classes.link}>
              <Button className={props.classes.button}>Agenda</Button>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>

    <Switch>
      <Redirect from="/version2" exact to="/version2/home" />
      <Route path="/version2/home" component={HomeBody} />
      <Route path="/version2/venue" component={Venue} />
      <Route path="/version2/travel" component={Travel} />
      <Route path="/version2/registration" component={Registration} />
      <Route path="/version2/abstract" component={Abstract} />
      <Route path="/version2/agenda" component={Agenda} />
    </Switch>

    <div />
  </div>;

export default withStyles(styles)(Version2);
